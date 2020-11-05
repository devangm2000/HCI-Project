function myFunction() {

var urls = new Array();
urls[0] = "C:\\Users\\Devang Mehrotra\\Desktop\\HCI Project\\taj-mahal.html";
urls[1] = "C:\\Users\\Devang Mehrotra\\Desktop\\HCI Project\\qutub-minar.html";
urls[2] = "C:\\Users\\Devang Mehrotra\\Desktop\\HCI Project\\red-fort.html";
urls[3] = "C:\\Users\\Devang Mehrotra\\Desktop\\HCI Project\\hawa-mahal.html";
urls[4] = "C:\\Users\\Devang Mehrotra\\Desktop\\HCI Project\\charminar.html";

var random = Math.floor(Math.random()*urls.length);

window.location = urls[random];
return window.location;

}