"use strict";

let number = 0;

const output = {
    hello: (req, res) => {
        res.render("./index")
    }
};

const process = {
    read: (req, res) => {
        const response = {number: number};
        
        res.json(response);
    },

    add: (req, res) => {
        const response = {number: number += parseInt(req.body.number)};
        res.json(response);
    },
    
    update: (req, res) => {
        const response = {number: parseInt(req.body.number)};
        res.json(response);
    },

    delete: (req, res) => {
        const response = {number: 0};
        number = 0;
        res.json(response);
    }
}


module.exports = {
    output,
    process,
}