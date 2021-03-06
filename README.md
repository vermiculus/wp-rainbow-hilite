# WordPress Rainbow Hilite #

Includes [rainbow.js](http://craig.is/making/rainbows) a syntax highlighting script written by [Craig Campbell](http://craig.is/).
Line numbering through [rainbow.linenumbers](https://github.com/Sjeiti/rainbow.linenumbers) by [Ron Valstar](http://www.sjeiti.com/).

This is the development repository. If you just want to use the plugin you can find it in the <a href="http://wordpress.org/plugins/wp-rainbow-hilite/">WordPress plugin repository</a>.

## Developing ##

If you make changes in the js files you will have to recompile the minified script versions through [Closure compiler](https://developers.google.com/closure/compiler/).

In order to compile run `build.sh`, located in the plugins root directory:
```
	cd [WP_PLUGIN_DIRECTORY]/wp-rainbow-hilite/
	./build.sh
```

The script expects compiler to be present under `/usr/local/compiler-latest/compiler.jar`.
If for some reason the file is located somewhere else on your system you can change the `CLOSURE_COMPILER`
var in build.sh line 3.


## Plugin API ##

### Functions: ###
#### `wprainbow_get_available_languages()` ####

Will return a list of available language modules.

#### `wprainbow_get_available_themes()` ####

Will return a list of available colorsets.


### Filters: ###

#### `wprainbow_available_languages` ####

Filter available language names. Use this filter to add your own language madule.

Example:
```
	function add_chicken( $langauges ) {
		$langauges['chicken'] = __('Chicken');
		return $langauges;
	}
	
    add_filter('wprainbow_available_languages' , 'add_chicken' );
```

#### `wprainbow_language_module_url` ####

Filter URL of the rainbow language js module. Use this together with `wprainbow_available_languages` 
when adding your own languages.

Example:
```
	function chicken_js_url( $module_url , $language ) {
		if ( $language == 'chicken' )
			return plugins_url( "/js/chicken.js" , __FILE__ );
		return $module_url;
	}
	
    add_filter('wprainbow_language_module_url' , 'chicken_js_url' , 10 ,2 );
```

#### `wprainbow_available_themes` ####

Filter available Themes. Use this filter to add you own theme css.

Example:
```
	function add_fancy_theme( $themes ) {
		$themes['fancy'] = __('Fancy');
		return $themes;
	}
	
    add_filter('wprainbow_available_themes' , 'add_fancy_theme' );
```

#### `wprainbow_theme_url` ####

Filter URL of the theme css. Use this together with `wprainbow_available_themes`.
when adding your own theme.

Example:
```
	function fancy_theme_url( $theme_url , $theme_slug ) {
		if ( $theme_slug == 'fancy' )
			return plugins_url( "/css/fancy.css" , __FILE__ );
		return $theme_url;
	}
	
    add_filter('wprainbow_theme_url' , 'fancy_theme_url' , 10 , 2 );
```



