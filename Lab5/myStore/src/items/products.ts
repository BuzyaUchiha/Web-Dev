import { Category } from "./categories";

export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    rating: number;
    url: string;
    imgURL: string;
    link: string;
    category: Category;
    likes: number;
  };

export const products = [
  {
    id: 1,
    name: "Apple iPhone 15 Pro Max",
    price: 623053,
    description: "256 GB/Gray",
    imgURL: "https://resources.cdn-kaspi.kz/img/m/p/hc1/h65/83559848181790.png?format=gallery-medium",
    rating: "5",
    url: "https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-113138420/?c=750000000",
    likes: 200,
    link: "https://t.me/UBuzya",
  },

  {
    id: 2,
    name: "AirPods Max",
    price: 277354,
    description: "Black",
    imgURL: "https://resources.cdn-kaspi.kz/img/m/p/hf4/hcc/64145010163742.jpg?format=gallery-medium",
    rating: "5",
    url: "https://kaspi.kz/shop/p/apple-airpods-max-chernyi-100950846/?c=750000000",
    likes: 105,
    link: "https://t.me/UBuzya",
  },
  {
    id: 3,
    name: "Apple Magic Mouse 2",
    price: 39498,
    description: "white",
    imgURL: "https://resources.cdn-kaspi.kz/img/m/p/h8c/h88/63761348722718.jpg?format=gallery-medium",
    rating: "5",
    url: "https://kaspi.kz/shop/p/apple-magic-mouse-2-belyi-9100708/?c=750000000",
    likes: 50,
    link: "https://t.me/UBuzya",
  },
  {
    id: 4,
    name: "Apple iPhone 14",
    price: 324993,
    description: "128Gb blue",
    imgURL: "https://resources.cdn-kaspi.kz/img/m/p/hbc/h02/64481569701918.jpg?format=gallery-medium",
    rating: "5",
    url: "https://kaspi.kz/shop/p/apple-iphone-14-128gb-goluboi-106363150/?c=750000000",
    likes: 10,
    link: "https://t.me/UBuzya",
  },
  {
    id: 5,
    name: " Samsung A54 5G",
    price: 158478,
    description: "8 GB/128 GB/Green",
    imgURL: "https://resources.cdn-kaspi.kz/img/m/p/hda/h75/84097172668446.jpg?format=gallery-medium",
    rating: "5",
    url: "https://kaspi.kz/shop/p/samsung-a54-5g-8-gb-128-gb-zelenyi-113622387/?c=750000000",
    likes: 25,
    link: "https://t.me/UBuzya",
  },
  {
    id: 6,
    name: "Apple iMac 24",
    price: 799700,
    description: "8 Gb/256 Gb",
    imgURL: "https://resources.cdn-kaspi.kz/img/m/p/hc3/hdf/84571183284254.jpg?format=gallery-medium",
    rating: "5",
    url: "https://kaspi.kz/shop/p/apple-imac-24-mqrc3-sinii-114840287/?c=750000000",
    likes: 75,
    link: "https://t.me/UBuzya",
  },
  {
    id: 7,
    name: "JBL PartyBox 110",
    price: 242148,
    description: "Black",
    imgURL: "https://resources.cdn-kaspi.kz/img/m/p/h11/h40/64377202376734.jpg?format=gallery-medium",
    rating: "5",
    url: "https://kaspi.kz/shop/p/jbl-partybox-110-chernyi-102716114/?c=750000000",
    likes: 90,
    link: "https://t.me/UBuzya",
  },
  {
    id: 8,
    name: "Apple Vision Pro 1024 Gb",
    price: 2897200,
    description: "1024 Gb",
    imgURL: "https://resources.cdn-kaspi.kz/img/m/p/h8e/h73/85124918935582.jpg?format=gallery-medium",
    rating: "5",
    url: "https://kaspi.kz/shop/p/apple-vision-pro-1024-gb-116503057/?c=750000000",
    likes: 80,
    link: "https://t.me/UBuzya",
  },
  {
    id: 9,
    name: "Apple HomePod",
    price: 77991,
    description: "Apple Siri",
    imgURL: "https://resources.cdn-kaspi.kz/img/m/p/hcf/h56/64188343058462.jpg?format=gallery-medium",
    rating: "5",
    url: "https://kaspi.kz/shop/p/apple-homepod-mini-sinii-103117993/?c=750000000",
    likes: 5,
    link: "https://t.me/UBuzya",
  },
  {
    id: 10,
    name: "Logitech G Pro X Superlight",
    price: 53999,
    description: "White",
    imgURL: "https://resources.cdn-kaspi.kz/img/m/p/h90/h02/64222437474334.jpg?format=gallery-medium",
    rating: "4",
    url: "https://kaspi.kz/shop/p/logitech-g-pro-x-superlight-belyi-102712667/?c=750000000",
    likes: 77,
    link: "https://t.me/UBuzya",
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
