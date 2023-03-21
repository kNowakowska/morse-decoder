import React, { useEffect, useRef } from "react";

function CustomButton({ onClick }) {
  const pressed = {};
  const ref = useRef();

  const handleKeyUp = (e) => {
    if (!pressed[e.which]) return;
    var duration = (e.timeStamp - pressed[e.which]) / 1000;
    onClick(duration);

    pressed[e.which] = 0;
  };

  const handleKeyDown = (e) => {
    if (e.repeat) return;
    // 1 - mouse, 32 - space
    if (![1, 32].includes(e.which)) return;
    pressed[e.which] = e.timeStamp;
  };
  useEffect(() => {
    const btn = ref.current;
    if (btn) {
      document.addEventListener("keyup", handleKeyUp);
      document.addEventListener("keydown", handleKeyDown);
      btn.addEventListener("mouseup", handleKeyUp);
      btn.addEventListener("mousedown", handleKeyDown);
    }

    return () => {
      if (btn) {
        document.removeEventListener("keyup", handleKeyUp);
        document.removeEventListener("keydown", handleKeyDown);
        btn.removeEventListener("mousedown", handleKeyDown);
        btn.removeEventListener("mouseup", handleKeyUp);
      }
    };
  }, [ref]);

  return (
    <>
      <input ref={ref} id="btn" type="button" value="Click!" />
    </>
  );
}

export default CustomButton;
