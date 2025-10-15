const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const code = require("./code");
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
  //console.log(`Endpoint disponible: http://localhost:${port}/allData`);
  //console.log(`Endpoint disponible: http://localhost:${port}/dataInfoId/9`);
  //console.log(`Endpoint disponible: http://localhost:${port}/dataInfoStatus/false`);
  //console.log(`Endpoint disponible: http://localhost:${port}/dataInfoQuery?nameBook=Lealtad`);
  console.log(`http://localhost:${port}/dataInfoQuery?status=true&gender=Espada&nameBook=Filo%20V`);
});
