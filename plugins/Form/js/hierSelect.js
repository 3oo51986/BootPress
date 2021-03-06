(function($) {
  $.fn.hierSelect = function(select, options) {
    $(this).change(function() {
      var id = $(this).val();
      var hier = $(select);
      var preselect = hier.val();
      hier.each(function(){
        hier.children().remove();
        if (id != "") {
          $.each(options[id], function(key,value){
            if (typeof value === "object") {
              var optgroup = $("<optgroup />", {label:key});
              $.each(value, function(key,value){
                if (key == 0) key = "";
                var option = $("<option />").val(key).html(value);
                if (preselect == key) option.attr("selected", "selected");
                optgroup.append(option);
              });
              hier.append(optgroup);
            } else {
            if (key == 0) key = "";
              var option = $("<option />").val(key).html(value);
              if (preselect == key) option.attr("selected", "selected");
              hier.append(option);
            }
          });
        } // end if id
      }); // end each hier
    }); // end this change
  };
})(jQuery);
