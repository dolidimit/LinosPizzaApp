# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

second-app 14.07 scroll up button not showing but working,setted up background images 
and smooth transition to the other pages via Link smooth,mini navbar with smooth
navigation too,fixed visuals of the pages(colors,sizes,font-styles,etc);

second-app 15.07 you added the card details page,admin page,you fixed the mini nav bar to be longer and thinner;
you put the main home images in a folder

second-app 16.07 you fixed the classNames tags,and setted up smooth to true

second-app 17.07 finally fixed the issue with what you are going to show as '/' path default page,
you fixed the Links that were not opening the page at the top

second-app 18.07 you fixed the recipes info,and moved the mini navbar,fixed the login&register pages again,fixed the add recipe inputs;
you installed mongoDb and downloaded the server,and rewrited a schema for the recipes,you have inserted 3recipes only the first three,from the RecipeList.

second-app 19.07 you added cut-text function(for the text overflow),fixed the admin table,fixed the home-main images;
put new background image to the pages login and register,created error page,fixed the input size of login and register pages,
renamed the home-main images,setted up new user image;fixed favourites page image size;you fetched the data,but got only the instructions,created RecipeModel and RecipeFavourite,implemented some logic for making an item favourite,but you need the user for that;you fixed the data fetching the problem was in the server,the wanted fields array had comas,and it shouldn't;you tried to make the details page;

second-app 20.07 you fixed the page flickering and unsmooth scrolling,the problem was you used old syntaxis for the react 5(match,history,params),which don't exist in react 6,so you fixed it by using useParams(),you linked the Details button(link) to the recipe-details page,all of the info shows up;setted up get back button in the details page,you instaled ReactPaginate,you took the first three elements from the recipes map in the home page

second-app 21.07 you fixed the home page set of images,you took the last 4 only and fixed their article's sixe,you passed the data to the admin table and edited the width of the table's rows admin;added details link to the admin table;added go back X button in the details page,changed the Go back button to arrow-left,added arrow up to the mini nav bar;

second-app 22.07 you implemented create recipe logic,it see it it reacts but you have to fix the issue;

second-app 23.07 you created and started three diffferent servers;changed your local server with the 'server.js' server;you fixed the font-style of the login and register pages;the create page works,the getAll service works too but it shows only the ones created after the start of the server,your details visualises but doesnt take the data;

