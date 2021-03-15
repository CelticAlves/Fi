import React, { useState } from 'react'

const Content = () => {
  const [obj, setObj] = useState({ name: 'Luis', secondName: 'Alves' });
  return (<div className='luis'>{obj.name}
  </div>);
}

export default Content;
