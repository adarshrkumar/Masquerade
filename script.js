let defaultUrl = 'bing.com'
let defaultTitle = 'Bing'
let defaultFavicon = 'bing.com/favicon.ico'

let url = prompt('URL')
if (!!url === false) {
  url = defaultUrl
}
if (url.includes('://') === false) {
  url = `https://${url}`
}

let title = prompt('title')
if (!!title === false) {
  title = defaultTitle
}

let favicon = prompt('Favicon')
if (!!favicon === false) {
  favicon = defaultFavicon
}
if (favicon.includes('://') === false) {
  favicon = `https://${favicon}`
}

document.querySelector('iframe').src = url
document.title = title
document.querySelector('link[rel="icon"]').href = favicon