async function getweatherdata()
{
    try{
        let input = document.getElementById("search").value;
        let temp = document.getElementById("temp");
        let city = document.getElementById("city");
        let humidity = document.getElementById("humidity");
        let wind = document.getElementById("wind");
        let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=dbd0f72e76536d6fe1c8db545acf2b4c`)
        console.log(data)
        data= await data.json()
       console.log(data);
       temp.innerHTML=parseInt(data.main.temp)+"°C"
       humidity.innerHTML=data.main.humidity+("%");
       wind.innerHTML=data.wind.speed+"km/h";
       city.innerHTML=data.name

    }
    catch(err)
    {
        console.log(err);
    }
}
let btn = document.getElementById("btn");
btn.addEventListener("click",getweatherdata);