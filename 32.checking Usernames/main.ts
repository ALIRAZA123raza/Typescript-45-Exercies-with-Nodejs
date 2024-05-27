let currentUser = ["Ali","Aqib","Rabi","Haseeb","Arsalan"];

let newUser = ["Imran","Hammad","Ali","Raheel","Haseeb"];

newUser.forEach(newOneUser => {
    let our_condition =currentUser.some(currentOneUser => currentOneUser.toLowerCase() === newOneUser.toLowerCase())
    if(our_condition){
      console.log(`sorry ${newOneUser}  is already taken`)
    }else{
        console.log(`This username ${newOneUser} is available`)
    }
})
