import { Box, Typography, Avatar } from "@mui/material";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { useIssue } from "../hooks";
import { CreateDateInfo, IssueStateChip } from "../components";

export function TaskInfoPage() {
  const accessToken = localStorage.getItem("accessToken") as string;
  const { owner, repo, taskId } = useParams();
  const { data: issue } = useIssue(accessToken, owner, repo, taskId);

  if (!issue) return null;

  const { user, created_at } = issue;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box sx={{ width: "60%" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Box
            component="header"
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "0.5rem",
            }}
          >
            <IssueStateChip state={issue.state} />
            <Box component="div">
              <CreateDateInfo createDate={new Date(created_at)} />
            </Box>
            by
            <Avatar src={user.avatar_url} />
            {user.login}
            {issue.author_association}
          </Box>
          <Typography variant="h1">{issue.title}</Typography>
          <Box>
            <ReactMarkdown children={issue.body} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
