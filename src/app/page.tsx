import { css } from '../../styled-system/css';

import { BlogList } from './components/blogList/BlogList';

export async function getBlogData() {
  const res = await fetch('https://share-with.g.kuroco.app/rcms-api/1/blog-list');
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  return res.json();
}

export default async function Home() {
  const resData = await getBlogData();
  const blogData = resData.list;

  return (
    <section className={css({
      backgroundColor: '#FFFAF0',
    })}>
      <div className={css({
        margin: '0 auto',
        width: '1000px',
      })}>
        <h2 className={css({
          fontWeight: '300px',
          fontSize: '60px',
          marginBottom: '50px',
        })}>New Post</h2>
        <BlogList blogData={blogData} />
      </div>
    </section>
  )
}
