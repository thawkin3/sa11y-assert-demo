const { assertAccessible } = require('@sa11y/assert')
const chai = require('chai')
const should = chai.should()
const { JSDOM } = require('jsdom')

const renderIntoJSDOM = (htmlString) => {
  const dom = new JSDOM(
    `<html>
      <body>
        ${htmlString}
      </body>
    </html>`
  )

  global.window = dom.window
  global.document = dom.window.document
}

describe('Accessibility checks for buttons', () => {
  it('renders a button', () => {
    renderIntoJSDOM('<button>Click me</button>')

    const button = document.querySelector('button')
    should.exist(button)
  })

  describe('bad a11y for buttons', () => {
    // This will fail because buttons must have discernible text
    it('has no accessibility violations when no visible text or aria-label is provided', async () => {
      renderIntoJSDOM('<button><svg></svg></button>')

      const button = document.querySelector('button')
      await assertAccessible(button)
    })
  })

  describe('good a11y for buttons', () => {
    it('has no accessibility violations when the button has visible text', async () => {
      renderIntoJSDOM('<button>Click me</button>')

      const button = document.querySelector('button')
      await assertAccessible(button)
    })

    it('has no accessibility violations when the button is an icon-button but has an aria-label', async () => {
      renderIntoJSDOM('<button aria-label="Edit"><svg></svg></button>')

      const button = document.querySelector('button')
      await assertAccessible(button)
    })
  })
})
