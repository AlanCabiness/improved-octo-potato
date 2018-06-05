function deepParseObject(theObject) {
  for(var prop in theObject) {
    if(typeof theObject[prop] === "string" && (theObject[prop].indexOf('{') == 0 || theObject[prop].indexOf('[') == 0)) {
      theObject[prop] = JSON.parse(theObject[prop]);
    }
    if(theObject[prop] instanceof Object || theObject[prop] instanceof Array)
      deepParseObject(theObject[prop]);
  }
}
