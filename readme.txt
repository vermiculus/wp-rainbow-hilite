=== WordPress Rainbow Hilite ===
Contributors: podpirate
Donate link: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=F8NKC6TCASUXE
Tags: code, syntax highlighting, rainbow, code
Requires at least: 3.8
Tested up to: 4.0-beta3
Stable tag: trunk
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Code syntax highlighting with <a href="http://craig.is/making/rainbows">rainbow.js</a>.

== Description ==

Code syntax Highlighting.

= Features: =
- Highlighted code can be copy-pasted directly out of the site. No "view raw" button needed.
- User friendly TinyMCE integration.
- Many programming languages supported.
- German translation.

Includes [rainbow.js](http://craig.is/making/rainbows) a syntax highlighting script written by [Craig Campbell](http://craig.is/).
Line numbering through [rainbow.linenumbers](https://github.com/Sjeiti/rainbow.linenumbers) by [Ron Valstar](http://www.sjeiti.com/).

Currently supported languages by Rainbow are

- C
- C#
- Coffeescript
- CSS
- D
- expl3
- Go
- Haskell
- HTML
- Java
- Javascript
- LaTeX
- Lua
- PHP
- Python
- R
- Ruby
- Scheme
- Shell
- Smalltalk

There are some Hooks implemented allowing you to load your own language modules. Details [here](https://github.com/mcguffin/wp-rainbow-hilite#filters).

Latest files on [GitHub](https://github.com/mcguffin/wp-rainbow-hilite).


== Installation ==

Follow the standard [WordPress plugin installation procedere](http://codex.wordpress.org/Managing_Plugins).

== Frequently asked questions ==

= I found a bug. Where should I post it? =

Depends. If you can break it down to the JavaScript core it would be best placed in the [Rainbow Repository](https://github.com/ccampbell/rainbow) (which is not mine).

Everything else can either go into the Support forum, or in the [WP-Rainbow Repo](https://github.com/mcguffin/wp-rainbow-hilite).

= I'd like to suggest a feature. Where should I post it? =

I personally prefer GitHub. The plugin code is here: [GitHub](https://github.com/mcguffin/wp-rainbow-hilite)
(See above as well.)

= I want to use the latest files. How can I do this? =

Use the GitHub Repo rather than the WordPress Plugin. Do as follows:
1. If you haven't done so: [Install git](https://help.github.com/articles/set-up-git)
2. in the console cd into Your 'wp-content/plugins' directory
3. type 'git clone git@github.com:mcguffin/wp-rainbow-hilite.git'
4. If you want to update to the latest files (be careful, might be untested on Your WP-Version) type 'git pull'.

= I found a bug and fixed it. How can I let You know? =

Either post it on the [GitHub-repo](https://github.com/mcguffin/wp-rainbow-hilite) or—if you cloned the repository—send me a pull request.

== Screenshots ==

1. Visual Editor
2. Code properties dialog
3. WordPress Settings Writing
4. Highlighted Code

== Changelog ==

= 1.0.0 =
Initial Release

== Plugin API ==

The plugin offers some filters to allow themes and other plugins to hook in.

See [GitHub-Repo](https://github.com/mcguffin/wp-rainbow-hilite) for details.
