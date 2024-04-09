import React from 'react';
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Stack,
  Switch,
} from '@chakra-ui/react';
import { Avito, ButtonComponent, Header } from '../components';
import assets from '../assets';

const Connectors = () => {
  return (
    <>
      <Header text='Коннекторы' addBtn={true} />
      <Stack spacing={{ base: 3, desktop: 4 }}>
        <Box className='card-box'>
          <Flex
            justifyContent='space-between'
            pb='20px'
            alignItems={{ base: 'start', md: 'center' }}
          >
            <Flex alignItems='center' gap={3} flexWrap='wrap'>
              <Heading
                as='h4'
                fontSize={{ base: '16px', desktop: '18px' }}
                fontWeight={600}
                lineHeight={{ base: '19.2px', desktop: '21.6px' }}
                color='#171923'
              >
                Уведомления о пропущенных сообщениях
              </Heading>
              <ButtonComponent
                icon={assets.penciIcon}
                color='#919EAB'
                size='xs'
                text='Изменить'
                to='editting-adding'
                colorScheme={'gray'}
                leftIcon={null}
              />
            </Flex>
            <FormControl width='fit-content' display='flex' alignItems='center'>
              <FormLabel
                color='black.4'
                fontSize='14px'
                fontWeight={400}
                htmlFor='email-alerts'
                mb='0'
                display={{ base: 'none', md: 'block' }}
              >
                Отключено
              </FormLabel>
              <Switch size='lg' isChecked id='email-alerts' />
            </FormControl>
          </Flex>
          <Flex borderTop='1px solid #EEEFF0' pt='20px' gap={2} flexWrap='wrap'>
            <Avito rightIcon={assets.avitoLogo} text='Авито' />
            <Image
              display={{ base: 'none', sm: 'block' }}
              mx={{ base: '8px', sm: '24px', desktop: '24px' }}
              src={assets.nextIcon}
            />
            <Image
              display={{ base: 'block', sm: 'none' }}
              mx={{ base: '8px', sm: '24px', desktop: '24px' }}
              src={assets.mediaNextIcon}
            />
            <Avito
              color='black.5'
              leftIcon={assets.blueTelegramIcon}
              text='@tg_name'
            />
            <Avito
              color='black.5'
              leftIcon={assets.blueTelegramIcon}
              text='@tg_name'
            />
            <Avito
              color='black.5'
              leftIcon={assets.blueTelegramIcon}
              text='@tg_name'
              display={{ base: 'flex', xs: 'none', xl: 'flex' }}
            />
            <Avito
              color='black.5'
              leftIcon={assets.blueTelegramIcon}
              text='@tg_name'
              display={{ base: 'flex', xs: 'none', xl: 'flex' }}
            />
            <Avito color='brand.base' text='3 more' />
          </Flex>
        </Box>
        <Box className='card-box'>
          <Flex
            justifyContent='space-between'
            pb='20px'
            alignItems={{ base: 'start', md: 'center' }}
          >
            <Flex alignItems='center' gap={3} flexWrap='wrap'>
              <Heading
                as='h4'
                fontSize={{ base: '16px', desktop: '18px' }}
                fontWeight={600}
                lineHeight={{ base: '19.2px', desktop: '21.6px' }}
                color='#171923'
              >
                Уведомления о пропущенных сообщениях
              </Heading>
              <ButtonComponent
                icon={assets.penciIcon}
                color='#919EAB'
                size='xs'
                text='Изменить'
                to='editting-adding'
                colorScheme={'gray'}
                leftIcon={null}
              />
            </Flex>
            <FormControl width='fit-content' display='flex' alignItems='center'>
              <FormLabel
                color='black.4'
                fontSize='14px'
                fontWeight={400}
                htmlFor='email-alerts'
                mb='0'
                display={{ base: 'none', md: 'block' }}
              >
                Отключено
              </FormLabel>
              <Switch size='lg' id='email-alerts' />
            </FormControl>
          </Flex>
          <Flex flexWrap='wrap' borderTop='1px solid #EEEFF0' pt='20px' gap={6}>
            <Avito leftIcon={assets.settingsIcon} text='Автоответ' />
            <Image
              display={{ base: 'none', sm: 'block' }}
              mx={{ base: '8px', sm: '24px', desktop: '24px' }}
              src={assets.nextIcon}
            />
            <Image
              display={{ base: 'block', sm: 'none' }}
              mx={{ base: '8px', sm: '24px', desktop: '24px' }}
              src={assets.mediaNextIcon}
            />
            <Flex gap={2}>
              <Avito leftIcon={assets.avitoLogo} text='Авито' />
            </Flex>
          </Flex>
        </Box>
        <Box className='card-box'>
          <Flex
            justifyContent='space-between'
            pb='20px'
            alignItems={{ base: 'start', md: 'center' }}
          >
            <Flex alignItems='center' gap={3} flexWrap='wrap'>
              <Heading
                as='h4'
                fontSize={{ base: '16px', desktop: '18px' }}
                fontWeight={600}
                lineHeight={{ base: '19.2px', desktop: '21.6px' }}
                color='#171923'
              >
                Уведомления о пропущенных сообщениях
              </Heading>
              <ButtonComponent
                icon={assets.penciIcon}
                color='#919EAB'
                size='xs'
                text='Изменить'
                to='editting-adding'
                colorScheme={'gray'}
                leftIcon={null}
              />
            </Flex>
            <FormControl width='fit-content' display='flex' alignItems='center'>
              <FormLabel
                color='black.4'
                fontSize='14px'
                fontWeight={400}
                htmlFor='email-alerts'
                mb='0'
                display={{ base: 'none', md: 'block' }}
              >
                Отключено
              </FormLabel>
              <Switch size='lg' isChecked id='email-alerts' />
            </FormControl>
          </Flex>
          <Flex borderTop='1px solid #EEEFF0' pt='20px' gap={2} flexWrap='wrap'>
            <Avito rightIcon={assets.avitoLogo} text='Авито' />
            <Image
              display={{ base: 'none', sm: 'block' }}
              mx={{ base: '8px', sm: '24px', desktop: '24px' }}
              src={assets.nextIcon}
            />
            <Image
              display={{ base: 'block', sm: 'none' }}
              mx={{ base: '8px', sm: '24px', desktop: '24px' }}
              src={assets.mediaNextIcon}
            />
            <Avito
              color='black.5'
              leftIcon={assets.blueTelegramIcon}
              text='@tg_name'
            />
            <Avito
              color='black.5'
              leftIcon={assets.blueTelegramIcon}
              text='@tg_name'
            />
            <Avito
              color='black.5'
              leftIcon={assets.blueTelegramIcon}
              text='@tg_name'
              display={{ base: 'flex', xs: 'none', xl: 'flex' }}
            />
            <Avito
              color='black.5'
              leftIcon={assets.blueTelegramIcon}
              text='@tg_name'
              display={{ base: 'flex', xs: 'none', xl: 'flex' }}
            />
            <Avito color='brand.base' text='3 more' />
          </Flex>
        </Box>
        <Box className='card-box'>
          <Flex
            justifyContent='space-between'
            pb='20px'
            alignItems={{ base: 'start', md: 'center' }}
          >
            <Flex alignItems='center' gap={3} flexWrap='wrap'>
              <Heading
                as='h4'
                fontSize={{ base: '16px', desktop: '18px' }}
                fontWeight={600}
                lineHeight={{ base: '19.2px', desktop: '21.6px' }}
                color='#171923'
              >
                Уведомления о пропущенных сообщениях
              </Heading>
              <ButtonComponent
                icon={assets.penciIcon}
                color='#919EAB'
                size='xs'
                text='Изменить'
                to='editting-adding'
                colorScheme={'gray'}
                leftIcon={null}
              />
            </Flex>
            <FormControl width='fit-content' display='flex' alignItems='center'>
              <FormLabel
                color='black.4'
                fontSize='14px'
                fontWeight={400}
                htmlFor='email-alerts'
                mb='0'
                display={{ base: 'none', md: 'block' }}
              >
                Отключено
              </FormLabel>
              <Switch size='lg' id='email-alerts' />
            </FormControl>
          </Flex>
          <Flex flexWrap='wrap' borderTop='1px solid #EEEFF0' pt='20px' gap={6}>
            <Avito leftIcon={assets.settingsIcon} text='Автоответ' />
            <Image
              display={{ base: 'none', sm: 'block' }}
              mx={{ base: '8px', sm: '24px', desktop: '24px' }}
              src={assets.nextIcon}
            />
            <Image
              display={{ base: 'block', sm: 'none' }}
              mx={{ base: '8px', sm: '24px', desktop: '24px' }}
              src={assets.mediaNextIcon}
            />
            <Flex gap={2}>
              <Avito leftIcon={assets.avitoLogo} text='Авито' />
            </Flex>
          </Flex>
        </Box>
      </Stack>
    </>
  );
};

export default Connectors;
