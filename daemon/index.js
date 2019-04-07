const Aquila = require('../src/index')
const sb = new Aquila.Starbomb()

const io = require('cheerio')

sb.getPrimaryHtml().then(html => {
  console.log()
})