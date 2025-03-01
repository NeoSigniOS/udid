function getParameterByName(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, '\\$&');
  const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
document.addEventListener('DOMContentLoaded', function() {
  const udid = getParameterByName('UDID');
  const deviceProduct = getParameterByName('DEVICE_PRODUCT');
  const deviceVersion = getParameterByName('DEVICE_VERSION');
  document.getElementById('udid').innerText = udid ? udid : 'No UDID found in the URL';
  document.getElementById('deviceProduct').innerText = deviceProduct ? deviceProduct : 'No device product found';
  document.getElementById('deviceVersion').innerText = deviceVersion ? deviceVersion : 'No device version found';
  const copyButtons = document.querySelectorAll('.copyButton');
  copyButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      const targetId = this.getAttribute('data-target');
      const textToCopy = document.getElementById(targetId).innerText;
      if (!textToCopy) return;
      navigator.clipboard.writeText(textToCopy).then(function() {
        const originalText = button.innerText;
        button.innerText = 'Copied!';
        setTimeout(function() {
          button.innerText = originalText;
        }, 2000);
      }).catch(function(err) {
        console.error('Failed to copy:', err);
      });
    });
  });
  window.history.replaceState({}, document.title, window.location.pathname);
});