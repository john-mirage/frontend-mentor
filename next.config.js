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
                                svgoConfig: {
                                    plugins: [
                                        {
                                            name: "removeAttrs",
                                            params: {
                                                attrs: "(fill|stroke)"
                                            }
                                        },
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