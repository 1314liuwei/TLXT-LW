/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('task_order_t', {
    task_seq_no: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    task_comm_number: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'task_comm_t',
        key: 'task_comm_number'
      }
    },
    task_order_list_id: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    task_order_return_id: {
      type: DataTypes.ENUM('未确认','确认','完成','故障'),
      allowNull: true
    },
    task_instructions: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    task_instructions_return: {
      type: DataTypes.ENUM('未确认','确认'),
      allowNull: true
    },
    task_command: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    task_command_return: {
      type: DataTypes.ENUM('未执行','执行'),
      allowNull: true
    },
    organization_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'organization_t',
        key: 'organization_id'
      }
    },
    staff_number: {
      type: DataTypes.INTEGER(6).UNSIGNED.ZEROFILL,
      allowNull: true,
      references: {
        model: 'staff_t',
        key: 'staff_number'
      }
    }
  }, {
    tableName: 'task_order_t'
  });
};
