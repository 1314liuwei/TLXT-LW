/* jshint indent: 2 */
var Sequelize = require('sequelize');
sequelize = require('../model/config');

module.exports = sequelize.define('staff_clockin_t', {
    seq_no: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    terminal_number: {
      type: Sequelize.INTEGER(11).UNSIGNED.ZEROFILL,
      allowNull: false,
      references: {
        model: 'terminal_recipients_t',
        key: 'terminal_number'
      }
    },
    staff_number0: {
      type: Sequelize.INTEGER(6).UNSIGNED.ZEROFILL,
      allowNull: false,
      references: {
        model: 'staff_t',
        key: 'staff_number'
      }
    },
    stall_clockin_datetime0: {
      type: Sequelize.DATE,
      allowNull: false
    },
    staff_number1: {
      type: Sequelize.INTEGER(6).UNSIGNED.ZEROFILL,
      allowNull: true,
      references: {
        model: 'staff_t',
        key: 'staff_number'
      }
    },
    stall_clockin_datetime1: {
      type: Sequelize.DATE,
      allowNull: true
    },
    staff_number2: {
      type: Sequelize.INTEGER(6).UNSIGNED.ZEROFILL,
      allowNull: true,
      references: {
        model: 'staff_t',
        key: 'staff_number'
      }
    },
    stall_clockin_datetime2: {
      type: Sequelize.DATE,
      allowNull: true
    },
    staff_number3: {
      type: Sequelize.INTEGER(6).UNSIGNED.ZEROFILL,
      allowNull: true,
      references: {
        model: 'staff_t',
        key: 'staff_number'
      }
    },
    stall_clockin_datetime3: {
      type: Sequelize.DATE,
      allowNull: true
    },
    staff_number4: {
      type: Sequelize.INTEGER(6).UNSIGNED.ZEROFILL,
      allowNull: true,
      references: {
        model: 'staff_t',
        key: 'staff_number'
      }
    },
    stall_clockin_datetime4: {
      type: Sequelize.DATE,
      allowNull: true
    },
    staff_number5: {
      type: Sequelize.INTEGER(6).UNSIGNED.ZEROFILL,
      allowNull: true,
      references: {
        model: 'staff_t',
        key: 'staff_number'
      }
    },
    stall_clockin_datetime5: {
      type: Sequelize.DATE,
      allowNull: true
    }
  }, {
    tableName: 'staff_clockin_t'
  });
