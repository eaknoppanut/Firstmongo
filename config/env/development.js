module.exports = {
      // mongoUri: 'mongodb://localhost/myFirstNode',
       // or use 
       mongoUri: 'mongodb://admin:password@localhost:27017/testDB1',
       debug: true,
       sessionSecret: 'dev_secret_key',
        google: {
              clientID: '156939899822-gca0h1n9cmpi6hr06e5knuf2q3fptaah.apps.googleusercontent.com',
              clientSecret: 'kKiitGUN4tc6j5-kCZ63z9L4',
              callbackURL: 'http://localhost:3000/oauth/google/callback'
       }

}
