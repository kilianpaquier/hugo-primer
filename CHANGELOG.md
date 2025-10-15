## [1.0.4](https://github.com/kilianpaquier/hugo-primer/compare/v1.0.3...v1.0.4) (2025-10-15)

### Chores

* **deps:** update dependency @primer/view-components to v0.45.2 ([58f963c](https://github.com/kilianpaquier/hugo-primer/commit/58f963c43ac39c70b08fcfe8167d0675ee4d84f7))

## [1.0.3](https://github.com/kilianpaquier/hugo-primer/compare/v1.0.2...v1.0.3) (2025-10-13)

### Chores

* **deps:** update dependency @primer/view-components to v0.45.1 ([c6c182e](https://github.com/kilianpaquier/hugo-primer/commit/c6c182ee8212d52dab4bd8f2361e23d7ea2fce5a))
* **deps:** update dependency go to v1.25.2 ([181019e](https://github.com/kilianpaquier/hugo-primer/commit/181019ee110e87188486b22fefbfde5d448cc248))

## [1.0.2](https://github.com/kilianpaquier/hugo-primer/compare/v1.0.1...v1.0.2) (2025-10-04)

### Chores

* **deps:** update dependency @primer/primitives to v11.2.0 ([555748e](https://github.com/kilianpaquier/hugo-primer/commit/555748e0ba10b73e156ae8f2c65eeb344443ed9f))

## [1.0.1](https://github.com/kilianpaquier/hugo-primer/compare/v1.0.0...v1.0.1) (2025-09-22)

### Chores

* **deps:** update dependency dompurify to v3.2.7 ([7bc09b6](https://github.com/kilianpaquier/hugo-primer/commit/7bc09b667652040e6de36cb3ac62171cdab04284))

## 1.0.0 (2025-09-14)

### Features

* **home:** add pins ([45f6187](https://github.com/kilianpaquier/hugo-primer/commit/45f6187a84dadb2fea120d812aeb1083c7829f0d))
* init hugo-primer theme ([c8d41a4](https://github.com/kilianpaquier/hugo-primer/commit/c8d41a45bc17cf122ea37d2e9a9553deeb025a50))
* init project ([69b1c89](https://github.com/kilianpaquier/hugo-primer/commit/69b1c8963afda6b64665ededd75d4fda21a655ce))
* **shortcodes:** add various shortcodes to help developments ([ebcb4cd](https://github.com/kilianpaquier/hugo-primer/commit/ebcb4cda784408892be0fae073ea62778cee0867))

### Bug Fixes

* **addons:** allow custom styles file and fix instantpage missing ([57d7501](https://github.com/kilianpaquier/hugo-primer/commit/57d75019a5fe101144c664214d93ebc7d75853e7))
* **conf:** use two different params for navigation logo and profile logo ([1692834](https://github.com/kilianpaquier/hugo-primer/commit/16928343da20b243ff5938084b1e4b3bbc5fa84b))
* **flexbox:** add flex-items-center to force centering items horizontally with ActionListContent ([fb177f3](https://github.com/kilianpaquier/hugo-primer/commit/fb177f39d7cf9cd07169c4c0e88b135f464da3e8))
* **flexbox:** remove display: grid usage to avoid display issues on mobile ([38b9208](https://github.com/kilianpaquier/hugo-primer/commit/38b920855baaa8dc68bb1e95c1db12fbfa86100a))
* handle lighthouse issues ([02e41ef](https://github.com/kilianpaquier/hugo-primer/commit/02e41ef2fc654af7e4e1d98f88234122dcf342d9))
* **highlight:** remove highlight when nohighlight specified ([fdd52a6](https://github.com/kilianpaquier/hugo-primer/commit/fdd52a60dbf8736fcdf3b75f91ef4019b0e976b5))
* **home:** add fallback on icon for pinned elements ([c92b748](https://github.com/kilianpaquier/hugo-primer/commit/c92b74807bb7a24f1711f9eb9c4d4360c92f1deb))
* **links:** add security on _blank links opening ([6c78023](https://github.com/kilianpaquier/hugo-primer/commit/6c780237eee08002577647a3a02f7f1937fb83df))
* **list:** create link to section on tags page and allow reusing tags part in a partial ([200c0df](https://github.com/kilianpaquier/hugo-primer/commit/200c0df8f6a4cd53badcd5244a487be5a31fca38))
* **list:** order correctly elements with Hugo configuration ([c3f3fd4](https://github.com/kilianpaquier/hugo-primer/commit/c3f3fd4c2539854afbe5417e6760fc95d5bee99e))
* **logo:** remove lazyload ([c267d00](https://github.com/kilianpaquier/hugo-primer/commit/c267d00b6a3d921e98c410d0e414946efce91d97))
* **nav:** compute more precisely navigation items width to only show overlay menu when really necessary ([d820ac2](https://github.com/kilianpaquier/hugo-primer/commit/d820ac2f3f4244ccf676898410a38f53bbace90a))
* **nav:** improve how menu are shown / hidden by using their real width without mean ([c1a3b3d](https://github.com/kilianpaquier/hugo-primer/commit/c1a3b3dc7b412815f98f6f09b591775935e378de))
* **nav:** invalid function to retrieve button and overlay ([0c5caf9](https://github.com/kilianpaquier/hugo-primer/commit/0c5caf96797a512bbb216eb958c7f3726ff6effa))
* **nav:** take whole width on pages ([8029673](https://github.com/kilianpaquier/hugo-primer/commit/80296731dae6fb2a13741ff1da1588a7b353c91d))
* **profile:** correctly print imagesrcset for preload logo ([f6839bf](https://github.com/kilianpaquier/hugo-primer/commit/f6839bfbd66e1f2d7e050e265b08e2cc8ce04073))
* **search:** force focus on search ([a989a73](https://github.com/kilianpaquier/hugo-primer/commit/a989a739426a0f3c2e591e4c7a873acc2714cac1))
* **search:** plainify text when HTML isn't supported ([e7d5d46](https://github.com/kilianpaquier/hugo-primer/commit/e7d5d46854f9dd6ad29c2e77db4e5e9feece88ef))
* **single:** check specifically first title headings to show (or not) headings ([8c8f05c](https://github.com/kilianpaquier/hugo-primer/commit/8c8f05c05938ee8bdb114c79d32ad6a896cd0af4))
* **svg:** remove octicon class by default ([5dc8943](https://github.com/kilianpaquier/hugo-primer/commit/5dc89430347c27d6f1cbb62969408d79055d6557))
* **timeline:** unnecessayr z-index on badge ([f3891e4](https://github.com/kilianpaquier/hugo-primer/commit/f3891e427e55a56a01d0fc87f16d62405eb9d0e1))

### Documentation

* **archetypes:** update default description for awareness purposes ([7acfdb0](https://github.com/kilianpaquier/hugo-primer/commit/7acfdb010225b504aec1b415ba59001d6c8b4c4c))
* **shortcode:** add related pages and improve shortcodes on the way ([f4c1ff8](https://github.com/kilianpaquier/hugo-primer/commit/f4c1ff8dee95860be2be9d48363b60919c24f0d3))
* suggest `_merge` key instead of duplicate `markup` or `outputs` properties ([766655b](https://github.com/kilianpaquier/hugo-primer/commit/766655b1f57623203bbaf46ae715839c7d21d96f))

### Chores

* add theme notice ([80b7640](https://github.com/kilianpaquier/hugo-primer/commit/80b76403a69d96fefc48e6a9c424c7654f70ab56))
* **css:** set manipulation as touch-action ([6bd7c59](https://github.com/kilianpaquier/hugo-primer/commit/6bd7c59957b100613835174dcb034b4c1f8ff730))
* **css:** use up-to-date Primer css classes ([a6f7f0e](https://github.com/kilianpaquier/hugo-primer/commit/a6f7f0e026c3d845a0d7a6ba311efe55d23317b4))
* **deps:** update dependency @primer/css to v21.5.1 ([579fae2](https://github.com/kilianpaquier/hugo-primer/commit/579fae244d2bac87cde7e85dd7797d064efbaa69))
* **deps:** update dependency @primer/css to v22 ([8f41877](https://github.com/kilianpaquier/hugo-primer/commit/8f41877d6d0db34b4b0005900a45ec3cad35ae75))
* **deps:** update dependency @primer/primitives to v11 ([3738c49](https://github.com/kilianpaquier/hugo-primer/commit/3738c495df97494a2bbf7dff58eba68afd2bff57))
* **deps:** update dependency @primer/view-components to v0.44.1 ([#23](https://github.com/kilianpaquier/hugo-primer/issues/23)) ([3f26e8e](https://github.com/kilianpaquier/hugo-primer/commit/3f26e8ea0e95ee8f7e98c7a7664696e1396951dc))
* **deps:** update dependency go to v1.25.1 ([#22](https://github.com/kilianpaquier/hugo-primer/issues/22)) ([e0068c4](https://github.com/kilianpaquier/hugo-primer/commit/e0068c41db25e768bc574178af281fa00715df93))
* **deps:** upgrade dompurify version ([16a02cb](https://github.com/kilianpaquier/hugo-primer/commit/16a02cb94dffc40d30c443ebb7763181b5b31731))
* **dompurify:** load it synchronously at page load ([d2417ae](https://github.com/kilianpaquier/hugo-primer/commit/d2417aeaee1c14866ff30b80d6b8346c222395af))
* **footer:** add inspiration in notices ([03733e0](https://github.com/kilianpaquier/hugo-primer/commit/03733e0d3b9c01865f46420af0b253cf08ecd731))
* **footer:** update format to be more close GitHub style ([99c954d](https://github.com/kilianpaquier/hugo-primer/commit/99c954d7582e811fdfc372cdde8708d99a8857b6))
* **footer:** update notices and global footer format ([d7c8e97](https://github.com/kilianpaquier/hugo-primer/commit/d7c8e9795d771f2fad9629232caf711ea301346f))
* **img:** add srcset and sizes to shortcode ([5e7c3f9](https://github.com/kilianpaquier/hugo-primer/commit/5e7c3f9a00cddb594c3ee917bfad32a0daa575c4))
* improve accessibilty and increase gap between side profile image and title ([f466bc9](https://github.com/kilianpaquier/hugo-primer/commit/f466bc9a11af45b9bcd133711804f4b923a91a11))
* improve walkthrough pages ([9d46e0a](https://github.com/kilianpaquier/hugo-primer/commit/9d46e0a36d11b0ecad2ec9e582a9bdbf48020017))
* **langs:** add border radius around pre icons ([8b84634](https://github.com/kilianpaquier/hugo-primer/commit/8b84634568356abd0b6c55808e9a528b9f76e1b6))
* **layouts:** move _default layouts to root layouts following Hugo v0.146 ([719a7fe](https://github.com/kilianpaquier/hugo-primer/commit/719a7fe2dff8f8ca7a8b07b17ba561c8bcd4cee6))
* **list:** allow overriding link pages to avoid empty single pages ([f4d465c](https://github.com/kilianpaquier/hugo-primer/commit/f4d465ca47ba082a99c273943b3082d397c3d22b))
* **list:** show on tags associated with shown section ([b3d25e3](https://github.com/kilianpaquier/hugo-primer/commit/b3d25e3c2946a19efa04623f2ec1f046d9a98637))
* **list:** show pages section as flag on /tags/:slug and show all tags ([8574d0f](https://github.com/kilianpaquier/hugo-primer/commit/8574d0f8d6cb04c596b4380ce137b922fb9e1a70))
* **nav:** increase space for overlay button ([0905901](https://github.com/kilianpaquier/hugo-primer/commit/0905901aff249f15bf21727c966f6e2eebc19abd))
* **partial:** rename files to be more explicit in namings ([0a1c56e](https://github.com/kilianpaquier/hugo-primer/commit/0a1c56e03eb2a7a4c1b1ee7f8004d7c801915f89))
* **profile:** increase priority of profile logo loading ([9c67ac1](https://github.com/kilianpaquier/hugo-primer/commit/9c67ac163697b6a9b3189cdcb21796a341fc143c))
* **search:** allow external links as search results while keeping a little security ([a7e6b81](https://github.com/kilianpaquier/hugo-primer/commit/a7e6b8196754840ea799d9bcbf37ed41f73b68e5))
* **search:** remove useless fields ([8fbe82f](https://github.com/kilianpaquier/hugo-primer/commit/8fbe82f10106fe3cfeb8385951ad9b369fac36cb))
* **single:** allow disabling ToC (headings) ([2d78d48](https://github.com/kilianpaquier/hugo-primer/commit/2d78d4870a2c10c1d360d09767441898cfaf84ca))
* **single:** show headings without styles ([5874e5a](https://github.com/kilianpaquier/hugo-primer/commit/5874e5a90615f454722098b93a227e8aad4abee5))
* **svg:** remove all titles to avoid unnecessary tooltips, tooltips should be made with specific HTML tag from Primer ([532fcd6](https://github.com/kilianpaquier/hugo-primer/commit/532fcd6faa0014056b3e757f0f406d229df1efc7))

### Code Refactoring

* **profile:** ensure profile logo takes responsive image configuration ([a3fab52](https://github.com/kilianpaquier/hugo-primer/commit/a3fab52d06440311cac2bbdb1e8f1f0829061f85))
* **wait:** update JS function to allow loading various selector while handling specifically IDs with getElementById ([1b50058](https://github.com/kilianpaquier/hugo-primer/commit/1b5005815144edd5dee7687a06ccedd43e7312d2))
