const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/api/user/myprofile/:id", userController.myProfile);
router.put("/api/user/editprofile/:id", userController.editProfile);
router.get("/api/user/getallfooditem", userController.getAllFoodItem);
router.post("/api/user/sendfeedback", userController.sendFeedback);
router.post("/api/user/addtocart", userController.addtoCart);
router.get("/api/user/getcart/:id", userController.getCart);
router.delete(
  "/api/user/deletefromcart/:itemname/:userid",
  userController.deleteFromCart
);
router.post("/api/user/finalorder", userController.finalorder);
router.get("/api/user/getfinalorder/:id", userController.getfinalorder);

module.exports = router;
