const config = require('./config')
const app = require('./src/app')


const { port }  = config;

app.listen(port, () => {
   console.log( `Listening on port ${port}` );
})