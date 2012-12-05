/*
 * --------------------------------------------------------------------
 *  EDITOR CONFIGURATION
 * --------------------------------------------------------------------
 *
 * Create default configuration settings, to be used by all Wygwam fields.
 * See http://docs.cksource.com/ckeditor_api/symbols/CKEDITOR.config.html
 *
 */
CKEDITOR.editorConfig = function( config )
{
    CKEDITOR.on('instanceReady', function (ev) {
    // Ends self closing tags the HTML4 way, like <br>.
    ev.editor.dataProcessor.htmlFilter.addRules(
        {
            elements:
            {
                $: function (element) {
                    // Output dimensions of images as width and height
                    if (element.name == 'img') {
                        var style = element.attributes.style;

                        if (style) {
                            // Get the width from the style.
                            var match = /(?:^|\s)width\s*:\s*(\d+)px/i.exec(style),
                                width = match && match[1];

                            // Get the height from the style.
                            match = /(?:^|\s)height\s*:\s*(\d+)px/i.exec(style);
                            var height = match && match[1];

                            if (width) {
                                element.attributes.style = element.attributes.style.replace(/(?:^|\s)width\s*:\s*(\d+)px;?/i, '');
                                //element.attributes.width = width;
                            }

                            if (height) {
                                element.attributes.style = element.attributes.style.replace(/(?:^|\s)height\s*:\s*(\d+)px;?/i, '');
                                //element.attributes.height = height;
                            }
                        }
                    }



                    if (!element.attributes.style)
                        delete element.attributes.style;

                    return element;
                }
            }
        });
    });
};

/*
 * --------------------------------------------------------------------
 *  OUTPUT FORMATTING
 * --------------------------------------------------------------------
 *
 * You can customize how CKEditor formats your HTML markup by setting
 * custom writer rules. Just uncomment the CKEDITOR.on() block below,
 * and modify the values for intent, breakBeforeOpen, etc.
 * See http://docs.cksource.com/CKEditor_3.x/Developers_Guide/Output_Formatting
 *
 */
//CKEDITOR.on( 'instanceReady', function( ev )
//{
//  var blockTagRules = {
//      indent: true, // indent the contents between the opening and closing tags?
//      breakBeforeOpen: true, // put a line break before the opening tag?
//      breakAfterOpen: true, // put a line break after the opening tag?
//      breakBeforeClose: false, // put a line break before the closing tag?
//      breakAfterClose: true // put a line break after the closing tag?
//  };
//
//  var blockTags = ['div','h1','h2','h3','h4','h5','h6','p','pre'];
//  for (var i = 0; i < blockTags.length; i++)
//      ev.editor.dataProcessor.writer.setRules( blockTags[i], blockTagRules);
//});
