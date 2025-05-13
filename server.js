const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const houseRoutes = require('./routes/houseRoutes');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/allHouse', houseRoutes); // <-- bu yerda allHouse route

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB ulandi');
  app.listen(PORT, () => console.log(`Server ${PORT}-portda ishlayapti`));
}).catch(err => console.error(err));
