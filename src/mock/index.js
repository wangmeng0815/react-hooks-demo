const Mock = require('mockjs');

let data = Mock.mock('/data', {
    'code': 0,
    'msg': 'success',
    "data": [{
        "key": 1,
        'area': 'CHINA',
    }, {
        "key": 2,
        "area": "ANTARCTIC"
    }]
})
