# @sa11y/assert demo

Demo of Salesforce Accessibility Automation Libraries using Mocha, Chai, and `@sa11y/assert`

## Exploring the demo

This repo contains tests for a few simple examples of accessible and inaccessible content. These examples include buttons and images.

You can run the tests locally on your machine by running `yarn test`. If you look at any of the `.test.js` files in the project, you'll see that we call the `assertAccessible` method on each of our examples. If `@sa11y/assert` finds any a11y violations, they will be displayed in your terminal.

It's important to note that static a11y checkers are a bit limited in what they can find. It's been estimated that these kinds of tools only catch 10-30% of potential a11y violations. There is no substitute for a good understanding of a11y principles and manual testing with a keyboard and screen reader.

## Available scripts

In the project directory, you can run:

- `yarn format`: formats the code using Prettier
- `yarn format:watch`: formats the code using Prettier in watch mode
- `yarn test`: runs the tests using Mocha
- `yarn test:watch`: runs the tests using Mocha in watch mode

## Resources

- All sa11y packages: https://github.com/salesforce/sa11y
- `@sa11y/assert` package: https://github.com/salesforce/sa11y/tree/master/packages/assert
- Deque University axe 4.3 rules: https://dequeuniversity.com/rules/axe/4.3
