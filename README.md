# EventTrackerProject

## Armament Tracker

### Description

This program allows you to track weapons from the popular video game Elden Ring, developed by FromSoftware. In its current state, you are able to view the armament's name, description, weapon type, damage type, skill, and weight. Using this program, you are also able to create, update, and delete weapons in the database.

The front end was created using javascript via XMLHttpRequest, allowing for a more dynamic webpage.

### Technology Used

* CRUD
* Springboot
* REST
* Gradle
* Controller
* Repository
* Postman
* Javascript
* JSON


### Lessons Learned

I feel much more comfortable now doing basic entity mapping and testing CRUD via Postman. Using RESTful technology simplifies the process and makes me feel much more confident in my overall coding abilities.

Using javascript to design the front end feels much more modern and seamless than the previous way of using jsps. This assignment helped me further understand the logic and theory behind javascript functionality, and it opened my eyes to vast possibilities brought forth with javascript.

### Routing

| Return Type      | Route                    | Functionality                      |
| ---------------- | ------------------------ | ---------------------------------- |
| List <Armament>  | GET api/armaments        | Get all armaments                  |
| Armament         | GET api/armaments/{id}   | Get one armament by id             |
| Armament         | POST api/armaments       | Creates a new armament             |
| Armament         | PUT api/armaments/{id}   | Updates armament by id             |
| void             | DELTE api/armaments/{id} | Deletes an existing armament by id |