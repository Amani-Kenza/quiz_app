window.onload=function(){
var input=document.getElementsByTagName("input");
var class1=document.getElementsByClassName("question1");
var selection1=document.getElementById("rep12");
var rep_bord1=document.getElementById("rep-bord1");
var selection2=document.getElementById("rep21");
var rep_bord2=document.getElementById("rep-bord2");
var selection3=document.getElementById("rep33");
var rep_bord3=document.getElementById("rep-bord3");
var selection41=document.getElementById("rep41");
var rep_bord41=document.getElementById("rep-bord41");
var selection42=document.getElementById("rep42");
var rep_bord42=document.getElementById("rep-bord42");
var selection43=document.getElementById("rep43");
var rep_bord43=document.getElementById("rep-bord43");
var selection44=document.getElementById("rep44");
var rep_bord44=document.getElementById("rep-bord44");
var selection51=document.getElementById("rep51");
var rep_bord51=document.getElementById("rep-bord51");
var selection53=document.getElementById("rep53");
var rep_bord53=document.getElementById("rep-bord53");
var selection54=document.getElementById("rep54");
var rep_bord54=document.getElementById("rep-bord54");
var selection63=document.getElementById("rep63");
var rep_bord63=document.getElementById("rep-bord63");
var selection73=document.getElementById("rep73");
var rep_bord73=document.getElementById("rep-bord73");
var selection82=document.getElementById("rep82");
var rep_bord82=document.getElementById("rep-bord82");

for (let index = 0; index < input.length; index++) {
            input[index].addEventListener("mouseup",checkbox)
        }
        
        function checkbox(event){
            var rep=event.target;
                if (!(event.target.checked)) {
                    if (rep==selection1){
                        rep_bord1.style.border=" 2px solid green";
                     i++;
                }}
                if (!(event.target.checked)) {
                    if (rep==selection2){
                        rep_bord2.style.border=" 2px solid green";
                      i++;
                }}
                if (!(event.target.checked)) {
                    switch (rep) {
                        case selection41:
                            rep_bord41.style.border=" 2px solid green";
                        break
                        case selection42:
                            rep_bord42.style.border=" 2px solid green";
                            break
                        case selection43:
                            rep_bord43.style.border=" 2px solid green";
                            break
                        case selection44:
                            rep_bord44.style.border=" 2px solid green";
                        }
                        i++
                    }        
                if (!(event.target.checked)) {
                    switch (rep) {
                        case selection51:
                            rep_bord51.style.border=" 2px solid green";
                        break
                        case selection53:
                            rep_bord53.style.border=" 2px solid green";
                            break
                        case selection54:
                            rep_bord54.style.border=" 2px solid green";
                        }
                        i++;
                    }  
                if (!(event.target.checked)) {
                    if (rep==selection63){
                        rep_bord63.style.border=" 2px solid green";
                        i++;
                }}  
                if (!(event.target.checked)) {
                    if (rep==selection73){
                        rep_bord73.style.border=" 2px solid green";
                        i++;
                }}  
                if (!(event.target.checked)) {
                    if (rep==selection82){
                        rep_bord82.style.border=" 2px solid green";
                        i++;
                }}
                }
            
        }              
        
    