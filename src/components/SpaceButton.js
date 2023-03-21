import React, { useEffect, useRef } from "react";

function CustomButton({ addSpace }) {
  const ref = useRef();

  const handleKeyUp = (e) => {
    if (![1, 32].includes(e.which)) return;
    addSpace();
  };

  useEffect(() => {
    const btn = ref.current;
    if (btn) {
      btn.addEventListener("mouseup", handleKeyUp);
    }
  }, [ref]);
  
  return (
    <>
      <input ref={ref} id="spaceBtn" type="button" value="Spacja" />
    </>
  );
}

export default CustomButton;
