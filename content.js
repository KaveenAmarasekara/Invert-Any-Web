chrome.storage.local.get(["invertEnabled"], (data) => {
    if (data.invertEnabled) {
        document.documentElement.style.filter = "invert(1) hue-rotate(180deg)";
    } else {
        document.documentElement.style.filter = "";
    }
});
