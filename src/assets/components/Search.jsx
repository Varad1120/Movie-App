import React from "react";
import searchImg from "../search.svg"

const Search = ({searchTerm, setSearchTerm}) => {
    return (
        <div className="search">
            <div>
                <img src={searchImg} alt="search-png" />
                <input type="text" placeholder="Search through thousands of movies" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} />
            </div>
        </div>
    )
}

export default Search