"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const sockJs = require("sockjs");
const echo = sockJs.createServer({ sockjs_url: 'http://cdn.jsdelivr.net/sockjs/1.0.1/sockjs.min.js' });
echo.on('connection', function (conn) {
    conn.on('data', function (message) {
        conn.write(message);
    });
    conn.on('close', function () { });
});
const server = http.createServer();
echo.installHandlers(server, { prefix: '/echo' });
server.listen(9999, '0.0.0.0');
