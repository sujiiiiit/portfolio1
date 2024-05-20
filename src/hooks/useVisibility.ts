import { useState, useEffect, useRef, MutableRefObject } from 'react';

interface VisibilityHook {
  elementRefs: MutableRefObject<(HTMLDivElement | null)[]>;
  visibilityStates: boolean[];
}

const useVisibility = (count: number): VisibilityHook => {
  const elementRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibilityStates, setVisibilityStates] = useState<boolean[]>(
    Array(count).fill(true)
  );

  useEffect(() => {
    const handleResize = () => {
      setVisibilityStates((prev) => {
        const newStates = [...prev];
        for (let i = 0; i < elementRefs.current.length; i++) {
          if (elementRefs.current[i]) {
            const rect = elementRefs.current[i]!.getBoundingClientRect();
            newStates[i] = rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
          }
        }
        return newStates;
      });
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    elementRefs.current.forEach((element, index) => {
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          setVisibilityStates((prev) => {
            const newStates = [...prev];
            newStates[index] = entry.isIntersecting;
            return newStates;
          });
        },
        {
          root: null,
          rootMargin: '0px',
          threshold: 0.1,
        }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer, index) => {
        const element = elementRefs.current[index];
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [count]);

  return { elementRefs, visibilityStates };
};

export default useVisibility;
