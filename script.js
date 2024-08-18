
function isMobileDevice() {
    return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
function blockMobileDevices() {
    if (isMobileDevice()) {
        document.body.innerHTML = "<h1>Access Denied</h1><p>It looks like you are using a mobile device. Please switch to a desktop device. I'll try to fix it as soon as possible! :D - (Skill issue I dont know how to code)</p>";
    }
}
window.onload = blockMobileDevices;
