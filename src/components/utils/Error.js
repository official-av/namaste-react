import { useRouteError } from "react-router-dom";

const ErrorComponent = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>404: Page Not Found</h1>
      <h2>Oops! Something went wrong.</h2>
    </div>
  );
};
export default ErrorComponent;
