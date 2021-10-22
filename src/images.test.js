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

describe('Accessibility checks for images', () => {
  it('renders an image', () => {
    renderIntoJSDOM('<img src="" />')

    const img = document.querySelector('img')
    should.exist(img)
  })

  describe('bad a11y for images', () => {
    // This will fail because images must have alternate text
    it('has no accessibility violations when no alt text is provided', async () => {
      renderIntoJSDOM('<img src="" />')

      const img = document.querySelector('img')
      await assertAccessible(img)
    })
  })

  describe('good a11y for images', () => {
    it('has no accessibility violations when empty alt text is provided', async () => {
      renderIntoJSDOM('<img src="" alt="" />')

      const img = document.querySelector('img')
      await assertAccessible(img)
    })

    it('has no accessibility violations when alt text is provided', async () => {
      renderIntoJSDOM('<img src="" alt="Company logo" />')

      const img = document.querySelector('img')
      await assertAccessible(img)
    })
  })
})
