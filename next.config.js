module.exports = {
    basePath: "/frontend-mentor",
    webpack(config) {
        
        config.module.rules.push({
            type: 'asset',
            resourceQuery: /url/,
        });

        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ['@svgr/webpack'],
        });

        return config;
    },
}