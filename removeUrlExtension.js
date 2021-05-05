var url = window.location.href;
url = url.split('')[0];
//url = url.substring(0, url.lastIndexOf("."));
window.history.replaceState( null, null, url );
