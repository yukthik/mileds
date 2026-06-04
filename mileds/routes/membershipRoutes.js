const express = require("express");

const {
  createMembership,
  getMemberships
} = require("../controllers/membershipController");

const protect =
  require("../middleware/authMiddleware");

const router = express.Router();

router.post(
  "/",
  protect,
  createMembership
);

router.get(
  "/",
  protect,
  getMemberships
);

module.exports = router;