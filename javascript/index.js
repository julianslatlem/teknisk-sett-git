setTimeout(function() {
    var currentURL = window.location.href;

    var urlParts = currentURL.split('/');

    urlParts[urlParts.length - 1] = 'pages/home.html';

    var newURL = urlParts.join('/');

    window.location.href = newURL;
});
