chrome.tabs.getCurrent(function(tab) {
    chrome.pageAction.show(tab.id);
    alert(tab.id);
});