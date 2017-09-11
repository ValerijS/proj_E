//alert( 'j am');

//function onChange(event, data) {
// function onChange(event, data) {   
//    var value3 = event.target.id;
//    var value1 = event.target.name;
//    var value2 = event.target.value;
//    var value4 = event.target.getAttribute('tile');
//    //if (data.name === 'id') {
//        alert( value1 + value2 +'_'+ value3 +'_'+value4 +' / ' + document.getElementById(value3).value)
//    //}
//
//
//$(document).ready(function(){
//   // $("button").click(function(){
//        $.post("/updata_school_number_of_pupl",
//        {
//          name: value1,
//          value: value2,
//          id: value4
//        },
//        function(data,status){
//            $("p").html(data);
//           // alert("Data: " + data + "\nStatus: " + status);
//        });
//    //});
//});
//
//}

function onClick_28_08(event, data) {  
    var value1 = event.target.name;
    var value2 = event.target.value;
    //alert(value1,value2);
    if (value1 == 'id') {     
           //$(document).ready(function(){    
                   $.get("/delete_school_with_pupils",
                       {name: value2},
                       function(data,status){
                        console.log('f5',data);
                           $("#k1").html('school with id = '+value2+' is deleted');
                       });   
           //});
     }
}

function onClick1(event, data) {   
   // var value3 = event.target.id;
    //var value1 = event.target.name;
   // var value2 = event.target.value;
   // var value4 = event.target.getAttribute('numb');
    //if (data.name === 'id') {
       // alert(  'click1' +' / ' )
    //}


$(document).ready(function(){
    //function(){
        $.post("/insert_new",
        {
          
          name: 'ident'
        },
        function(data,status){
            $("body").html(data);
            //alert("Data: " + data + "\nStatus: " + status);
        });
   // };
});
}

function onClick2(event, data) {   
   // var value3 = event.target.id;
    //var value1 = event.target.name;
   // var value2 = event.target.value;
   // var value4 = event.target.getAttribute('numb');
    //if (data.name === 'id') {
       // alert(  'click2' +' / ' )
    //}


$(document).ready(function(){
    //function(){
        $.post("/delete_new",
        {
          
          name: 'ident'
        },
        function(data,status){
            $("#k1").html(data);
            //alert("Data: " + data + "\nStatus: " + status);
        });
   // };
});
}
/*
function onClick(event, data) {   
    var value3 = event.target.id;
    var value1 = event.target.getAttribute('numb');
    var value2 = event.target.value;
    var value4 = document.getElementById(value3).value;
    //if (data.name === 'id') {
        alert( value1 + value2 +'_'+ value3 +'_'+value4 +' / ' + document.getElementById(value3).value)
    //}
//alert( document.getElementById('key').value);

//function onChange(event, data) {
*/ 
 
 function onChange(event, data) {   
    var value3 = event.target.getAttribute('id');
    var value1 = event.target.name;
    var value2 = event.target.value;
    var value4 = event.target.getAttribute('tile');
    var value5 = document.getElementById(value3).value;
    //if (data.name === 'id') {
        //alert( value1 + value2 +'_'+ value3 +'_'+value4 +' / ' + document.getElementById(value3).value)
    //}
if(value1 != 'id'){
    alert('Changed ' + value1 + ' of school "id"=' + value5); 
$(document).ready(function(){
   // $("button").click(function(){
 $.get("/updata_school",
       {name: value1,
       value: value2,
       id: value5},
        function(data,status){
            $("#k1").html(data);
           // alert("Data: " + data + "\nStatus: " + status);
        });
    //});
});
}
}

//function onClick1(event, data) {   
//   // var value3 = event.target.id;
//    //var value1 = event.target.name;
//   // var value2 = event.target.value;
//   // var value4 = event.target.getAttribute('numb');
//    //if (data.name === 'id') {
//        alert(  'click1' +' / ' )
//    //}
//
//
//$(document).ready(function(){
//    //function(){
//        $.post("/insert_new",
//        {
//          
//          name: 'ident'
//        },
//        function(data,status){
//            $("body").html(data);
//            alert("Data: " + data + "\nStatus: " + status);
//        });
//   // };
//});
//}

//function onClick2(event, data) {   
//   // var value3 = event.target.id;
//    //var value1 = event.target.name;
//   // var value2 = event.target.value;
//   // var value4 = event.target.getAttribute('numb');
//    //if (data.name === 'id') {
//        alert(  'click2' +' / ' )
//    //}
//
//
//$(document).ready(function(){
//    //function(){
//        $.post("/delete_new",
//        {
//          
//          name: 'ident'
//        },
//        function(data,status){
//            $("body").html(data);
//            alert("Data: " + data + "\nStatus: " + status);
//        });
//   // };
//});
//}
function onClick(event, data) {   
    var value3 = event.target.id;
    var value1 = event.target.getAttribute('numb');
    var value2 = event.target.value;
    var value4 = document.getElementById(value3).value;
    //if (data.name === 'id') {
        //alert( value1 + value2 +'_'+ value3 +'_'+value4 +' / ' + document.getElementById(value3).value)
    //}


//$(document).ready(function(){
   // $("button").click(function(){
        /*$.post("/updata_school_number_of_pupl1",
        {
          name: value1,
          value: value2,
          id: value4
        },
        function(data,status){
            $("body").html(data);
            alert("Data: " + data + "\nStatus: " + status);
        });*/
 window.location.pathname = '/pupil_get/' + value1;
    //});
//});

}
function onClick_11_08(event, data){   
    var value3 = event.target.id;
    var value1 = event.target.getAttribute('numb');
    var value2 = event.target.value;
    var value4 = document.getElementById(value3).value;    
        //alert( value1 +' / ' + document.getElementById(value3).value);    
         $.post("/admin",
        {
          name: value4,
          value: value2,
          id: value4
        },
        function(data,status){
            $("body").html(data);
            //alert("Data: " + data + "\nStatus: " + status);
        });       
}
function onClick_order_15_08(event,data) {    
    var value1 = data.innerHTML;
    alert( value1 );    
    $.get("/schools",
        {          
          value1: value1
        },
        function(data,status){
            $("body").html(data);            
      });       
}



function onClick_order_pupil_15_08(event,data) {   
    var value1 = data.innerHTML;     
    alert( value1);    
    $.get("pupils",
        {          
          value1: value1
        },
        function(data,status){
            $("body").html(data);            
     });       
}
function onChangePupil(event, data) {   
    var value3 = event.target.id;
    var value1 = event.target.name;
    var value2 = event.target.value;
    var value4 = document.getElementById(value3).value;
    //if (data.name === 'id') {
        //alert( value1 + value2 +'_'+ value3 +'_'+value4 +' / ' + document.getElementById(value3).value);
    //}


//$(document).ready(function(){
   // $("button").click(function(){
        $.post("/updata_school_number_of_pupl1_11_08",
        {
          name: value1,
          value: value2,
          id: value4
        },
        function(data,status){
            $("#k1").html(data);
            //alert("Data: " + data + "\nStatus: " + status);
        });
}
