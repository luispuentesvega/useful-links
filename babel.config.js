module.exports = function(api) {
    api.cache(true)
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            [
                'auto-import',
                {
                    declarations: [
                        {
                            path: 'react',
                            default: 'React',
                            members: ['Component'],
                        },
                    ],
                },
            ],
        ],
    }
}
