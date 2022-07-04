import React from 'react'
import { useRouter } from 'next/router'


const Test = () => {

    const router = useRouter();


    const socialFound = ['asda'];
    const getData = async () => {
    const social = await fetch('/api/get', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "src": `${router.query.src}`
        })
    })
    socialFound = await social.json();
    console.log(socialFound)
    }

    React.useEffect(() => {
        getData();
    }, [socialFound])

    return (
        <div>{socialFound}</div>
    )
}

export default Test