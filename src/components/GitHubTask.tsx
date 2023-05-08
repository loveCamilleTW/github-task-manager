import { Box, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { TaskStateIcon, CreateDateInfo } from "./";

interface GitHubTaskProps {
  issue: any;
}

export function GitHubTask(props: GitHubTaskProps) {
  const { issue } = props;

  const {
    state,
    user,
    repository: repo,
    title,
    body,
    created_at,
    number,
  } = issue;

  return (
    <Box
      sx={{
        display: "flex",
        columnGap: "0.25rem",
        padding: "0.5rem",
      }}
    >
      <TaskStateIcon state={state} />
      <div>
        <Link
          href={repo.html_url}
          target="_blank"
          rel="noopener"
          underline="none"
          sx={{ color: "#656d76", "&:hover": { color: "#0969da" } }}
        >
          {repo.full_name}
        </Link>{" "}
        <Link
          component={RouterLink}
          to={`/tasks/${repo.owner.login}/${repo.name}/${number}`}
          underline="none"
          sx={{ color: "#000", "&:hover": { color: "#0969da" } }}
        >
          {title}
        </Link>
        <Box sx={{ color: "#656d76", fontSize: "0.5rem" }}>
          {`#${number}`} <CreateDateInfo createDate={new Date(created_at)} /> by{" "}
          <Link
            href={user.html_url}
            target="_blank"
            rel="noopener"
            underline="none"
            sx={{ color: "#656d76", "&:hover": { color: "#0969da" } }}
          >
            {user.login}
          </Link>
        </Box>
      </div>
    </Box>
  );
}
