const lightSwitch = document.querySelector(".light-switch");
const label = document.querySelector(".label");
lightSwitch.addEventListener('click', toggleLights);


// Next Steps:
// 1) swap button with an image of a lightswitch in the up/down positions
// 2) reposition and resize the label and light switch image
function toggleLights() {
    const lights = document.querySelectorAll(".dark, .light");
    for(light of lights) {
        light.classList.toggle('dark');
        light.classList.toggle('light');
    }
    
    if(label.textContent == 'Lights Out') {
        label.textContent = 'Lights On';
    } else {
        label.textContent = "Lights Out";
    }

    if(lightSwitch.innerHTML == 'Switch Down') {
        lightSwitch.innerHTML = 'Switch Up';
    } else {
        lightSwitch.innerHTML = 'Switch Down';
    }
}