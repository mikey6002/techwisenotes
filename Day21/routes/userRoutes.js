const express= require("express");
const router = express.Router();
const userController = require("../controllers/usercontroller");


router.get("/", );
module.exports = router;

router.get("id", userController.getUserById);
router.get(/:id/, userController.getUserById);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);
module.exports = router;