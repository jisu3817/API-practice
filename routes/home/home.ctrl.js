"use strict";

const hello = (req, res) => {
    res.render("public/ index")
}

module.exports = {
    hello,
}