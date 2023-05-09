import { useState } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  ListItemIcon,
  Divider,
} from "@mui/material";
import Logout from "@mui/icons-material/Logout";
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

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);

  console.log("user =", user);
  if (!user) return null;

  const handleBrandClick = () => {
    navigate("/tasks");
  };

  const handleAvatarClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    handleMenuClose();
    navigate("/");
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

          <IconButton size="small" onClick={handleAvatarClick}>
            <Avatar src={user.avatar_url} />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={isMenuOpen}
            onClose={handleMenuClose}
            onClick={handleMenuClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                color: "#000",
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem>
              <p>
                {`Signed in as `}
                <strong>{user.login}</strong>
              </p>
            </MenuItem>

            <Divider />

            <MenuItem onClick={logout}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      {children}
    </Box>
  );
}
