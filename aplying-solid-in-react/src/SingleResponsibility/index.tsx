import { useFetchTodo } from "./useFetchTodo";


const TodoList = () => {
const { data, isFetching } = useFetchTodo()

  if (isFetching) {
    return <p>Loading...</p>;
  }
  return (
    <ul>
      {data.map((todo) => {
        return (
          <li key={todo.id}>
            <span>{todo.id}</span>
            <span>{todo.title}</span>
          </li>
        );
      })}
    </ul>
  );
};
export default TodoList;
