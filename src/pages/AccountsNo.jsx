import React from 'react';
import { Box, Heading, Text, Image } from '@chakra-ui/react';
import { ButtonComponent, Header } from '../components';
import assets from '../assets';

export const AccountsNo = () => {
  return (
    <Box>
      <Header text='Мои аккаунты' addBtn={true} questionBox={true} />
      <Box
        textAlign='center'
        bg='#fff'
        borderRadius='12px'
        p='40px 24px 40px 24px'
        display='flex'
        flexDir='column'
        alignItems='center'
      >
        <Image src={assets.addFolter} mb='38px' />
        <Heading fontSize={'24px'}>Здесь пока ничего нет</Heading>
        <Text margin='12px 0 24px 0'>Скорее добавьте свои аккаунты!</Text>
        <ButtonComponent
          text='Добавить'
          _hover='none'
          color='#fff'
          bg='brand.500'
          icon={assets.plus}
          to='/connectors/editting-adding'
        />
      </Box>
    </Box>
  );
};
