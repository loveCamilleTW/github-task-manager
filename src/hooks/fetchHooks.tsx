import { useQuery } from "react-query";
import axios from "axios";

const SERVER_URL = "http://localhost:5000";

export function useAccessToken(code: string) {
  const queryFn = () => axios.get(`${SERVER_URL}/authenticate?code=${code}`);

  return useQuery(["accessToken", code], queryFn, {
    enabled: !!code,
    select: (res) => res.data,
    refetchOnWindowFocus: false,
  });
}

export function useIssues(accessToken: string) {
  const queryFn = () =>
    axios.get("https://api.github.com/issues", {
      headers: {
        Authorization: `token ${accessToken}`,
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });

  return useQuery(["issues", accessToken], queryFn, {
    enabled: !!accessToken,
    select: (res) => res.data,
    refetchOnWindowFocus: false,
  });
}
