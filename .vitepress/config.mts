import { defineConfig } from 'vitepress'
// import { set_sidebar } from "./utility/auto_sidebar.mjs";	

import mathjax3 from 'markdown-it-mathjax3';
import timeline from "vitepress-markdown-timeline"; 

const customElements = [
  'math',
  'maction',
  'maligngroup',
  'malignmark',
  'menclose',
  'merror',
  'mfenced',
  'mfrac',
  'mi',
  'mlongdiv',
  'mmultiscripts',
  'mn',
  'mo',
  'mover',
  'mpadded',
  'mphantom',
  'mroot',
  'mrow',
  'ms',
  'mscarries',
  'mscarry',
  'mscarries',
  'msgroup',
  'mstack',
  'mlongdiv',
  'msline',
  'mstack',
  'mspace',
  'msqrt',
  'msrow',
  'mstack',
  'mstack',
  'mstyle',
  'msub',
  'msup',
  'msubsup',
  'mtable',
  'mtd',
  'mtext',
  'mtr',
  'munder',
  'munderover',
  'semantics',
  'math',
  'mi',
  'mn',
  'mo',
  'ms',
  'mspace',
  'mtext',
  'menclose',
  'merror',
  'mfenced',
  'mfrac',
  'mpadded',
  'mphantom',
  'mroot',
  'mrow',
  'msqrt',
  'mstyle',
  'mmultiscripts',
  'mover',
  'mprescripts',
  'msub',
  'msubsup',
  'msup',
  'munder',
  'munderover',
  'none',
  'maligngroup',
  'malignmark',
  'mtable',
  'mtd',
  'mtr',
  'mlongdiv',
  'mscarries',
  'mscarry',
  'msgroup',
  'msline',
  'msrow',
  'mstack',
  'maction',
  'semantics',
  'annotation',
  'annotation-xml',
  'mjx-container',
  'mjx-assistive-mml',
];


// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [
    ["link", { rel: "icon", href: "/research-life/logo.svg" }],
    ['script', { src: 'https://sdk.jinrishici.com/v2/browser/jinrishici.js' }]
],



  // outDir: "dist",
  srcDir: "src",
  cleanUrls: true,
  base: "/research-life/",

  markdown: {
    math: true,
    image: {
      lazyLoading: true
    },
    
  },

  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => customElements.includes(tag),
      },
    },
  },
  
  // lastUpdated: true,
  locales: {
    root: {
      label: '中文',
      lang: 'cn',
      title: "吴玉顺主页",
      description: "硕士期间成果展示",
    },
    en: {
      label: 'English',
      lang: 'en',
      title: "Vinsen's homepage",
      description: "Presentation of Works during Master's Degree Period",
      themeConfig: {
        outlineTitle: "CONTENT",
        nav: [
          { text: 'HOME', link: '/en' },
          {
            text: "SUMMARRY",
            items:[
              { text: 'CV/RESUME', link: 'en/selfcvmd' },
              { text: 'Structural Reliability Algorithm', link: 'en/reliability' },
              { text: 'Hardware Control System', link: 'en/activex.md'},
            ],
          },
          
        ],

        footer: {
          copyright: "Copyright © 2024-presented by Vinsen"
        },
        search: {
          provider: "local",
          options: {
            translations: {
              button: {
                buttonText: "Search docs",
                buttonAriaLabel: "Search",
              },
    
              modal: {
                noResultsText: "Nothing",
                resetButtonTitle: "Clear",
                footer: {
                  selectText: "selcet",
                  navigateText: "switch",
                  closeText: "close",
                },
              },
            },
          },
        },
      }
    },


  },

  themeConfig: {

    // https://vitepress.dev/reference/default-theme-config
    outlineTitle: "文章目录",
    outline: [1, 3],
    logo: "/logo.svg",
    siteTitle: false, 
    nav: [
      { text: '主页', link: '/' },
      {
        text: "汇总",
        items:[
          { text: '个人简历', link: '/selfcvmd' },
          { text: '基于自适应网格的结构可靠度算法', link: '/reliability' },
          { text: '基于AcitveX实现的硬件控制系统', link: '/activex' },
        ],
      },
      
    ],

    socialLinks: [
      {
        
        icon: {
          svg: '<svg t="1723217796570" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1538" width="200" height="200"><path d="M836.992 833.092c-2.963-8.818-5.536-16.463-5.536-31.334 0-11.195 3.232-13.549 11.708-19.688 5.113-3.705 12.445-9.029 22.549-19.5 28.636-29.645 45.994-49.755 56.094-72.748 10.072-22.94 13.084-49.157 13.084-91.108 0-47.781-29.726-95.191-74.967-130.644-45.22-35.419-105.861-58.844-167.939-58.844-65.433 0-118.502 20.123-157.831 51.443-33.288 26.519-56.788 61.087-69.638 98.267-12.844 37.164-15.077 76.929-5.881 113.873 9.648 38.764 31.927 74.482 67.743 100.862 31.786 23.42 69.3 40.893 109.139 49.869 37.347 8.423 76.778 9.384 115.485 0.794 48.493-10.756 53.097-6.294 62.281 2.658 4.596 4.475 10.544 10.268 26.669 15.482-0.981-3.492-1.991-6.508-2.96-9.382z m-637.02-172.174c-2.583 7.112-5.18 14.244-6.497 24.561 11.114-3.436 20.963-9.233 30.715-14.969 19.239-11.33 38.19-22.477 66.625-16.781 22.712 4.556 39.454 7.719 57.193 9.734 16.541 1.881 34.031 2.768 58.17 2.874-6.163-15.779-8.378-34.656-7.948-53.867 0.574-25.79 5.923-52.332 12.801-72.813 18.38-54.622 41.42-75.901 76.153-107.972l1.917-1.773c4.285-3.951 6.784-6.238 9.451-8.392l-0.004-0.006c2.557-2.074 5.341-4.065 10.236-7.489 24.122-16.864 49.403-29.932 77.065-38.776 26.51-8.476 55.21-13.088 87.143-13.463-4.534-18.525-11.121-35.914-19.442-52.08-30.634-59.564-84.974-102.816-148.25-127.434-63.414-24.66-135.779-30.628-202.337-15.58-24.678 5.577-48.553 14.055-70.854 25.525-47.982 24.68-84.285 56.546-108.927 92.254-23.632 34.237-36.58 72.062-38.872 110.5-2.288 38.448 6.062 77.581 25.01 114.421 20.239 39.358 52.595 76.143 96.96 106.761l1.482 1.025V619c0.002 20.456-3.894 31.179-7.79 41.918zM71.684 543.003c-23.233-42.377-38.019-91.377-38.019-137.208 0-37.262 11.725-77.678 30.396-114.663 19.749-39.12 47.337-74.513 77.08-98.369 68.154-54.687 146.687-82.913 226.089-85.362 80.43-2.487 161.75 21.46 234.078 71.083 31.082 21.308 54.918 44.518 73.767 70.967 18.815 26.417 32.641 56.055 43.71 90.275 6.818 21.019 8.939 21.249 21.616 22.592 4.625 0.49 10.483 1.117 18.104 2.629 25.884 5.144 51.909 13.807 76.083 25.558 23.139 11.246 44.626 25.35 62.721 41.952 12.706 11.659 24.552 23.214 35.279 35.871 10.764 12.711 20.326 26.457 28.366 42.393 20.433 40.508 30.012 77.904 28.57 115.023-1.441 37.111-13.915 73.831-37.543 112.957-7.759 12.84-20.733 28.925-34.685 43.82-13.413 14.334-27.788 27.634-39.342 35.95 4.43 19.004 9.323 32.368 13.202 42.957 7.82 21.377 11.762 32.136 0.749 53.599l-1.029 2.007-2.183-0.188c-18.389-1.579-29.877-8.984-42.545-17.139l-4.193-2.687v0.008a367.028 367.028 0 0 0-18.873-11.207c-5.977-3.322-12.335-6.673-19.297-10.332-17.021-8.948-17.521-8.818-31.867-4.849-3.139 0.867-6.904 1.913-12.16 3.22-31.957 7.967-44.279 7.841-69.983 7.568-4.633-0.049-9.783-0.103-17.497-0.103-51.612 0-110.596-22.585-158.919-55.796-46.877-32.214-83.886-74.556-94.68-116.157-20.878 4.629-42.163 5.671-63.2 4.519-22.016-1.196-43.779-4.819-64.525-9.229-32.779-6.978-58.976 10.133-83.982 26.47-16.251 10.616-32.048 20.933-49.212 24.657-14.853 3.225-21.944-1.828-24.128-11.907-3.273-15.063 6.589-42.143 15.858-67.591 4.669-12.815 9.196-25.235 11.718-35.222-34.147-19.431-66.147-55.435-89.524-98.058v-0.008z m373.12-191.865c-7.582-8.671-12.687-20.77-12.687-35.727 0-8.626 6.31-17.854 15.071-24.878 8.761-7.018 20.123-11.999 30.027-11.999 23.384 0 37.988 11.018 44.371 25.248 2.536 5.64 3.758 11.81 3.709 18v0.013a45.511 45.511 0 0 1-3.904 18.083c-6.651 14.975-21.639 26.81-44.176 26.81-11.423 0-23.604-5.464-32.411-15.55z m-214.412 0.007c-7.576-8.678-12.687-20.771-12.687-35.733 0-8.626 6.31-17.854 15.077-24.878 8.754-7.018 20.117-11.999 30.027-11.999 23.099 0 37.486 10.987 43.779 25.205 2.498 5.646 3.703 11.818 3.654 17.994a46.112 46.112 0 0 1-3.849 18.073c-6.569 15.003-21.381 26.881-43.584 26.881-11.423 0-23.609-5.458-32.417-15.543zM636.29 601.132c-5.252 11.199-16.943 19.781-35.409 19.781-18.768 0-30.04-8.59-34.934-19.81l2.866-1.331-2.866 1.319c-2.015-4.625-2.923-9.705-2.809-14.799 0.114-5.063 1.258-10.165 3.302-14.83 5.406-12.318 17.184-22.028 33.797-21.755 18.441 0.293 30.638 9.933 36.053 21.999a36.387 36.387 0 0 1 3.184 14.786c0.011 5.041-1.043 10.072-3.184 14.64z m117.321 17.257c-11.773-4.742-20.697-15.774-20.697-34.358 0-16.532 8.822-26.209 20.514-30.337 4.702-1.653 9.893-2.386 15.14-2.275a51.279 51.279 0 0 1 15.385 2.719c13.878 4.719 25.154 15.336 25.154 29.894 0 16.654-11.041 28.59-24.703 33.927-4.921 1.918-10.234 2.988-15.485 3.099-5.289 0.107-10.545-0.751-15.308-2.669z" fill="#999999" p-id="1539"></path></svg>'
        },
        link: '/research-life/wechat',
        // You can include a custom label for accessibility too (optional but recommended):
        ariaLabel: 'wechat'
      }
    ], 

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],

    // sidebar: { "/front-end/react": set_sidebar("front-end/react") },

    // sidebar: false, 
    aside: "left", 
    lastUpdatedText: "最近更新时间",

    docFooter: { 
      prev: '上一页', 
      next: '下一页', 
    },

    footer: {
      copyright: "Copyright © 2024-presented by Vinsen 申博专用"
    },

    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索",
            buttonAriaLabel: "搜索",
          },

          modal: {
            noResultsText: "暂无",
            resetButtonTitle: "清除",
            footer: {
              selectText: "选择",
              navigateText: "切换",
              closeText: "关闭",
            },
          },
        },
      },
    },

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  }
})
