const Class = require("../models/classModel");

exports.getAllClasses = async (req, res) => {

    const classes = await Class.find();
    res.json(classes);
    
}

exports.addClass = async (req, res) => {
    const { class_name, class_description } = req.body;

    const new_class = await Class.create({ class_name, class_description });

    res.json(new_class);
}