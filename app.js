$("#name").focus()
$("#other-title").hide()

$("#color").hide()
$("#color").append($(document.createElement("option")).text("Please select a T-shirt theme").prop('selected',true))
$cost = $(document.createElement("p"))
$(".activities").append($cost)
$("#paypal").hide()
$("#bitcoin").hide()
var u = $("#uerror")
u.hide()

var e = $("#enotvaild")
e.hide()
var eb = $("#eblank")
eb.hide()
var a = $("#activer")
a.hide()
var pay = $("#payer")
pay.hide()
var c = $("#cc")
c.hide()
var z = $("#ziper")
z.hide()
var cv = $("#cvver")
cv.hide()
cost = 0
const userReg = new RegExp(/^[a-z]*( [a-z]*)?$/, 'gi');
const emailReg = new RegExp(/^\w*(\.\w*)?@\w*(\.[a-z]{1,})$/, 'g');
const creditReg = new RegExp(/^\d{12,15}\d$/, 'g');
const zipReg = new RegExp(/^\d{4}\d$/, 'g');
const cvvReg = new RegExp(/^\d{2}\d$/, 'g');

function usernamevalid(){
return $("#name").val()!=""
}
function activityselect(){
    if(cost>0){
        return true
    }
    return false
}
function payselect(){
if($("#payment option:selected").val()=="select method"){
    return false
}
else{
    return true
}
}

function emailblank(){
    if ($("#mail").val() == ""){
        return false
    }
    return true

}
function emailValid(){
    emailReg.lastIndex=0;
    return emailReg.test($("#mail").val())
}
function creditcarddig(){
    creditReg.lastIndex=0;
    return creditReg.test($("#cc-num").val())
}
function cczip(){
    zipReg.lastIndex=0;
    return zipReg.test($("#zip").val())

}
function cvvcheck(){
    cvvReg.lastIndex=0;
    return cvvReg.test($("#cvv").val())
}


$("#mail").keyup(function(){
    if (!emailblank()){
        eb.show()
    }
    else{
        eb.hide()
    }
    if(emailValid()){
        console.log("good")
        e.hide()
    }
    else{
        console.log("Wrong")
        e.show()
    }
})

$("#title").change(function(){
    if($(this).val()=="other"){
        $("#other-title").show().focus()

    }
})
$("#design").change(function(){

    $("#color").show()
    if($(this).val()=="js puns"){
        $("#color").children('option').each(function(i){
            if (i==1){
                $(this).prop("selected",true)
            }
            if(i<3){
                $(this).show()
            }
        })
    }
    else if($(this).val()=="heart js"){
        $("#color").children('option').each(function(i){
            if(i==3){
                $(this).prop("selected",true)
            }
            if(i>=3 && i<6){
                $(this).show()
            }
        })
    }
})

$("input[type='checkbox']").change(function(){
    cost = 0
    $("input[type='checkbox']").each(function(){
        $(this).prop("disabled",false)
    })
    $("input:checked").each(function(){
        var $this = $(this)
        if($this.attr("data-day-and-time")=="$200"){
            cost += 200
        }
        else{
            cost +=100
        }
    
        $("input[type='checkbox']").each(function(){
            
            if($this.attr("data-day-and-time")== $(this).attr("data-day-and-time")&& $this.attr("name")!=$(this).attr("name")){
                $(this).prop("disabled",true)
                
            }

        })
    })
    $cost.text(`Cost : ${cost}`)
})
$("#payment").change(function(){
    console.log($("#payment option:selected").text())
    if($("#payment option:selected").val()=="Credit Card"){
        $("#credit-card").show()
        $("#paypal").hide()
        $("#bitcoin").hide()

    }
    else if($("#payment option:selected").val()=="PayPal"){
        $("#credit-card").hide()
        $("#paypal").show()
        $("#bitcoin").hide()
    }
    else if($("#payment option:selected").val()=="Bitcoin"){
    $("#credit-card").hide()
    $("#paypal").hide()
    $("#bitcoin").show()
    } 
})
var sub = true

$("button").click(function(ev){
    sub = true
    
    if(!usernamevalid()){
        u.show()
        u.focus()
        sub = false
    }
    else{
        u.hide()
    }
    
    if(!emailblank()){
        eb.show()
        eb.focus()
        sub = false
    }
    else{
        eb.hide()
    }
    if(!emailValid()){
        e.show()
        e.focus()
        sub = false
    }
    else{
        e.hide()
    }
    if(!activityselect()){
        a.show()
        a.focus()
        sub = false
    }
    else{
        a.hide()
    }
    if(!creditcarddig() && $("#payment option:selected").val()=="Credit Card"){
        c.show()
        c.focus()
        sub = false
    }
    else{
        e.hide()
    }
    if(!cczip() && $("#payment option:selected").val()=="Credit Card"){
        z.show()
        z.focus()
        sub =  false
    }
    else{
        z.hide()
    }
    if(!cvvcheck() && $("#payment option:selected").val()=="Credit Card"){
        cv.show()
        cv.focus()
        sub = false
    }
    else{
        cv.hide()
    }
    if(!payselect()){
        pay.show()
        pay.focus()
        sub = false
    }
    else{
        pay.hide()
    }
    if(!sub){
    ev.preventDefault()
    }
    else{
        alert("Congrats No errors and submitted")
    }
})