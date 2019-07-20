module.exports = {
  convertToCSV: function(obj) {
    var results = [];
    var arr = [];
    for (var prop in obj) {
      if (prop !== 'children') {
        arr.push(prop);
      }
    }
    results.push([arr.join(',')]);

    var recursion = function(obj) {
      var array = [];
      for (var prop in obj) {
        if (prop !== 'children') {
          array.push(obj[prop]);
        }
      }
      results.push([array.join(',')]);

      for (var i = 0; i < obj.children.length; ++i) {
        recursion(obj.children[i]);
      }
    }

    recursion(obj);
    results = results.join("\r\n");
    return results;
  }
};