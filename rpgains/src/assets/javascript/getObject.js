function getObject(theObject) {
  var result = null;
  if(theObject instanceof Array) {
    for(var i = 0; i < theObject.length; i++) {
      result = getObject(theObject[i]);
      if (result) {
        break;
      }
    }
  }
  else
  {
    for(var prop in theObject) {
      if(prop == 'intVal') {
        console.log(prop + ': ' + theObject[prop]);
        if(typeof theObject[prop] === 'number') {
          var steps = theObject[prop];
          return steps;
        }
      }
      if(theObject[prop] instanceof Object || theObject[prop] instanceof Array) {
        result = getObject(theObject[prop]);
        if (result) {
          break;
        }
      }
    }
  }
  return String(result);
}
