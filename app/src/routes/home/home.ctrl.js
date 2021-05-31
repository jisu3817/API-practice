"use strict";

const hello = (req, res) => {
    res.render("./index")
}

module.exports = {
    hello,
}