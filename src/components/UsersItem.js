

const UsersItem = ({ user }) => {
    const { name, age, status } = user


    return (<div>
        <li style={{ color: status ? "green" : "blue" }}>Name: {name}, Age: {age}</li>
    </div>
    )
}

export default UsersItem