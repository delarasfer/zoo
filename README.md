# zoo
## Stack

-NodeJS  
-Paradigm: **Object Oriented** and **Functional Programming** (two versions)  
-Express (for REST test version)

## Description

I Deployed two versions just to see usage. One of direct execution with two implementation (OO and FP) and another as a Rest API (simple) using the OO version
## Run

To run the direct execution first Object Oriented then Functional Programming
```
npm start
```

To run and test the REST version 
```
npm run start-server

and to test

curl --location --request GET 'localhost:3000/lion'
curl --location --request GET 'localhost:3000/tiger'
```
