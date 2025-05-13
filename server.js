const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

const userRoutes = require('./routes/userRoutes');
const houseRoutes = require('./routes/houseRoutes');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// CORS middleware
app.use(cors()); // 💡 Bu yerda CORS yoqiladi

app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/allHouse', houseRoutes);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB ulandi');
  app.listen(PORT, () => console.log(`Server ${PORT}-portda ishlayapti`));
}).catch(err => console.error(err));
