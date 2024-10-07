// function search() {
//     const username = document.getElementById('cari').value.toLowerCase(); // Ambil nilai input dan konversi ke huruf kecil
//     const cuaca = document.querySelector(".weather");
//     const temp = document.querySelector(".temp");
//     const city = document.querySelector(".city");
//     const humidity = document.querySelector(".humidity");
//     const wind = document.querySelector(".wind");
//     const kosong = document.getElementById('kosong');
//     const salah = document.getElementById('salah');
//     const jalan = document.querySelector('.jalan');
//     const loading = document.querySelector(".loading");
//     const hamb = document.getElementById('menu');

//     const kota = ["tegal", "brebes", "bumiayu", "bumijawa", "pemalang"];
//     const suhu = ["27°C", "22°C", "24°C", "21°C", "30°C"]; // Ubah suhu ke tipe data number
//     const lembab = ["40%", "10%", "20%", "60%", "39%"];
//     const angin = ["20 km/h", "10 km/h", "20 km/h", "50 km/h"];

//     let isMatch = false;

//     for (let i = 0; i < kota.length; i++) {
//         if (username === kota[i]) {
//             isMatch = true;
//             loading.style.display = "inline-block";
//             jalan.style.animation = 'width 3s ease forwards'; // Atur animasi pada .jalan

//             // Menetapkan nilai kota yang cocok ke dalam elemen .city dengan huruf pertama besar
//             city.textContent = kota[i].charAt(0).toUpperCase() + kota[i].slice(1);
//             temp.textContent = suhu[i];
//             humidity.textContent = lembab[i];
//             wind.textContent = angin[i];
//             break; // Keluar dari loop karena sudah ditemukan kecocokan
//         }
//     }

//     // Event listener untuk menampilkan cuaca setelah animasi selesai
//     jalan.addEventListener('animationend', function() {
//         loading.style.display = "none";
//         jalan.style.display = "none";
//         // Menunda tampilan cuaca setelah 5 detik
//         setTimeout(function() {
//             cuaca.style.display = 'block'; // Tampilkan elemen .weather setelah animasi .jalan selesai dan setelah 5 detik
//         }, 500); // 5000 ms = 5 detik
//     });

//     // Menampilkan pesan kosong atau salah sesuai kondisi input
//     if (!username) {
//         kosong.style.display = "block"; // Tampilkan pesan elemen kosong jika input kosong
//         salah.style.display = "none";
//     } else if (!isMatch) {
//         salah.style.display = "block"; // Tampilkan pesan elemen salah jika tidak ada kecocokan
//         kosong.style.display = "none";
//     } else {
//         kosong.style.display = "none";
//         salah.style.display = "none";
//     }
// };


// const apiKey = "aa2c2589ad586a411a5cc147274f3957";
// const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// const searchBox = document.querySelector(".search input");
// const searchButton = document.querySelector(".search button");
// const img = document.querySelector('.weather-icon');

// //    const jalan = document.querySelector('.jalan');
// //   const loading = document.querySelector(".loading");

// async function checkWeather(city) {
//     const response = await fetch (apiUrl + city + `&appid=${apiKey}`);
//     var data = await response.json();

//   if(response == 404){
//     document.querySelector('error').style.display = 'block';
//     document.querySelector('.weather').style.display = 'none';
// }
// else{
//     document.querySelector(".city").innerHTML = data.name;
//     document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + '°C';
//     document.querySelector(".humidity").innerHTML = data.main.humidity + '%';
//     document.querySelector(".wind").innerHTML = data.main.humidity + 'km/h';
    
//     if(data.weather[0].main == 'clouds'){
//         img.src = "images/clouds.png"
//     }
//     else if(data.weather[0].main == 'clear'){
//         img.src = 'images/clear.png'
//     }
//     else if(data.weather[0].main == 'rain'){
//         img.src = 'images/rain.png'
//     }
//     else if(data.weather[0].main == 'mist'){
//         img.src = 'images/mist.png'
//     }

//     document.querySelector('error').style.display = 'none';
//     document.querySelector('.weather').style.display = 'block';
    
