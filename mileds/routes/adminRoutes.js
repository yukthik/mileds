const express = require("express");

const {
  getAllUsers,
  blockUser,
  unblockUser
} = require("../controllers/adminController");

const protect =
  require("../middleware/authMiddleware");

const router = express.Router();

router.get(
  "/users",
  protect,
  getAllUsers
);

router.put(
  "/block/:id",
  protect,
  blockUser
);

router.put(
  "/unblock/:id",
  protect,
  unblockUser
);

module.exports = router;