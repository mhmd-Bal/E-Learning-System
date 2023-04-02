const Form = require("../models/formModel");

exports.getAllForms = async (req, res) => {

    const forms = await Form.find();
    res.json(forms);
    
}

exports.addForm = async (req, res) => {
    const { form_content, class_id, status } = req.body;
    const user_that_requested = req.user.id;

    const new_form = await Form.create({ form_content, status, class_id, user_that_requested });
    res.json(new_form);
}