import React from 'react'
import { useRouter } from 'next/router'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const Test = () => {

    const router = useRouter();

    const socialFound = [{
        "both": {
          "src": [
            {
              "_id": "faceboook",
              "count": 7
            },
            {
                "_id": "twitter",
                "count": 12
            },
            {
            "_id": "",
            "count": 2
            }
          ],
          "posts": [
            {
              "_id": "2do post",
              "count": 2
            },
            {
              "_id": "hola",
              "count": 5
            }
          ]
        }
      }];
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
    console.log('socialFound.json',socialFound)
    }

    React.useEffect(() => {
        getData();
        console.log('useEffect',socialFound)
    }, [socialFound])

    console.log(socialFound[0]?.both)
    console.log(socialFound[0]?.both?.src)

    const data = {
        labels: socialFound[0]?.both?.src?.map(social => social._id),
        datasets: [
            {
                data: socialFound[0]?.both?.src?.map(social => social.count),
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#ffB2EB',
                ],
                hoverBackgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#ffB2EB',
                ]
            }
        ]
    };
    const options = {
        legend: {
            display: false
        }
    };
    

    return (
        <div className='flex justify-center items-center w-[15rem]'>
            <Pie data={data}/>
        </div>
    )
}

export default Test