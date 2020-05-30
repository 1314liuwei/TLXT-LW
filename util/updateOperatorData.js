var Staff = require('../model/staff_t');


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
    // console.log(data)
    await Staff.update(
        {
            staff_organization: undefined, 
            staff_status: undefined, 
            professional_title: undefined, 
            trainning_status: undefined
        }, 
        {
            where: {
                staff_number: req.query.staff_number
            }
        }
    ).then(result => {
        res.send({
            status: 200,
            result: result
        })
    })
}


module.exports = updateOperatorData;