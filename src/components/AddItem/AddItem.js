import Button from "../Button/Button"
import './add-item.css'

const AddItem = () => {
    return (<div className="add-item">
        <input type="text" placeholder="Add your Todo"></input>
        <div>
        <Button text="Add Item"/>
        </div>
        </div>
    )
}

export default AddItem