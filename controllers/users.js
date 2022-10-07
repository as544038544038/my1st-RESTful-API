import { v4 as uuidv4 } from 'uuid';
//import getRandomIntInclusive from '../test.js';

let users = [
  {
    firstname: 'John',
    lastname: 'Doe',
    age: 17,
    id: '550e8400-e29b-41d4-a716-446655440000',
  },
  {
    firstname: 'Johnny',
    lastname: 'Amy',
    age: 66,
    id: '11bf5b37-e0b8-42e0-8dcf-dc8c4aefc000',
  },
];
export default users;

//creatUser
export const creatUser = (req, res) => {
  const user = req.body;
  users.push({ ...user, id: uuidv4() });
  //users.push({...user, id: getRandomIntInclusive(1,200)});
  //res.send(`User with the name ${user.firstname} add to the database.`)
  const userFilterbyID = users.filter(function (value) {
    if (
      value.firstname == user.firstname &&
      value.lastname == user.lastname &&
      value.age == user.age
    ) {
      return value.firstname == user.firstname;
    }
  });
  res.send(userFilterbyID);
};

//geUsers (All users)
export const getUsers = (req, res) => {
  res.send(users);
};

//getUser (with id)
export const getUser = (req, res) => {
  const { id } = req.params;
  const foundUser = users.find((user) => user.id == id);
  if (!foundUser) {
    res.sendStatus(404);
  }
  res.send(foundUser);
};

//delUser
export const delUser = (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id != id);
  //let targetuser =users.find((user) => user.id == id)
  res.send(`User with the id ${id} deleted from the database`);
};

//updateUser (with id)
export const updateUser = (req, res) => {
  const { id } = req.params;
  const { firstname, lastname, age } = req.body;
  const user = users.find((user) => user.id == id);
  if (!user) {
    res.sendStatus(500);
  }
  if (user) {
    if (firstname) {
      user.firstname = firstname;
    }
    if (lastname) {
      user.lastname = lastname;
    }
    if (age) {
      user.age = age;
    }
    res.send(user);
  }
  //res.send(`User with the id ${id} has been updated.`);
};
