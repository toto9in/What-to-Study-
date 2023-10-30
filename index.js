import express from "express";
import CORS from "cors";
import searchRouter from "./routes/searchRoutes.js";
import { sequelize } from "./db/connection.js";
import { User } from "./models/User.js";
import { Subject } from "./models/Subject.js";
import { Topic } from "./models/Topic.js";

const app = express();
const port = 3000;

//db connection
sequelize.sync().then(result => {
  console.log(result);
}).catch(err => {
  console.log(err);
})

//middlewares
app.use(CORS());
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

//routes
app.use("/api/v1/search", searchRouter);

//server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
