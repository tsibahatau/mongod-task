db.authors.updateOne(
   { age: { $gt: 50 } },
   { $set: { "age": 50 }
   }
);

db.authors.find(
    { age: { $gt: 50 } }
);

db.articles.deleteMany({author: "happens"});