import React from 'react'

export const SearchResults = (props) => {
    const p = props.p
    
    return (
        <li className="list-group-item">
            <a href={`https://en.wikipedia.org/wiki/${p.title.replace(" ", "_")}`} >{p.title}</a>
            <p>{p.extract }</p>
        </li>
    )
}
