window.linkify = function(){
  jQuery('body').find('*').contents().filter(function() {
    return this.nodeType == 3;
  }).each(function(i, elem){
    var matches = /(.*)(http\S{0,})(.*)/g.exec(elem.wholeText);
    if (matches){
      var parent = elem.parentNode;
      matches[2] = matches[2].replace(' ', '');
      var before = matches[1];
      var replace = jQuery('<a>' + matches[2] + '</a>').attr('href', matches[2])[0];
      var after = matches[3];
      parent.insertBefore(document.createTextNode(before), elem);
      parent.insertBefore(replace, elem);
      parent.insertBefore(document.createTextNode(after), elem);
      parent.removeChild(elem);
    }
  });
}
