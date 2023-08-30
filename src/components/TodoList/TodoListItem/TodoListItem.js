import Button from "../../Button/Button"
import './todo-list-item.css'



const TodoListItem = ({ text, important }) => {

  const style = {
    color: important ? "red" : "black"
  }

  return (
    <li style={style}>{text}
      <div className="buttons-comp">
        <Button text="del" /><Button text="imp" /><Button text="edit" />
      </div>
    </li>
  )
}

export default TodoListItem