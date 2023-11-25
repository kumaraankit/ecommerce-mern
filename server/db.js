const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    const dbConn = await mongoose.connect(process.env.MONGODb_URL, {
      useNewUrlParser: true,
    });
    console.log("MongoDB connected", dbConn.connection.host);
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectToDB;
