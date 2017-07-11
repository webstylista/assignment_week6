$(document).ready(function() {

  var cities = ["NYC", "SF", "LA", "ATX", "SYD"];

  /* list array as selection options */
  cities.forEach(function(city) {
    $('#city-type').append("<option>" + city + "</option>");
  });

  /* check and change the pic accordingly */
  var updatePic = function(event) {
    var city = $(event.target).val();
    var atx = "austin"; /* because I don't get how to use '$.attr' in this case */
    var syd = "sydney"; /* ditto */
    if (city === cities[0] || city === cities[1] || city == cities[2]) {
      $('body').css('background', 'url(images/' + city + '.jpg)');
    } else if (city === cities[3]) {
      $('body').css('background', 'url(images/' + atx + '.jpg)'); /* redundant, but flexible? */
    } else if (city === cities[4]) {
      $('body').css('background', 'url(images/' + syd + '.jpg)'); /* honestly, couldn't I just rename the images in the folder? */
    }
  }

  $('#city-type').change(updatePic);

});
