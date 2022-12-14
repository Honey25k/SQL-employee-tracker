# SQL-employee-tracker

## Description
This is a command-line application that manages a company's employee database. The application can be used to keep track of your employees, their roles, their salaries, the departments they belong to, and their managers. It is built in the Node.js runtime environment with an interface built in Inquirer. It makes queries to the database using the npm MySQL2 package, and the database is stored with MySQL. 
    
## Table of Contents
    
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Questions](#questions)
    
## Installation
1. Make sure you have a command line application that will run Node.js and node package manager before use. 
2. Clone the repository from GitHub to your local machine. Clone repo with this command: 
``` https://github.com/Honey25k/SQL-employee-tracker.git ``` 
3. Create a .env file in the root of your project and add following data:

DB_NAME='YOUR_DATABASE_NAME'
DB_USER='YOUR_MYSQL_USERNAME'
DB_PASSWORD='YOUR_PASSWORD (TO MYSQL)'
 
4. In the command line, navigate to the directory to follow the next steps:
5. Use `npm install` to install all the required node modules (Packages required for this application are: Inquirer, MySQL2, dotenv and console.table).

6. Open a MySQL Shell through the command line and log in by using the command `mysql -u 'your username' -p` then enter your password and run the command `source db/schema.sql` to set up the application's database.
7. There are also some testing seeds available, to load these run `source db/seeds.sql` from the MySQL Shell.

The application should now be ready to use. 

## Usage

1. To open the application, simply run `node index.js` through the terminal in the containing directory. 
2. Answer the prompts to write, retrieve and update data stored within the application.
3. View the applications walkthrough video here: https://drive.google.com/file/d/1BaMtAZagl3m6PscUZx2jXA314we27ZLl/view  

## License 

None

## Questions 

Feel free to contact me if you have any questions. 

>Email: Honey93k@gmail.com 

>GitHub: [Honey25k](https://github.com/Honey25k) 

