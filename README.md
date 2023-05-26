# BMKTPT

A simple resources page for the Baltimore [Bun] Magic Kitchen Table Pro Tour. A
local Magic: The Gathering playgroup in Baltimore MD.

[visit http://bmktpt.com](http://bmktpt.com)

The site is built with [Gatsby](https://www.gatsbyjs.com), a static site
generator, and [React](http://reactjs.org).

## Prerequisites

-   [Node 18](https://nodejs.org/en/): [nvm](https://github.com/creationix/nvm)
    is recommended for installing and managing Node. After installing, run
    `$ nvm install` in this project directory.
-   [Yarn](https://classic.yarnpkg.com/en/docs/install) to install JavaScript
    dependencies.

## Setup

In the project directory, install dependencies with:

```sh
$ yarn install
```

See the [detailed setup instructions](documentation/setup.md) for more info and
troubleshooting.

## Development

Run the development server with:

```sh
$ yarn start
```

View the site in a browser at `http://localhost:8000`

### Validating and Formatting

A few tools are used to enhance and validate JavaScript. It's recommended to
install plugins for these in your text editor if available to validate and
format automatically.

-   [TypeScript](https://www.typescriptlang.org) is used to type check
    JavaScript. Run `$ yarn types:check` to check manually.
-   [Prettier](https://prettier.io) formats JavaScript and CSS, enforcing
    consistency and reducing incidental changes. Run `$ yarn format` to manually
    format, or `$ yarn format:check` to verify.
-   [ESLint](https://eslint.org) checks for some kinds of JavaScript errors and
    consistent style. Run `$ yarn lint` to manually check.

### Updating

After pulling changes, or when switching between branches with different
dependencies, update all installed dependencies with:

```sh
$ yarn install
```

## Cube List

The site includes a list of Cubes in the local playgroup. The list of cubes is
populated by [this yaml file](/src/data/cubes.yml). Images for Cubes can be
fetched from Cube Cobra with a script. Each record with a `link` will have an
`imageURL` injected into the file.

```sh
$ yarn run fetch-cube-images
```
