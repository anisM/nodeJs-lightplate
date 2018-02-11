

/**
 * GET /services/imprt
 * Import service Page.
 */
exports.index = (req, res) => {
  res.render('services/import', {
    title: 'import'
  });
};

/**
 * GET /services/import/file
 * Testing the csv file sent by form.
 */
 exports.file = (req, res, next) => {

   const importTest = { type:"import",
                        name:req.body.name,
                        marque:req.body.marque,
                        fileType: req.body.typeImprt,
                        file: req.files.file
    };

    // var form = new formidable.IncomingForm();
    // form.parse(req, function(err, fields, files) {
    //     // `file` is the name of the <input> field of type `file`
    //     var old_path = files.file.path,
    //         file_size = files.file.size,
    //         file_ext = files.file.name.split('.').pop(),
    //         index = old_path.lastIndexOf('/') + 1,
    //         file_name = old_path.substr(index),
    //         new_path = path.join(process.env.PWD, '/uploads/', file_name + '.' + file_ext);
    //
    //     fs.readFile(old_path, function(err, data) {
    //         fs.writeFile(new_path, data, function(err) {
    //             fs.unlink(old_path, function(err) {
    //                 if (err) {
    //                     res.status(500);
    //                     res.json({'success': false});
    //                 } else {
    //                     res.status(200);
    //                     res.json({'success': true});
    //                 }
    //             });
    //         });
    //     });
    // });

    // Parse CSV string
    //var data = papaparse.parse(csv);

    // Parse local CSV file
// papaparse.parse(file, {
// 	complete: function(results) {
// 		console.log("Finished:", results.data);
// 	}
// });

    console.log(importTest);
  res.render('services/import', {
    title: 'File',
    importTest: importTest
  });
};
