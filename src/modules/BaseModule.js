const puppet = require('puppeteer')
const defaultOpts = {
  slowMo: 0,
  timeout: 30000,
  devtools: false,
  headless: false,
  ignoreHTTPSErrors: false,
  executablePath: undefined
}

class BaseModule {
  /**
   * The default constructor for the BaseModule used by each module within the
   * overall Aquila module.
   *
   * @param {string} url The URL of the site you wish to puppet.
   * @param {DefaultOpts} [opts] The options you wish to launch Puppeteer with.
   */
  constructor (url, opts = defaultOpts) {
    this.browser = await puppet.launch(opts)
    this.url = url
  }

  async getPage () { return this.browser.newPage() }
}

module.exports = BaseModule

/**
 * @typedef {object} DefaultOpts
 *
 * @prop {number} [slowMo] Slows down Puppeteer operations by the specified amount of milliseconds. Useful so that you can see what is going on.
 * @prop {boolean} [headless] Whether to run browser in headless mode. Defaults to true unless the devtools option is true.
 * @prop {string} [executablePath] Path to a Chromium or Chrome executable to run instead of the bundled Chromium. If executablePath is a relative path, then it is resolved relative to current working directory.
 * @prop {number} [timeout] Maximum time in milliseconds to wait for the browser instance to start. Defaults to 30000 (30 seconds). Pass 0 to disable timeout.
 * @prop {boolean} [ignoreHTTPSErrors] Whether to ignore HTTPS errors during navigation.
 * @prop {boolean} [devtools] Whether to auto-open a DevTools panel for each tab. If this option is true, the headless option will be set false.
 */