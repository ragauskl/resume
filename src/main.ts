import { enableProdMode } from '@angular/core'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'

import { AppModule } from './app/app.module'
import { environment } from './environments/environment'

if (environment.production) {
  enableProdMode()
  // Inject google tag manager
  const script = document.getElementById('google-analytics')
  script.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-116679248-1');
  `
  document.head.appendChild(script)
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err))
