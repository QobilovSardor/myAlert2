import React from 'react';
import { Box, Heading, ListItem, Text, UnorderedList } from '@chakra-ui/react';

export const PersonalData = () => {
  return (
    <Box mx='20px' my='50px' className='offer'>
      <Heading textAlign='center' size='lg'>
        Согласие на обработку персональных данных
      </Heading>
      <Text mt='4'>
        Лицензиат, приобретающий подписку на сервис «My Alert», дает
        <b>
          {' '}
          Индивидуальному предпринимателю Полежаеву Александру Сергеевичу
        </b>{' '}
        (ИНН: 780230756507, далее – «Лицензиар») согласие на обработку своих
        персональных данных на следующих условиях:
      </Text>
      <UnorderedList mt='4' spacing={3}>
        <ListItem>
          Лицензиар обрабатывает персональные данные в целях исполнения своих
          обязательств:
          <UnorderedList mt='2' spacing={2}>
            <ListItem>
              По Публичной оферте о предоставлении права использования сервиса
              «My Alert» - для предоставления доступа к сервису;
            </ListItem>
            <ListItem>
              По Соглашению об использовании платной подписки на сервис «My
              Alert» - для обеспечения возможности автоматического продления
              подписки Лицензиата.
            </ListItem>
          </UnorderedList>
        </ListItem>
        <ListItem>
          Лицензиар вправе обрабатывать следующие категории персональных данных:
          ФИО, контактный номер телефона, e-mail, адрес регистрации/жительства,
          реквизиты банковской карты (счета).
        </ListItem>
        <ListItem>
          Лицензиар вправе осуществлять следующие действия с персональными
          данными Заказчика: сбор, запись, систематизация, накопление, хранение,
          уточнение (обновление, изменение), использование, обезличивание,
          удаление, уничтожение, распространение (платежным системам и
          банковским организациям для целей оплаты).
        </ListItem>
        <ListItem>
          Персональные данные Лицензиата удаляются на основании его запроса на
          электронную почту: Polezhaev.advert@gmail.com.
        </ListItem>
        <ListItem>
          Настоящее Согласие дается Лицензиатом в полном объеме при покупке
          подписки на сервис «My Alert» и действует до момента окончания
          подписки.
        </ListItem>
      </UnorderedList>
      <Text mt='20px'>
        <b>Лицензиар</b>
      </Text>
      <Text>
        <b>Индивидуальный предприниматель</b> <br /> Полежаев Александр
        Сергеевич
        <br />
        <b>ИНН:</b> 780230756507
        <br />
        <b>ОГРНИП:</b> 323784700297912
        <br />
        Адрес для корреспонденции: 195257, г. Санкт-Петербург, Гражданский
        пр-кт, д. 74, корп. 2, кв. 30
        <br />
        <b>Реквизиты счета:</b> <br />
        <b>БАНК:</b> АО «ТИНЬКОФФ БАНК» <br /> р/с: 40802810600005234355 <br />{' '}
        <b>БИК:</b> 044525974 <br /> <b>к/с:</b> 30101810145250000974 <br />{' '}
        <b>Контактный номер телефона:</b> +7 (999) 248 60 30
        <br />
        <b>E-mail:</b> Polezhaev.advert@gmail.com
      </Text>
    </Box>
  );
};