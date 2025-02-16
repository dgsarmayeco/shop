import React from 'react';
import { Breadcrumb } from 'antd';
import { useRouter } from 'next/router';

function BreadCrumb() {
  const router = useRouter();

  // Extract the part after "dashboard/"
  const path = router.pathname.split('/dashboard/')[1] || '';

  return (

      <Breadcrumb
        className="!text-lg"
        items={[
          {
            title: <a href='/dashboard'>dashboard</a>,
          },
          ...(path ? [{ title: path }] : []),
        ]}
      />

  );
}

export default BreadCrumb;
