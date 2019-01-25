'use strict'

const Sequelize = require('sequelize')
process.env.SUPPRESS_NO_CONFIG_WARNING = 'y';
//process.env["NODE_CONFIG_DIR"] = __dirname + "/config/";

const config = require('config')

const sequelizeConfig = config.get('db.config')

module.exports = new Sequelize(sequelizeConfig)
