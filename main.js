const total = () =>{
    let lg = document.getElementById('lg').value;
    let js = document.getElementById('js').value;
    let es = document.getElementById('es').value;
    let ds = document.getElementById('ds').value;
    let gpa = "";
    
    let totalGrades = parseFloat(lg) + parseFloat(js) + parseFloat(ds) + parseFloat(es);
    // alert(totalGrades);

    let perc = (totalGrades/400)*100;
    // alert(perc);


    if(perc <= 100 && perc >=91){
        gpa = 'E';
    }else if(perc <=90 && perc >= 81){
        gpa = 'A';
    }else if(perc <= 80 && perc >= 71){
        gpa = 'B';
    }else if(perc <= 70 && perc >= 61){
        gpa = 'C';
    }else if(perc <= 60 && perc >= 40){
        gpa = 'D';
    }else{
        gpa = 'F';
    }

    if(perc >=40){
        document.getElementById('what').innerHTML = ` You are Pass !  `
    }else{
        document.getElementById('what').innerHTML = ` You are Fail Better Luck Next time ...`
    }

document.getElementById('showdata').innerHTML = `Out of 400 your is ${totalGrades} and percentage is ${perc}%.`
document.getElementById('grd').innerHTML = ` <br> Your grade is ${gpa} .`

}
