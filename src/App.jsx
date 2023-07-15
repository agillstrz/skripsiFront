import { createContext, useState } from "react";
import "./App.css";
import Index from "./routers/Index";
export const UserContext = createContext({});
function App() {
  const [user, setUser] = useState([]);
  return (
    <>
      <UserContext.Provider value={{ setUser, user }}>
        <Index />
      </UserContext.Provider>
    </>
  );
}

export default App;
