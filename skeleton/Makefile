
# Copyright (c) 2010 Eamonn O'Brien-Strain, eob@well.com
# All rights reserved. This program and the accompanying materials
# are made available under the terms of the Eclipse Public License v1.0
# which is available at http://www.eclipse.org/legal/epl-v10.html

.SUFFIXES: .js .linted

JS=$(wildcard \
 $(NAME)/app/models/*.js\
 $(NAME)/app/assistants/*-assistant.js\
 test/spec/suite.linted)
LINTED := $(JS:.js=.linted)

ID=$(ORG).$(NAME)
JSLINT=java -classpath build/js.jar org.mozilla.javascript.tools.shell.Main build/jslint.js
JSDOC=java -jar jsdoc-toolkit/jsrun.jar jsdoc-toolkit/app/run.js -t=jsdoc-toolkit/templates/jsdoc

run: install doc
	palm-launch -c $(ID)
	palm-launch $(ID)

install: $(ID)_$(VERSION)_all.ipk
	- palm-install -r $(ID)
	palm-install $(ID)_$(VERSION)_all.ipk

$(ID)_$(VERSION)_all.ipk: lint $(NAME)/appinfo.json $(NAME)/* $(NAME)/*/* $(NAME)/*/*/* 
	palm-package $(NAME)

lint: $(LINTED)

%.linted : %.js
	$(JSLINT) $<
	touch $@

doc:
	$(JSDOC) -d=apidoc -r $(NAME)/app/models $(NAME)/app/assistants

clean:
	rm -rf apidoc
	rm -f $(ID)_$(VERSION)_all.ipk $(LINTED)

follow-log:
	palm-log -f $(ID)
