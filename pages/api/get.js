import connectMongo from '../../utils/connectMongo';
import Socials from '../../models/SocialsSchema';

export default async function getSocial(req, res) {
  try {
    
    await connectMongo();

    // const social2 = await Socials.find({src:req.body.src});
    const src = req.body.src 
    ? await Socials.aggregate([{ 
      $match: { src: req.body.src },
      $group: {
        _id: `${req.body.src}`,
        count: { $sum: 1 }
      }
     }])
    : await Socials.aggregate([{ 
      $group: {
        _id: '$src',
        count: { $sum: 1 }
      }
     }]) 
    

    // const { src, post, from, to } = req.query;

    // const src = await Socials.aggregate([

    //   // if req.body.src truthy then match src, else do not match anything


    //   { $match: { src: req.body.src } },
      
    //   {
    //     $group: {
    //       _id: `${req.body.src ? req.body.src : '$src'}`,
    //       count: { $sum: 1 }
    //     }
    //   }
    //   // {
    //   //   $lookup: {
    //   //     from: "projects",
    //   //     localField: "projectId",
    //   //     foreignField: "_id",
    //   //     as: "project",
    //   //   },
    //   // },
    //   // {
    //   //   $lookup: {
    //   //     from: "members",
    //   //     localField: "member",
    //   //     foreignField: "_id",
    //   //     as: "projectmember",
    //   //   },
    //   // },


    //   // {
    //   //   $group: {
    //   //     _id: "$member",
    //   //     records: {
    //   //       $push: {
    //   //         date: "$date",
    //   //         from: "$from",
    //   //         to: "$to",
    //   //         hours: "$hours",
    //   //         memberName: "$projectmember.name",
    //   //         projectName: "$project.name",
    //   //         recordDescription: "$description",
    //   //       },
    //   //     },
    //   //   },
    //   // },
    // ]);

    const posts = req.body.src 
    ? await Socials.aggregate([{ 
      $match: { src: req.body.src },
      $group: {
        _id: '$post',
        count: { $sum: 1 }
      }
     }])
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