import React from "react";
import withFetch from "./withFetch";

const MyComponent = ({ data, isLoading, error }) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return <div>{data && <pre>{JSON.stringify(data, null, 2)}</pre>}</div>;
};

export default withFetch(
  MyComponent,
  "https://jsonplaceholder.typicode.com/todos/1"
);
