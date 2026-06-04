const User = require("../models/User");

// View All Users
const getAllUsers = async (req, res) => {
  try {

    const users = await User.find()
      .select("-password");

    res.json(users);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

// Block User
const blockUser = async (req, res) => {
  try {

    const user = await User.findByIdAndUpdate(
      req.params.id,
      { isBlocked: true },
      { new: true }
    );

    res.json({
      message: "User Blocked",
      user
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

// Unblock User
const unblockUser = async (req, res) => {
  try {

    const user = await User.findByIdAndUpdate(
      req.params.id,
      { isBlocked: false },
      { new: true }
    );

    res.json({
      message: "User Unblocked",
      user
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

module.exports = {
  getAllUsers,
  blockUser,
  unblockUser
};