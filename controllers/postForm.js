const postReq = (req, res) => {
  const { testName } = req.body;
  console.log(testName, 'BRUh');
  if (testName) return res.status(200).send(`<h1>HELLO ${testName}</h1>`);
  res.status(401).send("<h1>gotcha</h1>");
};

module.exports = { postReq };
