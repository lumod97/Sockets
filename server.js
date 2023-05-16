const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
  cors: {
    origins: [process.env.VUE_APP_SOCKETS_URL]
  }
});

app.get('/', (req, res) => {
  res.send('<h1>Hey Socket.io</h1>');
});

io.on('connection', (socket) => {
  socket.on('testSocket', (msg) => {
    console.log(msg)
    io.emit('testSocket', msg);
  });
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});