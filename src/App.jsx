import routes from "./components/routes";
import { UserContext } from "./components/user";
import { RouterProvider } from "react-router-dom";
import useContextStates from "./hooks/useContextStates";

function App() {
  const { menuBtn, setMenuBtn } = useContextStates();

  return (
    <UserContext.Provider value={{ menuBtn, setMenuBtn }}>
      <RouterProvider router={routes} />
    </UserContext.Provider>
  );
}

export default App;
