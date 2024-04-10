import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';
import { Footer } from '../components';

export const DefaultLayout = () => {
  return (
    <Box position='relative' width='full'>
      <Flex overflow='hidden' width='full' pb={{ base: '0', sm: '0' }}>
        <Sidebar />
        <Box
          display='flex'
          flexDir='column'
          justifyContent='space-between'
          h='screen'
          width='full'
          flex='1 1 0%'
        >
          <Box
            marginTop={{ base: '20px', sm: '30px', desktop: '40px' }}
            marginLeft={{ base: '20px', sm: '32px', desktop: '40px' }}
            marginRight={{ base: '20px', sm: '32px', desktop: '40px' }}
          >
            <Box>
              <Outlet />
            </Box>
          </Box>
          <Footer removeLogo={true} className='layout-footer' />
        </Box>
      </Flex>
    </Box>
  );
};
