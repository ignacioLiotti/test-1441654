import connectMongo from '../../utils/connectMongo';
import Socials from '../../models/SocialsSchema';

export default async function getSocial(req, res) {
  try {
    
    await connectMongo();

    // const social2 = await Socials.find({src:req.body.src});

    // const { src, post, from, to } = req.query;

    const social = await Socials.aggregate([
      {
        $match: {
          src: req.query.src
        }
      }
      // {
      //   $lookup: {
      //     from: "projects",
      //     localField: "projectId",
      //     foreignField: "_id",
      //     as: "project",
      //   },
      // },
      // {
      //   $lookup: {
      //     from: "members",
      //     localField: "member",
      //     foreignField: "_id",
      //     as: "projectmember",
      //   },
      // },


      // {
      //   $group: {
      //     _id: "$member",
      //     records: {
      //       $push: {
      //         date: "$date",
      //         from: "$from",
      //         to: "$to",
      //         hours: "$hours",
      //         memberName: "$projectmember.name",
      //         projectName: "$project.name",
      //         recordDescription: "$description",
      //       },
      //     },
      //   },
      // },
    ]);

    res.json({ social });



  } catch (error) {

        console.log(error);
        res.json({ error });

  }
}