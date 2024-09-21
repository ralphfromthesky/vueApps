<template  :class="{'night': store.state.isNight, 'light': !store.state.isNight}">
 
  <div class="mainContainer" :class="defaultBg">
    <div class="weatherApps" :class="weatherChangeBackground">
      <div class="mainForm form-control">
        <form @submit.prevent="searchWeather">
          <!-- <input type="text" v-model="city" />
          <i class="bx bx-search-alt-2"></i> -->
          <div class="inputContainer">
            <input type="value" required="" v-model="city" />
            <label>
              <span style="transition-delay: 0ms">S</span
              ><span style="transition-delay: 50ms">e</span
              ><span style="transition-delay: 100ms">a</span
              ><span style="transition-delay: 150ms">r</span
              ><span style="transition-delay: 200ms">c</span
              ><span style="transition-delay: 250ms">h</span
              ><span style="transition-delay: 300ms"></span>
              <span style="transition-delay: 350ms">C</span>
              <span style="transition-delay: 400ms">i</span>
              <span style="transition-delay: 450ms">t</span>
              <span style="transition-delay: 500ms">y</span>
            </label>
          </div>
        </form>
      </div>
      <div class="cityDetail">
        <h3>{{ cityName }}</h3>
        <h1>{{ weather }}</h1>
        <!-- <h1>{{ temp }}</h1> -->
        <!-- <h1>{{ celcius }}</h1> -->

        <div class="imageDiv">
          <img :src="weatherImage" alt="" />
          <h1 v-if="temp">{{ deg }}°c</h1>
          <h1>{{ forecastData }}</h1>
        </div>
      </div>
    </div>
    <div class="description" :class="changeTextColor">
      <h3>
        Description: <br />
        Weather App
      </h3>
      <br />
      <p>
        Stay ahead of the elements with this convenient weather app. Simply
        enter the city you want to check, and instantly access key weather
        information, including temperature and conditions. The app fetches
        real-time data from OpenWeatherMap, ensuring you have accurate and
        up-to-date forecasts at your fingertips.
      </p>
      <br />
      <h3>Key Features:</h3>
      <br />
      <p>
        City Search: Enter your desired city for instant weather details. <br />
        Temperature: Get the current temperature in your chosen location. <br />
        Weather Conditions: Stay informed about the weather conditions (e.g.,
        clear, cloudy, rainy) in the area. <br />
        User-Friendly: A clean and intuitive interface ensures a seamless user
        experience. <br />
        <br />
        <b> Using Composition API: watcher, ref, computed and axios</b>
      </p>
    </div>
  </div>
</template>

<script>
import { computed, ref, watch } from "vue";
import axios from "axios";
export default {
  name: "weather-apps",

  provide: { backGroundChange: "black" },
  setup() {
    const city = ref("");
    const api_key = ref("ae3335d94a1cbbff33e8ba9bab5de492");
    const temp = ref("");
    const weather = ref("");
    const cityName = ref("");
    const error = ref("");
    const weatherChangeBackground = ref("weatherApps");
    const weatherImage = ref("");
    const deg = ref("");
    const forecastData = ref("");
    const celcius = ref("");
    const dailyWeather = ref([]);
    const defaultBg = ref('');
    const changeTextColor = ref('');

    const api_url = computed(() => {
      return `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${api_key.value}`;
    });

    watch(weather, (newWeather) => {
      if (newWeather === "Clouds") {
        weatherChangeBackground.value = "cloudsBackground";
        weatherImage.value = "images/cloudy.png";
        defaultBg.value = 'cloudBg'
        changeTextColor.value = 'cloudTextColor'
        console.log("Clouds");
      } else if (newWeather === "Rain") {
        weatherChangeBackground.value = "rainBackground";
        weatherImage.value = "images/rain.png";
        defaultBg.value = 'rainBg';
        changeTextColor.value = 'rainTextColor';
        console.log("Rains");
      } else if (newWeather === "Clear") {
        weatherChangeBackground.value = "clearBackground";
        weatherImage.value = "images/clear.png";
        defaultBg.value = 'clearBg'
        console.log("Clear");
      }
      else if (newWeather === "Mist") {
        weatherChangeBackground.value = "mistBackground";
        weatherImage.value = "images/mistWeatherBg.jpg";
        defaultBg.value = 'mistBg'
        console.log("Mist");
      }
    });

    const searchWeather = async () => {
      try {
        if (city.value.trim() === "") {
          alert("input city please");
          return;
        }
        const response = await axios.get(api_url.value);
        console.log(response.data);
        if (response.data.coord) {
          temp.value = response.data.main.temp;
          celcius.value = temp.value - 273.15;
          deg.value = Math.trunc(celcius.value);
          weather.value = response.data.weather[0].main;
          cityName.value = response.data.name;
          // const lat = response.data.coord.lat;
          // const lon = response.data.coord.lon;
          // getDailyWeather(lat, lon);
        } else {
          console.log("invalid or incomplete response data");
        }
      } catch (error) {
        console.log(`error: ${error}`);
        alert('please input city')
      }
      city.value = "";
    };

    return {
      city,
      api_key,
      api_url,
      temp,
      weather,
      cityName,
      searchWeather,
      error,
      weatherChangeBackground,
      weatherImage,
      deg,
      forecastData,
      celcius,
      // api_dailyWeather,
      dailyWeather,
      defaultBg,
      changeTextColor
    };
  },
};
</script>

