import React from 'react'
import { useRouter } from 'next/router'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import connectMongo from '../utils/connectMongo';
import  getSocial  from './api/get';
import Socials from '../models/SocialsSchema';

ChartJS.register(ArcElement, Tooltip, Legend);

const Test = (props) => {
    
    // const router = useRouter();
    const {data} =props
    // const QueryContext = React.createContext(router.query.src);
    console.log(props)

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

    // const data = {
    //     labels: socialFound[0]?.both?.src?.map(social => social._id),
    //     datasets: [
    //         {
    //             data: socialFound[0]?.both?.src?.map(social => social.count),
    //             backgroundColor: [
    //                 '#FF6384',
    //                 '#36A2EB',
    //                 '#ffB2EB',
    //             ],
    //             hoverBackgroundColor: [
    //                 '#FF6384',
    //                 '#36A2EB',
    //                 '#ffB2EB',
    //             ]
    //         }
    //     ]
    // };
    // const options = {
    //     legend: {
    //         display: false
    //     }
    // };
    

    return (
        <div className='flex justify-center items-center w-[15rem]'>
            {/* <Pie data={data}/> */}
        </div>
    )
}

export default Test

export async function getServerSideProps( context ) {
    const { query }= context

    console.log(query)
    
    
    await connectMongo();

    const src = query 
    ? await Socials.aggregate([
      {$match: { src: query  } },
      {$group: {
        _id: `${query }`,
        count: { $sum: 1 }
      }}
    ]) 
    : await Socials.aggregate([{ 
      $group: {
        _id: '$src',
        count: { $sum: 1 }
      }  
    }])    
    
    const posts = query  
    ? await Socials.aggregate([
      { $match: { src: query  }},
      {$group: {
        _id: '$post',
        count: { $sum: 1 }
      }}
    ])
    : await Socials.aggregate([{ 
      $group: {
        _id: '$post',
        count: { $sum: 1 }
      }
     }]) 

    console.log(src,posts)
     
    const both = {src, posts}


     return { props:  { both } }
    }

// export async function getServerSideProps(context) {

//     const {params,req,res,query}=context;

//     console.log(query)

//     // const router = useRouter();

//     // await connectMongo();

//     // const src = router.query.src 
//     // ? await Socials.aggregate([
//     //   {$match: { src: router.query.src  } },
//     //   {$group: {
//     //     _id: `${router.query.src }`,
//     //     count: { $sum: 1 }
//     //   }}
//     // ]) 
//     // : await Socials.aggregate([{ 
//     //   $group: {
//     //     _id: '$src',
//     //     count: { $sum: 1 }
//     //   }  
//     // }])    
    
//     // const posts = router.query.src  
//     // ? await Socials.aggregate([
//     //   { $match: { src: router.query.src  }},
//     //   {$group: {
//     //     _id: '$post',
//     //     count: { $sum: 1 }
//     //   }}
//     // ])
//     // : await Socials.aggregate([{ 
//     //   $group: {
//     //     _id: '$post',
//     //     count: { $sum: 1 }
//     //   }
//     //  }]) 

//     // const both = {src, posts}
  
//     return { props: { query } }
//   }