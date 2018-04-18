<h2 align="center">gitbook-edit</h2>

[![gitbook](https://aleen42.github.io/badges/src/gitbook_2.svg)](#) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/aleen42/gitbook-edit/master/LICENSE) [![Gitter](https://badges.gitter.im/aleen42/gitbook-edit.svg)](https://gitter.im/aleen42/gitbook-edit?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

**gitbook-edit** is a Gitbook plugin for providing a button on the toolbar for readers to edit their github projects.

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
	* 1.0.8 consider the case of using a `root` property
	* 1.0.9 fix the problem of getting wrong file path

#### :fuelpump: How to contribute

Have an idea? Found a bug? See [how to contribute](https://aleen42.github.io/PersonalWiki/contribution.html).

#### :scroll: License

[MIT](https://aleen42.github.io/PersonalWiki/MIT.html) © aleen42

