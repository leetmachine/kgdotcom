import Typography from 'typography'
import githubTheme from 'typography-theme-github'



const typography = new Typography({
    ...githubTheme,
    googleFonts: [
        {
            name: "Amatic SC",
            styles: [
                '400'
            ]
        }
    ]})

export default typography