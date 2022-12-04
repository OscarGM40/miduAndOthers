import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { githubApi } from "../../api/githubApi";
import { sleep } from "../../helpers/sleep";
import { Issue, State } from "../interfaces/issue";

interface getIssuesProps {
  state?: State;
  labels: string[];
  page?: number;
}
// opcional despues de los obligatorios
const getIssues = async ({ labels, state, page = 1 }: getIssuesProps): Promise<Issue[]> => {
  await sleep(2);

  const params = new URLSearchParams();

  if (state) params.append("state", state);

  if (labels.length > 0) {
    const labelString = labels.join(",");
    params.append("labels", labelString);
  }

  params.append("page", page.toString());
  params.append("per_page", "5");

  const { data } = await githubApi.get<Issue[]>("/issues", { params });
  return data;
};

interface useIssuesProps {
  state?: State;
  labels: string[];
}
export const useIssues = ({ state, labels }: useIssuesProps) => {
  const [page, setPage] = useState(1);

  // si cambiamos a open | close | all regresamos a la pagina 1
  useEffect(() => {
    setPage(1);
  }, [state, labels]);

  // cuando el orden de los factores no importe debo usar un objeto
  // react-query va a saber cuando una propiedad del objeto cambie y cuando no
  const issuesQuery = useQuery(["issues", { state, labels, page }], () =>
    getIssues({ labels, state, page }),
  );

  const nextPage = () => {
    // si no hay más data trae un arreglo vacio,no queremos incrementar nada en ese caso
    if (issuesQuery.data?.length === 0) return;
    setPage((prev) => prev + 1);
    // recuerda que no es necesario relanzar la peticion ya que page cambia y dispara todo de nuevo react-query
  };

  const prevPage = () => {
    // esta vez no es un arreglo vacio la condicion sino que estemos en una pagina mayor que 1
    if (page > 1) setPage((prev) => prev - 1);
  };
  return {
    issuesQuery,
    // Getters
    page: issuesQuery.isLoading ? "Loading..." : page,
    // Setters
    nextPage,
    prevPage,
  };
};
