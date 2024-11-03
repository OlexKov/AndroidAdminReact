import React from 'react';
import './App.css'
import { Layout } from './components/layout';
import { Route, Routes } from 'react-router-dom';
import Error from './components/pages/error'
import { CategoryTable } from './components/pages/categories';
import { ProductTable } from './components/pages/products';


const App: React.FC = () => {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<CategoryTable />} />
        <Route path='/products' element={<ProductTable />} />
        <Route path="*" element={
          <Error
            status="404"
            title="404"
            subTitle="Вибачте, сторінкт на яку ви намагаєтесь перейти не існує."
          />} />

        <Route path="forbiden" element={
          <Error
            status="403"
            title="403"
            subTitle="В доступі відмовлено.Ви не маєте дозволу для доступу до цієї сторінки."
          />} />
      </Route>

    </Routes>
  );
};

export default App;