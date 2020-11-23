const axios = require('axios');
const urlData='http://api.ajbbihor.ro/api/article/list'

async function makeGetRequest() {

  let res = await axios.get(urlData);

  let data = res.data;
  console.log(data);
}
makeGetRequest();