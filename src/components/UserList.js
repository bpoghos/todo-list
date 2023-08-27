import UserListItems from "./UserListItems"

const UserList = ({ users }) => {

    const userData = users.map(({name, age, status}) => {
        return (<UserListItems name={name} age={age} status={status} />)
    })

    return (<div>
        <ul>
        {userData}
        </ul>
    </div>
    )
  }
  
  export default UserList