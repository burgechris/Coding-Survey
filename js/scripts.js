$(document).ready(function(){
  $('form').submit(function(event){
    $('#coding_survey').hide();
    var results = getIt('languages');
    results.concat(getIt('plans'));
    results.concat(getIt('experience'));

  });


});

function getIt(sectionName){
  var sectionNameResults = [];
  $(`input:checkbox[name=[${sectionName}]:checked`).each(function(){
  sectionNameResults.push($(this).val());
  });
  return sectionNameResults;
}
