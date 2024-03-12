'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "c3cb64e7987419768c679de8cd7e26b2",
"index.html": "b2e85eaec4fe1325595a3c25c13ee0bc",
"/": "b2e85eaec4fe1325595a3c25c13ee0bc",
"main.dart.js": "5c0854f01c208a47b69c9a4268cdef69",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "2d2d5a4c60aa9fb171f8cd80a20d7bdf",
"assets/AssetManifest.json": "c53424b8cd5d9e5dfed1b99fff7719b4",
"assets/NOTICES": "999327ffd3131bba1654881bfa2b2b67",
"assets/FontManifest.json": "576359b3766ea9835fa3c743ef58ed4e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "c4abc2f8eb98ff9216435da8d1e355ec",
"assets/packages/im_stepper/assets/me.jpg": "487511e754834bdf2e6771376d59707e",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/v1_font_awesome_icons_flutter/lib/fonts/fa-solid-900.ttf": "201a29e12453a592b6ad3b0ed05e7a83",
"assets/packages/v1_font_awesome_icons_flutter/lib/fonts/fa-thin-100.ttf": "59f2d1544ddae556774e43079c631e12",
"assets/packages/v1_font_awesome_icons_flutter/lib/fonts/fa-regular-400.ttf": "f1ce965f54e3522161a641662ab91c9e",
"assets/packages/v1_font_awesome_icons_flutter/lib/fonts/fa-light-300.ttf": "6ee5bff19cdfbca8afdf10daa34178bb",
"assets/packages/v1_font_awesome_icons_flutter/lib/fonts/fa-brands-400.ttf": "224d57cba3a0584e65f5ee486f73d766",
"assets/packages/ui_lib/assets/fonts/Roboto-Medium.ttf": "68ea4734cf86bd544650aee05137d7bb",
"assets/packages/ui_lib/assets/fonts/SF-Pro-Text-Heavy.otf": "29c2a7b066a38c0b90f37f1a116bb667",
"assets/packages/ui_lib/assets/fonts/SF-Pro-Display-Regular.otf": "d3c55796a392852ee60f620ba8483e02",
"assets/packages/ui_lib/assets/fonts/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/packages/ui_lib/assets/fonts/SF-Pro-Display-Bold.otf": "fbff3f6ec16c92df94702e3897cd0b56",
"assets/packages/ui_lib/assets/fonts/SF-Pro-Display-Medium.otf": "fcdc8a62436e08dc4e71217a41bef95a",
"assets/packages/ui_lib/assets/fonts/SF-Pro-Display-Heavy.otf": "5c65570a734b814a0ccfb59c9d0337a7",
"assets/packages/ui_lib/assets/fonts/SF-Pro-Text-Black.otf": "6a2cead061bfd81de03cd392ac4186c6",
"assets/packages/ui_lib/assets/fonts/SF-Pro-Text-Regular.otf": "56a46a3c3683b3ee8de690c0a3c40026",
"assets/packages/ui_lib/assets/fonts/SF-Pro-Text-Bold.otf": "8b047269504f0b39bafc4c4889c565ca",
"assets/packages/ui_lib/assets/fonts/SF-Pro-Display-Black.otf": "9b8f7f87323e117f73737c4d1b1f0111",
"assets/packages/ui_lib/assets/fonts/Roboto-Bold.ttf": "b8e42971dec8d49207a8c8e2b919a6ac",
"assets/packages/ui_lib/assets/fonts/Roboto-Black.ttf": "d6a6f8878adb0d8e69f9fa2e0b622924",
"assets/packages/ui_lib/assets/fonts/SF-Pro-Text-Medium.otf": "e7c769e65101b5be4641357a3a488998",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "c4f4f55eaa62c9eacdc033a60d377260",
"assets/fonts/MaterialIcons-Regular.otf": "d3f979b8bdbe8f669aedd5c3662d2128",
"assets/assets/login_logo.png": "b3e4ee8cfefa96e0402edf0d864bccfb",
"assets/assets/images/gold_status_medal.svg": "9c1ca80c32255e02855a867d7eece358",
"assets/assets/images/medical1.svg": "5560c9dce93a1e5539793d2c4bf1e255",
"assets/assets/images/tipsIllustration_header.svg": "72c11833d99b64a18b7de3660135908f",
"assets/assets/images/screenings_vaccinations.svg": "f424111c204cfeb9c19408f22846dfcd",
"assets/assets/images/ic_orange_healthy_people_heart.png": "783d74a8290e365b0dafdcdf7682c177",
"assets/assets/images/medical2.svg": "bc20647fcc6fb3d951c0805a94f6d4ca",
"assets/assets/images/smart_watch_unfilled.svg": "ce71c7c2aba8dedf0f540cdec1f6b809",
"assets/assets/images/people_weight_training.svg": "efb2010dfea9252384a1663c0cf8fdff",
"assets/assets/images/gym.svg": "0e52967dffcb63b7e5c8076fc0f58c82",
"assets/assets/images/alcohol.svg": "5c2fc4ba65cbedab030399a60223c699",
"assets/assets/images/goal_start_soon.svg": "2944ce823f3e687db27c1a4879170a49",
"assets/assets/images/health_assessment.svg": "93aaea0ae5937092121f22a10b41ce3f",
"assets/assets/images/circle_arrow.svg": "4bb974a42843f2c945be569bf842c4dd",
"assets/assets/images/spaRectangle.svg": "49796bbcd59d960e470c82e20dfa0d14",
"assets/assets/images/icon_phone.svg": "30b4bfc8d6be9593e2f46381739ced83",
"assets/assets/images/emptyStateIllustration.svg": "c2fa3f82cb5a904da1b75a4f8071e033",
"assets/assets/images/back_arrow.svg": "37a803abdfec8ba91b7d4799b50ef94d",
"assets/assets/images/bike.svg": "395a39e0b396df2ac31fc4160aaa6178",
"assets/assets/images/pokemon.svg": "b82d84b0e9985d871a9a13b9e841ca8c",
"assets/assets/images/ic_circle_bg.png": "439bb53d6620f18e4f5e2f24e5721cfd",
"assets/assets/images/logo_text.svg": "e6771dc066a8e09e0dc578886717c4ce",
"assets/assets/images/icon_left.svg": "c6f0c5cdbacaec6817d501c2cee0ab0c",
"assets/assets/images/hero_icon.svg": "9564797c71bb1ce1f5535335e6e576e1",
"assets/assets/images/wheel.svg": "6ff45391c3aecd93aceb68dfa0e7fc09",
"assets/assets/images/ic_green_healthy_people_heart.png": "53beaaf3f8746de2c2b162f0fa81f9b0",
"assets/assets/images/lock.svg": "788edf294b9c8dcf52c3ee724729e26d",
"assets/assets/images/fire.svg": "84e98777b991b87b91d7e8b01abd7fd2",
"assets/assets/images/money_bill.svg": "f6a55865efdc6a0806e407a7f6a7dfbd",
"assets/assets/images/check_yes.svg": "87c54138d3c25ee773076d2f7d45132d",
"assets/assets/images/circle_check.svg": "31e615fc08c51e455a5a2780952ee3d4",
"assets/assets/images/non_smoker_status.svg": "68151043997c65f15ae3fb4d301b0c67",
"assets/assets/images/coins_bag.svg": "aac432df461f6cf4e372fc73c8b3d01b",
"assets/assets/images/coinsBg2.png": "47fc4266c4771796f469d0b5401a230f",
"assets/assets/images/platinum_status_medal.svg": "acfcda35b413f49ef8c54042457794aa",
"assets/assets/images/fitness_event.svg": "5eb2a63a06b9154fca841bd1ec3d528d",
"assets/assets/images/full_image_card.png": "22ce910691eb35319669cb24e9780abf",
"assets/assets/images/discovery_logo.png": "64bc12055b19701a34d4e86d195ee2f2",
"assets/assets/images/chevron_right.svg": "bd434d9ebb5aceeef552bcfb442e6e8c",
"assets/assets/images/flag.svg": "72c9c635b7528e998fc15525ee3e4321",
"assets/assets/images/light_bulp.svg": "843f4c3707b36ce32d880379b59dde99",
"assets/assets/images/coins_bag_gold.svg": "58cad4d4eeee45b82a718e5a306f8d9a",
"assets/assets/images/arrow_right_long.svg": "e3215f17fbd14302afec4d93e2628260",
"assets/assets/images/health_check.svg": "1ad86655db7d8f3ad9f5ab0ee5c12ab6",
"assets/assets/images/category_icon.svg": "a7e67b9f69a51d0fafb695f352e34328",
"assets/assets/images/face_unlock.svg": "e429883eab08fe3f941f39e712f8c066",
"assets/assets/images/tipsIllustration_no_header.svg": "a79a150e34aeab6ce4db841bab7817e5",
"assets/assets/images/mental_wellbeing_assessment.svg": "e27ce6231e8b333102c11ddef4cd3a05",
"assets/assets/images/maxpoints.svg": "735857868bbb7409a8cbdf7c2311976c",
"assets/assets/images/apples.svg": "8583312a0756118ded2ab6a9862461ff",
"assets/assets/images/scale.svg": "a4206ff2fc862bbeba8b37062deb6dcd",
"assets/assets/images/dial_life.svg": "7a92cc8c9736f2a2b0672de480658ff0",
"assets/assets/images/coins.svg": "d1728444b61e3c8d0210b84eca97b496",
"assets/assets/images/dial_life_2.svg": "e946434ff5168b70e50e35f2ea29f888",
"assets/assets/images/icon_link.svg": "e7c73ae0978f3dfd593754d39825f6e9",
"assets/assets/images/pregnancy.svg": "311387f9c9ba4b900f7e03f2e64e2ffd",
"assets/assets/images/circle_question.svg": "334f4a5e571844f3c4f39a621c0107b0",
"assets/assets/images/mental_health.svg": "7027dbe4b38016756cf18023f0f11235",
"assets/assets/images/ic_red_healthy_people_heart.png": "867de998572a14ab47346a8e063892df",
"assets/assets/images/watter_bottle.svg": "ed819dbe3446df4dc5591f2e822dca1a",
"assets/assets/images/error_circle_rounded.svg": "1cdda02fc159e0ecf8d6470b4db31c53",
"assets/assets/images/person_biking.svg": "50a17166803d37ff41df542e8bc8b81c",
"assets/assets/images/icon_mail.svg": "c6c4437ee72749e40a0f7378712e10df",
"assets/assets/images/benefit.svg": "fdfe138a1fa552b8603fed78e1ce9960",
"assets/assets/images/app_dials.svg": "08f3b6a5e8d4996f6938475ecc009ec1",
"assets/assets/images/graph_v2.svg": "12cd8c6abbf18b021bb18eb921e9e93e",
"assets/assets/images/circle_exclamation.svg": "dc1428bb68dcd4a81a70dd75e83f2ee7",
"assets/assets/images/wheel1.svg": "f95d72778855ea4467bf5a1b687ba3b3",
"assets/assets/images/track_watch.svg": "66ebc397346a9b993c46c39bec18fd71",
"assets/assets/images/leaf.svg": "7fe64c4690a4f03f6e900f115dabdc34",
"assets/assets/images/star.svg": "58333152dbb1c18ca1a310889a8badd3",
"assets/assets/images/smart_watch.svg": "8dd53cb1fa54dd6924725499e517cdf4",
"assets/assets/images/flag_filled.svg": "1b7c3828c689d877eb83bec7e312da62",
"assets/assets/images/chevron_down.svg": "6262e6028c093343e003971685d15380",
"assets/assets/images/running_shoe.svg": "382b132c23eb464dde3231a2ef8d2a81",
"assets/assets/images/spin.svg": "bf37ad0d10e659a7e0fbd92fdde94208",
"assets/assets/images/giftcard.svg": "aeadec5018a182a3da56d0409bfa0605",
"assets/assets/images/running_shoe_2.svg": "5f270f621ad097b3adc5adbb66687f0b",
"assets/assets/images/ic_check.png": "e7646bdeb7067b2d6a1537c547366c7a",
"assets/assets/images/gift_cards.svg": "9aba9752244edfad5949f6aef170420f",
"assets/assets/images/ic_warning.png": "fa1ad2bb803d83057783afdc741eeaaa",
"assets/assets/images/top_bar_image.png": "940cd1fc53b4f0797eb156edc43619a9",
"assets/assets/images/gold_coin.svg": "56f707d7ab99331396ee6e204b54d541",
"assets/assets/images/silver_status_medal.svg": "4b20ffbf4e961a46cf78fd90ee1dcb70",
"assets/assets/images/empty_device.svg": "824c7be3630d4c91186275ebcd0fe6e6",
"assets/assets/images/bronze_status_medal.svg": "a58ee6afd5a560153708e13a61dec819",
"assets/assets/images/activation_icon.svg": "1deb344295838584c6759dd8b57a751b",
"assets/assets/images/sic.svg": "a58f6116cf70cf57507f0fc1ef2d7cab",
"assets/assets/images/spa.svg": "18e16f3f78dcfabfec0f2ca709bdc4c5",
"assets/assets/images/apple.svg": "420e3be820e9c7d5ebf9fac23eb6102f",
"assets/assets/images/person-walking.svg": "fd247028709d415c4e7132eebb413e6e",
"assets/assets/images/person_walking_filled.svg": "64bce4aa0b0dd88f4ed789b1b8abc016",
"assets/assets/images/fingerprint.svg": "643c41d25e39021fc2cc3e24c18de029",
"assets/assets/images/walking.svg": "b08d762f2b217739436771800e29ae19",
"assets/assets/images/landscapes.svg": "75ce183fc12513458e791aa627e3bedb",
"assets/assets/images/starbucks_logo.png": "f062947f9e56edf80f31f57f3a77d7a4",
"assets/assets/images/cholesterol.svg": "da0cbc65d2370b1f7a42bff6c00c4008",
"assets/assets/images/ferris-wheel.svg": "5caf20c33591d88af95a1338eb4f4104",
"assets/assets/images/heart.svg": "eae1972d55dcb5322b1a4e29a17dea21",
"assets/assets/images/dial_activity.svg": "45379f90f554ec5e922ba67099721688",
"assets/assets/html/html5.html": "b746fb0f34d806313135b5e6a02808c1",
"assets/assets/html/html10.html": "eb5c8f33916edb6ca1e1496ff0b5f55d",
"assets/assets/html/html9.html": "07729aad2a9f2cced4f6ba0c6fcb500a",
"assets/assets/html/html8.html": "fd42a8edb1830a826bfe86d6dd96334c",
"assets/assets/html/html11.html": "bbbd986e0dae8583735523e7032d1005",
"assets/assets/html/html4.html": "3ac1c8ad8df9ba0ffe791b978093ed69",
"assets/assets/html/html3.html": "3bcf27fa471ac0a76b54626ea9f6a03a",
"assets/assets/html/html2.html": "1d713b3848561a2fe2d727cfc4263dd8",
"assets/assets/html/style_tag.html": "7a0303d2d941ade8b075fd29a4838d96",
"assets/assets/html/html14.html": "a2be4819964e1e8b03648bcd0632d49d",
"assets/assets/html/html1.html": "9c856affe6be672179759d30d1f07d10",
"assets/assets/html/html12.html": "126e056a2527b04b9598b60ea2ce85c0",
"assets/assets/html/html7.html": "33804e8f0f88dc1c50e0f605816c8501",
"assets/assets/html/html6.html": "28ca6d86e4d3478a855ea80563e39265",
"assets/assets/html/html13.html": "0aece54aae9aaf830e0fcee82fbb8259",
"assets/assets/lottie_json/Confetti_NEW_RAINBOW.json": "b5b77015b45cd6f275b628e00dacbfd0",
"assets/assets/question/diabetes_questionnarie.json": "e9dd0234275f81387686c027602ee9ba",
"assets/assets/question/question_ans_2.json": "0eda135de3eac0787c1c172d89842a8c",
"assets/assets/question/question_ans.json": "e59ebc5e6b5347a9956a6356928e623c",
"assets/assets/question/question_ans_3.json": "27bbd35cf00c1be33b7f4769d59f29c3",
"assets/assets/spin.png": "02d131b8e9650fdc4526c5310c0ae0da",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "1165572f59d51e963a5bf9bdda61e39b",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "19d8b35640d13140fe4e6f3b8d450f04",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
