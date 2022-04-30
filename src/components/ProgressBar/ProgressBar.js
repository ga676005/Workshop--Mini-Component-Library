/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const styles = {
  small: { 
    radius: 4,
    height: 8,
    padding: 0
  },
  medium: { 
    radius: 4,
    height: 12,
    padding: 0
  },
  large: { 
    radius: 8,
    height: 16,
    padding: 4
  },
}

const ProgressBar = ({ value, size }) => {
  const style = styles[size]
  return (
    <Wrapper
      role="progressbar" 
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      style={{'--radius': style.radius + 'px', '--padding': style.padding + 'px'}}
    >
      <VisuallyHidden>{value}%</VisuallyHidden>
      <Bar style={{
        '--height': style.height + 'px',
        '--width': value + '%'
      }}>
      </Bar>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-radius: var(--radius);
  padding: var(--padding);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`

const Bar = styled.div`
  height: var(--height);
  border-radius: 4px;

  overflow: hidden;
  &::before {
    content: '';
    display: block;
    width: var(--width);
    height: 100%;
    background-color: ${COLORS.primary};
  }
`

export default ProgressBar;
