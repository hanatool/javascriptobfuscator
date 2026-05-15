const filesToCache = [
	"style.css",
	"index.html",
	"script.js",
	"script.json",
	"image.png",
	"JavaScriptObfuscatorFavIcon_16x16.png",
	"favicon_192.png",
	"favicon_512.png",
	"logo.png"
];

const staticCacheName = "JavaScriptObfuscator-v1";

self.addEventListener("install", event => {
	event.waitUntil(
		caches.open(staticCacheName)
		.then(cache => {
			return cache.addAll(filesToCache);
		})
	);
});

self.addEventListener("fetch", event => {
	event.respondWith(
		caches.match(event.request)
		.then(response => {
			if (response) {
				return response;
			}
			return fetch(event.request)
		}).catch(error => {
		})
	);
});