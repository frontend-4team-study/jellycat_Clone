$(function () {
    const rate = 0.4;
    const max = 5;
    const percent = (rate / max) * 100;
    $('#review')
      .find('#back-score')
      .css('width', percent + '%');
  });