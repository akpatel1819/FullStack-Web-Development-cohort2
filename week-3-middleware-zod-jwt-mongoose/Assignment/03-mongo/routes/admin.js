const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin } = require("../db");
const router = Router();

// Admin Routes
router.post("/signup", (req, res) => {
  // Implement admin signup logic
  Admin.create({
    username: req.body.username,
    password: req.body.password,
  });

  res.json({
    message: "Admin created successfully",
  });
});

router.post("/courses", adminMiddleware, (req, res) => {
  // Implement course creation logic

  Course.create({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    image: req.body.image,
  });
});

router.get("/courses", adminMiddleware, (req, res) => {
  // Implement fetching all courses logic

  Course.find().then((courses) => {
    res.json(courses);
  });
});

module.exports = router;
