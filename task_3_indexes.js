db.authors.createIndex({login : 1} , { unique: true });
db.articles.createIndex({author : 1});
db.articles.createIndex({text : "text", comments: "text", title: "text"});