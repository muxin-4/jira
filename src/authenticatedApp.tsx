import { useAuth } from "context/auth-context";
import React from "react";
import { ProjectListScreen } from "screens/projectList";

export const AuthenticatedApp = () => {
  const { logout } = useAuth();
  return (
    <div>
      <button onClick={logout}></button>
      <ProjectListScreen />
    </div>
  );
};
