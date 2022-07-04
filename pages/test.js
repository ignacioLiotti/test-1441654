import React from 'react'

const test = () => {

    const social = await fetch('/api/get', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        }
        });


    return (
        <div>{social}</div>
    )
}

export default test