"use strict";

const number = document.querySelector("#number"),
    result = document.querySelector("#result"),
    getBtn = document.querySelector("#get-btn"),
    addBtn = document.querySelector("#add-btn"),
    putBtn = document.querySelector("#put-btn"),
    deleteBtn = document.querySelector("#delete-btn");

    getBtn.addEventListener("click", check);
    function check() {
        fetch('/api/number')
        .then(res => res.json())
        .then(res => result.innerHTML = res.number);
    };

    addBtn.addEventListener("click", add);
    function add() {
        fetch ('/api/number',{
            method: 'POST',
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                number: number.value
            }),  
        })
        .then(res => res.json())
        .then(res => result.innerHTML = res.number);
    };

    putBtn.addEventListener("click", put);
    function put() {
        fetch ('/api/number',{
            method: 'PUT',
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                number: number.value
            }),  
        })
        .then(res => res.json())
        .then(res => result.innerHTML = res.number);
    };

    deleteBtn.addEventListener("click", reset);
    function reset() {
        fetch ('/api/number',{
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(res => result.innerHTML = res.number);
    };

