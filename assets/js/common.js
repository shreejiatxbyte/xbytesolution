function include(file) {   
  var script  = document.createElement('script'); 
  script.src  = file; 
  script.type = 'text/javascript'; 
  script.defer = true;   
  document.getElementsByTagName('body').item(0).appendChild(script);   
} 

include('https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit');
var onloadCallback = function() {
if ( $('#html_element').length ) {
                  grecaptcha.render('html_element', {'sitekey' : '6LcCm1MdAAAAADQuNkIChegYQA6qx11tS5E551mM'
            });
    }

    if ( $('#html_element_2').length ) {
                  grecaptcha.render('html_element_2', {'sitekey' : '6LcCm1MdAAAAADQuNkIChegYQA6qx11tS5E551mM'
            });
    }

    if ( $('#html_element_3').length ) {
                  grecaptcha.render('html_element_3', {'sitekey' : '6LcCm1MdAAAAADQuNkIChegYQA6qx11tS5E551mM'
            });
    }

    if ( $('#html_element_4').length ) {
                  grecaptcha.render('html_element_4', {'sitekey' : '6LcCm1MdAAAAADQuNkIChegYQA6qx11tS5E551mM'
            });
    }
};



var BASEURL = "https://www.xbytesolutions.com/";
var currentUrl = window.location.href;