// }

// //console.log(data);
// }


// searchButton.addEventListener('click', ()=>{
//     document.querySelector('.weather').style.display = 'none';

//     document.querySelector('.loading').style.display = 'block';
//     setTimeout(function(){
        
//         document.querySelector('.weather').style.display = 'block';
//     document.querySelector('.loading').style.display = 'none';
//     checkWeather(searchBox.value);

// },2000)
// })


const apiKey = "aa2c2589ad586a411a5cc147274f3957";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const img = document.querySelector('.weather-icon');

// const jalan = document.querySelector('.jalan');
// const loading = document.querySelector(".loading");

async function checkWeather(city) {
    try {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        if (!response.ok) {
            // Handle HTTP error statuses
            document.querySelector('.error').style.display = 'block';
            document.querySelector('.weather').style.display = 'none';
            return;
        }

        const data = await response.json();
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + '°C';
        document.querySelector(".humidity").innerHTML = data.main.humidity + '%';
        document.querySelector(".wind").innerHTML = data.wind.speed + ' km/h'; // Assuming wind speed is in km/h

        // Set the appropriate weather icon
        if (data.weather[0].main === 'Clouds') {
            img.src = "images/clouds.png";
        } else if (data.weather[0].main === 'Clear') {
            img.src = 'images/clear.png';
        } else if (data.weather[0].main === 'Rain') {
            img.src = 'images/rain.png';
        } else if (data.weather[0].main === 'Mist') {
            img.src = 'images/mist.png';
        }
        
        document.querySelector('.error').style.display = 'none';
        document.querySelector('.weather').style.display = 'block';

    } catch (error) {
        console.error('Error fetching weather data:', error);
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.weather').style.display = 'none';
    }
}

searchButton.addEventListener('click', () => {
    document.querySelector('.error').style.display = 'none';
    document.querySelector('.weather').style.display = 'none';
    // document.querySelector('.weather').style.display = 'none';
    document.querySelector('.loading').style.display = 'block';

    setTimeout(() => {
        checkWeather(searchBox.value);
        document.querySelector('.loading').style.display = 'none';
    }, 2000);
});


// const apiKey = "aa2c2589ad586a411a5cc147274f3957";
// const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// const searchBox = document.querySelector(".search input");
// const searchButton = document.querySelector(".search button");
// const img = document.querySelector('.weather-icon');

// async function checkWeather(city) {
//     try {
//         const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
//         if (!response.ok) {
//             // Handle HTTP error statuses
//             document.querySelector('.error').style.display = 'block';
//             document.querySelector('.weather').style.display = 'none';
//             return;
//         }

//         const data = await response.json();
//         document.querySelector(".city").innerHTML = data.name;
//         document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + '°C';
//         document.querySelector(".humidity").innerHTML = data.main.humidity + '%';
//         document.querySelector(".wind").innerHTML = data.wind.speed + ' km/h'; // Assuming wind speed is in km/h

//         // Set the appropriate weather icon
//         if (data.weather[0].main === 'Clouds') {
//             img.src = "images/clouds.png";
//         } else if (data.weather[0].main === 'Clear') {
//             img.src = 'images/clear.png';
//         } else if (data.weather[0].main === 'Rain') {
//             img.src = 'images/rain.png';
//         } else if (data.weather[0].main === 'Mist') {
//             img.src = 'images/mist.png';
//         }
        
//         document.querySelector('.error').style.display = 'none';
//         document.querySelector('.weather').classList.add('show');

//     } catch (error) {
//         console.error('Error fetching weather data:', error);
//         document.querySelector('.error').style.display = 'block';
//         document.querySelector('.weather').style.display = 'none';
//     }
// }

// searchButton.addEventListener('click', () => {
//     document.querySelector('.weather').classList.remove('show');
//     document.querySelector('.weather').style.display = 'block';
//     document.querySelector('.loading').style.display = 'block';

//     setTimeout(() => {
//         checkWeather(searchBox.value);
//         document.querySelector('.loading').style.display = 'none';
//     }, 2000);
// });
