import {
  ActivityIndicator,
  GestureResponderEvent,
  Pressable,
  PressableProps,
  StyleProp,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import React, { forwardRef } from 'react';
import {
  createStyleSheet,
  useStyles,
  UnistylesVariants,
} from 'react-native-unistyles';

type VariantProps = UnistylesVariants<typeof stylesheet>;

interface ButtonBaseProps {
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  text?: string;
  outlined?: boolean;
  isLoading?: boolean;
  loadingText?: string;
  loadingIndicator?: React.ReactElement;
  onClick?: (event: GestureResponderEvent) => void;
}

export type ButtonProps = ButtonBaseProps &
  VariantProps &
  Omit<PressableProps, 'style'>;

export const Button = forwardRef<View, ButtonProps>((props, ref) => {
  const {
    color = 'primary',
    style: containerStyle,
    isLoading,
    loadingIndicator,
    loadingText = 'Loading...',
    outlined,
    size,
    text,
    textStyle,
    rounded,
    children,
    onPress,
    ...rest
  } = props;
  const { styles, theme } = useStyles(stylesheet, {
    color,
    size,
    rounded,
  });

  const loadingIndicatorElement = loadingIndicator || (
    <>
      <ActivityIndicator
        color={styles.loadingIndicator(outlined).color}
        size={size === 'lg' ? 'large' : 'small'}
      />
      {loadingText && (
        <Text style={[styles.text, textStyle]}>{loadingText}</Text>
      )}
    </>
  );

  return (
    <View style={[styles.outerContainer]}>
      <Pressable
        ref={ref}
        style={({ pressed }) => [
          styles.container,
          outlined && styles.outlined(theme.colors[color]),
          styles.pressed(pressed),
          containerStyle,
        ]}
        onPress={onPress}
        android_ripple={{ color: theme.colors[color], borderless: false }}
        {...rest}
      >
        <View style={styles.innerContainer}>
          {isLoading && loadingIndicatorElement}
          {!isLoading && text && (
            <>
              <Text style={[styles.text, textStyle]}>{text}</Text>
              {children}
            </>
          )}
        </View>
      </Pressable>
    </View>
  );
});

Button.displayName = 'Button';

// read about compound variants in uniStyles
// https://reactnativeunistyles.vercel.app/reference/compound-variants/
const stylesheet = createStyleSheet((theme) => ({
  container: {
    alignContent: 'center',
    alignItems: 'center',
    variants: {
      color: {
        primary: {
          backgroundColor: theme.colors.primary,
        },
        secondary: {
          backgroundColor: theme.colors.secondary,
        },
        accent: {
          backgroundColor: theme.colors.accent,
        },
        default: {
          backgroundColor: theme.colors.primary,
        },
      },
      size: {
        sm: {
          padding: 8,
        },
        md: {
          padding: 16,
        },
        lg: {
          padding: 24,
        },
        default: {
          padding: 16,
        },
      },
      rounded: {
        sm: {
          borderRadius: 5,
        },
        md: {
          borderRadius: 10,
        },
        lg: {
          borderRadius: 15,
        },
        full: {
          borderRadius: 999,
        },
        default: {
          borderRadius: 10,
        },
      },
    },
  },
  text: {
    color: theme.colors.text,
    variants: {
      size: {
        sm: {
          fontSize: 14,
        },
        md: {
          fontSize: 16,
        },
        lg: {
          fontSize: 18,
        },
        default: {
          fontSize: 16,
        },
      },
      color: {},
      rounded: {},
    },
  },
  loadingIndicator: (outlined?: boolean) => {
    const color = outlined ? theme.colors.primary : theme.colors.text;

    return { color: color, padding: 8 };
  },
  outlined: (color) => {
    return {
      borderColor: color,
      backgroundColor: 'transparent',
      borderWidth: 1,
    };
  },
  pressed: (pressed) => {
    return pressed ? { opacity: 0.75 } : {};
  },
  innerContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  outerContainer: {
    overflow: 'hidden',
    variants: {
      rounded: {
        sm: {
          borderRadius: 5,
        },
        md: {
          borderRadius: 10,
        },
        lg: {
          borderRadius: 15,
        },
        full: {
          borderRadius: 999,
        },
        default: {
          borderRadius: 10,
        },
      },
      color: {},
      size: {},
    },
  },
}));
