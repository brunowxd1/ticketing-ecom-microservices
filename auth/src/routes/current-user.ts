import { Router } from "express";

const router = Router();

router.get("/api/users/currentuser", (req, res) => {
  console.log("a");
  res.send(":)");
});

export { router as currentUserRouter };
