var fs = require('fs');
var lines;

function countLines(callback)
{
  fs.readFile(process.argv[2], function doneReading(err, contents)
  {
    var strings = contents.toString().split('\n');
    lines = strings.length;
    callback();
  });
}

function logLines()
{
  console.log(lines-1);
}

countLines(logLines);
