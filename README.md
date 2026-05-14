<div align="center">

  <img src="./icon.png" width="256" height="256" alt="Indentier">

# @indentier/plugin-php

</div>

[![npm version](https://img.shields.io/npm/v/@indentier/plugin-php.svg?color=cb3837&logo=npm)](https://www.npmjs.com/package/@indentier/plugin-php)
[![CI](https://github.com/indentier/plugin-php/actions/workflows/ci.yml/badge.svg)](https://github.com/indentier/plugin-php/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)

> PHP support for [Indentier](https://github.com/indentier/indentier).

Full documentation: **[indentier.github.io](https://indentier.github.io)**

## Install

```sh
npm i -D indentier @indentier/plugin-php
```

## Setup

```jsonc
// .indentierrc.json
{
  "plugins": ["@indentier/plugin-php"]
}
```

<!-- prettier-ignore -->
| | |
|-|-|
| Language | PHP |
| Extensions | `.php` |
| Ruby mode | Yes — injects `$end=null;`; end statement: `$end` |

## License

[MIT](./LICENSE) © otoneko.
