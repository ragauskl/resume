const puppeteer = require('puppeteer')
const shell = require('shelljs')
const fs = require('fs')
const chalk = require('chalk')
let server, page, browser

const DEBUG = false
const pdfFilePath = './src/assets/Lina_Ragauskaite.pdf'
const buildLatestForPdf = () => {
  shell.exec('npm run build-noref')
}

const buildLatestForLive = () => {
  shell.exec('npm run build')
  shell.echo('RUN npm run make-docs')
}

const createBrowser = async () => {
  browser = await puppeteer.launch({headless: !DEBUG, devtools: DEBUG})
  page = await browser.newPage()
  // PDF W 1600 H 1900
  // A4 eq W 1600 H 2260
  await page.setViewport({width: 1600, height: 900})
}

const createServer = () => {
  server = shell.exec('http-server ./dist/ -p 4200', {async: true})
}

const connectPage = async () => {
  return page.goto('http://localhost:4200/?view=pdf', {waitUntil: ['networkidle2', 'load']})
}

const pdfValid = () => {
  const stats = fs.statSync(pdfFilePath)
  const fileSizeInBytes = stats.size
  const fileSizeInKb = fileSizeInBytes * 0.001
  return fileSizeInKb > 100
}

const generatePdf = async () => {
  const height = await page.evaluate(() => {
    return document.body.clientHeight
  })

  killNodes(server.pid)
  server.kill()
  console.log(chalk.default.greenBright('Http-server killed.'))

  console.log(1600, height)
  await page.pdf({
    path: pdfFilePath,
    printBackground: true,
    width: 1600,
    height: height,
    pageRanges: '1'
  })
}

const killNodes = (id) => {
  shell.exec(`taskkill /pid ${id} /f /t`)
}

;(async () => {
  buildLatestForPdf()
  console.log(chalk.default.greenBright('Build complete for PDF capture.'))
  await createServer()
  console.log(chalk.default.greenBright('Http-server started.'))
  await createBrowser()
  console.log(chalk.default.greenBright('Browser opened.'))

  let connected = false
  while (!connected) {
    try {
      await connectPage()
      connected = true
      console.log(chalk.default.greenBright('Page loaded.'))
    } catch (error) {
      console.log(chalk.default.redBright('Error loading page.', error))
    }
  }

  await generatePdf()
  console.log(chalk.default.greenBright('PDF generated.'))
  await page.close()
  await browser.close()
  console.log(chalk.default.greenBright('Browser closed.'))
  if (pdfValid()) {
    console.log(chalk.default.greenBright('PDF OK'))
    buildLatestForLive()
    console.log(chalk.default.greenBright('Build complete for live release.'))
    process.exit(0)
  } else {
    console.log(chalk.default.redBright('PDF NOK'))
    process.exit(1)
  }
})()
