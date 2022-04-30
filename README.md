# Tercera Asignación

## How to run

This node proyect has use the nodemon and express libraries just to execute the enviroment, using the next command:
#### npm i nodemon express
but, actually you just need to use
####
    npm i

After all node_modules install, you can run the proyect using
####
    npm start
This will run the application.

## How it works

This application use two tables, each for a cache and principal memories. You can see them with the id for each one. In the main execution we see the  " app.listen( '3000', ( ) => { ... } ) ", where the application follows it's flows. First of all, we print the tables in their initial state, then we fill them, generating random information in their rows. 

The application generates rows for both tables every 500 milliseconds, we are saying 2 rows / second. You'll see in the variables a "secs" variable, this is the time to wait to take the SS of the state of the memories.

## Methods

### generarDato( )
This function generates just one random data using " Math.random( ) ", recieves a min value, and a max.

### generarRegistro( )
This function generates data for a row, calling the " generarDato( ) " function for three columns, and using an id for the index of all the rows. So once is created the row, we push it in a table, depending on the args of the method.

### llenar( )
This function calls " generarRegistro( ) " function for both tables every half second.

### imprimirTablas( )
This function just make a " console.table( ) " for both tables.