const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminContoller");
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");

//Login and SignUP routes
router.post("/api/register", authController.register);
router.post("/api/login", authController.logIn);
router.get("/api/user/getallfooditem", userController.getAllFoodItem);

//CRUD routes
router.post("/api/admin/addfood", adminController.addFood);
router.get("/api/admin/getallfooditem", adminController.getallFoodItem);
router.get("/api/admin/getallfooditem/:id", adminController.getallFoodItemById);
router.put("/api/admin/editFood/:id", adminController.editFood);
router.delete("/api/admin/deletefood/:id", adminController.deleteFood);
router.get("/api/admin/getallfeedback", adminController.getallFeedback);
router.delete("/api/admin/deletefeedback/:id", adminController.deleteFeedback);
router.get("/api/admin/getalluser", adminController.getallUser);
router.delete("/api/admin/blockuser/:id", adminController.block);
router.delete("/api/admin/unblockuser/:id", adminController.block);

module.exports = router;
