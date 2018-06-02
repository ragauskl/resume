const puppeteer = require('puppeteer')
// const shell = require('shelljs')
// const httpServer = require('http-server')
const { spawn } = require('child_process')
let server, page, browser

const createBrowser = async () => {
  browser = await puppeteer.launch({headless: true, devtools: false})
  page = await browser.newPage()
  await page.setViewport({width: 1600, height: 900})
}

const createServer = () => {
  server = spawn('cmd', ['/c', 'ng', 'serve'])
}

const connectPage = async () => {
  return page.goto('http://localhost:4200/#/pdf', {waitUntil: ['networkidle2']})
}

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

const generatePdf = async () => {
  const height = await page.evaluate(() => {
    return document.body.clientHeight
  })

  server.kill(0)

  await page.pdf({
    path: './src/assets/Lina_Ragauskaite.pdf',
    printBackground: true,
    width: 1600,
    height: height,
    pageRanges: '1'
  })
  console.log('Pdf saved.')
}

;(async () => {
  await createServer()
  await createBrowser()

  let connected = false
  console.log('Waiting for angular to finish build... (40s)')
  await delay(40000)
  while (!connected) {
    try {
      await connectPage()
      connected = true
      console.log('Page loaded.')
    } catch (error) {
      console.log('Error laoding page.', error)
    }
  }

  await generatePdf()
  await browser.close()
  process.exit()
})()
