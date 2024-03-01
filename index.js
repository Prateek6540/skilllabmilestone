const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());

mongoose
  .connect("mongodb+srv://prat_k9:prateek2003@cluster0.e8ktyvf.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database is connected successfully😎");
  })
  .catch((err) => {
    console.error("Error connecting to the database:", err);
  });

const authRoutes = require("./routes/authRoutes");
const foodRoutes = require("./routes/foodRoutes");
const ordersRoutes = require("./routes/orderRoutes");

app.use("/auth", authRoutes);
app.use("/food", foodRoutes);
app.use("/orders", ordersRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
