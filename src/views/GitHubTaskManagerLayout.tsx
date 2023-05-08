import { Box, AppBar, Toolbar, Typography, Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useUser } from "../hooks";

interface GitHubTaskManagerLayout {
  children: React.ReactNode;
}

export function GitHubTaskManagerLayout(props: GitHubTaskManagerLayout) {
  const { children } = props;
  const navigate = useNavigate();

  const accessToken = localStorage.getItem("accessToken") as string;
  const { data: user } = useUser(accessToken);

  console.log("user =", user);
  if (!user) return null;

  const handleBrandClick = () => {
    navigate("/tasks");
  };

  return (
    <Box>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography
            onClick={handleBrandClick}
            sx={{
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            GitHub Task Manager
          </Typography>

          <Avatar src={user.avatar_url} />
        </Toolbar>
      </AppBar>
      {children}
    </Box>
  );
}