function mailValidation(inputText) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (reg.test(inputText) == false) {
        return false;
    }
    return true;
}
jQuery(document).on("click", "#id-contactus-btn-profitability", function() {
    var that = jQuery(this);
    var errorCount = 0;
    $('#email-profitability-error').html('');
    var email = jQuery("#email-profitability").val();
    if (email == "") {
        $('#email-profitability-error').html('Email is required!');
        errorCount++;
    }
    if (!mailValidation(email)) {
        $('#email-profitability-error').html('Please enter valid email!');
        errorCount++;
    }
    if (errorCount == 0) {
        var email = jQuery("#email-profitability").val();
        var formValue = new FormData();
        formValue.append("email", email);
        formValue.append("currentUrl", currentUrl);
        jQuery.ajax({
            headers: {
                "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content")
            },
            type: "POST",
            url: BASEURL + "sendcontactinqemail_profitability",
            data: formValue,
            processData: false,
            contentType: false,
            success: function(data) {
                data = jQuery.trim(data);
                if (data == 1) {
                    jQuery("#email-profitability").val("");
                    window.location.href = BASEURL + "thankyou.php";
                } else if (data == 0) {
                    iziToast.error({
                        title: "",
                        message: "Please pass all parameters",
                        position: "topRight"
                    });
                } else {
                    iziToast.error({
                        title: "",
                        message: "Something went wrong please try again",
                        position: "topRight"
                    });
                }
            },
            error: function(data) {
                iziToast.error({
                    title: "",
                    message: "Something went wrong please try again",
                    position: "topRight"
                });
            },
        });
    }
});
jQuery(document).on("click", "#id-contactus-btn", function() {
    var that = jQuery(this);
    var errorCount = 0;
    jQuery("#contactus-section .error-msg").remove();
    jQuery("#contactus-section").find(".req").each(function() {
        var that = jQuery(this);
        var inputVal = that.val();
        var inputId = that.attr("id");
        inputVal = jQuery.trim(inputVal);
        that.removeClass("field-error");
        if (inputVal == "") {
            var dataName = that.attr("name");
            that.after('<div class="error-msg"><span class="color-red font-size-12">' + dataName + " is required</span></div>");
            that.addClass("field-error");
            errorCount++;
        } else if (inputId == "c-email") {
            if (!mailValidation(inputVal)) {
                that.after('<div class="error-msg"><span class="color-red font-size-12">Please enter valid email!</span></div>');
                that.addClass("field-error");
                errorCount++;
            }
        }
    });
       /* console.log(grecaptcha);
    var gCaptchaResponse = grecaptcha.getResponse(4);*/
       // alert(gCaptchaResponse);
     /*if(gCaptchaResponse == ""){
         $('#html_element_4').after('<div class="error-msg"><span class="color-red font-size-12">Please verify I am not robot</span></div>');
         $('#html_element_4').addClass("field-error");
        errorCount++;
     }*/

    if (errorCount == 0) {
        var name = jQuery("#c-name").val();
        var email = jQuery("#c-email").val();
        var number = jQuery("#c-number").val();
        var topic = jQuery("#c-topic").val();
        var skype = jQuery("#c-skype").val();
        var description = jQuery("#c-description").val();
        var formValue = new FormData();
        formValue.append("name", name);
        formValue.append("email", email);
        formValue.append("number", number);
        formValue.append("topic", topic);
        formValue.append("skype", skype);
        formValue.append("description", description);
        formValue.append("currentUrl", currentUrl);
        jQuery.ajax({
            headers: {
                "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content")
            },
            type: "POST",
            url: BASEURL + "sendcontactinqemail",
            data: formValue,
            processData: false,
            contentType: false,
            success: function(data) {
                data = jQuery.trim(data);
                if (data == 1) {
                    jQuery("#c-name, #c-email, #c-number, #c-topic, #c-skype, #c-description").val("");
                    window.location.href = BASEURL + "thankyou.php";
                } else if (data == 0) {
                    iziToast.error({
                        title: "",
                        message: "Please pass all parameters",
                        position: "topRight"
                    });
                } else {
                    iziToast.error({
                        title: "",
                        message: "Something went wrong please try again",
                        position: "topRight"
                    });
                }
            },
            error: function(data) {
                iziToast.error({
                    title: "",
                    message: "Something went wrong please try again",
                    position: "topRight"
                });
            },
        });
    }
});
jQuery(document).on("click", "#id-getstarted-btn", function() {
    var that = jQuery(this);
    var errorCount = 0;
    jQuery("#getstarted-section .error-msg").remove();
    jQuery("#getstarted-section").find(".req").each(function() {
        var that = jQuery(this);
        var inputVal = that.val();
        var inputId = that.attr("id");
        inputVal = jQuery.trim(inputVal);
        that.removeClass("field-error");
        if (inputVal == "") {
            var dataName = that.attr("name");
            that.after('<div class="error-msg"><span class="color-red font-size-12">' + dataName + " is required</span></div>");
            that.addClass("field-error");
            errorCount++;
        } else if (inputId == "c-email1") {
            if (!mailValidation(inputVal)) {
                that.after('<div class="error-msg"><span class="color-red font-size-12">Please enter valid email!</span></div>');
                that.addClass("field-error");
                errorCount++;
            }
        }
    });

    var gCaptchaResponse = grecaptcha.getResponse(0);
     if(gCaptchaResponse == ""){
         $('#html_element').after('<div class="error-msg"><span class="color-red font-size-12">Please verify I am not robot</span></div>');
        errorCount++;
     }

    if (errorCount == 0) {
        var name = jQuery("#c-name1").val();
        var email = jQuery("#c-email1").val();
        var number = jQuery("#c-number1").val();
        var topic = jQuery("#c-topic1").val();
        var skype = jQuery("#c-skype1").val();
        console.log(skype);
        var description = jQuery("#c-description1").val();
        var formValue = new FormData();
        formValue.append("name", name);
        formValue.append("email", email);
        formValue.append("number", number);
        formValue.append("topic", topic);
        formValue.append("skype", skype);
        formValue.append("description", description);
        formValue.append("currentUrl", currentUrl);
        console.log(formValue);
        jQuery.ajax({
            headers: {
                "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content")
            },
            type: "POST",
            url: BASEURL + "sendcontactinqemail",
            data: formValue,
            processData: false,
            contentType: false,
            success: function(data) {
                data = jQuery.trim(data);
                if (data == 1) {
                    jQuery("#c-name1, #c-email1, #c-number1, #c-topic1, #c-skype1, #c-description1").val("");
                    window.location.href = BASEURL + "thankyou.php";
                } else if (data == 0) {
                    iziToast.error({
                        title: "",
                        message: "Please pass all parameters",
                        position: "topRight"
                    });
                } else {
                    iziToast.error({
                        title: "",
                        message: "Something went wrong please try again",
                        position: "topRight"
                    });
                }
            },
            error: function(data) {
                iziToast.error({
                    title: "",
                    message: "Something went wrong please try again",
                    position: "topRight"
                });
            },
        });
    }
});
/*carrer Script Start*/
jQuery(document).on("click", "#career-apply", function() {
    var that = jQuery(this);
    var errorCount = 0;
    jQuery('#Fileerror').html('');
    jQuery("#career-form .error-msg").remove();
    jQuery("#career-form").find(".req").each(function() {
        var that = jQuery(this);
        var inputVal = that.val();
        var inputId = that.attr("id");
        inputVal = jQuery.trim(inputVal);
        that.removeClass("field-error");
        if (inputVal == "") {
            var dataName = that.attr("name");
            that.after('<div class="error-msg"><span class="color-red font-size-12">' + dataName + " is required</span></div>");
            that.addClass("field-error");
            errorCount++;
        } else if (inputId == "career-email-address") {
            if (!mailValidation(inputVal)) {
                that.after('<div class="error-msg"><span class="color-red font-size-12">Please enter valid email!</span></div>');
                that.addClass("field-error");
                errorCount++;
            }
        }
    });
    var formValue = new FormData();
    var a  = 0;
                var fileInput = document.getElementById('CVfile');

                  var totalfiles = document.getElementById('CVfile').files.length;
                  if(totalfiles == 0){
                    jQuery('#Fileerror').html('Please Attach Resume');
                errorCount++;
                }
                    for (var index = 0; index < totalfiles; index++) {
                         var file = fileInput.files[index];
                         var ext = fileInput.files[index].name.split('.').pop(); 
                         var ext = ext.toLowerCase();

                         if(jQuery.inArray(ext, ['txt','doc','docx','ppt','jpeg','jpg','png','gif','pdf'])) {
                                console.log("is in array");
                                 a += parseInt(fileInput.files[index].size);
                            if(file !== undefined)
                            {
                              formValue.append('cvfile',file);
                            }
                    }else{
                         $('#Fileerror').html('Invalid File '+fileInput.files[index].name);
                          errorCount++;
                    }

                    /*if(!isInArray(ext,['txt','doc','docx','ppt','jpeg','jpg','png','gif','pdf']))  {
                                     $('#Fileerror').html('Invalid File '+fileInput.files[index].name);
                                    errorCount++;
                           }else{
                            a += parseInt(fileInput.files[index].size);
                            if(file !== undefined)
                            {
                              formValue.append('cvfile',file);
                            }
                       }*/
                   }
            if(a > 25000000){
                jQuery('#Fileerror').html('File too large. File must be less than 25MB');
                errorCount++;
               }

    if (errorCount == 0) {
        var name = jQuery("#career-name").val();
        var email = jQuery("#career-email-address").val();
        var number = jQuery("#career-number").val();
        var position = jQuery("#career-position").val();
        var description = jQuery("#career-description").val();
        
        formValue.append("name", name);
        formValue.append("email", email);
        formValue.append("number", number);
        formValue.append("position", position);
        formValue.append("description", description);
        console.log(formValue);
        jQuery.ajax({
            headers: {
                "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content")
            },
            type: "POST",
            url: BASEURL + "sendcareeremail",
            data: formValue,
            processData: false,
            contentType: false,
            success: function(data) {
                data = jQuery.trim(data);
                if (data == 1) {
                    jQuery("#career-name, #career-email-address, #career-number, #career-position, #career-description").val("");
                    window.location.href = BASEURL + "thankyou.php";
                } else if (data == 0) {
                    iziToast.error({
                        title: "",
                        message: "Please pass all parameters",
                        position: "topRight"
                    });
                } else {
                    iziToast.error({
                        title: "",
                        message: "Something went wrong please try again",
                        position: "topRight"
                    });
                }
            },
            error: function(data) {
                iziToast.error({
                    title: "",
                    message: "Something went wrong please try again",
                    position: "topRight"
                });
            },
        });
    }
});
/*carrer Script End*/

