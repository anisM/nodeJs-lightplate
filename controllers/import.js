/**
 * GET /services/imprt
 * Import service Page.
 */
exports.index = (req, res) => {
  res.render('services/import', {
    title: 'Import'
  });
};

/**
 * GET /services/import/file
 * Testing the csv file sent by form.
 */
 exports.file = (req, res, next) => {
  res.render('services/import', {
    title: 'File'
  });
};
