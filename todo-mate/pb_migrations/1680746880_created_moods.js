migrate((db) => {
  const collection = new Collection({
    "id": "wqgstoc0ysxkmqx",
    "created": "2023-04-06 02:08:00.412Z",
    "updated": "2023-04-06 02:08:00.412Z",
    "name": "moods",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "zsuheqg6",
        "name": "moodId",
        "type": "number",
        "required": false,
        "unique": true,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "ncjg5zqu",
        "name": "moodValue",
        "type": "text",
        "required": false,
        "unique": true,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "t9pox9j9",
        "name": "moodEmoji",
        "type": "text",
        "required": false,
        "unique": true,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "dqsn3zbi",
        "name": "checked",
        "type": "bool",
        "required": false,
        "unique": false,
        "options": {}
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("wqgstoc0ysxkmqx");

  return dao.deleteCollection(collection);
})
