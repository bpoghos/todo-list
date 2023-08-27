

const UserListItems = ({ name, age, status }) => {
    const style = {
        color: status ? "green" : "blue"
      }

    return (<div>
         <li style={style}>{name}{age}</li>
    </div>
    )
  }
  
  export default UserListItems