jQuery(document).on("click", "#id-getstarted-btn-two", function() {
    var that = jQuery(this);
    var errorCount = 0;
    jQuery("#getstarted-section-two .error-msg").remove();
    jQuery("#getstarted-section-two").find(".req").each(function() {
        var that = jQuery(this);
        var inputVal = that.val();
        var inputId = that.attr("id");
        inputVal = jQuery.trim(inputVal);
        that.removeClass("field-error");
        if (inputVal == "") {
            var dataName = that.attr("name");
            that.after('<div class="error-msg"><span class="color-red font-size-12">' + dataName + " is required</span></div>");
            that.addClass("field-error");
            errorCount++;
        } else if (inputId == "c-email1") {
            if (!mailValidation(inputVal)) {
                that.after('<div class="error-msg"><span class="color-red font-size-12">Please enter valid email!</span></div>');
                that.addClass("field-error");
                errorCount++;
            }
        }
    });

     var gCaptchaResponse = grecaptcha.getResponse(1);
     if(gCaptchaResponse == ""){
         $('#html_element_2').after('<div class="error-msg"><span class="color-red font-size-12">Please verify I am not robot</span></div>');
        errorCount++;
     }

    if (errorCount == 0) {
        var name = jQuery("#c-name1-two").val();
        var email = jQuery("#c-email1-two").val();
        var number = jQuery("#c-number1-two").val();
        var topic = jQuery("#c-topic1-two").val();
        var skype = jQuery("#c-skype1-two").val();
        console.log(skype);
        var description = jQuery("#c-description1-two").val();
        var formValue = new FormData();
        formValue.append("name", name);
        formValue.append("email", email);
        formValue.append("number", number);
        formValue.append("topic", topic);
        formValue.append("skype", skype);
        formValue.append("description", description);
        formValue.append("currentUrl", currentUrl);
        console.log(formValue);
        jQuery.ajax({
            headers: {
                "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content")
            },
            type: "POST",
            url: BASEURL + "sendcontactinqemail",
            data: formValue,
            processData: false,
            contentType: false,
            success: function(data) {
                data = jQuery.trim(data);
                if (data == 1) {
                    jQuery("#c-name1-two, #c-email1-two, #c-number1-two, #c-topic1-two, #c-skype1-two, #c-description1-two").val("");
                    window.location.href = BASEURL + "thankyou.php";
                } else if (data == 0) {
                    iziToast.error({
                        title: "",
                        message: "Please pass all parameters",
                        position: "topRight"
                    });
                } else {
                    iziToast.error({
                        title: "",
                        message: "Something went wrong please try again",
                        position: "topRight"
                    });
                }
            },
            error: function(data) {
                iziToast.error({
                    title: "",
                    message: "Something went wrong please try again",
                    position: "topRight"
                });
            },
        });
    }
});
jQuery(document).on("click", "#id-getstarted-btn-three", function() {
    var that = jQuery(this);
    var errorCount = 0;
    jQuery("#getstarted-section-three .error-msg").remove();
    jQuery("#getstarted-section-three").find(".req").each(function() {
        var that = jQuery(this);
        var inputVal = that.val();
        var inputId = that.attr("id");
        inputVal = jQuery.trim(inputVal);
        that.removeClass("field-error");
        if (inputVal == "") {
            var dataName = that.attr("name");
            that.after('<div class="error-msg"><span class="color-red font-size-12">' + dataName + " is required</span></div>");
            that.addClass("field-error");
            errorCount++;
        } else if (inputId == "c-email1") {
            if (!mailValidation(inputVal)) {
                that.after('<div class="error-msg"><span class="color-red font-size-12">Please enter valid email!</span></div>');
                that.addClass("field-error");
                errorCount++;
            }
        }
    });

     var gCaptchaResponse = grecaptcha.getResponse(2);
     if(gCaptchaResponse == ""){
         $('#html_element_3').after('<div class="error-msg"><span class="color-red font-size-12">Please verify I am not robot</span></div>');
        errorCount++;
     }

    if (errorCount == 0) {
        var name = jQuery("#c-name1-three").val();
        var email = jQuery("#c-email1-three").val();
        var number = jQuery("#c-number1-three").val();
        var topic = jQuery("#c-topic1-three").val();
        var skype = jQuery("#c-skype1-three").val();
        console.log(skype);
        var description = jQuery("#c-description1-three").val();
        var formValue = new FormData();
        formValue.append("name", name);
        formValue.append("email", email);
        formValue.append("number", number);
        formValue.append("topic", topic);
        formValue.append("skype", skype);
        formValue.append("description", description);
        formValue.append("currentUrl", currentUrl);
        console.log(formValue);
        jQuery.ajax({
            headers: {
                "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content")
            },
            type: "POST",
            url: BASEURL + "sendcontactinqemail",
            data: formValue,
            processData: false,
            contentType: false,
            success: function(data) {
                data = jQuery.trim(data);
                if (data == 1) {
                    jQuery("#c-name1-three, #c-email1-three, #c-number1-three, #c-topic1-three, #c-skype1-three, #c-description1-three").val("");
                    window.location.href = BASEURL + "thankyou.php";
                } else if (data == 0) {
                    iziToast.error({
                        title: "",
                        message: "Please pass all parameters",
                        position: "topRight"
                    });
                } else {
                    iziToast.error({
                        title: "",
                        message: "Something went wrong please try again",
                        position: "topRight"
                    });
                }
            },
            error: function(data) {
                iziToast.error({
                    title: "",
                    message: "Something went wrong please try again",
                    position: "topRight"
                });
            },
        });
    }
});
jQuery(document).on("click", "#id-subscribe-mail-btn", function() {
    var that = jQuery(this);
    var errorCount = 0;
    jQuery("#subscribe-mail-form .error-msg").remove();
    jQuery("#subscribe-mail-form").find(".req").each(function() {
        var that = jQuery(this);
        var inputVal = that.val();
        var inputId = that.attr("id");
        inputVal = jQuery.trim(inputVal);
        that.removeClass("field-error");
        if (inputVal == "") {
            var dataName = that.attr("name");
            that.after('<div class="error-msg"><span class="color-red font-size-12">' + dataName + " is required</span></div>");
            that.addClass("field-error");
            errorCount++;
        } else if (inputId == "c-email1") {
            if (!mailValidation(inputVal)) {
                that.after('<div class="error-msg"><span class="color-red font-size-12">Please enter valid email!</span></div>');
                that.addClass("field-error");
                errorCount++;
            }
        }
    });
    if (errorCount == 0) {
        var email = jQuery("#sub-email").val();
        var formValue = new FormData();
        formValue.append("email", email);
        formValue.append("currentUrl", currentUrl);
        console.log(formValue);
        jQuery.ajax({
            headers: {
                "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content")
            },
            type: "POST",
            url: BASEURL + "mailsubscription",
            data: formValue,
            processData: false,
            contentType: false,
            success: function(data) {
                data = jQuery.trim(data);
                if (data == 1) {
                    jQuery("#sub-email").val("");
                    window.location.href = BASEURL + "thankyou.php";
                } else if (data == 0) {
                    iziToast.error({
                        title: "",
                        message: "Please pass all parameters",
                        position: "topRight"
                    });
                } else {
                    iziToast.error({
                        title: "",
                        message: "Something went wrong please try again",
                        position: "topRight"
                    });
                }
            },
            error: function(data) {
                iziToast.error({
                    title: "",
                    message: "Something went wrong please try again",
                    position: "topRight"
                });
            },
        });
    }
});
jQuery(document).ready(function(){
   setTimeout(function() {
        var lastvistedpage = jQuery("#lastvistedpage").val();
        var page = jQuery("#page").val();
        var isbot = jQuery("#isbot").val();

        var formValue = new FormData();
        formValue.append("lastvistedpage", lastvistedpage);
        formValue.append("webpage", page);
        formValue.append("isbot", isbot);
        console.log(formValue);

        jQuery.ajax({
            headers: {
                "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content")
            },
            type: "POST",
            url: BASEURL + "track",
            data: formValue,
            processData: false,
            contentType: false,
            success: function(data) {

            },
            error: function(data) {
                
            },
        });
}, 2000);
});
var getHeaderPosition = jQuery(".navbar").offset().top;
window.onscroll = function(e) {
    var topYscroll = window.scrollY;
    console.log("topYscroll---", topYscroll);
    console.log("getHeaderPosition---", getHeaderPosition);
    if (topYscroll >= getHeaderPosition) {
        jQuery(".navbar").addClass("sticky-header");
    } else {
        jQuery(".navbar").removeClass("sticky-header");
    }
};