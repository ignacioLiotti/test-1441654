const { UserModel } = require("../models/users");

module.exports.Register = async (req, res, next) => {
    const { name, email } = req.body;
    console.log(req.body)
    try {
      const user = await UserModel.save({ name, email });
      console.log(user)
      return res.status(201).send(user);
    } catch (error) {
      next(error);
    }
  };