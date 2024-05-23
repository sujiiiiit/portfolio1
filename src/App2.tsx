// import React, { useState } from "react";
import Tippy, { useSingleton } from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/dist/svg-arrow.css";

const Example = () => {
  const [source, target] = useSingleton();
  // const [arrow, setArrow] = useState(null);

  return (
    <div>
      <div data-popper-arrow className="hidden">
        <svg id="svg" width="16" height="6">
          <path
            className="svg-arrow"
            d="M0 6s1.796-.013 4.67-3.615C5.851.9 6.93.006 8 0c1.07-.006 2.148.887 3.343 2.385C14.233 6.005 16 6 16 6H0z"
          />
          <path
            className="svg-content"
            d="m0 7s2 0 5-4c1-1 2-2 3-2 1 0 2 1 3 2 3 4 5 4 5 4h-16z"
          />
        </svg>
      </div>
      <Tippy
        content={
          <div dangerouslySetInnerHTML={{ __html: "your_html_string_here" }} />
        }
        moveTransition="transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)"
        singleton={source}
        delay={500}
      />

      <div className="button-group">
        <Tippy
          content={
            <div dangerouslySetInnerHTML={{ __html: "<u>Tooltip 1</u>" }} />
          }
          moveTransition="transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)"
          singleton={target}
          delay={100}
        >
          <button>Button 2</button>
        </Tippy>
        <Tippy
          content="Tooltip 1"
          moveTransition="transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)"
          singleton={target}
          delay={100}
        >
          <button>Button 3</button>
        </Tippy>
        <Tippy
          content="Tooltip 1"
          moveTransition="transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)"
          singleton={target}
          delay={100}
        >
          <button>Button 4</button>
        </Tippy>
      </div>
    </div>
  );
};

export default Example;
