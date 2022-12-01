$(function(){
    $('.project_number').counterUp({
        delay: 10,
        time: 2000
    })

    $('.skills').waypoint(function(){
        $('.progress .progress-bar').each(function(){
            $(this).css('width', $(this).attr("aria-valuenow") + '%')
        });
    }, {
        offset: '100%'
    });
})