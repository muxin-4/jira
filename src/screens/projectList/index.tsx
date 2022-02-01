import React, { useState, useEffect } from "react";
import { cleanObject, useMount, useDebounce } from "utils";
import { useHttp } from "utils/http";
import { List } from "./list";
import { SearchPanel } from "./searchPanel";
import * as qs from "qs";

const apiUrl = process.env.REACT_APP_API_URL;

export const ProjectListScreen = () => {
  interface T {
    name: string;
    personId: string;
  }
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  const [list, setList] = useState([]);
  const [users, setUsers] = useState([]);
  const client = useHttp();

  const debouncedParam = useDebounce(param, 2000);

  useEffect(() => {
    client("projects", {
      data: cleanObject(debouncedParam),
    }).then(setList);
  }, [debouncedParam]);

  useMount(() => {
    client("users").then(setUsers);
  });

  return (
    <div>
      <SearchPanel users={users} param={param} setParam={setParam} />
      <List users={users} list={list} />
    </div>
  );
};
