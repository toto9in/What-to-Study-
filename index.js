import express from "express";
import searchRouter from "./routes/searchRoutes.js";

const app = express();
const port = 3000;

//db connection

//middlewares
app.use(express.urlencoded({ extended: true }));

app.use(express.json())

//routes
app.use("/api/v1/search", searchRouter);

//server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);

});