<style scoped>

.light {
  box-shadow:  17px 17px 15px #868686,
             -17px -17px 15px #ffffff; 
}
.night {
  border:2px solid gray;
  border-radius: 10px;
}
.mainForm {
  display: flex;
  justify-content: center;
}
.mainContainer {
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;

}
.weatherApps {
  height: 60vh;
  width: 20vw;
  border-radius: 10px;
  background-image: url("images/defaultBg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  color: black;
  box-shadow: 11px 11px 22px #797979, -11px -11px 22px #ffffff;
}
.cloudsBackground {
  background-image: url("images/cloudWeather.jpg");
  background-size: cover;
}
.cloudTextColor {
  color: black;
}
.cityDetail {
  height: inherit;
  display: flex;
  padding: 0 20px;
  flex-direction: column;
}
.rainBackground {
  background-image: url("images/mobileRain.jpg");
  background-size: cover;
}
.rainTextColor {
  color: white;
}
.clearBackground {
  background-image: url("images/clearMobile.jpg");
  background-size: cover;
}
.clearBg {
background-image: url('images/cloudBg.jpg');
background-size: cover;

}
.mistBackground {
  background-image: url("images/mistWeatherbg.jpg");
  background-size: cover;
}
.mistBg {
  background-image: url("images/mistBg.jpg");
  background-size: cover;
}
.rainBg {
  background-image: url('images/raingBg.jpg');
background-size: cover;
}
.cloudBg {
  background-image: url('images/clearBg.jpg');
background-size: cover;
background-position: center;

}
.imageDiv {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.imageDiv h1 {
  font-size: 80px;
}
.imageDiv img {
  height: 130px;
}
input {
  height: 5vh;
  border-radius: 5px;
}

.description {
  padding: 20px;
  width: 30vw;
}

/* form-control CSS */

.form-control {
  position: relative;
  margin: 20px 0 40px;
}

.form-control input {
  background-color: transparent;
  border: 0;
  border-bottom: 2px solid black;
  display: block;
  width: 100%;
  padding: 15px 0;
  font-size: 18px;
  color: black;
}

.form-control input:focus,
.form-control input:valid {
  outline: 0;
  border-bottom-color: black;
}

.form-control label {
  position: absolute;
  top: 20px;
  left: 100px;
  pointer-events: none;
}

.form-control label span {
  display: inline-block;
  font-size: 18px;
  min-width: 5px;
  color: black;
  transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.form-control input:focus + label span,
.form-control input:valid + label span {
  color: black;
  transform: translateY(-30px);
}

@media screen and (max-width: 430px) {
  .mainContainer {
    flex-direction: column;
  }
  .weatherApps {
    width: auto;
    height: auto;
    margin-top: 30vh;
  }

}
</style>