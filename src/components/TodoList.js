import TodoListItem from "./TodoListItem"

const TodoList = () => {

const items = [
  {text: "learn JS", important: true},
  {text: "Drink Coffee", important: false},
  {text: "learn React", important: true},
  {text: "learn TypeScript", important: true}

]


const data = items.map(({text, important}) => {
  return (<TodoListItem text={text} important={important} />)
})


    return (
      <ul>
        {data}
      </ul>
    )
  }

export default TodoList