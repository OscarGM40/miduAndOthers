import { useQuery } from "@tanstack/react-query";
import { githubApi } from "../../api/githubApi";
import { sleep } from "../../helpers/sleep";
import { Issue, State } from "../interfaces/issue";

interface useIssuesProps {
  state?: State;
  labels: string[];
}
// opcional despues de los obligatorios
const getIssues = async (labels: string[], state?: State): Promise<Issue[]> => {
  await sleep(2);

  const params = new URLSearchParams();

  if (state) params.append("state", state);

  if(labels.length > 0) {
    const labelString = labels.join(',');
    params.append("labels", labelString);
  }

  params.append('page','1')
  params.append('per_page','5')

  const { data } = await githubApi.get<Issue[]>("/issues", { params });
  return data;
};

export const useIssues = ({ state, labels }: useIssuesProps) => {
  // cuando el orden de los factores no importe debo usar un objeto
  // react-query va a saber cuando una propiedad del objeto cambie y cuando no
  const issuesQuery = useQuery(["issues", { state, labels }], () => getIssues(labels, state));
  return { issuesQuery };
};
