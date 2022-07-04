import React from 'react'


const Test = () => {
    
    const getData = async () => {
    const social = await fetch('/api/get', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    }

    React.useEffect(() => {
        getData();
    }, [])

    return (
        <div>{social}</div>
    )
}

export default Test