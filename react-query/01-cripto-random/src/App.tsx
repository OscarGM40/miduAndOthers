import "./App.css";
import { useRandom } from "./hooks/useRandom";

export const App = () => {
  
  // requiere 1 arg pero son 3 ([cacheConfiguration],fetcher)
  const query = useRandom();
  
  return (
    <div className="App App-header">
      {query.isFetching ? <h2>Cargando</h2> : <h2>Numero aleatorio: {query.data}</h2>}
      {!query.isFetching && query.isError && <h3>{`${query.error}`}</h3>}

      <button onClick={() => query.refetch()} disabled={query.isFetching}>
        Pedir nuevo número
      </button>
    </div>
  );
};
