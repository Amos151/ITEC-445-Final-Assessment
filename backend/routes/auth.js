import { Router } from "express";
import passport from "passport";

const router = Router();

// Kick off Google login
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// Handle callback
router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: `${process.env.CLIENT_URL}/login?error=oauth`
  }),
  (_req, res) => {
    // On success, redirect back to the React app
    res.redirect(process.env.CLIENT_URL);
  }
);

// Logout
router.get("/logout", (req, res, next) => {
  req.logout(err => {
    if (err) return next(err);
    res.clearCookie("connect.sid");
    res.redirect(process.env.CLIENT_URL);
  });
});

// Get current user
router.get("/user", (req, res) => {
  if (!req.isAuthenticated()) return res.status(401).json({ user: null });
  const { displayName, email, photo } = req.user;
  res.json({ user: { displayName, email, photo } });
});

export default router;
