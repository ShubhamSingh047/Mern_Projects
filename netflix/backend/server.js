import express from "express";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.route.js";
import movieRoutes from "./routes/movie.route.js";
import tvRoutes from "./routes/tv.routes.js";
import { protectRoute } from "./middleware/protectRoute.js";
import { ENV_VARS } from "./config/envVars.js";
import { connectDB } from "./config/db.js";

const PORT = ENV_VARS.PORT;
const app = express();

app.use(express.json()); //will allow us to use parser req.body
app.use(cookieParser());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/movie", protectRoute, movieRoutes);
app.use("/api/v1/tv", protectRoute, tvRoutes);

app.listen(PORT, () => {
  connectDB();
});
