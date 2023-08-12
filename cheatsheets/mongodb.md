---
title: 'mongo db'
description: 'mongo db cheatsheet'
---

### Commands
```bash
# list databases
show dbs;

# use database
use <dbname>;

# list collections
show collections;

# create collection
db.createCollection("products")

# insert document
db.products.insertOne({ name: "Realme 5" })

# find products
db.products.find()

# count documents
db.products.countDocuments()

# delete all documents in a collection
db.products.deleteMany({})

# create index
db.products.createIndex({ name: 1 }, { unique: true, sparse: true })

# list indexes
db.products.getIndexes()

# drop indexes
db.products.dropIndex('index_name');

```