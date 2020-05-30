var Staff = require('../model/staff_t');
var Organization = require('../model/organization_t');


const getAllOperatorData = async (req, res) => {

    await Staff.findAll({
        limit: parseInt(req.query.dataCount),
        offset: (parseInt(req.query.page) - 1) * parseInt(req.query.page),
        include: {
            model: Organization, // 关联查询
            as: 'organization', // 别名
            attributes: ['organization_name']
        }
    }).then(result => {
        res.send({
            data: result
        });
    })
}

module.exports = getAllOperatorData;