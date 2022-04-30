import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    height: 24,
    fontSize: 14,
    borderWidth: 1,
    icon: { 
      size: 14,
      strokeWidth: 1,
    }
  },
  large:{
    height: 36,
    fontSize: 18,
    borderWidth: 2,
    icon: { 
      size: 24,
      strokeWidth: 2,
    }
  }
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  ...props
}) => {
  const style = STYLES[size]

  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{ '--size': style.icon.size + 'px' }}>
        <Icon {...style.icon} id={icon}/>
      </IconWrapper>
      <NativeInput 
        {...props}
        style={{
          '--width': width + 'px',
          '--height': style.height / 16 + 'rem',
          '--font-size': style.fontSize / 16 + 'rem',
          '--border-width': style.borderWidth + 'px'
        }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.label`
  position: relative;
  display: block;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  height: var(--size);
  margin: auto 0;
`

const NativeInput = styled.input`
  width: var(--width);
  height: var(--height);
  padding-left: var(--height);
  border: var(--border-width) inset transparent;
  border-radius: 2px;
  border-bottom-color: red;
  outline-offset: 4px;

  font-size: var(--font-size);
  font-weight: 700;
  color: inherit;

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }

  &:not(:placeholder-shown) {
    border-bottom-color: ${COLORS.gray700};
  }
`

export default IconInput;
