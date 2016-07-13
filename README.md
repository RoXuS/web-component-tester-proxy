Web-Component-Tester-Proxy
==========================

A minimal proxy plugin for web-component-tester

## Installation

```sh
npm install --save-dev web-component-tester-proxy
```

## Basic Usage

Add the following configuration to web-component-tester's config file.

## Example

To proxy URLS starting with '/api' to the host:

```js
module.exports = {
  plugins: {
    proxy: {
      routes: [
	 '/api': 'http://myapi',
      ]
    }
  }
}
```

## Options

Below are the available configuration options:

### routes

An array with the routes.
