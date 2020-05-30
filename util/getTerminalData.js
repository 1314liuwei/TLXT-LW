var Terminal_recipients_t = require('../model/terminal_recipients_t');
var Terminal_status = require('../model/terminal_status_t');
var Sequelize = require('sequelize');

Terminal_recipients_t.belongsTo(Terminal_status, { foreignKey: 'terminal_number', as: 'number' }) // 管理 organization


const Op = Sequelize.Op;


// 查询所有终端信息
const getAllTerminalData = async (req, res) => {
    try {
        await Terminal_recipients_t.findAll({
            limit: parseInt(req.query.count),
            offset: (parseInt(req.query.page) - 1) * parseInt(req.query.page),
            
            include: {
                model: Terminal_status, // 关联查询
                as: 'number', // 别名
                attributes: ['terminal_status']
            }
        }).then(result => {
            res.send({
                data: result,
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


// 搜索终端
const searchTerminalData = async (req, res) => {
    try {
        await Terminal_recipients_t.findAll({
            where: {
                [Op.or]: [
                    { terminal_number: req.body.terminal_number },
                    { receiving_staff_number: req.body.receiving_staff_number },
                    { receiving_organization_id: req.body.receiving_organization_id },
                    { receiving_date: req.body.receiving_date }
                ]
            },
            include: {
                model: Terminal_status, // 关联查询
                as: 'number', // 别名
                attributes: ['terminal_status']
            }
        }).then(result => {
            res.send({
                data: result,
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
    



// 删除终端
const removeTerminalData = async (req, res) => {
    try {
        await Terminal_recipients_t.destroy({
            where: {
                [Op.or]: {
                    terminal_number: req.body.terminal_number,
                    seq_no: req.body.seq_no,
                }
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
        })
    } catch (e) {
        res.send({
            status: 200,
            result: 'ERROR'
        });
    }
}



// 更新终端信息
const updateTerminalData = async (req, res) => {
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
    // console.log(data)
    try {
        await Staff.update(
            {
                terminal_number: req.body.terminal_number, 
                receiving_organization_id: req.body.receiving_organization_id, 
                receiving_staff_number: req.body.receiving_staff_number, 
                receiving_date: req.body.receiving_date,
                bind_date1: req.body.bind_date1
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
    updateTerminalData,
    getAllTerminalData,
    removeTerminalData,
    searchTerminalData
};