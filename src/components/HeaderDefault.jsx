import React from 'react';
import { Flex, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import assets from '../assets';
import { ButtonComponent } from './ButtonComponent';

export const HeaderDefault = () => {
  return (
    <header>
      <Flex
        className='container'
        py={5}
        justifyContent='space-between'
        alignItems='center'
      >
        <Link to='/home'>
          <Image src={assets.logo} width='156' height='46' />
        </Link>

        <Flex gap={4}>
          <ButtonComponent text='Возможности' />
          <ButtonComponent text='Поддержка' />
        </Flex>
      </Flex>
    </header>
  );
};
