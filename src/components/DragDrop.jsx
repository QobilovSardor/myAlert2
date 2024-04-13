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

// Thing to Drag
const DraggableThing = (props) => {
  const dragStart = (e) => {
    console.log('dragging ', e.target.id);
    e.dataTransfer.setData('animal', e.target.id);
  };

  return (
    <Flex
      bg='#F6F7F8'
      py='8px'
      px='12px'
      borderRadius='6px'
      h='fit-content'
      gap={1}
      draggable='true'
      onDragStart={dragStart}
    >
      <Text
        fontSize='14px'
        fontWeight={500}
        color='#171923'
        id={props.id}
        whiteSpace='none'
      >
        {props.id}
      </Text>
      <Image src={props.icon} />
    </Flex>
  );
};

// Element that receives DroppableThings
const DroppableArea = (props) => {
  // https://developer.mozilla.org/en-US/docs/Web/API/Document/drop_event
  const drop = (e) => {
    const thingBeingDragged = e.dataTransfer.getData('animal');
    e.target.appendChild(document.getElementById(thingBeingDragged));

    // Remove the highlight
    // because the onDragLeave won't fire after onDrop
    e.target.classList.remove('activeDropArea');
  };

  // https://developer.mozilla.org/en-US/docs/Web/API/Document/dragover_event
  const allowDrop = (e) => {
    // The default action of onDragOver
    // is to cancel the drop operation  -.-
    // so we need to prevent that
    e.preventDefault();
  };

  // https://developer.mozilla.org/en-US/docs/Web/API/Document/dragenter_event
  const dragEnter = (e) => {
    // Drag Enter is used to
    // highlight the drop area
    e.target.classList.add('activeDropArea');
  };

  // https://developer.mozilla.org/en-US/docs/Web/API/Document/dragleave_event
  const dragLeave = (e) => {
    // Drag Leave is used to
    // remove the highlight in the drop area
    e.target.classList.remove('activeDropArea');
  };
  return (
    // <div
    //   className='droppableArea'
    //   id={props.id}
    //   onDrop={drop}
    //   onDragOver={allowDrop}
    //   onDragEnter={dragEnter}
    //   onDragLeave={dragLeave}
    // >
    //   <p>picked animals 🤲</p>
    // </div>
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
      >
        {/* <Avito rightIcon={assets.whatsapp} text='WhatsApp' />
        <Avito rightIcon={assets.telegram} text='Telegram' /> */}
      </Flex>
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
