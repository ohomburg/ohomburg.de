DEPLOY_DIR=/tmp
deploy-rules = deploy-root deploy-css

styles = css/normalize.css css/main.css

.PHONY: deploy $(deploy-rules)

default: $(styles)

deploy: $(deploy-rules)

deploy-root: $(wildcard *.html) robots.txt sitemap.txt
	install -d $(DEPLOY_DIR)
	install -t $(DEPLOY_DIR) -m0444 $?

deploy-css: $(styles)
	install -d $(DEPLOY_DIR)/css
	install -t $(DEPLOY_DIR)/css -m0444 $?

%.css: %.scss
	sass -t compressed --update $<:$@