import React, { useRef, useEffect, useState } from 'react';

const HorizontalScrollComponent: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isContentVisible, setIsContentVisible] = useState<boolean>(true);

  useEffect(() => {
    const container = containerRef.current;
    const handleResize = () => {
      if (container) {
        setIsContentVisible(container.scrollWidth <= container.clientWidth);
      }
    };

    // Initial check
    handleResize();

    // Listen for resize events
    window.addEventListener('resize', handleResize);

    return () => {
      // Clean up the event listener
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        overflowX: 'auto',
        whiteSpace: 'nowrap',
        border: '1px solid #ccc',
        padding: '10px',
      }}
    >
      <div className='flex' style={{ }}>
        {/* Your horizontally scrollable content here */}
        {/* Make sure this content is wide enough to cause overflow */}
        {Array.from({ length: 10 }).map((_, index) => (
          <div key={index} style={{display: isContentVisible ? 'flex' : 'none' , minWidth: '200px' }}>
            Item {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalScrollComponent;
