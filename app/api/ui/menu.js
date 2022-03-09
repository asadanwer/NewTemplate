module.exports = [
  {
    key: 'home_page',
    name: 'HOME',
    icon: 'home',
    child: [

    ]
  },
  {
    key: 'pages',
    name: 'MY INSIGHT',
    icon: 'insights',
    child: [
      {
        key: '',
        name: '',
        title: true,
        pathname: ''
      },
      {
        key: 'dashboard',
        name: 'DASHBOARD',
        icon: 'dashboard',
        link: '/app/pages/dashboard'
      },
      {
        key: 'blank',
        name: 'REPORTES',
        icon: 'flag',
        link: '/app'
      },
    ]
  },
  {
    key: 'errors',
    name: 'DATASHOP',
    icon: 'pets',
    child: [
      {
        key: '',
        name: '',
        title: true,
      },
      {
        key: 'data_catalog',
        name: 'DATA CATALOG',
        icon: 'pets',
        link: '/app/pages/not-found'
      },
    ]
  },
  {
    key: 'menu_levels',
    name: 'REQUESTS',
    multilevel: true,
    icon: 'record_voice_over',
    child: [
      {
        key: 'new_dashboard',
        keyParent: 'menu_levels',
        name: 'NEW REQUEST',
        link: '/#',
        child: [
          {
            key: 'dashboard_request',
            name: 'REQUEST DASHBOARD',
            link: '/#'
          },
          {
            key: 'report_request',
            name: 'REQUEST REPORT',
            link: '/#'
          },
        ]
      },
      {
        key: 'PERMISSION',
        keyParent: 'menu_levels',
        name: 'PERMISSION REQUEST',
        child: [
          {
            key: 'existing_dashboard',
            name: 'REQUEST DASHBOARD',
            link: '/#'
          },
          {
            key: 'existing_report',
            name: 'REQUEST REPORT',
            link: '/#'
          },
        ]
      },
    ]
  }
];
