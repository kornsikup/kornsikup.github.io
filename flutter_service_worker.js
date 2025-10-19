'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "ef1a27de28ed85f232e264ae2c4d80a8",
".git/config": "5da7b1d4d61ad1327236691eca8b9017",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "01fae689d69007fdc032d1f8f8aaa437",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c9f89ca79bce657c90a25f1fc4c2c68d",
".git/logs/refs/heads/main": "c9f89ca79bce657c90a25f1fc4c2c68d",
".git/logs/refs/remotes/origin/main": "2b0e76ac61a7ac87f417bdc14dd6d684",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/07/e4531c5d814d7a99acbb61019dcf28cac403be": "c42505863542985987e156def686a953",
".git/objects/0a/b4b8c139e307b94378ec878c5612ea3ea63609": "fec48ff59ef1283f4b71da31cc95fa6d",
".git/objects/18/cedb62641323893722c53de528c3be04106169": "9f3433c9b9efb77960b214fcb38762b1",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/30/31e5adca1c02cfa83b160f6804e5e3aed6a619": "668548ea94800b27bbc086f0da9f9c17",
".git/objects/37/b9f5a59241b6bb21b2263ec47dea1ef67f693a": "d286c7e8c0e3fb68ff8ee10248be41a0",
".git/objects/3a/d4786db7b0d20a35aaf97001c67308a7aa5e5f": "1f118747aa097142c0acad961405f992",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/7170ef761aba374b92b38d1b5217334d55cbaf": "ec4a3bb67ee1c872f88db71abef429b3",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/56/470b464f8506c13092b7a5f437183edf09633a": "2f52385e5472994ee748087733805e28",
".git/objects/57/de454e1bb6ccd129384ba9121f444b84646d45": "b7fb12decba11c8aea5c39796ab96ce3",
".git/objects/59/fbabaf3241deeb05a2f67dae5ce8cc1e19fece": "e1a40b86c35c502efeff9d63063e3c96",
".git/objects/5f/93ee4c724d1a1d1a72ffbebc29c35810fe1b1c": "1530529fbd6d177246425825e70de547",
".git/objects/63/7a0282f03e403cfcf543f0810ae37e23eeeddf": "991e4788741cd21b938ebd23bad05131",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6e/b52485dbff8bca8ccc7ea1094107cfe6043b64": "e78aa89784e4e1220ec50d34d3ceb174",
".git/objects/79/075b9141709974a4ad8938119769170e94b4d0": "cacb9f432cbe1c35c22c14bb86b14491",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/82/e926eb259ecc26c1febcec0a6eaa8beb412820": "b16c1854c0bde084fc459ef0151cbf6c",
".git/objects/85/04d915d2b9155db59cc4223c39b9a1a7c8eca9": "38908a9b2aafee6d46f4ccbb07336446",
".git/objects/87/18cb3211b3ac8f9f1367ef8b9d9dcb470aeffb": "70ecad6e3c1600bc0f2ae42ae5e5cfec",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/d6cdf87f10592ee2e0c0f1976bb01ad30ef306": "c5c0ad99ccab8101582874eceb495e5d",
".git/objects/91/1ff5b8f5087052c623873499471a93b9b40136": "a74eab58ed4dab5ff476c6620dd6f9fe",
".git/objects/97/e9db76ef91e7bb3d4a05dad5798048c79b6cc2": "1a9eae65aa36f3272d4370e1710b7757",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/9a/d64ed1ff86917b7a0d2e3431335b59ce94a592": "b2ba6bc2d1e80fd634ade2325ccca724",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/a5/38a05dec97270138abf0713b08c053a84743dc": "66c52401a6bcec9c6583bedbd395aca7",
".git/objects/ab/7aa7c592881d2d612506fd7ee2fa21b86f2d53": "d50eac9c7ff6c0c15af7d2e2962428cf",
".git/objects/b0/4a051db6e513b15c234771b7b468d093be2bd4": "eb900754cde6e4580abfa71a7a176712",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c3/e7d8989b59ab77b7182e32e25e98899ed6ae79": "2193b91f8e85a11fbe819b877ea54cf1",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/fb6b57ef7ecd43471e160d30df7228a9520612": "b0f22f2fb553ff6884ede8daf4e78acf",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/dd/dc0cc06ddde535dbd6f44a0e3555a15c2aac37": "6a28b3edf40d3007e9876415221de89f",
".git/objects/df/c7afcc33b1ebff00a82765a300f8473686942b": "afeacd9fedd98403552663aa6a8c30ab",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/f0/57f5de2b8dbea734fc2a00e5309fbec4938227": "77268d2b5efb0c5a235b64c3838aeb31",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/c89909ef29dc06ceb5a3de397cfdd5fca7324e": "7c42a279727258c8a21da4468049f724",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/abd420e906e49045104ee20fd0a600ee49df4a": "11d513425d134a7bbe1205d3e8633329",
".git/objects/fa/b782b838e0ae2d63f15f5bf8a2ac30984d6106": "919a66fa492921a7eb8e4a827705734f",
".git/objects/fc/6238d2f340430460d0780348fe0e3fe6d9834d": "0e132cc8c4c8f3ee2009343f1a8b06d7",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/refs/heads/main": "b375316acf685834403732f52b9bf8c3",
".git/refs/remotes/origin/main": "b375316acf685834403732f52b9bf8c3",
"assets/AssetManifest.bin": "4a4773bc1a5273b67e33dc8a9b66726a",
"assets/AssetManifest.bin.json": "9577bbb21ef64e26b75ee7566418b4f2",
"assets/AssetManifest.json": "9bcc42e974fc8e50d009836e3c4f4e3f",
"assets/assets/icon/icon.png": "d353107349fd0e720b374e0967abb495",
"assets/assets/images/arriba.gif": "0c8486223f8c24178df41b00e0de1a0a",
"assets/assets/images/cannabis.jpg": "71cc45f3e9bedd25b24152c24da3baa5",
"assets/assets/images/chamber.jpg": "eddd6a23648befa8c9d8baa39b755d30",
"assets/assets/images/Pzeed.jpg": "24af0c0e50e229742818c08bbf7e901d",
"assets/assets/images/shrek.gif": "b4423a9503cca758ae0297dc7770cca4",
"assets/assets/images/wallflare.jpg": "ffe57d923a84b0159214dee1c9a94390",
"assets/assets/lotties/cloudy.json": "edcbcfc02d626a3ae8f2425dab383007",
"assets/assets/lotties/loading.json": "9b7d2f64714a76dbdd3b98b40b6a2170",
"assets/assets/lotties/location.json": "c1685a9dcc38c0c4b59a8e44c125ce4d",
"assets/assets/lotties/rainy.json": "7b66f238fcdd7b1a288203774872c60a",
"assets/assets/lotties/sunny.json": "038f4da1f4836a44aca542377aeb388d",
"assets/assets/lotties/thunder.json": "e2b0f3bb09ed18b7676b6551bfb0f61d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "06939347ef85a8b6561b0c99adac7e42",
"assets/NOTICES": "fcff24a0c278e78aaf9317689a0a27d8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "24430c81eb2c53bcddcc89b6b6bf4cf7",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b3a1a274aa57be6ab45cdc3a4ac0ee3c",
"/": "b3a1a274aa57be6ab45cdc3a4ac0ee3c",
"main.dart.js": "221a503597678b889d6d23d431bb125c",
"manifest.json": "3b0748e564856b8758103d758dbc59c0",
"version.json": "a874b8da259a7ea4869f2043a3a26af4"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
