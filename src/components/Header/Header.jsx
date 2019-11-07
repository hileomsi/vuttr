import React from 'react';
import { Divider } from 'antd';
import {
  HeaderContainer,
  Title,
  Subtitle,
} from './Header.styles';

export default function Header() {
  return (
    <HeaderContainer>
      <Title>VUTTR</Title>
      <Subtitle level={2}>Very Useful Tools to Remember</Subtitle>
      <Divider />
    </HeaderContainer>
  );
}

Header.defaultProps = {};
Header.propTypes = {};