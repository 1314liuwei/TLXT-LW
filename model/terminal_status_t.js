/* jshint indent: 2 */
var Sequelize = require('sequelize');
sequelize = require('../model/config');

module.exports = sequelize.define('terminal_status_t', {
    terminal_number: {
      type: Sequelize.INTEGER(11).UNSIGNED.ZEROFILL,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'terminal_recipients_t',
        key: 'terminal_number'
      }
    },
    terminal_status: {
      type: Sequelize.ENUM('关机','未退出关机','开机','未登录','已登录'),
      allowNull: false
    },
    terminal_battery_level: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    login_staff_number: {
      type: Sequelize.INTEGER(6).UNSIGNED.ZEROFILL,
      allowNull: true,
      defaultValue: '000000',
      references: {
        model: 'staff_t',
        key: 'staff_number'
      }
    },
    login_bind_date: {
      type: Sequelize.DATEONLY,
      allowNull: true,
      defaultValue: '1970-01-01'
    },
    organization_longitude: {
      type: "DOUBLE(8,4)",
      allowNull: false
    },
    organization_latitude: {
      type: "DOUBLE(8,4)",
      allowNull: false
    },
    organization_height: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'terminal_status_t'
  });
