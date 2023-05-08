import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { useIssue } from "../hooks";

export function TaskInfoPage() {
  const accessToken = localStorage.getItem("accessToken") as string;
  const { owner, repo, taskId } = useParams();
  const { data: issue } = useIssue(accessToken, owner, repo, taskId);
  console.log("issue =", issue);

  return (
    <Box>
      <h2>task</h2>
    </Box>
  );
}
