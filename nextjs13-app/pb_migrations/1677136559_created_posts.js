migrate((db) => {
  const collection = new Collection({
    "id": "l7x3aw1mu9xqdfc",
    "created": "2023-02-23 07:15:59.758Z",
    "updated": "2023-02-23 07:15:59.758Z",
    "name": "posts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "m84hypmf",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
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
  const collection = dao.findCollectionByNameOrId("l7x3aw1mu9xqdfc");

  return dao.deleteCollection(collection);
})
