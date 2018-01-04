var express = require('express');
var router = express.Router();

var Message = require ('../models/message');

router.post('/', function (req, res, next) {
    var Message = new Message({
        content: req.body.content
    });
    Message.save(function(err, result){
        if (err){
            return res.status(500).json({
                title: 'An error occured',
                error: err
            });
        }
        res.status(201).json({
            title: 'Saved message',
            obj: result
        });
    });
});

module.exports = router;
