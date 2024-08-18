var md = new MobileDetect(window.navigator.userAgent);


if (md.mobile()) {
    console.log("Mobile device detected. Redirecting...");
    document.body.innerHTML = "<h1>Access Denied</h1><p>Sorry, this site is not available on mobile devices.</p>";
    //window.location.href = "https://hor5eman.github.io/access_denied";
} else {
    console.log("Desktop or non-mobile device detected.");
}
