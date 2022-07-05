import connectMongo from '../../utils/connectMongo';
import Socials from '../../models/SocialsSchema';

export default async function getSocial(req, res) {
  try {
    
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

    res.json({ both });

  } catch (error) {
        console.log(error);
        res.json({ error });
  }
}