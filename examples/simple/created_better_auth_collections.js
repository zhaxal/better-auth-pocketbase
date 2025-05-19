/// <reference path="../pb_data/types.d.ts" />

/**
 * Auto-generated PocketBase migration – do NOT edit by hand.
 */

migrate((app) => {
  const collections = [
  {
    "id": "pbc_840314477",
    "name": "ba_user",
    "type": "base",
    "system": false,
    "fields": [
      {
        "id": "text5461378",
        "name": "id",
        "type": "text",
        "required": true,
        "primaryKey": true,
        "system": true,
        "presentable": false,
        "autogeneratePattern": "[a-z0-9]{15}",
        "pattern": "^[a-z0-9]+$",
        "min": 15,
        "max": 15
      },
      {
        "id": "text914806679",
        "name": "name",
        "type": "text",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text394432253",
        "name": "email",
        "type": "text",
        "required": true,
        "unique": true,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "bool847241680",
        "name": "emailVerified",
        "type": "bool",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text220428290",
        "name": "image",
        "type": "text",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "date500175282",
        "name": "createdAt",
        "type": "date",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "date117852526",
        "name": "updatedAt",
        "type": "date",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text76806968",
        "name": "username",
        "type": "text",
        "required": false,
        "unique": true,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text446226775",
        "name": "displayUsername",
        "type": "text",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "autodate598040338",
        "name": "created",
        "type": "autodate",
        "onCreate": true,
        "onUpdate": false,
        "required": false,
        "system": false,
        "presentable": false
      },
      {
        "id": "autodate442531061",
        "name": "updated",
        "type": "autodate",
        "onCreate": true,
        "onUpdate": true,
        "required": false,
        "system": false,
        "presentable": false
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "indexes": []
  },
  {
    "id": "pbc_386329697",
    "name": "ba_session",
    "type": "base",
    "system": false,
    "fields": [
      {
        "id": "text474808641",
        "name": "id",
        "type": "text",
        "required": true,
        "primaryKey": true,
        "system": true,
        "presentable": false,
        "autogeneratePattern": "[a-z0-9]{15}",
        "pattern": "^[a-z0-9]+$",
        "min": 15,
        "max": 15
      },
      {
        "id": "date541895092",
        "name": "expiresAt",
        "type": "date",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text636367716",
        "name": "token",
        "type": "text",
        "required": true,
        "unique": true,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "date826657054",
        "name": "createdAt",
        "type": "date",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "date989672368",
        "name": "updatedAt",
        "type": "date",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text323499379",
        "name": "ipAddress",
        "type": "text",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text994319595",
        "name": "userAgent",
        "type": "text",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text799520656",
        "name": "userId",
        "type": "relation",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false,
        "collectionId": "pbc_840314477",
        "cascadeDelete": true,
        "maxSelect": 1,
        "minSelect": 0
      },
      {
        "id": "text775203103",
        "name": "activeOrganizationId",
        "type": "text",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "autodate533311427",
        "name": "created",
        "type": "autodate",
        "onCreate": true,
        "onUpdate": false,
        "required": false,
        "system": false,
        "presentable": false
      },
      {
        "id": "autodate403010983",
        "name": "updated",
        "type": "autodate",
        "onCreate": true,
        "onUpdate": true,
        "required": false,
        "system": false,
        "presentable": false
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "indexes": []
  },
  {
    "id": "pbc_8100356",
    "name": "ba_account",
    "type": "base",
    "system": false,
    "fields": [
      {
        "id": "text347824062",
        "name": "id",
        "type": "text",
        "required": true,
        "primaryKey": true,
        "system": true,
        "presentable": false,
        "autogeneratePattern": "[a-z0-9]{15}",
        "pattern": "^[a-z0-9]+$",
        "min": 15,
        "max": 15
      },
      {
        "id": "text868538961",
        "name": "accountId",
        "type": "text",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text389321553",
        "name": "providerId",
        "type": "text",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text425186254",
        "name": "userId",
        "type": "relation",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false,
        "collectionId": "pbc_840314477",
        "cascadeDelete": true,
        "maxSelect": 1,
        "minSelect": 0
      },
      {
        "id": "text10626084",
        "name": "accessToken",
        "type": "text",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text124352508",
        "name": "refreshToken",
        "type": "text",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text833330724",
        "name": "idToken",
        "type": "text",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "date302477423",
        "name": "accessTokenExpiresAt",
        "type": "date",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "date71932499",
        "name": "refreshTokenExpiresAt",
        "type": "date",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text784627746",
        "name": "scope",
        "type": "text",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text435961926",
        "name": "password",
        "type": "text",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "date532764218",
        "name": "createdAt",
        "type": "date",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "date860588578",
        "name": "updatedAt",
        "type": "date",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "autodate278436192",
        "name": "created",
        "type": "autodate",
        "onCreate": true,
        "onUpdate": false,
        "required": false,
        "system": false,
        "presentable": false
      },
      {
        "id": "autodate165533863",
        "name": "updated",
        "type": "autodate",
        "onCreate": true,
        "onUpdate": true,
        "required": false,
        "system": false,
        "presentable": false
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "indexes": []
  },
  {
    "id": "pbc_782033164",
    "name": "ba_verification",
    "type": "base",
    "system": false,
    "fields": [
      {
        "id": "text743573168",
        "name": "id",
        "type": "text",
        "required": true,
        "primaryKey": true,
        "system": true,
        "presentable": false,
        "autogeneratePattern": "[a-z0-9]{15}",
        "pattern": "^[a-z0-9]+$",
        "min": 15,
        "max": 15
      },
      {
        "id": "text635478045",
        "name": "identifier",
        "type": "text",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text556851693",
        "name": "value",
        "type": "text",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "date658259095",
        "name": "expiresAt",
        "type": "date",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "date397512705",
        "name": "createdAt",
        "type": "date",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "date108975987",
        "name": "updatedAt",
        "type": "date",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "autodate595959651",
        "name": "created",
        "type": "autodate",
        "onCreate": true,
        "onUpdate": false,
        "required": false,
        "system": false,
        "presentable": false
      },
      {
        "id": "autodate627335326",
        "name": "updated",
        "type": "autodate",
        "onCreate": true,
        "onUpdate": true,
        "required": false,
        "system": false,
        "presentable": false
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "indexes": []
  },
  {
    "id": "pbc_739561494",
    "name": "ba_organization",
    "type": "base",
    "system": false,
    "fields": [
      {
        "id": "text766716120",
        "name": "id",
        "type": "text",
        "required": true,
        "primaryKey": true,
        "system": true,
        "presentable": false,
        "autogeneratePattern": "[a-z0-9]{15}",
        "pattern": "^[a-z0-9]+$",
        "min": 15,
        "max": 15
      },
      {
        "id": "text345111040",
        "name": "name",
        "type": "text",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text546469580",
        "name": "slug",
        "type": "text",
        "required": false,
        "unique": true,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text690375135",
        "name": "logo",
        "type": "text",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "date19504695",
        "name": "createdAt",
        "type": "date",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text794565140",
        "name": "metadata",
        "type": "text",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "autodate215343591",
        "name": "created",
        "type": "autodate",
        "onCreate": true,
        "onUpdate": false,
        "required": false,
        "system": false,
        "presentable": false
      },
      {
        "id": "autodate857076663",
        "name": "updated",
        "type": "autodate",
        "onCreate": true,
        "onUpdate": true,
        "required": false,
        "system": false,
        "presentable": false
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "indexes": []
  },
  {
    "id": "pbc_237068687",
    "name": "ba_member",
    "type": "base",
    "system": false,
    "fields": [
      {
        "id": "text427561462",
        "name": "id",
        "type": "text",
        "required": true,
        "primaryKey": true,
        "system": true,
        "presentable": false,
        "autogeneratePattern": "[a-z0-9]{15}",
        "pattern": "^[a-z0-9]+$",
        "min": 15,
        "max": 15
      },
      {
        "id": "text986819182",
        "name": "organizationId",
        "type": "relation",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false,
        "collectionId": "pbc_739561494",
        "cascadeDelete": true,
        "maxSelect": 1,
        "minSelect": 0
      },
      {
        "id": "text631234787",
        "name": "userId",
        "type": "relation",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false,
        "collectionId": "pbc_840314477",
        "cascadeDelete": true,
        "maxSelect": 1,
        "minSelect": 0
      },
      {
        "id": "text893335071",
        "name": "role",
        "type": "text",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "date748259668",
        "name": "createdAt",
        "type": "date",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "autodate669315211",
        "name": "created",
        "type": "autodate",
        "onCreate": true,
        "onUpdate": false,
        "required": false,
        "system": false,
        "presentable": false
      },
      {
        "id": "autodate188387053",
        "name": "updated",
        "type": "autodate",
        "onCreate": true,
        "onUpdate": true,
        "required": false,
        "system": false,
        "presentable": false
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "indexes": []
  },
  {
    "id": "pbc_86053203",
    "name": "ba_invitation",
    "type": "base",
    "system": false,
    "fields": [
      {
        "id": "text336193895",
        "name": "id",
        "type": "text",
        "required": true,
        "primaryKey": true,
        "system": true,
        "presentable": false,
        "autogeneratePattern": "[a-z0-9]{15}",
        "pattern": "^[a-z0-9]+$",
        "min": 15,
        "max": 15
      },
      {
        "id": "text582565897",
        "name": "organizationId",
        "type": "relation",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false,
        "collectionId": "pbc_739561494",
        "cascadeDelete": true,
        "maxSelect": 1,
        "minSelect": 0
      },
      {
        "id": "text927635095",
        "name": "email",
        "type": "text",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text502964135",
        "name": "role",
        "type": "text",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text218899051",
        "name": "status",
        "type": "text",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "date556887294",
        "name": "expiresAt",
        "type": "date",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text510446811",
        "name": "inviterId",
        "type": "relation",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false,
        "collectionId": "pbc_840314477",
        "cascadeDelete": true,
        "maxSelect": 1,
        "minSelect": 0
      },
      {
        "id": "autodate371466675",
        "name": "created",
        "type": "autodate",
        "onCreate": true,
        "onUpdate": false,
        "required": false,
        "system": false,
        "presentable": false
      },
      {
        "id": "autodate59743741",
        "name": "updated",
        "type": "autodate",
        "onCreate": true,
        "onUpdate": true,
        "required": false,
        "system": false,
        "presentable": false
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "indexes": []
  },
  {
    "id": "pbc_293334887",
    "name": "ba_apikey",
    "type": "base",
    "system": false,
    "fields": [
      {
        "id": "text746803037",
        "name": "id",
        "type": "text",
        "required": true,
        "primaryKey": true,
        "system": true,
        "presentable": false,
        "autogeneratePattern": "[a-z0-9]{15}",
        "pattern": "^[a-z0-9]+$",
        "min": 15,
        "max": 15
      },
      {
        "id": "text344424355",
        "name": "name",
        "type": "text",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text725576921",
        "name": "start",
        "type": "text",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text642005476",
        "name": "prefix",
        "type": "text",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text371515901",
        "name": "key",
        "type": "text",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text81910244",
        "name": "userId",
        "type": "relation",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false,
        "collectionId": "pbc_840314477",
        "cascadeDelete": true,
        "maxSelect": 1,
        "minSelect": 0
      },
      {
        "id": "number787162603",
        "name": "refillInterval",
        "type": "number",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "number293684314",
        "name": "refillAmount",
        "type": "number",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "date526399256",
        "name": "lastRefillAt",
        "type": "date",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "bool920265334",
        "name": "enabled",
        "type": "bool",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "bool863515101",
        "name": "rateLimitEnabled",
        "type": "bool",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "number822007405",
        "name": "rateLimitTimeWindow",
        "type": "number",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "number48336626",
        "name": "rateLimitMax",
        "type": "number",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "number832835083",
        "name": "requestCount",
        "type": "number",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "number575075899",
        "name": "remaining",
        "type": "number",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "date227263508",
        "name": "lastRequest",
        "type": "date",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "date412311166",
        "name": "expiresAt",
        "type": "date",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "date902054513",
        "name": "createdAt",
        "type": "date",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "date584050548",
        "name": "updatedAt",
        "type": "date",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text876553842",
        "name": "permissions",
        "type": "text",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text965341986",
        "name": "metadata",
        "type": "text",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "autodate748415787",
        "name": "created",
        "type": "autodate",
        "onCreate": true,
        "onUpdate": false,
        "required": false,
        "system": false,
        "presentable": false
      },
      {
        "id": "autodate401239893",
        "name": "updated",
        "type": "autodate",
        "onCreate": true,
        "onUpdate": true,
        "required": false,
        "system": false,
        "presentable": false
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "indexes": []
  }
];

  for (const def of collections) {
    let existing;
    try {
      existing = app.findCollectionByNameOrId(def.name);
    } catch {}

    if (existing) {
      console.info(`[PB] ${def.name} exists – skipping.`);
    } else {
      app.save(new Collection(def));
      console.info(`[PB] created ${def.name}.`);
    }
  }
}, (app) => {
  const collections = [
  {
    "id": "pbc_840314477",
    "name": "ba_user",
    "type": "base",
    "system": false,
    "fields": [
      {
        "id": "text5461378",
        "name": "id",
        "type": "text",
        "required": true,
        "primaryKey": true,
        "system": true,
        "presentable": false,
        "autogeneratePattern": "[a-z0-9]{15}",
        "pattern": "^[a-z0-9]+$",
        "min": 15,
        "max": 15
      },
      {
        "id": "text914806679",
        "name": "name",
        "type": "text",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text394432253",
        "name": "email",
        "type": "text",
        "required": true,
        "unique": true,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "bool847241680",
        "name": "emailVerified",
        "type": "bool",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text220428290",
        "name": "image",
        "type": "text",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "date500175282",
        "name": "createdAt",
        "type": "date",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "date117852526",
        "name": "updatedAt",
        "type": "date",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text76806968",
        "name": "username",
        "type": "text",
        "required": false,
        "unique": true,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text446226775",
        "name": "displayUsername",
        "type": "text",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "autodate598040338",
        "name": "created",
        "type": "autodate",
        "onCreate": true,
        "onUpdate": false,
        "required": false,
        "system": false,
        "presentable": false
      },
      {
        "id": "autodate442531061",
        "name": "updated",
        "type": "autodate",
        "onCreate": true,
        "onUpdate": true,
        "required": false,
        "system": false,
        "presentable": false
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "indexes": []
  },
  {
    "id": "pbc_386329697",
    "name": "ba_session",
    "type": "base",
    "system": false,
    "fields": [
      {
        "id": "text474808641",
        "name": "id",
        "type": "text",
        "required": true,
        "primaryKey": true,
        "system": true,
        "presentable": false,
        "autogeneratePattern": "[a-z0-9]{15}",
        "pattern": "^[a-z0-9]+$",
        "min": 15,
        "max": 15
      },
      {
        "id": "date541895092",
        "name": "expiresAt",
        "type": "date",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text636367716",
        "name": "token",
        "type": "text",
        "required": true,
        "unique": true,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "date826657054",
        "name": "createdAt",
        "type": "date",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "date989672368",
        "name": "updatedAt",
        "type": "date",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text323499379",
        "name": "ipAddress",
        "type": "text",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text994319595",
        "name": "userAgent",
        "type": "text",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text799520656",
        "name": "userId",
        "type": "relation",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false,
        "collectionId": "pbc_840314477",
        "cascadeDelete": true,
        "maxSelect": 1,
        "minSelect": 0
      },
      {
        "id": "text775203103",
        "name": "activeOrganizationId",
        "type": "text",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "autodate533311427",
        "name": "created",
        "type": "autodate",
        "onCreate": true,
        "onUpdate": false,
        "required": false,
        "system": false,
        "presentable": false
      },
      {
        "id": "autodate403010983",
        "name": "updated",
        "type": "autodate",
        "onCreate": true,
        "onUpdate": true,
        "required": false,
        "system": false,
        "presentable": false
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "indexes": []
  },
  {
    "id": "pbc_8100356",
    "name": "ba_account",
    "type": "base",
    "system": false,
    "fields": [
      {
        "id": "text347824062",
        "name": "id",
        "type": "text",
        "required": true,
        "primaryKey": true,
        "system": true,
        "presentable": false,
        "autogeneratePattern": "[a-z0-9]{15}",
        "pattern": "^[a-z0-9]+$",
        "min": 15,
        "max": 15
      },
      {
        "id": "text868538961",
        "name": "accountId",
        "type": "text",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text389321553",
        "name": "providerId",
        "type": "text",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text425186254",
        "name": "userId",
        "type": "relation",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false,
        "collectionId": "pbc_840314477",
        "cascadeDelete": true,
        "maxSelect": 1,
        "minSelect": 0
      },
      {
        "id": "text10626084",
        "name": "accessToken",
        "type": "text",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text124352508",
        "name": "refreshToken",
        "type": "text",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text833330724",
        "name": "idToken",
        "type": "text",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "date302477423",
        "name": "accessTokenExpiresAt",
        "type": "date",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "date71932499",
        "name": "refreshTokenExpiresAt",
        "type": "date",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text784627746",
        "name": "scope",
        "type": "text",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text435961926",
        "name": "password",
        "type": "text",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "date532764218",
        "name": "createdAt",
        "type": "date",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "date860588578",
        "name": "updatedAt",
        "type": "date",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "autodate278436192",
        "name": "created",
        "type": "autodate",
        "onCreate": true,
        "onUpdate": false,
        "required": false,
        "system": false,
        "presentable": false
      },
      {
        "id": "autodate165533863",
        "name": "updated",
        "type": "autodate",
        "onCreate": true,
        "onUpdate": true,
        "required": false,
        "system": false,
        "presentable": false
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "indexes": []
  },
  {
    "id": "pbc_782033164",
    "name": "ba_verification",
    "type": "base",
    "system": false,
    "fields": [
      {
        "id": "text743573168",
        "name": "id",
        "type": "text",
        "required": true,
        "primaryKey": true,
        "system": true,
        "presentable": false,
        "autogeneratePattern": "[a-z0-9]{15}",
        "pattern": "^[a-z0-9]+$",
        "min": 15,
        "max": 15
      },
      {
        "id": "text635478045",
        "name": "identifier",
        "type": "text",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text556851693",
        "name": "value",
        "type": "text",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "date658259095",
        "name": "expiresAt",
        "type": "date",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "date397512705",
        "name": "createdAt",
        "type": "date",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "date108975987",
        "name": "updatedAt",
        "type": "date",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "autodate595959651",
        "name": "created",
        "type": "autodate",
        "onCreate": true,
        "onUpdate": false,
        "required": false,
        "system": false,
        "presentable": false
      },
      {
        "id": "autodate627335326",
        "name": "updated",
        "type": "autodate",
        "onCreate": true,
        "onUpdate": true,
        "required": false,
        "system": false,
        "presentable": false
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "indexes": []
  },
  {
    "id": "pbc_739561494",
    "name": "ba_organization",
    "type": "base",
    "system": false,
    "fields": [
      {
        "id": "text766716120",
        "name": "id",
        "type": "text",
        "required": true,
        "primaryKey": true,
        "system": true,
        "presentable": false,
        "autogeneratePattern": "[a-z0-9]{15}",
        "pattern": "^[a-z0-9]+$",
        "min": 15,
        "max": 15
      },
      {
        "id": "text345111040",
        "name": "name",
        "type": "text",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text546469580",
        "name": "slug",
        "type": "text",
        "required": false,
        "unique": true,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text690375135",
        "name": "logo",
        "type": "text",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "date19504695",
        "name": "createdAt",
        "type": "date",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text794565140",
        "name": "metadata",
        "type": "text",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "autodate215343591",
        "name": "created",
        "type": "autodate",
        "onCreate": true,
        "onUpdate": false,
        "required": false,
        "system": false,
        "presentable": false
      },
      {
        "id": "autodate857076663",
        "name": "updated",
        "type": "autodate",
        "onCreate": true,
        "onUpdate": true,
        "required": false,
        "system": false,
        "presentable": false
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "indexes": []
  },
  {
    "id": "pbc_237068687",
    "name": "ba_member",
    "type": "base",
    "system": false,
    "fields": [
      {
        "id": "text427561462",
        "name": "id",
        "type": "text",
        "required": true,
        "primaryKey": true,
        "system": true,
        "presentable": false,
        "autogeneratePattern": "[a-z0-9]{15}",
        "pattern": "^[a-z0-9]+$",
        "min": 15,
        "max": 15
      },
      {
        "id": "text986819182",
        "name": "organizationId",
        "type": "relation",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false,
        "collectionId": "pbc_739561494",
        "cascadeDelete": true,
        "maxSelect": 1,
        "minSelect": 0
      },
      {
        "id": "text631234787",
        "name": "userId",
        "type": "relation",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false,
        "collectionId": "pbc_840314477",
        "cascadeDelete": true,
        "maxSelect": 1,
        "minSelect": 0
      },
      {
        "id": "text893335071",
        "name": "role",
        "type": "text",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "date748259668",
        "name": "createdAt",
        "type": "date",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "autodate669315211",
        "name": "created",
        "type": "autodate",
        "onCreate": true,
        "onUpdate": false,
        "required": false,
        "system": false,
        "presentable": false
      },
      {
        "id": "autodate188387053",
        "name": "updated",
        "type": "autodate",
        "onCreate": true,
        "onUpdate": true,
        "required": false,
        "system": false,
        "presentable": false
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "indexes": []
  },
  {
    "id": "pbc_86053203",
    "name": "ba_invitation",
    "type": "base",
    "system": false,
    "fields": [
      {
        "id": "text336193895",
        "name": "id",
        "type": "text",
        "required": true,
        "primaryKey": true,
        "system": true,
        "presentable": false,
        "autogeneratePattern": "[a-z0-9]{15}",
        "pattern": "^[a-z0-9]+$",
        "min": 15,
        "max": 15
      },
      {
        "id": "text582565897",
        "name": "organizationId",
        "type": "relation",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false,
        "collectionId": "pbc_739561494",
        "cascadeDelete": true,
        "maxSelect": 1,
        "minSelect": 0
      },
      {
        "id": "text927635095",
        "name": "email",
        "type": "text",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text502964135",
        "name": "role",
        "type": "text",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text218899051",
        "name": "status",
        "type": "text",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "date556887294",
        "name": "expiresAt",
        "type": "date",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text510446811",
        "name": "inviterId",
        "type": "relation",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false,
        "collectionId": "pbc_840314477",
        "cascadeDelete": true,
        "maxSelect": 1,
        "minSelect": 0
      },
      {
        "id": "autodate371466675",
        "name": "created",
        "type": "autodate",
        "onCreate": true,
        "onUpdate": false,
        "required": false,
        "system": false,
        "presentable": false
      },
      {
        "id": "autodate59743741",
        "name": "updated",
        "type": "autodate",
        "onCreate": true,
        "onUpdate": true,
        "required": false,
        "system": false,
        "presentable": false
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "indexes": []
  },
  {
    "id": "pbc_293334887",
    "name": "ba_apikey",
    "type": "base",
    "system": false,
    "fields": [
      {
        "id": "text746803037",
        "name": "id",
        "type": "text",
        "required": true,
        "primaryKey": true,
        "system": true,
        "presentable": false,
        "autogeneratePattern": "[a-z0-9]{15}",
        "pattern": "^[a-z0-9]+$",
        "min": 15,
        "max": 15
      },
      {
        "id": "text344424355",
        "name": "name",
        "type": "text",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text725576921",
        "name": "start",
        "type": "text",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text642005476",
        "name": "prefix",
        "type": "text",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text371515901",
        "name": "key",
        "type": "text",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text81910244",
        "name": "userId",
        "type": "relation",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false,
        "collectionId": "pbc_840314477",
        "cascadeDelete": true,
        "maxSelect": 1,
        "minSelect": 0
      },
      {
        "id": "number787162603",
        "name": "refillInterval",
        "type": "number",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "number293684314",
        "name": "refillAmount",
        "type": "number",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "date526399256",
        "name": "lastRefillAt",
        "type": "date",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "bool920265334",
        "name": "enabled",
        "type": "bool",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "bool863515101",
        "name": "rateLimitEnabled",
        "type": "bool",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "number822007405",
        "name": "rateLimitTimeWindow",
        "type": "number",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "number48336626",
        "name": "rateLimitMax",
        "type": "number",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "number832835083",
        "name": "requestCount",
        "type": "number",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "number575075899",
        "name": "remaining",
        "type": "number",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "date227263508",
        "name": "lastRequest",
        "type": "date",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "date412311166",
        "name": "expiresAt",
        "type": "date",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "date902054513",
        "name": "createdAt",
        "type": "date",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "date584050548",
        "name": "updatedAt",
        "type": "date",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text876553842",
        "name": "permissions",
        "type": "text",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text965341986",
        "name": "metadata",
        "type": "text",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "autodate748415787",
        "name": "created",
        "type": "autodate",
        "onCreate": true,
        "onUpdate": false,
        "required": false,
        "system": false,
        "presentable": false
      },
      {
        "id": "autodate401239893",
        "name": "updated",
        "type": "autodate",
        "onCreate": true,
        "onUpdate": true,
        "required": false,
        "system": false,
        "presentable": false
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "indexes": []
  }
].reverse();

  for (const def of collections) {
    try {
      const col = app.findCollectionByNameOrId(def.name);
      if (col) app.delete(col);
    } catch {}
  }
});