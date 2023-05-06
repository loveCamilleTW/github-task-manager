import { Button, Box, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

export function LandingPage() {
  const handleClick = () => {
    const clientId = import.meta.env.VITE_GITHUB_CLIENT_ID;
    const scope = "repo";

    const url = "https://github.com/login/oauth/authorize";
    const params = `client_id=${clientId}&scope=${scope}`;

    window.location.assign(`${url}?${params}`);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Typography variant="h1" sx={{ textAlign: "center" }}>
        GitHub Task Manager
      </Typography>
      <Button
        startIcon={<GitHubIcon />}
        variant="contained"
        onClick={handleClick}
      >
        Login with GitHub
      </Button>
    </Box>
  );
}
