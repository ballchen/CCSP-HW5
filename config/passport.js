var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;

passport.use(new FacebookStrategy({
  clientID: '1430907223846624',
  clientSecret: '35fb93ab34f993c28650c2cd9aa2ee2b',
  callbackURL: "/fbcb"
}, function(accessToken, refreshToken, profile, done){
  // Passport profile:
  // http://passportjs.org/guide/profile/
  // Once the profile is stored in session, it will be available in req.user.
  //
  done(null, profile);
}));


// Extract needed data from Passport profile object.
// For this app, we only need to know user.id.
//
// Required by Passport.
// Ref: https://github.com/jaredhanson/passport#sessions
//
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

// Returns user object from facebook id.
//
// Required by Passport.
// Ref: https://github.com/jaredhanson/passport#sessions
//
passport.deserializeUser(function(id, done) {
  done(null, {id: id});
});