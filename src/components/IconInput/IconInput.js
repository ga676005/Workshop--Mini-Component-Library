import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    fontSize: 14,
    '--border-width': 1,
    icon: { 
      size: 14,
      strokeWidth: 1,
    }
  },
  large:{
    fontSize: 18,
    '--border-width': 2,
    icon: { 
      size: 18,
      strokeWidth: 2,
    }
  }
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const style = STYLES[size]

  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper>
        <Icon size={style.icon.size} id={icon} strokeWidth={style.icon.strokeWidth}/>
      </IconWrapper>
      <NativeInput 
        style={{
          '--width': width + 'px',
          '--font-size': style.fontSize + 'px',
          '--border-width': style.borderWidth
        }}
        placeholder={placeholder}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
`

const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 2px;
  transform: translateY(-50%);
  pointer-events: none;

  color: ${COLORS.gray700};
  ${Wrapper}:hover &{
    color: black;
  }
`

const NativeInput = styled.input`
  width: var(--width);
  padding-left: 32px;
  border: 1px solid transparent;
  border-bottom-color: red;
  outline-offset: 4px;

  font-size: var(--font-size);
  font-weight: 700;
  color: ${COLORS.gray700};

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }

  &:not(:placeholder-shown) {
    border-bottom-color: ${COLORS.gray700};
  }

  ${Wrapper}:hover &{
    color: black;
  }
`

export default IconInput;
