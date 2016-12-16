db.authors.insertMany(
[
{login: "User1", email: "User1@do.it", age: 19
},
{
login: "Cant", email: "believe@this.shit", age: 42
},
{
login: "happens", email: "again@with.me", age: 156 }
]);
db.articles.insertMany([
{title: "Mongo",
text: "db.collection.insert() inserts a single document or multiple documents into a collection. To insert a single document, pass a document to the method; to insert multiple documents, pass an array of documents to the method.",
creationDate: new ISODate("2012-11-11T13:15:00Z"),
tags: ["interesting"],
author: "User1",
comments:[
    {
        author: "Cant",
        text: "awesome!",
        creationDate: new ISODate("2012-11-11T13:17:00Z")
    }
]
},
{title: "same part 2",
text: "The nInserted field specifies the number of documents inserted. If the operation encounters an error, the WriteResult object will contain the error information.The following example inserts multiple documents into the users collection. Since the documents do not specify an _id field, MongoDB adds the _id field with an ObjectId value to each document. See Insert Behavior.",
creationDate: new ISODate("2014-12-11T14: 12: 00Z"),
author: "User1",
comments:[
    {
        author: "happens",
        text: "what the hell, bro?",
        creationDate: new ISODate("2014-12-11T15:12:00Z")
    }
],
tags: ["notinteresting"]
},
{
title: "wow look inside",
text: "sadfsdfsdxcv xcv dfgw dsf dsf werwe cfvxcv sdfs",
author: "happens",
creationDate: new ISODate("2013-11-11T13:12:00Z"),
tags: ["trump", "my little pony", "interesting"]
}
]);