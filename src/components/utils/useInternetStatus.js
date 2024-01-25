import { useEffect, useState } from "react";

const useInternetStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.connection);

  const connectionStatusChangeHandler = () =>
    setIsOnline(window.navigator.onLine);

  useEffect(() => {
    // add event listener for connection change - run only once
    navigator.connection.addEventListener(
      "change",
      connectionStatusChangeHandler
    );

    // remove event listener on destory
    return () => window.removeEventListener("online", arguments.callee);
  }, []);

  return { isOnline };
};

export default useInternetStatus;
