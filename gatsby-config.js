module.exports = {
    siteMetadata: {
        siteTitle: `shkcodes`,
        // Default title of the page
        siteTitleAlt: `shkcodes`,
        // Can be used for e.g. JSONLD
        siteHeadline: `Home of shkcodes`,
        // Will be used to generate absolute URLs for og:image etc.
        siteUrl: `https://minimal-blog.lekoarts.de`,
        // Used for SEO
        siteDescription: `home of shkcodes`,
        siteLanguage: `en`,
        siteImage: `/bg1.jpg`,
        author: `@shkcodes`,
    },
    plugins: [
        {
            resolve: `@lekoarts/gatsby-theme-minimal-blog`,
            options: {
                formatString: 'DD-MM-YYYY',
                navigation: [
                    {
                        title: `Blog`,
                        slug: `/blog`
                    },
                    {
                        title: `About`,
                        slug: `/about`
                    }
                ],
                externalLinks: [
                    {
                        name: `Twitter`,
                        url: `https://twitter.com/SHKM9`
                    },
                    {
                        name: `Github`,
                        url: `https://github.com/shkcodes`
                    }
                ]
            }

        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        `gatsby-plugin-offline`,
    ],
}
