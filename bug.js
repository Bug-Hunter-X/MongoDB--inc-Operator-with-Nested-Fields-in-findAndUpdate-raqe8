```javascript
// Incorrect usage of $inc operator within a findAndUpdate operation
db.collection('myCollection').findOneAndUpdate({
  _id: ObjectId("65198756345678901234567")
}, {
  $inc: {
    counter: 1,
    "nested.field": 1 //Error: this will not increment nested field correctly
  }
});
```