import React from 'react';
import { Box, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react';
import assets from '../assets';
import { Link, useLocation } from 'react-router-dom';
import { ButtonComponent, NavigationLink } from '.';
export default function Sidebar() {
  const location = useLocation();

  return (
    <Box className='left-sidebar'>
      <Flex
        className='left-sidebar__box'
        justifyContent='space-between'
        flexDirection='column'
        bg='white'
        py='24px'
        px={4}
        minW={{ base: '280px', sm: '250px', md: '280px', desktop: '280px' }}
        maxW={{ base: '280px', sm: '250px', md: '280px', desktop: '280px' }}
        minH={{ base: 'auto', sm: '100vh' }}
        h={{ base: 'calc(100% - 50px)', sm: 'full' }}
        position={{ base: 'fixed', sm: 'initial' }}
      >
        <Box>
          <Link to='/'>
            <Image
              mb={8}
              mx='auto'
              src={assets.logo}
              maxW={{ base: '100px', sm: '184px' }}
              height={{ base: '30px', sm: '54px' }}
              display={{ base: 'none', sm: 'block' }}
            />
          </Link>
          <Stack spacing={1}>
            <NavigationLink
              to='/'
              text='Мои аккаунты'
              activeclass={`${
                location.pathname === '/' ? 'active' : ''
              } sidebar-nav-link`}
              icon={''}
              svg={
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    opacity='0.5'
                    d='M2 6.5C2 4.379 2 3.318 2.659 2.659C3.318 2 4.379 2 6.5 2C8.621 2 9.682 2 10.341 2.659C11 3.318 11 4.379 11 6.5C11 8.621 11 9.682 10.341 10.341C9.682 11 8.621 11 6.5 11C4.379 11 3.318 11 2.659 10.341C2 9.682 2 8.621 2 6.5ZM13 17.5C13 15.379 13 14.318 13.659 13.659C14.318 13 15.379 13 17.5 13C19.621 13 20.682 13 21.341 13.659C22 14.318 22 15.379 22 17.5C22 19.621 22 20.682 21.341 21.341C20.682 22 19.621 22 17.5 22C15.379 22 14.318 22 13.659 21.341C13 20.682 13 19.621 13 17.5Z'
                    fill='#637381'
                  />
                  <path
                    d='M2 17.5C2 15.379 2 14.318 2.659 13.659C3.318 13 4.379 13 6.5 13C8.621 13 9.682 13 10.341 13.659C11 14.318 11 15.379 11 17.5C11 19.621 11 20.682 10.341 21.341C9.682 22 8.621 22 6.5 22C4.379 22 3.318 22 2.659 21.341C2 20.682 2 19.621 2 17.5ZM13 6.5C13 4.379 13 3.318 13.659 2.659C14.318 2 15.379 2 17.5 2C19.621 2 20.682 2 21.341 2.659C22 3.318 22 4.379 22 6.5C22 8.621 22 9.682 21.341 10.341C20.682 11 19.621 11 17.5 11C15.379 11 14.318 11 13.659 10.341C13 9.682 13 8.621 13 6.5Z'
                    fill='#637381'
                  />
                </svg>
              }
            />
            <NavigationLink
              to='/connectors'
              svg={
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M8.352 20.242C8.78715 20.7922 9.34165 21.2364 9.97361 21.541C10.6056 21.8455 11.2985 22.0025 12 22C12.7015 22.0025 13.3944 21.8455 14.0264 21.541C14.6584 21.2364 15.2129 20.7922 15.648 20.242C13.2271 20.5702 10.7729 20.5702 8.352 20.242ZM18.75 9V9.704C18.75 10.549 18.99 11.375 19.442 12.078L20.55 13.801C21.561 15.375 20.789 17.514 19.03 18.011C14.4338 19.313 9.56625 19.313 4.97 18.011C3.211 17.514 2.439 15.375 3.45 13.801L4.558 12.078C5.01157 11.3694 5.25211 10.5454 5.251 9.704V9C5.251 5.134 8.273 2 12 2C15.727 2 18.75 5.134 18.75 9Z'
                    fill='#637381'
                  />
                </svg>
              }
              text='Коннекторы'
              badgeCount='32+'
              activeclass={`${
                location.pathname === '/connectors' ||
                location.pathname === '/connectors/editting-adding'
                  ? 'active'
                  : ''
              } sidebar-nav-link`}
              icon={''}
            />
          </Stack>
        </Box>

        <Box>
          <Box
            bg={'bg'}
            textAlign='center'
            pt='20px'
            pb={3}
            px='20px'
            borderRadius='xl'
            mb={6}
          >
            <Box
              bg='white'
              py={3}
              px='9px'
              width='fit-content'
              borderRadius='10px'
              mx='auto'
              mb={3}
            >
              <Image src={assets.telegramIcon} />
            </Box>
            <Heading color='black.1' mb={1} fontSize='16px' lineHeight={6}>
              Нужна помощь?
            </Heading>
            <Text color='black.5' fontSize='sm' lineHeight='20px' mb='20px'>
              Пишите нам в телеграмм, мы поможем!
            </Text>
            <ButtonComponent
              size='sm'
              text='Написать'
              width='full'
              colorScheme='brand'
              leftIcon={null}
              to={''}
              color={'white'}
            />
          </Box>
          <ButtonComponent
            rightIcon={assets.rirghtIcon}
            text='Выйти из профиля'
            colorScheme='gray'
            color='#919EAB'
            size='sm'
            fontSize='12px'
            width='full'
            variant='outline'
            to='/login'
            leftIcon={null}
          />
        </Box>
      </Flex>
    </Box>
  );
}
