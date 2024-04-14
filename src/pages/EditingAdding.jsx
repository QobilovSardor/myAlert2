import React, { useState } from 'react';
import {
  Box,
  Flex,
  Heading,
  Input,
  Select,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Link,
  Badge,
} from '@chakra-ui/react';
import { ButtonComponent, Header } from '../components';
import assets from '../assets';
// import { Link } from 'react-router-dom';

const EditingAdding = () => {
  const [activeTab1, setActiveTab1] = useState(0); // Birinchi Tabs uchun active tab indeksi
  const [activeTab2, setActiveTab2] = useState(0); // Ikkinchi Tabs uchun active tab indeksi

  const handleTabChange1 = (index) => {
    setActiveTab1(index);
  };

  const handleTabChange2 = (index) => {
    setActiveTab2(index);
  };

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
            <Tabs onChange={handleTabChange1} index={activeTab1}>
              <TabList
                mb={{ base: '24px', desktop: '38px' }}
                flexWrap='wrap'
                gap='16px'
              >
                <Tab>
                  <ButtonComponent
                    text='Вход по ссылке'
                    bg={activeTab1 === 0 ? '#F55B3D14' : '#F6F7F8'}
                    color={activeTab1 === 0 ? 'black' : '#637381'}
                    size='sm'
                    _hover='none'
                  />
                </Tab>
                <Tab>
                  <ButtonComponent
                    text='Вход по коду'
                    size='sm'
                    _hover='none'
                    bg={activeTab1 === 1 ? '#F55B3D14' : '#F6F7F8'}
                    color={activeTab1 === 1 ? 'black' : '#637381'}
                  />
                </Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
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
                    <Text
                      fontSize='15px'
                      color='#000000'
                      mt='24px'
                      maxW='325px'
                    >
                      При переходе по ссылке, пользователь будет авторизован
                      сразу.
                    </Text>
                  </Box>
                </TabPanel>
                <TabPanel>
                  <Box>
                    <Text
                      mb='16px'
                      color='#171923'
                      fontSize={{ base: 'sm', sm: '15px', desktop: '15px' }}
                      fontWeight={600}
                    >
                      Код авторизации в Telegram
                    </Text>
                    <Flex
                      flexWrap={{ base: 'wrap', desktop: 'nowrap' }}
                      gap='24px'
                      alignItems='center'
                    >
                      <Text fontSize='16px' fontWeight={600}>
                        /start 542562
                      </Text>
                      <ButtonComponent
                        text='Скопировать'
                        bg='brand.500'
                        color='#fff'
                        _hover='none'
                      />
                    </Flex>
                    <Text fontSize='15px' color='#000000' mt='24px'>
                      Для авторизации необходимо сказать боту фразу /start
                      ваш_код. Так можно авторизовать любого пользователя,
                      который отправит боту код.
                    </Text>
                  </Box>
                </TabPanel>
              </TabPanels>
            </Tabs>
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
            <Tabs onChange={handleTabChange2} index={activeTab2}>
              <TabList
                flexWrap='wrap'
                gap='16px'
                mb={{ base: '24px', desktop: '38px' }}
              >
                <Tab>
                  <ButtonComponent
                    text='Вход через Авито'
                    bg={activeTab2 === 0 ? '#F55B3D14' : '#F6F7F8'}
                    color={activeTab2 === 0 ? 'black' : '#637381'}
                    size='sm'
                    _hover='none'
                  />
                </Tab>
                <Tab>
                  <ButtonComponent
                    text='Интеграция через ключ'
                    size='sm'
                    _hover='none'
                    bg={activeTab2 === 1 ? '#F55B3D14' : '#F6F7F8'}
                    color={activeTab2 === 1 ? 'black' : '#637381'}
                  />
                </Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  <Box>
                    <Text
                      fontSize='15px'
                      color='#000000'
                      maxW='325px'
                      mb='24px'
                    >
                      Для добавления аккаунта нажмите на кнопку и пройдите
                      авторизацию через avito.ru
                    </Text>
                    <ButtonComponent
                      text='Войти'
                      bg='brand.500'
                      color='#fff'
                      _hover='none'
                    />
                  </Box>
                </TabPanel>
                <TabPanel>
                  <Box>
                    <Text fontSize='15px' color='#000000' mb='24px'>
                      Для добавления аккаунта введите ключи интеграции от вашего
                      профиля avito.ru{' '}
                      <Link>
                        <Badge
                          textTransform='capitalize'
                          color='#F24441'
                          bg='#F55B3D14'
                          borderRadius='8px'
                          fontSize='11px'
                          fontWeight={600}
                          py='4px'
                          px='8px'
                          display='inline-block'
                        >
                          Как найти?
                        </Badge>
                      </Link>
                    </Text>
                    <Input placeholder='clientId' />
                    <Input placeholder='clientSecret' my='10px' />
                    <ButtonComponent
                      text='Подключить'
                      bg='brand.500'
                      color='#fff'
                      _hover='none'
                    />
                  </Box>
                </TabPanel>
              </TabPanels>
            </Tabs>
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
