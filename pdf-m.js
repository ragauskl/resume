const puppeteer = require('puppeteer')

;(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.setViewport({width: 1600, height: 900})

  await page.goto('http://localhost:4200/#/pdf', {waitUntil: ['networkidle2', 'load']})

  const height = await page.evaluate(() => {
    return document.body.scrollHeight
  })

  await page.pdf({
    path: 'Lina_Ragauskaite.pdf',
    printBackground: true,
    width: 1600,
    height: height,
    pageRanges: '1'
  })

  await browser.close()
  process.exit()
})()
