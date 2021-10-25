const key = "649a2114a23ca5a6aef465d322b23b72";
const url = "https://api.openweathermap.org/data/2.5/";

const searchBar = document.querySelector("#search");
searchBar.addEventListener("keypress",show = (e) =>{
    if(e.keyCode == 13){
        getResult(searchBar.value.trim());

        searchBar.value = "";
    }
    
    
})

const  getResult =  async (cityName) => {
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
    
    const response = await fetch(query);
    
    const data = await response.json();

    

    const city = document.querySelector(".city");
    city.innerHTML =`${data.name}, ${data.sys.country}`
    
    const temp = document.querySelector(".temp");
    temp.innerHTML = `${Math.round(data.main.temp)}°C`
    
    let about = data.weather[0].description;
    const desc = document.querySelector(".desc");
    desc.innerText = about
    
    const background = document.querySelector("body");
    if (about === "hafif yağmur") {

       background.setAttribute("class","yagmur")
    } else if (about === "kapalı" || "parçalı bulutlu") {
        background.setAttribute("class","");
        background.setAttribute("class","kapali");
    } 
    if(about === "açık"){
        background.setAttribute("class","");
        background.setAttribute("class","acik");
    }
   
    const minmax = document.querySelector(".minmax");
    minmax.innerText = `${Math.round(data.main.temp_min)}°C / ${Math.round(data.main.temp_max)}°C`
 
}

