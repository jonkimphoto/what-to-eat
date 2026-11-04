const CACHE_NAME = "what-to-eat-v3";
const urlsToCache = [
  "./index.html",
  "./manifest.json",
  "./images/malatang.jpg",
  "./images/buldak.jpg",
  "./images/tteokbokki.jpg",
  "./images/kimchi.jpg",
  "./images/jjamppong.jpg",
  "./images/bibimbap.jpg",
  "./images/sushi.jpg",
  "./images/ramen.jpg",
  "./images/samgyeopsal.jpg",
  "./images/chicken.jpg",
  "./images/pizza.jpg",
  "./images/pasta.jpg",
  "./images/japanese_ramen.jpg",
  "./images/naengmyeon.jpg",
  "./images/burger.jpg",
  "./images/gimbap.jpg",
  "./images/americano.jpg",
  "./images/bingsu.jpg",
  "./images/bulgogi.jpg",
  "./images/padthai.jpg",
  "./images/pho.jpg",
  "./images/butterchicken.jpg",
  "./images/tacos.jpg",
  "./images/margherita.jpg",
  "./images/croissant.jpg",
  "./images/sundubu.jpg",
  "./images/salad.jpg",
  "./images/matcha.jpg",
  "./images/milktea.jpg",
  "./images/matchacake.jpg",
  "./images/souffle.jpg"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});