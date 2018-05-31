const puppeteer = require('puppeteer')
const { spawn } = require('child_process')
let server, page, browser

const createBrowser = async () => {
  browser = await puppeteer.launch({headless: false, devtools: true})
  page = await browser.newPage()
  await page.setViewport({width: 1600, height: 900})
}

const createServer = () => {
  server = spawn('cmd', ['/c', 'ng', 'serve'])
}

const connectPage = async () => {
  return page.goto('http://localhost:4200/#/pdf', {waitUntil: ['networkidle2', 'load']})
}

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

const generatePdf = async () => {
  const height = await page.evaluate(() => {
    return document.body.scrollHeight
  })

  server.kill(0)

  await page.pdf({
    path: './src/assets/Lina_Ragauskaite.pdf',
    printBackground: true,
    width: 1600,
    height: height,
    pageRanges: '1'
  })
}

;(async () => {
  await createServer()
  await createBrowser()

  let connected = false

  while (!connected) {
    try {
      await connectPage()
      connected = true
      console.log('connected')
    } catch (error) {
      console.log('F', error)
    }
  }
  await delay(2000)
  console.log('...')
  page.on('load', async () => {
    console.log('!!!')
    await generatePdf()
    await browser.close()
  })
  process.exit()
})()
