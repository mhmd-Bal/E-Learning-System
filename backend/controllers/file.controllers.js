const File = require("../models/fileModel");

exports.getAllFiles = async (req, res) => {

    const files = await File.find();
    res.json(files);
    
}