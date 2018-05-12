# Node Express Handlebars

### Overview

A burger logger with MySQL, Node, Express, Handlebars and a homemade ORM. Following the MVC design pattern; use Node and MySQL to query and route data in your app, Handlebars to generate your HTML.

### Before You Begin

* Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat.

* Whenever a user submits a burger's name, your app will display the burger on the left side of the page -- waiting to be devoured.

* Each burger in the waiting area also has a `Devour it!` button. When the user clicks it, the burger will move to the right side of the page.

* Your app will store every burger in a database, whether devoured or not.

## Instructions

#### App Setup

1. X Create a GitHub repo called `burger` and clone it to your computer.

2. X Make a package.json file by running `npm init` from the command line.

3. X Install the Express npm package: `npm install express`.

4. X Create a server.js file.

5. X Install the Handlebars npm package: `npm install express-handlebars`.

6. X Install the body-parser npm package: `npm install body-parser`.

7. X Install MySQL npm package: `npm install mysql`.

8. X Require the following npm packages inside of the server.js file:
   * X express
   * X body-parser

#### DB Setup

1. x Inside your `burger` directory, create a folder named `db`.

2. X In the `db` folder, create a file named `schema.sql`. Write SQL queries this file that do the following:

   * X Create the `burgers_db`.
   * X Switch to or use the `burgers_db`.
   * X Create a `burgers` table with these fields:
     * X **id**: an auto incrementing int that serves as the primary key.
     * X **burger_name**: a string.
     * X **devoured**: a boolean.

3. X Still in the `db` folder, create a `seeds.sql` file. In this file, write insert queries to populate the `burgers` table with at least three entries.

4. X Run the `schema.sql` and `seeds.sql` files into the mysql server from the command line

5. X Now you're going to run these SQL files.

   * X Make sure you're in the `db` folder of your app.

   * X Start MySQL command line tool and login: `mysql -u root -p`.

   * X With the `mysql>` command line tool running, enter the command `source schema.sql`. This will run your schema file and all of the queries in it -- in other words, you'll be creating your database.

   * X Now insert the entries you defined in `seeds.sql` by running the file: `source seeds.sql`.

   * X Close out of the MySQL command line tool: `exit`.

#### Config Setup

1. X Inside your `burger` directory, create a folder named `config`.

2. X Create a `connection.js` file inside `config` directory.

   * X Inside the `connection.js` file, setup the code to connect Node to MySQL.

   * X Export the connection.

3. Create an `orm.js` file inside `config` directory.

   * X Import (require) `connection.js` into `orm.js`

   * X In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

     * X `selectAll()`
     * X `insertOne()`
     * X `updateOne()`

   * X Export the ORM object in `module.exports`.

#### Model setup

* Inside your `burger` directory, create a folder named `models`.

  * X In `models`, make a `burger.js` file.

    * X Inside `burger.js`, import `orm.js` into `burger.js`

    * Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.

    * X Export at the end of the `burger.js` file.

#### Controller setup

1. X Inside your `burger` directory, create a folder named `controllers`.

2. X In `controllers`, create the `burgers_controller.js` file.

3. X Inside the `burgers_controller.js` file, import the following:

   * X Express
   * X `burger.js`

4. X Create the `router` for the app, and export the `router` at the end of your file.

#### View setup

1. X Inside your `burger` directory, create a folder named `views`.

   * X Create the `index.handlebars` file inside `views` directory.

   * X Create the `layouts` directory inside `views` directory.

     * X Create the `main.handlebars` file inside `layouts` directory.

     * X Setup the `main.handlebars` file so it's able to be used by Handlebars.

     * X Setup the `index.handlebars` to have the template that Handlebars can render onto.

     * Create a button in `index.handlebars` that will submit the user input into the database.

### Minimum Requirements

Attempt to complete homework assignment as described in instructions. If unable to complete certain portions, please pseudocode these portions to describe what remains to be completed. Hosting on Heroku and adding a README.md are required for this homework. In addition, add this homework to your portfolio, more information can be found below.
 
- - -

### Hosting on Heroku

Now that we have a backend to our applications, we use Heroku for hosting. Please note that while **Heroku is free**, it will request credit card information if you have more than 5 applications at a time or are adding a database.

Please see [Heroku’s Account Verification Information](https://devcenter.heroku.com/articles/account-verification) for more details.

- - -

### One More Thing

This is a really tough homework assignment, but we want you to put in your best effort to finish it.

If you have any questions about this project or the material we have covered, please post them in the community channels in slack so that your fellow developers can help you! If you're still having trouble, you can come to office hours for assistance from your instructor and TAs.

**Good Luck!**

!!! Look at Lesson 14.3
11-Quotes App
Maybe 12-OrmApp ?
14.08 Wishes
14.18 Catt App
REMEMBER TO DELETE PASSWORD!!