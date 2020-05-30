/* jshint indent: 2 */
var Sequelize = require('sequelize');
sequelize = require('../model/config');

module.exports = sequelize.define('terminal_recipients_t', {
    seq_no: {
      type: Sequelize.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    terminal_number: {
      type: Sequelize.INTEGER(11).UNSIGNED.ZEROFILL,
      allowNull: false
    },
    receiving_organization_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'organization_t',
        key: 'organization_id'
      }
    },
    receiving_staff_number: {
      type: Sequelize.INTEGER(6).UNSIGNED.ZEROFILL,
      allowNull: false,
      references: {
        model: 'staff_t',
        key: 'staff_number'
      }
    },
    receiving_date: {
      type: Sequelize.DATEONLY,
      allowNull: false,
      defaultValue: '1970-01-01'
    },
    receiving_status: {
      type: Sequelize.ENUM('领用','归还','报废'),
      allowNull: false
    },
    return_date: {
      type: Sequelize.DATEONLY,
      allowNull: true,
      defaultValue: '1970-01-01'
    },
    bind_staff_number1: {
      type: Sequelize.INTEGER(6).UNSIGNED.ZEROFILL,
      allowNull: true,
      references: {
        model: 'staff_t',
        key: 'staff_number'
      }
    },
    bind_date1: {
      type: Sequelize.DATEONLY,
      allowNull: true,
      defaultValue: '1970-01-01'
    },
    bind_staff_number2: {
      type: Sequelize.INTEGER(6).UNSIGNED.ZEROFILL,
      allowNull: true,
      references: {
        model: 'staff_t',
        key: 'staff_number'
      }
    },
    bind_date2: {
      type: Sequelize.DATEONLY,
      allowNull: true,
      defaultValue: '1970-01-01'
    },
    bind_staff_number3: {
      type: Sequelize.INTEGER(6).UNSIGNED.ZEROFILL,
      allowNull: true,
      references: {
        model: 'staff_t',
        key: 'staff_number'
      }
    },
    bind_date3: {
      type: Sequelize.DATEONLY,
      allowNull: true,
      defaultValue: '1970-01-01'
    },
    bind_staff_number4: {
      type: Sequelize.INTEGER(6).UNSIGNED.ZEROFILL,
      allowNull: true,
      references: {
        model: 'staff_t',
        key: 'staff_number'
      }
    },
    bind_date4: {
      type: Sequelize.DATEONLY,
      allowNull: true,
      defaultValue: '1970-01-01'
    },
    bind_staff_number5: {
      type: Sequelize.INTEGER(6).UNSIGNED.ZEROFILL,
      allowNull: true,
      references: {
        model: 'staff_t',
        key: 'staff_number'
      }
    },
    bind_date5: {
      type: Sequelize.DATEONLY,
      allowNull: true,
      defaultValue: '1970-01-01'
    }
  }, {
    tableName: 'terminal_recipients_t',
    timestamps: false
  });
