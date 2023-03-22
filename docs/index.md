# Documentation
## Index.js
```
The main file in which the behavior of the window and the program as a whole is prescribed.
```

## Package.json
```
Packages used by the project, as well as brief information about them.
```

## ./web/index.html
```
html page to display information and connect the script.
```

## ./web/assets/css/main.css
```
Styles file for html page.
```
### body
```
body::before {
    content: '';
    position: fixed;
    left: 0; right: 0;
    top: 0; bottom: 0;
    z-index: -1;
    background: url('./img/background.webp') no-repeat;
    filter: blur(2px);
}
body {margin: 0; padding: 0; box-sizing: border-box;  }
html, body {
    height: 100%;
    width: 100%;
    overflow: hidden;
}
```
### outdoor temperature text style
```
.text {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 8em;
    font-weight: 700;
    color: yellowgoldenrod;
    text-shadow: 1px 1px 1px #919191,
        1px 2px 1px #919191,
        1px 3px 1px #919191,
        1px 4px 1px #919191,
        1px 5px 1px #919191,
        1px 6px 1px #919191,
        1px 7px 1px #919191,
        1px 8px 1px #919191,
        1px 9px 1px #919191,
        1px 10px 1px #919191,
    1px 18px 6px rgba(16,16,16,0.4),
    1px 22px 10px rgba(16,16,16,0.2),
    1px 25px 35px rgba(16,16,16,0.2),
    1px 30px 60px rgba(16,16,16,0.4);
}
```
### source sans pro font importing
```
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300&display=swap');
```
### other text style
```
.container {
    font-family: 'Source Sans Pro', sans-serif;
    width: 300px;
    margin: 0 auto;
    color: lightgoldenrodyellow;
}
.misc {
    background-color: #035427;
    opacity: 0.75;
    filter: blur(0.25px);
    border-style: outset;
    border-color: seagreen;
    border-radius: 7.1px;
    font-weight: 900;
}
```
### img style
```
.weather-img {
    height: 50px;
}
```
### search style
```
.search {
    width: 100%;
    outline: none;
    background-color: #1E261F;
    opacity: 0.5;
    border-radius: 7px;
    color: #fff;
    font-size: 22px;
    border: none;
    margin: 30px 0;
    border-bottom: 2px solid #fff;
    padding: 5px 0;

}
```

## ./web/assets/js/getweather.js
```
Working with the openweathermap api
```
### get local date
```
setInterval(() => {
    let date = new Date;
    local_date.textContent = `Local time: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}, 1000)
```
### refresh the city when you press enter
```
document.addEventListener('keydown', (e) => {
    if(e.key === 'Enter') {
        let value = searchInp.value;
        if(!value) return false;
        city = value;
        init()
        searchInp.value = ''
    }
})
```
### get outdoor temperature
```
        function temperature() {
            let getTemp = data.main.temp
            let tempC = Math.floor(getTemp) - 273
            return tempC
        }
```
### get weather update time
```

        let date = new Date;

        update_date.textContent = `Update time: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`

        console.log('Restarting')
    })
```
### Process the wrong city name
```
    .catch(() => {
        alert('This city not found')
        city = 'Zernograd';
        init()
        searchInp.value = ''
    })
}

init()
```
