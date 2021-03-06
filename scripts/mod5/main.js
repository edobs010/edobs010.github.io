// exclude certain dates from date selection
function filterAmanda(date){
	var day = date.getDay();
	return [(day!=4 && day!=0)];
}

function filterAvery(date){
	var day = date.getDay();
	return [(day!=1 && day!=0 && day!=3 && day!=5)];
}

function filterAnthony(date){
	var day = date.getDay();
	return [(day!=0)];
}

function filterAndrew(date){
	var day = date.getDay();
	return [(day!=0 && day!=5)];
}

// validate first name and last name
function validateFirstName(first){
	var firstName = document.getElementById(first);
	var filter = /^[A-Za-z\-\'\ ]+$/; // letters, -, ' only
	if (filter.exec(firstName.value)){
		return true;
	} else{
		return false;
	}
}

function validateLastName(last){
	var lastName = document.getElementById(last);
	var filter = /^[A-Za-z\-\'\ ]+$/; // letters, -, ' only
	if (filter.exec(lastName.value)){
		return true;
	} else{
		return false;
	}
}

// validate email
function validateEmail(email){
	var emailAddress = document.getElementById(email);
	var filter = /^[\w\-]+@[\w\-]+\.\w{2,3}$/;
	if (filter.exec(emailAddress.value)){
		return true;
	} else{
		return false;
	}
}

// validate phone --> allows 5 numbers in last part
function validatePhoneNum(phone){
	var phoneNum = document.getElementById(phone);
	var filter = /^(\d{3})(\-)(\d{3})(\-)(\d{4})$/;
	if (filter.exec(phoneNum.value)){
		return true;
	} else{
		return false;
	}
}

// validate credit card
function validateCreditCard(card){
	var cardNum = document.getElementById(card);
	var filter = /^(\d{4})( )(\d{4})( )(\d{4})( )(\d{4})$/;
	if (filter.exec(cardNum.value)){
		return true;
	} else{
		return false;
	}
}

// validate expiry date
function validateExpDate(date){
	var expDate = document.getElementById(date);
	var filter = /^(\d{2})(\/)(\d{2})$/;
	if (filter.exec(expDate.value)){
		return true;
	} else{
		return false;
	}
}

// validate security code
function validateSecCode(code){
	var cvv = document.getElementById(code);
	var filter = /^(\d{3})$/;
	if (filter.exec(cvv.value)){
		return true;
	} else{
		return false;
	}
}


// start jQuery listening...
$(document).ready(function() {

	// date input
	$("#date").datepicker(
		{
			changeYear: true,
			changeMonth: true,
			dateFormat: 'dd-mm-yy',
			minDate: 1,
			maxDate: '+10M'
		}
	);

	// based off of starter code
	$("#card-num").on("mouseenter", function(){
        $("#card-num").addClass("showInput");
    });

    $("#card-num").on("mouseleave", function(){
        $("#card-num").removeClass("showInput");
    });

    $("#card-num").tooltip({
    	classes: {
            "ui-tooltip": "highlight"
        }
    });

    $("#card-num, #first-name, #last-name, #email, #phone-num, #exp-date, #cvv").mouseenter(function(){
    	$(this).css("background-color","#EAECEF");
    });
    $("#card-num, #first-name, #last-name, #email, #phone-num, #exp-date, #cvv").mouseleave(function(){
    	$(this).css("background-color","white");
    });

    // when "Book Now" is clicked and modal opens
    $(".book-service").click(function(){
    	// set title of modal depending on the service selected
    	var serviceName = $(this).attr("name");
    	$("#serviceBookingTitle").text(serviceName+" Appointment");
   		
   		// depending on service, only allow certain professionals to be selected
   		if (serviceName=="Massage Therapy"){
   			$("#select-pro option[value='Avery']").prop("disabled", false);
   			$("#select-pro option[value='Amanda']").prop("disabled", true);
   			$("#select-pro option[value='Andrew']").prop("disabled", true);
   			$("#select-pro option[value='Anthony']").prop("disabled", true);
   		}
   		else{
   			$("#select-pro option[value='Avery']").prop("disabled", true);
   			$("#select-pro option[value='Amanda']").prop("disabled", false);
   			$("#select-pro option[value='Andrew']").prop("disabled", false);
   			$("#select-pro option[value='Anthony']").prop("disabled", false);
   		}

    });

    // enable date once professional is chosen
    $("#select-pro").change(function(){
    	if ($("#select-pro").val()!="Select"){
    		if ($("#date").attr("disabled")!="disabled"){
    			$("#date").datepicker('setDate',null);
				$("#time").val("Select");
				$("#book-appointment").prop("disabled",true);
			}
    		$("#date").prop("disabled",false);

    		var proName = $("#select-pro").val();
    		if (proName=="Amanda"){
    			$("#date").datepicker("option", "beforeShowDay", filterAmanda);
	    	}else if(proName=="Avery"){
	    		$("#date").datepicker("option", "beforeShowDay", filterAvery);
	    	}else if (proName=="Anthony"){
	    		$("#date").datepicker("option", "beforeShowDay", filterAnthony);
	    	}else if (proName=="Andrew"){
	    		$("#date").datepicker("option", "beforeShowDay", filterAndrew);
	    	}
    	}
    });

    // enable the time once date is chosen
    $("#date").change(function(){
    	if ($("#time").attr("disabled")!="disabled"){
    		$("#time").val("Select");
    		$("#book-appointment").prop("disabled",true);
    	}
	    $("#time").prop("disabled", false);

	    var date = $("#date").datepicker('getDate');
	    var day = date.getDay();
	    if (day == 6){ // if day is Saturday
	   		$("#time option[value='8am']").prop("disabled", true);
	   		$("#time option[value='2pm']").prop("disabled", true);
	   		$("#time option[value='3pm']").prop("disabled", true);
	   	}
    });

    // enable the book button once time is chosen
    $("#time").change(function(){
    	var time = $("#time").val();
    	if (time!="Select"){
    		$("#book-appointment").prop("disabled",false);
    	}
    });


    $("#book-appointment").click(function(){

    	// if validated do this...
    	if (validatePhoneNum("phone-num")&&validateFirstName("first-name")&&validateLastName("last-name")&&validateEmail("email")&&validateCreditCard("card-num")&&validateExpDate("exp-date")&&validateSecCode("cvv")){
    		
    		// $(".modal-title").html("See you soon!");

    		var customerName = $("#first-name").val();
    		var email = $("#email").val();
    		var proName = $("#select-pro").val();
    		var apptType = $("#serviceBookingTitle").text();
    		var apptDate = $("#date").val();
    		var apptTime = $("#time").val();
    		var message = "Thank you "+customerName+"! Your "+apptType+" has been booked with "+proName+" for "+apptDate+" at "+apptTime+". A confirmation e-mail has been sent to "+email+". We look forward to seeing you.";

    		$("#modal2").html(message);
    		$("#modal2").css("display", "block");
    		$("#modal1").css("display","none");

			$("#ModalLabel2").css("display", "block");
    		$("#ModalLabel").css("display","none");


    		$("#book-appointment").css("display", "none");
    		$("#cancel-booking").html("OK");

    	}else{
    		// validate fields
	    	// first and last name are entered
	    	if (!validateFirstName("first-name")){
	    		$("#bad-first-name").show();
	    	}else{
	    		$("#bad-first-name").hide();
	    	}

	    	if (!validateLastName("last-name")){
	    		$("#bad-last-name").show();
	    	}else{
	    		$("#bad-last-name").hide();
	    	}

	    	// email has correct format
	    	if(!validateEmail("email")){
	    		$("#bad-email").show();
	    	}else{
	    		$("#bad-email").hide();
	    	}

	    	// phone number has correct format
	    	if (!validatePhoneNum("phone-num")){
	    		$("#bad-phone").show();
	    	}else{
	    		$("#bad-phone").hide();
	    	}

	    	// date, time, professional must be entered for button to be clickable

	    	// credit card format is correct
			if(!validateCreditCard("card-num")){
				$("#bad-credit-card").show();
			}else{
				$("#bad-credit-card").hide();
			}

			if(!validateExpDate("exp-date")){
				$("#bad-exp-date").show();
			}else{
				$("#bad-exp-date").hide();
			}

			if(!validateSecCode("cvv")){
				$("#bad-cvv").show();
			}else{
				$("#bad-cvv").hide();
			}

    	}

    });

    $('.modal').on('hidden.bs.modal', function(){
    	// reset modal fields
     	$("#first-name").val("");
     	$("#last-name").val("");
     	$("#email").val("");
		$("#phone-num").val("");
		$("#select-pro").prop("selectedIndex",0);
		$("#date").val("");
		$("#date").prop("disabled", true);
		$("#time").prop("selectedIndex",0);
		$("#time").prop("disabled", true);
		$("#card-num").val("");
		$("#exp-date").val("");
		$("#cvv").val("");
		// remove all error messages
		$(".error-msg").css("display", "none");
		// re-disable button
		$("#book-appointment").prop("disabled", true);
		// reset modal body
		$("#modal2").css("display", "none");
    	$("#modal1").css("display","block");
    	// reset footer buttons
    	$("#book-appointment").css("display", "block");
    	$("#cancel-booking").html("Cancel");
    	// reset header text
    	$("#ModalLabel2").css("display", "none");
    	$("#ModalLabel").css("display","block");
	 });

    $(".pro-hours").hover(function(){
    	$(this).css("color", "black");
    	$(this).css("background-color", "rgb(251,251,251, 0.8)");
    }, function(){
    	$(this).css("color", "transparent");
    	$(this).css("background-color", "transparent");
    });


});
