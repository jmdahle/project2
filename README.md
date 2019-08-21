# smöthii

## About smöthii
Smöthii is an interactive interface for a fresh ingredient smoothie vending machine.  The smöthii application allows a customer to select to purchase a smöthii from a list of previously-created recipes or create a custom smöthii from the available ingredients.

## Installation
The smöthii app relies on Node.js to provide the web server, and mysql to store vending machine data (smöthiis, ingredients, recipies, smöthii purchases and ingredient restocks).  There are a number of node.js packages used to extend functionality listed below.

1. [Download](https://nodejs.org/en/download/) and install Node.js
2. [Download](https://dev.mysql.com/downloads/mysql/) and install MySql
3. Use the Node.js package manager - npm - to install the required Node.js packages.  Running ```npm install``` from the command line will install the following Node.js packages:
    * [mysql2](https://www.npmjs.com/package/mysql2)
    * [express](https://www.npmjs.com/package/express)
    * [express-handlebars](https://www.npmjs.com/package/express-handlebars)
    * [sequelize](https://www.npmjs.com/package/sequelize)

### Sequelize
In the smöthii applicaiton, Sequelize is configured to create database tables based on the smöthii data models.  Models

### Model-View-Controller File Structure
#### Root directory
* server.js - 
    * requires npm packages
    * allows Sequelize to create tables from models
    * listens to requests to the application on an IP address and PORT
    * defines static routes
    * includes routes to connect requests to resources and serve responses
#### config
* config.js - database configuration file. Can be used to provde local DB configuration or connect to a remote database
#### models
* index.js - used by Sequelize to initialize tables in an empty database
* MODELNAME.js - a separate model file for each database table
#### node_modules
* contains node packages; packages are installed using the node package manager (npm).  See "Installation" section above.
#### public - a static route defined in server.js
* styles - directory with client-available css files
* js - directory with client-available js files
* images - directory of images used by the applicaiton
#### routes
* apiRoutes.js - route handling for data requests (return JSON)
* htmlRoutes.js - routes for handling page requests (return HTML)
#### views - 
* *.handlebars templates (are included in {{{body}}} of main.handlebars)
* layouts subdirectory with main.handlebars document template

## Usage
The smöthii vending interface permits the customer to select from a of existing smöthii recipes or create a custom smöthii.  Once the customer has selected a smöthii to purcahse, a vending interface directs the customer throught the purchase and smöthii production.

Key features of the application:
* The menu of existing recipes includes pre-configured recipes as well as recipes created by previous customers (all previous custom-made smöthiis).
* The menu will only permit the customer to select smöthiis that have sifficient inventory of the recipe ingredients.
* The "create your own" option permits the customer to name and claim their smöthii creation and use "drag and drop" technology to select 3 ingredients to create a custom concoction.
* Pricing of individual smöthiis is based on the cost of ingredients.
* Purchasing a smöthii deducts the required ingredients from the ingredient inventory, updating the availability of smöthiis based on ingredient inventory.
* Purchases and ingredient restocks are tracked to assist in determining the profitability of the smöthii vending machine.
* The vending view is configured for a specific screen size for the vending machine screen.

## Technical Notes

## Team
The smöthii development team included:
* Adina
* Antionne
* John
* Sara
* Violet