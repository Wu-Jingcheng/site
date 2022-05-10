// favicon
document.getElementById("favicon").href = configs.favicon_path;

// color injection
var root = document.querySelector(":root");
root.style.setProperty('--color1', configs.colors.color1);
root.style.setProperty('--color2', configs.colors.color2);
root.style.setProperty('--color3', configs.colors.color3);
root.style.setProperty('--color4', configs.colors.color4);

// name
document.getElementsByTagName("title")[0].innerHTML = configs.fullname