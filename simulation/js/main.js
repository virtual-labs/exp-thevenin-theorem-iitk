let voltage1 = 0;
let current1 = 0;
let r1 = 0;
let r2 = 0;
let r3 = 0;
let Vth = 0;
let Rth = 0;
let Iload = 0;
let voltages1=0;
let voltages2=0;
function getVoltage(id) {
    if (id === 'voltage1') {
        voltage1 = document.getElementById(id).value;
        document.getElementById("voltage-1-display").innerText = voltage1;
        document.getElementById("voltage-1-display-svg").innerHTML = "V1: " + voltage1 + " volts";
    }

    else {
        current1 = document.getElementById(id).value;
        document.getElementById("voltage-2-display").innerText = current1;
        document.getElementById("voltage-2-display-svg").innerHTML = "V2: " + current1 + " amp";
    }
}

function getResistance(id) {

    if (id === 'Resistance-1') {
        r1 = document.getElementById(id).value;
        document.getElementById("r-1-display").innerText = r1;

        document.getElementById("r1-svg-display").innerHTML = r1;
        document.getElementById("r10-svg-display").innerHTML = r1;
    }

    else if (id === 'Resistance-2') {
        r2 = document.getElementById(id).value;
        document.getElementById("r-2-display").innerText = r2;

        document.getElementById("r2-svg-display").innerHTML = r2;
        document.getElementById("r20-svg-display").innerHTML = r2;
    }

    else if (id === 'Resistance-3') {
        r3 = document.getElementById(id).value;
        document.getElementById("r-3-display").innerText = r3;

        document.getElementById("r3-svg-display").innerHTML = r3;
        document.getElementById("r30-svg-display").innerHTML = r3;
    }

    else {
        rgain = document.getElementById(id).value;
        document.getElementById("rgain-display").innerText = rgain;

        document.getElementById("rgain-svg-display").innerHTML = rgain;
    }
}
let arr = [];

function get_Vth() {
    Vth = ((voltage1 / r1) + current1) / (1 + (1 / r2));
    Vth = Vth.toFixed(3);
    arr.push("Thevenin voltage=" + Vth);
    if(isNaN(Vth))
    alert("please select the values of required field");
    else
    alert("Thevenin Voltage="+Vth);
}
function get_Rth() {
    Rth = (((r1 * r2) / (r1 + r2)) + r3);
    Rth = Number(Rth).toFixed(3);
    // console.log(Rth)
    if(isNaN(Vth))
    alert("please select the values of required field");
    else
    alert("Thevenin Resistance="+Rth);
    arr.push("Thevenin resistance=" +Rth);
}
function get_Iload() {
    Iload = Vth / Rth;
    Iload = Iload.toFixed(3);
    if(isNaN(Iload))
    alert("please calculate the values of required field");
    else
    alert("Load current="+Iload);
    arr.push("Load current=" + Iload);
}

function output() {
    var separator = "<br>";
    var text = arr.join(separator)
    document.getElementById("demo3").innerHTML = text;
    arr.pop();
    arr.pop();
    arr.pop();

}
let table = document.getElementById("table")
let count = 0;
const procedure = () => {

    table.innerHTML += `<tr>
                <td id='r${count}c0' width=60px></td>
                <td id='r${count}c1' width=60px></td>
                <td id='r${count}c2' width=60px></td>
                <td id='r${count}c3' width=60px></td>
                <td id='r${count}c4' width=60px></td>
                <td id='r${count}c5' width=60px></td>
                <td id='r${count}c6' width=60px></td>
                <td id='r${count}c7' width=60px></td>
                <td id='r${count}c8' width=60px></td>
  </tr>`
    var data = new Array();
    data.push(r1);
    data.push(r2);
    data.push(r3);
    data.push(rgain);
    data.push(current1);
    data.push(voltage1);
    data.push(Vth);
    data.push(Rth);
    data.push(Iload);
    for (i = 0; i < data.length; i++) {
        document.getElementById("r" + count + "c" + i).innerHTML = data[i];
    }
    count++;
}




