const ogs = require('open-graph-scraper');

exports.handler = async (event) => {
  console.log(decodeURI(event.queryStringParameters.url));

  try {
    const res = await ogs({ url: decodeURI(event.queryStringParameters.url) });
    const response = {
      statusCode: 200,
      //  Uncomment below to enable CORS requests
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
      },
      body: JSON.stringify(res.result),
    };
    return response;
  } catch (e) {
    console.log(e);
  }

  const response = {
    statusCode: 200,
    //  Uncomment below to enable CORS requests
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
    },
    body: JSON.stringify('nop'),
  };
  return response;
};
