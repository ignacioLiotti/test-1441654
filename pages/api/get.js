import connectMongo from '../../utils/connectMongo';
import Socials from '../../models/SocialsSchema';

export async function getSocial(req, res) {
    
    await connectMongo();

    const src = req.body.src 
    ? await Socials.aggregate([
      {$match: { src: req.body.src } },
      {$group: {
        _id: `${req.body.src}`,
        count: { $sum: 1 }
      }}
    ]) 
    : await Socials.aggregate([{ 
      $group: {
        _id: '$src',
        count: { $sum: 1 }
      }  
    }])    
    
    const posts = req.body.src 
    ? await Socials.aggregate([
      { $match: { src: req.body.src }},
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

    const both = {src, posts}

    return both ;
}

export default async function handler(req, res) {
  try {
    const data =await getSocial(req, res)
    res.json(data)
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}