module.exports = {
  "name": "default",
  "type": "sqlite",
  "database": "database.sql",
  "entities": [
    "./src/typeorm/entities/*.ts",
  ],
  "migrations": [
    "./src/typeorm/migrations/*.ts"
  ],
  "cli": {
    "migrationsDir": [
      "./src/typeorm/migrations"
    ]
  },
  "logging": false
}
