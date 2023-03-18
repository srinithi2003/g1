

// alert("hi profile page");
if(localStorage.getItem("log")==1){


    $(document).ready(function(){
    
        $('#update').click(function(e){
        
            var fname=$('#fname').val();
            var lname=$('#lname').val();
            var age=$('#age').val();
            var contact=$('#contact').val();

            
            $.ajax({
                type:"POST",
                url:"./php/profile.php",
                data:{
                    fname:fname,
                    lname:lname,
                    age:age,
                    contact:contact
                
                },
                dataType:"text",
                success:function (row){
                    alert("profile updated successfully");
                    window.location="./profile.html";
            
                }
            })

    
    
        // $.ajax({
        //     method:"post",
        //     url:"./php/register.php",
        //     data:{
        //         fname:fname,
        //         lname:lname,
        //         age:age,
        //         contact:contact
                
        //     },
        //     dataType:"text",    
        //     success:function(response){
              
        //         alert("!!!!  Registered successfully");
        //         window.location="./profile.html";
              
        //         //$('#messagedisplay').text(response);
        //         // $.ajax({
        //         //     method:"post",
        //         //     url:"./php/profile.php",
        //         //     data:$('#vedformid').serialize(),
        //         //     dataType:"text",    
        //         //     success:function(response){
        //         //         alert(response);
            
        //         //     }
        //         // })
    
        //     }
        // })
    })
    $('#logout').click(function(e){
        
      
        // $.ajax({
        //     method:"GET",
        //     url:"./php/login.php",
        //     dataType:"text",
        //     success:function(res){
        //         alert("successfully logged out !");
        //         window.location="./home.html";
        //     }
        // })
    localStorage.clear();
    window.location='./login.html';


    // $.ajax({
    //     method:"post",
    //     url:"./php/register.php",
    //     data:{
    //         fname:fname,
    //         lname:lname,
    //         age:age,
    //         contact:contact
            
    //     },
    //     dataType:"text",    
    //     success:function(response){
          
    //         alert("!!!!  Registered successfully");
    //         window.location="./profile.html";
          
    //         //$('#messagedisplay').text(response);
    //         // $.ajax({
    //         //     method:"post",
    //         //     url:"./php/profile.php",
    //         //     data:$('#vedformid').serialize(),
    //         //     dataType:"text",    
    //         //     success:function(response){
    //         //         alert(response);
        
    //         //     }
    //         // })

    //     }
    // })
})
    });


   
    $.ajax({
        type:"GET",
        url:"./php/profile.php",
        dataType:"html",
        success:function (data){
            // alert("data = "+data)
           var d=JSON.parse(data);
          
           $('#fname').val(d.fname);
           $('#lname').val(d.lname);
           $('#age').val(d.age);
           $('#contact').val(d.contact);
        //    $('#ll').html(`    <div>  <table class="table  table-striped table-hover">
        //     <tbody>
        //         <tr>
        //             <td>First Name</td>
        //             <td><input type="text" class="form-control" name="fname" value="${d.fname}" id="fname" placeholder="Enter your Name"> </td>
        //         </tr>
        //         <tr>
        //             <td>last Name</td>
        //             <td><input type="text" class="form-control" name="lname" id="lname" value="${d.lname}" placeholder="Enter your Email"></td>
        //         </tr>
        //         <tr>
        //             <td>Age</td>
        //             <td><input type="text" class="form-control" name="age" id="age" value="${d.age}" placeholder="Enter Phone Number"></td>
        //         </tr>
        //         <tr>
        //             <td>Contact</td>
        //             <td><input type="text" name="contact" class="form-control" id="contact" value="${d.contact}" placeholder="Enter your DOB"></td>
        //         </tr>
               
                
        //     </tbody>
        // </table></div>`)
        //    $('#fname').text(d['fname']);
        //    $('#lname').text(d['lname']);
        //    $('#age').text(d['age']);
        //    $('#contact').text(d['contact']);
        //    $r='<input type="text" id="va" name="va" >'
        //    $('#ll').text($r);
    
        }
    })    

      
}
else{
    alert("You haven't logged in ! Kindly please login ")
    window.location="./login.html";
}

