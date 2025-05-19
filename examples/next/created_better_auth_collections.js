/// <reference path="../pb_data/types.d.ts" />

/**
 * Auto-generated PocketBase migration – do NOT edit by hand.
 */

migrate((app) => {
  const collections = [
  {
    "id": "pbc_522630739",
    "name": "ba_user",
    "type": "base",
    "system": false,
    "fields": [
      {
        "id": "text138518441",
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
        "id": "text937121986",
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
        "id": "text16696188",
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
        "id": "bool468618346",
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
        "id": "text86339521",
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
        "id": "date700186753",
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
        "id": "date124517455",
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
        "id": "text429973693",
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
        "id": "text668060166",
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
        "id": "autodate848673237",
        "name": "created",
        "type": "autodate",
        "onCreate": true,
        "onUpdate": false,
        "required": false,
        "system": false,
        "presentable": false
      },
      {
        "id": "autodate328713196",
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
    "id": "pbc_939977046",
    "name": "ba_session",
    "type": "base",
    "system": false,
    "fields": [
      {
        "id": "text453443524",
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
        "id": "date719690989",
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
        "id": "text850937019",
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
        "id": "date596393105",
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
        "id": "date663102973",
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
        "id": "text113301774",
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
        "id": "text126581976",
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
        "id": "text272620495",
        "name": "userId",
        "type": "relation",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false,
        "collectionId": "pbc_522630739",
        "cascadeDelete": true,
        "maxSelect": 1,
        "minSelect": 0
      },
      {
        "id": "text661614394",
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
        "id": "text290603953",
        "name": "id",
        "type": "text",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "autodate30988799",
        "name": "created",
        "type": "autodate",
        "onCreate": true,
        "onUpdate": false,
        "required": false,
        "system": false,
        "presentable": false
      },
      {
        "id": "autodate64657016",
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
    "id": "pbc_603011123",
    "name": "ba_account",
    "type": "base",
    "system": false,
    "fields": [
      {
        "id": "text251001875",
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
        "id": "text894465530",
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
        "id": "text579092405",
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
        "id": "text89673089",
        "name": "userId",
        "type": "relation",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false,
        "collectionId": "pbc_522630739",
        "cascadeDelete": true,
        "maxSelect": 1,
        "minSelect": 0
      },
      {
        "id": "text928326420",
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
        "id": "text634340089",
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
        "id": "text923730568",
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
        "id": "date409468788",
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
        "id": "date610566746",
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
        "id": "text651831",
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
        "id": "text32258698",
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
        "id": "date697499004",
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
        "id": "date823039699",
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
        "id": "autodate780962068",
        "name": "created",
        "type": "autodate",
        "onCreate": true,
        "onUpdate": false,
        "required": false,
        "system": false,
        "presentable": false
      },
      {
        "id": "autodate185506966",
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
    "id": "pbc_466378941",
    "name": "ba_verification",
    "type": "base",
    "system": false,
    "fields": [
      {
        "id": "text676370057",
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
        "id": "text384728178",
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
        "id": "text161734330",
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
        "id": "date837717368",
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
        "id": "date578968455",
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
        "id": "date760120809",
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
        "id": "autodate678274033",
        "name": "created",
        "type": "autodate",
        "onCreate": true,
        "onUpdate": false,
        "required": false,
        "system": false,
        "presentable": false
      },
      {
        "id": "autodate614466064",
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
    "id": "pbc_748519697",
    "name": "ba_organization",
    "type": "base",
    "system": false,
    "fields": [
      {
        "id": "text893165329",
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
        "id": "text188753043",
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
        "id": "text850608354",
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
        "id": "text177290650",
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
        "id": "date844898721",
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
        "id": "text655062952",
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
        "id": "autodate716922972",
        "name": "created",
        "type": "autodate",
        "onCreate": true,
        "onUpdate": false,
        "required": false,
        "system": false,
        "presentable": false
      },
      {
        "id": "autodate741700849",
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
    "id": "pbc_687751945",
    "name": "ba_member",
    "type": "base",
    "system": false,
    "fields": [
      {
        "id": "text141316316",
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
        "id": "text462577693",
        "name": "organizationId",
        "type": "relation",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false,
        "collectionId": "pbc_748519697",
        "cascadeDelete": true,
        "maxSelect": 1,
        "minSelect": 0
      },
      {
        "id": "text650519246",
        "name": "userId",
        "type": "relation",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false,
        "collectionId": "pbc_522630739",
        "cascadeDelete": true,
        "maxSelect": 1,
        "minSelect": 0
      },
      {
        "id": "text317397893",
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
        "id": "date913742079",
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
        "id": "autodate140449238",
        "name": "created",
        "type": "autodate",
        "onCreate": true,
        "onUpdate": false,
        "required": false,
        "system": false,
        "presentable": false
      },
      {
        "id": "autodate432264523",
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
    "id": "pbc_957080480",
    "name": "ba_invitation",
    "type": "base",
    "system": false,
    "fields": [
      {
        "id": "text785201491",
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
        "id": "text567493702",
        "name": "organizationId",
        "type": "relation",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false,
        "collectionId": "pbc_748519697",
        "cascadeDelete": true,
        "maxSelect": 1,
        "minSelect": 0
      },
      {
        "id": "text830126112",
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
        "id": "text467608832",
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
        "id": "text71240745",
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
        "id": "date179257903",
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
        "id": "text110037939",
        "name": "inviterId",
        "type": "relation",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false,
        "collectionId": "pbc_522630739",
        "cascadeDelete": true,
        "maxSelect": 1,
        "minSelect": 0
      },
      {
        "id": "autodate6549380",
        "name": "created",
        "type": "autodate",
        "onCreate": true,
        "onUpdate": false,
        "required": false,
        "system": false,
        "presentable": false
      },
      {
        "id": "autodate785547367",
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
    "id": "pbc_194997126",
    "name": "ba_apikey",
    "type": "base",
    "system": false,
    "fields": [
      {
        "id": "text921273162",
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
        "id": "text649033012",
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
        "id": "text337532294",
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
        "id": "text588115382",
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
        "id": "text750095844",
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
        "id": "text722849480",
        "name": "userId",
        "type": "relation",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false,
        "collectionId": "pbc_522630739",
        "cascadeDelete": true,
        "maxSelect": 1,
        "minSelect": 0
      },
      {
        "id": "number530287980",
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
        "id": "number429189482",
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
        "id": "date279153189",
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
        "id": "bool438552302",
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
        "id": "bool629743169",
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
        "id": "number458253221",
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
        "id": "number437343923",
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
        "id": "number523689819",
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
        "id": "number153846360",
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
        "id": "date34717519",
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
        "id": "date908594820",
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
        "id": "date624065577",
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
        "id": "date85749195",
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
        "id": "text380475034",
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
        "id": "text436669243",
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
        "id": "autodate939085959",
        "name": "created",
        "type": "autodate",
        "onCreate": true,
        "onUpdate": false,
        "required": false,
        "system": false,
        "presentable": false
      },
      {
        "id": "autodate404611703",
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
    "id": "pbc_522630739",
    "name": "ba_user",
    "type": "base",
    "system": false,
    "fields": [
      {
        "id": "text138518441",
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
        "id": "text937121986",
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
        "id": "text16696188",
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
        "id": "bool468618346",
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
        "id": "text86339521",
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
        "id": "date700186753",
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
        "id": "date124517455",
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
        "id": "text429973693",
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
        "id": "text668060166",
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
        "id": "autodate848673237",
        "name": "created",
        "type": "autodate",
        "onCreate": true,
        "onUpdate": false,
        "required": false,
        "system": false,
        "presentable": false
      },
      {
        "id": "autodate328713196",
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
    "id": "pbc_939977046",
    "name": "ba_session",
    "type": "base",
    "system": false,
    "fields": [
      {
        "id": "text453443524",
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
        "id": "date719690989",
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
        "id": "text850937019",
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
        "id": "date596393105",
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
        "id": "date663102973",
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
        "id": "text113301774",
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
        "id": "text126581976",
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
        "id": "text272620495",
        "name": "userId",
        "type": "relation",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false,
        "collectionId": "pbc_522630739",
        "cascadeDelete": true,
        "maxSelect": 1,
        "minSelect": 0
      },
      {
        "id": "text661614394",
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
        "id": "text290603953",
        "name": "id",
        "type": "text",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "autodate30988799",
        "name": "created",
        "type": "autodate",
        "onCreate": true,
        "onUpdate": false,
        "required": false,
        "system": false,
        "presentable": false
      },
      {
        "id": "autodate64657016",
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
    "id": "pbc_603011123",
    "name": "ba_account",
    "type": "base",
    "system": false,
    "fields": [
      {
        "id": "text251001875",
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
        "id": "text894465530",
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
        "id": "text579092405",
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
        "id": "text89673089",
        "name": "userId",
        "type": "relation",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false,
        "collectionId": "pbc_522630739",
        "cascadeDelete": true,
        "maxSelect": 1,
        "minSelect": 0
      },
      {
        "id": "text928326420",
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
        "id": "text634340089",
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
        "id": "text923730568",
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
        "id": "date409468788",
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
        "id": "date610566746",
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
        "id": "text651831",
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
        "id": "text32258698",
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
        "id": "date697499004",
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
        "id": "date823039699",
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
        "id": "autodate780962068",
        "name": "created",
        "type": "autodate",
        "onCreate": true,
        "onUpdate": false,
        "required": false,
        "system": false,
        "presentable": false
      },
      {
        "id": "autodate185506966",
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
    "id": "pbc_466378941",
    "name": "ba_verification",
    "type": "base",
    "system": false,
    "fields": [
      {
        "id": "text676370057",
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
        "id": "text384728178",
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
        "id": "text161734330",
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
        "id": "date837717368",
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
        "id": "date578968455",
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
        "id": "date760120809",
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
        "id": "autodate678274033",
        "name": "created",
        "type": "autodate",
        "onCreate": true,
        "onUpdate": false,
        "required": false,
        "system": false,
        "presentable": false
      },
      {
        "id": "autodate614466064",
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
    "id": "pbc_748519697",
    "name": "ba_organization",
    "type": "base",
    "system": false,
    "fields": [
      {
        "id": "text893165329",
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
        "id": "text188753043",
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
        "id": "text850608354",
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
        "id": "text177290650",
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
        "id": "date844898721",
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
        "id": "text655062952",
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
        "id": "autodate716922972",
        "name": "created",
        "type": "autodate",
        "onCreate": true,
        "onUpdate": false,
        "required": false,
        "system": false,
        "presentable": false
      },
      {
        "id": "autodate741700849",
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
    "id": "pbc_687751945",
    "name": "ba_member",
    "type": "base",
    "system": false,
    "fields": [
      {
        "id": "text141316316",
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
        "id": "text462577693",
        "name": "organizationId",
        "type": "relation",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false,
        "collectionId": "pbc_748519697",
        "cascadeDelete": true,
        "maxSelect": 1,
        "minSelect": 0
      },
      {
        "id": "text650519246",
        "name": "userId",
        "type": "relation",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false,
        "collectionId": "pbc_522630739",
        "cascadeDelete": true,
        "maxSelect": 1,
        "minSelect": 0
      },
      {
        "id": "text317397893",
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
        "id": "date913742079",
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
        "id": "autodate140449238",
        "name": "created",
        "type": "autodate",
        "onCreate": true,
        "onUpdate": false,
        "required": false,
        "system": false,
        "presentable": false
      },
      {
        "id": "autodate432264523",
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
    "id": "pbc_957080480",
    "name": "ba_invitation",
    "type": "base",
    "system": false,
    "fields": [
      {
        "id": "text785201491",
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
        "id": "text567493702",
        "name": "organizationId",
        "type": "relation",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false,
        "collectionId": "pbc_748519697",
        "cascadeDelete": true,
        "maxSelect": 1,
        "minSelect": 0
      },
      {
        "id": "text830126112",
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
        "id": "text467608832",
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
        "id": "text71240745",
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
        "id": "date179257903",
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
        "id": "text110037939",
        "name": "inviterId",
        "type": "relation",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false,
        "collectionId": "pbc_522630739",
        "cascadeDelete": true,
        "maxSelect": 1,
        "minSelect": 0
      },
      {
        "id": "autodate6549380",
        "name": "created",
        "type": "autodate",
        "onCreate": true,
        "onUpdate": false,
        "required": false,
        "system": false,
        "presentable": false
      },
      {
        "id": "autodate785547367",
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
    "id": "pbc_194997126",
    "name": "ba_apikey",
    "type": "base",
    "system": false,
    "fields": [
      {
        "id": "text921273162",
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
        "id": "text649033012",
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
        "id": "text337532294",
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
        "id": "text588115382",
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
        "id": "text750095844",
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
        "id": "text722849480",
        "name": "userId",
        "type": "relation",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false,
        "collectionId": "pbc_522630739",
        "cascadeDelete": true,
        "maxSelect": 1,
        "minSelect": 0
      },
      {
        "id": "number530287980",
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
        "id": "number429189482",
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
        "id": "date279153189",
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
        "id": "bool438552302",
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
        "id": "bool629743169",
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
        "id": "number458253221",
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
        "id": "number437343923",
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
        "id": "number523689819",
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
        "id": "number153846360",
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
        "id": "date34717519",
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
        "id": "date908594820",
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
        "id": "date624065577",
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
        "id": "date85749195",
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
        "id": "text380475034",
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
        "id": "text436669243",
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
        "id": "autodate939085959",
        "name": "created",
        "type": "autodate",
        "onCreate": true,
        "onUpdate": false,
        "required": false,
        "system": false,
        "presentable": false
      },
      {
        "id": "autodate404611703",
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