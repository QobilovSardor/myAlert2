import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalContent,
  ModalCloseButton,
  Heading,
  Text,
  Flex,
  Box,
  Image,
  ModalBody,
} from '@chakra-ui/react';
import { DragDrop } from './DragDrop';
import { ButtonComponent } from './ButtonComponent';
import { Avito } from './Avito';
import assets from '../assets';
export const ModalComponent = (props) => {
  const { isOpen, onClose, dropno } = props;

  return (
    <>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent
          textAlign='center'
          borderRadius='20px'
          py='54px'
          maxW='804px'
          bg='#F6F7F8'
          sx={{
            '@media (max-width: 705px)': {
              mx: '20px',
              maxW: '100%',
              py: '32px',
            },
          }}
        >
          <ModalHeader>
            <Heading fontSize={{ base: '24px', desktop: '28px' }}>
              Добавление аккаунтов
            </Heading>
            <Text fontWeight='400' fontSize='14px' color='#637381'>
              Тут мы храним ваши аккаунты, они нужны, что бы создавать
              коннекторы, отправляющие уведомления.
            </Text>
          </ModalHeader>

          {dropno ? null : <DragDrop />}

          <ModalCloseButton />
          {dropno ? (
            <ModalBody display='flex' flexDir='column' alignItems='center'>
              <Flex
                sx={{
                  '@media (max-width: 600px)': {
                    flexDir: 'column',
                  },
                }}
                w='full'
                textAlign='center'
                justifyContent='center'
                alignItems='start'
                gap='12px'
              >
                <Box
                  flex={1}
                  bg='#fff'
                  p='24px'
                  borderRadius='12px'
                  margin='0 autor'
                  textAlign='center'
                  w='full'
                  sx={{
                    '@media (max-width: 600px)': {
                      maxW: '100%',
                      w: 'full',
                    },
                  }}
                >
                  <Heading fontSize='16px'>Коннектор</Heading>
                  <Text
                    fontWeight='400'
                    fontSize='16px'
                    my='12px'
                    color='#637381'
                  >
                    Получение данных
                  </Text>
                  <Box w='fit-content' mx='auto'>
                    <Avito rightIcon={assets.avitoLogo} text='Авито' />
                  </Box>
                  <Image
                    src={assets.mediaNextIcon}
                    transform='rotate(90deg)'
                    display='block'
                    my='12px'
                    mx='auto'
                  />
                  <Text
                    fontWeight='400'
                    fontSize='16px'
                    my='12px'
                    color='#637381'
                  >
                    Отправка данных
                  </Text>
                  <Flex flexWrap='wrap' gap='12px' w='fit-content' mx='auto'>
                    <Avito rightIcon={assets.telegram} text='Telegram' />
                    <Avito rightIcon={assets.whatsapp} text='WhatsApp' />
                    <Avito rightIcon={assets.telegram} text='Telegram' />
                  </Flex>
                </Box>
              </Flex>
              <Flex
                sx={{
                  '@media (max-width: 480px)': {
                    flexDir: 'column',
                  },
                }}
                gap='12px'
                justifyContent='end'
                w='full'
                mt='32px'
              >
                <ButtonComponent
                  text='Спросить поддержку'
                  rightIcon={assets.telegram}
                  bg='white'
                  width='100%'
                  color='#2BABEE'
                  sx={{
                    '@media (max-width: 480px)': {
                      width: '100%',
                    },
                  }}
                />
                <ButtonComponent
                  text='Хорошо'
                  width='100%'
                  _hover='none'
                  bg='brand.500'
                  color='#fff'
                />
              </Flex>
            </ModalBody>
          ) : null}
        </ModalContent>
      </Modal>
    </>
  );
};
