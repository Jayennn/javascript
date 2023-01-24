   function callBack() {
         console.log(1);
   }

   function buttonClick() {
        setTimeout(() => {
            callBack()
        }, 5000);

        setInterval(() => {
            callBack()
        }, 2000)

//  Async 👆
        console.log("Success Click button");    
 }