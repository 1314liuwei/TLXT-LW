var Staff = require('../model/staff_t');
var Organization = require('../model/organization_t');
var Sequelize = require('sequelize');

const Op = Sequelize.Op;


// 查询所有员工信息
const getAllOperatorData = async (req, res) => {
    console.log(req.query);
    // try {
        
        await Staff.findAll({
            raw: true,
            limit: parseInt(req.query.count),
            offset: (parseInt(req.query.page) - 1) * parseInt(req.query.page),
            attributes: ['staff_number', 'ID_number', 
                'staff_name', 'staff_type', 'system_permission', 
                'staff_password', 'staff_status', 'degree_of_education', 'trainning_status', 
                'professional_title'],
            include: {
                model: Organization, // 关联查询
                as: 'organization', // 别名
                attributes: ['organization_name']
            }
        }).then(result => {
            // result.staff_organization = result.organization.organization_name;
            console.log(result);
            res.send({
                data: result,
                status: 200
            });
        })
    // } catch (e) {
    //     res.send({
    //         status: 200,
    //         result: 'ERROR'
    //     });
    // }

    
}


// 搜索员工
const searchOperatorData = async (req, res) => {
    try {
        await Staff.findAll({
        where: {
            [Op.or]: [
                { staff_number: req.body.staff_number },
                { staff_name: req.body.staff_name },
                { ID_number: req.body.ID_number },
            ]
        },
        include: {
            model: Organization, // 关联查询
            // as: 'organization', // 别名
            attributes: ['organization_name']
        }
    }).then(result => {
            res.send({
                result: result,
                status: 200
            });
        })
    } catch (e) {
        res.send({
            status: 200,
            result: 'ERROR'
        });
    }
}



// 删除员工
const removeOperatorData = async (req, res) => {
    try {
        await Staff.destroy({
            where: {
                staff_number: req.body.staff_number
            }
        }).then(result => {
            res.send({
                result: result,
                status: 200,
            })
        })
    } catch (e) {
        res.send({
            status: 200,
            result: 'ERROR'
        });
    }
}



// 更新员工信息
const updateOperatorData = async (req, res) => {
    // var data = {
    //     staff_organization: undefined, 
    //     staff_status: undefined, 
    //     professional_title: undefined, 
    //     trainning_status: undefined
    // }
    // for(var element in data) {
    //     if (req.query[element]) {
    //         data[element] = req.query[element];
    //     } else {
    //         delete data[element];
    //     }
    // };
    try {
        await Staff.update(
            {
                staff_organization: undefined, 
                staff_status: undefined, 
                professional_title: undefined, 
                trainning_status: undefined
            }, 
            {
                where: {
                    staff_number: req.body.staff_number
                }
            }
        ).then(result => {
            res.send({
                status: 200,
                result: result
            })
        })
    } catch (e) {
        res.send({
            status: 200,
            result: 'ERROR'
        });
    }
}


module.exports = {
    updateOperatorData,
    getAllOperatorData,
    removeOperatorData,
    searchOperatorData
};