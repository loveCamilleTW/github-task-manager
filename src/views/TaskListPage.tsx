import { useIssues } from "../hooks";

export function TaskListPage() {
  const accessToken = localStorage.getItem("accessToken") as string;
  const { data: issues } = useIssues(accessToken);
  console.log("issues = ", issues);

  return <h2>Tasks</h2>;
}
