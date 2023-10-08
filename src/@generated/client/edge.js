
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
} = require('./runtime/edge')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.3.1
 * Query Engine version: 61e140623197a131c2a6189271ffee05a7aa9a59
 */
Prisma.prismaVersion = {
  client: "5.3.1",
  engine: "61e140623197a131c2a6189271ffee05a7aa9a59"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  username: 'username',
  email: 'email',
  password: 'password',
  name: 'name',
  role: 'role',
  is_u_18: 'is_u_18',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.Role = exports.$Enums.Role = {
  ADMIN: 'ADMIN',
  USER: 'USER',
  GUEST: 'GUEST'
};

exports.Prisma.ModelName = {
  User: 'User'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\Hatem\\Documents\\nestProj\\urban-arab\\src\\@generated\\client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../../.env",
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../../../prisma",
  "clientVersion": "5.3.1",
  "engineVersion": "61e140623197a131c2a6189271ffee05a7aa9a59",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Ly8gVGhpcyBpcyB5b3VyIFByaXNtYSBzY2hlbWEgZmlsZSwKLy8gbGVhcm4gbW9yZSBhYm91dCBpdCBpbiB0aGUgZG9jczogaHR0cHM6Ly9wcmlzLmx5L2QvcHJpc21hLXNjaGVtYQpnZW5lcmF0b3IgbmVzdGdyYXBocWwgewogIHByb3ZpZGVyICAgICAgICAgICAgICAgICAgICA9ICJub2RlIG5vZGVfbW9kdWxlcy9wcmlzbWEtbmVzdGpzLWdyYXBocWwiCiAgLy8gZm9yIHlhcm4gbW9ub3JlcG9zCiAgLy8gcHJvdmlkZXIgPSAicHJpc21hLW5lc3Rqcy1ncmFwaHFsIgogIG91dHB1dCAgICAgICAgICAgICAgICAgICAgICA9ICIuLi9zcmMvQGdlbmVyYXRlZC9wcmlzbWEtbmVzdGpzLWdyYXBocWwiCiAgZmllbGRzX1ZhbGlkYXRvcl9mcm9tICAgICAgID0gImNsYXNzLXZhbGlkYXRvciIKICBmaWVsZHNfVmFsaWRhdG9yX2lucHV0ICAgICAgPSB0cnVlCiAgdXNlSW5wdXRUeXBlX1doZXJlSW5wdXRfQUxMID0gIldoZXJlSW5wdXQiCn0KCmdlbmVyYXRvciBjbGllbnQgewogIHByb3ZpZGVyID0gInByaXNtYS1jbGllbnQtanMiCiAgb3V0cHV0ICAgPSAiLi4vc3JjL0BnZW5lcmF0ZWQvY2xpZW50Igp9CgpkYXRhc291cmNlIGRiIHsKICBwcm92aWRlciA9ICJwb3N0Z3Jlc3FsIgogIHVybCAgICAgID0gZW52KCJEQVRBQkFTRV9VUkwiKQp9CgplbnVtIFRhZyB7CiAgU0FGRQogIFVOU0FGRQp9CgplbnVtIFJlYXNvbiB7CiAgT0ZGRU5TSVZFCiAgVEFCT08KICBPVEhFUgp9CgplbnVtIFJvbGUgewogIEFETUlOCiAgVVNFUgogIEdVRVNUCn0KCi8vIG1vZGVsIENvdW50cnkgewovLyAgIGlkICAgICAgSW50ICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKLy8gICBuYW1lICAgIFN0cmluZyAgIEB1bmlxdWUKLy8gICByZWdpb25zIFJlZ2lvbltdCi8vIH0KCi8vIG1vZGVsIFJlZ2lvbiB7Ci8vICAgaWQgICAgICAgICAgSW50ICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKLy8gICBuYW1lICAgICAgICBTdHJpbmcgICBAdW5pcXVlCi8vICAgYWRkcmVzcyAgICAgU3RyaW5nPwovLyAgIHBvc3RhbF9jb2RlIEludD8KLy8gICB1c2VycyAgICAgICBVc2VyW10KLy8gICBDb3VudHJ5ICAgICBDb3VudHJ5PyBAcmVsYXRpb24oZmllbGRzOiBbY291bnRyeUlkXSwgcmVmZXJlbmNlczogW2lkXSkKLy8gICBjb3VudHJ5SWQgICBJbnQ/Ci8vIH0KCm1vZGVsIFVzZXIgewogIGlkICAgICAgICAgSW50ICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICAvLy8gQFZhbGlkYXRvci5NaW5MZW5ndGgoMykKICB1c2VybmFtZSAgIFN0cmluZyAgIEB1bmlxdWUKICAvLy8gQFZhbGlkYXRvci5Jc0VtYWlsKCkKICBlbWFpbCAgICAgIFN0cmluZyAgIEB1bmlxdWUKICBwYXNzd29yZCAgIFN0cmluZwogIG5hbWUgICAgICAgU3RyaW5nPwogIHJvbGUgICAgICAgUm9sZQogIGlzX3VfMTggICAgQm9vbGVhbiAgQGRlZmF1bHQodHJ1ZSkKICBjcmVhdGVkX2F0IERhdGVUaW1lIEBkZWZhdWx0KGRiZ2VuZXJhdGVkKCJOT1coKSArIGludGVydmFsICcxIHllYXInIikpCiAgdXBkYXRlZF9hdCBEYXRlVGltZSBAZGVmYXVsdChkYmdlbmVyYXRlZCgiTk9XKCkgKyBpbnRlcnZhbCAnMSB5ZWFyJyIpKQogIC8vIHBvc3RzICAgICAgUG9zdFtdCiAgLy8gUmVnaW9uICAgICBSZWdpb24/ICBAcmVsYXRpb24oZmllbGRzOiBbcmVnaW9uSWRdLCByZWZlcmVuY2VzOiBbaWRdKQogIC8vIHJlZ2lvbklkICAgSW50Pwp9CgovLyBtb2RlbCBQb3N0IHsKLy8gICBpZCAgICAgICAgICAgICBJbnQgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKLy8gICB0aXRsZSAgICAgICAgICBTdHJpbmcKLy8gICBjb250ZW50ICAgICAgICBTdHJpbmc/Ci8vICAgcHVibGlzaGVkICAgICAgQm9vbGVhbj8gIEBkZWZhdWx0KGZhbHNlKQovLyAgIGxpa2VzX2NvdW50ICAgIEludCAgICAgICBAZGVmYXVsdCgxKQovLyAgIGRpc2xpa2VzX2NvdW50IEludCAgICAgICBAZGVmYXVsdCgwKQovLyAgIGF1dGhvciAgICAgICAgIFVzZXIgICAgICBAcmVsYXRpb24oZmllbGRzOiBbYXV0aG9ySWRdLCByZWZlcmVuY2VzOiBbaWRdKQovLyAgIGF1dGhvcklkICAgICAgIEludAovLyAgIHRhZ3MgICAgICAgICAgIFRhZ1tdCi8vICAgaXNfdV8xOCAgICAgICAgQm9vbGVhbiAgIEBkZWZhdWx0KHRydWUpCi8vICAgY3JlYXRlZF9hdCAgICAgRGF0ZVRpbWUgIEBkZWZhdWx0KGRiZ2VuZXJhdGVkKCJOT1coKSArIGludGVydmFsICcxIHllYXInIikpCi8vICAgdXBkYXRlZF9hdCAgICAgRGF0ZVRpbWUgIEBkZWZhdWx0KGRiZ2VuZXJhdGVkKCJOT1coKSArIGludGVydmFsICcxIHllYXInIikpCi8vIGV4YW1wbGVzICAgICAgIEV4YW1wbGVbXQovLyBmbGFncyAgICAgICAgICBGbGFnW10KLy8gfQoKLy8gbW9kZWwgRXhhbXBsZSB7Ci8vICAgaWQgICAgICAgICBJbnQgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQovLyAgIGNvbnRlbnQgICAgU3RyaW5nCi8vICAgUG9zdCAgICAgICBQb3N0ICAgICBAcmVsYXRpb24oZmllbGRzOiBbcG9zdElkXSwgcmVmZXJlbmNlczogW2lkXSkKLy8gICBwb3N0SWQgICAgIEludAovLyAgIGNyZWF0ZWRfYXQgRGF0ZVRpbWUgQGRlZmF1bHQoZGJnZW5lcmF0ZWQoIk5PVygpICsgaW50ZXJ2YWwgJzEgeWVhciciKSkKLy8gICB1cGRhdGVkX2F0IERhdGVUaW1lIEBkZWZhdWx0KGRiZ2VuZXJhdGVkKCJOT1coKSArIGludGVydmFsICcxIHllYXInIikpCi8vIH0KCi8vIG1vZGVsIEZsYWcgewovLyAgIGlkICAgICAgICAgSW50ICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKLy8gICByZWFzb24gICAgIFJlYXNvbgovLyAgIFBvc3QgICAgICAgUG9zdD8gICAgQHJlbGF0aW9uKGZpZWxkczogW3Bvc3RJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCi8vICAgcG9zdElkICAgICBJbnQ/Ci8vICAgY3JlYXRlZF9hdCBEYXRlVGltZSBAZGVmYXVsdChkYmdlbmVyYXRlZCgiTk9XKCkgKyBpbnRlcnZhbCAnMSB5ZWFyJyIpKQovLyB9Cg==",
  "inlineSchemaHash": "291ef5ba33a87402c1941e498d7af2bb1f08ce629b3f3feb3874031c79d2c0e7",
  "noEngine": false
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"username\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"@Validator.MinLength(3)\"},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"@Validator.IsEmail()\"},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Role\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_u_18\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"NOW() + interval '1 year'\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"NOW() + interval '1 year'\"]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"Tag\":{\"values\":[{\"name\":\"SAFE\",\"dbName\":null},{\"name\":\"UNSAFE\",\"dbName\":null}],\"dbName\":null},\"Reason\":{\"values\":[{\"name\":\"OFFENSIVE\",\"dbName\":null},{\"name\":\"TABOO\",\"dbName\":null},{\"name\":\"OTHER\",\"dbName\":null}],\"dbName\":null},\"Role\":{\"values\":[{\"name\":\"ADMIN\",\"dbName\":null},{\"name\":\"USER\",\"dbName\":null},{\"name\":\"GUEST\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)


config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

