function changeImage(filename) {
    let img = document.querySelector('#big-img');
    img.setAttribute('src', filename);
  }
  function changelarge() {
    document.getElementById('item-price').innerHTML = '€42.00';
    document.getElementById('item-code').innerHTML = 'PNL2PN';
  }
  function changemedium() {
    document.getElementById('item-price').innerHTML = '€28.00';
    document.getElementById('item-code').innerHTML = 'PNM3PN';
  }
  function changesmall() {
    document.getElementById('item-price').innerHTML = '€14.50';
    document.getElementById('item-code').innerHTML = 'PNS3PN';
  }
  function changeaddtowishlist() {
    document.getElementById('Added-to-wishlist').innerHTML = 'Added-to-wishlist';
    document.getElementById('Added-to-wishlist').style.paddingLeft = 30 + 'px';
    document.getElementById('Added-to-wishlist').style.paddingRight = 30 + 'px';
  }