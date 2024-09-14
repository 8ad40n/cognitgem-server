const User = require("../models/user.model");

exports.addUser = async (req, res) => {
  const { name, email, image, provider } = req.body;

  try {
    let user = await User.findOne({ email });
    if (!user) {
      user = new User({ name, email, image, provider });
      await user.save();
      return res.status(201).json({ message: "User created" });
    }
    return res.status(200).json({ message: "User already exists" });

  } 
  catch (error) 
  {
    console.error("Error creating user:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
