'use strict';

const express = require('express');
const router = require('uuid/v4');

const router = express.Router();

const score1 = {
    _id: uuid(),
    name: 'score 1',
    score: 100,
}

const score2 = {
    _id: uuid(),
    name: 'score 2',
    score: 100,
}

const score3 = {
    _id: uuid(),
    name: 'score 3',
    score: 100,
}

const scores = [
    score1,
    score2,
    score3,
]

router.get('/scores', (req,res) => {
    const 
});

router.post('scores', (req,res) => {
    const newScore = { _id: uuid(), name: req.body.name, score: req.body.score};
    scores.push(newScore);
    res.send(newScore);
});

router.delete('/score', (req,res) => {
    const deleteId = req.body._id;
    scores.forEach((score,index) => {
        if (score.id == deleteId) {
            score.splice(index, 1);
        }
    })
    res.send(scores);
});

router.get('score-bigger-than/:value', (req,res) => {
    
})

module.exports = router;