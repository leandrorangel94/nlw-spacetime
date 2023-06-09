import "dotenv/config";

import fastify from "fastify";
import cors from "@fastify/cors";
import { memoriesRoutes } from "./routes/memories";
import { authRoutes } from "./routes/auth";
import jwt from "@fastify/jwt";

const app = fastify();

app.register(cors, {
  origin: true, //Aceita requisições de toda URL front-end
});

app.register(jwt, {
  secret: "spacetime",
});

app.register(authRoutes);
app.register(memoriesRoutes);

app
  .listen({
    port: 3333,
    host: "0.0.0.0",
  })
  .then(() => {
    console.log("🚀 HTTP server running on http://localhost:3333/");
  });
