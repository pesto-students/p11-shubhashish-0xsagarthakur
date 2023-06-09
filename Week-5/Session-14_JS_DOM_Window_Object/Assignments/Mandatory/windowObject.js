function displayWindowProperties() {
    console.log('User Agent:', window.navigator.userAgent);
    console.log('Screen Width:', window.screen.width);
    console.log('Screen Height:', window.screen.height);
    console.log('Current URL:', window.location.href);
    console.log('Current Path:', window.location.pathname);
  
    // Storing and retrieving data from sessionStorage
    sessionStorage.setItem('sessionData', 'Hello from sessionStorage');
    const sessionData = sessionStorage.getItem('sessionData');
    console.log('Session Storage Data:', sessionData);
  
    // Storing and retrieving data from localStorage
    localStorage.setItem('localData', 'Hello from localStorage');
    const localData = localStorage.getItem('localData');
    console.log('Local Storage Data:', localData);
  }
  
  window.addEventListener('load', displayWindowProperties);
  