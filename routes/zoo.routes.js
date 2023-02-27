module.exports = (app) => {
    const zoo = require('../controllers/zoo.controller.js');

    app.get('/lion', zoo.lionSpeak);
    app.get('/tiger', zoo.tigerSpeak);

}