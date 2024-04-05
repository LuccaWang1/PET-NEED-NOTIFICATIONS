<a name="top"></a>

# PetPlanner

![Image of homepage, carousel, top nav before logging in/while logged out](/static/images/Readme_Markdown/home.png)
*The web app's homepage with a carousel*
<a name="description"></a>

## Project Description 
PetPlanner allows pet owners to centralize their pets' information in one location. Pet owners can log each pet and the pet's information as well as their pets' specialists, like groomers and vets, and events, like annual vet visits, nail trims, and play dates.

The full stack project includes a PostgreSQL relational database and was built and architected solely by Lucca Wang, who created the app from scratch, developing with Python, Flask, React, JavaScript and working with APIs.

<br>

![Image of dashboard](/static/images/Readme_Markdown/dashboard_zoom_in.png)
*A user's dashboard*
<a name="snapshot"></a>

<br>

## Snapshot
* __Full stack web app built from scratch__ used by pet owners to centralize their pets' information in one location.
<br>

* Created a __[data model](#data-model)__ for __many-to-many and one-to-many relationships__ to set the foundation for the __postgreSQL database__.
<br>

* Experience overcoming __AJAX fetch request JSON date and time__ challenges, including in __React__.
<br>

* Developed in __Python, Flask, JavaScript__, and PostgreSQL to create features for an MVP.
<br>

* Integrated __[Cloudinary and FullCalendar APIs](#mvp-description)__
<br>

* Hand built navbar in __HTML__ with __Jinja2__ for a clean __user interface__ to streamline the __user experience__.

<br>

![Image of server.py code to add a pet](/static/images/Readme_Markdown/server.png)
*The code in the server that creates a pet instance on the Pet class (OOP!)*
<a name="table-of-contents"></a>

<br>

## Table of Contents 
- [Project Description](#description)
- [Snapshot](#snapshot) 
- [Technologies](#technologies)
- [Main Features](#features)
- [Data Model](#data-model) 
- [How To Run PetPlanner](#run-pp)
- [More](#more)
- [Photos (frontend)](#photos)
- [Author](#author)

<br>

### Technologies
1. __Python__ (Server, OOP)
2. __Flask__ (Python Framework)
3. __JavaScript__ (AJAX/JSON) (Frontend)
4. __React__ (Frontend)
5. __PostgreSQL__ (relational database)
6. __SQL__ (used to query the database in psql)
7. __SQLAlchemy__ (used to query the database within Python)
8. __HTML__ (webpages, base)
9. __CSS__, __flexbox__ (styling)
10. __Cloudinary API__ (photo uploader API)
11. __Full Calendar API__ (calendar and events API)
12. __Jinja2__ (Python web dev. templating engine that extends base.html, used for conditional rendering on navbars throughout site)
13. __Bootstrap__ (styling, used with React)
14. __Passlib__ and __Argon2__ (Password Hashing)
15. Wang chose to created __data sets__ through her __research__ of different animal breeds. (__I chose this over using PetFinder's API.__)

<br>

[Back to the Table of Contents](#table-of-contents) 
<a name="features"></a>

<br>

### Main Features

1. React Bootstrap Modal Forms (3 forms) 

![Image of the user's Dashboard and the dropdown menu](/static/images/Readme_Markdown/add_dropdown.png)
*This is how a user can use the reusable React components - they're in the navbar, accessible from all webpages*

![Image of the user's Dashboard and the dropdown menu hovering](/static/images/Readme_Markdown/add_dropdown_hover.png)
*We can see the CSS hover styling here on the dropdown menu*

![Image of the add a pet form](/static/images/Readme_Markdown/add_pet_modal.png)
*The Add a Pet form that's a React Bootstrap modal form*

* Use 1-2 __JavaScript React AJAX fetch requests__ per form
<br>

* AJAX fetch request loads the user's information __at the time the modal form loads on the DOM__ 
<br>

* AJAX fetch request __saves user inputs to the database__ and __communicates between the server and client__
<br>

* I __overcame challenges handling the asynchronous requests__, sending and receiving __JSON__ objects, especially with __date and time formatting__ on the client side and on the browser side 

<br>

2. Add a Pet

![Image of the add a pet form: species](/static/images/Readme_Markdown/add_pet_species.png)
*The Add a Pet form that's a React Bootstrap modal form - with the species dropdown menu*

![Image of the add a pet form: breeds](/static/images/Readme_Markdown/add_pet_breeds.png)
*The Add a Pet form that's a React Bootstrap modal form - with the breeds dropdown menu*

* After creating an account, a user can add a pet to their account
<br>

* A __Jinja templating for loop__ iterates over the Pets associated with the __User instance in session__ to generate the content __dynamically__ 
<br>

* I opted for __Bootstrap's Card layout grid__, utilizing __rows and columns__ to organize and add __whitespace__ to the display of cards on the user's Dashboard
<br>

* The Bootstrap grid card layout consists of three columns, with __additional cards wrapping to the next row as needed__. This __design choice__ ensures that users can easily view all their pets on the Dashboard. I selected this layout for its superior __user experience__ compared to alternatives like an accordion layout
<br>

* Thanks to the __many-to-many relationship between the Owner and Pet classes in the model__, users can add multiple pets without limitations. This __foundational model design__ allows for a flexible structure, enabling each pet to belong to multiple users and vice versa
<br>

* A user completes the __Bootstrap React Modal form__ by inputting their pet's information
<br>

* The user selects a species for the pet, and I used __conditional rendering and mapping__ within React to display breeds based on the animal species selected
<br>

* Pet lovers can upload a photo of their pet with the help of the __Cloudinary API__

<br>

3. Add an Event

![Image of the hover over add event in dropdown](/static/images/Readme_Markdown/add_event_dropdown.png)
*This is how a user can add an event for their pet*

![Image of the add a event form](/static/images/Readme_Markdown/add_event_modal.png)
*The Add an Event form that's a React Bootstrap modal form*

* Users can add events for each of their pets using __FullCalendar API__
<br>

* Events can be for daily or annual events based on the needs and appointments of the pet

<br>

4. Add a Specialist 

![Image of the hover over add specialist in dropdown](/static/images/Readme_Markdown/add_specialist_dropdown.png)
*A user can add a specialist from the dropdown menu*

![Image of the add a specialist form](/static/images/Readme_Markdown/add_specialist_modal.png)
*The Add a Specialist form that's a React Bootstrap modal form*

![Image of the add a specialist form with the user's mapped pets](/static/images/Readme_Markdown/add_specialist_pets.png)
*I mapped to the user's existing pet data, so the user can assign the specialist to one or all of their pets*

* A user can add care providers, or specialists, for each pet (e.g. vet, groomer, nail trimmer, and emergency vet) 
<br>

* Specialists are saved in the PostgreSQL relational database under the user's account
<br>

* The __user's existing pet data is mapped__, so the user can assign the specialist to one or all of their pets

<br>

[Back to the Table of Contents](#table-of-contents) 
<a name="data-model"></a>

<br>

![Image of the PetPlanner Data Model](/static/images/Readme_Markdown/data_model.png)
*The data model of PetPlanner*

### Snapshot of the Data Model

* Has __6 tables__ and more __associative tables__ to create several __many-to-many relationships__
<br>

* Also __one-to-many relationships__ between tables
<br>

* The __PostgreSQL__ database is modeled and queried with __SQLAlchemy__
<br>

* Designed to be built out even more with messaging between users and saved settings for calendar events

<br>

[Back to the Table of Contents](#table-of-contents) 
<a name="run-pp"></a>

<br>

### How To Run the PetPlanner Flask App

1. Set up and activate a Python __`virtualenv`__, and install all dependencies:

   * `pip install -r requirements.txt`
<br>

2. Make sure you have PostgreSQL running. Create a new __database__ in psql named pets:

   * `psql`

   * `CREATE DATABASE pets;`
<br>

3. Create the __tables__ in your database:

   * `python -i model.py`

   * While in interactive mode, create tables: `db.create_all()`

   * Seed the `pets` table with some pets
<br>

4. Now, quit interactive mode. Start up the __Flask server__:

   * `python3 server.py`
<br>

5. Go to the __URL__ `localhost:5000` in the browser to see the web app run
<br>

6. How to run __tests__:

   * `python3 tests.py`
   * Testing coverage is light right now
   * There are 2 unit tests
    
<br>

<a name="more"></a>

[Back to the Table of Contents](#table-of-contents) 

<br>

### More if you're interested
1. Create an account 

![Image of the Create Account webpage](/static/images/Readme_Markdown/create-account.png)
*A user can create an account*

* A user instance is created via the user inputs to the form and the `User` class in model.py with __Object Oriented Programming__. 
<br>

* The user's account information is stored in the app's PostgreSQL relational database.
<br>

* __Passwords are hashed__ with salt using __Passlib__ and __Argon2__ to securely hash passwords in a way that makes it difficult for attackers to perform brute-force (dictionary) attacks, even if they have access to significant computational resources. 
<br>

* Form styled with __flexbox__.

<br>

2. Log in

![Image of the Log In webpage](/static/images/Readme_Markdown/log-in.png)
*A user can log in*

* Form styled with __flexbox__.

<br>

3. Log out 

![Image of Dashboard webpage with the Log Out button/link in the top navbar in the top right of the image](/static/images/Readme_Markdown/log-out.png)
*A user can log out*

* The __session__ is cleared when the user clicks the "Log Out" button that's in the top right of the website - on any webpage the user is on.
<br>

* Utilizing __Jinja templating__ on the navbar, I hand-built the top and bottom nav bars with __HTML__ and Jinja to determine what the user sees depending on which page the user is on and if they are logged in or not. 
<br>

* I intentionally chose this as a way to create a clean __user interface__ to streamline the __user experience__ when we're navigating the app.

<br>

4. Update their account information

![Image of My Account webpage](/static/images/Readme_Markdown/ma.png)
*A user's My Account webpage*

![Image of My Account webpage after clicking edit](/static/images/Readme_Markdown/ma-edit.png)
*A user can edit their account information*

![Image of My Account webpage when saving](/static/images/Readme_Markdown/ma-saving.png)
*A user can save their account information in the database*

![Image of My Account webpage](/static/images/Readme_Markdown/ma.png)
*The user has saved their account information!*

* The `Edit` and `Save` buttons contain __hover and active CSS__ for visible changes for the user. 
<br>

* When the user clicks the `Edit` button to edit their account information, a __JavaScript event listener__ changes the input field __style__. 
<br>

* I had a lot of fun coding this JavaScript with styling, listener, and the __fetch request__. 

<br>

[Back to the Table of Contents](#table-of-contents) 
<a name="photos"></a>

<br>

### Photos 

Photos are sourced from Unsplash and from Wang. (See the photos folder in the repo in: [PetPlanner/static/images in GitHub](https://github.com/LuccaWang1/PetPlanner/tree/main/static/images))

There are 6 organized folders in the /static/images folder for clean organization:
1. __Carousel__ slides 
<br>

2. __Default add a pet photo__ - for if someone doesn't have a photo of their pet at the time they add a pet. It's a pink/red-ish image with hearts on it 
<br>

3. __Demo__ add a pet - photo of Benny the Bengal cat 
<br>

4. __Favicon__ - this is the [Bootstrap calendar2-heart-fill.svg](https://icons.getbootstrap.com/icons/calendar2-heart-fill/), a calendar icon with a heart in the middle
<br>

5. __README__ Markdown photos for this document - screenshots of the web app to go along with the text in this document
<br>

6. __Seed__ pets - these were for the demo video uploaded to Youtube at [https://www.youtube.com/watch?v=GA6h8ELNkco](https://www.youtube.com/watch?v=GA6h8ELNkco)

All photos have __short condensed titles for efficiency and organization__.

<br>

[Back to the Table of Contents](#table-of-contents) 
<a name="author"></a>

<br>

### Author

Lucca Wang is an American software engineer and developer.

<br>

[Back to the Table of Contents](#table-of-contents)

[Back to Top](#top)