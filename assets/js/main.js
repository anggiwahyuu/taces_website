$('.btn-timeline').click(function () {
    $('.btn-timeline').removeClass('btn-timeline-active');
    $(this).addClass('btn-timeline-active');

    var timelineID = $(this).attr('id').replace('btn-', '');

    $('.timeline-group').removeClass("show-timeline");
    $('#timeline-' + timelineID).addClass('show-timeline');
});

$(".competition-card").click(function () {
    var competitionID = $(this).attr('id').replace('toggle-', '');
    $('#modal-' + competitionID).addClass('modal-show');
});

$(".modal-competition-container").click(function () {
    $(this).removeClass('modal-show');
});