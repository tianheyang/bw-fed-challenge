const path = require('path')
const data = require('./src/data/content.json')

exports.createPages = ({ actions }) => {
  const { createPage } = actions;
  const template = path.resolve('./src/templates/page.js')

  data.forEach(page_object => {
    const path = page_object.slug;
    createPage({
      path,
      component: template,
      context: page_object,
    })
  })
}