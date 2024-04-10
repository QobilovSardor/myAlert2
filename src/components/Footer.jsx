import React from 'react';
import { Box, Text, Image, Flex, Link } from '@chakra-ui/react';
import { ButtonComponent } from './ButtonComponent';
import assets from '../assets';
export const Footer = ({ removeLogo, className }) => {
  return (
    <footer className={`${className}`}>
      <Flex
        className='container'
        pt={{ base: '40px', sm: '100px', desktop: '150px' }}
        pb={{ base: '40px', desktop: '80px' }}
        justifyContent='space-between'
        flexWrap='wrap'
        rowGap='2rem'
      >
        <Box>
          {removeLogo ? null : <Image src={assets.logo} w='224' h='66' />}
          <Text size='14px' color='#718096' mt='16px'>
            ИНН 7729773587
          </Text>
          <Text size='14px' color='#718096' mt='12px' mb='28px'>
            @ 2024 MyAlert - ИП Иванов Иван Иванович
          </Text>
          {removeLogo ? null : (
            <ButtonComponent
              text='Войти в систему'
              bg='brand.500'
              color='white'
              size='lg'
              _hover='none'
            />
          )}
        </Box>
        <Box>
          <Link mb='16px' to='#!' display='block' size='14px' color='#718096'>
            Политика конфиденциальности
          </Link>
          <Link mb='16px' to='#!' display='block' size='14px' color='#718096'>
            Оферта
          </Link>
          <Link mb='16px' to='#!' display='block' size='14px' color='#718096'>
            Согласие на сохранение учётных <br /> данных для будущих транзакций
          </Link>
        </Box>
        <Box>
          <Link mb='16px' to='#!' display='block' size='14px' color='#718096'>
            Связаться с нами
          </Link>
          <Link mb='16px' to='#!' display='block' size='14px' color='#718096'>
            Соглашение с подпиской
          </Link>
          <Link mb='16px' to='#!' display='block' size='14px' color='#718096'>
            Отказаться от подписки
          </Link>
        </Box>
      </Flex>
    </footer>
  );
};
