import React from 'react'
import './Search.css'
import SearchIcon from './search.svg'

const SearchBar = ({ searchValue, setSearchValue, handleSearch }) => {
  return (
    <div className="search">
      <input
        placeholder="Search City"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <img src={SearchIcon} alt="search" onClick={handleSearch} />
    </div>
  )
}

export default SearchBar
