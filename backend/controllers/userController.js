const User = require("../models/userModel");

//REGISTER NEW USER
exports.registerUser = async (req, res, next) => {
  const { name, email, password } = req.body;

  try {
    const user = await User.create({
      name,
      email,
      password,
    });

    return res.status(201).json({
      success: true,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error,
    });
  }
};

//LOGIN USER
exports.loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await User.find({
      email,
      password,
    });

    if (user.length > 0) {
      const currentUser = {
        name: user[0].name,
        email: user[0].email,
        isAdmin: user[0].isAdmin,
        _id: user[0]._id,
      };
      res.send(currentUser);
    } else {
      return res.status(404).json({
        success: false,
        message: "user login failed",
      });
    }
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error,
    });
  }
};
