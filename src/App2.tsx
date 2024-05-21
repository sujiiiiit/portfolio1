import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";

export default function App2() {
  tippy('[data-tippy-content]');

  return (
    <>
      <button data-tippy-content="Tooltip content">My button</button>
    </>
  );
}
