import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Rate from '../Rate'

function FilterBar( { setSearch, setSearchRate, searchRate } ) {

    return (
        <div>
        <nav>
            <div className="logo">
            <img className="logo" src="/logo.png"  alt="" />
             </div>
             <div className="box">
            <form name="search">
            <input  type="text" 
                    className="input" 
                    onChange={(e) => setSearch(e.target.value)}
                    />
            </form>
            <SearchIcon className="i"/>
           </div>
       
           <Rate setSearchRate={setSearchRate} rating={searchRate} />
        </nav>
        </div>
    )
}

export default FilterBar
