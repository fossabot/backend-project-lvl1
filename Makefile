install:
	npm i

start:
	npx babel-node src/bin/brain-even.js

start1:
	npx babel-node src/bin/brain-calc.js

start2:
	npx babel-node src/bin/brain-gcd.js

publish:
	npm publish --dry-run

lint:
	npx eslint .
