# Oficial Documentation of ERP Consultores y Asociados, C.A.

[![Original Author: Mr.Hope](https://img.shields.io/badge/Author-Mr.Hope-blue.svg?style=for-the-badge)](https://mrhope.site)
[![License](https://img.shields.io/github/license/mister-hope/mister-hope.github.io?style=for-the-badge)](https://github.com/Mister-Hope/Mister-Hope.github.io/blob/master/LICENSE)
[Maintainer](https://github.com/yamelsenih)

A community page [VuePress](https://v2.vuepress.vuejs.org/) and [VuePress Theme Hope](https://vuepress-theme-hope.github.io/v2/) forked from [Mister-Hope (Thanks)](https://github.com/Mister-Hope/Mister-Hope.github.io)

The collection includes a number of books covering the main topics of:

- Functional Guide (**Generated automatically from ADempiere**)

# More References

- The official page is in: https://erpya.com
- The official Wiki is in: http://docs.erpya.com
- If you need report a bug see: https://github.com/erpcya/docs

![Discord](https://img.shields.io/discord/876231677209374750)

[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/adempiere/adempiere?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

## Requirements

- [Node 14x or later](https://nodejs.org/en/)

A easy way for install is using [NVM](https://github.com/nvm-sh/nvm#install--update-script)

## Running the docs
To build, you must first install the project dependencies by running: 

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
```

Then we install: 

```
nvm install 20
```

Then the manager: 

```
npm install -g pnpm@9.1.1
```

And to download the project packages:

```
pnpm install
```

Finally ready to run:

```
pnpm dev:vite
```