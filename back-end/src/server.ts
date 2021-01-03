import express from "express";
import "./database/connection";

const app = express();

//dissendo pro express que `e pra ele usar JSON.
app.use(express.json());

app.get("/users", (request, response) => {
  return response.json({ mensage: "Hi,alfa bravo dog one!" });
});

app.listen(3333);
