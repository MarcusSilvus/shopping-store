import React, {useState} from "react";

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
    <div>
      <input type="text" value={searchItem} onChange={handleInputChange}/>
      {hasContent && <button onClick={handleClearBtn}>X</button>}
    </div>
  )
}

export default SearchBar