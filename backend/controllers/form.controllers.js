const Form = require("../models/formModel");

exports.getAllForms = async (req, res) => {

    const forms = await Form.find();
    res.json(forms);
    
}