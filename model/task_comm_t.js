/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('task_comm_t', {
    task_comm_number: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    task_comm_name: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    channel_number: {
      type: DataTypes.INTEGER(11).UNSIGNED.ZEROFILL,
      allowNull: false
    },
    task_comm_status: {
      type: DataTypes.ENUM('活跃','关闭'),
      allowNull: false
    },
    task_comm_create_datetime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    task_comm_close_datetime: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: '1970-01-01 00:00:00'
    },
    task_comm_message_status: {
      type: DataTypes.ENUM('未完成','完整','未完整'),
      allowNull: true
    }
  }, {
    tableName: 'task_comm_t'
  });
};
