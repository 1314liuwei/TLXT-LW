var express = require('express');
var router = express.Router();
var getTerminalData = require('../util/getTerminalData');


router.post('/', function(req, res) {
    console.log(req.body.name);
    res.send('sss');
});

router.get('/all', getTerminalData.getAllTerminalData);
router.post('/search', getTerminalData.searchTerminalData);
router.post('/destory', getTerminalData.removeTerminalData);
router.post('/update', getTerminalData.updateTerminalData);


module.exports = router;