//biz logic

var inchCent = function(number1) {
  return number1 * 2.54;
};
var galLit = function(number1) {
  return number1 * 3.78541;
};

//UI logic

$(document).ready(function() {
  $("form#in-cen").submit(function(event) {
    event.preventDefault();
    console.log("I'm here");
    var number1 = parseInt($("#inches-centimeters").val());
    var result = inchCent(number1);
    $("#output").text(result);
  });
  $("form#gal-lit").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#gallons-liters").val());
    var result = galLit(number1);
    $("#output").text(result);
  });
});
