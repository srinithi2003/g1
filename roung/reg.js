

$(document).ready(function(){
    $('#insertbtn').click(function(e){
        e.preventDefault();
   
        $.ajax({
        method:"post",
        url:"./php/profile.php",
        data:$('#vedformid').serialize(),
        dataType:"text",    
        success:function(response){
            $('#messagedisplay').text(response);

        }
    })
})
});
