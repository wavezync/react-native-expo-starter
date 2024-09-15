const common = {
  margins: {
    sm: 2,
    md: 4,
    lg: 8,
    xl: 12,
  },
  fonts: {
    primary: 'Poppins-Regular',
    secondary: 'Poppins-Bold',
    semiBold: 'Poppins-SemiBold',
  },
  textSize: {
    sm: 14,
    md: 16,
    lg: 18,
    xl: 24,
    '2xl': 32,
  },
};

export const lightTheme = {
  colors: {
    text: '#101923',
    background: '#f8fafc',
    primary: '#204065',
    secondary: '#7facdc',
    accent: '#2a70bb',
  },
  ...common,
} as const;

export const darkTheme = {
  colors: {
    text: '#dce5ef',
    background: '#030507',
    primary: '#9abadf',
    secondary: '#235080',
    accent: '#448ad5',
  },
  ...common,
} as const;

// define other themes
