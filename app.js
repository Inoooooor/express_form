const express = require("express");
const app = express();
const port = 5000;
const formRouter = require('./routes/formRoute');
app.use(express.static("./public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/test', formRouter);
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
