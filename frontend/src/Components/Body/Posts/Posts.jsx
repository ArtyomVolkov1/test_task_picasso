import { useGetPostsQuery } from '../../../Store/postsApi';
import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Posts = () => {
  const [page, setPage] = useState(0);
  const { data, isFetching } = useGetPostsQuery(page);
  const posts = data ?? [];
  useEffect(() => {
    const onScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;
      if (scrolledToBottom && !isFetching) {
        console.log('Получаем данные...');
        setPage(page + 1);
      }
    };

    document.addEventListener('scroll', onScroll);

    return () => {
      document.removeEventListener('scroll', onScroll);
    };
  }, [page, isFetching]);

  return (
    <ListGroup as='ol' numbered>
      {posts.map((post) => {
        const uniqId = _.uniqueId();
        return (
          <ListGroup.Item
            className='d-flex justify-content-between align-items-start'
            as='li'
            key={uniqId}
          >
            <div className=' text-truncate ms-2 me-auto'>
              <div className='fw-bold'>{post.title}</div>
              {post.body}
            </div>
            <Link to={'/post/' + post.id}>
              <Button size='sm' className='ml-3'>
                Просмотр
              </Button>
            </Link>
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
};

export default Posts;
