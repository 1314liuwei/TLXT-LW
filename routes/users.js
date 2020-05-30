var express = require('express');
var router = express.Router();
var Staff = require('../model/staff_t');
var Organization = require('../model/organization_t');
var getOperatorData = require('../util/getOperatorData');

Staff.belongsTo(Organization, { foreignKey: 'staff_organization', as: 'organization' }) // 管理 organization


router.get('/all', getOperatorData.getAllOperatorData);
router.post('/search', getOperatorData.searchOperatorData);
router.post('/destory', getOperatorData.removeOperatorData);
router.post('/update', getOperatorData.updateOperatorData);


module.exports = router;
