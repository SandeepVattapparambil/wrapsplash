const UnsplashApi = require('../index');

let unsplash = new UnsplashApi({
    access_key: '<api-key>',
    secret_key: '<secret-key>',
    redirect_uri: '<callback-url>',
    code: '<authorization-code>'
});

unsplash.getUserCollections('<username>', 1, 10)
    .then(function (result) {
        console.log(result);
    }).catch(function (e) {
        console.err(e);
    });