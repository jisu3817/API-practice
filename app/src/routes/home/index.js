"use strict";
 
const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get('/', ctrl.output.hello);

router.get('/api/number', ctrl.process.read);
router.post('/api/number', ctrl.process.add);
router.put('/api/number', ctrl.process.update);
router.delete('/api/number', ctrl.process.delete);

module.exports = router;  