$(function () {
    $.ajax({
        type: 'get',
        url: '/articles',
        dataType: 'json',
        success: function(data){
            var html = template('indexTpl',{list:data})
            $('#dataList').html(html)
        }
    })
})