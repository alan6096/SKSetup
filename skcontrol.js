(function ($) {
  $.fn.autocomplete = function(data) {
  var ul = $('<ul></ul>');
  for (var i = 0; i < data.length; i++) {
    var li = $('<li></li>').text(data[i]);
    ul.append(li);
  }

  this.on('input', function() {
    var val = this.val();
    ul.empty();
    for (var i = 0; i < data.length; i++) {
      if (data[i].indexOf(val) !== -1) {
        var li = $('<li></li>').text(data[i]);
        ul.append(li);
      }
    }
  });

  this.after(ul);
};
  })(jQuery);
