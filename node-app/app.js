const express = require('express');
const app = express();

let winston = require('winston');

let logger;

const configureLogger = async () => {
  logger = new winston.Logger({  
    exitOnError: false,
    transports: [ 
      new winston.transports.File({
        filename: '/var/log/mylog.log',
        tailable: true,
        json: false,
        formatter: function(options) {
          return options.message;
        }
      })
    ],
  });
  console.log('Logger configured')
};
 
const configureRoutes = async () => {
  app.get('/', (req, res) => {
    logger.info(JSON.stringify({data1:Math.random() * 10, data2:Math.random() * 100, data3:Math.random()}))
    res.status(204).end();
  });
}

const startApp = async () => {
  app.listen(3000);
  console.log('app listening at port 3000')
}


configureLogger()
  .then(configureRoutes)
  .then(startApp)
