const mongoose = require("mongoose");

const membershipSchema = new mongoose.Schema(
  {
    member: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    planName: {
      type: String,
      required: true
    },

    price: {
      type: Number,
      required: true
    },

    duration: {
      type: Number,
      required: true
    },

    expiryDate: {
      type: Date
    },

    status: {
      type: String,
      enum: ["Active", "Expired"],
      default: "Active"
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model(
  "Membership",
  membershipSchema
);