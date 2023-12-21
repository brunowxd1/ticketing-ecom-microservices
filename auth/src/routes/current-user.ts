import { Router } from "express";
import { currentUser } from "@bjftickets/commom";

const router = Router();

router.get("/api/users/currentuser", currentUser, (req, res) => {
  res.send({ currentUser: req.currentUser || null });
});

export { router as currentUserRouter };
