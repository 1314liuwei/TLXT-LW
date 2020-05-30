/* jshint indent: 2 */
var Sequelize = require('sequelize');
sequelize = require('../model/config');


module.exports = sequelize.define('organization_t', {
    organization_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    organization_name: {
      type: Sequelize.STRING(255),
      allowNull: false
    },
    organization_level: {
      type: Sequelize.ENUM('1','2','3','9'),
      allowNull: false
    },
    organization_statue: {
      type: Sequelize.ENUM('履行','撤销'),
      allowNull: false
    },
    date_of_set: {
      type: Sequelize.DATEONLY,
      allowNull: true
    },
    date_of_cancellation: {
      type: Sequelize.DATEONLY,
      allowNull: true
    },
    organization_location: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    organization_longitude: {
      type: "DOUBLE(8,4)",
      allowNull: true
    },
    organization_latitude: {
      type: "DOUBLE(8,4)",
      allowNull: true
    },
    organization_height: {
      type: Sequelize.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'organization_t'
});