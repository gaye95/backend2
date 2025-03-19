const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const etudiantRoutes = require('./routes/etudiants');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connexion à MongoDB
connectDB();

// Routes
app.use('/api/etudiants', etudiantRoutes);

// Lancer le serveur
const PORT = 5000;
app.listen(PORT, () => console.log(`Serveur démarré sur le port ${PORT}`));
