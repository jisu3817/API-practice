"use strict";

const text = document.querySelector("#text"),
    result = document.querySelector("#result"),
    getBtn = document.querySelector("#get-btn"),
    addBtn = document.querySelector("#add-btn"),
    putBtn = document.querySelector("#put-btn"),
    deleteBtn = document.querySelector("#delete-btn");


getBtn.addEventListener("click", check);

function check() {
    const req = {
        value: text.value,
    };
}; 