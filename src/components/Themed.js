import React, { forwardRef } from 'react'; // Importe forwardRef
import { LinearGradient } from '@tamagui/linear-gradient'
import { StyleSheet } from 'react-native';
import { getSize, getSpace } from '@tamagui/get-token'
import {
  Stack,
  Text,
  createStyledContext,
  styled,
  useTheme,
  withStaticProperties,
} from 'tamagui'


const colors = {
  primary: '#08A647',
  secondary: '#ACCF80',
};

import PropTypes from 'prop-types';

export const GradientBackground = forwardRef(({ children, style, onPressOut }, ref) => {
  return (
    <LinearGradient
      start={[0, 0]}
      end={[1, 1]}
      colors={[colors.primary, colors.secondary]}
      style={style}
      onPressOut={onPressOut}
      ref={ref} // Passe a referência para o elemento
    >
      {children}
    </LinearGradient>
  );
});

GradientBackground.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
  onPressOut: PropTypes.func,
};


const ButtonContext = createStyledContext({
  size: '$md',
});

const ButtonFrame = styled(Stack, {
  name: 'Button',
  context: ButtonContext,
  backgroundColor: colors.secondary,
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '50px',
  flexDirection: 'row',
  borderRadius: 10,
  hoverStyle: {
    backgroundColor: colors.primary,
  },
  pressStyle: {
    backgroundColor: colors.primary,
  },
  variants: {
    size: {
      '...size': (name, { tokens }) => {
        return {
          height: tokens.size[name],
          borderRadius: tokens.radius[name],
          gap: tokens.space[name].val * 0.2,
          paddingHorizontal: getSpace(name, {
            shift: -1,
          }),
        };
      },
    },
  },
  defaultVariants: {
    size: '$md',
  },
});

const ButtonText = styled(Text, {
  name: 'ButtonText',
  context: ButtonContext,
  color: 'black',
  userSelect: 'none',
  variants: {
    size: {
      '...fontSize': (name, { font }) => ({
        fontSize: font?.size[name],
      }),
    },
  },
});

const ButtonIcon = (props) => {
  const { size } = useContext(ButtonContext.context);
  const smaller = getSize(size, {
    shift: -2,
  });
  const theme = useTheme();
  return cloneElement(props.children, {
    size: smaller.val * 0.5,
    color: theme.color.get(),
  });
};

const Button = withStaticProperties(ButtonFrame, {
  Props: ButtonContext.Provider,
  Text: ButtonText,
  Icon: ButtonIcon,
});

// Exportando as partes necessárias
export { ButtonContext, ButtonFrame, ButtonText, ButtonIcon, Button };



const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 5,
    elevation: 3,
    width: '90%',
    height: 50,
    alignSelf: 'center',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
  },
});

