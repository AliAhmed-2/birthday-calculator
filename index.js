function birthDayCalculator()
{

    let input = document.getElementById("input").value;

    let userData = new Date(input);
    let userDate = userData.getDate();
    let userMonth = userData.getMonth();

    let currentData = new Date();
    let currentDate = currentData.getDate();
    let currentMonth = currentData.getMonth();

    let dateDiff = userData - currentData ;
    let actualDays = Math.floor( dateDiff/(1000*3600*24));



    if( currentDate===userDate &&  userMonth===currentMonth){
        document.getElementById("result").innerText="Today is Your BirthDay...! HAPPY BIRTHDAY 🎉  "
        document.getElementById("result").classList.add("container-2");
    }
    else if(dateDiff>0){
        document.getElementById("result").innerText=`Your BirthDay is ${actualDays} days Away....!`  
        document.getElementById("result").classList.add("container-2");
    }
    else{
        document.getElementById("result").innerText="Your BirthDay is passed by " + Math.abs(actualDays) + " Days"
        document.getElementById("result").classList.add("container-2");
    }
    



    
}