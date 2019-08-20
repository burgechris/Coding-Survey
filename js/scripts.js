$(document).ready(function(){
  $('#coding_survey').submit(function(event){
    $('#coding_survey').hide();
    var results = getIt('languages');
    results = results.concat(getIt('plans'));
    results = results.concat(getIt('experience'));
    event.preventDefault();
    $('#responses').show();
    results.forEach(function(currentValue){
      $('#responses p').append(currentValue + '<br>');
    });
  });


});

function getIt(sectionName){
  var sectionNameResults = [];
  $(`input:checkbox[name=${sectionName}]:checked`).each(function(){
  var sectionValue = $(this).val();
  sectionNameResults.push(sectionValue);
  });
  return sectionNameResults;
}
