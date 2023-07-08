'use client'

import { css } from '../../../../../styled-system/css';
import { BlogItem } from '@/types/blogItem';

export function BlogListItem(props: BlogItem) {
  const { title, image, alt, date, description } = props;

  return (
    <li className={css({
      background: `no-repeat url(${image})`,
      backgroundSize: 'contain',
      flexShrink: 0,
      transition: 'all 0.3s ease-in-out',
      height: '270px',
      width: '270px',
      _hover: {
        transition: 'all 0.3s ease-in-out',
        transform: 'scale(1.025)',
        boxShadow: '0 0 5px 0 rgba(0, 0, 0, 0.5)',
      }
    })}>
      <a href="" className={css({
        display: 'block',
        position: 'relative',
        width: '100%',
        height: '100%',
      })}>
        <div>
          <img src={image} alt={alt} />
        </div>
        <time className={css({
          fontSize: '10px',
          fontFamily: 'sans-serif',
          position: 'absolute',
          right: '-60px',
          top: '20px',
          transform: 'rotate(90deg)',
        })}>
          {date}
        </time>
        <div className={css({
          position: 'absolute',
          bottom: '20px',
          left: '-30px',
          width: '100%',
        })}
        >
          <div className={css({
            backgroundColor: '#ffffff',
            fontSize: '14px',
            fontFamily: 'sans-serif',
            letterSpacing: '1.2px',
            fontWeight: '300',
            marginBottom: '10px',
          })}>
            {title}
          </div>
          <p className={css({
            backgroundColor: '#ffffff',
            fontSize: '16px',
            fontFamily: 'sans-serif',
            fontWeight: '600',
          })}
          >
            {description}
          </p>
        </div>
      </a>
    </li>
  )
}
