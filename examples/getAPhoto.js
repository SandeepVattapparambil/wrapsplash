const UnsplashApi = require('../index');

let unsplash = new UnsplashApi({
    access_key: '<api-key>',
    secret_key: '<secret-key>',
    redirect_uri: '<callback-url>',
    code: '<authorization-code>'
});

unsplash.getAPhoto('<photo-id>', 500, 500, '300, 300, 300, 300')
    .then(function (result) {
        console.log(result);
    }).catch(function (e) {
       console.log(e);
    });