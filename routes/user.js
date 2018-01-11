var express = require('express');
var router = express.Router();

var Message = require ('../models/user');

router.post('/', function (req, res, next) {
    var User = new User({
        content: req.body.content
    });
    User.save(function(err, result){
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
