/*-------------------- switcher --------------------*/
ball.addEventListener("click", function() {

  var theme = document.getElementById('theme');
  var ball = document.getElementById('ball');

  theme.classList.toggle('dark');
  theme.classList.toggle('light');
  ball.classList.toggle('slide');
});
