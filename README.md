# Static Boilerplate

Static website generator PUG/SCSS/ES6

Work on **app/** folder and gulp build in **build/**.

## Installation

### Node version manager

Install [NVM](https://github.com/creationix/nvm)

Use the version 7.5.0 of NodeJS.

```
nvm use
```

### Install Sass

Go to [sass-lang.com/install](http://sass-lang.com/install) for installation in command line.

### Install Yarn

Got to [https://yarnpkg.com/docs/install](https://yarnpkg.com/docs/install/#mac-tab)

### Download the dependencies NPM

```
yarn install
```

## Gulp Tasks

### Run project

```
yarn run start
```

### Build project

```
yarn run build
```

### Clean project

```
yarn run clean
```

### Optimize for production

* Minify HTML
* Optimise images
* Optimise and minify scripts with webpack
* Optimise and minify styles with CSSO

## How the starter works

### Works with Pug templating

The PUG files are located in `./app/template`

* **layout** : layout of html files generated
* **mixin** : for reusable pattern
* **pages** : the content of html files generated
* **partial** : includes of html pattern
* **config.pug** : global variables

### Works with JavaScript

The Javascript files are located in `./app/assets/js`.

**Use the ES6 syntaxe** Babel convert it in ES5 for you via webpack.

### Working with Images

The Image files are located in `./app/assets/img`

Accepted file formats : - jpg - png - gif - svg

### Working with Fonts

The font files are located in `./app/assets/font`