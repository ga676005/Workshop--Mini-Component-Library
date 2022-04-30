import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <SelectWrapper value={value} onChange={onChange}>
        {children}
      </SelectWrapper>
      <DisplayValue className='opacity-control'>
        <span>
          {displayedValue} 
        </span>
        <Icon id='chevron-down' size='20' strokeWidth='2' ></Icon>
      </DisplayValue>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  isolation: isolate;
  padding: 16px;
  width: max-content;

  &::before {
    content: '';
    position: absolute;
    inset: 1px;
    z-index: 0;
    border-radius: 8px;
    background-color: #ececec;
    pointer-events: none;
  }

  &:hover .opacity-control {
    opacity: 1;
  }
`

const SelectWrapper = styled.select`
  // A reset of styles, including removing the default dropdown arrow
  appearance: none;
  &::-ms-expand {
    display: none;
  }
  // Additional resets for further consistency
  background-color: transparent;
  border: none;
  margin: 0;
  width: 100%;
  font-family: inherit;
  font-size: inherit;
  cursor: inherit;
  line-height: inherit;
  /* outline: none; */
  /* opacity: 0; */
  position: absolute;
  z-index: -1;
  inset: 0;

  option {
    white-space: normal;
  }
`

const DisplayValue = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  pointer-events: none;
  opacity: .7;

  ${SelectWrapper}:hover + &,
  ${SelectWrapper}:focus + & { 
    opacity: 1;
  }

  & > span {
    margin-right: 16px;
  }
`

export default Select;
