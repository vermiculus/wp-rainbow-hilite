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
        'pattern': /\\[A-Za-z@]+/g
    },
    {
        'matches':
        {
            1: 'entity.name.function',
            2: 'entity.class'
        },
        'pattern': /(\\(?:begin|end))\s*\{(.*?)\}/g
    }
], true)
