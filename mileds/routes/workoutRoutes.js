const express =
require("express");

const {
  createWorkout,
  getWorkouts
} =
require("../controllers/workoutController");

const protect =
require("../middleware/authMiddleware");

const router =
express.Router();

router.post(
  "/",
  protect,
  createWorkout
);

router.get(
  "/",
  protect,
  getWorkouts
);

module.exports = router;