import baseTheme from "@lekoarts/gatsby-theme-minimal-blog/src/gatsby-plugin-theme-ui"
import merge from "lodash.merge"

export default merge({}, baseTheme, {
    colors: {
        initialColorMode: `light`,
        primary: '#FF5370',
        secondary: `#FF5370`,
        modes: {
            dark: {
                primary: '#FF5370',
                secondary: `#40F4AD`,
                background: `#191919`,
            },
        },
    },
})