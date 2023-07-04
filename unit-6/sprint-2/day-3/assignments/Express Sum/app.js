/** @format */

// your code goes here
const express = require("express");

let app = express();

/**GET */
app.get("/sum", (req, res) => {
  const { a, b } = req.query;

 

  if (!a && !b) {
    res.status(400).send({ error: 'Both "a" and "b" are required parameters' });
  }else if(+a && +b){
    res.send({ sum: +a + (+b) });
  }
   else if (!+a && !+b) {
    res.status(400).send({ error: 'Both "a" and "b" must be numbers' });
  } else if (!+a) {
    res.status(400).send({ error: '"a" is not a valid number' });
  } else if (!+b) {
    res.status(400).send({ error: '"b" is not a valid number' });
  } 
});

app.listen(8080, () => {
  console.log("port is runnint in 8080");
});
// donot chnage the below code
module.exports = app;
