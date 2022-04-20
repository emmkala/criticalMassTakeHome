fetch('files/navigation.json')
    .then(response => response.json())
    .then(function (citiesJson) {
        var tabs = document.getElementById("tabs-section");
        // for every city in the json file, make a new tab
        citiesJson.cities.forEach((city, index) => {
            var tab = document.createElement("div");
            tab.classList.add("tab");
            // if it's the first tab, set it to active
            if (index == 0) { tab.classList.add("active"); }
            var cityContent = document.createElement("p");
            cityContent.innerHTML = city.label;
            tab.appendChild(cityContent);
            tabs.appendChild(tab);
        });
    })
    .then(() => {
        // wait for the tabs to finish setting to set the slider functions
        var tabs = document.querySelectorAll(".tab");
        var slider = document.getElementById("slider");

        slider.style.left = tabs[0].offsetLeft + "px";
        slider.style.width = tabs[0].offsetWidth + "px";

        tabs.forEach(el => el.addEventListener('click', event => {
            // remove the active class from previous
            Array.from(tabs).forEach((el) => el.classList.remove('active'));
            el.classList.add("active");

            // set the starting position (left) of the slider to the left of the tab
            slider.style.left = el.offsetLeft + "px";
            slider.style.width = el.offsetWidth + "px";
        }));

        // if the window is resized, set the slider again
        window.addEventListener('resize', event => {
            var currentTab = document.querySelector(".tab.active");
            slider.style.left = currentTab.offsetLeft + "px";
            slider.style.width = currentTab.offsetWidth + "px";
        });
    })
    .catch(error => console.log(error));