const request = require('request')
const API_KEY ='b6979b48a1617794d1e19b0c4a7639a0';
const BASE_URL = `http://food2fork.com/api/search`

function getPlaces(req, res, next) {
  request(BASE_URL, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body)
    }
    else {
      console.log(error)
    }
  })
}

module.exports = {
  getPlaces: getPlaces
};
