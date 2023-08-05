import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", (event) => {
      setOnlineStatus(false);
    });
    window.addEventListener("online", (event) => {
        setOnlineStatus(true);
      });

  }, []);

  return onlStatus;
};

export default useOnlineStatus;
