import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import  { useParams }  from "react-router-dom";
import { useGetPostQuery } from '../../../Store/postsApi';

const DetailedPost = () => {
    const { id } =  useParams();
    const { data } = useGetPostQuery(id);
    console.log(data);
    const currentPost = data ?? [];
  return (
    <Card className='mt-3 mx-auto w-75 text-center' style={{ width: '18rem' }}>
        <Card.Body>
        <Card.Title>{currentPost.title}</Card.Title>
        <Card.Subtitle className='mb-2 text-muted'>
          Username: {currentPost.userId}
        </Card.Subtitle>
        <Card.Text>{currentPost.body}</Card.Text>
        <Card.Link href='/'><Button>Назад</Button></Card.Link>
      </Card.Body>
    </Card>
  );
};

export default DetailedPost;
