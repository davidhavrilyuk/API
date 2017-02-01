function gettingJSON(){
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {


            var latitude = position.coords.latitude,
                longitude = position.coords.longitude;

            $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat="+ latitude +"&lon=" + longitude + "&appid=5f19ac2832f0fc6e9ad1632ee74ef287",function(json){

                window.myWidgetParam = {
                    id: 31,
                    cityid: json.id,
                    appid: '5f19ac2832f0fc6e9ad1632ee74ef287',
                    containerid: 'openweathermap-widget'
                };


                (function() {
                    var script = document.createElement('script');
                    script.type = 'text/javascript';
                    script.async = true;
                    script.src = 'http://openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js';
                    var s = document.getElementsByTagName('script')[0];
                    s.parentNode.insertBefore(script, s);
                })();

            });


        });
    } else {
        alert("Geolocation API не поддерживается в вашем браузере");
    }
}
gettingJSON();

