import express from 'express';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

import code from './code.js';
const api = new code();

// Endpoint 1: AllData
app.get("/allData", (req, res) => {
  try {
    const result = api.allData();
    res.json(result);
  } catch (error) {
    res.status(500).json({
      status: false,
      error: error.message,
      dateTime: new Date().toISOString(),
    });
  }
});

// Endpoint 2: /dataInfoId/:idItem
app.get("/dataInfoId/:idItem", (req, res) => {
  try {
    const idItem = req.params.idItem;
    const item = api.dataInfoId(idItem);

    if (item) {
      res.json({
        status: true,
        item: item,
        dateTime: new Date().toISOString(),
      });
    } else {
      res.status(404).json({
        status: false,
        error: "Item no encontrado",
        dateTime: new Date().toISOString(),
      });
    }
  } catch (error) {
    res.status(500).json({
      status: false,
      error: error.message,
      dateTime: new Date().toISOString(),
    });
  }
});

// Endpoint 3: /dataInfoStatus/:status
app.get("/dataInfoStatus/:status", (req, res) => {
  try {
    const status = req.params.status;
    const item = api.dataInfoStatus(status === 'true');

    res.json({
      status: true,
      data: item,
      dateTime: new Date().toISOString(),
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      error: error.message,
      dateTime: new Date().toISOString(),
    });
  }
});

// Endpoint 4: /dataInfoQuery?status=true
app.get("/dataInfoQuery", (req, res) => {
  try {
    const Query = req.query;
    const item = api.dataInfoQuery(Query);

    res.json({
      status: true,
      data: item,
      dateTime: new Date().toISOString(),
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      error: error.message,
      dateTime: new Date().toISOString(),
    });
  }
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
  console.log(`Endpoint disponible: http://localhost:${port}/allData`);
  console.log(`Endpoint disponible: http://localhost:${port}/dataInfoId/11`);
  console.log(`Endpoint disponible: http://localhost:${port}/dataInfoStatus/false`);
  console.log(`Endpoint disponible: http://localhost:${port}/dataInfoQuery?nameBook=Lealtad`);
  console.log(`Endpoint disponible: http://localhost:${port}/dataInfoQuery?id=5&datePublish=10/8/2010&gender=Espada`);
});
