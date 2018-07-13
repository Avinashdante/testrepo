// nav bar 
$(document).ready(function() {
    $('.fa-bars').hide();
    if ($(window).width() < 425) {
        $('.fa-bars').show();
        $('#nv1').hide();
        $('#nv2').hide();
    }
    $(window).resize(function() {
        if ($(window).width() < 425) {
            $('.fa-bars').show();
            $('#nv1').hide();
            $('#nv2').hide();
            $('.nav-container').css(flex-direction,column);
        }
        else {
            $('.fa-bars').hide();
            $('#nv1').show();
            $('#nv2').show();
        }
    })
    $('.fa-bars').click(function() {
        $('#nv1').toggle([2000]);
        $('#nv2').toggle([2000]);
    })
});
//collapse component 
$(document).ready(function() {
    $('.collapse-content').hide();
});
$('#c1').click(function() {
    $('#cc1').toggle([3000]);
    $('#cc2').hide([3000]);
    $('#cc3').hide([3000]);
});
$('#c2').click(function() {
    $('#cc1').hide([3000]);
    $('#cc2').toggle([3000]);
    $('#cc3').hide([3000]);
});
$('#c3').click(function() {
    $('#cc1').hide([3000]);
    $('#cc2').hide([3000]);
    $('#cc3').toggle([3000]);
});
// modal functionality
$(document).ready(function(){
    $('.modal-container').hide();
    $('#call').click(function() {
       $('.modal-container').fadeIn([5000]);
       $('.modal').fadeIn([5000]);
       $('.modal-title').fadeIn([5000]);
       $('.modal-content').fadeIn([5000]);
       $('.modal-buttons-containe').fadeIn([5000]);
    });
   
});
$('.modal-button').click(function() {
    $('.modal').hide();
    $('.modal-container').fadeOut([5000]);
    
});
$('.fa-times').click(function() {
    $('.modal').hide();
    $('.modal-container').fadeOut([5000]);

});