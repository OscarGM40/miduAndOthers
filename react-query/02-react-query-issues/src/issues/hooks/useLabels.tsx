import { useQuery } from "@tanstack/react-query";
import { githubApi } from "../../api/githubApi";
import { sleep } from "../../helpers/sleep";
import { Label } from "../interfaces/label";

const getLabels = async (): Promise<Label[]> => {
  await sleep(2);
  console.log(
    (
      await githubApi.get<Label[]>("/labels", {
        headers: {
          Authorization: null,
        },
      })
    ).data,
  );
  return (
    await githubApi.get<Label[]>("/labels", {
      headers: {
        Authorization: null,
      },
    })
  ).data;
};

export const useLabels = () => {
  const labelsQuery = useQuery(["labels"], getLabels, {
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60, // 1 hora
    // el placeholderData tiene que ser un objeto que luzca de tipo Label
    // me servirá para pre-mostrar cierta información mientras se da el fetching
    // initialData es muy parecido,pero no es solo para el fetching,sino que se queda despues,probablemente no es lo que quiera casi nunca
    placeholderData: [
      {
        id: 791921801,
        node_id: "MDU6TGFiZWw3OTE5MjE4MDE=",
        url: "https://api.github.com/repos/facebook/react/labels/%E2%9D%A4%EF%B8%8F",
        name: "❤️",
        color: "ffffff",
        default: false,
        description: "",
      },
      {
        id: 710573595,
        node_id: "MDU6TGFiZWw3MTA1NzM1OTU=",
        url: "https://api.github.com/repos/facebook/react/labels/Component:%20Developer%20Tools",
        name: "Component: Developer Tools",
        color: "fbca04",
        default: false,
        description: "",
      },
    ],
  });
  return { labelsQuery };
};
