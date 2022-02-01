import React from 'react';
import { Outlet } from 'react-router-dom';

export default function Wrapper() {
  return <div>
      <h1> User Panel Page  </h1>
      <Outlet/>
  </div>;
}
