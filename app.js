/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
try {
  particlesJS.load('particles-js', 'particlesjs-config2.json', function() {
  console.log('callback - particles.js config loaded');
});
} catch (error) {
  console.warn('callback - particles.js config cant loaded!');
}

try {
  particlesJS.load('particles-js-background', 'particlesjs-config-background.json', function() {
  console.log('callback - particles.js-background config loaded');
});
} catch (error) {
  console.warn('callback - particles.js-background config cant loaded!');
  
}

try {
  particlesJS.load('particles-js-background-2', 'particlesjs-config-background.json', function() {
  console.log('callback - particles.js-background-2 config loaded');
});
} catch (error) {
  console.warn('callback - particles.js-background-2 config cant loaded!');
  
}