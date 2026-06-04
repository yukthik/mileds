const Membership = require("../models/Membership");

// Create Membership
const createMembership = async (req, res) => {
  try {

    const { planName, price, duration } = req.body;

    const expiryDate = new Date();

    expiryDate.setMonth(
      expiryDate.getMonth() + duration
    );

    const membership =
      await Membership.create({
        member: req.user.id,
        planName,
        price,
        duration,
        expiryDate
      });

    res.status(201).json({
      message: "Membership Created",
      membership
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// Get All Memberships
const getMemberships = async (req, res) => {
  try {

    const memberships =
      await Membership.find()
      .populate("member", "name email");

    res.json(memberships);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

module.exports = {
  createMembership,
  getMemberships
};