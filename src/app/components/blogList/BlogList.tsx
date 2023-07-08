'use client'

import { css } from '../../../../styled-system/css';
import { BlogItem } from '@/types/blogItem';

import { BlogListItem } from './blogListItem/BlogListItem';

interface BlogListProps {
  blogData: Array<BlogItem>;
}

export function BlogList(props: BlogListProps) {
  const { blogData } = props;

  return (
    <ul
      className={css({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',

        _after: {
          content: '""',
          display: 'block',
          width: '30%',
        }
      })}
    >
      {blogData.map((blog) => (
        <BlogListItem {...blog} key={blog.id} />
      ))}
    </ul>
  )
}
