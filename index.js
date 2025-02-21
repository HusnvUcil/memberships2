const express = require('express');
const cors = require('cors');
require('dotenv').config();
const sequelize = require('./config/database');
const membershipsRoutes = require('./routes/memberships');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/memberships', membershipsRoutes);

// Sinkronisasi model
sequelize.sync({ force: false })
    .then(() => console.log('Database synced successfully'))
    .catch(error => console.error('Database sync error:', error));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

//commit ulang
// #region sequilize
// const express = require('express');
// const { Sequelize, DataTypes } = require('sequelize');
// const cors = require('cors');
// require('dotenv').config();

// const app = express();
// const port = process.env.PORT || 3000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Cek apakah DATABASE_URL terbaca
// console.log("Database URL:", process.env.DATABASE_URL);

// // Konfigurasi database
// const sequelize = new Sequelize(process.env.DATABASE_URL, {
//     dialect: 'mysql',
//     logging: false,
// });

// // Cek koneksi ke database
// async function testConnection() {
//     try {
//         await sequelize.authenticate();
//         console.log('Database connected');
//     } catch (error) {
//         console.error('Database connection error:', error);
//     }
// }

// testConnection();

// // Model Member
// const Member = sequelize.define('membership', {
//     name: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },
//     email: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         unique: true,
//     },
//     password: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },
//     membershipStatus: {
//         type: DataTypes.ENUM('Free', 'Premium', 'VIP'),
//         defaultValue: 'Free',
//     },
// });

// // Sinkronisasi model tanpa menghapus data lama
// sequelize.sync({ force: false }).then(() => {
//     console.log("Database synced successfully.");
// }).catch(error => {
//     console.error("Database sync error:", error);
// });

// // Routes
// app.get('/members', async (req, res) => {
//     const members = await Member.findAll();
//     res.json(members);
// });

// app.post('/members', async (req, res) => {
//     const newMember = await Member.create(req.body);
//     res.status(201).json(newMember);
// });

// app.put('/members/:id', async (req, res) => {
//     const { id } = req.params;
//     await Member.update(req.body, { where: { id } });
//     res.json({ message: 'Member updated' });
// });

// app.delete('/members/:id', async (req, res) => {
//     const { id } = req.params;
//     await Member.destroy({ where: { id } });
//     res.json({ message: 'Member deleted' });
// });

// app.listen(port, () => {
//     console.log(`Server running on port ${port}`);
// });

//#endregion
