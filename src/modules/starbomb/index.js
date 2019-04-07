const BaseModule = require('../BaseModule')
const primaryUrl = 'https://starbomb.com/'
const io = require('cheerio')

class Starbomb extends BaseModule {
  /**
   * The default constructor for the Starbomb module.
   *
   * @param {DefaultOpts} opts The options to launch Puppeteer with.
   */
  constructor (opts) {
    super(primaryUrl)
  }

  async getPrimaryHtml () {
    const page = await getPage()
    const content = await page.goto(primaryUrl).then(() => page.content())
    return content
  }

  async getHeaderNavCount () {
    const content = await this.getPrimaryHtml()
    return io('a', io('#site-header--nav', content)).length
  }

  async close () { return this.browser.close() }
}

module.exports = Starbomb

/**
 * @typedef {object} DefaultOpts
 *
 * @prop {number} [slowMo] Slows down Puppeteer operations by the specified amount of milliseconds. Useful so that you can see what is going on.
 * @prop {boolean} [headless] Whether to run browser in headless mode. Defaults to false.
 * @prop {string} [executablePath] Path to a Chromium or Chrome executable to run instead of the bundled Chromium. If executablePath is a relative path, then it is resolved relative to current working directory.
 * @prop {number} [timeout] Maximum time in milliseconds to wait for the browser instance to start. Defaults to 30000 (30 seconds). Pass 0 to disable timeout.
 * @prop {boolean} [ignoreHTTPSErrors] Whether to ignore HTTPS errors during navigation.
 * @prop {boolean} [devtools] Whether to auto-open a DevTools panel for each tab. If this option is true, the headless option will be set false.
 */
