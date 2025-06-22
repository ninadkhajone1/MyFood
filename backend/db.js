const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://myfood:food123@cluster0.iozgapd.mongodb.net/myfood?retryWrites=true&w=majority';

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI);

    console.log("Connected to MongoDB");

    const foodCollection = await mongoose.connection.db.collection("food_items");
    const data = await foodCollection.find({}).toArray();

    const categoryCollection = await mongoose.connection.db.collection("foodCategory");
    const catData = await categoryCollection.find({}).toArray();

    global.food_items = data;
    global.foodCategory = catData;

  } catch (err) {
    console.error("MongoDB connection or fetch error:", err);
  }
};

module.exports = mongoDB;
