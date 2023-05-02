let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


function initMap() {
  var myMapCenter = {lat: 56.465045379634056,  lng: -2.8645530290416827};

  var map = new google.maps.Map(document.getElementById('map'),
  { center: myMapCenter, zoom: 14
  
  });

  //  var marker = new google.maps.Marker({
  //    map: map,
  //    position: myMapCenter,
  //    title: "Hello World"
  //  });

  // marker.addListener('click', function(){
  //   alert('Marker was clicked');
  // });

  var store = [
    {
      name: 'Jo Smith Photography',
      address: '987 Brook Street Dundee DD5 2EA',
      hours: '9AM to 5PM',
      location: {lat: 56.465045379634056,  lng: -2.8645530290416827}
    }
  ];

  function markStore(store){
    var marker = new google.maps.Marker({
      map: map,
      position: store.location,
      title: store.name
    });

    marker.addListener('click', function(){
      showStoreInfo(store);
    });
  }

  function showStoreInfo(store){
    var info_div = document.getElementById('info_div');
    info_div.innerHTML = 'Store name: '
    + store.name
    + '<br>' + store.address
    + '<br>Hours: ' + store.hours
  }

  store.forEach(function(store){
    markStore(store);
  });
  
};



