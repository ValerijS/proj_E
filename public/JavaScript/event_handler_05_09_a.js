function key(data){
    var parent = data.parentNode;
    var grand_parent = parent.parentNode;
    var father = grand_parent.firstChild;
    var key = father.childNodes[1].value;
    return key; 
}

function onClick_28_08(event, data) {  
    var value1 = event.target.name;
    var value2 = event.target.value;    
    if (value1 == 'id') {            
                   $.get("/delete_school_with_pupils",
                       {name: value2},
                       function(data,status){
                        console.log('f5',data);
                           $("#k1").html('school with id = '+value2+' is deleted');
                       });   
           
     }
}

function onClick1(event, data) {
$(document).ready(function(){    
        $.post("/insert_new",
        {          
          name: 'ident'
        },
        function(data,status){
            $("body").html(data);            
        });   
});
}

function onClick2(event, data) {
$(document).ready(function(){    
        $.post("/delete_new",
        {          
          name: 'ident'
        },
        function(data,status){
            $("#k1").html(data);            
        });  
});
} 
 function onChange(event, data) {    
    var value1 = event.target.name;
    var value2 = event.target.value;    
    key = key(data);
    //alert(father.childNodes[1]);   
    if(value1 != 'id'){
        alert('Changed use params ' + value1 + ' of school "id"=' + key); 
        window.location.pathname = '/updata_school/'+value1+'/'+value2+'/'+key;
    }
 }

function onClick(event, data) {   
    var value3 = event.target.id;
    var value1 = event.target.getAttribute('numb');
    var value2 = event.target.value;
    var value4 = document.getElementById(value3).value;    
    window.location.pathname = '/pupil_get/' + value1;  
}
function onClick_11_08(event, data){   
    //var value3 = event.target.id;
    //var value1 = event.target.getAttribute('numb');
    var value2 = event.target.value;
    key = key(data);
    //var value4 = document.getElementById(value3).value;    
        //alert( value1 +' / ' + document.getElementById(value3).value);    
         $.post("/admin",
        {
          name: key,
          value: value2,
          id: key
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
    //var value3 = event.target.id;
    var value1 = event.target.name;
    var value2 = event.target.value;
    //var value4 = document.getElementById(value3).value;
    key = key(data);
    $.post("/updata_school_number_of_pupl1_11_08",
        {
          name: value1,
          value: value2,
          id: key
        },
        function(data,status){
            $("#k1").html(data);            
        }
     );
}
