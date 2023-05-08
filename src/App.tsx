import { LandingPage, CallbackPage, TaskListPage, TaskInfoPage } from "./views";
import { Navigate, Outlet, useRoutes } from "react-router-dom";
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
      path: "/tasks",
      element: (
        <RequireAccessToken>
          <Outlet />
        </RequireAccessToken>
      ),
      children: [
        {
          path: "",
          element: <TaskListPage />,
        },
        {
          path: ":owner/:repo/:taskId",
          element: <TaskInfoPage />,
        },
      ],
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
