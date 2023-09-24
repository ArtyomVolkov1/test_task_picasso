import React from 'react';

const Error = () => {
  return (
    <div className="text-center">
    <h1 className="h4 text-muted">Такой страницы не существует</h1>
    <p className="text-muted">
      Вы можете перейти на главную
      {' '}
      <a href="/">
        Вернуться
      </a>
    </p>
  </div>
  )
};

export default Error;