/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('group_t', {
    group_id: {
      type: DataTypes.INTEGER(8).UNSIGNED.ZEROFILL,
      allowNull: false,
      primaryKey: true
    },
    group_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    group_status: {
      type: DataTypes.ENUM('激活','停用'),
      allowNull: false,
      defaultValue: '激活'
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    end_time: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'group_t'
  });
};
