 
 
 document.getElementById("call_click").addEventListener("click", function(e){
    e.preventDefault()     
    alert("National Emergency Number (999)");

    const coinCount = document.getElementById("coin_count").innerText ;
    
     if(coinCount >= 20 ){
    
         const newCoinCount = coinCount - 20 ;
         document.getElementById("coin_count").innerText = newCoinCount ;

         
        // document.getElementById("call-history").innerText = "National Emergency Number \n 999";

         const still = new Date();
          const hours = still.getHours();
           const minutes = still.getMinutes();
            const seconds = still.getSeconds();

           document.getElementById("call-history").innerText = "National Emergency Number \n Service Number: 999\n" + (`Current Time: ${hours}:${minutes}:${seconds}`);
     }

         
     else{
        alert("You have less than 20 coin");
     }
        
  

 })
 document.getElementById("love_click").addEventListener("click", function(){

      const heartCount = document.getElementById("heart_count").innerText

            const newHeartCount = parseInt(heartCount) + 1;
        document.getElementById("heart_count").innerText = parseInt(newHeartCount)  ;
 })

 document.getElementById("copy_click").addEventListener("click", function(){

    alert("Copied the service number (999)");

    const copyCount = document.getElementById("copy_count").innerText;
    const newCopyCount = parseInt(copyCount) + 1; 
    document.getElementById("copy_count").innerText = parseInt (newCopyCount);

    navigator.clipboard.writeText(999);
 })

 
 