
const mongoose = require('mongoose');
const mongoURL = "mongodb://localhost:27017/Credentials"; // Ensure this URL is correct

function connectToMongoose() {
    mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log("Connected to MongoDB Successfully");
        })
        .catch((err) => {
            console.error("MongoDB Connection Error: ", err);
        });
}

module.exports = connectToMongoose;
