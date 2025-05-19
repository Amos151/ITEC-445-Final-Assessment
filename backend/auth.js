import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import User from "./models/User.js";

passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser(async (id, done) => {
  try {
    const u = await User.findById(id);
    done(null, u);
  } catch (err) {
    done(err);
  }
});

passport.use(new GoogleStrategy({
    clientID:     process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL:  "/auth/google/callback"
  },
  async (_token, _tokenSecret, profile, done) => {
    try {
      // only allow verified gmail addresses
      const emailObj = profile.emails?.[0];
      if (!emailObj?.verified || !emailObj.value.endsWith("@gmail.com")) {
        return done(null, false, { message: "Must use a verified Gmail" });
      }
      let user = await User.findOne({ googleId: profile.id });
      if (!user) {
        user = await User.create({
          googleId:    profile.id,
          displayName: profile.displayName,
          email:       emailObj.value,
          photo:       profile.photos?.[0]?.value
        });
      }
      done(null, user);
    } catch (err) {
      done(err, null);
    }
  }
));
