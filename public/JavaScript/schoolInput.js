//alert( document.getElementById('key').value);

//function onChange(event, data) {
 function onChange(event, data) {   
    var value3 = event.target.id;
    var value1 = event.target.name;
    var value2 = event.target.value;
    var value4 = event.target.getAttribute('tile');
    //if (data.name === 'id') {
        alert( value1 + value2 +'_'+ value3 +'_'+value4 +' / ' + document.getElementById(value3).value)
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


function onClick(event, data) {   
   // var value3 = event.target.id;
    //var value1 = event.target.name;
   // var value2 = event.target.value;
    var value4 = event.target.getAttribute('numb');
    //if (data.name === 'id') {
     //   alert(  value4 +' / ' )
    //}


$(document).ready(function(){
    //function(){
        $.post("/pupil_get",
        {
          
          name: value4
        },
        function(data,status){
            $("p").html(data);
           // alert("Data: " + data + "\nStatus: " + status);
        });
   // };
});
}

function onClick1(event, data) {   
   // var value3 = event.target.id;
    //var value1 = event.target.name;
   // var value2 = event.target.value;
   // var value4 = event.target.getAttribute('numb');
    //if (data.name === 'id') {
        alert(  'click1' +' / ' )
    //}


$(document).ready(function(){
    //function(){
        $.post("/insert_new",
        {
          
          name: 'ident'
        },
        function(data,status){
            $("p").html(data);
            alert("Data: " + data + "\nStatus: " + status);
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
        alert(  'click2' +' / ' )
    //}


$(document).ready(function(){
    //function(){
        $.post("/delete_new",
        {
          
          name: 'ident'
        },
        function(data,status){
            $("p").html(data);
            alert("Data: " + data + "\nStatus: " + status);
        });
   // };
});
}
