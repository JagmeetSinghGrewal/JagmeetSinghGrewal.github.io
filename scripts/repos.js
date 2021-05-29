$(document).ready(function(){
    var username = 'JagmeetSinghGrewal'
    var GIT_URL = 'https://api.github.com/users/'+username+'/repos'; 
    $.ajax({
        url: GIT_URL,
        type:'GET',
        success: function(result){
            for(i = 0; i < result.length; i++){
                //Only displays personal repositories and excludes forked ones
                if(!result[i].fork){
                    $('#repos').append('<span>'+ result[i].name+'</span><br><span>'+ result[i].description+'</span><br>')
                }
            }
        }
    })
})
