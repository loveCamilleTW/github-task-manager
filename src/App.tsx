import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { useAccessToken, useIssues } from "./hooks";

function App() {
  const [code, setCode] = useState("");
  const { data: accessToken } = useAccessToken(code);
  const { data: issues } = useIssues(accessToken);
  console.log("issues = ", issues);

  const handleClick = () => {
    const clientId = import.meta.env.VITE_GITHUB_CLIENT_ID;
    const scope = "repo";

    const url = "https://github.com/login/oauth/authorize";
    const params = `client_id=${clientId}&scope=${scope}`;

    window.location.assign(`${url}?${params}`);
  };

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    setCode(urlParams.get("code") ?? "");
  }, []);

  return (
    <>
      <h1>Vite + React</h1>
      <Button onClick={handleClick}>Login with GitHub</Button>
    </>
  );
}

export default App;