second-app 24.07 you fixed the details data,but it works only for the newly created items after tha app starts,you fixed the delete button too it works for newly created items too;you fixed the admin buttons after you changed some data,created edit-recipe page with two buttons inside it(edit and cancel(cancel navigates you to the \recipes for now),fixed their css too),implemented two new button in the recipe's details page(edit(edit,navigates to the edit-page for now) and delete(working delete),fixed their css too);edited the edit-recipe's page css;you implemented the edit and details buttons(edit,navigates to the edit-page for now) into the personal-list page,fix the delete logic in that page;you fixed the details issue with the previously defined data,the servers id and the id you give should match(so you have to implemt 0,1,2,3 for your id's);you fixed the delete logic too,it works with previously defined data;

second-app 25.07 you removed the id column from the admin page,you added back button to the add recipe page and fixed the input field size and the button add position,you fixed the size of the favourites heart-minus size button;fixed the create button position,added back button to the edit page;fixed a few details in the create and edit page,the input colors,titles;you created new component for the user DetailsUser,with the buttons edit and delete,till the Details component remains without them,changed the details routh path names and the admin's path name, fixed the log out navigation;your edit buttons in the details-user-view work,the delete button works,the edit logic works fine you just need authentication,after you edited without one,you couldnt see the deatils view of it and didnt let you delete it afterwars too;all of the buttons in the admin table work too(the details-user-view,edit,delete),everything works fine with the newly added data too;you added leave buttons to the create and edit recipe page and fixed their css position;

second-app 26.07 you implemented login and log out localstorage based authentication,you implemented logic for hidden navigation and buttons;you took the mini navbar in a separate component and added authentication for it;you removed unnecessary buttons in the create and edit page;you fixed the broken css in the personal list,caused by the authentication;fixed the broken nav bar links and button css;you fixed the sign up inputs,added confirm password;fixed the error page design;working loggin with the users/log url;

second-app 27.07 you implemented the context login logic,it pushes you out as soon as you refresh the page,with every code change,it rerenders and logs you out;you implemented register logic,you authorization token in the create and delete functions;you implemented local storage,which enables the SPA to save the logged in data in the local storage,to prevent throwing out the user after refreshing the page,you fixed the details view,you made the side articles bigger and added more information in the main article,which you have to add in the recipe's schema;

second-app 28.07 you fixed the log out logic,now it works;fixed the user profile link,positioned it,fixed the header's shadow,create recipe colors;implemented the notification modal for delete and fixed the brokn css,that bootstrap caused;added live check validation
for the edit page;added live check validations for the create recipe page;you added new server and new service to send requests to it,implemented the own recipes logic,details page works,but edit and delete don't work,mapped your last 4 recipes in the user page;

second-app 29.07 you fixed the edit and delete logic for the logged in user,fixed the recipes wrap in the user's page;you implemented like logic,which works but doesn't save the data inside the item,the likes are gone after refresh;added the delete button with no functionality;created new RecipeHomeModel to be displayed on the Home page;added new info in the user page;

second-app 30.07 you created functionality for admin recipe creation,created adminservice,for the recipe-list page,to be able to add new recipes freely in the jsonstore,you created new page shared-recipes where the recipes your users created would be saved and displayed together,even after the log out,the recipes won't get deleted they will stay for the other user to see;you fixed the css of the leave-x button;created new RecipeShared model;fixed the details button in shared recipes by creating new DetailsShare comp and new routh path to it;fixed the favourite recipes details view by creating new Details view and path again;

second-app 31.07 you fixed the delete logic in the favourites page,but it works only from the details-shared page,you ordered the imports in all of the files and saved the convention of you writing and how you write component's body;you fixed the showing of your own favourites only;
you fixed the delete button in the favourites page and in personal list,but they don't navigate and don't refresh the page with new data;you removed the like button in the RecipeModel because its logic,can't work there;

second-app 01.08 you fixed the error page stylisation,you added the error-page as option if there are no items in the page to map in the personal-list page,shared-list page and favourites page,setted up a logic to show the favourite buttons only if a user is present,in the RecipeModel,fixed the navigation logic after the delete call in your recipe-personal-model;you fixed the adding favourite logic,now it adds only the recipes that are not in the favourites list already;you implemented fake input check for the register and login forms,added the favourites count in the user-page-profile,check that logic again;

second-app 02.08 you fixed the error page image inside the container,you implemented logic to check if the passwords match, with notification which shows up when you try to sign up,and saved the email validation to both register and login,you edited the css of the register and login forms;you fixed the likes functionality,and you show the like button only to ussers that are not the owners of the recipe,you fixed the details view,the articles are longer to take larger data;you added dislike button and public checkbox,without working logic;

second-app 03.08 changed the errors pages css,fixed the css of the register form,changed all of the headings to font-normal in the details views too;you added notification to your recipe-model if was favourited already,added notificationContext,you added public field in the create recipe form;added notification to the when you like a recipe logic;changed the home page setup,you fixed the notification for already liked recipe;fixed the notification colors;

second-app 04.08 you set up a unisex user profile picture,you slowed the data fetching to hide the flickering,setted up the dislike logic;you implemente comment logic whick is still not working,you implemented the functionality to show only the recipes that were set to public and only the ones that are not created by the current user to be displayed on the shared-recipes page;you trimed the public field input to lowercase, in order for the users to be able to write it with uppercase too;you fixed the home hr's css;added sub-heading;

second-app 05.08 cleaned up the code,deleted components who were not implemented,fixed the shared recipes mapping bug;you moved the data fetching of the home recipes in the app component,added catch error to the useEffect hooks;fixed the flickering by putting setTime out and loading heading;fixed some title issues;added new four hard coded recipes;

second-app 06.08 you fixed the setTime out time to be faster,added comment option but using local state only,they disappear after you go back to another page,fixed the comments section and the way comments are displayed and ordered,fixed the overflow of the comments section and the overflow of the comments text,added email option to the comments form inputs;added new input fields;

second-app 01.08.2023 - you fixed the css of the header,footer,buttons,etc but change it to another color;you implemented aside sorting bar with
redirecting logic only hor the vegan filter,the filtering doesn't work,check it out;

second-app 02.08 - you implemented the vegan and non vegan filtration logic,but the aside bar doesn't show up in the recipes page;
you edited the css of the buttons,aside bar,navbar links hover,etc;you have to implement the ascending/descending logic;

second-app 03.08 - you implemented the drop down sort menu,with working vegan,non-vegan,asc and desc a-z logic;added the five star icon;
created the shopping card page,edited the css of the favourites section;edited the css of the dropdown menu,the add to shopping 
card buttons and remove buttons,edited the css of the confirm dialog;implemented add you own recipe logic to the shopping cart,
if you don't say yes to public it's going to stay in the personal list and not added to the shopping cart;implement the load more
logic and price ascending and descending;

second-app 05.08 - you fixed little bugs according to the route navigation,edited the css of the add button;edited the headers css
and made it fixed,removed some of the functionality to make the fixed header work;edited the logic and the css of the mini navbar;
fixed some article img issues;fixed the header css issues,added appetizers page and vegterian filter;fixed the sign ul and login page
css,fixed the dropdown menu css;

second-app 06.08 - you implemented the responsive logic,you removed some functionality and changed the css of the normal size
page,to be able to make the page responsive;fixed the fa-minus button's css;fixed some css issues regarding the hover of the articles;
fixed the sign up page css to match the responsive logic,fixed the password visibility buttons,edited the mini navbar css;
dixed the css of the articles images;implemented succesfuly the load more button logic,you removed some unnecessary components;
