$(document).on('focusin', '.input-ex', function() {
  $(this).siblings('.label-wrapper').addClass('active');
});
$(document).on('focusout', '.input-ex', function() {
  if (!this.value) {
    $(this).siblings('.label-wrapper').removeClass('active');
  }
});
$(document).on('input', '.input-ex', function() {
  if ($(this).val().length > 0) {
    $(this).parent().find('.cancel-btn').addClass('active');
  } else {
    $(this).parent().find('.cancel-btn').removeClass('active');
  }
});
$(document).on('click', '.input-ex-wrapper .cancel-btn', function() {
  $(this).removeClass('active');
  var $input = $(this).parent().siblings('.input-ex');
  $input.val('');
  $input.focus();
});
$(function() {
  $('input.input-ex').each(function() {
    var type    = $(this).attr('type'),
        name    = $(this).attr('name'),
        size    = $(this).attr('size'),
        maxlen  = $(this).attr('maxlength'),
        id      = $(this).attr('id'),
        classes = $(this).attr('class'),
        label   = $(this).attr('label-text'),
        cancel  = $(this).attr('cancel-text');
    var template  = '<div class="label-wrapper"><label';
        template += (typeof id !== 'undefined') ? ' for="' + id + '"' : '';
        template += '>' + label + '</label><span class="cancel-btn">';
        template += (typeof cancel !== 'undefined') ? cancel : '<i class="far fa-times-circle"></i>';
        template += '</span></div>';
    $(this).wrap('<div class="input-ex-wrapper input"></div>');
    $(this).after(template);
  });
  $('textarea.input-ex').each(function() {
    var name    = $(this).attr('name'),
        cols    = $(this).attr('cols'),
        rows    = $(this).attr('rows'),
        id      = $(this).attr('id'),
        classes = $(this).attr('class'),
        label   = $(this).attr('label-text'),
        cancel  = $(this).attr('cancel-text');
    var template  = '<div class="label-wrapper"><label';
        template += (typeof id !== 'undefined') ? ' for="' + id + '"' : '';
        template += '>' + label + '</label>';
        template += '<span class="cancel-btn"><i class="far fa-times-circle"></i></span>';
        template += '</div>';
        $(this).wrap('<div class="input-ex-wrapper textarea"></div>');
        $(this).after(template);
  });
});
