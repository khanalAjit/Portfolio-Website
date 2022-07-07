
    
    // creating a function 
    function validate1(){
        var fullname = document.forms["messageForm"]["Name"].value;
        var email = document.forms["messageForm"]["Email"].value;
        var Number = document.forms["messageForm"]["Phone"].value;      //declaring variable
        var message = document.forms["messageForm"]["Message"].value;

        if(fullname == "" || email == "" || Number == "" || message == ""){     // setting condition
            alert("Errot : Fill out the form properly before sending.")         //display alert if the condition is true
        }
        else{
            alert("Success : Thank you for your resopnse, excited to talk with you. I will contact you ASAP")  //display alert if the condition is false 
        }
    }

    //creating a function
    function check(){
        var FULLNAME = document.forms["messageForm"]["NAME"].value;
        var EMAIL = document.forms["messageForm"]["EMAIL"].value;               //declaring variable
        var MESSAGE = document.forms["messageForm"]["MESSAGE"].value;

        if(FULLNAME == "" || EMAIL == "" || MESSAGE == ""){             // setting condition
            alert("Error : You cannot submit empty message")                //display alert if the condition is true
        }
        else{
            alert("Success : Your message is received thankyou.")   //display alert if the condition is false
        }
    }
