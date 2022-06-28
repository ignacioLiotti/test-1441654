import connectMongo from '../../utils/connectMongo';
import Socials from '../../models/SocialsSchema';

export default async function getSocial(req, res) {
  try {
    
    await connectMongo();
    const social = await Socials.findOneAndUpdate(({social: req.body.social},{post:req.body.post}),{amount:req.body.amount});
    res.json({ social });

  } 
  catch (error) {

    console.log(error);
    res.json({ error });

  }
}