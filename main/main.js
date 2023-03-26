let tip=document.getElementById("tips"); 

tips.addEventListener("input" ,getTip);
function getTip(){
 let bill=parseInt(document.getElementById("bill").value);
  let tips=parseInt(document.getElementById("tips").value);
  
  
  let tipsAmount=(tips*bill/100);
  document.getElementById("rs").value=tipsAmount;
  let totalAmount=bill+tipsAmount;
  document.getElementById("total-amt").value=`${totalAmount}`;
    document.getElementById("total").value=`${totalAmount}`;

}