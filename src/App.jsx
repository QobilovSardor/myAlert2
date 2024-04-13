import React from 'react';
import { Route, Routes } from 'react-router-dom';
import router from './router';
import { Flex } from '@chakra-ui/react';
import { DefaultLayout } from './layout/DefaultLayout';
import Account from './pages/Account';
import { Suspense } from 'react';
import { Home, Offer, Login, NotFound, SendCode } from './pages';

function App() {
  return (
    <Flex className='app-box' width={'full'}>
      <Routes width='full'>
        <Route element={<DefaultLayout />}>
          <Route index element={<Account />} />
          {router.map((router, index) => {
            const { path, component: Component } = router;
            return (
              <Route
                key={index}
                path={path}
                element={
                  <Suspense>
                    <Component />
                  </Suspense>
                }
              />
            );
          })}
        </Route>
        <Route path='/home' element={<Home />} />
        <Route path='/offer' element={<Offer />} />
        <Route path='/login' element={<Login />} />
        <Route path='/login/send-code' element={<SendCode />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Flex>
  );
}

export default App;
