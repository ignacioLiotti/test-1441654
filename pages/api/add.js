import connectMongo from '../../utils/connectMongo';
import Socials from '../../models/SocialsSchema';

export default async function addSocial(req, res) {
  try {

    await connectMongo();

    const social = await Socials.create(req.body);

    res.json({ social });

  } catch (error) {
      console.log(error);
      res.json({ error });
  }
}