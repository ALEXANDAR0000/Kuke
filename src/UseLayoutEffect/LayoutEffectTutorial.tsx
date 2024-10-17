import { useLayoutEffect, useEffect, useRef } from "react";

function LayoutEffectTutorial() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useLayoutEffect(() => {
    if (inputRef.current) {
      console.log(inputRef.current.value);
    }
  }, []);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = "HELLO";
    }
  }, []);

  return (
    <div className="App">
      <input ref={inputRef} defaultValue="PEDRO" style={{ width: 400, height: 60 }} />
    </div>
  );
}

export default LayoutEffectTutorial;