let r11 = 0;
let r12 = 0;
let r13 = 0;
let I21=0;
let I22=0;
let I23=0;
let I31=0;
let I32=0;
let I33=0;
let I11=0;
let I12=0;
let I13=0;
const image1 = document.getElementById("switch1");
const image2 = document.getElementById("switch2");
switch1=false;
switch2=false;
let rotation1 = 0;
rotation1=12.3;
let rotation2 = 0;
rotation2=-12.3;
let akanksha = 0;
// let arr1 = [];
function getVoltages(id) {
    if (id === 'voltages1') {
        voltages1 = document.getElementById(id).value;
        document.getElementById("voltages-1-display").innerText = voltages1;
        document.getElementById("voltage-svg-image1").innerHTML = "V1: " + voltages1 + " volts";
    }

    else {
        voltages2 = document.getElementById(id).value;
        document.getElementById("voltages-2-display").innerText = voltages2;
        document.getElementById("voltage-svg-image2").innerHTML = "V2: " + voltages2 + "volts";
    }
}
function getResistances(id) {

    if (id === 'Resistances-1') {
        r11 = document.getElementById(id).value;
        document.getElementById("rs-1-display").innerText = r11;

        document.getElementById("resistance-svg-image1").innerHTML = r11;
        document.getElementById("r10-svg-display").innerHTML = r11;
    }

     if (id === 'Resistances-2') {
        r22 = document.getElementById(id).value;
        document.getElementById("rs-2-display").innerText = r22;

        document.getElementById("resistance-svg-image2").innerHTML = r22;
        document.getElementById("r20-svg-display").innerHTML = r22;
    }

    if  (id === 'Resistances-3') {
        r33 = document.getElementById(id).value;
        document.getElementById("rs-3-display").innerText = r33;

        document.getElementById("resistance-svg-image3").innerHTML = r33;
        document.getElementById("r30-svg-display").innerHTML = r33;
    }
}

