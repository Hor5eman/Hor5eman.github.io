
function isMobileDevice() {
    return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
function blockMobileDevices() {
    if (isMobileDevice()) {
         window.location.href = "https://hor5eman.github.io/posts";
    }
 }
window.onload = blockMobileDevices;
