/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('task_terminal_t', {
    seq_no: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    task_seq_no: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'task_order_t',
        key: 'task_seq_no'
      }
    },
    terminal_number: {
      type: DataTypes.INTEGER(11).UNSIGNED.ZEROFILL,
      allowNull: false,
      references: {
        model: 'terminal_recipients_t',
        key: 'terminal_number'
      }
    }
  }, {
    tableName: 'task_terminal_t'
  });
};
