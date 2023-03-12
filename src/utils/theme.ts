import { createTheme, NextUIProvider, Text } from "@nextui-org/react"

// 2. Call `createTheme` and pass your custom values
const theme = createTheme({
  type: "light", // it could be "light" or "dark"
  theme: {
    colors: {
      // brand colors
      primaryLight: '$green200',
      primaryLightHover: '$green300',
      primaryLightActive: '$green400',
      primaryLightContrast: '$green600',
      primary: '$blue600',
      primaryBorder: '$green500',
      primaryBorderHover: '$green600',
      primarySolidHover: '$green700',
      primarySolidContrast: '$white',
      primaryShadow: '$green500',

      gradient: 'linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)',
      link: '$blue600',

      // you can also create your own color
      myColor: '$blue600'

      // ...  more colors
    },
    space: {},
    fonts: {}
  }
})

export default theme;
