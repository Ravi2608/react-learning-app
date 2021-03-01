import React from 'react';
import './App.scss';
import { User } from './models/User';
import Routing from './Routing';

const userObj: User = { username: "", password: "", userId: 1, name: "", role: "" }
export const UserContext = React.createContext(userObj);

function App() {
  const user: User = { username: "Admin", password: "Password", userId: 101, name: "Ravinesh Sharma", role: "Admin" };
  return (
    <UserContext.Provider value={user}>
      <Routing />
    </UserContext.Provider>
  );
}

export default App;
