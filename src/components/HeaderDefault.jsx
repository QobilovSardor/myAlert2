import React, { useState } from 'react';
import { Flex, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import assets from '../assets';
import { ButtonComponent } from './ButtonComponent';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Box } from '@chakra-ui/react';
export const HeaderDefault = ({ notFoundBtn }) => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const handleOpenSidebar = () => {
    const sidebarElement = document.querySelector('.header__btns');
    setOpenSidebar(!openSidebar);
    if (sidebarElement) {
      document.body.classList.toggle('scroll-hidden');
      sidebarElement.classList.toggle('active');
    }
  };

  return (
    <header>
      <Flex
        className='container'
        py={5}
        justifyContent='space-between'
        alignItems='center'
      >
        <Link to='/home'>
          <Image
            src={assets.logo}
            width='156px'
            height='46px'
            sx={{
              '@media (max-width: 480px)': {
                w: '124px',
                h: '36px',
              },
            }}
          />
        </Link>

        {notFoundBtn ? (
          <Link to='/home'>
            <ButtonComponent
              text='На главную страницу'
              bg='brand.500'
              _hover='none'
              color='#fff'
            />
          </Link>
        ) : (
          <Flex gap={4} alignItems='center'>
            <Flex className='header__btns' gap={4}>
              <ButtonComponent text='Возможности' />
              <ButtonComponent text='Поддержка' />
            </Flex>
            <ButtonComponent
              text='Вход'
              bg='brand.500'
              color='#fff'
              _hover='none'
            />
            <Box width='30px' className='hamburger__menu' h='25px'>
              <HamburgerIcon
                onClick={handleOpenSidebar}
                width={6}
                h={6}
                display={openSidebar ? 'none' : 'block'}
              />
              <CloseIcon
                onClick={handleOpenSidebar}
                display={openSidebar ? 'block' : 'none'}
              />
            </Box>
          </Flex>
        )}
      </Flex>
    </header>
  );
};
