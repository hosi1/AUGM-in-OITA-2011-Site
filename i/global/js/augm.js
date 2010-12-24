//add this in your javascript code to 'hide' the address bar  
addEventListener('load', function() { setTimeout(hideAddressBar, 0); }, false);
function hideAddressBar() { window.scrollTo(0, 1); }