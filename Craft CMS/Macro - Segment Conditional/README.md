# Segment Conditional

This macro will allow you to test a segment against a string and include code if it matches.

## Usage

    {{ macros.segmentConditional(
        1,
        'some-segment-string',
        '<p>Some code you want included when segment 1 matches "some-segment-string".</p>')
    }}