
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/home/unifiers/unifiers/unifiers-website/src/pages/404.js")),
  "component---src-pages-consulting-js": preferDefault(require("/home/unifiers/unifiers/unifiers-website/src/pages/consulting.js")),
  "component---src-pages-education-js": preferDefault(require("/home/unifiers/unifiers/unifiers-website/src/pages/education.js")),
  "component---src-pages-hero-js": preferDefault(require("/home/unifiers/unifiers/unifiers-website/src/pages/hero.js")),
  "component---src-pages-index-js": preferDefault(require("/home/unifiers/unifiers/unifiers-website/src/pages/index.js")),
  "component---src-pages-skilling-js": preferDefault(require("/home/unifiers/unifiers/unifiers-website/src/pages/skilling.js")),
  "component---src-pages-team-js": preferDefault(require("/home/unifiers/unifiers/unifiers-website/src/pages/team.js")),
  "component---src-pages-test-index-js": preferDefault(require("/home/unifiers/unifiers/unifiers-website/src/pages/test-index.js")),
  "component---src-templates-using-dsg-js": preferDefault(require("/home/unifiers/unifiers/unifiers-website/src/templates/using-dsg.js"))
}

