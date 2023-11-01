const express = require("express");
const cors = require("cors");
const { translators } = require("./translators");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/message", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get("/translators", (req, res) => {
  const search = req.query.search;
  console.log(`Search: ${search}`);

  if (!search) {
    res.json(translators);
    return;
  }

  const filteredTranslators = translators.filter((translator) => {
    for (const key in translator) {
      if (
        key !== "detail" &&
        key !== "photoUrl" &&
        key !== "id" &&
        translator[key].toString().toLowerCase().includes(search.toLowerCase())
      ) {
        return true;
      }
    }
    return false;
  });

  res.json(filteredTranslators);
});

app.get("/translator/:id", (req, res) => {
  const id = req.params.id;

  const translatorsFiltered = translators.find((item) => item.id == id);

  res.json(translatorsFiltered);
});

app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});
