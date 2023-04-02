const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
    form_content: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
        default: "pending",
    },
    class: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Class",
        required: true,
    },
    user_that_requested: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    }
});

const Form = mongoose.model("Form", formSchema);

module.exports = Form;