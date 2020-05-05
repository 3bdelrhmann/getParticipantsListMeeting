$(document).ready(function(){
    $(function(){
        chrome.storage.sync.get('limit',function(response){
            $('#limit').val(response.limit);
        });

        $('#saveLimit').click(function(){
            var limit = $('#limit').val();
            chrome.storage.sync.set({'limit' : limit},function(){
                close();
            });
        })
        $('#resetTotal').click(function(){
            chrome.storage.sync.set({'total' : 0},function(){
                let notifOptions = {
                    type : 'basic',
                    iconUrl : 'favicon.ico',
                    title : 'Total reset.',
                    message: "Total has been set to zero.",
                }
                chrome.notifications.create('TotalReset',notifOptions);

            });
        })


    });    
});