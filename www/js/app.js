// Dom7
var $$ = Dom7;

// Framework7 App main instance
var app  = new Framework7({
  root: '#app', // App root element
  id: 'io.framework7.testapp', // App bundle ID
  name: 'Framework7', // App name
  theme: 'auto', // Automatic theme detection
  // App root data
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
      // Demo products for Catalog section
      category: {
        meat:[
          {
            name: 'a',
            title: 'b',
            products: [1, 2, 3],
            description: 'v',
            img: '1'
          },
          {
            name: 'd',
            title: 'c',
            products: [1, 2, 3],
            description: 's',
            img: '2'
          },
          {
            name: 'e',
            title: 'f',
            products: [1, 2, 3],
            description: 'g',
            img: '3'
          }
        ],

        veg:[
          {
            name: 'a',
            title: 'b',
            products: [1, 2, 3],
            description: 'v',
            img: '1'
          },
          {
            name: 'd',
            title: 'c',
            products: [1, 2, 3],
            description: 's',
            img: '2'
          },
          {
            name: 'e',
            title: 'f',
            products: [1, 2, 3],
            description: 'g',
            img: '3'
          }
        ],

        soup:[
          {
            name: 'a',
            title: 'b',
            products: [1, 2, 3],
            description: 'v',
            img: '1'
          },
          {
            name: 'd',
            title: 'c',
            products: [1, 2, 3],
            description: 's',
            img: '2'
          },
          {
            name: 'e',
            title: 'f',
            products: [1, 2, 3],
            description: 'g',
            img: '3'
          }
        ]
      },
      productList: {
        1: {

          name:'1',
          img:'1',
          description:'1',
          markets:[1,2,3]

        },
        2: {

          name:'2',
          img:'2',
          description:'2',
          markets:[1,2,3]

        },
        3: {

          name:'3',
          img:'3',
          description:'3',
          markets:[1,2,3]

        }
      },
      products: [
        {
          id: '1',
          title: 'Burgers',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis.',
          category: 'meat'
        },
        {
          id: '2',
          title: 'Potato with cheese',
          description: 'Velit odit autem modi saepe ratione totam minus, aperiam, labore quia provident temporibus quasi est ut aliquid blanditiis beatae suscipit odio vel! Nostrum porro sunt sint eveniet maiores, dolorem itaque!',
          category: 'veg'
        },
        { id: '3',
          title: 'Lasagna',
          description: 'Expedita sequi perferendis quod illum pariatur aliquam, alias laboriosam! Vero blanditiis placeat, mollitia necessitatibus reprehenderit. Labore dolores amet quos, accusamus earum asperiores officiis assumenda optio architecto quia neque, quae eum.',
          category: 'soup'
        },
        {          id: '4',
          title: 'Taco',
          description: 'Expedita sequi perferendis quod illum pariatur aliquam, alias laboriosam! Vero blanditiis placeat, mollitia necessitatibus reprehenderit. Labore dolores amet quos, accusamus earum asperiores officiis assumenda optio architecto quia neque, quae eum.'
        },
        {          id: '5',
          title: 'Nachos',
          description: 'Expedita sequi perferendis quod illum pariatur aliquam, alias laboriosam! Vero blanditiis placeat, mollitia necessitatibus reprehenderit. Labore dolores amet quos, accusamus earum asperiores officiis assumenda optio architecto quia neque, quae eum.'
        },
        {          id: '6',
          title: 'Taquitos',
          description: 'Expedita sequi perferendis quod illum pariatur aliquam, alias laboriosam! Vero blanditiis placeat, mollitia necessitatibus reprehenderit. Labore dolores amet quos, accusamus earum asperiores officiis assumenda optio architecto quia neque, quae eum.'
        },
      ]
    };
  },
  // App root methods
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  // App routes
  routes: routes,
});

// Init/Create views
var homeView = app.views.create('#view-home', {
  url: '/',
  on: {

    pageInit: function(){

      $$('#mainPage .category-list').html('');
      i = 0;
      app.data.products.forEach(function(v, i){
        if(i < 4){
          $$('#mainPage .category-list').append(
            '<a class="col-50 bg-color-blue margin-bottom" href="/category-page/'+v.category+'" style="display: block">'+
            '<h2 class="text-align-center" style="color: white">' + v.title +'</h2></a>'
          );
        }
      });


    }

  }
});
var catalogView = app.views.create('#view-catalog', {
  url: '/catalog/'
});
var settingsView = app.views.create('#view-settings', {
  url: '/settings/'
});


// Login Screen Demo
$$('#my-login-screen .login-button').on('click', function () {
  var username = $$('#my-login-screen [name="username"]').val();
  var password = $$('#my-login-screen [name="password"]').val();

  // Close login screen
  app.loginScreen.close('#my-login-screen');

  // Alert username and password
  app.dialog.alert('Username: ' + username + '<br>Password: ' + password);
});

