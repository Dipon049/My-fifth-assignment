 
 
 document.getElementById("call_click").addEventListener("click", function(e){
    e.preventDefault()     
    alert("National Emergency Number (999)");

    const coinCount = document.getElementById("coin_count").innerText ;
    
     if(coinCount >= 20 ){
    
         const newCoinCount = coinCount - 20 ;
         document.getElementById("coin_count").innerText = newCoinCount ;
     }
     else{
        alert("You have less than 20 coin");
     }
   
  

 })
 document.getElementById("love_click").addEventListener("click", function(){

    // const loveClick = document.getElementById("love_click").innerText;
      const heartCount = document.getElementById("heart_count").innerText

            const newHeartCount = parseInt(heartCount) + 1;
        document.getElementById("heart_count").innerText = parseInt(newHeartCount)  ;
 })