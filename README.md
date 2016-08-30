# Google Analytics Plugin: Clean URLs [![Build Status](https://travis-ci.org/MethodGrab/ga-clean-urls.svg?branch=master)](https://travis-ci.org/MethodGrab/ga-clean-urls) [![npm](https://img.shields.io/npm/v/ga-clean-urls.svg)](https://www.npmjs.com/package/ga-clean-urls) ![File Size](http://img.badgesize.io/methodgrab/ga-clean-urls/master/index.min.js.svg?compression=gzip)
> A plugin for Google Analytics to remove UTM query strings from URLs


This plugin is heavily inspired by Wistia's [Fresh URL](https://wistia.com/blog/fresh-url) [library](https://github.com/wistia/fresh-url) but I wanted something more minimal so I've implemented its core functionality as a [Google Analytics plugin](https://developers.google.com/analytics/devguides/collection/analyticsjs/writing-plugins).

Before:
```
https://example.com/article/?utm_source=twitter&utm_medium=tweet&utm_campaign=website&foo=bar
```

After:
```
https://example.com/article/?foo=bar
```

---

### Warning:
This module is pre-1.0 and has not been thoroughly tested. Please test it yourself before using it in a production environment. Bugs can be reported on the [issue tracker](https://github.com/methodgrab/ga-clean-urls/issues).

---

## Install
```bash
npm install --save ga-clean-urls
```


## Usage
The plugin must be loaded **after** the 'pageview' send so the UTM parameters are tracked correctly.

```html
<script>
	ga( 'create', 'UA-XXXXX-Y', 'auto' );
	ga( 'send', 'pageview' );

	// Require the plugin after 'pageview' send
	ga( 'require', 'cleanUrls' );
</script>

<script async src="/path/to/ga-clean-urls/index.min.js"></script>
```


## Browser support
IE10+.  

The plugin uses `history.replaceState` to manipulate the URL, if the browser does not support `history.replaceState` then it shouldn't cause any problems but the URL will remain unchanged.  
See http://caniuse.com/#feat=history for detailed browser support.


## Todo
- [ ] Add tests
