'use strict';

var fs = require('fs');
var path = require('path');
var Handlebars = require('handlebars');

function docToMarkdown(doc, tplPath, srcPath) {
    var tplContents = fs.readFileSync(tplPath);
    if (!tplContents) { return ''; }
    var template = Handlebars.compile(tplContents.toString());
    //console.log('template doc:::', doc.props);
    return template(doc);
}

function fileToMarkdown(file, tplPath) {
    if (!file) { return; }
    var docMd = file.docs.map(function(d) {
        // XXX
        for (var key in d.props){
            var docDefaultValue = d.props[key].defaultValue;
            if (docDefaultValue) {
                Object.assign(d.props[key].defaultValue, {
                    value: docDefaultValue.value.replace(/(\n|\r)/ig, '')
                })
            } 
        }
        return docToMarkdown(d, tplPath, file.path);
    });
    return (docMd.join('\n'));
};

module.exports.fileToMarkdown = fileToMarkdown;
