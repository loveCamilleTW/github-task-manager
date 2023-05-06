import { LandingPage, CallbackPage, TaskListPage } from "./views";
import { Navigate, useRoutes } from "react-router-dom";
import "./App.css";

function App() {
  const routes = useRoutes([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/callback",
      element: <CallbackPage />,
    },
    {
      path: "/issues",
      element: (
        <RequireAccessToken>
          <TaskListPage />
        </RequireAccessToken>
      ),
    },
  ]);

  return <>{routes}</>;
}

interface RequireAccessTokenProps {
  children: React.ReactNode;
}

function RequireAccessToken(props: RequireAccessTokenProps) {
  const { children } = props;
  const accessToken = localStorage.getItem("accessToken");

  return accessToken ? (children as JSX.Element) : <Navigate to="/" />;
}

export default App;
