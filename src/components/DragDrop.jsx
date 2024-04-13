import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import assets from '../assets';
import { Avito } from './Avito';
const socialMediaLinks = [
  { rightIcon: assets.avitoLogo, text: 'Авито' },
  { rightIcon: assets.sladki, text: 'Мой Склад' },
  { rightIcon: assets.WildBerries, text: 'WildBerries' },
  { rightIcon: assets.telegram, text: 'Telegram' },
  { rightIcon: assets.whatsapp, text: 'WhatsApp' },
];

const DraggableThing = (props) => {
  const dragStart = (e) => {
    e.dataTransfer.setData('socialMediaLinks', e.target.id);
    console.log(e.dataTransfer);
  };

  return (
    <Text
      bg='#F6F7F8'
      py='8px'
      pl='12px'
      pr='40px'
      borderRadius='6px'
      h='fit-content'
      gap={1}
      cursor='grab'
      draggable='true'
      onDragStart={dragStart}
      fontSize='14px'
      fontWeight={500}
      color='#171923'
      id={props.id}
      whiteSpace='none'
      bgImage={props.icon}
      bgRepeat='no-repeat'
      bgPos='90% center'
    >
      {props.id}
    </Text>
  );
};

const DroppableArea = (props) => {
  const drop = (e) => {
    const thingBeingDragged = e.dataTransfer.getData('socialMediaLinks');
    e.target.appendChild(document.getElementById(thingBeingDragged));
    e.target.classList.remove('activeDropArea');
  };

  const allowDrop = (e) => {
    e.preventDefault();
  };

  const dragEnter = (e) => {
    e.target.classList.add('activeDropArea');
  };

  const dragLeave = (e) => {
    e.target.classList.remove('activeDropArea');
  };
  return (
    <Box
      maxW='50%'
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
      <Text fontWeight='400' fontSize='16px' my='12px' color='#637381'>
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
      <Text fontWeight='400' fontSize='16px' my='12px' color='#637381'>
        Отправка данных
      </Text>
      <Flex
        className='droppableArea'
        id={props.id}
        onDrop={drop}
        onDragOver={allowDrop}
        onDragEnter={dragEnter}
        onDragLeave={dragLeave}
        flexWrap='wrap'
        gap='12px'
        w='fit-content'
      ></Flex>
    </Box>
  );
};

export const DragDrop = () => {
  return (
    <Flex px='36px' gap='12px'>
      <Box
        sx={{
          '@media (max-width: 600px)': {
            maxW: '100%',
          },
        }}
        maxW='50%'
        w='100%'
        bg='#fff'
        p='24px'
        borderRadius='12px'
        className='left__box'
      >
        <Heading fontSize='16px'>Ваши аккаунты</Heading>
        <Flex flexWrap='wrap' gap='12px' mt='14px'>
          {socialMediaLinks.map((link) => (
            <DraggableThing
              key={link.text}
              id={link.text}
              icon={link.rightIcon}
            />
          ))}
        </Flex>
      </Box>
      <DroppableArea />
    </Flex>
  );
};
