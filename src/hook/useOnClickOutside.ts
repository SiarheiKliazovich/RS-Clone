import { RefObject, useEffect } from "react";

const useOnClickOutside = (
  ref: RefObject<HTMLElement>,
  handler: (e: Event) => void,
  status: boolean
) => {
  useEffect(() => {
    if (status) {
      const listener = (e: Event) => {
        const target = e.target as HTMLElement;

        if (!ref.current || ref.current.contains(target)) {
          return;
        }
        handler(e);
      };

      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);

      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    }
  }, [ref, handler]);
};

export default useOnClickOutside;
