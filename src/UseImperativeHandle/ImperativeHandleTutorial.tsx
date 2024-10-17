import React, { useRef } from "react";
import Button from "./Button";

function ImperativeHandle() {
  const buttonRef = useRef<{ alterToggle: () => void } | null>(null);

  return (
    <div>
      <button
        onClick={() => {
          if (buttonRef.current) {
            buttonRef.current.alterToggle();
          }
        }}
      >
        Button From Parent
      </button>
      <Button ref={buttonRef} />
    </div>
  );
}

export default ImperativeHandle;
