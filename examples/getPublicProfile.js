const UnsplashApi = require('../index');

let unsplash = new UnsplashApi({
    access_key: '<api-key>',
    secret_key: '<secret-key>',
    redirect_uri: '<callback-url>',
    code: '<authorization-code>'
});

unsplash.getPublicProfile('username', 700, 700)
    .then(function (result) {
        console.log(result);
    }).catch(function (e) {
       console.log(e);
    });