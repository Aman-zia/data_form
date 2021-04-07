$("input").on('keypress',function(){
    $(".form-error").html("");
      });
 
 $("#sub").click(function () {

 validate();

    }

        );





function validate(){
var name1 = $("#name").val().trim();
var email1 = $("#email").val().trim();

if (name1 == "") {
$("#display_error").html("User name can't be empty");
$("#display_error").css("color", "red");
return false;
}

if ((name1.length <= 2) || (name1.length >= 30)) {
$("#display_error").html("Enter between 3 to 30 characters");
$("#display_error").css("color", "red");
return false;
}

if (email1.trim() == "") {
$("#email_error_message").html("Email cannot be empty");
$("#email_error_message").css("color", "red");
return false;
}
if (email1.indexOf("@") < 0 || email1.indexOf(".") < 0) {
$("#email_error_message").html("write email like 123@gmail.com");
$("#email_error_message").css("color", "red");
return false;
}

}
