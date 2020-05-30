var Staff = require('../model/staff_t');


const loginVerification = async (req, res) => {
  await Staff.findAll({
    where: {
      staff_number: req.body.name
    },
    attributes: ['staff_password']
  }).then(result => {
    if (!result.length) {
      res.send({
        code: 1,
        message: '用户名错误',
      });
    } else if (req.body.password != result[0].dataValues.staff_password) {
      res.send({
        code: 2,
        message: '用户密码错误',
      });
    } else {
      res.send({
        code: 0,
        message: '登录成功',
      })
    }
    return;
  })
}


module.exports = loginVerification;