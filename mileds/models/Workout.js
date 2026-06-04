const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema(
{
  trainer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  member: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  exercises: [
    {
      type: String
    }
  ],

  difficulty: {
    type: String,
    enum: ["Beginner", "Intermediate", "Advanced"],
    default: "Beginner"
  }
},
{
  timestamps: true
});

module.exports =
mongoose.model(
  "Workout",
  workoutSchema
);