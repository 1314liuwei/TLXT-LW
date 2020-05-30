var Staff = require('../model/staff_t');
var Organization = require('../model/organization_t');

const removeOperatorData = async (req, res) => {

    await Staff.destroy({
        where: {
            staff_number: req.query.staff_number
        }
    }).then(result => {
        if (result){
            res.send({
            result: 'success',
            status: 200,
        })} else {
            res.send({
                result: 'failed',
                status: 200,
            })
        }
})}



module.exports = removeOperatorData;