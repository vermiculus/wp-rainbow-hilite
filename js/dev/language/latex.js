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
            1: 'storage.function',
            2: 'entity.name.function'
        },
        'pattern': /(\\(begin|end)){(.*)}/g
    }
], true)
