const calculate=()=>{
    var temperature=Number(document.getElementById("temp").value);
    const tempSelected=document.getElementById("temp_cat");
    var valueTemp=temp_cat.options[tempSelected.selectedIndex].value;
    var res;
    var ids;
    if(valueTemp=="cel"){
        console.log("cel to far");
        res=(temperature*(9/5))+32;
        ids=" Farenheit";
    }
    else{
        console.log("far to cel");
        res=(temperature-32)*(5/9);
        ids=" Celsius";
    }

    var resu=document.getElementById("result");
    resu.textContent=res+ids;

}