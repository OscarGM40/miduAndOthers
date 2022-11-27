import axios from "axios";
import { useEffect, useState } from "react";

type TodoType = {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
};
export const useFetchTodo = () => {
  const [data, setData] = useState<TodoType[]>([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    axios
      .get<TodoType[]>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err))
      .finally(() => setIsFetching(false));
  }, []);
  
  return { data, isFetching };
};
