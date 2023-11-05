function openPage(path) {
    var currentURL = window.location.href;

    var urlParts = currentURL.split('/');

    urlParts[urlParts.length - 1] = path;

    var newURL = urlParts.join('/');

    window.location.href = newURL;
}