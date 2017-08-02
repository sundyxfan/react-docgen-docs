'use strict';

var fs = require('fs');
var path = require('path');
var Handlebars = require('handlebars');

/**
 * 处理换行符
 */
Handlebars.registerHelper('breaklines', function(text) {
    text = Handlebars.Utils.escapeExpression(text);
    text = text.replace(/(\r\n|\n|\r)/gm, '<br>');
    return new Handlebars.SafeString(text);
});

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
        for (var key in d.props) {
            if (d.props && d.props[key] && d.props[key].name && d.props[key].type.name === 'union') {
                d.props[key].type.name = d.props[key].type.value.map(item => item.name).join(' | ');
            }
        }
        // XXX 处理换行
        // for (var key in d.props){
        //     var docDefaultValue = d.props[key].defaultValue;
        //     var description = d.props[key].description;
        //     if (docDefaultValue) {
        //         Object.assign(d.props[key].defaultValue, {
        //             value: docDefaultValue.value.replace(/(\n|\r)/ig, '<br/>')
        //         })
        //     }
        //     if(description) {
        //         d.props[key].description = description.replace(/(\n|\r)/ig, '<br/>');
        //     }
        // }
        return docToMarkdown(d, tplPath, file.path);
    });
    return (docMd.join('\n'));
};

module.exports.fileToMarkdown = fileToMarkdown;
