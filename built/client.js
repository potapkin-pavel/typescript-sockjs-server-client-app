"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SockJsClient = require("sockjs-client");
const sockJs = new SockJsClient('http://localhost:9999/echo');
sockJs.onopen = () => {
    console.log('open');
    sockJs.send('test');
};
sockJs.onmessage = (message) => {
    console.log('message: ', message.data);
    sockJs.close();
};
sockJs.onerror = (error) => {
    console.log('error: ', error);
};
sockJs.onclose = () => {
    console.log('close');
};
