import express from "express";
import FileUpload from "express-fileupload";
import session from "express-session";
import cors from "cors";
import dotenv from "dotenv";
import db from "./config/Database.js";
import SequelizeStore from "connect-session-sequelize";
import PekerjaRoute from "./routes/PekerjaRoute.js";
import LokerRoute from "./routes/LokerRoute.js";
import UserRoute from "./routes/UserRoute.js";
import AuthRoute from "./routes/AuthRoute.js";
dotenv.config();

const app = express();

const sessionStore = SequelizeStore(session.Store);

const store = new sessionStore({
  db: db,
});

app.use(
  cors({
    credentials: true,
    origin: "https://job-match-prod.netlify.app/",
  })
);
app.use(express.json());
app.use(FileUpload());
// Use the session middleware
app.use(
  session({
    secret: "test",
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
      secure: "auto",
    },
  })
);
app.use(express.static("public"));
app.use(PekerjaRoute);
app.use(LokerRoute);
app.use(UserRoute);
app.use(AuthRoute);

app.listen(5000, () => console.log("Server Up and Running..."));
