(function($) {
    $.fn.autoComplete = function(options) {
        var defaults = {
            data: []
        };

        var settings = $.extend({}, defaults, options);

        return this.each(function() {
            var input = this;
            var datalistId = $(input).attr('list');
            var datalist = $("#" + datalistId);

            $(input).on('input', function() {
                var value = $(this).val();

                // Clear previous options
                datalist.empty();

                if (value.length > 0) {
                    var regex = new RegExp(`^${value}`, 'i');
                    var suggestions = settings.data.filter(item => regex.test(item));

                    suggestions.forEach(item => {
                        var option = $("<option>").val(item);
                        datalist.append(option);
                    });
                }
            });
        });
    };
}(jQuery));
