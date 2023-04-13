import { useState } from "react";

import api from "./api";

export default function App() {
  const [params, setParams] = useState({ req: 0 });
  const response = api.useSearchQuery(params);

  console.log(
    `request: ${params.req}\tisFetching: ${response.isFetching}\tisSuccess: ${response.isSuccess}`
  );

  return (
    <div>
      <button onClick={() => setParams({ req: ++params.req })}>Refresh</button>
      <pre>{JSON.stringify(response, undefined, 3)}</pre>
    </div>
  );
}
