var cluster = require('cluster')

//w3----------------------------
if(cluster.isWorker){
  console.log("worker");
}
else{
    console.log("i am a master");
    cluster.fork()
    cluster.fork()
}

//stack-----------------------------------
// const cluster = require('cluster');
//     const http = require('http');
//     const numCPUs = require('os').cpus().length;

//     if (cluster.isMaster) {
//       masterProcess();
//     } else {
//       childProcess();  
//     }

//     function masterProcess() {
//       console.log(`Master ${process.pid} is running`);

//       for (let i = 0; i < numCPUs; i++) {
//         console.log(`Forking process number ${i}...`);
//         cluster.fork();
//       }

//       process.exit();
//     }

//     function childProcess() {
//       console.log(`Worker ${process.pid} started and finished`);

//       process.exit();
//     }


//official doc------------------------------------
// const numCPUs = require('os').cpus().length;
// const http = require('http')
// const process = require('process')

// if (cluster.isPrimary) {
//   console.log(`Primary ${process.pid} is running`);

//   // Fork workers.
//   for (let i = 0; i < numCPUs; i++) {
//     cluster.fork();
//   }

//   cluster.on('exit', (worker, code, signal) => {
//     console.log(`worker ${worker.process.pid} died`);
//   });
// } else {
//   // Workers can share any TCP connection
//   // In this case it is an HTTP server
//   http.createServer((req, res) => {
//     res.writeHead(200);
//     res.end('hello world\n');
//   }).listen(8000);

//   console.log(`Worker ${process.pid} started`);
// }