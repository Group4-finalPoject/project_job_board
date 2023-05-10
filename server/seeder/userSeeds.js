
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('./models/user');

mongoose.set('strictQuery', false);

mongoose.connect('mongodb://localhost:27017/job-db', { useNewUrlParser: true })
  .then(() => {
    console.log('MONGODB CONNECTION OPEN!');
  })
  .catch((err) => {
    console.log(err);
  });

const seedUsers = [
  {
    username: 'user1',
    password: 'password1',
    email: 'user1@example.com',
    dateJoined: new Date('2022-01-01'),
  },
  {
    username: 'user2',
    password: 'password2',
    email: 'user2@example.com',
    dateJoined: new Date('2022-01-02'),
  },
  {
    username: 'user3',
    password: 'password3',
    email: 'user3@example.com',
    dateJoined: new Date('2022-01-03'),
  },
];

const seedDB = async () => {
  await User.deleteMany({});
  for (let user of seedUsers) {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(user.password, saltRounds);
    const newUser = new User({
      ...user,
      password: hashedPassword,
    });
    await newUser.save();
  }
  console.log('Users seeded!');
};

seedDB();
