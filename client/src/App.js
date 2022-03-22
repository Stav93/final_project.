import UserProfile from "../src/components/User/UserProfile/UserProfile"
import Header from "../src/components/UI/Header/Header"
import { useNavigate } from "react-router-dom";

function App() {
  const usersCtx =  useUsersContext()
  // const clickDontHaveUserHandler = useNavigate();

  return (
    <>
    <Header/>
    <main>
      {!usersCtx.isLoggedIn && <Login/>}
      {usersCtx.isLoggedIn && <UserProfile/>}
    </main>
  </>
  );
}

export default App;
