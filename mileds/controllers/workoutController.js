const Workout =
require("../models/Workout");

// Create Workout
const createWorkout =
async (req, res) => {

  try {

    const {
      member,
      exercises,
      difficulty
    } = req.body;

    const workout =
      await Workout.create({
        trainer: req.user.id,
        member,
        exercises,
        difficulty
      });

    res.status(201).json({
      message: "Workout Assigned",
      workout
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

// View Workouts
const getWorkouts =
async (req, res) => {

  try {

    const workouts =
      await Workout.find()
      .populate(
        "trainer",
        "name email"
      )
      .populate(
        "member",
        "name email"
      );

    res.json(workouts);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

module.exports = {
  createWorkout,
  getWorkouts
};