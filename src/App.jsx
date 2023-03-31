import './reset.css';
import './App.css';
// import './weather-icons-wind.css';
// import './weather-icons-wind.min.css';
// import './weather-icons.css';
// import './weather-icons.min.css';

function App() {
  return (
    <div className='main-frame'>
               <div className="weather-table">
            <p class="title">CSS Weather Forecast <i class="wi wi-sunrise"></i></p>
            
               <ul className="first-row">
                  <li className="lisbon"><p>Lisbon </p>21°C  <i className="wi wi-day-sunny"></i></li>
                  <li className="paris"><p>Paris</p>11°C  <i className="wi wi-night-showers"></i></li>
                  <li className="belgrade"><p>Belgrade</p>15°C  <i className="wi wi-day-cloudy"></i></li>
                  <li className="venice"><p>Venice</p>21°C  <i className="wi wi-day-cloudy-high"></i></li>
                  <li className="tel-avive"><p>Tel-Avive</p>32°C  <i className="wi wi-hot"></i></li>
                  <li className="cair"><p>Cair</p>21°C  <i className="wi wi-sunrise"></i></li>
                  <li className="new-york"><p>New-York</p>17°C  <i className="wi wi-day-thunderstorm"></i></li>
                  <li className="new-delhi"><p>New-Delhi</p>17°C  <i className="wi wi-hail"></i></li>
                  <li className="san-francisco"><p>San-Francisco</p>15°C  <i className="wi wi-day-sunny-overcast"></i></li>
                  <li className="tokyo"><p>Tokyo</p>8°C  <i className="wi wi-night-clear"></i></li>
                  <li className="sydney"><p>Sydney</p>25°C  <i className="wi wi-night-partly-cloudy"></i></li>
               </ul>
               <p className="footer">Have a nice day and don't forget umbrella if you are in New Delhi now!</p>
         </div>
    </div>
  );
}

export default App;
