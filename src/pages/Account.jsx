import React from 'react';
import { Flex, Stack, Text } from '@chakra-ui/react';
import assets from '../assets';
import { Avito, ButtonComponent, Header } from '../components';

const data = [
  { name: 'Brand Jewelry Studio', date: '12.03.24' },
  { name: 'Brand Studio', date: '12.03.24' },
  { name: 'Jewelry', date: ' 12.03.24' },
  { name: 'Brand Jewelry Studio', date: '12.03.24' },
  { name: 'Brand Studio', date: '12.03.24' },
  { name: 'Brand Studio', date: '12.03.24' },
  { name: 'Jewelry', date: '12.03.24' },
];

const Account = () => {
  return (
    <>
      <Header text='Мои аккаунты' addBtn={true} />
      <Stack spacing={4}>
        {data.map((item, index) => (
          <Flex
            flexWrap='wrap'
            gap={4}
            flexDirection={{ base: 'column', tablet: 'row' }}
            className='card-box'
            key={index}
            justifyContent='space-between'
          >
            <Flex
              flexDir={{ base: 'column', xs: 'row' }}
              alignItems={{ base: 'start', xs: 'center' }}
              gap={{ base: '20px', desktop: 6 }}
            >
              <Avito leftIcon={assets.avitoLogo} text='Авито' />
              <Text
                fontSize={{ base: '15px', sm: '16px', desktop: 'lg' }}
                lineHeight='22px'
                fontWeight={600}
              >
                {item.name}
              </Text>
            </Flex>
            <Flex
              justifyContent={{ base: 'space-between', tablet: 'normal' }}
              gap={{ base: '20px', desktop: 6 }}
              alignItems='center'
            >
              <Text
                fontSize={{ base: 'xs', desktop: 'sm' }}
                lineHeight={{ base: '14px', desktop: '17px' }}
                fontWeight={400}
                color='black.4'
              >
                Подключен {item.date}
              </Text>
              <ButtonComponent
                icon={assets.trashLogo}
                colorScheme='gray'
                size='xs'
                text='Удалить'
                color='#919EAB'
                to={''}
                fontSize={{ base: 'xs', sm: 'sm', desktop: 'xs' }}
                height={{ base: '24px', sm: '32px', desktop: '24px' }}
                leftIcon={null}
              />
            </Flex>
          </Flex>
        ))}
      </Stack>
    </>
  );
};

export default Account;
