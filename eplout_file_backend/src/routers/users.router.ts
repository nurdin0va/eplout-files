import { Router } from "express";
import { upload } from "../middlewares/upload.middleware";
import { deleteController, getController, getOneController, postController, updateController } from "../controllers/users.controller";

const router = Router();
router.post("/", upload.single("avatar"), postController)
router.get("/",getController)
router.get("/:id",getOneController)
router.delete("/:id",deleteController)
router.patch("/:id", upload.single("avatar"), updateController);
export default router;
