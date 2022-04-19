const mongoose = require('mongoose');
 
const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb+srv://prateek:123@cluster0.z2ilp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
                useNewUrlParser: true,
                useUnifiedTopology: true
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

module.exports = connectDB;
