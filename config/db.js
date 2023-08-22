const mongoose = require('mongoose');

const dbURL = process.env.DB_URL;

const connectDB = async () => {
  try {
    await mongoose.connect(dbURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    //   useCreateIndex: true
    });

    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
  
    process.exit(1);
  }
};

module.exports = connectDB; // Export the function
