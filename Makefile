CLOSURE_INSTALL_DIR := ./closure
CLOSURE_COMPILER := $(CLOSURE_INSTALL_DIR)/compiler.jar
JS_LANGUAGES := $(patsubst sources/rainbow/js/language/%.js,%,\
		$(wildcard sources/rainbow/js/language/*.js))

all: languages lineno mce options

languages: closure submods
	$(shell export CLOSURE_COMPILER=$(CLOSURE_COMPILER) ;                         \
		python ./sources/rainbow/util/compile.py $(JS_LANGUAGES) >/dev/null ; \
		python ./sources/rainbow/util/compile.py --core >/dev/null)

	mv ./sources/rainbow/js/rainbow-custom.min.js  ./js/rainbow-custom.min.js
	cp ./sources/rainbow/js/rainbow.js ./js/dev/rainbow.js
	cp ./sources/rainbow/js/rainbow.min.js ./js/dev/rainbow.min.js
	rm -rf ./js/dev/language/*
	mkdir -p ./js/dev/language/
	cp ./sources/rainbow/js/language/* ./js/dev/language/

lineno: closure submods
	rm -f ./sources/rainbow.linenumbers/js/rainbow.linenumbers.min.js
	java -jar $(CLOSURE_COMPILER) --js ./sources/rainbow.linenumbers/js/rainbow.linenumbers.js --js_output_file ./sources/rainbow.linenumbers/js/rainbow.linenumbers.min.js
	cp ./sources/rainbow.linenumbers/js/rainbow.linenumbers.js ./js/rainbow.linenumbers.js
	cp ./sources/rainbow.linenumbers/js/rainbow.linenumbers.min.js ./js/rainbow.linenumbers.min.js

mce: closure
	java -jar $(CLOSURE_COMPILER) --js ./js/wp-rainbow-mce.js --js_output_file ./js/wp-rainbow-mce.min.js

options: closure
	java -jar $(CLOSURE_COMPILER) --js ./js/wp-rainbow-options.js --js_output_file ./js/wp-rainbow-options.min.js

###################################
### ENVIRONMENT SETUP FUNCTIONS ###
###################################

.PHONY: env closure submods
env:
	$(info CLOSURE_INSTALL_DIR = '$(CLOSURE_INSTALL_DIR)')
	$(info CLOSURE_COMPILER    = '$(CLOSURE_COMPILER)')
	$(info JS_LANGUAGES        = '$(JS_LANGUAGES)')

closure:
	mkdir -p $(CLOSURE_INSTALL_DIR)
	wget -qN -P $(CLOSURE_INSTALL_DIR) "http://dl.google.com/closure-compiler/compiler-latest.zip" || true
	unzip -fod $(CLOSURE_INSTALL_DIR) $(CLOSURE_INSTALL_DIR)/compiler-latest.zip

submods:
	git submodule init
	git submodule update
	cd sources/rainbow             && git pull origin master
	cd sources/rainbow.linenumbers && git pull origin master

setup: closure submods
