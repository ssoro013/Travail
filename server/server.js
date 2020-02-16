var app = require('./app');
var {port} = require('./app');

app.listen(app.port, () => console.log(`🚀 Server is Launched on Port ${port}!`))