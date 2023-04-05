
const getHomepage = (req, res) => {
  res.send('Hello ExpressJS Huy!!!');
}

const getEjs = (req, res) => {
  res.render('sample.ejs');
}

module.exports = {
  getHomepage,
  getEjs
}