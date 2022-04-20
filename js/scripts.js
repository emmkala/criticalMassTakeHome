fetch('files/navigation.json')
    .then(response => response.json())
    .then(function (citiesJson) {
        var tabsSection = document.getElementById("tabs-section");
        // for every city in the json file, make a new tab
        citiesJson.cities.forEach((city, index) => {
            var tab = document.createElement("div");
            var cityName = document.createElement("p");

            tab.classList.add("tab");
            tab.setAttribute("cityname", city.label);
            tab.setAttribute("timezone", city.timezone);

            // if it's the first tab, set it to active
            if (index == 0) {
                tab.classList.add("active");
                setTime(city.timezone, city.label);
            }
            cityName.innerHTML = city.label;
            tab.appendChild(cityName);
            tabsSection.appendChild(tab);
        });
    })
    .then(() => {
        // wait for the tabs to finish setting to set the slider functions
        var tabs = document.querySelectorAll(".tab");
        var tabInfos = document.querySelectorAll(".tab-info");
        var slider = document.getElementById("slider");

        slider.style.left = tabs[0].offsetLeft + "px";
        slider.style.width = tabs[0].offsetWidth + "px";

        tabs.forEach(el => el.addEventListener('click', event => {
            // remove the active class from previous
            Array.from(tabs).forEach((el) => el.classList.remove('active'));
            Array.from(tabInfos).forEach((el) => el.classList.remove('active'));

            el.classList.add("active");

            // set the starting position (left) of the slider to the left of the tab
            slider.style.left = el.offsetLeft + "px";
            slider.style.width = el.offsetWidth + "px";

            setTime(el.getAttribute("timezone"), el.getAttribute("cityname"));
        }));

        // if the window is resized, set the slider again
        window.addEventListener('resize', event => {
            var currentTab = document.querySelector(".tab.active");
            slider.style.left = currentTab.offsetLeft + "px";
            slider.style.width = currentTab.offsetWidth + "px";
        });
    })
    .catch(error => console.log(error));

var clock;

function showTime(timezone) {
    var secondHand = document.getElementById('second');
    var minsHand = document.getElementById('min');
    var hourHand = document.getElementById('hour');

    var currentTime = new Date(new Date().toLocaleString("en-US", { timeZone: timezone }));
    var currentDay = currentTime.toLocaleString("en-US", { month: "long", day: "numeric" });

    let s = currentTime.getSeconds();
    let sRot = ((s / 60) * 360) + 90;
    secondHand.style.transform = "rotate(" + sRot + "deg)";

    let m = currentTime.getMinutes();
    let mRot = ((m / 60) * 360) + ((s / 60) * 6) + 90;
    minsHand.style.transform = "rotate(" + mRot + "deg)";

    let h = currentTime.getHours();
    let hRot = ((h / 12) * 360) + ((m / 60) * 30) + 90;
    hourHand.style.transform = "rotate(" + hRot + "deg)";

    if (h < 19) { document.body.className = ""; }
    if (h >= 19) { document.body.classList.add("night"); }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    document.getElementById("city-time").innerHTML = currentDay + ", " + h + ":" + m + ":" + s;
    clock = setTimeout(showTime, 1000, timezone);
}

function setTime(timezone, location) {
    clearTimeout(clock);
    document.getElementById("city-name").innerHTML = "Local Time in " + location;
    showTime(timezone)
}