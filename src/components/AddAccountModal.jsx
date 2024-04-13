import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalContent,
  ModalCloseButton,
  Heading,
  Text,
} from '@chakra-ui/react';
import { DragDrop } from './DragDrop';
export const AddAccountModal = (props) => {
  const { isOpen, onClose } = props;

  return (
    <>
      <Modal onClose={onClose} isOpen={true} isCentered>
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

          <DragDrop />

          <ModalCloseButton />
          {/* <ModalBody display='flex' flexDir='column' alignItems='center'>
            <Flex
              sx={{
                '@media (max-width: 600px)': {
                  flexDir: 'column',
                },
              }}
              alignItems='start'
              gap='12px'
            >
              <Box
                sx={{
                  '@media (max-width: 600px)': {
                    maxW: '100%',
                  },
                }}
                maxW='50%'
                bg='#fff'
                p='24px'
                borderRadius='12px'
              >
                <Heading fontSize='16px'>Ваши аккаунты</Heading>
                <Flex flexWrap='wrap' gap='12px' mt='16px'>
                  <Avito rightIcon={assets.avitoLogo} text='Авито' />
                  <Avito rightIcon={assets.sladki} text='Мой Склад' />
                  <Avito rightIcon={assets.WildBerries} text='WildBerries' />
                  <Avito rightIcon={assets.telegram} text='Telegram' />
                  <Avito rightIcon={assets.whatsapp} text='WhatsApp' />
                </Flex>
              </Box>

              <Box
                textAlign='left'
                flex={1}
                bg='#fff'
                p='24px'
                borderRadius='12px'
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
                <Box w='fit-content'>
                  <Avito rightIcon={assets.avitoLogo} text='Авито' />
                </Box>
                <Image
                  src={assets.mediaNextIcon}
                  transform='rotate(90deg)'
                  display='block'
                  my='12px'
                />
                <Text
                  fontWeight='400'
                  fontSize='16px'
                  my='12px'
                  color='#637381'
                >
                  Отправка данных
                </Text>
                <Flex gap='12px' w='fit-content'>
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
          </ModalBody> */}
        </ModalContent>
      </Modal>
    </>
  );
};
