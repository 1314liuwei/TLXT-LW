/* jshint indent: 2 */

var Sequelize = require('sequelize');
sequelize = require('../model/config');


module.exports = sequelize.define('staff_t', {
    staff_number: {
        type: Sequelize.INTEGER(6).UNSIGNED.ZEROFILL,
        allowNull: false,
        primaryKey: true
    },
    ID_number: {
        type: Sequelize.CHAR(20),
        allowNull: false,
        unique: true
    },
    staff_name: {
        type: Sequelize.STRING(20),
        allowNull: false
    },
    staff_type: {
        type: Sequelize.ENUM('主任','副主任','指挥员','作业人员'),
        allowNull: false
    },
    staff_organization: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
            model: 'organization_t',
            key: 'organization_id'
    }
    },
    system_permission: {
        type: Sequelize.ENUM('系统操作员','指挥员','一般'),
        allowNull: false
    },
    staff_password: {
        type: Sequelize.STRING(255),
        allowNull: true,
        // defaultValue: '111111'
    },
    staff_facial_information: {
        type: Sequelize.STRING(255),
        allowNull: true,
        // defaultValue: 'xxxxxxxx'
    },
    staff_status: {
        type: Sequelize.ENUM('在岗','离职','退休','请假','辞退'),
        allowNull: false
    },
    degree_of_education: {
        type: Sequelize.ENUM('初中','高中','大专','本科','硕士研究生','博士研究生'),
        allowNull: false
    },
    professional_title: {
        type: Sequelize.ENUM('无','技工','技师','初级工程师','中级工程师','副高级工程师','正高级工程师','副教授','正教授'),
        allowNull: false
    },
    trainning_status: {
        type: Sequelize.ENUM('未培训过','已培训未过期','已经过期'),
        allowNull: false
    },
    name_of_training_certificate: {
        type: Sequelize.STRING(255),
        allowNull: true
    },
    number_of_training_certificate: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    issue_date: {
        type: Sequelize.DATEONLY,
        allowNull: true
    },
    validity_of_training_certificate: {
        type: Sequelize.DATEONLY,
        allowNull: true
    },
    training_certificate_authority: {
        type: Sequelize.STRING(255),
        allowNull: true
    }
    }, {
        tableName: 'staff_t',
        timestamps: false
    }
);
