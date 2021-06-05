import React from 'react'
import './Pagination.css'

function Pagination({itemsPerPage, totalItems, paginate}) {
    const pageNumbers = [];

    for(let i=1;i<=Math.ceil(totalItems/itemsPerPage);i++){
        pageNumbers.push(i);
    }
    return (
        
        <div className="pagination">
                {pageNumbers.map(numbers => (
                    <li key={numbers}>
                        <a onClick={()=>paginate(numbers)} href="!#" >
                            {numbers}
                        </a>
                    </li>
                ))}
        </div>
    )
}

export default Pagination
