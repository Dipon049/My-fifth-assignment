 
 // card01 functionalities
 document.getElementById("call_click").addEventListener("click", function(e){
    e.preventDefault()     
    alert("National Emergency Number (999)");

    const coinCount = document.getElementById("coin_count").innerText ;
    
     if(coinCount >= 20 ){
    
         const newCoinCount = coinCount - 20 ;
         document.getElementById("coin_count").innerText = newCoinCount ;

         const still = new Date();
          const hours = still.getHours();
           const minutes = still.getMinutes();
            const seconds = still.getSeconds();

           document.getElementById("call-history").innerText = "National Emergency Number \n Service Number: 999\n\n" + (`Call Time: ${hours}:${minutes}:${seconds}`);
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
   document.getElementById("clear_btn").addEventListener("click", function(){
      
     document.getElementById("call-history").innerText = "";

   })
   //card02 functionalities

    document.getElementById("call_click2").addEventListener("click", function(e){
    e.preventDefault()     
    alert("Police Helpline Number (999)");

    const coinCount = document.getElementById("coin_count").innerText ;
    
     if(coinCount >= 20 ){
    
         const newCoinCount = coinCount - 20 ;
         document.getElementById("coin_count").innerText = newCoinCount ;

         const still = new Date();
          const hours = still.getHours();
           const minutes = still.getMinutes();
            const seconds = still.getSeconds();
         

           document.getElementById("call-history").innerText = "Police Helpline Number \n Service Number: 999\n\n" + (`Call Time: ${hours}:${minutes}:${seconds}`);
     }
    
     else{
        alert("You have less than 20 coin");
     }
 })
 document.getElementById("love_click2").addEventListener("click", function(){

      const heartCount = document.getElementById("heart_count").innerText

            const newHeartCount = parseInt(heartCount) + 1;
        document.getElementById("heart_count").innerText = parseInt(newHeartCount)  ;
 })

 document.getElementById("copy_click2").addEventListener("click", function(){

    alert("Copied the service number (999)");

    const copyCount = document.getElementById("copy_count").innerText;
    const newCopyCount = parseInt(copyCount) + 1; 
    document.getElementById("copy_count").innerText = parseInt (newCopyCount);

    navigator.clipboard.writeText(999);
 })
 // card3 functionalities

 document.getElementById("call_click3").addEventListener("click", function(e){
    e.preventDefault()     
    alert("Fire Service Number (999)");

    const coinCount = document.getElementById("coin_count").innerText ;
    
     if(coinCount >= 20 ){
    
         const newCoinCount = coinCount - 20 ;
         document.getElementById("coin_count").innerText = newCoinCount ;

         const still = new Date();
          const hours = still.getHours();
           const minutes = still.getMinutes();
            const seconds = still.getSeconds();
         

           document.getElementById("call-history").innerText = "Fire Service Number \n Service Number: 999\n\n" + (`Call Time: ${hours}:${minutes}:${seconds}`);
     }
    
     else{
        alert("You have less than 20 coin");
     }
 })
 document.getElementById("love_click3").addEventListener("click", function(){

      const heartCount = document.getElementById("heart_count").innerText

            const newHeartCount = parseInt(heartCount) + 1;
        document.getElementById("heart_count").innerText = parseInt(newHeartCount)  ;
 })

 document.getElementById("copy_click3").addEventListener("click", function(){

    alert("Copied the service number (999)");

    const copyCount = document.getElementById("copy_count").innerText;
    const newCopyCount = parseInt(copyCount) + 1; 
    document.getElementById("copy_count").innerText = parseInt (newCopyCount);

    navigator.clipboard.writeText(999);
 })
 //card04 

 document.getElementById("call_click4").addEventListener("click", function(e){
    e.preventDefault()     
    alert("Ambulance Service  (1994-999999)");

    const coinCount = document.getElementById("coin_count").innerText ;
    
     if(coinCount >= 20 ){
    
         const newCoinCount = coinCount - 20 ;
         document.getElementById("coin_count").innerText = newCoinCount ;

         const still = new Date();
          const hours = still.getHours();
           const minutes = still.getMinutes();
            const seconds = still.getSeconds();
         

           document.getElementById("call-history").innerText = "Ambulance Service \n Service Number: 1994-999999\n\n" + (`Call Time: ${hours}:${minutes}:${seconds}`);
     }
    
     else{
        alert("You have less than 20 coin");
     }
 })
 document.getElementById("love_click4").addEventListener("click", function(){

      const heartCount = document.getElementById("heart_count").innerText

            const newHeartCount = parseInt(heartCount) + 1;
        document.getElementById("heart_count").innerText = parseInt(newHeartCount)  ;
 })

 document.getElementById("copy_click4").addEventListener("click", function(){

    alert("Copied the service number (1994-999999)");

    const copyCount = document.getElementById("copy_count").innerText;
    const newCopyCount = parseInt(copyCount) + 1; 
    document.getElementById("copy_count").innerText = parseInt (newCopyCount);

    navigator.clipboard.writeText(1994-999999);
 })
 //card05 

  document.getElementById("call_click5").addEventListener("click", function(e){
    e.preventDefault()     
    alert("Women and Child Helpline  (109)");

    const coinCount = document.getElementById("coin_count").innerText ;
    
     if(coinCount >= 20 ){
    
         const newCoinCount = coinCount - 20 ;
         document.getElementById("coin_count").innerText = newCoinCount ;

         const still = new Date();
          const hours = still.getHours();
           const minutes = still.getMinutes();
            const seconds = still.getSeconds();
         

           document.getElementById("call-history").innerText = "Women and Child Helpline \n Service Number: 109\n\n" + (`Call Time: ${hours}:${minutes}:${seconds}`);
     }
    
     else{
        alert("You have less than 20 coin");
     }
 })
 document.getElementById("love_click5").addEventListener("click", function(){

      const heartCount = document.getElementById("heart_count").innerText

            const newHeartCount = parseInt(heartCount) + 1;
        document.getElementById("heart_count").innerText = parseInt(newHeartCount)  ;
 })

 document.getElementById("copy_click5").addEventListener("click", function(){

    alert("Copied the service number (109)");

    const copyCount = document.getElementById("copy_count").innerText;
    const newCopyCount = parseInt(copyCount) + 1; 
    document.getElementById("copy_count").innerText = parseInt (newCopyCount);

    navigator.clipboard.writeText(109);
 })
 //card 06
 document.getElementById("call_click6").addEventListener("click", function(e){
    e.preventDefault()     
    alert("Anti-Corruption Helpline  (106)");

    const coinCount = document.getElementById("coin_count").innerText ;
    
     if(coinCount >= 20 ){
    
         const newCoinCount = coinCount - 20 ;
         document.getElementById("coin_count").innerText = newCoinCount ;

         const still = new Date();
          const hours = still.getHours();
           const minutes = still.getMinutes();
            const seconds = still.getSeconds();
         

           document.getElementById("call-history").innerText = "Anti-Corruption Helpline \n Service Number: 106\n\n" + (`Call Time: ${hours}:${minutes}:${seconds}`);
     }
    
     else{
        alert("You have less than 20 coin");
     }
 })
 document.getElementById("love_click6").addEventListener("click", function(){

      const heartCount = document.getElementById("heart_count").innerText

            const newHeartCount = parseInt(heartCount) + 1;
        document.getElementById("heart_count").innerText = parseInt(newHeartCount)  ;
 })

 document.getElementById("copy_click6").addEventListener("click", function(){

    alert("Copied the service number (106)");

    const copyCount = document.getElementById("copy_count").innerText;
    const newCopyCount = parseInt(copyCount) + 1; 
    document.getElementById("copy_count").innerText = parseInt (newCopyCount);

    navigator.clipboard.writeText(106);
 })




 
 