import { useData } from "./useFetch";

type ResponseType = {
  id: number;
  title: string;
};

const fetcherFromApi = async (): Promise<ResponseType[]> => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const res = await fetch(url);
  return res.json();
};

const Todo = () => {
  const { data, error } = useData<ResponseType[]>({ key: "/todos", fetcher: fetcherFromApi });

  if (!data && !error) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      {data?.map((todo: any, idx: number) => {
        return (
          <li key={idx}>
            <span>{todo.it}</span>
            <span>{todo.title}</span>
          </li>
        );
      })}
    </ul>
  );
};
export default Todo;
