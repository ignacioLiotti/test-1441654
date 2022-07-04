import React from 'react'


const Test = () => {
    const social = ['asda'];
    const getData = async () => {
    social = await fetch('/api/get', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "src": `${router.query.src}`
        })
    })
    console.log(social)
    }

    React.useEffect(() => {
        getData();
        console.log(social)

    }, [social])

    return (
        <div>{social}</div>
    )
}

export default Test