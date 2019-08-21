$(document).on('focusin', '.input-ex', function() {
  $(this).siblings('.label-wrapper').addClass('active');
});
$(document).on('focusout', '.input-ex', function() {
  if (!this.value) {
    $(this).siblings('.label-wrapper').removeClass('active');
  }
});
$(document).on('input', '.input-ex', function() {
  if (this.value) {
    $(this).siblings('.label-wrapper').find('.cancel-btn').addClass('active');
  } else {
    $(this).siblings('.label-wrapper').find('.cancel-btn').removeClass('active');
  }
});
$(document).on('click', '.input-ex-wrapper .cancel-btn', function() {
  $(this).parent().siblings('.input-ex').val('');
  $(this).parent().removeClass('active');
  $(this).removeClass('active');
});
$(document).on({
  "mouseenter": function() {
    $(this).children('span').addClass('hover');
  },
  "mouseleave": function() {
    $(this).children('span').removeClass('hover');
  }
}, '.input-ex-wrapper .cancel-btn');

$(function() {
  $('input.input-ex').each(function() {
    var id         = $(this).attr('id');
    var labelText  = $(this).data('label-text'),
        labelFixed = $(this).data('label-fixed'),
        cancelBtn  = $(this).data('cancel-btn');
    var template  = '<div class="label-wrapper';
        template += (labelFixed === true) ? ' fixed' : '';
        template += '"><label';
        template += (typeof id !== 'undefined') ? ' for="' + id + '"' : '';
        template += '>' + labelText + '</label>';
        template += (cancelBtn !== false) ? '<span class="cancel-btn"><span>&times;</span></span>' : '';
        template += '</div>';
    $(this).wrap('<div class="input-ex-wrapper input"></div>');
    $(this).after(template);
  });
  $('textarea.input-ex').each(function() {
    var id        = $(this).attr('id');
    var labelText = $(this).data('label-text'),
        labelFixed = $(this).data('label-fixed'),
        cancelBtn     = $(this).data('cancel-btn');
    var template  = '<div class="label-wrapper';
        template += (labelFixed === true) ? ' fixed' : '';
        template += '"><label';
        template += (typeof id !== 'undefined') ? ' for="' + id + '"' : '';
        template += '>' + labelText + '</label>';
        template += (cancelBtn !== false) ? '<span class="cancel-btn"><span>&times;</span></span>' : '';
        template += '</div>';
        $(this).wrap('<div class="input-ex-wrapper textarea"></div>');
        $(this).after(template);
  });
});
