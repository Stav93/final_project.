import { useUsersContext } from "../../Login/AuthContext"

function Navigation() {
  const UsersCtx = useUsersContext();
  return (
    <nav>
      <ul>
        {UsersCtx.isLoggedIn && (
          <li>
            <a href="/">My Profile</a>
          </li>
        )}
        {UsersCtx.isLoggedIn && (
          <li>
            <a href="/">Parks</a>
          </li>
        )}
        {UsersCtx.isLoggedIn && (
          <li>
            <button onClick={UsersCtx.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default Navigation