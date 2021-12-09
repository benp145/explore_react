import React, { useRef, useState } from 'react'
import { SearchResults } from '../components/SearchResults';

export const Explore = () => {
    const inputRef = useRef()
    const [queryState, setQueryState] = useState([]);
    const [keyState, setKeyState] = useState([]);

    const throttling = useRef(false)

    const handleThrottleSearch = () => {
        if (throttling.current) {
            return
        }
        if (!inputRef.current.value.trim()) {
            setQueryState([])
            setKeyState([])
        }
        throttling.current = true
        setTimeout(() => {
            throttling.current = false
            fetch(`https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&prop=extracts&exintro&explaintext&redirects=1&generator=search&gsrnamespace=0&gsrlimit=10&gsrsearch=%27${inputRef.current.value.replace(" ","_")}%27`)
                .then(async response => {
                    if (!response.ok) {
                    console.log("Something went wrong!")
                    } else {
                        const data = await response.json()
                        setQueryState(data.query.pages)
                        // setKeyState(Object.keys(data.query.pages))
                }
                })
                .catch(err => {
                    console.log(err)
                })
        }, 800)
        console.log(keyState)
    }


    return (
        <React.Fragment>
            <h1>Explore</h1>
            <hr />

            <input type="text" ref={ inputRef } onChange={handleThrottleSearch} placeholder="Search Query Here" className="form-control" />
            <hr />
           

            <ul id="search">
                {Object.keys(queryState).map(currentKey => <SearchResults p={queryState[currentKey] }/>)}
            </ul>
                



        </React.Fragment>
    )
}
