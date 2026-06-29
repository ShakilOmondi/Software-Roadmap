//Environmental Variables
//Refers to secret/configurable stored outside your code
//They are not hardcoded
//Instead of hardcoding the code into the software then you store it outward somewhere

const myPassword = "mySuperSecretPassword"

//Above Code is a bad Idea because -Insecure in teams,Dangerous for Github and Anyone seeing code sees the password
//Best practise is 

const password = ProcessingInstruction.env.DB_PASSWORD

//Variables Stored in the ENV Variables
//API Keys-Authentication
//Database URL'S-Database Connections
//Secret Tokens-Security
//Port Numbers-App Configurations
//Environment Node-Dev/Productions