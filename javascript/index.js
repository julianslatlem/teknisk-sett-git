setTimeout(function() {
    if (window.location.href == "https://julianslatlem.github.io/teknisk-sett-git/") {
        var newURL = window.location.href + "pages/home.html";

        window.location.href = newURL;
    }
    else {
        var currentURL = window.location.href;

        var urlParts = currentURL.split('/');

        urlParts[urlParts.length - 1] = 'pages/home.html';

        var newURL = urlParts.join('/');

        window.location.href = newURL;
    }
});
