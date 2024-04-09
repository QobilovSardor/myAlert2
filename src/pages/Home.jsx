import React from 'react';
import { Avito, ButtonComponent, Footer, HeaderDefault } from '../components';
import { Box, Text, Heading, Image, Flex } from '@chakra-ui/react';
import assets from '../assets';
import './home.css';
export const Home = () => {
  return (
    <Box className='home__page' bg='#fff'>
      <HeaderDefault />
      <Box
        mt={16}
        mb='174px'
        className='home__intro container'
        p={16}
        rounded={32}
      >
        <Heading
          as='h1'
          fontSize={{ base: '28px', sm: '36px', desktop: '54px' }}
          lineHeight={{ base: '35px', sm: '43px', desktop: '59px' }}
          maxW='768px'
        >
          <Text as='span' className='gradient-text'>
            Мгновенные
          </Text>{' '}
          уведомления о вашем бизнесе
        </Heading>
        <Text
          fontSize={{ base: 'sm', sm: '16px', desktop: 'lg' }}
          lineHeight={{ base: '20px', sm: '24px', desktop: '27px' }}
          mt={{ base: '20px', sm: 4, desktop: 8 }}
          mb={{ base: '245px', sm: '119px', desktop: '117px' }}
          maxW='584px'
        >
          Контролируйте ключевые моменты на ходу — без CRM и сложных программ.
        </Text>
        <ButtonComponent
          text='Подключить уведомления'
          className='gradient-bg'
          color='white'
          size='lg'
          bg='brand.500'
          icon={assets.flash}
          _hover='none'
        />
      </Box>

      {/* features section */}
      <Box
        className='features'
        mx={12}
        bg='#F6F7F8'
        mb={{ base: '100px', sm: '80px', desktop: '150px' }}
        pt={{ base: '48px', sm: 10, desktop: '150px' }}
        pb={{ base: '48px', sm: '36px', desktop: '160px' }}
        borderRadius={30}
      >
        <Box className='container'>
          <Heading
            color='black.1'
            display='flex'
            alignItems='center'
            gap='4'
            fontSize={{ base: '24px', sm: '32px', desktop: '48px' }}
            lineHeight={{ base: '28.8px', sm: '38.4px', desktop: '57.6px' }}
          >
            Возможности{' '}
            <Text as='span' className='gradient-text'>
              My Alert
            </Text>{' '}
            в <Image src={assets.avitoLogoTwo} />
          </Heading>
          <Flex
            gap='3'
            bg='#fff'
            borderRadius={12}
            p={3}
            mt='30px'
            mb={10}
            w='fit-content'
          >
            <Avito text='Авито' leftIcon={assets.avitoLogo} />
            <Avito text='Мой Склад' bg='transparent' leftIcon={assets.sladki} />
            <Avito
              text='WildBerries'
              bg='transparent'
              leftIcon={assets.WildBerries}
            />
          </Flex>
          <Flex justifyContent='space-between' gap='22px'>
            <Box w='50%'>
              <Box className='bg__box'>
                <Heading
                  className='bg__box-title'
                  as='h5'
                  color='brand.base'
                  fontSize='16px'
                  fontWeight={500}
                  ml='22px'
                >
                  Уведомления
                </Heading>
                <Text
                  px={4}
                  py={3}
                  bg='bg'
                  fontWeight={500}
                  fontSize='16px'
                  mt='20px'
                  borderRadius='10px'
                  color='black.1'
                >
                  Уведомление о пропущенном сообщении
                </Text>
                <Text
                  px={4}
                  py={3}
                  fontSize='16px'
                  borderRadius='10px'
                  color='black.5'
                >
                  Уведомление о пропущенном сообщении
                </Text>
              </Box>
              <Box className='bg__box' mt='21px'>
                <Heading
                  className='bg__box-title blue'
                  as='h5'
                  color='#26C6DA'
                  fontSize='16px'
                  fontWeight={500}
                  ml='22px'
                >
                  Автоответ{' '}
                </Heading>
                <Text
                  px={4}
                  py={3}
                  bg='bg'
                  fontWeight={500}
                  fontSize='16px'
                  mt='20px'
                  borderRadius='10px'
                  color='black.1'
                >
                  Автоответ клиенту если мы долго не отвечаем
                </Text>
                <Text
                  px={4}
                  py={3}
                  fontSize='16px'
                  borderRadius='10px'
                  color='black.5'
                >
                  Автоответ-визитка новому клиенту
                </Text>
              </Box>
            </Box>
            <Box
              bg='#fff'
              p={{ base: 6, sm: 8 }}
              borderRadius={{ base: '20px', sm: '24px', desktop: '20px' }}
              w='50%'
            >
              <Image src={assets.notificationTwo} w={8} h={8} />
              <Heading
                color='#171923 '
                as='h3'
                fontSize={{ base: '16px', desktop: '21px' }}
                mt={6}
                mb={4}
              >
                Отправим уведомление, если найдено пропущенное сообщение
              </Heading>
              <Text
                color='black.5'
                fontSize={{ base: '14px', desktop: '16px' }}
                lineHeight={{ base: '20px', desktop: '22.4px' }}
              >
                Описание Отправим уведомление, если найдено пропущенное
                сообщение. Отправим уведомление, если найдено пропущенное
                сообщение. Отправим уведомление, если найдено пропущенное
                сообщение. Отправим уведомление, если найдено пропущенное
                сообщение. Отправим уведомление, если найдено пропущенное
                сообщение. Отправим уведомление, если найдено пропущенное
                сообщение.
              </Text>
              <Heading
                color='#171923 '
                as='h3'
                fontSize={{ base: '16px', desktop: '21px' }}
                mt={6}
                mb={4}
              >
                Настройки
              </Heading>
              <Text
                color='black.5'
                fontSize={{ base: '14px', desktop: '16px' }}
                lineHeight={{ base: '20px', desktop: '22.4px' }}
              >
                Описание Отправим уведомление, если найдено пропущенное
                сообщение. Отправим уведомление, если найдено пропущенное
                сообщение. Отправим уведомление, если найдено пропущенное
                сообщение.
              </Text>
            </Box>
          </Flex>
        </Box>
      </Box>

      {/* application section */}
      <Flex
        justifyContent='space-between'
        alignItems='center'
        gap='88px'
        mb='150px'
        className='container'
      >
        <Box maxW='567px'>
          <Heading
            color='black.1'
            fontSize={{ base: '24px', sm: '32px', desktop: '48px' }}
            lineHeight={{ base: '28.8px', sm: '38.4px', desktop: '57.6px' }}
          >
            Контролируйте бизнес{' '}
            <Text as='span' color='brand.base'>
              на ходу
            </Text>
          </Heading>
          <Text
            color='#171923'
            fontSize={{ base: '14px', desktop: '16px' }}
            mt={{ base: '12px', sm: '20px', desktop: '24px' }}
          >
            Будьте в курсе важных событий в вашем бизнесе, в реальном времени.
          </Text>
        </Box>
        <Box
          bg='#F6F7F8'
          pt={{ base: '24px', sm: '31px', desktop: '43px' }}
          borderRadius={{ base: '16px', sm: ' 24px', desktop: '32px' }}
          overflow='hidden'
          h={{ base: '328px', sm: '429px', desktop: '586px' }}
          flex={1}
          textAlign='center'
        >
          <Image mx='auto' src={assets.phone} />
        </Box>
      </Flex>

      {/* notification__box */}
      <Box
        mt={16}
        mb='174px'
        className='home__intro bell__box container'
        px={{ base: '32px', sm: '40px', desktop: '64px' }}
        py={{ base: '28px', sm: '118px', desktop: '144px' }}
        rounded={32}
        position='relative'
      >
        <Heading
          color='black.1'
          fontSize={{ base: '24px', sm: '32px', desktop: '48px' }}
          lineHeight={{ base: '28.8px', sm: '38.4px', desktop: '57.6px' }}
        >
          Попробуйте почти{' '}
          <Text as='span' color='brand.base'>
            даром!
          </Text>
        </Heading>
        <Text
          fontSize={{ base: 'sm', sm: '16px', desktop: 'lg' }}
          lineHeight={{ base: '20px', sm: '24px', desktop: '27px' }}
          mt={{ base: '12px ', desktop: '17px' }}
          mb={{ base: '48px', desktop: '51px' }}
          maxW='584px'
          color='black.1'
        >
          3 дня бесплатно и 30 дней за 1 рубль
        </Text>
        <Image className='bell__img' src={assets.bell} />
        <Box textAlign='center' w='fit-content'>
          <ButtonComponent
            text='Получить 30 дней за 1₽'
            className='gradient-bg'
            color='white'
            size='lg'
            bg='brand.500'
            _hover='none'
          />
          <Text
            as='span'
            fontSize='16px'
            color='black.5'
            textAlign='center'
            mt='17px'
            display='block'
          >
            далее 299 ₽/мес.
          </Text>
        </Box>
      </Box>

      <Flex
        justifyContent='space-between'
        alignItems='center'
        gap='88px'
        mb='150px'
        className='container'
      >
        <Box
          bg='#F6F7F8'
          pt={{ base: '24px', sm: '31px', desktop: '43px' }}
          borderRadius={{ base: '16px', sm: ' 24px', desktop: '32px' }}
          overflow='hidden'
          h={{ base: '328px', sm: '429px', desktop: '586px' }}
          flex={1}
          textAlign='center'
        >
          <Image mx='auto' src={assets.message} />
        </Box>
        <Box maxW='567px'>
          <Heading
            color='black.1'
            fontSize={{ base: '24px', sm: '32px', desktop: '48px' }}
            lineHeight={{ base: '28.8px', sm: '38.4px', desktop: '57.6px' }}
          >
            Оперативная{' '}
            <Text as='span' color='brand.base'>
              поддержка
            </Text>
          </Heading>
          <Text
            color='#171923'
            fontSize={{ base: '14px', desktop: '16px' }}
            mt={{ base: '12px', sm: '20px', desktop: '24px' }}
            mb={{ base: '24px', sm: '40px', desktop: '50px' }}
          >
            Быстрая поддержка в чате Telegram поможет вам настроить подключение
            к сервисам.
          </Text>
          <ButtonComponent
            text='Написать в поддержку'
            bg='brand.500'
            color='white'
            size='lg'
            icon={assets.whiteTelegram}
            _hover='none'
          />
        </Box>
      </Flex>

      {/* try it */}
      <Box
        className='container try__it-box'
        color='white'
        rounded={{ base: '20px', sm: '24px', desktop: '32px' }}
        py={{ base: '45px', sm: '149px', desktop: '137px' }}
        pl={{ base: '32px', sm: '40px', desktop: '70px' }}
      >
        <Heading
          fontSize={{ base: '24px', sm: '32px', desktop: '48px' }}
          lineHeight={{ base: '28.8px', sm: '38.4px', desktop: '57.6px' }}
        >
          Попробуйте почти даром!
        </Heading>
        <Text
          fontSize={{ base: '14px', desktop: '16px' }}
          mt={{ base: '12px', sm: '20px', desktop: '24px' }}
          mb={{ base: '24px', sm: '40px', desktop: '50px' }}
        >
          3 дня бесплатно и 30 дней за 1 рубль
        </Text>
        <Flex gap={6} alignItems='center'>
          <ButtonComponent text='Получить 30 дней за 1₽' size='lg' />
          <Text fontSize={{ base: '14px', desktop: '16px' }}>
            далее 299 ₽/мес.
          </Text>
        </Flex>
        <Image className='try__it-img' src={assets.tryItLogo} />
      </Box>
      <Footer />
    </Box>
  );
};
