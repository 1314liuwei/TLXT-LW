const Sequelize = require('sequelize');
const db = require('../utils/seqconfig');
const TerminalRecipients = require('../models/terminal_recipients_t')(db, Sequelize);
const TerminalStatus = require('../models/terminal_status_t')(db, Sequelize);

TerminalRecipients.belongsTo(TerminalStatus, {
  foreighKey: 'terminal_number',
  targetKey: 'terminal_number',
  as: 'terminal'
});

const getTerminalData = async (req, res) => {

  let list = [];
  await TerminalRecipients.findAll({
    limit: parseInt(req.query.count),
    offset: (parseInt(req.query.page) - 1) * parseInt(req.query.count),
    include: [{
      model: TerminalStatus,
      as: 'terminal',
      attributes: ['terminal_status', 'login_staff_number']
    }]
  }).then(result => {
    result.forEach(element => {
      list.push(element.dataValues)
    });
    res.send({
      data: list
    });
  })
}

const searchTerminalData = async (req, res) => {
  let list = [];
  console.log(req)
  const result = await TerminalRecipients.findAll()
  result.forEach(element => {
    list.push(element.dataValues)
  });
  console.log(list)
  res.send({
    data: list
  });
}

const updataTerminalData = async (req, res) => {
  let list = [];
  console.log(typeof req.body);
  console.log(req.query)
  // console.log(req.body.sunstring)
  // console.log(req.body.seq_no);
  res.send(req.body);
}

// (async () => {
//   searchTerminalData()
// })()

module.exports = {
  getTerminalData,
  searchTerminalData,
  updataTerminalData
}