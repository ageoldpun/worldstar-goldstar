//delete
import { useEffect } from "react";

const useScript = (url = '', callback = () => {}) => {
  useEffect(() => {
    const script = document.createElement("script");

    if (url) {
      script.src = url;
      script.async = true;
      script.onload = callback
    }

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [url]);
};

export default useScript;
