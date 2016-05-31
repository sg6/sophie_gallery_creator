var fs = require('fs');

var dir =  process.argv[2];
fs.readdir(dir, function(err, data) {
  if (err) return;
  var da;
  for(d in data) {
    da = data[d];
    console.log('<div class="image-wrapper"><img src="/images/news/' + dir + data[d] + '" alt="' + data[d] + '" /></div>');
  }
});
