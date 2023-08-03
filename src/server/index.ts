import express, { Express, Request, Response } from "express";
import { config } from "./config";
import { template } from "./render/template";
import { render } from "./render";
import { getGalaxiesJSON } from "../app/api";

const app: Express = express();
//const port = 3500;

/* app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
}); */

// Enviar un Html desde el servidor
/* app.get("*", (req: Request, res: Response) => {
  res.send(`<h1>Hola mundo desde el servidor: ${req.url}</h1>`);
}); */

// Enviado un template Html desde el servidor

app.use(express.static("dist")); // Para carga el Js

//fetch data
app.get("/galaxias", async (req: Request, res: Response) => {
  try {
    const data = await getGalaxiesJSON();
    const initialProps = {
      galaxies: data,
    };
    res.send(render(req.url, initialProps))
  } catch (error) {
    console.log(error);
  }
});

app.get("*", (req: Request, res: Response) => {
  res.send(render(req.url));
});

app.listen(config.PORT, () => {
  console.log(`Example app listening on port http://localhost:${config.PORT}`);
});
