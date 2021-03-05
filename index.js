let signInsatff = [];



let allStaff = [
  { id: 1, name: "prince", role: "manager" },

  { id: 2, name: "emeka", role: "intern"},
];

function signIn() {
  let staff = document.getElementById("staffId").value;
  let date = document.getElementById("staffDate").value;
  date = new Date();
  //alert(staff);
  for (let i = 0; i < allStaff.length; i++) {
    if (staff == allStaff[i].id ) {
      let newData = {
        id: allStaff[i].id,
        name: allStaff[i].name,
        role: allStaff[i].role,
        date: date,
        
        
      };
      
      signInsatff.push(newData);
     
      showSignInStaff();
      console.log(signInsatff);
      
      return
      
    }
  }
  
}



function showSignInStaff() {
  document.getElementById("displayStaff").innerHTML = "";
  
  for (showStaff of signInsatff) {
    let staffElement = document.createElement("p");
    let displayAllStaff = document.createTextNode(
      `Staff Id : ${showStaff.id} 
       Staff Name :${showStaff.name}
       Staff Role :${showStaff.role} 
       Time SignIn: ${showStaff.date}`
    );

    staffElement.appendChild(displayAllStaff);
    document.getElementById("displayStaff").appendChild(staffElement);
    console.log(displayAllStaff);
  }

  
}


function checkNoOfDaySignIn(){
    let staffPaymentId = document.getElementById("staffPaymentId").value;
    let days = 0
      for(let tdays = 0; tdays < signInsatff.length; tdays++){
        if(signInsatff[tdays].id == staffPaymentId){
          days +=1
        }
      }
      if(days >= 5){
        alert("you can receive payment")
      }else{
        alert("no payment")
      }
  
}



