document.body.addEventListener('DOMSubtreeModified', function () {
    document.title = 'DOM Changed at ' + new Date();
  }, false);