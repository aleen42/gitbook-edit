## github-edit

![gitbook](https://camo.githubusercontent.com/cf48327b2fdeec4a1f072204f8868f25865b39ac/68747470733a2f2f7261776769742e636f6d2f616c65656e34322f6261646765732f6d61737465722f7372632f676974626f6f6b2e737667) [![Pay](https://img.shields.io/badge/%24-free-%23a10000.svg)](#) [![GitHub issues](https://img.shields.io/github/issues/aleen42/gitbook-edit.svg)](https://github.com/aleen42/gitbook-edit/issues) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/aleen42/gitbook-edit/master/LICENSE) [![Gitter](https://badges.gitter.im/aleen42/gitbook-edit.svg)](https://gitter.im/aleen42/gitbook-edit?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

[![npm](https://img.shields.io/npm/v/gitbook-plugin-github-edit.svg)](https://www.npmjs.com/package/gitbook-plugin-github-edit) [![npm](https://img.shields.io/npm/dt/gitbook-plugin-github-edit.svg)](https://www.npmjs.com/package/gitbook-plugin-github-edit)

a gitbook plugin for providing a button on the toolbar for readers to edit your github projects

![gitbook-edit](https://github.com/aleen42/gitbook-edit/raw/master/preview.png)

#### Installation

add the following plugins to your `book.json` and run `gitbook install`

```json
{
    "plugins": ["github-edit"]
}
```

#### Usage

just find plugin on gitbook and install it on your gitbook project.

configuration option can be set as an obj like, and of course you can use a default value shown as followed:

```json
{
	"plugins": [
		"github-edit"
	],
	"pluginsConfig": {
		"github-edit": {
			"repo": "aleen42/PersonalWiki",
            "branch": "master"
		}
	}
}
```

#### Release History

* ==================== **1.0.4 Initial release** ====================
	* 1.0.5 update readme
	* 1.0.6 update readme

#### :fuelpump: How to contribute

Have an idea? Found a bug? See [how to contribute](https://aleen42.gitbooks.io/personalwiki/content/contribution.html).

#### :scroll: License

[MIT](https://aleen42.gitbooks.io/personalwiki/content/MIT.html) © aleen42

