// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);
// var user = {name: 'Jaosn', age:25};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client)=> {
  if (err) {
    return console.log('Unable to MongoDB server');
}
    console.log('Connected to MongoDB server');
  //  const db = client.db('TodoApp')
   db.collection('Todos').find().toArray().then((docs) => {
     console.log('Todos');
     console.log(JSON.stringify(docs, undefined, 2));
   }, (err) => {
     console.log('Unable to fetch todos', err);
   });
   //db.close();
   });
    // db.collection('Todos').insertOne({
    // test: 'Something to do',
    //
    // completed: false
    //
    // }, (err, result) => {
    //   if (err) {
    //     return constole,log('Unable to insert', err);
    //   }
    //
    //   console.log(JSON.stringify(result.ops, undefined, 2 ));
    // });

// db.collection('User:').insertOne({
//
//   Name:'Jason',
//   Age:'59',
//   Location:'HB'
// }, (err, result) => {
//   if (err) {
//     return console.log('Unable to insert todo', err);
//   }
//
//   console.log(result.ops[0]._id.getTimestamp());
//
// });
    //client.close();
//});
