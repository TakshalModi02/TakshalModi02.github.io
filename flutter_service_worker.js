'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "d9f02ac04b1af6b9cf09c64f36d94423",
".git/config": "5299e2f445ebd2159e33d49025537174",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
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
".git/index": "52a5e78630165d7e8e67177622d23ddb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c5136f50c110d214838e7de7043a1d93",
".git/logs/refs/heads/master": "c5136f50c110d214838e7de7043a1d93",
".git/logs/refs/remotes/origin/master": "01224d16ba7482a1feb7bbcd38d17fdf",
".git/objects/06/33761cf6c68bd73969efbce10403b538fd73c2": "3ce08120c5d7f3df71cae1092d763336",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/0b/3dcc69e599f2d0a3c448a84ffbc7767b327fa0": "3449f8062e754399e2296d8ce38fbb6b",
".git/objects/0d/8a3976d57b78358609c393e7b8ec2b44ed5960": "f353f42cee97e3ceafa8e488efd6535a",
".git/objects/15/65928077d6bafc7dd393bf82347c73aabb53ce": "9878a8235da9cc2758b10558807d7ee1",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/1d/0ca9ac26f293f735ef3927041e0124a2f303a0": "3049f5b590db6710dcc5ecb3fd4a03fc",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/29/30b0e1753416e12f4268a98f9a5e8be35778a3": "1e787c669c61d9a7173bd1d627323108",
".git/objects/2d/213c03adbf30182cbc1ce61f59ba00c2c53b1a": "1e890fd0e1bb11b1856b7d8360a24333",
".git/objects/2e/2d823e8f0496a0b46dd6c0520ea5a160113f13": "79fb6220e6391bb05201fd5e12a3152c",
".git/objects/2e/c64c8a868a44f25899cc7dcb526c5e6731e45c": "e38869310f3125d133c7155a47e5bc51",
".git/objects/2e/e0bab620e856bf4f31fe112ce4a6a25be78ec6": "df132393749a5b8a88c786002914bd3d",
".git/objects/34/d0b139d333c24176f700aec485152d837ed986": "be160aeb5d91a9bcd906f8b686c672eb",
".git/objects/38/dc445c243adc11db03c0fe46cf6d097033273e": "61a52d9804ae51e766da1ff2c8aa9018",
".git/objects/3a/14c978cbfee5253e8a6a9aa172619cbce7e854": "cdea6d1e10db741d670c22d6796ce9f6",
".git/objects/40/57ee7445df197b44f3991385abc12f49fbcc85": "e118cc845922974afdb07b7b88e9be4a",
".git/objects/45/ae92dbe5bd017306ec5bcd09484b21ce377bd5": "91deea12711e6ea22bd7d17df46a3bee",
".git/objects/48/b7ef617271ba5102d741d864b50cd424925d1d": "1acfbb35aae597afdc65a27fa5c9d74c",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4e/7009a8f8585a77cac67c42bf6ab653de17e12b": "adedc68398b170914330d078c95f65d5",
".git/objects/50/fc0d79b4eaf9a9c308f9d43983b648565e6f0a": "ddb3ae9e861cac7bc656e86d69f78e2c",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/54/b730876b2d87bc2cd4fcedfe100eadff301157": "d9e4d15dfa0085da19eedd843e22839d",
".git/objects/56/a916afc62b4967e1194d8a7ab4aa631b8b0996": "705dabf9fb27524fbc179c4b8c46dcf2",
".git/objects/56/f0799c1f8c28a4fb971272abd67c89bfb154e7": "de06a5b41df24a6fd3089d2481a85be9",
".git/objects/58/6e6fa4074bf699a51ef199087207a49867b89e": "18bba158745808828462f490402714c4",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5b/898ba28bb3074246ed08519f7b67238259c1d9": "928342ad8c65f754db2a70782f75390d",
".git/objects/60/cc6107a5f9f636a838f3df82dc3a83b70b7269": "271fefaee08c597bf5aee0a24a02b4d8",
".git/objects/63/7fddf80edcad32c637af100e34b6152b60f680": "6b7a4da9f48413543e85188aef0da46b",
".git/objects/67/2720c4766a9e4a5a81240e12c11cd4713db25a": "14a24aae10f771f052301bbfc7900f86",
".git/objects/68/70514dfe050ef915c12f937d705c87a1d2bae0": "c32fa415589aad80a6ee35d0af7261ad",
".git/objects/6a/49874ffb33644920a9436afc4304c45dc22d63": "81d136e9a043e46c1f2a4d510e612137",
".git/objects/6d/6eeb4c9b8980e49f95ca38cd94ccaac7911afc": "2677a8986dca2a77fc23b6b5da5b3da4",
".git/objects/6e/e839c465105231d3d72dd12372d441e5852d44": "be30018d53647da751cfe61212195699",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/71/f101ad45196b61dc61f2c2f06d11481b59fdf8": "c951f685fa0548ea34753828ea3e827b",
".git/objects/72/c6bee34fdca7d8db1e2f6106dcd054014e87ed": "35471c759884fabdd7a9d09320d22853",
".git/objects/76/5ded732f4383154e156001838d6b0eef1ed75f": "6054f807e3212ef70ee88e0fd4684834",
".git/objects/7a/ad2f3dac349e5f5349426aca315b5956b1800d": "279429e2cbccf3884076c61b1d61f02b",
".git/objects/7b/2898d33f2dccdfe2a463addb3882249ce2de4b": "23127809339765fa7e13b9e567ced486",
".git/objects/7d/a44d50d4a20b23707b7d89ef3b5cc385d0f4ac": "9948edf92688c732efdaae2e22e6a71c",
".git/objects/7f/7354e3bb48274b9336fc8a0784932a88ae746a": "316567a30a1fb9000c585ddeaf4162e7",
".git/objects/80/fc981860a9dd7f6de3e66e8f77a58ec9345366": "2986d40fff3fdfd1cb3eb8efed7db206",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/a78411d4afcaf293a8aba7d8ddf2c05a204c12": "a8221f6718f2682a34a56768a105c3a9",
".git/objects/92/a7951567c5ba82a84c8b074b1837e340264325": "adc6c48940f130bb1bcce19a56282382",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/9b/cb53cb8afcc6af6f5bb3c19096d691e8b5ec1f": "ad297e947a953d5c50b514d3a5e5910f",
".git/objects/9f/491679e3b4e50e192dc2f0a1d3e71c713ee36d": "356ced3afbca726e15eecbf3efbff150",
".git/objects/a0/362d74f9c18ea0e01347a7e858364fab9bee90": "ce8a64ec71e2b994a568d27d940b8fd1",
".git/objects/a2/426a9a985793a116ee53d8427eb1ae4cd341e5": "7e4c0a573f91032cdd71a904866c4e7d",
".git/objects/a8/82d5e16523f2308a4bff9a3a4beccc13541241": "1609cf5b09e7b044cee5ee5db998cd82",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b2/52cd8b9dfa4758d0e2614bcb57e74394aaba18": "a683be82608ec3586db058e99c832e14",
".git/objects/b2/de824bb8502d2f63390d8efa4fc72bb7fa6c8f": "21234b3713459d42d0b51a1ec8fed4d7",
".git/objects/b3/2c259b3ed8f8e98a52ab3eb72d20020fafe3ea": "4587318cc909982d3df7e098c8aac55f",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b6/a41a5113c371d99961c3e20a55268f15f13daf": "7805cebea74ae8b072a0b80e6b2c496b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/2395b5dc91420e9203ee13a96a13cab690e746": "8dddfb89c6e41f070a0cee90862dc781",
".git/objects/bc/82105a5edc225ef3a45354441586cd960ee14b": "791d3893c8a9eb41d30b94137e5d4bac",
".git/objects/be/0d5e4af41acc4ea7bf6176f583899b7fe8e382": "850c03013c5527bd19313d5efa46206b",
".git/objects/be/d6eb87e6a52ae22f1dedc0ef16d5f1b9d1f580": "6752e2d56489a82db9873cc701d85bb1",
".git/objects/c0/287cd957c47c9be02ac5615810212dc3190281": "55270e777e0ec16590922dd96c01e943",
".git/objects/c5/acc31ecda6e8964d0f7e101747a9a985ef381d": "8cd8d694b8f33878389ceb5855317923",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c6/897d6802711e55599efa0f1502418071a1ebaa": "7a7fde1bddccff2490c5aa1829091acb",
".git/objects/ca/2c630dc48165b853a315bae803a98c4247cb4d": "390e51873602bf55b300595b2e82f1df",
".git/objects/cc/d11e02ffa7a3b54993ca9d69ad164e7bef6094": "7bd7f5c3ff78ff5519e0383614f81170",
".git/objects/cd/b7b724048be1a939fedf06b15a146bf514178d": "3d1bee1c704a457f9cb510d693add525",
".git/objects/ce/390debe2318400dfa5c553ab70d8955f52cb19": "57e8c6cf5501ce7bcec6b252df3cfc2e",
".git/objects/ce/6d10b84ba96e1a92e4f8b05a33fee90be71cac": "a1de1aac68e592f44c65b6e3d15f990a",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d7/d3f3612a8c97c25db974c5e350ef2c49ec7852": "a8589cb18c5461fb90971f9886f51d59",
".git/objects/d7/daa4fef71cc480d1e74bec19c919ba757c51d0": "74a83f14d0781079fecd9c7f10ffe10a",
".git/objects/d8/60e0fa176831cf8800b0a704e19fb4e3b4a85a": "9d612078622b7a72e2f1565eb640c905",
".git/objects/da/971661242e6cfdc392d0b4e2d04f298d35364d": "dba03f6d6363ac34a368499f783fadf9",
".git/objects/de/8bd2874322660a7890afa7e881b23c529c354d": "daafbb9d9d3c33aebd01b084321f3c8c",
".git/objects/e4/a964e537ee0c29302ab21fda28c5ccc73c2e76": "eef463e7f14fcb0956366ca4aa000acf",
".git/objects/e6/0050f23803f88df40cb68b1940a4e441007b8d": "7b2131758292aca358193f1c8a174c84",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/eb/718174196d3fbc9a4266a861cd0779492755ce": "631f1cc1333bf35715c20bd39be87f6a",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f1/11c4f620f2a6b3e6ff72dd4c48ed5cee6827a5": "c6bd5f959a31ab4edef843f6f7b72787",
".git/objects/f1/19258663f2b9e376170b46cba0fa8e28a62b70": "0ad87541a0321b4ea3a092852147f14b",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/d9f3c46ee0984c884194cb9e68253be670d624": "62dd2c2e82efe1c273d19bb2e20c1965",
".git/objects/fa/4f684e9db7af6d6bee2e4f1239c4d52e48a49e": "9dfac98a8cf5f2b74131d781e72160ed",
".git/objects/fe/aca798f81a5bc912c2639369fbf145019172b2": "171cc76cd7f3babdd032d83a78cb19f1",
".git/refs/heads/master": "d9a9f5703c428817bcd61dd9c5cfbddd",
".git/refs/remotes/origin/master": "d9a9f5703c428817bcd61dd9c5cfbddd",
"assets/AssetManifest.bin": "74ffc4af17f0bc8a6a259077cbfc16ca",
"assets/AssetManifest.bin.json": "9a2455cc0c1bcd8a441b19fa096050fb",
"assets/AssetManifest.json": "031b9342fef36fea1ac495b1fc44857f",
"assets/assets/background/1.svg": "9efe294480164b6eb51b80bcd7783b8b",
"assets/assets/background/5.svg": "9120385821b899be0cafe7d97d215735",
"assets/assets/certificates/flutter.svg": "cc90a6f3c27622c51d712ea983d6546e",
"assets/assets/certificates/google_cloud.svg": "bc33af5f489fbe40e24259477103f66f",
"assets/assets/certificates/nvidia.svg": "7a18128256cdde7c3e926b601af25ec8",
"assets/assets/certificates/terraform.png": "74678abdbbcaeed23b2263bf0daf95f3",
"assets/assets/connect.png": "08ccfb5edafeb1759de6fa31b87bd5c8",
"assets/assets/connect.svg": "d86b8b92f7a15a82e095ec94f98635c4",
"assets/assets/flutter.png": "8efb797d33c586ef3cb71d4083dd1fdb",
"assets/assets/icons/flutter.svg": "356b8423fb4c37e3babe292a9e03c975",
"assets/assets/icons/github.svg": "76d344f08412543c74ccd1fb2493d607",
"assets/assets/icons/gmail.svg": "abbd6527319f9d0b6c8a50af193df701",
"assets/assets/icons/instagram.svg": "33c0accdc2ebe7de2a214e97609be03a",
"assets/assets/icons/leetcode.svg": "fa170327ac0682d17804f1bf140fab06",
"assets/assets/icons/linkedin.svg": "e3f3ca0f3c0cc9291f1bdecbb7dadc7b",
"assets/assets/icons/playstore.svg": "aaada2a103792cf75a90a9c39e766725",
"assets/assets/icons/project.svg": "a44dd46006c44374e7a25c8c69955018",
"assets/assets/icons/twitter.svg": "822d2019944315a06a037c7a5c05e945",
"assets/assets/icons/youtube.svg": "3eb182663fd1181f048705dedec45580",
"assets/assets/profilePic.ico": "3230f6b1046958df2c52a996065d18a3",
"assets/assets/profilePic.png": "f1cd270efca773afb15402302e5d9137",
"assets/assets/profilePicture/profilePic.jpeg": "bfa019828139ec67be5bd693aca5669e",
"assets/assets/rive/cloud_icon.riv": "bc56661c9755cc041bdefb7c4fed4828",
"assets/assets/rive/loading.riv": "8943c1c531498285b7521b3426b0fce4",
"assets/assets/rive/loading2.riv": "34f73247409d01113184da5bf99eca97",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "9ab4f8c968d21ec63e0a9e46fd87e26c",
"assets/NOTICES": "443992e06dca8d63c9d8bdf80da1ecc9",
"assets/packages/animated_snack_bar/assets/monochrome/check-circle.svg": "f6d9dd67711da5b6d4d965f66c10cd07",
"assets/packages/animated_snack_bar/assets/monochrome/comment-dots.svg": "44311bf381ea1155bfe38c40d44c577a",
"assets/packages/animated_snack_bar/assets/monochrome/exclamation-circle.svg": "63ffc503c8e024f9752866e021afb744",
"assets/packages/animated_snack_bar/assets/monochrome/exclamation-octagon.svg": "ab5fb6de2478b95f911cebb5cf6af9c3",
"assets/packages/animated_snack_bar/assets/monochrome/exclamation-triangle.svg": "10427de487dc532646c4a11f6be3fe84",
"assets/packages/animated_snack_bar/assets/regular/check-circle.svg": "0936541fbbf9ebf325169373c2d2439a",
"assets/packages/animated_snack_bar/assets/regular/exclamation-circle.svg": "69c777fe5b9ffd2f8286ca47f98d1a31",
"assets/packages/animated_snack_bar/assets/regular/exclamation-triangle.svg": "57a895d149648e4b69c7681d4efb2052",
"assets/packages/animated_snack_bar/assets/regular/info-circle.svg": "e733e8ecda8758e6b69d20cc1ca1c6c4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "19be841eea3b9ab6718ef451aec6602a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"Dockerfile": "737576342cead329d041c9cd0dadc034",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4873c6521179322a600f9a2e4d17f4ba",
"/": "4873c6521179322a600f9a2e4d17f4ba",
"main.dart.js": "c174d76279e2923a8286550bc6b3c27a",
"manifest.json": "5a293ef6f84e050dd8a6292a117f33ce",
"version.json": "1e4eda295cc33b4a0b76f8f3998b3ef6"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
