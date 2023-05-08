import { useState } from "react";
import { Box, Tabs, Tab } from "@mui/material";
import { useIssues } from "../hooks";
import { GitHubTask } from "../components";

const ISSUE_STATES = {
  0: "all",
  1: "open",
  2: "closed",
};

type IssueState = keyof typeof ISSUE_STATES;

export function TaskListPage() {
  const [value, setValue] = useState<IssueState>(0);
  const issueState = ISSUE_STATES[value];
  const accessToken = localStorage.getItem("accessToken") as string;
  const { data: issues } = useIssues(accessToken, issueState);

  if (!issues || issues.length === 0) {
    return <h2>No tasks</h2>;
  }

  const tasks = issues.map((issue: any) => (
    <GitHubTask key={issue.id} issue={issue} />
  ));

  const handleChange = (_event: React.SyntheticEvent, newValue: IssueState) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="All" id="1" />
            <Tab label="Open" id="2" />
            <Tab label="Closed" id="3" />
          </Tabs>
        </Box>
        <Box>{tasks}</Box>
      </Box>
    </>
  );
}
