/*
 * @Author: your name
 * @Date: 2022-03-27 14:10:51
 * @LastEditTime: 2022-04-09 20:04:36
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /nginx-docker/server.js
 */
const http = require('http');

let users = [{
    id: 11, name: '13331mark----'
}, {
    id: 2, name: 'Creator'
}]
let server = http.createServer(function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if(req.url === '/api/users') {
        res.end(JSON.stringify(users))
    } else {
        res.end('not found')
    }
})

server.listen(3000, () => {
    console.log(' 后端服务器启动 端口3000')
})