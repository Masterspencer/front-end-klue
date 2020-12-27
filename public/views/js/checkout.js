$(document).ready(function(){
    $("#checkout-address").click(function(){
        if($("#checkout-address").is(":checked")){
            //shipping address values == billing address values
            $("#shipping_firstName").val($("#billing_firstName").val());
            $("#shipping_lastName").val($("#billing_lastName").val());
            $("#shipping_addressLine").val($("#billing_addressLine").val());
            $("#shipping_apartmentNumber").val($("#billing_apartmentNumber").val());
            $("#shipping_country").val($("#billing_country").val());
            $("#shipping_state").val($("#billing_state").val());
            $("#shipping_phoneNumber").val($("#billing_phoneNumber").val());
            $("#shipping_zipCode").val($("#billing_zipCode").val());
            let country = $("#country option:selected").val();
            $("#country_billing option[value = " + country + "]").attr("selected", "selected");
        }else{
            //clear uncheck
         $("#shipping_firstName").val("");
        $("#shipping_lastName").val("");
        $("#shipping_addressLine").val("");
        $("#shipping_apartmentNumber").val("");
        $("#shipping_country").val("");
        $("#shipping_state").val("");
        $("#shipping_phoneNumber").val("");
        $("#shipping_zipCode").val("");
        }
    })
});