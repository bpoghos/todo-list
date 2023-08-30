import Button from "../Button/Button"
import './search.css'

const Search = () => {
  return (<div className="search-comp">
    <input type="text" placeholder="type text for search..." />
    <div>
    <Button text="Search" />
    </div>
  </div>
  )
}

export default Search