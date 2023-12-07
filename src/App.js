import { useState } from "react";

import api from "./api";

export default function App() {
  const [params, setParams] = useState({ req: 0 });
  const response = api.useSearchQuery(params);

  console.log(
    [
      `request: ${params.req.toString().padStart(3, "0")}`,
      `isFetching: ${response.isFetching.toString().padEnd(5)}`,
      `isSuccess: ${response.isSuccess.toString().padEnd(5)}`,
      `data: ${JSON.stringify(response.data)}`,
    ].join("  ")
  );

  return (
    <div>
      <button
        disabled={response.isFetching}
        onClick={() => setParams({ req: params.req + 1 })}
      >
        Refresh
      </button>
      <pre>{JSON.stringify(response, undefined, 3)}</pre>
    </div>
  );
}
