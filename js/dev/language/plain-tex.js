Rainbow.extend('plain-tex', [
    {
        'name': 'comment',
        'pattern': /%.*$/gm
    },
    {
        'name': 'storage.function',
        'pattern': /\\[A-z]+/g
    }
], true)
