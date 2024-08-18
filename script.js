var md = new MobileDetect(window.navigator.userAgent);


if (md.mobile()) {
    console.log("Mobile device detected. Redirecting...");
    window.location.href = "https://google.com";
} else {
    console.log("Desktop or non-mobile device detected.");
}
