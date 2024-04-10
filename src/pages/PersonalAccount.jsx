import React from 'react';
import { ButtonComponent, Header } from '../components';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
const PersonalAccount = () => {
  return (
    <Box className='subscription__management'>
      <Header text='Управление подпиской' addBtn={true} />
      <Flex
        justifyContent='space-between'
        gap='20px'
        sx={{
          '@media (max-width: 1300px)': {
            flexDir: 'column',
          },
        }}
      >
        <Box
          flex={1}
          borderRadius={{ base: '20px' }}
          p={{ base: '20px', desktop: '24px' }}
          bg='#fff'
        >
          <Flex
            sx={{
              '@media (max-width:480px)': {
                flexDir: 'column',
                mb: '20px',
              },
            }}
            justifyContent='space-between'
            alignItems='start'
          >
            <Box
              borderRadius='16px'
              sx={{
                '@media (max-width:480px)': {
                  display: 'flex',
                  justifyContent: 'space-between',
                  w: 'full',
                },
              }}
            >
              <Heading
                fontSize={{ base: '18px', sm: '20px', desktop: '24px' }}
                as='h4'
                color='#000000D9'
                fontWeight={600}
                mb='16px'
              >
                Подписка на сервис
              </Heading>
              <button className='status__btn active'>
                <Text as='span' className='dot'></Text>
                <Text as='span'>Активна</Text>
              </button>
            </Box>
            <Box borderRadius={3} p='12px' bg='bg' mt='20px'>
              <Heading
                as='h5'
                fontSize={{ base: '16px', desktop: '18px' }}
                color='#000000D9'
                fontWeight={500}
              >
                {' '}
                299₽{' '}
                <Text
                  fontWeight={400}
                  fontSize={{ base: '16px', desktop: '18px' }}
                  as='span'
                  color='#000000A6'
                >
                  / месяц
                </Text>
              </Heading>
              <Text fontSize={{ base: '12px' }} color='#00000040' mt='5px'>
                Отменить подписку
              </Text>
            </Box>
          </Flex>
          <Text color='#000000BF' size='14px'>
            Осталось 12 дней из 30
          </Text>
          <Box my='3' borderRadius='23px' w='full' h='6px' bg='#F6F6F6'>
            <Box bg='brand.500' w='70%' borderRadius='23px' h='full'></Box>
          </Box>
          <Text color='#00000073' fontSize='13px'>
            23 мая 2024, подписка будет продлена автоматически на месяц за 299 ₽
          </Text>
        </Box>

        <Box
          flex={1}
          borderRadius={{ base: '20px' }}
          p={{ base: '20px', desktop: '24px' }}
          bg='#fff'
        >
          <Flex
            justifyContent='space-between'
            gap='1rem'
            alignItems='start'
            h='full'
            sx={{
              '@media (max-width:480px)': {
                flexDir: 'column',
              },
            }}
          >
            <Flex
              justifyContent='space-between'
              flexDir='column'
              borderRadius='16px'
              h='full'
              rowGap='18px'
              w='full'
            >
              <Box
                sx={{
                  '@media (max-width:480px)': {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    w: 'full',
                  },
                }}
              >
                <Heading
                  fontSize={{ base: '18px', sm: '20px', desktop: '24px' }}
                  as='h4'
                  color='#000000D9'
                  fontWeight={600}
                  mb={{ sm: '16px' }}
                >
                  Автоплатёж
                </Heading>
                <button className='status__btn active'>
                  <Text as='span' className='dot'></Text>
                  <Text as='span'>Активна</Text>
                </button>
              </Box>
              <Box mt='0'>
                <button className='change__map-btn'>Сменить карту</button>
              </Box>
            </Flex>
            <Box
              className='cart__bg'
              color='#fff'
              maxW='268px'
              w='full'
              overflow='hidden'
              borderRadius='12px'
              p='12px'
              display='flex'
              justifyContent='end'
              flexDir='column'
              sx={{
                '@media (max-width:480px)': {
                  maxW: 'full',
                },
              }}
            >
              <Text fontSize='21px' fontWeight={500}>
                **** **** **** 6789
              </Text>
              <Text fontSize='14px'>12/28</Text>
            </Box>
          </Flex>
        </Box>
      </Flex>
      <Flex
        justifyContent='space-between'
        gap='20px'
        mt={{ base: '32px', desktop: '116px' }}
        sx={{
          '@media (max-width: 1300px)': {
            flexDir: 'column',
          },
        }}
      >
        <Box
          flex={1}
          borderRadius={{ base: '20px' }}
          p={{ base: '20px', desktop: '24px' }}
          bg='#fff'
        >
          <Flex justifyContent='space-between' alignItems='start' w='full'>
            <Box borderRadius='16px' w='full'>
              <Heading
                fontSize={{ base: '18px', sm: '20px', desktop: '24px' }}
                as='h4'
                color='#000000D9'
                fontWeight={600}
                mb='16px'
              >
                Подписка на сервис
              </Heading>
              <button className='status__btn ended'>
                <Text as='span' className='dot'></Text>
                <Text as='span'>Закончилась</Text>
              </button>
              <Box mt='33px'>
                <ButtonComponent
                  text='Продлить подписку за  299₽/месяц'
                  bg='brand.500'
                  color='#fff'
                  width='full'
                  _hover='none'
                />
              </Box>
            </Box>
          </Flex>
        </Box>

        <Box
          flex={1}
          borderRadius={{ base: '20px' }}
          p={{ base: '20px', desktop: '24px' }}
          bg='#fff'
        >
          <Flex
            justifyContent='space-between'
            alignItems='start'
            h='full'
            sx={{
              '@media (max-width:480px)': {
                flexDir: 'column',
                rowGap: '1rem',
                w: 'full',
              },
            }}
          >
            <Flex
              justifyContent='space-between'
              flexDir='column'
              borderRadius='16px'
              h='full'
              rowGap='18px'
              sx={{
                '@media (max-width:480px)': {
                  flexDir: 'column',
                  w: 'full',
                },
              }}
            >
              <Box
                sx={{
                  '@media (max-width:480px)': {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    w: 'full',
                  },
                }}
              >
                <Heading
                  fontSize={{ base: '18px', sm: '20px', desktop: '24px' }}
                  as='h4'
                  color='#000000D9'
                  fontWeight={600}
                  mb='16px'
                >
                  Автоплатёж
                </Heading>
                <button className='status__btn'>
                  <Text as='span' className='dot'></Text>
                  <Text as='span'>Не подключен</Text>
                </button>
              </Box>
              <Box mt='0'>
                <button className='change__map-btn'>Подключить</button>
              </Box>
            </Flex>
            <Box
              className='cart__bg disabled'
              color='#fff'
              maxW='268px'
              w='full'
              overflow='hidden'
              borderRadius='12px'
              p='12px'
              display='flex'
              justifyContent='end'
              flexDir='column'
              h='full'
              sx={{
                '@media (max-width:480px)': {
                  maxW: 'full',
                },
              }}
            >
              <Text fontSize='21px' fontWeight={500}>
                **** **** **** ****
              </Text>
              <Text fontSize='14px'>**/**</Text>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default PersonalAccount;
