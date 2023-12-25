# Timeline of things that are added in the application

- 11/12/2023
    - input form was designed in the application.
    - also, i moved the input fields from sign in functionality into a different component.

- 12/12/2023
    - need to structure the auth page. (done, I have styled the auth page)
    - signup and signin component needs to be seperated (done, seperation of both the components)
    - also, the auth page needs styling

- 13/12/2023
    - today, i would be using react context in order to transfer my user creds to diff components
    - first, usercontext needs to be created (done)
    - second, signin component will set the userstorage (done)
    - third, navigation component will check if the storage is set then will alter it with signout(done)
    - fourth, now for building signout feature I will need to work on firebase utils file(done signout feature)
    - fifth, signup component will set the userstorage and userrefdoc (done, a little modification in firebase file as well)

- 15/12/2023
    - first I need to build a onAuthState change function in utils library(done)
    - It looks like there is too much redundant for my user context. I mean, like I am setting user auth values too much spreaded. I can round it off to one file. (done)

- 16/12/2023
    - [Issues] : When user signup using email and password, we are creating a user storage document with the `displayName` correctly, however, when we reload the page, the externalStorage(context) is not fetching the displayName properly. (Ref: 36th line of signup component and line 20 of external storage)
    - Alright, so today we are going to design the shopping cart & shopping page
    - first let's build a shop component, since in the navigation page, the shop component lies inside the nav file only. So we need a seperate routes folder for shop. (done)
    - second, I will create a seperate component for all the products (done)
    - third, is to create a products context file where, all the data will be stored(a common storage for all the components)

- 17/12/2023
    - Today, lets work on building the cart button and to add items in the cart
    - first, lets create cart icon and style the icon (done)
    - second, we need a dropdown menu that will contain the product items, lets build that component. (done)
    - After that we need a cartcontext for toggling the cartdropdown. (done)

- 20/12/2023
    - I haven't been able to update what I was doing in two to three days. I haven't added much functionality into the application.
    - However, the one thing which I added is adding items to the cart(done)
    - Yes, now you can add Items to the cart and view them in the cart dropdown.

- 21/12/2023
    - The checkout page is created and is linked to Buy button from the cart dropdown. (done)

- 22/12/2023
    - The checkout page is completed, with the following functionalities.
        - We can increment and decrement the items that are added to the cart.
        - The total quantity is visible
        - The Item remove functionality is also added.

- 23/12/2023 & 24/12/2023
    - I accumulated the firebase storage with the json data using writeBatch method.
    - The json data was now fetched into the categories context rather than using the hard coded json data.
    - The changes were applied to the application i.e. wherever the hardcoded products values were used.
    - After that, the shop route was modifed with all the categories(hats, jackets, shoes...)

- 25/12/2023
    - Today, I will need to first build the individual category page i.e. shop/:category