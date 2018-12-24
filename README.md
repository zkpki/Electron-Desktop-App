# ZKpki

Desktop app for ZKpki

## Technologies included

- [Electron Forge](https://electronforge.io/)
    - The command line interface for ambitious Electron applications.
- [webpack](https://webpack.js.org/)
    - A bundler for javascript and friends.
- [React JS](https://reactjs.org/)
    - A JavaScript library for building user interfaces.
- [React Router](https://reacttraining.com/react-router/)
    - Declarative routing for React.
- [Ant Design](https://ant.design/)
    - A design system with values of Nature and Determinacy for better user experience of enterprise applications.

## Usage:

Start development mode:
```bash
$ npm start
```

Create package for the current platform:
```bash
$ npm run build
```

Build for Mac OSX: (only works on Mac)
```bash
$ npm run make:mac
```

Build for Linux (deb and dpkg): (works on Linux or Mac)
```bash
$ npm run make:linux
```

Build for Windows: (only works on Windows)
```bash
$ npm run make:windows
```

_For a complete list of *Electron Forge* options and requirements, visit the [official docs](https://github.com/electron-userland/electron-forge#usage)._

