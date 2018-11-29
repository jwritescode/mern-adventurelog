const express = require('express');
const router = express.Router();

// Log Model
const Log = require('../../models/Log');

// @route GET api/logs
// @desc Get All Logs
// @access Public
// since we are in the router, api/logs is already where we are.
router.get('/', (req, res) => {
    Log.find()
        .sort({ date: -1 })
        .then(logs => res.json(logs))
});

// @route POST api/logs
// @desc Create an Log
// @access Public
// since we are in the router, api/logs is already where we are.
router.post('/', (req, res) => {
    const newLog = new Log({
        pName: req.body.pName,
        cName: req.body.cName,
        cRace: req.body.cRace,
        cClass: req.body.cClass,
        cBackground: req.body.cBackground,
        cLevel: req.body.cLevel,
        cInit: req.body.cInit,
        cPPer: req.body.cPPer,
        cAC: req.body.cAC,
        cHP: req.body.cHP,
        cNotes: req.body.cNotes
    });

    newLog.save().then(log => res.json(log));
});


// @route DELETE api/logs/:id
// @desc DELETE an Log
// @access Public
// since we are in the router, api/logs is already where we are.
router.delete('/:id', (req, res) => {
    Log.findById(req.params.id)
        .then(log => log.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});


module.exports = router;