document.getElementById("demo").addEventListener("click", () => {
    chrome.storage.local.get(["invertEnabled"], (data) => {
        let newState = !data.invertEnabled;
        chrome.storage.local.set({ invertEnabled: newState });

        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            let executeScript = chrome.scripting
                ? chrome.scripting.executeScript // Chrome & Edge
                : browser.tabs.executeScript;   // Firefox fallback

            executeScript({
                target: { tabId: tabs[0].id },
                files: ["content.js"]
            });
        });
    });
});
