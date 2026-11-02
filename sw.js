/* Offline cache: page works with no signal after the first visit. Bump V when you edit the site. */
var V="relyns-v7";
var FILES=["./","index.html","img/logo.svg","img/ankara-kimono.webp","img/batik-trousers.webp","img/beaded-lace.webp","img/bubu-ruffle.webp","img/casual-two-piece.webp","img/corset-dress.webp","img/corset-top.webp","img/embroidery-bubu.webp","img/peplum-skirt.webp","img/sl-print.webp","img/g/01-t.webp","img/g/02-t.webp","img/g/03-t.webp"];
self.addEventListener("install",function(e){e.waitUntil(caches.open(V).then(function(c){return c.addAll(FILES)}).then(function(){return self.skipWaiting()}))});
self.addEventListener("activate",function(e){e.waitUntil(caches.keys().then(function(k){return Promise.all(k.filter(function(n){return n!==V}).map(function(n){return caches.delete(n)}))}).then(function(){return self.clients.claim()}))});
self.addEventListener("fetch",function(e){
  var r=e.request;if(r.method!=="GET"||new URL(r.url).origin!==location.origin)return;
  if(r.mode==="navigate"){ /* network first for the page, so price changes show up */
    e.respondWith(fetch(r).then(function(res){var c=res.clone();caches.open(V).then(function(x){x.put("index.html",c)});return res}).catch(function(){return caches.match("index.html")}));
  }else{ /* cache first for images */
    e.respondWith(caches.match(r).then(function(m){return m||fetch(r).then(function(res){var c=res.clone();caches.open(V).then(function(x){x.put(r,c)});return res})}));
  }
});
