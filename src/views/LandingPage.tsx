import { Button } from "@mui/material";

export function LandingPage() {
  const handleClick = () => {
    const clientId = import.meta.env.VITE_GITHUB_CLIENT_ID;
    const scope = "repo";

    const url = "https://github.com/login/oauth/authorize";
    const params = `client_id=${clientId}&scope=${scope}`;

    window.location.assign(`${url}?${params}`);
  };

  return (
    <>
      <h1>GitHub Task Manager</h1>
      <Button onClick={handleClick}>Login with GitHub</Button>
    </>
  );
}
