const UnsplashApi = require('../index');

let unsplash = new UnsplashApi({
    access_key: '<api-key>',
    secret_key: '<secret-key>',
    redirect_uri: '<callback-url>',
    code: '<authorization-code>'
});

unsplash.removePhotoFromCollection('<collection-id>', '<photo-id>')
    .then(function (result) {
        console.log(result);
    }).catch(function (err) {
        console.log(err);
    });