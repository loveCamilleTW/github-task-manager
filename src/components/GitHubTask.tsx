interface GitHubTaskProps {
  issue: any;
}

export function GitHubTask(props: GitHubTaskProps) {
  const { issue } = props;
  console.log(issue.repository);
  console.log(issue.repository.full_name);
  const repoName = issue.repository.full_name;
  const issueTitle = issue.title;
  const issueBody = issue.body;

  return (
    <>
      <h3>
        {repoName}/{issueTitle}
      </h3>
      <p>{issueBody}</p>
    </>
  );
}
