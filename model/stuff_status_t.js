/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('stuff_status_t', {
    member_id: {
      type: DataTypes.INTEGER(6).UNSIGNED.ZEROFILL,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'staff_t',
        key: 'staff_number'
      }
    },
    group_id: {
      type: DataTypes.INTEGER(7).UNSIGNED.ZEROFILL,
      allowNull: false,
      defaultValue: '10000000',
      references: {
        model: 'group_t',
        key: 'group_id'
      },
      unique: true
    },
    online_status: {
      type: DataTypes.ENUM('在线','离线'),
      allowNull: false
    },
    online_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '100'
    }
  }, {
    tableName: 'stuff_status_t'
  });
};
