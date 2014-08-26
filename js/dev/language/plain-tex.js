/**
 * Plain TeX patterns
 *
 * @author Sean Allred <code@seanallred.com>
 * @version 1.0
 */
Rainbow.extend('plain-tex', [
    {
        'name': 'comment',
        'pattern': /%.*$/gm
    },
    {
        'name': 'storage.function',
        'pattern': /\\([A-Za-z@]+\*?|.)/g
    },
    {
        'name': 'string',
        'pattern': /\$.*?\$/g
    }
], true)
