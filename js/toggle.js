jQuery(document).ready(function(){
    jQuery(".div").hide();
    jQuery('.toggle').click(function(){
        //jQuery(".div").hide();
        jQuery("#"+$(this).data('target')).slideToggle();
    });
});