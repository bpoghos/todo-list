import TodoListItem from "./TodoListItem/TodoListItem"
import './todo-list.css'


const TodoList = () => {

  const items = [
    { text: "learn JS", important: true, id: 1},
    { text: "Drink Coffee", important: false, id: 2},
    { text: "learn React", important: true, id: 3},
    { text: "learn TypeScript", important: true, id: 4}

  ]


  const data = items.map(({ text, important, id }) => {
    return (<TodoListItem text={text} important={important} key={id} />)
  })


  return (
    <ul>
      {data}
    </ul>
  )
}

export default TodoList