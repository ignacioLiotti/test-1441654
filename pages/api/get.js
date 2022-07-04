import connectMongo from '../../utils/connectMongo';
import Socials from '../../models/SocialsSchema';

export default async function getSocial(req, res) {
  try {
    
    await connectMongo();

    // const social2 = await Socials.find({src:req.body.src});

    // const { src, post, from, to } = req.query;

    const src = await Socials.aggregate([
      {
        $group: {
          // Each `_id` must be unique, so if there are multiple
          // documents with the same age, MongoDB will increment `count`.
          _id: '$src',
          count: { $sum: 1 }
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
    const posts = await Socials.aggregate([
      {
        $group: {
          // Each `_id` must be unique, so if there are multiple
          // documents with the same age, MongoDB will increment `count`.
          _id: '$post',
          count: { $sum: 1 }
        }
      }
    ]);

    res.json({ social }, { posts });



  } catch (error) {

        console.log(error);
        res.json({ error });

  }
}