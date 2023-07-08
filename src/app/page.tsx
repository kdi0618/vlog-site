import { css } from '../../styled-system/css';
import { blogData } from './blogData';

import { BlogList } from './components/blogList/BlogList';
 
export default function Home() {
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
