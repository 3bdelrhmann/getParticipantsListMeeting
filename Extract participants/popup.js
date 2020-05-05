document.getElementById("copyAttendees").addEventListener("click", function(){
    chrome.tabs.query({active:true, currentWindow:true},function(tabs){
        chrome.tabs.sendMessage(tabs[0].id,{todo: "copyAttendees"}); 
    });
    document.getElementById("copyAttendees").innerHTML = 'Copied!'
});
  