const app = require('./app.js');

const PORT = process.env.PORT || 3050;

app.listen(PORT, () => console.log(`server started on port ${PORT} `));



