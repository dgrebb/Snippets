This snippet can be used in an ExpressionEngine template with PHP parse set to output.

We pass in an ExpressionEngine custom field which is then matched against various patterns for the various methods YouTube uses to share URLs, then output as a variable for use in an ExpressionEngine template.

Thanks in part to [this Stack Overflow thread](http://stackoverflow.com/questions/6556559/youtube-api-extract-video-id) for the regex.