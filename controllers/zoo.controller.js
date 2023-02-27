const Lion = require('../model/lion');
const Tiger = require('../model/tiger');

exports.lionSpeak = (req, res) => {
    const lion = new Lion();
    res.send(lion.speak(req.query.speak)); // due to out of scope I don't implement a POST a receive a phrase to pass to speak
};

exports.tigerSpeak = (req, res) => {
    const tiger = new Tiger();
    res.send(tiger.speak(req.query.speak));  // due to out of scope I don't implement a POST a receive a phrase to pass to speak
};