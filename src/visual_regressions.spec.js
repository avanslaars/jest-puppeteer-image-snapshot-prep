const { toMatchImageSnapshot } = require('jest-image-snapshot')

expect.extend({ toMatchImageSnapshot })

// * Initial test
// describe('Visual Regressions', () => {
//   test('Home', async () => {
//     await page.goto('http://localhost:1234')
//     const image = await page.screenshot()
//     await expect(image).toMatchImageSnapshot()
//   })
// })

// * Updated to use test.each
describe('Visual Regressions', () => {
  test.each([
    ['Home', '/'],
    ['Page 1', '/page1.html'],
    ['Page 2', '/page2.html']
  ])('%s', async (name, location) => {
    await page.goto(`http://localhost:1234${location}`)
    const image = await page.screenshot()
    await expect(image).toMatchImageSnapshot()
  })
})
