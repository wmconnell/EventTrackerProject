# EventTrackerProject

## Armament Tracker

### Description

This program allows you to track weapons from the popular video game Elden Ring, developed by FromSoftware. In its current state, you are able to view the armament's name, description, weapon type, damage type, skill, and weight. Using this program, you are also able to create, update, and delete weapons in the database.

### Technology Used

* CRUD
* SPringboot
* REST
* Gradle
* Controller
* Repository
* Postman

### Lessons Learned

I feel much more comfortable now doing basic entity mapping and testing CRUD via Postman. Using RESTful technology simplifies the process and makes me feel much more confident in my overall coding abilities. 

### Routing

| Return Type      | Route                    | Functionality                      |
| ---------------- | ------------------------ | ---------------------------------- |
| List <Armament>  | GET api/armaments        | Get all armaments                  |
| Armament         | GET api/armaments/{id}   | Get one armament by id             |
| Armament         | POST api/armaments       | Creates a new armament             |
| Armament         | PUT api/armaments/{id}   | Updates armament by id             |
| void             | DELTE api/armaments/{id} | Deletes an existing armament by id |