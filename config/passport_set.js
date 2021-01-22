
var GoogleStrategy=require('passport-google-oauth20').Strategy;
const passpot=require('passport')

passpot.use(new GoogleStrategy({
    clientID:"215331229494-520ape5dlk73j9faq2uglml8hbsbo0r9.apps.googleusercontent.com",
    clientSecret:'JttNmOE_DdCKSE_ejnPAMaCj',
    callbackURL:"http://localhost:4000/users/google/auth/callback"
},
()=>{}
));


var GithubStrategy=require('passport-github2').Strategy;
passpot.use(new GithubStrategy({
    clientID:"4381172834faf85c79a9",
    clientSecret:'95af6327d8eea92f8ebc428ea23e70a97a23a15b',
    callbackURL:"http://localhost:4000/users/github/auth/callback"
},
()=>{}
));






