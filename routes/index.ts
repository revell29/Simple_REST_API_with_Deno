import { send, Router } from "../deps.ts";
import UserController from "../controllers/UserController.ts";
const router = new Router();

router.get("/user", UserController.getUser);
router.post("/user", UserController.addUser);
router.get("/user/:id", UserController.showUser);
router.put("/user/:id", UserController.updateUser);
router.delete("/user/:id", UserController.deletUser);

router.get("/", UserController.indexFile);

export default router;
