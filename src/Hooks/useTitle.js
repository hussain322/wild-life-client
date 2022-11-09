import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title}- Wild Life Photography`;
  }, [title]);
};

export default useTitle;
