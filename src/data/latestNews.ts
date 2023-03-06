import type { LatestNewsItem } from '@/components/latest-news/types';
import newsImage1 from '../assets/images/crypto-news/news-1.jpg';
import newsImage2 from '../assets/images/crypto-news/news-2.jpg';
import newsImage3 from '../assets/images/crypto-news/news-3.jpg';

export const latestNews: LatestNewsItem[] = [
  {
    id: 1,
    title: 'This Week in Crypto: 19th January 2023',
    image: newsImage1,
    date: 'Jan 19th 2023',
    type: 'Newsletter',
  },
  {
    id: 2,
    title: 'This Week in Crypto: 12th January 2023',
    image: newsImage2,
    date: 'Jan 12th 2023',
    type: 'Newsletter',
  },
  {
    id: 3,
    title: 'BTC Markets Brand Refresh',
    image: newsImage3,
    date: 'Dec 27th 2022',
    type: 'Informational',
  },
];
