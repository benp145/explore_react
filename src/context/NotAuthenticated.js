import React from 'react'

export const NotAuthenticated = () => {
    return (
        <React.Fragment>
            <h1>Unauthorized</h1>
            <hr />
            <p>You must be logged in to see this page.</p>
        </React.Fragment>
    )
}
