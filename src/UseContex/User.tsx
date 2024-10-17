import React, { useContext } from "react";
import { AppContext } from "./ContextTutorial";

function User() {
  const appContext = useContext(AppContext);

  if (!appContext) {
    return <div>Error: AppContext not provided!</div>;
  }

  const { username } = appContext;

  return (
    <div>
      <h1>User: {username}</h1>
    </div>
  );
}

export default User; // Dodaj default export
