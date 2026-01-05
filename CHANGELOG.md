# Changelog

## 0.11.0 (2026-01-05)

Full Changelog: [v0.10.0...v0.11.0](https://github.com/rye-com/checkout-intents-sdk/compare/v0.10.0...v0.11.0)

### Features

* Fix Slack follow-up messages not posting to thread when initial message fails ([9ddb0c0](https://github.com/rye-com/checkout-intents-sdk/commit/9ddb0c0472846f4c3873673836133c8c3062fe0c))
* Improve JSDoc for checkout sessions ([1128b1e](https://github.com/rye-com/checkout-intents-sdk/commit/1128b1ee212e03c7b3e342e48a226b5022366dee))
* RYE-6466: Enrich tracked analytics context for the checkout intents api ([5751b96](https://github.com/rye-com/checkout-intents-sdk/commit/5751b96a721391ef1eeed9e12851046542a0f778))


### Chores

* **docs:** omit duplicate polling helpers section ([e717857](https://github.com/rye-com/checkout-intents-sdk/commit/e71785726d9a9c5d14ee04a23903c9a499d747f6))

## 0.10.0 (2025-12-25)

Full Changelog: [v0.9.0...v0.10.0](https://github.com/rye-com/checkout-intents-sdk/compare/v0.9.0...v0.10.0)

### Features

* **api:** add support for purchase constraints ([6e25de0](https://github.com/rye-com/checkout-intents-sdk/commit/6e25de0264f6090331b0e2feb83546d074c3f769))
* **api:** manual updates ([88426e0](https://github.com/rye-com/checkout-intents-sdk/commit/88426e0aeab2d276c5247904968c95c9286f585b))
* **api:** swap featured request ([ddab16e](https://github.com/rye-com/checkout-intents-sdk/commit/ddab16e0f62495246316480356d52131b77516d8))

## 0.9.0 (2025-12-22)

Full Changelog: [v0.8.0...v0.9.0](https://github.com/rye-com/checkout-intents-sdk/compare/v0.8.0...v0.9.0)

### Features

* **api:** support promo codes in purchase endpoint ([0e0be3d](https://github.com/rye-com/checkout-intents-sdk/commit/0e0be3da3317a1e0ba464dfd20dcb4eb4b69671d))

## 0.8.0 (2025-12-22)

Full Changelog: [v0.7.0...v0.8.0](https://github.com/rye-com/checkout-intents-sdk/compare/v0.7.0...v0.8.0)

### Features

* Include `/purchase` endpoint in our SDKs + docs ([703e29c](https://github.com/rye-com/checkout-intents-sdk/commit/703e29ca8d573161ac5d1ade0990990e156aa2bb))

## 0.7.0 (2025-12-19)

Full Changelog: [v0.6.1...v0.7.0](https://github.com/rye-com/checkout-intents-sdk/compare/v0.6.1...v0.7.0)

### Features

* **api:** add applied promo codes to offer ([3e29b07](https://github.com/rye-com/checkout-intents-sdk/commit/3e29b0707169acb8991a5202c0ec82e25c295a7f))


### Bug Fixes

* **ci:** accomodate for oidc auth ([d195ae5](https://github.com/rye-com/checkout-intents-sdk/commit/d195ae5fd4d4daffb5dee96bcd71eb6f1c12f61f))

## 0.6.1 (2025-12-19)

Full Changelog: [v0.6.0...v0.6.1](https://github.com/rye-com/checkout-intents-sdk/compare/v0.6.0...v0.6.1)

### Chores

* **ci:** add required oidc permissions ([410d636](https://github.com/rye-com/checkout-intents-sdk/commit/410d636b0ba5e589cae41a803ebf3ee4e6ddf968))

## 0.6.0 (2025-12-18)

Full Changelog: [v0.5.1...v0.6.0](https://github.com/rye-com/checkout-intents-sdk/compare/v0.5.1...v0.6.0)

### Features

* Add support for promo codes
* Add durable purchase workflow and supporting infrastructure ([a798e95](https://github.com/rye-com/checkout-intents-sdk/commit/a798e9546200291aa6c87ce841a3ee0d06a9f621))

## 0.5.1 (2025-12-06)

Full Changelog: [v0.5.0...v0.5.1](https://github.com/rye-com/checkout-intents-sdk/compare/v0.5.0...v0.5.1)

### Bug Fixes

* **mcp:** correct code tool API endpoint ([a4f494f](https://github.com/rye-com/checkout-intents-sdk/commit/a4f494f8e70c6dc716644f135a2ec826a505fb50))
* **mcp:** return correct lines on typescript errors ([28fe7a4](https://github.com/rye-com/checkout-intents-sdk/commit/28fe7a44793bae5bc2c1cf44a3f28199edd599db))


### Chores

* **client:** fix logger property type ([19bfa74](https://github.com/rye-com/checkout-intents-sdk/commit/19bfa742e76e04d9c3952bfb0521772c65024742))
* **internal:** codegen related update ([7f2b812](https://github.com/rye-com/checkout-intents-sdk/commit/7f2b81239366dd2953069d0d4486292beeaec178))
* **internal:** codegen related update ([729f68d](https://github.com/rye-com/checkout-intents-sdk/commit/729f68d7510e7411074b6209504bb1c57034299f))
* **internal:** upgrade eslint ([5508bda](https://github.com/rye-com/checkout-intents-sdk/commit/5508bda2e5dce1c4f34b84aa49106d279485e577))

## 0.5.0 (2025-11-18)

Full Changelog: [v0.4.0...v0.5.0](https://github.com/rye-com/checkout-intents-sdk/compare/v0.4.0...v0.5.0)

### Features

* Add python sdk target to stainless config ([d702c75](https://github.com/rye-com/checkout-intents-sdk/commit/d702c750099d8fcb9b09ea6933744e0374c00518))
* **api:** api update ([a868506](https://github.com/rye-com/checkout-intents-sdk/commit/a8685069c97d83c5d57eba825e9e1a9260b868d9))
* **api:** api update ([812d2a6](https://github.com/rye-com/checkout-intents-sdk/commit/812d2a66a0828504c0a4a76f680bcb185b09865d))


### Bug Fixes

* **docs:** supply valid buyer details ([e7b7598](https://github.com/rye-com/checkout-intents-sdk/commit/e7b75983b3f79479492664be74bbcaeefb3bfe33))


### Chores

* **api:** remove duplicate helper functions ([d5a1994](https://github.com/rye-com/checkout-intents-sdk/commit/d5a1994a2b9ffd269f3061d0b4097fb35e362ffc))

## 0.4.0 (2025-11-13)

Full Changelog: [v0.3.0...v0.4.0](https://github.com/rye-com/checkout-intents-sdk/compare/v0.3.0...v0.4.0)

### Features

* **api:** improve thrown poll timeout error ([2f2e006](https://github.com/rye-com/checkout-intents-sdk/commit/2f2e00623f04d241f6e212c1fa02b5d99e75184a))


### Chores

* **api:** improve maxAttempts value handling ([023b227](https://github.com/rye-com/checkout-intents-sdk/commit/023b227f3baf5428547921bcaed14977299035f9))


### Documentation

* **api:** add PollTimeoutError examples ([d294ae6](https://github.com/rye-com/checkout-intents-sdk/commit/d294ae64aded0d76e4f5ac8eede8780f06864bae))

## 0.3.0 (2025-11-06)

Full Changelog: [v0.2.0...v0.3.0](https://github.com/rye-com/checkout-intents-sdk/compare/v0.2.0...v0.3.0)

### Features

* **api:** add pollUntil helper functions ([f115fa0](https://github.com/rye-com/checkout-intents-sdk/commit/f115fa0d853763070b70c252e32339ccbd7b76e9))
* **api:** auto infer environment from api key ([3427e20](https://github.com/rye-com/checkout-intents-sdk/commit/3427e20153d52c5a1c4b1bbc6663efe7380c593a))


### Documentation

* **api:** add polling functions ([4335fd3](https://github.com/rye-com/checkout-intents-sdk/commit/4335fd3d71c146a593aaf05c24921e5aedb26ba7))

## 0.2.0 (2025-10-28)

Full Changelog: [v0.1.0...v0.2.0](https://github.com/rye-com/checkout-intents-sdk/compare/v0.1.0...v0.2.0)

### Features

* **api:** manual updates ([331e1d4](https://github.com/rye-com/checkout-intents-sdk/commit/331e1d4f5cad412b14ab65f34c7f2166137bcab1))
* **api:** manual updates ([f82341d](https://github.com/rye-com/checkout-intents-sdk/commit/f82341d4f7b134e1b8e63f98af7e88e6eee9ca0b))
* **api:** manual updates ([51267f5](https://github.com/rye-com/checkout-intents-sdk/commit/51267f5c6fa4e7e05a2ce0102a66df96e7f37129))
* **api:** manual updates ([098c026](https://github.com/rye-com/checkout-intents-sdk/commit/098c026df38d82b479ebdf0b3cdba0f704973fef))
* **api:** manual updates ([604f474](https://github.com/rye-com/checkout-intents-sdk/commit/604f474d6c2c78cf6b469e19ab0711e00b566017))


### Bug Fixes

* coerce nullable values to undefined ([7c8b73f](https://github.com/rye-com/checkout-intents-sdk/commit/7c8b73fdd2f14ec3a1f33e46e4cea315d35fa67e))


### Performance Improvements

* faster formatting ([801020b](https://github.com/rye-com/checkout-intents-sdk/commit/801020b43aa79c2e4c75affa174fd0cb6553f220))


### Chores

* ci build action ([b25e9a2](https://github.com/rye-com/checkout-intents-sdk/commit/b25e9a27a1475b541960731f04830044e7caf230))
* do not install brew dependencies in ./scripts/bootstrap by default ([1894473](https://github.com/rye-com/checkout-intents-sdk/commit/1894473dda990e25992fdcfc3660f001f602f11b))
* **internal:** codegen related update ([532b280](https://github.com/rye-com/checkout-intents-sdk/commit/532b28008e458d657cb05dc7f7c3497c9082b60d))
* **internal:** fix incremental formatting in some cases ([d68a4ef](https://github.com/rye-com/checkout-intents-sdk/commit/d68a4ef214f16c7764d617e0ce6785dccb1e9f26))
* **internal:** ignore .eslintcache ([2712360](https://github.com/rye-com/checkout-intents-sdk/commit/27123608348099f05997629c6f115766ee0c0288))
* **internal:** remove .eslintcache ([7b2fe5e](https://github.com/rye-com/checkout-intents-sdk/commit/7b2fe5e3c43b8c02abfd122182c61b00b9c96d9a))
* **internal:** remove deprecated `compilerOptions.baseUrl` from tsconfig.json ([56a2d07](https://github.com/rye-com/checkout-intents-sdk/commit/56a2d079855c28411cd87c738c9a4a4682ba8ca3))
* **internal:** use npm pack for build uploads ([3aafc7c](https://github.com/rye-com/checkout-intents-sdk/commit/3aafc7c407bc371c49a25ab13a29b43d164893db))
* **jsdoc:** fix [@link](https://github.com/link) annotations to refer only to parts of the package‘s public interface ([9e9f246](https://github.com/rye-com/checkout-intents-sdk/commit/9e9f2469a0a2d54aba24bde8eb98baf62daba976))

## 0.1.0 (2025-09-02)

Full Changelog: [v0.0.2...v0.1.0](https://github.com/rye-com/checkout-intents-sdk/compare/v0.0.2...v0.1.0)

### Chores

* update SDK settings ([1c193b7](https://github.com/rye-com/checkout-intents-sdk/commit/1c193b71beb39184275afa02639bc1249cd80540))

## 0.0.2 (2025-08-28)

Full Changelog: [v0.0.1...v0.0.2](https://github.com/rye-com/checkout-intents-sdk/compare/v0.0.1...v0.0.2)

### Chores

* update SDK settings ([2f2818c](https://github.com/rye-com/checkout-intents-sdk/commit/2f2818ce6846ab2cbdd1995857bfd0b77ae52e00))
