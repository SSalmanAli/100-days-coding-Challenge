"use strict";
function make_shirt(size = "Large", message = " \" I love typescript \"") {
    console.log(`I am making a ${size} T-shirt on which ${message} is printed on it.`);
}
make_shirt();
make_shirt("medium");
make_shirt("small", "'\Dive into coding\'");
