$(document).on('focusin', '.input-ex', function() {
  $(this).parent().parent().addClass('active');
});
$(document).on('focusout', '.input-ex', function() {
  $(this).parent().parent().removeClass('active');
});
