import React, {useState} from "react";
import "./SearchBar.css"

const SearchBar = () => {

  const [searchItem, setItem] = useState("")

  const handleInputChange = (event) => {
    setItem(event.target.value)
  }

  const handleClearBtn = () => {
    setItem("")
  }

  const hasContent = searchItem.length > 0

  return (
    <div className="search-bar">
      <input type="text" value={searchItem} onChange={handleInputChange} placeholder="Search Products"/>
      {hasContent && <button onClick={handleClearBtn}>x</button>}
    </div>
  )
}

export default SearchBar