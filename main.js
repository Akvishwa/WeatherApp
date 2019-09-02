$.urlParam = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results==null) {
       return null;
    }
    return decodeURI(results[1]) || 0;
};

var city_name = $.urlParam('city');
var url1 = 'http://api.apixu.com/v1/current.json?key=6541ddb9822f4a2b82b70709190906&q='+city_name;

// $('#submit').click(function(){
//     $('#city').val(city_name);
// })
$.ajax( url1, {
    dataType: 'json',
    type: "GET",
    success: function(response){
        // console.log(response.current.temp_c);
        $('#temp').text(response.current.temp_c);
        $('#wind').text(response.current.wind_kph);
        $('#cloud').text(response.current.condition.text);
        $('#weather_image').attr("src", "http:"+response.current.condition.icon);
        $('#city').val(city_name);   
    }
  });