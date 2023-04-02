const Class = require("../models/classModel");

exports.getAllClasses = async (req, res) => {

    const classes = await Class.find();
    res.json(classes);
    
}