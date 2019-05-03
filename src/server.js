const mongoConnect = require('./config/utils/database').mongoConnect;
const Happi = require('hapi');
const server = new Happi.Server();
const userRoute = require('./routers/userRouter/userRouter');
const vehicalRouter = require('./routers/vehicalRouter/vehicalRouter');

const route = userRoute.concat(vehicalRouter)

server.connection({
    host: '127.0.0.1',
    port: 3000
})


server.start(err => {
    if(err) throw err;
    console.log(`server started on ${server.info.uri}`)
}, mongoConnect())

server.route(route);