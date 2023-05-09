import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { useIssue } from "../hooks";

export function TaskInfoPage() {
  const accessToken = localStorage.getItem("accessToken") as string;
  const { owner, repo, taskId } = useParams();
  const { data: issue } = useIssue(accessToken, owner, repo, taskId);

  if (!issue) return null;

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
          <Typography variant="h1">{issue.title}</Typography>
          <Box>
            <ReactMarkdown children={issue.body} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
