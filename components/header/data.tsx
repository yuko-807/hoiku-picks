import React from 'react';
import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
export const links = [
  {
    id: 1,
    url: '/',
    text: 'ユーザーの方はこちら',
  },
  {
    id: 2,
    url: '/client',
    text: '事業者の方はこちら',
  },
  {
    id: 3,
    url: '/others/company',
    text: '会社概要',
  },
  {
    id: 4,
    url: '/others/faq',
    text: 'よくある質問',
  },
  {
    id: 5,
    url: '/others/conect',
    text: 'お問い合わせ',
  },
  {
    id: 6,
    url: '/others/team',
    text: '利用規約',
  },
];

export const social = [
  {
    id: 1,
    url: 'https://www.twitter.com',
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: 'https://www.twitter.com',
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: 'https://www.twitter.com',
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: 'https://www.twitter.com',
    icon: <FaBehance />,
  },
];
