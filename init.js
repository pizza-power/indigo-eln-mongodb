use indigoeln
db.createRole({ role: "readWriteSystem", privileges: [{ resource: { db: "indigoeln", collection: "system.indexes" }, actions: ["changeStream", "collStats", "convertToCapped", "createCollection", "createIndex", "dbHash", "dbStats", "dropCollection", "dropIndex", "emptycapped", "find", "insert", "killCursors", "listCollections", "listIndexes", "planCacheRead", "remove", "renameCollectionSameDB", "update"] }], roles: [] })
db.createUser({
    user: "user",
    pwd: "pass",
    roles: [
        { role: "readWriteSystem", db: "indigoeln" },
        { role: "readWrite", db: "indigoeln" }
    ]
})
