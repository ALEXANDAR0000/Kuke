import React, { useEffect } from "react";

type ChildProps = {
  returnComment: (name: string) => React.ReactNode;
};

function Child({ returnComment }: ChildProps) {
  useEffect(() => {
    console.log("FUNCTION WAS CALLED");
  }, [returnComment]);

  return <div>{returnComment("Pedro")}</div>;
}

export default Child;
