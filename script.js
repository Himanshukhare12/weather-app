     const searchinput=document.querySelector("input");
     const searchbtn=document.querySelector("#search");
     const temperature=document.querySelector(".temperature");
     const locationvalue=document.querySelector(".location");
     const timevalue=document.querySelector(".time");
     const Date=document.querySelector(".Date");
     const condition=document.querySelector(".condition");
     const img=document.querySelector(".image");
     searchbtn.addEventListener("click",function(){
        const location=searchinput.value;
        if(location!="")
     {
          fetchweather(location).then((data)=>{
            if(data!=null)
            { 
            updateDom(data);
            }
          })
          searchinput.value="";
     }
     })
      function updateDom(data)
      {
        temperature.textContent=data.current.temp_c +"°C";
        locationvalue.textContent=data.location.name;
        const datetime=data.location.localtime;
        const[date, time]=datetime.split(" ");
        Date.textContent=date;
        timevalue.textContent=time;
        img.src=data.current.condition.icon;
        condition.textContent=data.current.condition.text;
        
      }
     async function fetchweather(location)
     {
        const response =await fetch(`http://api.weatherapi.com/v1/current.json?key=ce17721251a24251aed140149241907&q=${location}&aqi=no`)
        if(response.status==400)
        {alert("location is invalid");
        return null;}
    else if(response.status==200){
        console.log(response);
        {const json=await response.json();
            console.log(json);
        return json;
        }

    }
     }