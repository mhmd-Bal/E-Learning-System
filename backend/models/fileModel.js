const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
    file_description: {
        type: String,
        required: true,
    },
    class: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Class",
        required: true,
        unique: true,
    }
});

const File = mongoose.model("File", fileSchema);

module.exports = File;