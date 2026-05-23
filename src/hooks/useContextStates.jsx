import { useState } from "react";

function useContextStates() {
  const [menuBtn, setMenuBtn] = useState(false);

  return { menuBtn, setMenuBtn };
}

export default useContextStates;
