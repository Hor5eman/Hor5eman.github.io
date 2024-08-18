var md = new MobileDetect(window.navigator.userAgent);


if (md.mobile()) {
    console.log("Mobile device detected. Redirecting...");
    window.location.href = "https://hor5eman.github.io/access_forbidden";
} else {
    console.log("Desktop or non-mobile device detected.");
}
