document.addEventListener('DOMContentLoaded', function() {
    // Get query parameters from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const udid = urlParams.get('UDID');
    const deviceProduct = urlParams.get('DEVICE_PRODUCT');
    const deviceVersion = urlParams.get('DEVICE_VERSION');
    const deviceName = urlParams.get('DEVICE_NAME');

    // Check if the elements exist and then insert values
    const udidElement = document.getElementById('udid');
    const deviceProductElement = document.getElementById('device-product');
    const deviceVersionElement = document.getElementById('device-version');
    const deviceNameElement = document.getElementById('device-name');
    const emailLink = document.getElementById('email-link');

    if (udidElement) {
        udidElement.textContent = udid;
    }
    if (deviceProductElement) {
        deviceProductElement.textContent = deviceProduct;
    }
    if (deviceVersionElement) {
        deviceVersionElement.textContent = deviceVersion;
    }
    if (deviceNameElement) {
        deviceNameElement.textContent = deviceName;
    }

    // Construct the mailto link with proper URL encoding for special characters
    if (emailLink) {
        // Create the subject and body strings
        const subject = "This is my UDID from iOS device";
        const body = `Hello%0D%0AThis is my UDID: ${encodeURIComponent(udid)}%0DDevice Product: ${encodeURIComponent(deviceProduct)}%0DDevice Version: ${encodeURIComponent(deviceVersion)}%0DDevice Name: ${encodeURIComponent(deviceName)}`;
        
        emailLink.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${body}`;
    }
});
