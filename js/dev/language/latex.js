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
            2: 'string.open',
            3: 'storage.entity.function',
            4: 'string.close'
        },
        'pattern': /(\\(begin|end))(\{)(.*?)(\})/g
    }
], true)
