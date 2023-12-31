

# [1.2.0](https://github.com/llapenna/vps-logger-bot/compare/1.1.0...1.2.0) (2023-10-16)


### Bug Fixes

* add async/await to message and location broadcasting ([5791a3e](https://github.com/llapenna/vps-logger-bot/commit/5791a3ef71a9dd7f2bab7933bae06db3ba4405a1))
* log env variable checking only in dev mode ([23f2391](https://github.com/llapenna/vps-logger-bot/commit/23f23916efe9ae0416beec11a89be328172bc98f))
* log geolocation fetching information ([7987baf](https://github.com/llapenna/vps-logger-bot/commit/7987baf73fb17f1e6a64acd49a27d340d59bfc08))
* update usage of inline keyboard generation ([ede89be](https://github.com/llapenna/vps-logger-bot/commit/ede89be5bcd70313731bc75d56bc8dfcad3e8e10))


### Features

* add button handler to main registering function ([2e80deb](https://github.com/llapenna/vps-logger-bot/commit/2e80debf46866d937abf6d85075c6dd1efe6c36d))
* add data to each button callback ([25e1b60](https://github.com/llapenna/vps-logger-bot/commit/25e1b602b3cffda7d910a2c2e2047ecac7334916))
* add inline keyboard typing ([75e9445](https://github.com/llapenna/vps-logger-bot/commit/75e9445cb967360f08bc0e40bd257abe16d7a11a))
* add ip confirmation buttons ([e139d43](https://github.com/llapenna/vps-logger-bot/commit/e139d430814ec01693ed1d7989d16fd7414e9b6b))
* add logging to db methods ([472f0e5](https://github.com/llapenna/vps-logger-bot/commit/472f0e51b21516ce072178423dd3ef61ffbe78d0))
* add whitelist ip push to chat database methods ([609f9d3](https://github.com/llapenna/vps-logger-bot/commit/609f9d3a42aad7a96f100035eb3130347d0d25a1))
* add whitelist ips to the database ([0769798](https://github.com/llapenna/vps-logger-bot/commit/0769798d31be05b3188662206d505ce1aeda5462))
* create generic button callback handler ([4123a8a](https://github.com/llapenna/vps-logger-bot/commit/4123a8afc170ad12835234932965e3b14e6320ab))
* improve confirmation keyboard ([81e3862](https://github.com/llapenna/vps-logger-bot/commit/81e3862ea6888707519ac7150b839ea0a3a10a9c))
* improve logging in chat whitelist IP method ([5ed863b](https://github.com/llapenna/vps-logger-bot/commit/5ed863b15c5ce3db2f14f0274c4ec8fd688ffdf5))
* improve logging to bot button handlers ([8da36d4](https://github.com/llapenna/vps-logger-bot/commit/8da36d4403ef3b49de69caa0f3c3c272589caa14))
* improve logging to bot command methods ([56d10b7](https://github.com/llapenna/vps-logger-bot/commit/56d10b78fdfb790fd0d8db0f1580b0ebef318fc6))
* improve logging to broadcast methods ([fdea1f2](https://github.com/llapenna/vps-logger-bot/commit/fdea1f2468f1f52cf41515d16e0a6d90d794c287))
* remove inline keyboard after being clicked ([be70582](https://github.com/llapenna/vps-logger-bot/commit/be705828fa702763fffeab932697af36611117dd))
* send confirmation buttons to broadcasted messages ([fc5885a](https://github.com/llapenna/vps-logger-bot/commit/fc5885a50e84b7b11a30d1989b25c56bcf94add1))
* use ip in getBroadcastList method ([dfd6b9b](https://github.com/llapenna/vps-logger-bot/commit/dfd6b9b6935c4279041eba3bd996d19a8a24a48b))

# [1.1.0](https://github.com/llapenna/vps-logger-bot/compare/1.0.0...1.1.0) (2023-10-13)


### Bug Fixes

* remove duplicated db code ([26d90e9](https://github.com/llapenna/vps-logger-bot/commit/26d90e969b39132777efda59085ec4c5a54e5c5e))
* remove extension from install sed script ([d8ad700](https://github.com/llapenna/vps-logger-bot/commit/d8ad70051a013af00ca05d935436e8328ec3532b))
* remove unsupported hyphen from command definition ([3ec2c82](https://github.com/llapenna/vps-logger-bot/commit/3ec2c82d560b1c050e45bab3b0820767c8ed7d53))
* rename message asset file with response ([9c97d0b](https://github.com/llapenna/vps-logger-bot/commit/9c97d0b7632d31d3b5bc0833c91e57dd5ef60e7e))
* rename response asset import and typing ([c92e981](https://github.com/llapenna/vps-logger-bot/commit/c92e981fbd2acbc67726e7a27212859f1d7f5339))
* set correct start file for service ([6966ee5](https://github.com/llapenna/vps-logger-bot/commit/6966ee5f7e1d3c632086e0f44ce0599fa6a5c113))


### Features

* add broadcast flag to db chats methods ([c51aa22](https://github.com/llapenna/vps-logger-bot/commit/c51aa227dbd85aa39de5030ec8c7e427f3b10c62))
* add database creation method ([8506804](https://github.com/llapenna/vps-logger-bot/commit/8506804cdb6c72b4522f9ea7be5e5eefd16182f5))
* add database fields typing ([ffe52e4](https://github.com/llapenna/vps-logger-bot/commit/ffe52e4891620628eb7d629da6e3718743a1996c))
* add emoji flag generation ([be852e5](https://github.com/llapenna/vps-logger-bot/commit/be852e5ee8d6aa9b589ebc885bebd3a18d446e56))
* add geolocation API response typing ([91d4840](https://github.com/llapenna/vps-logger-bot/commit/91d48409c17f488b9d8252adc95ceed5eae42512))
* add HTML formatting to response messages ([4ebff0c](https://github.com/llapenna/vps-logger-bot/commit/4ebff0c358e1692b159e093827f0e2965bcc9ee3))
* add initial database values ([777c488](https://github.com/llapenna/vps-logger-bot/commit/777c488a0336f6f9f4bd72a1b4a8a7e14ce2eb57))
* add message formatting utils ([a4d8f3d](https://github.com/llapenna/vps-logger-bot/commit/a4d8f3d11690bf2fe1ee3b55621955aac0840731))
* add NODE_ENV as a config variable ([10a713d](https://github.com/llapenna/vps-logger-bot/commit/10a713d7c71a18c0a17fccfe20633f5946fe2260))
* add PROJECT_PATH env variable to use along db ([57c986f](https://github.com/llapenna/vps-logger-bot/commit/57c986f57d620083cdf7740c2e30d55361795486))
* add support for list of users in chat db method ([deaf0f1](https://github.com/llapenna/vps-logger-bot/commit/deaf0f16983f6bea521e6ae752c77d6aecacd08c))
* add toggle broadcast chat db method ([5c37c8e](https://github.com/llapenna/vps-logger-bot/commit/5c37c8e6a0674dd6b31f78896a0fb2eace759a5b))
* add vps user array to chat db  type ([c63e3e0](https://github.com/llapenna/vps-logger-bot/commit/c63e3e07206fe2c25453b0113c59c8af1268577c))
* add vps user chat db method ([db96525](https://github.com/llapenna/vps-logger-bot/commit/db965252f3bcdd999d08dcd34c6b77875ddea1f0))
* allow sending messages using markdown ([c9deefc](https://github.com/llapenna/vps-logger-bot/commit/c9deefcccd4fb98bbd8400b6ea8e507624801c14))
* convert line processing method to async ([237faf2](https://github.com/llapenna/vps-logger-bot/commit/237faf245e26067fe08efd02666d9c4df4d577b1))
* create addvps method to chat db ([17904c6](https://github.com/llapenna/vps-logger-bot/commit/17904c65e9b882c18840b09d90f894dbaea9724d))
* create broadcast list retrieval based in vps user ([a21a9ce](https://github.com/llapenna/vps-logger-bot/commit/a21a9ce4d54c592e41793a72c1224bf71550f991))
* create chat db implementation ([11dbc34](https://github.com/llapenna/vps-logger-bot/commit/11dbc3478132198d68f0371b2eb5541527e19354))
* create database typing ([b1e7002](https://github.com/llapenna/vps-logger-bot/commit/b1e70020e32786d460804acb47f79aa33b7e2aba))
* create db instance depending on node env ([4b6f057](https://github.com/llapenna/vps-logger-bot/commit/4b6f057a6ab5bcbc1a1289d607b795e30f2ac128))
* create generic message processing method ([16d364e](https://github.com/llapenna/vps-logger-bot/commit/16d364eaad5f5d2f8ab46891e666eef21a705b54))
* create geolocation append method ([e8141ff](https://github.com/llapenna/vps-logger-bot/commit/e8141ff3c512f377b22a61f8888410f061ce9b6b))
* create ipInfo service implementation ([1e8a506](https://github.com/llapenna/vps-logger-bot/commit/1e8a5067d3ba1a5e14867565d95361416f4ca2e8))
* create telegram getArgs method ([c7cccd1](https://github.com/llapenna/vps-logger-bot/commit/c7cccd16e11c0363c993e95f47c882b9283059e3))
* create toggle log command ([af1b1a2](https://github.com/llapenna/vps-logger-bot/commit/af1b1a23fec4657882d0ed4489023f5acac9e6b7))
* create whitelist command ([06a5a36](https://github.com/llapenna/vps-logger-bot/commit/06a5a365a89485630ab53ce9d023a2d641a7ca4a))
* extract ([fa0d207](https://github.com/llapenna/vps-logger-bot/commit/fa0d2074078146cfa76b5045f0413d59437936db))
* implement CRUD operations for database fields ([61d1397](https://github.com/llapenna/vps-logger-bot/commit/61d13970524870aa9bbd24589bb6849414de77ed))
* improve chat db methods ([1eabe99](https://github.com/llapenna/vps-logger-bot/commit/1eabe993259ba66a74ba91387c92f17ee6ecaedd))
* improve database initialization by checking for db file ([6d31a5a](https://github.com/llapenna/vps-logger-bot/commit/6d31a5abb1a76b94807774f46e434627b6419515))
* improve line processing by adding geolocation ([31ca1ff](https://github.com/llapenna/vps-logger-bot/commit/31ca1ff17086e8d64701d8b480fa9b4408f35f9f))
* improve log command by supporting args ([f27571f](https://github.com/llapenna/vps-logger-bot/commit/f27571f4d990fcb8462d647e005bf3ad631fdf04))
* improve reply messages within log command ([0e16f67](https://github.com/llapenna/vps-logger-bot/commit/0e16f6748ecdedfcaeb50f28d9de4ea1c238c3cb))
* initialize database on start ([af759a2](https://github.com/llapenna/vps-logger-bot/commit/af759a295ec3deca74a624cc53decd05c981f03f))
* make Chat a separate type ([ef08bba](https://github.com/llapenna/vps-logger-bot/commit/ef08bbaa861421a9b3ba60c9742e02d050bb8378))
* move commands implementation to their own folders ([6c748c2](https://github.com/llapenna/vps-logger-bot/commit/6c748c27634972566173c6ca6c27fb96d395864a))
* move file utils functions ([04d667a](https://github.com/llapenna/vps-logger-bot/commit/04d667a8796d42a284aca7b1b4013dbf1fa57a45))
* rephrase log command reply message ([c2ee882](https://github.com/llapenna/vps-logger-bot/commit/c2ee8828d253a4103dcb46f401223b5ee36d9b2e))
* replace message implementation in bot start ([501dded](https://github.com/llapenna/vps-logger-bot/commit/501dded6c51d23135b7c1d13a8e82e20f9c44324))
* send location along the message ([7465198](https://github.com/llapenna/vps-logger-bot/commit/74651986777cfb2c80e6620e8beaa118095625db))
* update bot broadcast method to accept a list of chats ([c321945](https://github.com/llapenna/vps-logger-bot/commit/c321945e360d55905a0617f3f205fd520d219cc3))
* update response tokens structure ([60d670c](https://github.com/llapenna/vps-logger-bot/commit/60d670ca4ce06e583f8ffba8faf664ab0efd7a08))
* use database in bot log command ([2844f13](https://github.com/llapenna/vps-logger-bot/commit/2844f138ba6467d1df1b1c827cf9eb00860801c4))

# 1.0.0 (2023-10-03)


### Bug Fixes

* add logger method ([d3a1f96](https://github.com/llapenna/vps-logger-bot/commit/d3a1f96b8f8eed90fe59621300505a2a6b6337df))
* add missing environmetal var export ([6bee54e](https://github.com/llapenna/vps-logger-bot/commit/6bee54e9c59b2628085f8ff058097a1dc734f320))
* add processed message cheks when broadcasting msg ([c69afa5](https://github.com/llapenna/vps-logger-bot/commit/c69afa5b64af242f7ea0f5464f98ec06d83c164f))
* avoid sending empty message ([c806df0](https://github.com/llapenna/vps-logger-bot/commit/c806df02da608825511cdc54912afce9e31fe852))
* broadcast each line instead of the array ([2e310cf](https://github.com/llapenna/vps-logger-bot/commit/2e310cf1dabc3ca3dab7ebcd3a7d60c019eded5d))
* rename service file and replace sensitive values ([3bfeff5](https://github.com/llapenna/vps-logger-bot/commit/3bfeff5c70e1023fb2190f93c07d1f0c6080def8))
* replace exec start path ([80aa603](https://github.com/llapenna/vps-logger-bot/commit/80aa603d856af86ab321d249953d31cf4431202d))
* send processed message instead of new line ([9bafbf7](https://github.com/llapenna/vps-logger-bot/commit/9bafbf7a9a94db6bf81b9a13da5c5b42b8a76d19))


### Features

* add app initialization code ([04fb6f3](https://github.com/llapenna/vps-logger-bot/commit/04fb6f3cac932634e0fec806b56070d1f0f82e60))
* add build step to install script ([dc20c6d](https://github.com/llapenna/vps-logger-bot/commit/dc20c6de5bd2a791b917acf7892fd17ad50e67cf))
* add checkVariable method to enforce env variables ([080dd39](https://github.com/llapenna/vps-logger-bot/commit/080dd395bf29e504494ce6246cfa15eb658b52e6))
* add command handlers ([468fd99](https://github.com/llapenna/vps-logger-bot/commit/468fd994e3e578e6afcc66c08a0ea656418c4aa2))
* add commit-lint config ([e8fbc3d](https://github.com/llapenna/vps-logger-bot/commit/e8fbc3d2c308e6fc019a7b8e608ba50845a98e6a))
* add eslint and prettier ([8bf8ef8](https://github.com/llapenna/vps-logger-bot/commit/8bf8ef8ce809558b0882df312a8b9d769eca72ca))
* add file line counting utils functions ([6c69af3](https://github.com/llapenna/vps-logger-bot/commit/6c69af32bfef98307f9f93d90160765ddf8e5e4c))
* add handler for commands ([f89b8a9](https://github.com/llapenna/vps-logger-bot/commit/f89b8a91400f5fd2e298ae55cecf7eec45cc4c92))
* add husky hook ([b613963](https://github.com/llapenna/vps-logger-bot/commit/b613963d5650287a55f98827da37bc75b26aa50e))
* add logging when the message is not relevant ([1aa289d](https://github.com/llapenna/vps-logger-bot/commit/1aa289df1638eaeba352d158639ab5918a11a27e))
* add method to send a message to whitelisted users ([74929a4](https://github.com/llapenna/vps-logger-bot/commit/74929a4de44df65b55d6cdf34f7fe4737c9b5318))
* add more env variables to env.template ([5118d15](https://github.com/llapenna/vps-logger-bot/commit/5118d15d91d9fdee569a9d51545791dee7bf965d))
* add new env variable to template ([7d19635](https://github.com/llapenna/vps-logger-bot/commit/7d19635710a79ece8d5b9f709bdd20fb4e674bbe))
* add pre-made messages ([cdd6de5](https://github.com/llapenna/vps-logger-bot/commit/cdd6de50e8558fd8f86673fc552377209940da67))
* add prefix to logger ([25a93c3](https://github.com/llapenna/vps-logger-bot/commit/25a93c3a99bb891161caeccd29a83d19bbf3c2f0))
* add release-it config ([4706cb9](https://github.com/llapenna/vps-logger-bot/commit/4706cb98fcf9ecab03a8e0bbfdd05f88a7b0ccce))
* add reload daemon and start service to script ([1993043](https://github.com/llapenna/vps-logger-bot/commit/19930430e4a55284d293c3dce51314fd1501f388))
* add start script ([67257e6](https://github.com/llapenna/vps-logger-bot/commit/67257e63a9f398d45ae3081c88fecb0752ab3f9d))
* add starting commands ([411f192](https://github.com/llapenna/vps-logger-bot/commit/411f19261708657a1e9947b2f7dbc23e69d4887d))
* add systemd service file ([268dc38](https://github.com/llapenna/vps-logger-bot/commit/268dc389315adc06f3f0438f852ed3f74f90d8c8))
* add types folder and path to tsconfig ([0639722](https://github.com/llapenna/vps-logger-bot/commit/063972223b44b2d4320b809a07d17a980d65a35b))
* add watcher method ([a7ba5f7](https://github.com/llapenna/vps-logger-bot/commit/a7ba5f770feb63dcd58de93334e4d9b5e3928a39))
* add whitelist object ([59de627](https://github.com/llapenna/vps-logger-bot/commit/59de6276beb524d3881705adf8007503a760d0be))
* add whitelist type ([0b3abbc](https://github.com/llapenna/vps-logger-bot/commit/0b3abbc1d24b34b5f63eb8f1a112ec415790ce32))
* check for empty message or processed message ([6ad7848](https://github.com/llapenna/vps-logger-bot/commit/6ad78480c90ed09b0385731b08873423ebc9d474))
* create "install service" script ([f36b50e](https://github.com/llapenna/vps-logger-bot/commit/f36b50ecc5def836c753156a82a833e128fd63e1))
* create bot controls methods ([033fc2c](https://github.com/llapenna/vps-logger-bot/commit/033fc2c78aebea0fc72ff352f50e967214570668))
* create message processing methods ([d47ca0e](https://github.com/llapenna/vps-logger-bot/commit/d47ca0ef36f89e911fbcefe6247a59c74de1b98a))
* create service file var in install script ([c98d471](https://github.com/llapenna/vps-logger-bot/commit/c98d4710dfb37d012dda6bf5520b318731de8871))
* improve bot service template ([9a2e6ae](https://github.com/llapenna/vps-logger-bot/commit/9a2e6ae435c7b9435c9dbb68fd1658d6d20bb221))
* improve line processment into message ([ae04822](https://github.com/llapenna/vps-logger-bot/commit/ae048228ad8da10ea4641e3ab9cedf39c8c79e53))
* improve logging ([513fe53](https://github.com/llapenna/vps-logger-bot/commit/513fe537fa156a7b53a7af1025ba8a86a4d71e3c))
* improve message extraction and formatting ([8962a33](https://github.com/llapenna/vps-logger-bot/commit/8962a33ba53d377bf57667c226d021e7a6e4057f))
* improve service template ([d1e1064](https://github.com/llapenna/vps-logger-bot/commit/d1e1064a0c4aa172ba13b470a1a9f5351cd07ff5))
* improve service template file ([fe7b9cc](https://github.com/llapenna/vps-logger-bot/commit/fe7b9cc7faae7f64cbaa3581c263f096b7e36a56))
* improve SIGTERM and SIGINT handling ([d3448ba](https://github.com/llapenna/vps-logger-bot/commit/d3448baf2c8009bd8062af39b751bef48a8ffe8b))
* improve watcher callback type ([0bc4c22](https://github.com/llapenna/vps-logger-bot/commit/0bc4c22a3be723df32caf7c0bd615fd245dd4c7c))
* initialize line count and get new lines in watcher event ([6e9c28e](https://github.com/llapenna/vps-logger-bot/commit/6e9c28e16608237b772c54b29cb1c476d7491ffc))
* move bash scripts to its own folder ([810cae0](https://github.com/llapenna/vps-logger-bot/commit/810cae09119563e994efd8885b276da1be0cb856))
* **poc:** add priority levels to console logs ([ac2fff0](https://github.com/llapenna/vps-logger-bot/commit/ac2fff018c087148ef5a9d6d0950b14cfeb97118))
* refactor message list json file ([fc1147d](https://github.com/llapenna/vps-logger-bot/commit/fc1147d7bad491b691bfa1f9b39c60aabbd08e4b))
* replace fs watch with chokidar watch ([49f18e6](https://github.com/llapenna/vps-logger-bot/commit/49f18e644bce48aa734825cd88e05a1e809642fe))
* update watcher callback typing ([0540922](https://github.com/llapenna/vps-logger-bot/commit/05409222b0790e7005fb88ed5cb62c1871a8383e))