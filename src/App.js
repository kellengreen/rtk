import { useReducer } from "react";

import api from "./api";

function App() {
  const [params, incParams] = useReducer(
    ({ req }) => {
      return { req: ++req };
    },
    { req: 0 }
  );
  const response = api.useSearchQuery(params);

  console.log(
    `request: ${params.req}\tisFetching: ${response.isFetching}\tisSuccess: ${response.isSuccess}`
  );

  return (
    <div>
      <button onClick={incParams}>Refresh</button>
      <pre>{JSON.stringify(response, undefined, 3)}</pre>
    </div>
  );
}

export default App;
