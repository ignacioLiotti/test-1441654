import React from 'react'
import { useRouter } from 'next/router'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import  getSocial  from './api/get';

ChartJS.register(ArcElement, Tooltip, Legend);

const Test = ({socialFound}) => {

    const router = useRouter();

    // const getData = async () => {
    // const social = await fetch('https://test-1441654-jsrkpjody-ignacioliotti.vercel.app/api/get', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       "src": `${router.query.src}`
    //     })
    // })
    // socialFound = await social.json();
    // setSocialFound(socialFound);
    // console.log('socialFound.json',socialFound)
    // }

    // console.log(socialFound[0]?.both)
    // console.log(socialFound[0]?.both?.src)

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

export async function getServerSideProps() {

    // Fetch data from external API
    const res = await getSocial();
    const data = await res.json()
  
    // Pass data to the page via props
    return { props: { data } }
  }