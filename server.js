// Use express
const express = require('express');

const app = express();
// Tells which port to use
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

// Routing
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

// Listens to the port and tells user which port the application is running on
app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});