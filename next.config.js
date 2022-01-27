module.exports = {
    basePath: "/frontend-mentor",
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            oneOf: [
                {
                    resourceQuery: /react/,
                    issuer: /\.[jt]sx?$/,
                    use: [
                        {
                            loader: "@svgr/webpack",
                            options: {
                                ref: true,
                                svgoConfig: {
                                    plugins: [
                                        {
                                            name: "removeAttrs",
                                            params: {
                                                attrs: "(fill|stroke)"
                                            }
                                        },
                                        {
                                            name: "removeDimensions",
                                            active: true,
                                        },
                                        {
                                            name: "prefixIds",
                                            active: true,
                                        }
                                    ],
                                },
                            },
                        },
                    ],
                },
                {
                    type: "asset/resource",
                },
            ],
        });

        return config;
    },
}