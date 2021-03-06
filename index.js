

//== Database API Server =======================================================

//-- Dependencies --------------------------------
const express  = require('express'      );
const config   = require('./config.js'  );
const apiMaker = require('./api-maker'  );
const database = require('./database.js');

//-- Create Server and open Port -----------------
const server = express();
server.listen(config.PORT, function() {
    console.log(config.MESSAGE_SERVER_START);
});

//-- Configure Server ----------------------------
server.use(express.json());
server.use(config.URL_PROJECTS , apiMaker(database.projects));
server.use(config.URL_ACTIONS  , apiMaker(database.actions ));
server.use(config.URL_CONTEXTS , apiMaker(database.contexts));
server.use(config.URL_ACTION_CONTEXTS, apiMaker(database.actionContexts));
