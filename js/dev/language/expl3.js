/**
 * expl3 patterns
 *
 * @author Sean Allred <code@seanallred.com>
 * @version 1.0
 */
Rainbow.extend('expl3', [
    {
        'name': 'comment',
        'pattern': /%.*$/gm
    },
    {
        'matches':
        {
            0: 'entity.name.function',
            1: 'entity.class',
            2: 'tag'
        },
        'pattern': /(\\(?:__)?[a-z]+_)[a-z_]+(:[nNpTFwcVvxof]*)/g
        // argspec `D' intentionally ignored; _D_o not use
    },
    {
        'matches':
        {
            0: 'variable',
            1: 'support',
            2: 'entity.class'
        },
        'pattern': /\\([cgl]__?)[a-z][a-z_]+(_[A-Za-z]+)/g
    },
    {
        'name': 'entity.name.function',
        'pattern': /#\d/g
    },
    {
        'name': 'entity.name.function',
        'pattern': /\\[A-Za-z]+/g
    },
    {//keyval specs
        'matches':
        {
            0: 'variable',
            1: 'entity.name.function',
            2: 'entity.class'
        },
        'pattern': /[a-z\-]+\s+(\.[a-z_]+):([nNpTFwcVvxof]*)\s+=/g
    }
], true);
