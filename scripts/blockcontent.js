  if (self === top) {
    document.body.style.display = 'block';
  } else {
    top.location = self.location;
  }