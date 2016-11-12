$(function(){
	$('.content-table a').on('click', function() {
		var dataContent = $(this).data('content');
		$.ajax({
			url: '../lessons/' + dataContent + '/index.html',
			type: 'get',
			dataType: 'html',
			async: false,
			success: function(html) {
				$('section').empty().html(html);
			}
        });
	});
});