function case1(){
    if(r11==0 ||r22==0 ||r33==0 ||voltages1==0 ||voltages2==0){
        alert("Set the values first");
        }
I11= (voltages1/(((r22*r33)/(r22+r33))+r11));
I11 = I11.toFixed(2);
I12=I11*(r33/(r22+r33));
I12 = I12.toFixed(2);
I13=I11-I12;
I13 = I13.toFixed(2);
document.getElementById("desc").innerHTML =  "current through R1 ="+I11 +", "+"current through R2= "+I12+", "+" current through R3 ="+I13;
document.getElementById("current-svg-image1").innerHTML =  I11;
document.getElementById("current-svg-image2").innerHTML =  I12;
document.getElementById("current-svg-image3").innerHTML =  I13;
if(isNaN(I11)||isNaN(I12)||isNaN(I13))
alert("select the proper values");
else
alert("Case-1:In presence of V1 only")
if(switch1==false&&switch2==false){
   image1.style.transform = `rotate(${rotation1}deg)`;
   image1.style.transformOrigin = "121.26px 171.44px";

   switch1 = true;
}
else if(switch1==true&&switch2==true){
    // let rotation = 0;
    let akanksha=0;
    image2.style.transform = `rotate(${akanksha}deg)`;
    image2.style.transformOrigin ="456.92px 159.92px" ;
    switch2=false;
}
else{
    

// console.log(23)
   image1.style.transform = `rotate(${rotation1}deg)`;
   image1.style.transformOrigin = "121.26px 171.44px";

   switch1 = true;
   image2.style.transform = `rotate(${akanksha}deg)`;
    image2.style.transformOrigin ="456.92px 159.92px" ;
    switch2=false;
}

}
function case2(){
    if(r11==0 ||r22==0 ||r33==0 ||voltages1==0 ||voltages2==0){
        alert("Set the values first");
        }
I21= (voltages2/(((r11*r33)/(r11+r33))+r22));
I21 = I21.toFixed(2);
I22=I21*(r33/(r11+r33));
I22 = I22.toFixed(2);
I23=I22-I21;
I23 = I23.toFixed(2);
document.getElementById("desc").innerHTML = "current through R1="+I21 +", "+"current through R2= "+I22+" ,"+" current through R3="+I23;
document.getElementById("current-svg-image1").innerHTML =  I21;
document.getElementById("current-svg-image2").innerHTML =  I22;
document.getElementById("current-svg-image3").innerHTML =  I23;
alert("Case-2: In presence of V2 only")

if(switch1==false&&switch2==false){
    image2.style.transform = `rotate(${rotation2}deg)`;
    image2.style.transformOrigin ="456.92px 159.92px" ;
    switch2=true;
    }
    else if(switch1==true&&switch2==true){
        image1.style.transform = `rotate(${akanksha}deg)`;
        image1.style.transformOrigin = "121.26px 171.44px";
        switch1=false;
    }
    else{
        image2.style.transform = `rotate(${rotation2}deg)`;
        image2.style.transformOrigin ="456.92px 159.92px" ;
        switch2=true;
       image1.style.transform = `rotate(${akanksha}deg)`;
       image1.style.transformOrigin = "121.26px 171.44px";
       switch1=false;
    }
}
function case3(){
    if(r11==0 ||r22==0 ||r33==0 ||voltages1==0 ||voltages2==0){
        alert("Set the values first");
        }
    I31= (voltages1/(((r22*r33)/(r22+r33))+r11))+(voltages2/(((r11*r33)/(r11+r33))+r22));
    I31=I31.toFixed(2);
    I32=(voltages1/(((r22*r33)/(r22+r33))+r11))*(r33/(r22+r33))-(voltages2/(((r11*r33)/(r11+r33))+r22))*(r33/(r11+r33));
    I32=I32.toFixed(2);
   I33=(voltages2/(((r11*r33)/(r11+r33))+r22))*(r33/(r11+r33))-(voltages2/(((r11*r33)/(r11+r33))+r22))+(voltages1/(((r22*r33)/(r22+r33))+r11))-(voltages1/(((r22*r33)/(r22+r33))+r11))*(r33/(r22+r33));
   I33=I33.toFixed(2);
   document.getElementById("desc").innerHTML = "current through R1="+I31 +","+"current through R2 ="+I32+" ,"+"current through R3 ="+I33;
    document.getElementById("current-svg-image1").innerHTML =  I31;
    document.getElementById("current-svg-image2").innerHTML =  I32;
    document.getElementById("current-svg-image3").innerHTML =  I33;
    alert("Case 3: In presence of both the sources")
    if(switch1==false && switch2==false){
        image2.style.transform = `rotate(${rotation2}deg)`;
        image2.style.transformOrigin ="456.92px 159.92px" ;
        switch2=true;
        image1.style.transform = `rotate(${rotation1}deg)`;
        image1.style.transformOrigin = "121.26px 171.44px";
        switch1 = true;
        }
        if(switch1==true&&switch2==false){
        
            image2.style.transform = `rotate(${rotation2}deg)`;
            image2.style.transformOrigin ="456.92px 159.92px" ;
            switch2=true;
        }
        if(switch1==false&&switch2==true){
            image1.style.transform = `rotate(${rotation1}deg)`;
            image1.style.transformOrigin = "121.26px 171.44px";
            switch1 = true;
        }
    }
    let table1 = document.getElementById("table1")
let count1 = 0;
const procedure1 = () => {

    table1.innerHTML += `<tr>
                <td id='r${count1}c0' width=60px></td>
                <td id='r${count1}c1' width=60px></td>
                <td id='r${count1}c2' width=60px></td>
                <td id='r${count1}c3' width=60px></td>
                <td id='r${count1}c4' width=60px></td>
                <td id='r${count1}c5' width=60px></td>
                <td id='r${count1}c6' width=60px></td>
                <td id='r${count1}c7' width=60px></td>
                <td id='r${count1}c8' width=60px></td>
  </tr>`
    var data = new Array();
    data.push(I11);
    data.push(I12);
    data.push(I13);
    data.push(I21);
    data.push(I22);
    data.push(I23);
    data.push(I31);
    data.push(I32);
    data.push(I33);
    for (i = 0; i < data.length; i++) {
        document.getElementById("r" + count1 + "c" + i).innerHTML = data[i];
    }
    count1++;
}


