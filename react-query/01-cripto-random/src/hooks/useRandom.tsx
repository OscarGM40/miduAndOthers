import { useQuery } from "@tanstack/react-query";

// si no exporto la funcion queda privada a este archivo,interezante
const getRandomNumberFromApi = async (): Promise<number> => {
  const res = await fetch(
    `https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new`,
  );
  const numberString = await res.text();
  // throw new Error("auxilio!!");
  return +numberString;
};

export const useRandom = () => {
  const query = useQuery(["randomNumber"], getRandomNumberFromApi, {
    retry: false,
    refetchInterval: 5000,
  });

  return query;
};
