/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('task_staff_t', {
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
    staff_number: {
      type: DataTypes.INTEGER(6).UNSIGNED.ZEROFILL,
      allowNull: true,
      references: {
        model: 'staff_t',
        key: 'staff_number'
      },
      unique: true
    }
  }, {
    tableName: 'task_staff_t'
  });
};
