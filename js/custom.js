console.log("Yay it loaded");

var city = 'Adelaide,Au';
var URL = 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=3d2363042523c46eb86f30163a636f2c';

var kelvin = 0;
var icon = '10d';
var cel = 0;
var far = 0;

// $( function() {
//     var availableCities = [
//       "Adelaide",
//       "Antarctica",
//       "Auckland",
//       "Barcelona",
//       "Beijing",
//       "Belgium",
//       "Bergen",
//       "Budapest",
//       "Bucharest",
//       "London",
//       "Madrid",
//       "Malaga",
//       "Melbourne",
//       "Moscow",
//       "Palma de Mallorca",
//       "Panama City",
//       "Rio de Janeiro",
//       "Stockholm",
//       "Stuttgart",
//       "Sydney",
//       "Oslo",
//       "Vienna",
//     ];

//     $( "#tags" ).autocomplete({ source: availableCities 
//     });
// } );

$.getJSON(URL, function(results){

    // console.log(results.main.temp);
    // console.log(URL);
    console.log(results.weather[0].icon);

    icon = results.weather[0].icon;
    kelvin = results.main.temp;

    cel = kelvin - 273.15;
    far = kelvin * (9/5) - 459.67;

    // console.log('Cel = '+cel);
    // console.log('Far = '+far);

    $('.cel').text(cel.toFixed(1) + ' °C');
    $('.far').text(far.toFixed(1) + ' °F');
    $('.weather-icon').attr('src','https://openweathermap.org/img/wn/'+icon+'@2x.png');
});

$('.btn').click ( function() {

    city = $(this).attr('data-city');
    $('.white-box h1').text('The current temperature in ' + $(this).text() +' is:');
    $('.btn').removeClass('active');
    $(this).addClass('active');
    // $(this).css('color','white');
    var URL = 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=3d2363042523c46eb86f30163a636f2c';

    $.getJSON(URL, function(results){
        console.log(results.weather[0].icon);

        icon = results.weather[0].icon;

        kelvin = results.main.temp;
        cel = kelvin - 273.15;
        far = kelvin * (9/5) - 459.67;
        $('.cel').text(cel.toFixed(1) + ' °C');
        $('.far').text(far.toFixed(1) + ' °F');
        updateBackground()

        $('.weather-icon').attr('src','https://openweathermap.org/img/wn/'+icon+'@2x.png');

    });


});

function updateBackground() {
    if (cel < -20) {
        $('body').css('background-image','url(images/freezing.jpeg)');
    
    } else if (cel < 10) {
        $('body').css('background-image','url(images/freezing-zero.jpeg)');
    
    } else if (cel < 15) {
        $('body').css('background-image','url(images/moderately-cold.jpeg)');
    
    } else if (cel < 24) {
        $('body').css('background-image','url(images/moderately-warm.jpeg)');
    
    } else {
        $('body').css('background-image','url(images/very-hot.jpeg)');   
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

