var mongoose = require('mongoose');
// const mongoAtlasUri = `mongodb+srv://buildintegrate:${process.env.MongoDB_Password}@cluster0.za5fncf.mongodb.net/buildintegrate?retryWrites=true&w=majority`
const mongoAtlasUri = `mongodb+srv://buildintegrate:${process.env.MongoDB_Password}@cluster0.za5fncf.mongodb.net/buildintegrate`

try {
    // Connect to the MongoDB cluster
    mongoose.connect(
        mongoAtlasUri,
        { useNewUrlParser: true, useUnifiedTopology: true },
        () => console.log("Mongoose is connected"),
    );
} catch (e) {
    console.log("could not connect");
}
    
const dbConnection = mongoose.connection;
dbConnection.on("error", (err) => console.log(`Connection error ${err}`));
dbConnection.once("open", () => console.log("Connected to DB!"));

export default dbConnection;