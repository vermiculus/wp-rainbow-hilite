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
        'pattern': /\\[A-z@]+/g
    },
    {
        'matches':
        {
            1: 'entity.name.function',
            2: 'storage.function',
            3: 'comment'
        },
        'pattern': /(\\(begin|end))\{(.*)\}/g
    }
], true)
