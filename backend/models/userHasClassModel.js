const mongoose = require("mongoose");

const userHasClassSchema = new mongoose.Schema({
    class: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Class",
        required: true,
    },
    class_student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    }
});

const UserHasClass = mongoose.model("UserHasClass", userHasClassSchema);

module.exports = UserHasClass;