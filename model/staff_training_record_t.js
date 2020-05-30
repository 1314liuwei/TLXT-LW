/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('staff_training_record_t', {
    seq_no: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    staff_number: {
      type: DataTypes.INTEGER(6).UNSIGNED.ZEROFILL,
      allowNull: false
    },
    training_question_no: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    issue_datetime: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    training_scores: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    test_scores: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'staff_training_record_t'
  });
};
