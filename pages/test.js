import React from 'react'


const Test = () => {
    const social = ['asda'];
    const getData = async () => {
    social = await fetch('/api/get', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    console.log(social)
    }

    React.useEffect(() => {
        getData();
        console.log(social)

    }, [])

    return (
        <div>{social}</div>
    )
}

export default Test