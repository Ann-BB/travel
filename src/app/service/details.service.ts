import { Injectable } from '@angular/core';
import { IDetails } from '../models/details';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  data: IDetails[] =[
    {
      id: 0,
      title: "HEADER_TITLE_1",
      section: {
        categories: {
          "category_1": [
            {
              "title": "HEADER_TITLE_1_1",
              "index": "55",
              "firstSection": {
                "title": "Bakhmaro",
                "content": "Free your mind in a cozy village, with no cars in winter.",
                "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
              },
              "secondSection": [
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                }
              ]
            },
            {
              "title": "HEADER_TITLE_1_2",
              "index": "55",
              "firstSection": {
                "title": "Bakhmaro",
                "content": "Free your mind in a cozy village, with no cars in winter.",
                "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
              },
              "secondSection": [
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                }
              ]
            },
            {
  
              "title": "HEADER_TITLE_1_1",
              "index": "55",
              "firstSection": {
                "title": "Bakhmaro",
                "content": "Free your mind in a cozy village, with no cars in winter.",
                "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
              },
              "secondSection": [
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                }
              ]
            },
            {
  
              "title": "HEADER_TITLE_1_1",
              "index": "55",
              "firstSection": {
                "title": "Bakhmaro",
                "content": "Free your mind in a cozy village, with no cars in winter.",
                "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
              },
              "secondSection": [
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                }
              ]
            },
            {
  
              "title": "HEADER_TITLE_1_1",
              "index": "55",
              "firstSection": {
                "title": "Bakhmaro",
                "content": "Free your mind in a cozy village, with no cars in winter.",
                "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
              },
              "secondSection": [
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                }
              ]
            },
            {
              "title": "HEADER_TITLE_1_1",
              "index": "55",
              "firstSection": {
                "title": "Bakhmaro",
                "content": "Free your mind in a cozy village, with no cars in winter.",
                "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
              },
              "secondSection": [
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                }
              ]
            }
          ],
          "category_2": [
            {
              "title": "HEADER_TITLE_1_1",
              "index": "55",
              "firstSection": {
                "title": "Bakhmaro",
                "content": "Free your mind in a cozy village, with no cars in winter.",
                "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
              },
              "secondSection": [
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                }
              ]
            },
            {
  
              "title": "HEADER_TITLE_1_1",
              "index": "55",
              "firstSection": {
                "title": "Bakhmaro",
                "content": "Free your mind in a cozy village, with no cars in winter.",
                "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
              },
              "secondSection": [
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                }
              ]
            },
            {
              "title": "HEADER_TITLE_1_1",
              "index": "55",
              "firstSection": {
                "title": "Bakhmaro",
                "content": "Free your mind in a cozy village, with no cars in winter.",
                "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
              },
              "secondSection": [
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                }
              ]
            },
            {
              "title": "HEADER_TITLE_1_1",
              "index": "55",
              "firstSection": {
                "title": "Bakhmaro",
                "content": "Free your mind in a cozy village, with no cars in winter.",
                "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
              },
              "secondSection": [
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                }
              ]
            },
            {
              "title": "HEADER_TITLE_1_1",
              "index": "55",
              "firstSection": {
                "title": "Bakhmaro",
                "content": "Free your mind in a cozy village, with no cars in winter.",
                "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
              },
              "secondSection": [
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                }
              ]
            },
            {
              "title": "HEADER_TITLE_1_1",
              "index": "55",
              "firstSection": {
                "title": "Bakhmaro",
                "content": "Free your mind in a cozy village, with no cars in winter.",
                "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
              },
              "secondSection": [
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                }
              ]
            }
          ],
          "category_3": [
            {
              "title": "HEADER_TITLE_1_1",
              "index": "55",
              "firstSection": {
                "title": "Bakhmaro",
                "content": "Free your mind in a cozy village, with no cars in winter.",
                "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
              },
              "secondSection": [
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                }
              ]
            },
            {
              "title": "HEADER_TITLE_1_1",
              "index": "55",
              "firstSection": {
                "title": "Bakhmaro",
                "content": "Free your mind in a cozy village, with no cars in winter.",
                "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
              },
              "secondSection": [
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                }
              ]
            },
            {
              "title": "HEADER_TITLE_1_1",
              "index": "55",
              "firstSection": {
                "title": "Bakhmaro",
                "content": "Free your mind in a cozy village, with no cars in winter.",
                "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
              },
              "secondSection": [
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                }
              ]
            },
            {
              "title": "HEADER_TITLE_1_1",
              "index": "55",
              "firstSection": {
                "title": "Bakhmaro",
                "content": "Free your mind in a cozy village, with no cars in winter.",
                "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
              },
              "secondSection": [
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                }
              ]
            },
            {
              "title": "HEADER_TITLE_1_1",
              "index": "55",
              "firstSection": {
                "title": "Bakhmaro",
                "content": "Free your mind in a cozy village, with no cars in winter.",
                "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
              },
              "secondSection": [
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                }
              ]
            },
            {
              "title": "HEADER_TITLE_1_1",
              "index": "55",
              "firstSection": {
                "title": "Bakhmaro",
                "content": "Free your mind in a cozy village, with no cars in winter.",
                "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
              },
              "secondSection": [
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                }
              ]
            }
          ]
        },
        imgContent: [
          {
            title: "HEADER_IMG_TITLE_1",
            imgBg: "assets/img/header-img-1"
          }
        ]
      }
    },
    {
      id: 1,
      title: "HEADER_TITLE_1",
      section: {
        categories: {
          "category_1": [
            {
              "title": "HEADER_TITLE_1_1",
              "index": "55",
              "firstSection": {
                "title": "Bakhmaro",
                "content": "Free your mind in a cozy village, with no cars in winter.",
                "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
              },
              "secondSection": [
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                }
              ]
            },
            {
              "title": "HEADER_TITLE_1_2",
              "index": "55",
              "firstSection": {
                "title": "Bakhmaro",
                "content": "Free your mind in a cozy village, with no cars in winter.",
                "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
              },
              "secondSection": [
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                }
              ]
            },
            {
  
              "title": "HEADER_TITLE_1_1",
              "index": "55",
              "firstSection": {
                "title": "Bakhmaro",
                "content": "Free your mind in a cozy village, with no cars in winter.",
                "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
              },
              "secondSection": [
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                }
              ]
            },
            {
  
              "title": "HEADER_TITLE_1_1",
              "index": "55",
              "firstSection": {
                "title": "Bakhmaro",
                "content": "Free your mind in a cozy village, with no cars in winter.",
                "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
              },
              "secondSection": [
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                }
              ]
            },
            {
  
              "title": "HEADER_TITLE_1_1",
              "index": "55",
              "firstSection": {
                "title": "Bakhmaro",
                "content": "Free your mind in a cozy village, with no cars in winter.",
                "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
              },
              "secondSection": [
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                }
              ]
            },
            {
              "title": "HEADER_TITLE_1_1",
              "index": "55",
              "firstSection": {
                "title": "Bakhmaro",
                "content": "Free your mind in a cozy village, with no cars in winter.",
                "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
              },
              "secondSection": [
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                }
              ]
            }
          ],
          "category_2": [
            {
              "title": "HEADER_TITLE_1_1",
              "index": "55",
              "firstSection": {
                "title": "Bakhmaro",
                "content": "Free your mind in a cozy village, with no cars in winter.",
                "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
              },
              "secondSection": [
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                }
              ]
            },
            {
  
              "title": "HEADER_TITLE_1_1",
              "index": "55",
              "firstSection": {
                "title": "Bakhmaro",
                "content": "Free your mind in a cozy village, with no cars in winter.",
                "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
              },
              "secondSection": [
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                }
              ]
            },
            {
              "title": "HEADER_TITLE_1_1",
              "index": "55",
              "firstSection": {
                "title": "Bakhmaro",
                "content": "Free your mind in a cozy village, with no cars in winter.",
                "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
              },
              "secondSection": [
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                }
              ]
            },
            {
              "title": "HEADER_TITLE_1_1",
              "index": "55",
              "firstSection": {
                "title": "Bakhmaro",
                "content": "Free your mind in a cozy village, with no cars in winter.",
                "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
              },
              "secondSection": [
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                }
              ]
            },
            {
              "title": "HEADER_TITLE_1_1",
              "index": "55",
              "firstSection": {
                "title": "Bakhmaro",
                "content": "Free your mind in a cozy village, with no cars in winter.",
                "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
              },
              "secondSection": [
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                }
              ]
            },
            {
              "title": "HEADER_TITLE_1_1",
              "index": "55",
              "firstSection": {
                "title": "Bakhmaro",
                "content": "Free your mind in a cozy village, with no cars in winter.",
                "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
              },
              "secondSection": [
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                }
              ]
            }
          ],
          "category_3": [
            {
              "title": "HEADER_TITLE_1_1",
              "index": "55",
              "firstSection": {
                "title": "Bakhmaro",
                "content": "Free your mind in a cozy village, with no cars in winter.",
                "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
              },
              "secondSection": [
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                }
              ]
            },
            {
              "title": "HEADER_TITLE_1_1",
              "index": "55",
              "firstSection": {
                "title": "Bakhmaro",
                "content": "Free your mind in a cozy village, with no cars in winter.",
                "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
              },
              "secondSection": [
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                }
              ]
            },
            {
              "title": "HEADER_TITLE_1_1",
              "index": "55",
              "firstSection": {
                "title": "Bakhmaro",
                "content": "Free your mind in a cozy village, with no cars in winter.",
                "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
              },
              "secondSection": [
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                }
              ]
            },
            {
              "title": "HEADER_TITLE_1_1",
              "index": "55",
              "firstSection": {
                "title": "Bakhmaro",
                "content": "Free your mind in a cozy village, with no cars in winter.",
                "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
              },
              "secondSection": [
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                }
              ]
            },
            {
              "title": "HEADER_TITLE_1_1",
              "index": "55",
              "firstSection": {
                "title": "Bakhmaro",
                "content": "Free your mind in a cozy village, with no cars in winter.",
                "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
              },
              "secondSection": [
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                }
              ]
            },
            {
              "title": "HEADER_TITLE_1_1",
              "index": "55",
              "firstSection": {
                "title": "Bakhmaro",
                "content": "Free your mind in a cozy village, with no cars in winter.",
                "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
              },
              "secondSection": [
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                }
              ]
            }
          ]
        },
        imgContent: [
          {
            title: "HEADER_IMG_TITLE_1",
            imgBg: "assets/img/header-img-1"
          }
        ]
      }
    },
    {
      id: 2,
      title: "HEADER_TITLE_1",
      section: {
        categories: {
          "category_1": [
            {
              "title": "HEADER_TITLE_1_1",
              "index": "55",
              "firstSection": {
                "title": "Bakhmaro",
                "content": "Free your mind in a cozy village, with no cars in winter.",
                "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
              },
              "secondSection": [
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                }
              ]
            },
            {
              "title": "HEADER_TITLE_1_2",
              "index": "55",
              "firstSection": {
                "title": "Bakhmaro",
                "content": "Free your mind in a cozy village, with no cars in winter.",
                "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
              },
              "secondSection": [
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                }
              ]
            },
            {
  
              "title": "HEADER_TITLE_1_1",
              "index": "55",
              "firstSection": {
                "title": "Bakhmaro",
                "content": "Free your mind in a cozy village, with no cars in winter.",
                "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
              },
              "secondSection": [
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                }
              ]
            },
            {
  
              "title": "HEADER_TITLE_1_1",
              "index": "55",
              "firstSection": {
                "title": "Bakhmaro",
                "content": "Free your mind in a cozy village, with no cars in winter.",
                "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
              },
              "secondSection": [
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                }
              ]
            },
            {
  
              "title": "HEADER_TITLE_1_1",
              "index": "55",
              "firstSection": {
                "title": "Bakhmaro",
                "content": "Free your mind in a cozy village, with no cars in winter.",
                "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
              },
              "secondSection": [
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                }
              ]
            },
            {
              "title": "HEADER_TITLE_1_1",
              "index": "55",
              "firstSection": {
                "title": "Bakhmaro",
                "content": "Free your mind in a cozy village, with no cars in winter.",
                "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
              },
              "secondSection": [
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                }
              ]
            }
          ],
          "category_2": [
            {
              "title": "HEADER_TITLE_1_1",
              "index": "55",
              "firstSection": {
                "title": "Bakhmaro",
                "content": "Free your mind in a cozy village, with no cars in winter.",
                "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
              },
              "secondSection": [
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                }
              ]
            },
            {
  
              "title": "HEADER_TITLE_1_1",
              "index": "55",
              "firstSection": {
                "title": "Bakhmaro",
                "content": "Free your mind in a cozy village, with no cars in winter.",
                "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
              },
              "secondSection": [
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                }
              ]
            },
            {
              "title": "HEADER_TITLE_1_1",
              "index": "55",
              "firstSection": {
                "title": "Bakhmaro",
                "content": "Free your mind in a cozy village, with no cars in winter.",
                "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
              },
              "secondSection": [
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                }
              ]
            },
            {
              "title": "HEADER_TITLE_1_1",
              "index": "55",
              "firstSection": {
                "title": "Bakhmaro",
                "content": "Free your mind in a cozy village, with no cars in winter.",
                "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
              },
              "secondSection": [
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                }
              ]
            },
            {
              "title": "HEADER_TITLE_1_1",
              "index": "55",
              "firstSection": {
                "title": "Bakhmaro",
                "content": "Free your mind in a cozy village, with no cars in winter.",
                "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
              },
              "secondSection": [
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                }
              ]
            },
            {
              "title": "HEADER_TITLE_1_1",
              "index": "55",
              "firstSection": {
                "title": "Bakhmaro",
                "content": "Free your mind in a cozy village, with no cars in winter.",
                "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
              },
              "secondSection": [
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                }
              ]
            }
          ],
          "category_3": [
            {
              "title": "HEADER_TITLE_1_1",
              "index": "55",
              "firstSection": {
                "title": "Bakhmaro",
                "content": "Free your mind in a cozy village, with no cars in winter.",
                "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
              },
              "secondSection": [
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                }
              ]
            },
            {
              "title": "HEADER_TITLE_1_1",
              "index": "55",
              "firstSection": {
                "title": "Bakhmaro",
                "content": "Free your mind in a cozy village, with no cars in winter.",
                "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
              },
              "secondSection": [
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                }
              ]
            },
            {
              "title": "HEADER_TITLE_1_1",
              "index": "55",
              "firstSection": {
                "title": "Bakhmaro",
                "content": "Free your mind in a cozy village, with no cars in winter.",
                "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
              },
              "secondSection": [
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                }
              ]
            },
            {
              "title": "HEADER_TITLE_1_1",
              "index": "55",
              "firstSection": {
                "title": "Bakhmaro",
                "content": "Free your mind in a cozy village, with no cars in winter.",
                "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
              },
              "secondSection": [
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                }
              ]
            },
            {
              "title": "HEADER_TITLE_1_1",
              "index": "55",
              "firstSection": {
                "title": "Bakhmaro",
                "content": "Free your mind in a cozy village, with no cars in winter.",
                "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
              },
              "secondSection": [
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                }
              ]
            },
            {
              "title": "HEADER_TITLE_1_1",
              "index": "55",
              "firstSection": {
                "title": "Bakhmaro",
                "content": "Free your mind in a cozy village, with no cars in winter.",
                "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
              },
              "secondSection": [
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                }
              ]
            }
          ]
        },
        imgContent: [
          {
            title: "HEADER_IMG_TITLE_1",
            imgBg: "assets/img/header-img-1"
          }
        ]
      }
    },
    {
      id: 3,
      title: "HEADER_TITLE_1",
      section: {
        categories: {
          "category_1": [
            {
              "title": "HEADER_TITLE_1_1",
              "index": "55",
              "firstSection": {
                "title": "Bakhmaro",
                "content": "Free your mind in a cozy village, with no cars in winter.",
                "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
              },
              "secondSection": [
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                }
              ]
            },
            {
              "title": "HEADER_TITLE_1_2",
              "index": "55",
              "firstSection": {
                "title": "Bakhmaro",
                "content": "Free your mind in a cozy village, with no cars in winter.",
                "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
              },
              "secondSection": [
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                }
              ]
            },
            {
  
              "title": "HEADER_TITLE_1_1",
              "index": "55",
              "firstSection": {
                "title": "Bakhmaro",
                "content": "Free your mind in a cozy village, with no cars in winter.",
                "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
              },
              "secondSection": [
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                }
              ]
            },
            {
  
              "title": "HEADER_TITLE_1_1",
              "index": "55",
              "firstSection": {
                "title": "Bakhmaro",
                "content": "Free your mind in a cozy village, with no cars in winter.",
                "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
              },
              "secondSection": [
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                }
              ]
            },
            {
  
              "title": "HEADER_TITLE_1_1",
              "index": "55",
              "firstSection": {
                "title": "Bakhmaro",
                "content": "Free your mind in a cozy village, with no cars in winter.",
                "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
              },
              "secondSection": [
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                }
              ]
            },
            {
              "title": "HEADER_TITLE_1_1",
              "index": "55",
              "firstSection": {
                "title": "Bakhmaro",
                "content": "Free your mind in a cozy village, with no cars in winter.",
                "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
              },
              "secondSection": [
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                }
              ]
            }
          ],
          "category_2": [
            {
              "title": "HEADER_TITLE_1_1",
              "index": "55",
              "firstSection": {
                "title": "Bakhmaro",
                "content": "Free your mind in a cozy village, with no cars in winter.",
                "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
              },
              "secondSection": [
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                }
              ]
            },
            {
  
              "title": "HEADER_TITLE_1_1",
              "index": "55",
              "firstSection": {
                "title": "Bakhmaro",
                "content": "Free your mind in a cozy village, with no cars in winter.",
                "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
              },
              "secondSection": [
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                }
              ]
            },
            {
              "title": "HEADER_TITLE_1_1",
              "index": "55",
              "firstSection": {
                "title": "Bakhmaro",
                "content": "Free your mind in a cozy village, with no cars in winter.",
                "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
              },
              "secondSection": [
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                }
              ]
            },
            {
              "title": "HEADER_TITLE_1_1",
              "index": "55",
              "firstSection": {
                "title": "Bakhmaro",
                "content": "Free your mind in a cozy village, with no cars in winter.",
                "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
              },
              "secondSection": [
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                }
              ]
            },
            {
              "title": "HEADER_TITLE_1_1",
              "index": "55",
              "firstSection": {
                "title": "Bakhmaro",
                "content": "Free your mind in a cozy village, with no cars in winter.",
                "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
              },
              "secondSection": [
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                }
              ]
            },
            {
              "title": "HEADER_TITLE_1_1",
              "index": "55",
              "firstSection": {
                "title": "Bakhmaro",
                "content": "Free your mind in a cozy village, with no cars in winter.",
                "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
              },
              "secondSection": [
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                }
              ]
            }
          ],
          "category_3": [
            {
              "title": "HEADER_TITLE_1_1",
              "index": "55",
              "firstSection": {
                "title": "Bakhmaro",
                "content": "Free your mind in a cozy village, with no cars in winter.",
                "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
              },
              "secondSection": [
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                }
              ]
            },
            {
              "title": "HEADER_TITLE_1_1",
              "index": "55",
              "firstSection": {
                "title": "Bakhmaro",
                "content": "Free your mind in a cozy village, with no cars in winter.",
                "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
              },
              "secondSection": [
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                }
              ]
            },
            {
              "title": "HEADER_TITLE_1_1",
              "index": "55",
              "firstSection": {
                "title": "Bakhmaro",
                "content": "Free your mind in a cozy village, with no cars in winter.",
                "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
              },
              "secondSection": [
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                }
              ]
            },
            {
              "title": "HEADER_TITLE_1_1",
              "index": "55",
              "firstSection": {
                "title": "Bakhmaro",
                "content": "Free your mind in a cozy village, with no cars in winter.",
                "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
              },
              "secondSection": [
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                }
              ]
            },
            {
              "title": "HEADER_TITLE_1_1",
              "index": "55",
              "firstSection": {
                "title": "Bakhmaro",
                "content": "Free your mind in a cozy village, with no cars in winter.",
                "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
              },
              "secondSection": [
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                }
              ]
            },
            {
              "title": "HEADER_TITLE_1_1",
              "index": "55",
              "firstSection": {
                "title": "Bakhmaro",
                "content": "Free your mind in a cozy village, with no cars in winter.",
                "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
              },
              "secondSection": [
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                },
                {
                  "title": "Bakhmaro",
                  "content": "Free your mind in a cozy village, with no cars in winter.",
                  "url": "https:\/\/www.instagram.com\/p\/CV3D_3WsRby\/",
                }
              ]
            }
          ]
        },
        imgContent: [
          {
            title: "HEADER_IMG_TITLE_1",
            imgBg: "assets/img/header-img-1"
          }
        ]
      }
    },
  ]
  constructor() { }

  getDetails() {
    return of(this.data)
  }
}
