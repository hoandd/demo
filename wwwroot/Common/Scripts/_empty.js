/* An empty javascript file.
 * Used in ScriptPaths.JQuery_Validation_Localization.*/
$(document).ready(function () {

    $('.add-to-cart').on('click', function () {
        debugger
        var getItemId = parseInt($(this).prop('id'));
        var $spanItemCount = $('.cart-contents span');
        $spanItemCount.html(getItemId);
        //$.ajax({
        //    type: 'POST',
        //    contentType: 'application/json; charset=utf-8',
        //    url: 'Home/AddCart',
        //    data: "{ 'itemId':' " + getItemId + "' }",
        //    success: function (data) {
        //        $('#spnCart').html(data)
        //    },
        //    error: function (data) {
        //        alert(data);
        //    }
        //});
    });

});