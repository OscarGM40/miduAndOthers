import { useQuery } from "@tanstack/react-query";
import { githubApi } from "../../api/githubApi";
import { sleep } from "../../helpers/sleep";
import { Issue } from "../interfaces/issue";

export const getIssueInfo = async (issueNumber: number): Promise<Issue> => {
  await  sleep(2);
  return (await githubApi.get(`/issues/${issueNumber}`)).data;
};

export const getIssueComments = async (issueNumber: number): Promise<Issue[]> => {
  await sleep(3);
  return (await githubApi.get(`/issues/${issueNumber}/comments`)).data;
};

export const useIssue = (issueNumber: number) => {
  const issueQuery = useQuery(["issue", issueNumber], () => getIssueInfo(issueNumber), {
    refetchOnWindowFocus: false,
  });

  const commentsQuery = useQuery(
    ["issue", issueNumber, "comments"],
    () => getIssueComments(issueNumber),
    {
      refetchOnWindowFocus: false,
    },
  );
  return {
    issueQuery,
    commentsQuery,
  };
};
