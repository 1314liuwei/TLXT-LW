var Staff = require('../model/staff_t');
var Organization = require('../model/organization_t');
var Sequelize = require('sequelize');

const Op = Sequelize.Op;

const getAllOperatorData = async (req, res) => {

    await Staff.findAll({
        where: {
            [Op.or]: [
                { staff_number: req.query.staff_number },
                { staff_name: req.query.staff_name },
                { ID_number: req.query.ID_number },
            ]
        },
        include: {
            model: Organization, // 关联查询
            // as: 'organization', // 别名
            attributes: ['organization_name']
        }
    }).then(result => {
        res.send({
            data: result
        });
    })
}

module.exports = getAllOperatorData;