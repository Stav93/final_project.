import { useUsersContext } from "../../context/user-context"

function UserProfile() {
  const UsersCtx = useUsersContext();

  return (
    <>
    <h1>{UsersCtx.user.name}</h1>
    </>
  )
}

export default UserProfile
