import express from 'express';
import { connectDatabase } from './config/db.config.js';
import contentRouter from "./apis/content_management/routes/challenge.route.js";
import dotenv from 'dotenv'
import profileRouter from './apis/profile/routes/profile.router.js';
import { PORT } from './config/server.config.js';

const app = express();
dotenv.config();



app.get("/", (req, res) => {
  res.send("server running");
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/profiles", profileRouter)
app.use("/api/challenges", contentRouter)


// connect to the database
connectDatabase().then(() => {
  console.log('Connected to db')
  app.listen(PORT, (_) =>
    console.log(`Server up and running on port ${PORT}`)
  );
}).catch((error) => {
  console.error(`Db connection error ${error}`)
})


