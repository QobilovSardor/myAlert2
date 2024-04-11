import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Input,
  Select,
  Stack,
  Text,
} from '@chakra-ui/react';
import { ButtonComponent, Header } from '../components';
import assets from '../assets';

const EditingAdding = () => {
  return (
    <>
      <Header text='Редактирование /  добавление' addBtn={false} />
      <Stack className='card-box' px={{ base: '16px', sm: 6, desktop: 6 }}>
        <Box>
          <Flex gap={2} alignItems='center'>
            <Flex
              fontSize={{ base: 'sm', sm: '15px', desktop: '16px' }}
              borderRadius='50%'
              w={6}
              h={6}
              color='white'
              justifyContent='center'
              alignItems='center'
              bg='brand.base'
            >
              1
            </Flex>
            <Heading
              as='h5'
              fontSize={{ base: 'sm', sm: '15px', desktop: '16px' }}
              color='black.1'
              fontWeight={500}
              lineHeight='22px'
            >
              Выберите сервис для получения данных
            </Heading>
          </Flex>
          <Flex
            className='line-box'
            alignItems={{ base: 'end', tablet: 'center' }}
            justifyContent={{ base: 'end', tablet: 'start' }}
            gap={{ base: 3, sm: 4 }}
            pl={8}
            pt={{ base: 3, sm: 4 }}
            mt={2}
            pb={{ base: 4, sm: 6, desktop: 8 }}
            flexWrap='wrap'
          >
            <Select
              size={{ base: 'sm', sm: 'lg' }}
              w={{ base: '100%', tablet: '500px' }}
              placeholder='Brand Jewelry Studio'
            />
            <Text
              cursor='pointer'
              userSelect='none'
              color='black.5'
              fontWeight={500}
              lineHeight='24px'
            >
              Удалить
            </Text>
          </Flex>
        </Box>
        <Box>
          <Flex gap={2} alignItems='center'>
            <Flex
              fontSize={{ base: 'sm', sm: '15px', desktop: '16px' }}
              borderRadius='50%'
              w={6}
              h={6}
              color='white'
              justifyContent='center'
              alignItems='center'
              bg='brand.base'
            >
              2
            </Flex>
            <Heading
              as='h5'
              fontSize={{ base: 'sm', sm: '15px', desktop: '16px' }}
              color='black.1'
              fontWeight={500}
              lineHeight='22px'
            >
              Настройте подключение
            </Heading>
          </Flex>
          <Stack
            spacing={{ base: 3, sm: 4 }}
            className='line-box'
            pl={8}
            mt={2}
            pt={{ base: 3, sm: 4 }}
            pb={{ base: 4, sm: 6, desktop: 8 }}
            maxW='528px'
          >
            <Flex gap='16px' flexWrap='wrap'>
              <ButtonComponent
                text='Вход по ссылке'
                bg='#F55B3D14'
                size='sm'
                _hover='none'
              />
              <ButtonComponent
                text='Вход по коду'
                size='sm'
                _hover='none'
                bg='#F6F7F8'
                color='#637381'
              />
            </Flex>
            <Box>
              <Text
                mb='16px'
                color='#171923'
                fontSize={{ base: 'sm', sm: '15px', desktop: '15px' }}
                fontWeight={600}
              >
                Ссылка для авторизации
              </Text>
              <Flex
                flexWrap={{ base: 'wrap', desktop: 'nowrap' }}
                gap='8px'
                alignItems='center'
              >
                <Input
                  w={{ base: '100%', tablet: '360px' }}
                  placeholder='https://t.me/NetAngelsMonitoringBot?start=542562'
                  size={{ base: 'sm', sm: 'lg' }}
                  fontSize='13px'
                />
                <ButtonComponent
                  text='Скопировать'
                  bg='brand.500'
                  color='#fff'
                  _hover='none'
                />
              </Flex>
              <Text fontSize='15px' color='#000000' mt='24px' maxW='325px'>
                При переходе по ссылке, пользователь будет авторизован сразу.
              </Text>
            </Box>
          </Stack>
        </Box>
        <Box>
          <Flex gap={2} alignItems='center'>
            <Flex
              fontSize={{ base: 'sm', sm: '15px', desktop: '16px' }}
              borderRadius='50%'
              w={6}
              h={6}
              color='white'
              justifyContent='center'
              alignItems='center'
              bg='brand.base'
            >
              3
            </Flex>
            <Heading
              as='h5'
              fontSize={{ base: 'sm', sm: '15px', desktop: '16px' }}
              color='black.1'
              fontWeight={500}
              lineHeight='22px'
            >
              Настройте подключение
            </Heading>
          </Flex>
          <Stack
            spacing={{ base: 3, sm: '38px' }}
            className='line-box'
            pl={8}
            mt={2}
            pt={{ base: 3, sm: 4 }}
            pb={{ base: 4, sm: 6, desktop: 8 }}
            maxW='528px'
          >
            <Flex gap='16px' flexWrap='wrap'>
              <ButtonComponent
                text='Вход через Авито'
                bg='#F55B3D14'
                size='sm'
                _hover='none'
              />
              <ButtonComponent
                text='Интеграция через ключ'
                size='sm'
                _hover='none'
                bg='#F6F7F8'
                color='#637381'
              />
            </Flex>
            <Box>
              <Text fontSize='15px' color='#000000' maxW='325px' mb='24px'>
                Для добавления аккаунта нажмите на кнопку и пройдите авторизацию
                через avito.ru
              </Text>
              <ButtonComponent
                text='Войти'
                bg='brand.500'
                color='#fff'
                _hover='none'
                width='130px'
              />
            </Box>
          </Stack>
        </Box>
      </Stack>
      <Flex
        gap={{ base: 2, sm: 3 }}
        flexDir={{ base: 'column', sm: 'row' }}
        justifyContent='end'
        mt={{ base: '20px', sm: 8 }}
        mb='45px'
      >
        <ButtonComponent
          size='md'
          icon={assets.trashLogo}
          variant='outline'
          text='Удалить навсегда'
          fontSize='16px'
          color='black.5'
          width={{ base: 'full', sm: 'fit-content' }}
          to={''}
        />
        <ButtonComponent
          colorScheme={'brand'}
          text='Сохранить'
          width={{ base: 'full', sm: 'fit-content' }}
          icon={assets.saveIcon}
          size={{ base: 'lg', sm: 'md' }}
          to={''}
          color={'white'}
        />
      </Flex>
    </>
  );
};
export default EditingAdding;
