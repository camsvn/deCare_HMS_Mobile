import React from 'react';
import {ArrowBackIcon, CloseIcon, Container, Box} from 'native-base';

const BackIcon = (
  props: JSX.IntrinsicAttributes &
    Pick<any, string | number | symbol> &
    React.RefAttributes<unknown>,
) => {
  return <ArrowBackIcon {...props} size="sm" />;
};

const ExitIcon = (
  props: JSX.IntrinsicAttributes &
    Pick<any, string | number | symbol> &
    React.RefAttributes<unknown>,
) => {
  return <CloseIcon {...props} size="sm" />;
};

const HeaderBarComponent = (props: {title: string}) => {
  const {title} = props;
  <Container>
    <Box>{title}</Box>
  </Container>;
};

export default HeaderBarComponent;
