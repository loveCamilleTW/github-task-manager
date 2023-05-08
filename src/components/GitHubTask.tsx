import { Box, Link } from "@mui/material";
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
      }}
    >
      <TaskStateIcon state={state} />
      <Link href={repo.html_url} target="_blank" rel="noopener">
        {repo.full_name}
      </Link>
      <Link>{title}</Link>

      <span>
        {`#${number}`} <CreateDateInfo createDate={new Date(created_at)} /> by{" "}
        {user.login}
      </span>
    </Box>
  );
}
