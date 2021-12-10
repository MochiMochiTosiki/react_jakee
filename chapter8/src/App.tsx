import { useEffect, useState } from "react";
import { ListItem } from "./components/ListItem";
import axios from "axios";

type User = {
  id: number;
  name: string;
  age: number;
  personalColor: string;
};

export const App = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios.get<User[]>("http://localhost:3001/users").then((res: any) => {
      setUsers(res.data);
    })
  }, []);

  return (
    <div>
      {users.map(user => (
        <ListItem id={user.id} name={user.name} age={user.age} personalColor={user.personalColor} />
      ))}
    </div>
  )
}