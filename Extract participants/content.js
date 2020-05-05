chrome.runtime.sendMessage({todo:"showPageAction"});
function copyStringToClipboard (str) {
    var el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style = {position: 'absolute', left: '-9999px'};
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
 }
chrome.runtime.onMessage.addListener(function(request,sender,senderResponse){
    if(request.todo == 'copyAttendees'){
        var all = ""
        let all_participants = document.querySelectorAll('accordion-section[sid="1"] ul > li > .participantInfo .ts-user-name');
        if(all_participants.length == 0){
            all = '- Error occured - \n 1-Check you\'re opened the meeting \n 2 - Check you are open participants tab \n 3-should be an organizer of meeting to copy participants  '
        }
        console.log(all_participants);

        for (let index = 0; index < all_participants.length; index++) {
            all += all_participants[index].textContent + "\n";
        }
        copyStringToClipboard(all);
    }
});
