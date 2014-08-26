/**
 * LaTeX patterns
 *
 * @author Sean Allred <code@seanallred.com>
 * @version 1.0
 */
Rainbow.extend('latex', [
    {
        'name': 'comment',
        'pattern': /%.*$/gm
    },
    {
        'name': 'storage.function',
        'pattern': /\\([A-Za-z@]+\*?|.)/g
    },
    {
        'matches':
        {
            1: 'entity.name.function',
            2: 'entity.class'
        },
        'pattern': /(\\(?:begin|end|documentclass))\s*\{([^\}]*)\}/g
    },
    {
        'name': 'entity.name.function',
        'pattern': /\$.*?\$/g
    },
    {
        'matches':
        {
            1: 'entity.name.function',
            2: 'tag'
        },
        'pattern': /(\\(?:(?:sub)?paragraph|(?:sub){0,3}section|chapter|part)\*?)\{([^\}]*)\}/g
    },
    {
        'name': 'entity.name.function',
        'pattern': /#./g
    },
    {
        'matches':
        {
            1: 'entity.name.function',
            2: 'tag'
        },
        'pattern': /(\\newcommand)\s*\{?(\\(?:[A-Za-z]*))\}?(?:\[\d\])?/g
    }
], true)
