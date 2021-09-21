const commandLine = process.argv.slice(2)

const fs = require('fs')

const request = require('request');
request(commandLine[0], function (error, response, body) {
  console.error('error:', error);
  console.log('statusCode:', response && response.statusCode);

  fs.writeFile(commandLine[1], body, err => {
    if (err) {
      console.error(err)
      return
    }
    //file written successfully

    console.log(`Downloaded and saved ${body.length} bytes to ${commandLine[1]}`)
  })

});