import React from 'react';
import { Box, Button, Flex, Heading, Image } from '@chakra-ui/react';
import { AddIcon, CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { useEffect, useState } from 'react';
import assets from '../assets';
import { useLocation } from 'react-router-dom';

export const Header = ({ text, addBtn }) => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const location = useLocation();
  const handleOpenSidebar = () => {
    const sidebarElement = document.querySelector('.left-sidebar');
    setOpenSidebar(!openSidebar);
    if (sidebarElement) {
      document.body.classList.toggle('scroll-hidden');
      sidebarElement.classList.toggle('active');
    }
  };
  useEffect(() => {
    setOpenSidebar(false);
    const sidebarElement = document.querySelector('.left-sidebar');

    if (sidebarElement) {
      document.body.classList.remove('scroll-hidden');
      sidebarElement.classList.remove('active');
    }
  }, [location]);

  return (
    <header>
      <Box
        display={{ base: 'flex', sm: 'none' }}
        justifyContent='space-between'
        alignItems='center'
        className='header-top'
        py='10px'
        px='20px'
        mt='-20px'
        mx='-20px'
        position='relative'
        zIndex={101}
        mb={6}
        bg={openSidebar ? 'white' : 'transparent'}
      >
        <Image src={assets.logo} w='100px' h='30px' />
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

      <Flex
        justifyContent='space-between'
        alignItems='center'
        mb={{ base: '20px', sm: 6, desktop: '37px' }}
        sx={{
          '@media (max-width:480px)': {
            flexWrap: 'wrap',
            rowGap: '12px',
          },
        }}
      >
        <Heading className='page-title'>{text}</Heading>
        {addBtn ? (
          <Button
            leftIcon={<AddIcon />}
            colorScheme={'brand'}
            size={{ base: 'xs', md: 'sm', desktop: 'md' }}
          >
            Добавить
          </Button>
        ) : null}
      </Flex>
    </header>
  );
};
