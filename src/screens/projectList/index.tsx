import React, { useState, useEffect } from "react";
import { cleanObject, useMount, useDebounce } from "utils";
import { List } from "./list";
import { SearchPanel } from "./searchPanel";
import * as qs from "qs";

const apiUrl = process.env.REACT_APP_API_URL;

export const ProjectListScreen = () => {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  const [list, setList] = useState([]);
  const [users, setUsers] = useState([]);

  const debouncedParam = useDebounce(param, 2000);

  useEffect(() => {
    // fetch(`${apiUrl}/projects?name=${param.name}&personId=${param.personId}`).then(async response => {
    fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(param))}`).then(
      async (response) => {
        if (response.ok) {
          // console.log('projects', await response.json());
          setList(await response.json());
        }
      }
    );
  }, [debouncedParam]);

  useMount(() => {
    fetch(`${apiUrl}/users`).then(async (response) => {
      if (response.ok) {
        // console.log('users', await response.json());
        setUsers(await response.json());
      }
    });
  });

  return (
    <div>
      <SearchPanel users={users} param={param} setParam={setParam} />
      <List users={users} list={list} />
    </div>
  );
};
