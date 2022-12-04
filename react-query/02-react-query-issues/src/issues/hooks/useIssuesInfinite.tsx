import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { githubApi } from "../../api/githubApi";
import { sleep } from "../../helpers/sleep";
import { Issue, State } from "../interfaces/issue";

interface getIssuesProps {
  state?: State;
  labels: string[];
  page?: number;
}
interface QueryProps {
  pageParam?: number;
  queryKey: (string | getIssuesProps)[];
}
// recuerda que con este hook useInfiniteQuery la page 1 es undefined por eso hay que usar pageParam = 1
const getIssues = async ({ pageParam = 1, queryKey }: QueryProps): Promise<Issue[]> => {
  const [, , args] = queryKey;
  const { labels, state } = args as getIssuesProps;

  await sleep(2);

  const params = new URLSearchParams();

  if (state) params.append("state", state);

  if (labels.length > 0) {
    const labelString = labels.join(",");
    params.append("labels", labelString);
  }

  params.append("page", pageParam.toString());
  params.append("per_page", "5");

  const { data } = await githubApi.get<Issue[]>("/issues", { params });
  return data;
};

interface useIssuesProps {
  state?: State;
  labels: string[];
}
export const useIssuesInfinite = ({ state, labels }: useIssuesProps) => {
  const issuesQuery = useInfiniteQuery(
    ["issues", "infinite", { state, labels }],
    //
    (data) => getIssues(data),
    {
      // useInfiniteQuery se va a ocupar de actualizar el pageParam(avanzando pues).Amazing.
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.length === 0) return;
        return pages.length + 1;
      },
    },
  );
  return {
    issuesQuery,
  };
};
