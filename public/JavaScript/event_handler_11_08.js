//alert( 'j am');

//function onChange(event, data) {
 function onChange(event, data) {   
    var value3 = event.target.id;
    var value1 = event.target.name;
    var value2 = event.target.value;
    var value4 = event.target.getAttribute('tile');
    //if (data.name === 'id') {
        //alert( value1 + value2 +'_'+ value3 +'_'+value4 +' / ' + document.getElementById(value3).value)
    //}


$(document).ready(function(){
   // $("button").click(function(){
        $.post("/updata_school_number_of_pupl",
        {
          name: value1,
          value: value2,
          id: value4
        },
        function(data,status){
            $("p").html(data);
           // alert("Data: " + data + "\nStatus: " + status);
        });
    //});
});

}

function onClick1(event, data) {   
   // var value3 = event.target.id;
    //var value1 = event.target.name;
   // var value2 = event.target.value;
   // var value4 = event.target.getAttribute('numb');
    //if (data.name === 'id') {
        //alert(  'click1' +' / ' )
    //}


$(document).ready(function(){
    //function(){
        $.post("/insert_new",
        {
          
          name: 'ident'
        },
        function(data,status){
            $("p").html(data);
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
        //alert(  'click2' +' / ' )
    //}


$(document).ready(function(){
    //function(){
        $.post("/delete_new",
        {
          
          name: 'ident'
        },
        function(data,status){
            $("p").html(data);
            //alert("Data: " + data + "\nStatus: " + status);
        });
   // };
});
}

 
 function onChange(event, data) {   
    var value3 = event.target.id;
    var value1 = event.target.name;
    var value2 = event.target.value;
    var value4 = event.target.getAttribute('tile');
    //if (data.name === 'id') {
        //alert( value1 + value2 +'_'+ value3 +'_'+value4 +' / ' + document.getElementById(value3).value)
    //}


$(document).ready(function(){
   // $("button").click(function(){
        $.post("/updata_school_number_of_pupl",
        {
          name: value1,
          value: value2,
          id: value4
        },
        function(data,status){
            $("p").html(data);
           // alert("Data: " + data + "\nStatus: " + status);
        });
    //});
});

}

function onClick1(event, data) {   
   // var value3 = event.target.id;
    //var value1 = event.target.name;
   // var value2 = event.target.value;
   // var value4 = event.target.getAttribute('numb');
    //if (data.name === 'id') {
        //alert(  'click1' +' / ' )
    //}


$(document).ready(function(){
    //function(){
        $.post("/insert_new",
        {
          
          name: 'ident'
        },
        function(data,status){
            $("p").html(data);
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
        //alert(  'click2' +' / ' )
    //}


$(document).ready(function(){
    //function(){
        $.post("/delete_new",
        {
          
          name: 'ident'
        },
        function(data,status){
            $("p").html(data);
            //alert("Data: " + data + "\nStatus: " + status);
        });
   // };
});
}
function onClick(event, data) {   
    var value3 = event.target.id;
    var value1 = event.target.getAttribute('numb');
    var value2 = event.target.value;
    var value4 = document.getElementById(value3).value;    
       // alert( value1 + value2 +'_'+ value3 +'_'+value4 +' / ' + document.getElementById(value3).value)
   
 window.location.pathname = '/pupil_get/' + value1;

}
function onClick_11_08(event, data){   
    var value3 = event.target.id;
    var value1 = event.target.getAttribute('numb');
    var value2 = event.target.value;
    var value4 = document.getElementById(value3).value;    
        //alert( value1 +' / ' + document.getElementById(value3).value);    
         $.post("/pupils_get",
        {
          name: value1,
          value: value2,
          id: value4
        },
        function(data,status){
            $("body").html(data);
            //alert("Data: " + data + "\nStatus: " + status);
        });       
}
function onClick_order_11_08(event,data) {   
    var value3 = event.target.id;
    var value1 = event.target.getAttribute('numb');
    var value2 = event.target.value;
   //var value4 = document.getElementById(value3).value;    
        //alert( value2 +' / ');    
         $.post("/show_school_with_orders",
        {          
          value: value2
        },
        function(data,status){
            $("body").html(data);
            //alert("Data: " + data + "\nStatus: " + status);
        });       
}



function onClick_order_pipl_11_08(event,data) {   
    var value3 = event.target.id;
    var value1 = event.target.getAttribute('numb');
    var value2 = event.target.value;
   //var value4 = document.getElementById(value3).value;    
        //alert( value2 +' / ');    
         $.post("/show_pupils_with_orders",
        {          
          value: value2
        },
        function(data,status){
            $("body").html(data);
            //alert("Data: " + data + "\nStatus: " + status);
        });       
}
function onChangePupil(event, data) {   
    var value3 = event.target.id;
    var value1 = event.target.name;
    var value2 = event.target.value;
    var value4 = document.getElementById(value3).value;
    //if (data.name === 'id') {
    //}

   if (value1 != 'id'){
     alert( 'Changed ' + value1 + ' of pupil "id"= '+value4 );
//$(document).ready(function(){
   // $("button").click(function(){
        $.post("/updata_pupils",
        {
          name: value1,
          value: value2,
          id: value4
        },
        function(data,status){
            $("p").html(data);
            //alert("Data: " + data + "\nStatus: " + status);
        });
   }
// window.location.pathname = '/pupil_get/' + value1;
    //});
//});
}
/* 
function onChangePupil(event, data) {   
    var value3 = event.target.id;
    var value1 = event.target.name;
    var value2 = event.target.value;
    var value4 = document.getElementById(value3).value;
    //if (data.name === 'id') {
        alert( value1 + value2 +'_'+ value3 +'_'+value4 +' / ' + document.getElementById(value3).value);
    //}


$(document).ready(function(){
   // $("button").click(function(){
        $.post("/updata_school_number_of_pupl1",
        {
          name: value1,
          value: value2,
          id: value4
        },
        function(data,status){
            $("p").html(data);
            alert("Data: " + data + "\nStatus: " + status);
        });
// window.location.pathname = '/pupil_get/' + value1;
    //});
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
 /*window.location.pathname = '/pupil_get/' + value1;
    //});
//});

}
*/
/* 
function onChangePupil(event, data) {   
    var value3 = event.target.id;
    var value1 = event.target.name;
    var value2 = event.target.value;
    var value4 = document.getElementById(value3).value;
    //if (data.name === 'id') {
        alert( value1 + value2 +'_'+ value3 +'_'+value4 +' / ' + document.getElementById(value3).value);
    //}


$(document).ready(function(){
   // $("button").click(function(){
        $.post("/updata_school_number_of_pupl1",
        {
          name: value1,
          value: value2,
          id: value4
        },
        function(data,status){
            $("p").html(data);
            alert("Data: " + data + "\nStatus: " + status);
        });
// window.location.pathname = '/pupil_get/' + value1;
    //});
});
}
*/