import { useQuery } from "react-query";
import axios from "axios";

const SERVER_URL = "http://localhost:5000";
const GITHUBAPI_URL = "https://api.github.com";

export function useAccessToken(code: string) {
  const queryFn = () => axios.get(`${SERVER_URL}/authenticate?code=${code}`);

  return useQuery(["accessToken", code], queryFn, {
    enabled: !!code,
    select: (res) => res.data,
    refetchOnWindowFocus: false,
  });
}

export function useUser(accessToken: string) {
  const queryFn = () =>
    axios.get(`${GITHUBAPI_URL}/user`, {
      headers: {
        Authorization: `token ${accessToken}`,
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });

  return useQuery(["user", accessToken], queryFn, {
    enabled: !!accessToken,
    select: (res) => res.data,
    refetchOnWindowFocus: false,
  });
}

export function useIssues(accessToken: string, state: string) {
  const queryFn = () =>
    axios.get(`${GITHUBAPI_URL}/issues?state=${state}`, {
      headers: {
        Authorization: `token ${accessToken}`,
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });

  return useQuery(["issues", state, accessToken], queryFn, {
    enabled: !!accessToken && !!state,
    select: (res) => res.data,
    refetchOnWindowFocus: false,
  });
}

export function useIssue(
  accessToken: string,
  owner: string | undefined,
  repo: string | undefined,
  taskId: string | undefined
) {
  const queryFn = () =>
    axios.get(`${GITHUBAPI_URL}/repos/${owner}/${repo}/issues/${taskId}`, {
      headers: {
        Authorization: `token ${accessToken}`,
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });

  return useQuery(["issue", owner, repo, taskId, accessToken], queryFn, {
    enabled: !!accessToken && !!owner && !!repo && !!taskId && !!accessToken,
    select: (res) => res.data,
    refetchOnWindowFocus: false,
  });
}
