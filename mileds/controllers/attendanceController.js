const Attendance =
require("../models/Attendance");

// Mark Attendance
const markAttendance =
async (req, res) => {

  try {

    const attendance =
      await Attendance.create({
        member: req.user.id
      });

    res.status(201).json({
      message: "Attendance Marked",
      attendance
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

// View Attendance
const getAttendance =
async (req, res) => {

  try {

    const attendance =
      await Attendance.find()
      .populate(
        "member",
        "name email"
      );

    res.json(attendance);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

module.exports = {
  markAttendance,
  getAttendance
};