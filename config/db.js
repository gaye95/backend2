const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://ooggaye:passer123@inserer.4vcsc.mongodb.net/?retryWrites=true&w=majority&appName=inserer"
    ); // ✅ Suppression des options obsolètes
    console.log("✅ MongoDB connecté avec succès !");
  } catch (error) {
    console.error("❌ Erreur de connexion à MongoDB :", error);
    process.exit(1);
  }
};

module.exports = connectDB;
