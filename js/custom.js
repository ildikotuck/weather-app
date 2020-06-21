console.log("Yay it loaded");

var city = 'Adelaide,Au';
var URL = 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=3d2363042523c46eb86f30163a636f2c';

var kelvin = 0;
var icon = '10d';
var cel = 0;
var far = 0;

var freezing = 'url(images/freezing';
var cold = 'url(images/freezing-zero';
var chilly = 'url(images/moderately-cold';
var warm = 'url(images/moderately-warm';
var hot ='url(images/very-hot';
var currentTemp ='';

getWeather();


function getWeather() {
    $.getJSON(URL, function(results){
        // console.log(results.weather[0].icon);
        // console.log(results.weather[0].main);
        icon = results.weather[0].icon;
        kelvin = results.main.temp;

        cel = kelvin - 273.15;
        far = kelvin * (9/5) - 459.67;

        $('.cel').text(cel.toFixed(1) + ' °C');
        $('.far').text(far.toFixed(1) + ' °F');
        $('.weather-icon').attr('src','https://openweathermap.org/img/wn/'+icon+'@2x.png');
        
        updateBackground();
        rainCheck();

        function rainCheck () {
            if (results.weather[0].main === 'Rain') {
                $('body').css('background-image',currentTemp+'-rain'+'.jpeg');
            
            } else if (results.weather[0].main === 'Drizzle') {
                $('body').css('background-image',currentTemp+'-rain'+'.jpeg');
            };
        };
});
}

$('.btn').click ( function() {

    city = $(this).attr('data-city');
    $('.white-box h1').text('The current temperature in ' + $(this).text() +' is:');
    $('.btn').removeClass('active');
    $(this).addClass('active');
    URL = 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=3d2363042523c46eb86f30163a636f2c';

    getWeather ()

});

function updateBackground() {
    if (cel < -20) {
        $('body').css('background-image',freezing+'.jpeg)');
        currentTemp = freezing;
    
    } else if (cel < 10) {
        $('body').css('background-image',cold+'.jpeg)');
        currentTemp = cold;

    } else if (cel < 15) {
        $('body').css('background-image',chilly+'.jpeg)');
        currentTemp = chilly;

    } else if (cel < 24) {
        $('body').css('background-image',warm+'.jpeg)');
        currentTemp = warm;

    } else {
        $('body').css('background-image',hot+'.jpeg)');   
        currentTemp = hot;

    }
};





//FIRST WORKING EXAMPLE
// $('.adl').click ( function(){
//     URL = 'https://api.openweathermap.org/data/2.5/weather?q=Adelaide,Au&appid=3d2363042523c46eb86f30163a636f2c';
//     updateURL();
//     $('.white-box h1').text('The current temperature in Adelaide is:');
//     resetColour();
//     $('.adl').css('background-color','green');
//     $('.adl').css('color','white');
// });

// $('.ant').click ( function(){
//     URL = 'https://api.openweathermap.org/data/2.5/weather?q=Antarctica&appid=3d2363042523c46eb86f30163a636f2c';
//     updateURL();
//     $('.white-box h1').text('The current temperature in Antarctica is:');
//     resetColour();
//     $('.ant').css('background-color','green');
//     $('.ant').css('color','white');
// });

// $('.plm').click ( function(){
//     URL = 'https://api.openweathermap.org/data/2.5/weather?q=Palma,Es&appid=3d2363042523c46eb86f30163a636f2c';
//     updateURL();
//     $('.white-box h1').text('The current temperature in Palma de Mallorca is:');
//     resetColour();
//     $('.plm').css('background-color','green');
//     $('.plm').css('color','white');
// });

// function updateURL() {
    
//     $.getJSON(URL, function(results){

//         console.log(results.main.temp);
//         kelvin = results.main.temp;
    
//         cel = kelvin - 273.15;
//         far = kelvin * (9/5) - 459.67;
    
//         console.log('Cel = '+cel);
//         console.log('Far = '+far);
    
//         $('.cel').text(cel.toFixed(1) + ' °C');
//         $('.far').text(far.toFixed(1) + ' °F');
    
//         updateBackground();

//     });
// };

// function updateBackground() {
//     if (cel < 0) {
//         $('body').css('background','url(images/freezing.jpeg) no-repeat center center');

//     } else if (cel > 20) {
//         $('body').css('background','url(images/sunny.jpeg) no-repeat center center');

//     } else {
//         $('body').css('background','url(images/moderately-cold.jpeg) no-repeat top center');
//     }         
// }

