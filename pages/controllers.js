module.exports.index = function (req, res) {
  res.send(`
    <!DOCTYPE html/>
    <html>
      <head>
        <title>Shri 2018</title>
        <script src="/scripts/test.js"></script>
      </head>
      <body>
        <h1>
          Hello
        </h1>
      </body>
    </html>
  `);
};
