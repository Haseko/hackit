// Dom7
var $$ = Dom7;

// Framework7 App main instance
var app  = new Framework7({
  root: '#app', // App root element
  id: 'io.framework7.testapp', // App bundle ID
  name: 'Framework7', // App name
  theme: 'ios', // Automatic theme detection
  // App root data
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
      // Demo products for Catalog section
      category: {
        Burgers:[
          1, 2
        ],

        Potato:[
          3
        ],

        Lasagna:[
          1, 2, 3
        ],

        Taco:[
          1
        ],

        Nachos:[
          2
        ],

        Taquitos:[
          1, 2
        ]
      },

      recipeList: {
        1: {
          name: 'a',
          title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          products: [1, 2, 3],
          description: 'v',
          img: '1',
          id:'1'
        },
        2: {
          name: 'b',
          title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          products: [1, 2, 3],
          description: 'v',
          img: '1',
          id:'1'
        },

        3: {
          name: 'c',
          title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          products: [1, 2, 3],
          description: 'v',
          img: '1',
          id:'1' 
        }

      },

      productList: {
        1: [{
  
            name:'1',
            img:'1',
            description:'1',
            markets:[1,2,3]
  
          },
          {

          name:'1',
          img:'1',
          description:'1',
          markets:[1,2,3]

        }],
        2: [{
  
            name:'1',
            img:'1',
            description:'1',
            markets:[1,2,3]
  
          },
          {

          name:'1',
          img:'1',
          description:'1',
          markets:[1,2,3]

        }],
        3: [{
  
          name:'1',
          img:'1',
          description:'1',
          markets:[1,2,3]
  
          },
          {

          name:'1',
          img:'1',
          description:'1',
          markets:[1,2,3]

        }]
      },
      products: [
        {
          id: '1',
          title: 'Burgers',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis.',
          category: 'Burgers'
        },
        {
          id: '2',
          title: 'Potato with cheese',
          description: 'Velit odit autem modi saepe ratione totam minus, aperiam, labore quia provident temporibus quasi est ut aliquid blanditiis beatae suscipit odio vel! Nostrum porro sunt sint eveniet maiores, dolorem itaque!',
          category: 'Potato'
        },
        { id: '3',
          title: 'Lasagna',
          description: 'Expedita sequi perferendis quod illum pariatur aliquam, alias laboriosam! Vero blanditiis placeat, mollitia necessitatibus reprehenderit. Labore dolores amet quos, accusamus earum asperiores officiis assumenda optio architecto quia neque, quae eum.',
          category: 'Lasagna'
        },
        {          id: '4',
          title: 'Taco',
          description: 'Expedita sequi perferendis quod illum pariatur aliquam, alias laboriosam! Vero blanditiis placeat, mollitia necessitatibus reprehenderit. Labore dolores amet quos, accusamus earum asperiores officiis assumenda optio architecto quia neque, quae eum.',
          category: 'Taco'
        },
        {          id: '5',
          title: 'Nachos',
          description: 'Expedita sequi perferendis quod illum pariatur aliquam, alias laboriosam! Vero blanditiis placeat, mollitia necessitatibus reprehenderit. Labore dolores amet quos, accusamus earum asperiores officiis assumenda optio architecto quia neque, quae eum.',
          category: 'Nachos'
        },
        {          id: '6',
          title: 'Taquitos',
          description: 'Expedita sequi perferendis quod illum pariatur aliquam, alias laboriosam! Vero blanditiis placeat, mollitia necessitatibus reprehenderit. Labore dolores amet quos, accusamus earum asperiores officiis assumenda optio architecto quia neque, quae eum.',
          category: 'Taquitos'
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
            '<a class="col-50 margin-bottom" href="/category-page/'+v.category+'" style="display: block; background-image: url(images/'+v.category+'.jpg); -webkit-background-size: cover;">'+
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

var k = 0;