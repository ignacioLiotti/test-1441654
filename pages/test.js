import React from 'react'
import { useRouter } from 'next/router'


const Test = () => {

    const router = useRouter();


    const social = ['asda'];
    const getData = async () => {
    social = await fetch('/api/get', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "src": `${router.query.src}`
        })
    })
    const socialFound = await social.json();
    console.log(socialFound)
    }

    React.useEffect(() => {
        getData();
    }, [social])

    return (
        <div>{social}</div>
    )
}

export default Test