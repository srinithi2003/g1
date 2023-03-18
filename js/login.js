
//alert(localStorage.getItem("log"));
var s=localStorage.getItem("email");
var l=localStorage.getItem("log");
// alert(s);


if((l!=1 && s!=null) || (l!='undefined' ||s!='undefined') ){
$(document).ready(function (e){
    $('#searchdata').click(function(e){
        e.preventDefault();


    var email=$('input[name=email]').val();
    var pass=$('input[name=pass]').val();
    if(email=="" || pass==""){
        alert("Enter email and password !");
        return;
    }
   //alert(pass);

    $.ajax({
        type:"POST",
        url:"./php/login.php",
        data:{
            "search_post_btn":1,
            "email":email,
            "pass":pass
        },
        dataType:"text",
        success:function (row){
            if(row.includes('no user')){
                alert("invalid login credentials !");
            }
            else{
                localStorage.setItem("log",1);
                localStorage.setItem("email",email);
                alert("logged in succesfully !");
                window.location="./profile.html";
            }
            //     if(row=='noo'){
            //     alert("no usersss");
            // }
            // else{
            //     alert("presetn");
            // }
        //     var t=row;
        //     alert(t);
        //    alert(row=="");
            // if(row=='data present'){
            //     alert("invalid ");
            // }
            // else{
            //     alert("logged in ");
            //     window.location="./profile.html";
            // }
            // alert("Logged in successfully");
            // window.location="./profile.html";
           // localStorage.setItem("email",email);
//             // $val=row.split('|');
//             // alert($val);
//             // alert("logged in successfully !");
           
//             // localStorage.setItem('reg_id',$val[0]);
//             // localStorage.setItem('name',$val[1]);
//             // localStorage.setItem('email',$val[2]);
//             // localStorage.setItem('pass',$val[3]);
//             // localStorage.setItem('age',null);
//             // localStorage.setItem('contact',null);
            



//             // var reg_id=localStorage.getItem("reg_id");
//             // var name=localStorage.getItem("name");
           
//             // var mai=localStorage.getItem("ma");
//             // var age=localStorage.getItem("age");
//             // var contact=localStorage.getItem("contact");
//             // var login_status=localStorage.getItem("login_status");
       
//         //     localStorage.setItem("t","ssc");

//         //    alert("ds"+reg_id);
//             // $("#dis").html(response);
//             // if (localStorage)  
//             // {  
//             //     var user_ = {};  
//             //     user_.name = $("#txtName").val();  
//             //     user_.age = $("#txtAge").val();  
//             //     user_.contact = $("#txtSalary").val();  
                  
//             //     varItemId = "Emp" + user_.Name;  
//             //     localStorage.setItem(ItemId, JSON.stringify(user_));  
//             // }  
//             // else  
//             // {  
//             //     alert("OOPS! Your Browser Not Supporting LocalStorage Please Update It!")  
//             // } 

//            // window.location.href = "./profile.html";
         }
    })
})
})

}
// else if(s==null){
//     alert("You haven't registered ! click ok to register");
//     window.location="./register.html";
// }
else if(l==1){
    alert("already logged in !");
    
    window.location="./profile.html";
}
else{
    
}


















// $(document).ready(function (e){
//     $('#searchdata').click(function(e){
//         e.preventDefault();


//     var mail=$('input[name=mail]').val();
//     var pass=$('input[name=pass]').val();
//     //alert(mail);

//     $.ajax({
//         type:"POST",
//         url:"./php/login.php",
//         data:{
//             "search_post_btn":1,
//             "mail":mail,
//             "pass":pass
//         },
//         dataType:"text",
//         success:function (response){
//             alert(response);
//             alert("logged in successfully !");
//             var h=localStorage.getItem("age");
//             alert(h);
//             // if (localStorage)  
//             // {  
//             //     var user_ = {};  
//             //     user_.name = $("#txtName").val();  
//             //     user_.age = $("#txtAge").val();  
//             //     user_.contact = $("#txtSalary").val();  
                  
//             //     varItemId = "Emp" + user_.Name;  
//             //     localStorage.setItem(ItemId, JSON.stringify(user_));  
//             // }  
//             // else  
//             // {  
//             //     alert("OOPS! Your Browser Not Supporting LocalStorage Please Update It!")  
//             // } 

//            // window.location.href = "./profile.html";
//         }
//     })
// })
// })



