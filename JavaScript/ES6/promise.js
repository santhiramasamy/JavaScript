const buyFlightTicket = () => {
    return new Promise ((resolve,reject)=>{
        setTimeout( () => {
              const error = false; /*--it shows the msg in reject*/
             /*const error = true; -- it shows the msg in resolve*/

            if(error) {
                reject("Sorry your payment was not successful")
            }

            else{
                resolve("Thank You, Your payment was successful");
            }

        }, 3000)
    })
}

buyFlightTicket()
.then((success) => console.log(success))
.catch((error) => console.log(error))