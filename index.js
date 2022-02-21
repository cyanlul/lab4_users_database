const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./UserRoutes');

const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://dilan:admin@comp3123.e5acu.mongodb.net/Users?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(success => {
  console.log('Success Mongodb connection')
}).catch(err => {
  console.log('Error Mongodb connection')
});

app.use(userRouter);

app.listen(8081, () => { console.log('Server is running...') });
