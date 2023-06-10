function getTemperatureForCity() {
    const cache = {};
  
    return function (city) {
      // Check if the temperature for the given city is already in the cache
      if (cache[city]) {
        return cache[city];
      }
  
      // Retrieve the temperature for the city from the temperatureData object
      const temperature = temperatureData[city];
  
      // Cache the temperature for future use
      cache[city] = temperature;
  
      return temperature;
    };
  }
  
  // Usage example
  const temperatureData = {
    'New York': 20,
    'London': 18,
    'Paris': 22,
    'Tokyo': 25,
    'Sydney': 28,
  };
  
  const getTemperature = getTemperatureForCity();
  
  const temperature1 = getTemperature('New York');
  console.log(temperature1); // 20
  
  const temperature2 = getTemperature('New York');
  console.log(temperature2); // 20 (retrieved from cache)
  
  const temperature3 = getTemperature('London');
  console.log(temperature3); // 18
  
  const temperature4 = getTemperature('London');
  console.log(temperature4); // 18 (retrieved from cache)
  