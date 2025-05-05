
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model tb_cargos_admin
 * 
 */
export type tb_cargos_admin = $Result.DefaultSelection<Prisma.$tb_cargos_adminPayload>
/**
 * Model tb_categorias
 * 
 */
export type tb_categorias = $Result.DefaultSelection<Prisma.$tb_categoriasPayload>
/**
 * Model tb_contactos_emergencia
 * 
 */
export type tb_contactos_emergencia = $Result.DefaultSelection<Prisma.$tb_contactos_emergenciaPayload>
/**
 * Model tb_departamento
 * 
 */
export type tb_departamento = $Result.DefaultSelection<Prisma.$tb_departamentoPayload>
/**
 * Model tb_deportistas
 * 
 */
export type tb_deportistas = $Result.DefaultSelection<Prisma.$tb_deportistasPayload>
/**
 * Model tb_desercion_deportistas
 * 
 */
export type tb_desercion_deportistas = $Result.DefaultSelection<Prisma.$tb_desercion_deportistasPayload>
/**
 * Model tb_entrenadores
 * 
 */
export type tb_entrenadores = $Result.DefaultSelection<Prisma.$tb_entrenadoresPayload>
/**
 * Model tb_gestion_admin
 * 
 */
export type tb_gestion_admin = $Result.DefaultSelection<Prisma.$tb_gestion_adminPayload>
/**
 * Model tb_municipio
 * 
 */
export type tb_municipio = $Result.DefaultSelection<Prisma.$tb_municipioPayload>
/**
 * Model tb_pagos_deportistas
 * 
 */
export type tb_pagos_deportistas = $Result.DefaultSelection<Prisma.$tb_pagos_deportistasPayload>
/**
 * Model tb_personas_club
 * 
 */
export type tb_personas_club = $Result.DefaultSelection<Prisma.$tb_personas_clubPayload>
/**
 * Model tb_tipo_documento
 * 
 */
export type tb_tipo_documento = $Result.DefaultSelection<Prisma.$tb_tipo_documentoPayload>
/**
 * Model tb_tutores
 * 
 */
export type tb_tutores = $Result.DefaultSelection<Prisma.$tb_tutoresPayload>
/**
 * Model tb_usuarios
 * 
 */
export type tb_usuarios = $Result.DefaultSelection<Prisma.$tb_usuariosPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Tb_cargos_admins
 * const tb_cargos_admins = await prisma.tb_cargos_admin.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Tb_cargos_admins
   * const tb_cargos_admins = await prisma.tb_cargos_admin.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.tb_cargos_admin`: Exposes CRUD operations for the **tb_cargos_admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tb_cargos_admins
    * const tb_cargos_admins = await prisma.tb_cargos_admin.findMany()
    * ```
    */
  get tb_cargos_admin(): Prisma.tb_cargos_adminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tb_categorias`: Exposes CRUD operations for the **tb_categorias** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tb_categorias
    * const tb_categorias = await prisma.tb_categorias.findMany()
    * ```
    */
  get tb_categorias(): Prisma.tb_categoriasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tb_contactos_emergencia`: Exposes CRUD operations for the **tb_contactos_emergencia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tb_contactos_emergencias
    * const tb_contactos_emergencias = await prisma.tb_contactos_emergencia.findMany()
    * ```
    */
  get tb_contactos_emergencia(): Prisma.tb_contactos_emergenciaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tb_departamento`: Exposes CRUD operations for the **tb_departamento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tb_departamentos
    * const tb_departamentos = await prisma.tb_departamento.findMany()
    * ```
    */
  get tb_departamento(): Prisma.tb_departamentoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tb_deportistas`: Exposes CRUD operations for the **tb_deportistas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tb_deportistas
    * const tb_deportistas = await prisma.tb_deportistas.findMany()
    * ```
    */
  get tb_deportistas(): Prisma.tb_deportistasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tb_desercion_deportistas`: Exposes CRUD operations for the **tb_desercion_deportistas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tb_desercion_deportistas
    * const tb_desercion_deportistas = await prisma.tb_desercion_deportistas.findMany()
    * ```
    */
  get tb_desercion_deportistas(): Prisma.tb_desercion_deportistasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tb_entrenadores`: Exposes CRUD operations for the **tb_entrenadores** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tb_entrenadores
    * const tb_entrenadores = await prisma.tb_entrenadores.findMany()
    * ```
    */
  get tb_entrenadores(): Prisma.tb_entrenadoresDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tb_gestion_admin`: Exposes CRUD operations for the **tb_gestion_admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tb_gestion_admins
    * const tb_gestion_admins = await prisma.tb_gestion_admin.findMany()
    * ```
    */
  get tb_gestion_admin(): Prisma.tb_gestion_adminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tb_municipio`: Exposes CRUD operations for the **tb_municipio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tb_municipios
    * const tb_municipios = await prisma.tb_municipio.findMany()
    * ```
    */
  get tb_municipio(): Prisma.tb_municipioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tb_pagos_deportistas`: Exposes CRUD operations for the **tb_pagos_deportistas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tb_pagos_deportistas
    * const tb_pagos_deportistas = await prisma.tb_pagos_deportistas.findMany()
    * ```
    */
  get tb_pagos_deportistas(): Prisma.tb_pagos_deportistasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tb_personas_club`: Exposes CRUD operations for the **tb_personas_club** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tb_personas_clubs
    * const tb_personas_clubs = await prisma.tb_personas_club.findMany()
    * ```
    */
  get tb_personas_club(): Prisma.tb_personas_clubDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tb_tipo_documento`: Exposes CRUD operations for the **tb_tipo_documento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tb_tipo_documentos
    * const tb_tipo_documentos = await prisma.tb_tipo_documento.findMany()
    * ```
    */
  get tb_tipo_documento(): Prisma.tb_tipo_documentoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tb_tutores`: Exposes CRUD operations for the **tb_tutores** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tb_tutores
    * const tb_tutores = await prisma.tb_tutores.findMany()
    * ```
    */
  get tb_tutores(): Prisma.tb_tutoresDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tb_usuarios`: Exposes CRUD operations for the **tb_usuarios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tb_usuarios
    * const tb_usuarios = await prisma.tb_usuarios.findMany()
    * ```
    */
  get tb_usuarios(): Prisma.tb_usuariosDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    tb_cargos_admin: 'tb_cargos_admin',
    tb_categorias: 'tb_categorias',
    tb_contactos_emergencia: 'tb_contactos_emergencia',
    tb_departamento: 'tb_departamento',
    tb_deportistas: 'tb_deportistas',
    tb_desercion_deportistas: 'tb_desercion_deportistas',
    tb_entrenadores: 'tb_entrenadores',
    tb_gestion_admin: 'tb_gestion_admin',
    tb_municipio: 'tb_municipio',
    tb_pagos_deportistas: 'tb_pagos_deportistas',
    tb_personas_club: 'tb_personas_club',
    tb_tipo_documento: 'tb_tipo_documento',
    tb_tutores: 'tb_tutores',
    tb_usuarios: 'tb_usuarios'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "tb_cargos_admin" | "tb_categorias" | "tb_contactos_emergencia" | "tb_departamento" | "tb_deportistas" | "tb_desercion_deportistas" | "tb_entrenadores" | "tb_gestion_admin" | "tb_municipio" | "tb_pagos_deportistas" | "tb_personas_club" | "tb_tipo_documento" | "tb_tutores" | "tb_usuarios"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      tb_cargos_admin: {
        payload: Prisma.$tb_cargos_adminPayload<ExtArgs>
        fields: Prisma.tb_cargos_adminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tb_cargos_adminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_cargos_adminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tb_cargos_adminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_cargos_adminPayload>
          }
          findFirst: {
            args: Prisma.tb_cargos_adminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_cargos_adminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tb_cargos_adminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_cargos_adminPayload>
          }
          findMany: {
            args: Prisma.tb_cargos_adminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_cargos_adminPayload>[]
          }
          create: {
            args: Prisma.tb_cargos_adminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_cargos_adminPayload>
          }
          createMany: {
            args: Prisma.tb_cargos_adminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tb_cargos_adminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_cargos_adminPayload>
          }
          update: {
            args: Prisma.tb_cargos_adminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_cargos_adminPayload>
          }
          deleteMany: {
            args: Prisma.tb_cargos_adminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tb_cargos_adminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tb_cargos_adminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_cargos_adminPayload>
          }
          aggregate: {
            args: Prisma.Tb_cargos_adminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTb_cargos_admin>
          }
          groupBy: {
            args: Prisma.tb_cargos_adminGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tb_cargos_adminGroupByOutputType>[]
          }
          count: {
            args: Prisma.tb_cargos_adminCountArgs<ExtArgs>
            result: $Utils.Optional<Tb_cargos_adminCountAggregateOutputType> | number
          }
        }
      }
      tb_categorias: {
        payload: Prisma.$tb_categoriasPayload<ExtArgs>
        fields: Prisma.tb_categoriasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tb_categoriasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_categoriasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tb_categoriasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_categoriasPayload>
          }
          findFirst: {
            args: Prisma.tb_categoriasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_categoriasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tb_categoriasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_categoriasPayload>
          }
          findMany: {
            args: Prisma.tb_categoriasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_categoriasPayload>[]
          }
          create: {
            args: Prisma.tb_categoriasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_categoriasPayload>
          }
          createMany: {
            args: Prisma.tb_categoriasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tb_categoriasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_categoriasPayload>
          }
          update: {
            args: Prisma.tb_categoriasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_categoriasPayload>
          }
          deleteMany: {
            args: Prisma.tb_categoriasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tb_categoriasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tb_categoriasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_categoriasPayload>
          }
          aggregate: {
            args: Prisma.Tb_categoriasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTb_categorias>
          }
          groupBy: {
            args: Prisma.tb_categoriasGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tb_categoriasGroupByOutputType>[]
          }
          count: {
            args: Prisma.tb_categoriasCountArgs<ExtArgs>
            result: $Utils.Optional<Tb_categoriasCountAggregateOutputType> | number
          }
        }
      }
      tb_contactos_emergencia: {
        payload: Prisma.$tb_contactos_emergenciaPayload<ExtArgs>
        fields: Prisma.tb_contactos_emergenciaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tb_contactos_emergenciaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_contactos_emergenciaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tb_contactos_emergenciaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_contactos_emergenciaPayload>
          }
          findFirst: {
            args: Prisma.tb_contactos_emergenciaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_contactos_emergenciaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tb_contactos_emergenciaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_contactos_emergenciaPayload>
          }
          findMany: {
            args: Prisma.tb_contactos_emergenciaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_contactos_emergenciaPayload>[]
          }
          create: {
            args: Prisma.tb_contactos_emergenciaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_contactos_emergenciaPayload>
          }
          createMany: {
            args: Prisma.tb_contactos_emergenciaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tb_contactos_emergenciaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_contactos_emergenciaPayload>
          }
          update: {
            args: Prisma.tb_contactos_emergenciaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_contactos_emergenciaPayload>
          }
          deleteMany: {
            args: Prisma.tb_contactos_emergenciaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tb_contactos_emergenciaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tb_contactos_emergenciaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_contactos_emergenciaPayload>
          }
          aggregate: {
            args: Prisma.Tb_contactos_emergenciaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTb_contactos_emergencia>
          }
          groupBy: {
            args: Prisma.tb_contactos_emergenciaGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tb_contactos_emergenciaGroupByOutputType>[]
          }
          count: {
            args: Prisma.tb_contactos_emergenciaCountArgs<ExtArgs>
            result: $Utils.Optional<Tb_contactos_emergenciaCountAggregateOutputType> | number
          }
        }
      }
      tb_departamento: {
        payload: Prisma.$tb_departamentoPayload<ExtArgs>
        fields: Prisma.tb_departamentoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tb_departamentoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_departamentoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tb_departamentoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_departamentoPayload>
          }
          findFirst: {
            args: Prisma.tb_departamentoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_departamentoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tb_departamentoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_departamentoPayload>
          }
          findMany: {
            args: Prisma.tb_departamentoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_departamentoPayload>[]
          }
          create: {
            args: Prisma.tb_departamentoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_departamentoPayload>
          }
          createMany: {
            args: Prisma.tb_departamentoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tb_departamentoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_departamentoPayload>
          }
          update: {
            args: Prisma.tb_departamentoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_departamentoPayload>
          }
          deleteMany: {
            args: Prisma.tb_departamentoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tb_departamentoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tb_departamentoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_departamentoPayload>
          }
          aggregate: {
            args: Prisma.Tb_departamentoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTb_departamento>
          }
          groupBy: {
            args: Prisma.tb_departamentoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tb_departamentoGroupByOutputType>[]
          }
          count: {
            args: Prisma.tb_departamentoCountArgs<ExtArgs>
            result: $Utils.Optional<Tb_departamentoCountAggregateOutputType> | number
          }
        }
      }
      tb_deportistas: {
        payload: Prisma.$tb_deportistasPayload<ExtArgs>
        fields: Prisma.tb_deportistasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tb_deportistasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_deportistasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tb_deportistasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_deportistasPayload>
          }
          findFirst: {
            args: Prisma.tb_deportistasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_deportistasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tb_deportistasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_deportistasPayload>
          }
          findMany: {
            args: Prisma.tb_deportistasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_deportistasPayload>[]
          }
          create: {
            args: Prisma.tb_deportistasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_deportistasPayload>
          }
          createMany: {
            args: Prisma.tb_deportistasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tb_deportistasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_deportistasPayload>
          }
          update: {
            args: Prisma.tb_deportistasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_deportistasPayload>
          }
          deleteMany: {
            args: Prisma.tb_deportistasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tb_deportistasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tb_deportistasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_deportistasPayload>
          }
          aggregate: {
            args: Prisma.Tb_deportistasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTb_deportistas>
          }
          groupBy: {
            args: Prisma.tb_deportistasGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tb_deportistasGroupByOutputType>[]
          }
          count: {
            args: Prisma.tb_deportistasCountArgs<ExtArgs>
            result: $Utils.Optional<Tb_deportistasCountAggregateOutputType> | number
          }
        }
      }
      tb_desercion_deportistas: {
        payload: Prisma.$tb_desercion_deportistasPayload<ExtArgs>
        fields: Prisma.tb_desercion_deportistasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tb_desercion_deportistasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_desercion_deportistasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tb_desercion_deportistasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_desercion_deportistasPayload>
          }
          findFirst: {
            args: Prisma.tb_desercion_deportistasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_desercion_deportistasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tb_desercion_deportistasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_desercion_deportistasPayload>
          }
          findMany: {
            args: Prisma.tb_desercion_deportistasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_desercion_deportistasPayload>[]
          }
          create: {
            args: Prisma.tb_desercion_deportistasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_desercion_deportistasPayload>
          }
          createMany: {
            args: Prisma.tb_desercion_deportistasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tb_desercion_deportistasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_desercion_deportistasPayload>
          }
          update: {
            args: Prisma.tb_desercion_deportistasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_desercion_deportistasPayload>
          }
          deleteMany: {
            args: Prisma.tb_desercion_deportistasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tb_desercion_deportistasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tb_desercion_deportistasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_desercion_deportistasPayload>
          }
          aggregate: {
            args: Prisma.Tb_desercion_deportistasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTb_desercion_deportistas>
          }
          groupBy: {
            args: Prisma.tb_desercion_deportistasGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tb_desercion_deportistasGroupByOutputType>[]
          }
          count: {
            args: Prisma.tb_desercion_deportistasCountArgs<ExtArgs>
            result: $Utils.Optional<Tb_desercion_deportistasCountAggregateOutputType> | number
          }
        }
      }
      tb_entrenadores: {
        payload: Prisma.$tb_entrenadoresPayload<ExtArgs>
        fields: Prisma.tb_entrenadoresFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tb_entrenadoresFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_entrenadoresPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tb_entrenadoresFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_entrenadoresPayload>
          }
          findFirst: {
            args: Prisma.tb_entrenadoresFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_entrenadoresPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tb_entrenadoresFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_entrenadoresPayload>
          }
          findMany: {
            args: Prisma.tb_entrenadoresFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_entrenadoresPayload>[]
          }
          create: {
            args: Prisma.tb_entrenadoresCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_entrenadoresPayload>
          }
          createMany: {
            args: Prisma.tb_entrenadoresCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tb_entrenadoresDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_entrenadoresPayload>
          }
          update: {
            args: Prisma.tb_entrenadoresUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_entrenadoresPayload>
          }
          deleteMany: {
            args: Prisma.tb_entrenadoresDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tb_entrenadoresUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tb_entrenadoresUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_entrenadoresPayload>
          }
          aggregate: {
            args: Prisma.Tb_entrenadoresAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTb_entrenadores>
          }
          groupBy: {
            args: Prisma.tb_entrenadoresGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tb_entrenadoresGroupByOutputType>[]
          }
          count: {
            args: Prisma.tb_entrenadoresCountArgs<ExtArgs>
            result: $Utils.Optional<Tb_entrenadoresCountAggregateOutputType> | number
          }
        }
      }
      tb_gestion_admin: {
        payload: Prisma.$tb_gestion_adminPayload<ExtArgs>
        fields: Prisma.tb_gestion_adminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tb_gestion_adminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_gestion_adminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tb_gestion_adminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_gestion_adminPayload>
          }
          findFirst: {
            args: Prisma.tb_gestion_adminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_gestion_adminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tb_gestion_adminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_gestion_adminPayload>
          }
          findMany: {
            args: Prisma.tb_gestion_adminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_gestion_adminPayload>[]
          }
          create: {
            args: Prisma.tb_gestion_adminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_gestion_adminPayload>
          }
          createMany: {
            args: Prisma.tb_gestion_adminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tb_gestion_adminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_gestion_adminPayload>
          }
          update: {
            args: Prisma.tb_gestion_adminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_gestion_adminPayload>
          }
          deleteMany: {
            args: Prisma.tb_gestion_adminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tb_gestion_adminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tb_gestion_adminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_gestion_adminPayload>
          }
          aggregate: {
            args: Prisma.Tb_gestion_adminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTb_gestion_admin>
          }
          groupBy: {
            args: Prisma.tb_gestion_adminGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tb_gestion_adminGroupByOutputType>[]
          }
          count: {
            args: Prisma.tb_gestion_adminCountArgs<ExtArgs>
            result: $Utils.Optional<Tb_gestion_adminCountAggregateOutputType> | number
          }
        }
      }
      tb_municipio: {
        payload: Prisma.$tb_municipioPayload<ExtArgs>
        fields: Prisma.tb_municipioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tb_municipioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_municipioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tb_municipioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_municipioPayload>
          }
          findFirst: {
            args: Prisma.tb_municipioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_municipioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tb_municipioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_municipioPayload>
          }
          findMany: {
            args: Prisma.tb_municipioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_municipioPayload>[]
          }
          create: {
            args: Prisma.tb_municipioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_municipioPayload>
          }
          createMany: {
            args: Prisma.tb_municipioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tb_municipioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_municipioPayload>
          }
          update: {
            args: Prisma.tb_municipioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_municipioPayload>
          }
          deleteMany: {
            args: Prisma.tb_municipioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tb_municipioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tb_municipioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_municipioPayload>
          }
          aggregate: {
            args: Prisma.Tb_municipioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTb_municipio>
          }
          groupBy: {
            args: Prisma.tb_municipioGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tb_municipioGroupByOutputType>[]
          }
          count: {
            args: Prisma.tb_municipioCountArgs<ExtArgs>
            result: $Utils.Optional<Tb_municipioCountAggregateOutputType> | number
          }
        }
      }
      tb_pagos_deportistas: {
        payload: Prisma.$tb_pagos_deportistasPayload<ExtArgs>
        fields: Prisma.tb_pagos_deportistasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tb_pagos_deportistasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_pagos_deportistasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tb_pagos_deportistasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_pagos_deportistasPayload>
          }
          findFirst: {
            args: Prisma.tb_pagos_deportistasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_pagos_deportistasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tb_pagos_deportistasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_pagos_deportistasPayload>
          }
          findMany: {
            args: Prisma.tb_pagos_deportistasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_pagos_deportistasPayload>[]
          }
          create: {
            args: Prisma.tb_pagos_deportistasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_pagos_deportistasPayload>
          }
          createMany: {
            args: Prisma.tb_pagos_deportistasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tb_pagos_deportistasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_pagos_deportistasPayload>
          }
          update: {
            args: Prisma.tb_pagos_deportistasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_pagos_deportistasPayload>
          }
          deleteMany: {
            args: Prisma.tb_pagos_deportistasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tb_pagos_deportistasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tb_pagos_deportistasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_pagos_deportistasPayload>
          }
          aggregate: {
            args: Prisma.Tb_pagos_deportistasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTb_pagos_deportistas>
          }
          groupBy: {
            args: Prisma.tb_pagos_deportistasGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tb_pagos_deportistasGroupByOutputType>[]
          }
          count: {
            args: Prisma.tb_pagos_deportistasCountArgs<ExtArgs>
            result: $Utils.Optional<Tb_pagos_deportistasCountAggregateOutputType> | number
          }
        }
      }
      tb_personas_club: {
        payload: Prisma.$tb_personas_clubPayload<ExtArgs>
        fields: Prisma.tb_personas_clubFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tb_personas_clubFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_personas_clubPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tb_personas_clubFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_personas_clubPayload>
          }
          findFirst: {
            args: Prisma.tb_personas_clubFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_personas_clubPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tb_personas_clubFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_personas_clubPayload>
          }
          findMany: {
            args: Prisma.tb_personas_clubFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_personas_clubPayload>[]
          }
          create: {
            args: Prisma.tb_personas_clubCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_personas_clubPayload>
          }
          createMany: {
            args: Prisma.tb_personas_clubCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tb_personas_clubDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_personas_clubPayload>
          }
          update: {
            args: Prisma.tb_personas_clubUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_personas_clubPayload>
          }
          deleteMany: {
            args: Prisma.tb_personas_clubDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tb_personas_clubUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tb_personas_clubUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_personas_clubPayload>
          }
          aggregate: {
            args: Prisma.Tb_personas_clubAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTb_personas_club>
          }
          groupBy: {
            args: Prisma.tb_personas_clubGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tb_personas_clubGroupByOutputType>[]
          }
          count: {
            args: Prisma.tb_personas_clubCountArgs<ExtArgs>
            result: $Utils.Optional<Tb_personas_clubCountAggregateOutputType> | number
          }
        }
      }
      tb_tipo_documento: {
        payload: Prisma.$tb_tipo_documentoPayload<ExtArgs>
        fields: Prisma.tb_tipo_documentoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tb_tipo_documentoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_tipo_documentoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tb_tipo_documentoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_tipo_documentoPayload>
          }
          findFirst: {
            args: Prisma.tb_tipo_documentoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_tipo_documentoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tb_tipo_documentoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_tipo_documentoPayload>
          }
          findMany: {
            args: Prisma.tb_tipo_documentoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_tipo_documentoPayload>[]
          }
          create: {
            args: Prisma.tb_tipo_documentoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_tipo_documentoPayload>
          }
          createMany: {
            args: Prisma.tb_tipo_documentoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tb_tipo_documentoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_tipo_documentoPayload>
          }
          update: {
            args: Prisma.tb_tipo_documentoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_tipo_documentoPayload>
          }
          deleteMany: {
            args: Prisma.tb_tipo_documentoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tb_tipo_documentoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tb_tipo_documentoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_tipo_documentoPayload>
          }
          aggregate: {
            args: Prisma.Tb_tipo_documentoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTb_tipo_documento>
          }
          groupBy: {
            args: Prisma.tb_tipo_documentoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tb_tipo_documentoGroupByOutputType>[]
          }
          count: {
            args: Prisma.tb_tipo_documentoCountArgs<ExtArgs>
            result: $Utils.Optional<Tb_tipo_documentoCountAggregateOutputType> | number
          }
        }
      }
      tb_tutores: {
        payload: Prisma.$tb_tutoresPayload<ExtArgs>
        fields: Prisma.tb_tutoresFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tb_tutoresFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_tutoresPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tb_tutoresFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_tutoresPayload>
          }
          findFirst: {
            args: Prisma.tb_tutoresFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_tutoresPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tb_tutoresFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_tutoresPayload>
          }
          findMany: {
            args: Prisma.tb_tutoresFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_tutoresPayload>[]
          }
          create: {
            args: Prisma.tb_tutoresCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_tutoresPayload>
          }
          createMany: {
            args: Prisma.tb_tutoresCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tb_tutoresDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_tutoresPayload>
          }
          update: {
            args: Prisma.tb_tutoresUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_tutoresPayload>
          }
          deleteMany: {
            args: Prisma.tb_tutoresDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tb_tutoresUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tb_tutoresUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_tutoresPayload>
          }
          aggregate: {
            args: Prisma.Tb_tutoresAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTb_tutores>
          }
          groupBy: {
            args: Prisma.tb_tutoresGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tb_tutoresGroupByOutputType>[]
          }
          count: {
            args: Prisma.tb_tutoresCountArgs<ExtArgs>
            result: $Utils.Optional<Tb_tutoresCountAggregateOutputType> | number
          }
        }
      }
      tb_usuarios: {
        payload: Prisma.$tb_usuariosPayload<ExtArgs>
        fields: Prisma.tb_usuariosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tb_usuariosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_usuariosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tb_usuariosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_usuariosPayload>
          }
          findFirst: {
            args: Prisma.tb_usuariosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_usuariosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tb_usuariosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_usuariosPayload>
          }
          findMany: {
            args: Prisma.tb_usuariosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_usuariosPayload>[]
          }
          create: {
            args: Prisma.tb_usuariosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_usuariosPayload>
          }
          createMany: {
            args: Prisma.tb_usuariosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tb_usuariosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_usuariosPayload>
          }
          update: {
            args: Prisma.tb_usuariosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_usuariosPayload>
          }
          deleteMany: {
            args: Prisma.tb_usuariosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tb_usuariosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tb_usuariosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_usuariosPayload>
          }
          aggregate: {
            args: Prisma.Tb_usuariosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTb_usuarios>
          }
          groupBy: {
            args: Prisma.tb_usuariosGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tb_usuariosGroupByOutputType>[]
          }
          count: {
            args: Prisma.tb_usuariosCountArgs<ExtArgs>
            result: $Utils.Optional<Tb_usuariosCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    tb_cargos_admin?: tb_cargos_adminOmit
    tb_categorias?: tb_categoriasOmit
    tb_contactos_emergencia?: tb_contactos_emergenciaOmit
    tb_departamento?: tb_departamentoOmit
    tb_deportistas?: tb_deportistasOmit
    tb_desercion_deportistas?: tb_desercion_deportistasOmit
    tb_entrenadores?: tb_entrenadoresOmit
    tb_gestion_admin?: tb_gestion_adminOmit
    tb_municipio?: tb_municipioOmit
    tb_pagos_deportistas?: tb_pagos_deportistasOmit
    tb_personas_club?: tb_personas_clubOmit
    tb_tipo_documento?: tb_tipo_documentoOmit
    tb_tutores?: tb_tutoresOmit
    tb_usuarios?: tb_usuariosOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model tb_cargos_admin
   */

  export type AggregateTb_cargos_admin = {
    _count: Tb_cargos_adminCountAggregateOutputType | null
    _avg: Tb_cargos_adminAvgAggregateOutputType | null
    _sum: Tb_cargos_adminSumAggregateOutputType | null
    _min: Tb_cargos_adminMinAggregateOutputType | null
    _max: Tb_cargos_adminMaxAggregateOutputType | null
  }

  export type Tb_cargos_adminAvgAggregateOutputType = {
    id: number | null
  }

  export type Tb_cargos_adminSumAggregateOutputType = {
    id: number | null
  }

  export type Tb_cargos_adminMinAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type Tb_cargos_adminMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type Tb_cargos_adminCountAggregateOutputType = {
    id: number
    nombre: number
    _all: number
  }


  export type Tb_cargos_adminAvgAggregateInputType = {
    id?: true
  }

  export type Tb_cargos_adminSumAggregateInputType = {
    id?: true
  }

  export type Tb_cargos_adminMinAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type Tb_cargos_adminMaxAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type Tb_cargos_adminCountAggregateInputType = {
    id?: true
    nombre?: true
    _all?: true
  }

  export type Tb_cargos_adminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_cargos_admin to aggregate.
     */
    where?: tb_cargos_adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_cargos_admins to fetch.
     */
    orderBy?: tb_cargos_adminOrderByWithRelationInput | tb_cargos_adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tb_cargos_adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_cargos_admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_cargos_admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tb_cargos_admins
    **/
    _count?: true | Tb_cargos_adminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tb_cargos_adminAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tb_cargos_adminSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tb_cargos_adminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tb_cargos_adminMaxAggregateInputType
  }

  export type GetTb_cargos_adminAggregateType<T extends Tb_cargos_adminAggregateArgs> = {
        [P in keyof T & keyof AggregateTb_cargos_admin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTb_cargos_admin[P]>
      : GetScalarType<T[P], AggregateTb_cargos_admin[P]>
  }




  export type tb_cargos_adminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tb_cargos_adminWhereInput
    orderBy?: tb_cargos_adminOrderByWithAggregationInput | tb_cargos_adminOrderByWithAggregationInput[]
    by: Tb_cargos_adminScalarFieldEnum[] | Tb_cargos_adminScalarFieldEnum
    having?: tb_cargos_adminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tb_cargos_adminCountAggregateInputType | true
    _avg?: Tb_cargos_adminAvgAggregateInputType
    _sum?: Tb_cargos_adminSumAggregateInputType
    _min?: Tb_cargos_adminMinAggregateInputType
    _max?: Tb_cargos_adminMaxAggregateInputType
  }

  export type Tb_cargos_adminGroupByOutputType = {
    id: number
    nombre: string | null
    _count: Tb_cargos_adminCountAggregateOutputType | null
    _avg: Tb_cargos_adminAvgAggregateOutputType | null
    _sum: Tb_cargos_adminSumAggregateOutputType | null
    _min: Tb_cargos_adminMinAggregateOutputType | null
    _max: Tb_cargos_adminMaxAggregateOutputType | null
  }

  type GetTb_cargos_adminGroupByPayload<T extends tb_cargos_adminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tb_cargos_adminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tb_cargos_adminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tb_cargos_adminGroupByOutputType[P]>
            : GetScalarType<T[P], Tb_cargos_adminGroupByOutputType[P]>
        }
      >
    >


  export type tb_cargos_adminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["tb_cargos_admin"]>



  export type tb_cargos_adminSelectScalar = {
    id?: boolean
    nombre?: boolean
  }

  export type tb_cargos_adminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre", ExtArgs["result"]["tb_cargos_admin"]>

  export type $tb_cargos_adminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tb_cargos_admin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string | null
    }, ExtArgs["result"]["tb_cargos_admin"]>
    composites: {}
  }

  type tb_cargos_adminGetPayload<S extends boolean | null | undefined | tb_cargos_adminDefaultArgs> = $Result.GetResult<Prisma.$tb_cargos_adminPayload, S>

  type tb_cargos_adminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tb_cargos_adminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tb_cargos_adminCountAggregateInputType | true
    }

  export interface tb_cargos_adminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tb_cargos_admin'], meta: { name: 'tb_cargos_admin' } }
    /**
     * Find zero or one Tb_cargos_admin that matches the filter.
     * @param {tb_cargos_adminFindUniqueArgs} args - Arguments to find a Tb_cargos_admin
     * @example
     * // Get one Tb_cargos_admin
     * const tb_cargos_admin = await prisma.tb_cargos_admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tb_cargos_adminFindUniqueArgs>(args: SelectSubset<T, tb_cargos_adminFindUniqueArgs<ExtArgs>>): Prisma__tb_cargos_adminClient<$Result.GetResult<Prisma.$tb_cargos_adminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tb_cargos_admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tb_cargos_adminFindUniqueOrThrowArgs} args - Arguments to find a Tb_cargos_admin
     * @example
     * // Get one Tb_cargos_admin
     * const tb_cargos_admin = await prisma.tb_cargos_admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tb_cargos_adminFindUniqueOrThrowArgs>(args: SelectSubset<T, tb_cargos_adminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tb_cargos_adminClient<$Result.GetResult<Prisma.$tb_cargos_adminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tb_cargos_admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_cargos_adminFindFirstArgs} args - Arguments to find a Tb_cargos_admin
     * @example
     * // Get one Tb_cargos_admin
     * const tb_cargos_admin = await prisma.tb_cargos_admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tb_cargos_adminFindFirstArgs>(args?: SelectSubset<T, tb_cargos_adminFindFirstArgs<ExtArgs>>): Prisma__tb_cargos_adminClient<$Result.GetResult<Prisma.$tb_cargos_adminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tb_cargos_admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_cargos_adminFindFirstOrThrowArgs} args - Arguments to find a Tb_cargos_admin
     * @example
     * // Get one Tb_cargos_admin
     * const tb_cargos_admin = await prisma.tb_cargos_admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tb_cargos_adminFindFirstOrThrowArgs>(args?: SelectSubset<T, tb_cargos_adminFindFirstOrThrowArgs<ExtArgs>>): Prisma__tb_cargos_adminClient<$Result.GetResult<Prisma.$tb_cargos_adminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tb_cargos_admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_cargos_adminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tb_cargos_admins
     * const tb_cargos_admins = await prisma.tb_cargos_admin.findMany()
     * 
     * // Get first 10 Tb_cargos_admins
     * const tb_cargos_admins = await prisma.tb_cargos_admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tb_cargos_adminWithIdOnly = await prisma.tb_cargos_admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tb_cargos_adminFindManyArgs>(args?: SelectSubset<T, tb_cargos_adminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_cargos_adminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tb_cargos_admin.
     * @param {tb_cargos_adminCreateArgs} args - Arguments to create a Tb_cargos_admin.
     * @example
     * // Create one Tb_cargos_admin
     * const Tb_cargos_admin = await prisma.tb_cargos_admin.create({
     *   data: {
     *     // ... data to create a Tb_cargos_admin
     *   }
     * })
     * 
     */
    create<T extends tb_cargos_adminCreateArgs>(args: SelectSubset<T, tb_cargos_adminCreateArgs<ExtArgs>>): Prisma__tb_cargos_adminClient<$Result.GetResult<Prisma.$tb_cargos_adminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tb_cargos_admins.
     * @param {tb_cargos_adminCreateManyArgs} args - Arguments to create many Tb_cargos_admins.
     * @example
     * // Create many Tb_cargos_admins
     * const tb_cargos_admin = await prisma.tb_cargos_admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tb_cargos_adminCreateManyArgs>(args?: SelectSubset<T, tb_cargos_adminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tb_cargos_admin.
     * @param {tb_cargos_adminDeleteArgs} args - Arguments to delete one Tb_cargos_admin.
     * @example
     * // Delete one Tb_cargos_admin
     * const Tb_cargos_admin = await prisma.tb_cargos_admin.delete({
     *   where: {
     *     // ... filter to delete one Tb_cargos_admin
     *   }
     * })
     * 
     */
    delete<T extends tb_cargos_adminDeleteArgs>(args: SelectSubset<T, tb_cargos_adminDeleteArgs<ExtArgs>>): Prisma__tb_cargos_adminClient<$Result.GetResult<Prisma.$tb_cargos_adminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tb_cargos_admin.
     * @param {tb_cargos_adminUpdateArgs} args - Arguments to update one Tb_cargos_admin.
     * @example
     * // Update one Tb_cargos_admin
     * const tb_cargos_admin = await prisma.tb_cargos_admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tb_cargos_adminUpdateArgs>(args: SelectSubset<T, tb_cargos_adminUpdateArgs<ExtArgs>>): Prisma__tb_cargos_adminClient<$Result.GetResult<Prisma.$tb_cargos_adminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tb_cargos_admins.
     * @param {tb_cargos_adminDeleteManyArgs} args - Arguments to filter Tb_cargos_admins to delete.
     * @example
     * // Delete a few Tb_cargos_admins
     * const { count } = await prisma.tb_cargos_admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tb_cargos_adminDeleteManyArgs>(args?: SelectSubset<T, tb_cargos_adminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tb_cargos_admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_cargos_adminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tb_cargos_admins
     * const tb_cargos_admin = await prisma.tb_cargos_admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tb_cargos_adminUpdateManyArgs>(args: SelectSubset<T, tb_cargos_adminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tb_cargos_admin.
     * @param {tb_cargos_adminUpsertArgs} args - Arguments to update or create a Tb_cargos_admin.
     * @example
     * // Update or create a Tb_cargos_admin
     * const tb_cargos_admin = await prisma.tb_cargos_admin.upsert({
     *   create: {
     *     // ... data to create a Tb_cargos_admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tb_cargos_admin we want to update
     *   }
     * })
     */
    upsert<T extends tb_cargos_adminUpsertArgs>(args: SelectSubset<T, tb_cargos_adminUpsertArgs<ExtArgs>>): Prisma__tb_cargos_adminClient<$Result.GetResult<Prisma.$tb_cargos_adminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tb_cargos_admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_cargos_adminCountArgs} args - Arguments to filter Tb_cargos_admins to count.
     * @example
     * // Count the number of Tb_cargos_admins
     * const count = await prisma.tb_cargos_admin.count({
     *   where: {
     *     // ... the filter for the Tb_cargos_admins we want to count
     *   }
     * })
    **/
    count<T extends tb_cargos_adminCountArgs>(
      args?: Subset<T, tb_cargos_adminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tb_cargos_adminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tb_cargos_admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tb_cargos_adminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Tb_cargos_adminAggregateArgs>(args: Subset<T, Tb_cargos_adminAggregateArgs>): Prisma.PrismaPromise<GetTb_cargos_adminAggregateType<T>>

    /**
     * Group by Tb_cargos_admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_cargos_adminGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tb_cargos_adminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tb_cargos_adminGroupByArgs['orderBy'] }
        : { orderBy?: tb_cargos_adminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tb_cargos_adminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTb_cargos_adminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tb_cargos_admin model
   */
  readonly fields: tb_cargos_adminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tb_cargos_admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tb_cargos_adminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tb_cargos_admin model
   */
  interface tb_cargos_adminFieldRefs {
    readonly id: FieldRef<"tb_cargos_admin", 'Int'>
    readonly nombre: FieldRef<"tb_cargos_admin", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tb_cargos_admin findUnique
   */
  export type tb_cargos_adminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_cargos_admin
     */
    select?: tb_cargos_adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_cargos_admin
     */
    omit?: tb_cargos_adminOmit<ExtArgs> | null
    /**
     * Filter, which tb_cargos_admin to fetch.
     */
    where: tb_cargos_adminWhereUniqueInput
  }

  /**
   * tb_cargos_admin findUniqueOrThrow
   */
  export type tb_cargos_adminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_cargos_admin
     */
    select?: tb_cargos_adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_cargos_admin
     */
    omit?: tb_cargos_adminOmit<ExtArgs> | null
    /**
     * Filter, which tb_cargos_admin to fetch.
     */
    where: tb_cargos_adminWhereUniqueInput
  }

  /**
   * tb_cargos_admin findFirst
   */
  export type tb_cargos_adminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_cargos_admin
     */
    select?: tb_cargos_adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_cargos_admin
     */
    omit?: tb_cargos_adminOmit<ExtArgs> | null
    /**
     * Filter, which tb_cargos_admin to fetch.
     */
    where?: tb_cargos_adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_cargos_admins to fetch.
     */
    orderBy?: tb_cargos_adminOrderByWithRelationInput | tb_cargos_adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_cargos_admins.
     */
    cursor?: tb_cargos_adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_cargos_admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_cargos_admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_cargos_admins.
     */
    distinct?: Tb_cargos_adminScalarFieldEnum | Tb_cargos_adminScalarFieldEnum[]
  }

  /**
   * tb_cargos_admin findFirstOrThrow
   */
  export type tb_cargos_adminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_cargos_admin
     */
    select?: tb_cargos_adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_cargos_admin
     */
    omit?: tb_cargos_adminOmit<ExtArgs> | null
    /**
     * Filter, which tb_cargos_admin to fetch.
     */
    where?: tb_cargos_adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_cargos_admins to fetch.
     */
    orderBy?: tb_cargos_adminOrderByWithRelationInput | tb_cargos_adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_cargos_admins.
     */
    cursor?: tb_cargos_adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_cargos_admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_cargos_admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_cargos_admins.
     */
    distinct?: Tb_cargos_adminScalarFieldEnum | Tb_cargos_adminScalarFieldEnum[]
  }

  /**
   * tb_cargos_admin findMany
   */
  export type tb_cargos_adminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_cargos_admin
     */
    select?: tb_cargos_adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_cargos_admin
     */
    omit?: tb_cargos_adminOmit<ExtArgs> | null
    /**
     * Filter, which tb_cargos_admins to fetch.
     */
    where?: tb_cargos_adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_cargos_admins to fetch.
     */
    orderBy?: tb_cargos_adminOrderByWithRelationInput | tb_cargos_adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tb_cargos_admins.
     */
    cursor?: tb_cargos_adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_cargos_admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_cargos_admins.
     */
    skip?: number
    distinct?: Tb_cargos_adminScalarFieldEnum | Tb_cargos_adminScalarFieldEnum[]
  }

  /**
   * tb_cargos_admin create
   */
  export type tb_cargos_adminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_cargos_admin
     */
    select?: tb_cargos_adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_cargos_admin
     */
    omit?: tb_cargos_adminOmit<ExtArgs> | null
    /**
     * The data needed to create a tb_cargos_admin.
     */
    data?: XOR<tb_cargos_adminCreateInput, tb_cargos_adminUncheckedCreateInput>
  }

  /**
   * tb_cargos_admin createMany
   */
  export type tb_cargos_adminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tb_cargos_admins.
     */
    data: tb_cargos_adminCreateManyInput | tb_cargos_adminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tb_cargos_admin update
   */
  export type tb_cargos_adminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_cargos_admin
     */
    select?: tb_cargos_adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_cargos_admin
     */
    omit?: tb_cargos_adminOmit<ExtArgs> | null
    /**
     * The data needed to update a tb_cargos_admin.
     */
    data: XOR<tb_cargos_adminUpdateInput, tb_cargos_adminUncheckedUpdateInput>
    /**
     * Choose, which tb_cargos_admin to update.
     */
    where: tb_cargos_adminWhereUniqueInput
  }

  /**
   * tb_cargos_admin updateMany
   */
  export type tb_cargos_adminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tb_cargos_admins.
     */
    data: XOR<tb_cargos_adminUpdateManyMutationInput, tb_cargos_adminUncheckedUpdateManyInput>
    /**
     * Filter which tb_cargos_admins to update
     */
    where?: tb_cargos_adminWhereInput
    /**
     * Limit how many tb_cargos_admins to update.
     */
    limit?: number
  }

  /**
   * tb_cargos_admin upsert
   */
  export type tb_cargos_adminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_cargos_admin
     */
    select?: tb_cargos_adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_cargos_admin
     */
    omit?: tb_cargos_adminOmit<ExtArgs> | null
    /**
     * The filter to search for the tb_cargos_admin to update in case it exists.
     */
    where: tb_cargos_adminWhereUniqueInput
    /**
     * In case the tb_cargos_admin found by the `where` argument doesn't exist, create a new tb_cargos_admin with this data.
     */
    create: XOR<tb_cargos_adminCreateInput, tb_cargos_adminUncheckedCreateInput>
    /**
     * In case the tb_cargos_admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tb_cargos_adminUpdateInput, tb_cargos_adminUncheckedUpdateInput>
  }

  /**
   * tb_cargos_admin delete
   */
  export type tb_cargos_adminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_cargos_admin
     */
    select?: tb_cargos_adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_cargos_admin
     */
    omit?: tb_cargos_adminOmit<ExtArgs> | null
    /**
     * Filter which tb_cargos_admin to delete.
     */
    where: tb_cargos_adminWhereUniqueInput
  }

  /**
   * tb_cargos_admin deleteMany
   */
  export type tb_cargos_adminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_cargos_admins to delete
     */
    where?: tb_cargos_adminWhereInput
    /**
     * Limit how many tb_cargos_admins to delete.
     */
    limit?: number
  }

  /**
   * tb_cargos_admin without action
   */
  export type tb_cargos_adminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_cargos_admin
     */
    select?: tb_cargos_adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_cargos_admin
     */
    omit?: tb_cargos_adminOmit<ExtArgs> | null
  }


  /**
   * Model tb_categorias
   */

  export type AggregateTb_categorias = {
    _count: Tb_categoriasCountAggregateOutputType | null
    _avg: Tb_categoriasAvgAggregateOutputType | null
    _sum: Tb_categoriasSumAggregateOutputType | null
    _min: Tb_categoriasMinAggregateOutputType | null
    _max: Tb_categoriasMaxAggregateOutputType | null
  }

  export type Tb_categoriasAvgAggregateOutputType = {
    id: number | null
  }

  export type Tb_categoriasSumAggregateOutputType = {
    id: number | null
  }

  export type Tb_categoriasMinAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type Tb_categoriasMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type Tb_categoriasCountAggregateOutputType = {
    id: number
    nombre: number
    _all: number
  }


  export type Tb_categoriasAvgAggregateInputType = {
    id?: true
  }

  export type Tb_categoriasSumAggregateInputType = {
    id?: true
  }

  export type Tb_categoriasMinAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type Tb_categoriasMaxAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type Tb_categoriasCountAggregateInputType = {
    id?: true
    nombre?: true
    _all?: true
  }

  export type Tb_categoriasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_categorias to aggregate.
     */
    where?: tb_categoriasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_categorias to fetch.
     */
    orderBy?: tb_categoriasOrderByWithRelationInput | tb_categoriasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tb_categoriasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tb_categorias
    **/
    _count?: true | Tb_categoriasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tb_categoriasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tb_categoriasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tb_categoriasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tb_categoriasMaxAggregateInputType
  }

  export type GetTb_categoriasAggregateType<T extends Tb_categoriasAggregateArgs> = {
        [P in keyof T & keyof AggregateTb_categorias]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTb_categorias[P]>
      : GetScalarType<T[P], AggregateTb_categorias[P]>
  }




  export type tb_categoriasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tb_categoriasWhereInput
    orderBy?: tb_categoriasOrderByWithAggregationInput | tb_categoriasOrderByWithAggregationInput[]
    by: Tb_categoriasScalarFieldEnum[] | Tb_categoriasScalarFieldEnum
    having?: tb_categoriasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tb_categoriasCountAggregateInputType | true
    _avg?: Tb_categoriasAvgAggregateInputType
    _sum?: Tb_categoriasSumAggregateInputType
    _min?: Tb_categoriasMinAggregateInputType
    _max?: Tb_categoriasMaxAggregateInputType
  }

  export type Tb_categoriasGroupByOutputType = {
    id: number
    nombre: string | null
    _count: Tb_categoriasCountAggregateOutputType | null
    _avg: Tb_categoriasAvgAggregateOutputType | null
    _sum: Tb_categoriasSumAggregateOutputType | null
    _min: Tb_categoriasMinAggregateOutputType | null
    _max: Tb_categoriasMaxAggregateOutputType | null
  }

  type GetTb_categoriasGroupByPayload<T extends tb_categoriasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tb_categoriasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tb_categoriasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tb_categoriasGroupByOutputType[P]>
            : GetScalarType<T[P], Tb_categoriasGroupByOutputType[P]>
        }
      >
    >


  export type tb_categoriasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["tb_categorias"]>



  export type tb_categoriasSelectScalar = {
    id?: boolean
    nombre?: boolean
  }

  export type tb_categoriasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre", ExtArgs["result"]["tb_categorias"]>

  export type $tb_categoriasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tb_categorias"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string | null
    }, ExtArgs["result"]["tb_categorias"]>
    composites: {}
  }

  type tb_categoriasGetPayload<S extends boolean | null | undefined | tb_categoriasDefaultArgs> = $Result.GetResult<Prisma.$tb_categoriasPayload, S>

  type tb_categoriasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tb_categoriasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tb_categoriasCountAggregateInputType | true
    }

  export interface tb_categoriasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tb_categorias'], meta: { name: 'tb_categorias' } }
    /**
     * Find zero or one Tb_categorias that matches the filter.
     * @param {tb_categoriasFindUniqueArgs} args - Arguments to find a Tb_categorias
     * @example
     * // Get one Tb_categorias
     * const tb_categorias = await prisma.tb_categorias.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tb_categoriasFindUniqueArgs>(args: SelectSubset<T, tb_categoriasFindUniqueArgs<ExtArgs>>): Prisma__tb_categoriasClient<$Result.GetResult<Prisma.$tb_categoriasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tb_categorias that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tb_categoriasFindUniqueOrThrowArgs} args - Arguments to find a Tb_categorias
     * @example
     * // Get one Tb_categorias
     * const tb_categorias = await prisma.tb_categorias.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tb_categoriasFindUniqueOrThrowArgs>(args: SelectSubset<T, tb_categoriasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tb_categoriasClient<$Result.GetResult<Prisma.$tb_categoriasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tb_categorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_categoriasFindFirstArgs} args - Arguments to find a Tb_categorias
     * @example
     * // Get one Tb_categorias
     * const tb_categorias = await prisma.tb_categorias.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tb_categoriasFindFirstArgs>(args?: SelectSubset<T, tb_categoriasFindFirstArgs<ExtArgs>>): Prisma__tb_categoriasClient<$Result.GetResult<Prisma.$tb_categoriasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tb_categorias that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_categoriasFindFirstOrThrowArgs} args - Arguments to find a Tb_categorias
     * @example
     * // Get one Tb_categorias
     * const tb_categorias = await prisma.tb_categorias.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tb_categoriasFindFirstOrThrowArgs>(args?: SelectSubset<T, tb_categoriasFindFirstOrThrowArgs<ExtArgs>>): Prisma__tb_categoriasClient<$Result.GetResult<Prisma.$tb_categoriasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tb_categorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_categoriasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tb_categorias
     * const tb_categorias = await prisma.tb_categorias.findMany()
     * 
     * // Get first 10 Tb_categorias
     * const tb_categorias = await prisma.tb_categorias.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tb_categoriasWithIdOnly = await prisma.tb_categorias.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tb_categoriasFindManyArgs>(args?: SelectSubset<T, tb_categoriasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_categoriasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tb_categorias.
     * @param {tb_categoriasCreateArgs} args - Arguments to create a Tb_categorias.
     * @example
     * // Create one Tb_categorias
     * const Tb_categorias = await prisma.tb_categorias.create({
     *   data: {
     *     // ... data to create a Tb_categorias
     *   }
     * })
     * 
     */
    create<T extends tb_categoriasCreateArgs>(args: SelectSubset<T, tb_categoriasCreateArgs<ExtArgs>>): Prisma__tb_categoriasClient<$Result.GetResult<Prisma.$tb_categoriasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tb_categorias.
     * @param {tb_categoriasCreateManyArgs} args - Arguments to create many Tb_categorias.
     * @example
     * // Create many Tb_categorias
     * const tb_categorias = await prisma.tb_categorias.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tb_categoriasCreateManyArgs>(args?: SelectSubset<T, tb_categoriasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tb_categorias.
     * @param {tb_categoriasDeleteArgs} args - Arguments to delete one Tb_categorias.
     * @example
     * // Delete one Tb_categorias
     * const Tb_categorias = await prisma.tb_categorias.delete({
     *   where: {
     *     // ... filter to delete one Tb_categorias
     *   }
     * })
     * 
     */
    delete<T extends tb_categoriasDeleteArgs>(args: SelectSubset<T, tb_categoriasDeleteArgs<ExtArgs>>): Prisma__tb_categoriasClient<$Result.GetResult<Prisma.$tb_categoriasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tb_categorias.
     * @param {tb_categoriasUpdateArgs} args - Arguments to update one Tb_categorias.
     * @example
     * // Update one Tb_categorias
     * const tb_categorias = await prisma.tb_categorias.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tb_categoriasUpdateArgs>(args: SelectSubset<T, tb_categoriasUpdateArgs<ExtArgs>>): Prisma__tb_categoriasClient<$Result.GetResult<Prisma.$tb_categoriasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tb_categorias.
     * @param {tb_categoriasDeleteManyArgs} args - Arguments to filter Tb_categorias to delete.
     * @example
     * // Delete a few Tb_categorias
     * const { count } = await prisma.tb_categorias.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tb_categoriasDeleteManyArgs>(args?: SelectSubset<T, tb_categoriasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tb_categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_categoriasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tb_categorias
     * const tb_categorias = await prisma.tb_categorias.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tb_categoriasUpdateManyArgs>(args: SelectSubset<T, tb_categoriasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tb_categorias.
     * @param {tb_categoriasUpsertArgs} args - Arguments to update or create a Tb_categorias.
     * @example
     * // Update or create a Tb_categorias
     * const tb_categorias = await prisma.tb_categorias.upsert({
     *   create: {
     *     // ... data to create a Tb_categorias
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tb_categorias we want to update
     *   }
     * })
     */
    upsert<T extends tb_categoriasUpsertArgs>(args: SelectSubset<T, tb_categoriasUpsertArgs<ExtArgs>>): Prisma__tb_categoriasClient<$Result.GetResult<Prisma.$tb_categoriasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tb_categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_categoriasCountArgs} args - Arguments to filter Tb_categorias to count.
     * @example
     * // Count the number of Tb_categorias
     * const count = await prisma.tb_categorias.count({
     *   where: {
     *     // ... the filter for the Tb_categorias we want to count
     *   }
     * })
    **/
    count<T extends tb_categoriasCountArgs>(
      args?: Subset<T, tb_categoriasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tb_categoriasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tb_categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tb_categoriasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Tb_categoriasAggregateArgs>(args: Subset<T, Tb_categoriasAggregateArgs>): Prisma.PrismaPromise<GetTb_categoriasAggregateType<T>>

    /**
     * Group by Tb_categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_categoriasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tb_categoriasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tb_categoriasGroupByArgs['orderBy'] }
        : { orderBy?: tb_categoriasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tb_categoriasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTb_categoriasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tb_categorias model
   */
  readonly fields: tb_categoriasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tb_categorias.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tb_categoriasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tb_categorias model
   */
  interface tb_categoriasFieldRefs {
    readonly id: FieldRef<"tb_categorias", 'Int'>
    readonly nombre: FieldRef<"tb_categorias", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tb_categorias findUnique
   */
  export type tb_categoriasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_categorias
     */
    select?: tb_categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_categorias
     */
    omit?: tb_categoriasOmit<ExtArgs> | null
    /**
     * Filter, which tb_categorias to fetch.
     */
    where: tb_categoriasWhereUniqueInput
  }

  /**
   * tb_categorias findUniqueOrThrow
   */
  export type tb_categoriasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_categorias
     */
    select?: tb_categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_categorias
     */
    omit?: tb_categoriasOmit<ExtArgs> | null
    /**
     * Filter, which tb_categorias to fetch.
     */
    where: tb_categoriasWhereUniqueInput
  }

  /**
   * tb_categorias findFirst
   */
  export type tb_categoriasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_categorias
     */
    select?: tb_categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_categorias
     */
    omit?: tb_categoriasOmit<ExtArgs> | null
    /**
     * Filter, which tb_categorias to fetch.
     */
    where?: tb_categoriasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_categorias to fetch.
     */
    orderBy?: tb_categoriasOrderByWithRelationInput | tb_categoriasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_categorias.
     */
    cursor?: tb_categoriasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_categorias.
     */
    distinct?: Tb_categoriasScalarFieldEnum | Tb_categoriasScalarFieldEnum[]
  }

  /**
   * tb_categorias findFirstOrThrow
   */
  export type tb_categoriasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_categorias
     */
    select?: tb_categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_categorias
     */
    omit?: tb_categoriasOmit<ExtArgs> | null
    /**
     * Filter, which tb_categorias to fetch.
     */
    where?: tb_categoriasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_categorias to fetch.
     */
    orderBy?: tb_categoriasOrderByWithRelationInput | tb_categoriasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_categorias.
     */
    cursor?: tb_categoriasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_categorias.
     */
    distinct?: Tb_categoriasScalarFieldEnum | Tb_categoriasScalarFieldEnum[]
  }

  /**
   * tb_categorias findMany
   */
  export type tb_categoriasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_categorias
     */
    select?: tb_categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_categorias
     */
    omit?: tb_categoriasOmit<ExtArgs> | null
    /**
     * Filter, which tb_categorias to fetch.
     */
    where?: tb_categoriasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_categorias to fetch.
     */
    orderBy?: tb_categoriasOrderByWithRelationInput | tb_categoriasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tb_categorias.
     */
    cursor?: tb_categoriasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_categorias.
     */
    skip?: number
    distinct?: Tb_categoriasScalarFieldEnum | Tb_categoriasScalarFieldEnum[]
  }

  /**
   * tb_categorias create
   */
  export type tb_categoriasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_categorias
     */
    select?: tb_categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_categorias
     */
    omit?: tb_categoriasOmit<ExtArgs> | null
    /**
     * The data needed to create a tb_categorias.
     */
    data?: XOR<tb_categoriasCreateInput, tb_categoriasUncheckedCreateInput>
  }

  /**
   * tb_categorias createMany
   */
  export type tb_categoriasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tb_categorias.
     */
    data: tb_categoriasCreateManyInput | tb_categoriasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tb_categorias update
   */
  export type tb_categoriasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_categorias
     */
    select?: tb_categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_categorias
     */
    omit?: tb_categoriasOmit<ExtArgs> | null
    /**
     * The data needed to update a tb_categorias.
     */
    data: XOR<tb_categoriasUpdateInput, tb_categoriasUncheckedUpdateInput>
    /**
     * Choose, which tb_categorias to update.
     */
    where: tb_categoriasWhereUniqueInput
  }

  /**
   * tb_categorias updateMany
   */
  export type tb_categoriasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tb_categorias.
     */
    data: XOR<tb_categoriasUpdateManyMutationInput, tb_categoriasUncheckedUpdateManyInput>
    /**
     * Filter which tb_categorias to update
     */
    where?: tb_categoriasWhereInput
    /**
     * Limit how many tb_categorias to update.
     */
    limit?: number
  }

  /**
   * tb_categorias upsert
   */
  export type tb_categoriasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_categorias
     */
    select?: tb_categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_categorias
     */
    omit?: tb_categoriasOmit<ExtArgs> | null
    /**
     * The filter to search for the tb_categorias to update in case it exists.
     */
    where: tb_categoriasWhereUniqueInput
    /**
     * In case the tb_categorias found by the `where` argument doesn't exist, create a new tb_categorias with this data.
     */
    create: XOR<tb_categoriasCreateInput, tb_categoriasUncheckedCreateInput>
    /**
     * In case the tb_categorias was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tb_categoriasUpdateInput, tb_categoriasUncheckedUpdateInput>
  }

  /**
   * tb_categorias delete
   */
  export type tb_categoriasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_categorias
     */
    select?: tb_categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_categorias
     */
    omit?: tb_categoriasOmit<ExtArgs> | null
    /**
     * Filter which tb_categorias to delete.
     */
    where: tb_categoriasWhereUniqueInput
  }

  /**
   * tb_categorias deleteMany
   */
  export type tb_categoriasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_categorias to delete
     */
    where?: tb_categoriasWhereInput
    /**
     * Limit how many tb_categorias to delete.
     */
    limit?: number
  }

  /**
   * tb_categorias without action
   */
  export type tb_categoriasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_categorias
     */
    select?: tb_categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_categorias
     */
    omit?: tb_categoriasOmit<ExtArgs> | null
  }


  /**
   * Model tb_contactos_emergencia
   */

  export type AggregateTb_contactos_emergencia = {
    _count: Tb_contactos_emergenciaCountAggregateOutputType | null
    _avg: Tb_contactos_emergenciaAvgAggregateOutputType | null
    _sum: Tb_contactos_emergenciaSumAggregateOutputType | null
    _min: Tb_contactos_emergenciaMinAggregateOutputType | null
    _max: Tb_contactos_emergenciaMaxAggregateOutputType | null
  }

  export type Tb_contactos_emergenciaAvgAggregateOutputType = {
    id: number | null
    id_entrenador: number | null
  }

  export type Tb_contactos_emergenciaSumAggregateOutputType = {
    id: number | null
    id_entrenador: number | null
  }

  export type Tb_contactos_emergenciaMinAggregateOutputType = {
    id: number | null
    tipo_documento: string | null
    id_entrenador: number | null
    nombres: string | null
    apellidos: string | null
    correo: string | null
    telefono: string | null
  }

  export type Tb_contactos_emergenciaMaxAggregateOutputType = {
    id: number | null
    tipo_documento: string | null
    id_entrenador: number | null
    nombres: string | null
    apellidos: string | null
    correo: string | null
    telefono: string | null
  }

  export type Tb_contactos_emergenciaCountAggregateOutputType = {
    id: number
    tipo_documento: number
    id_entrenador: number
    nombres: number
    apellidos: number
    correo: number
    telefono: number
    _all: number
  }


  export type Tb_contactos_emergenciaAvgAggregateInputType = {
    id?: true
    id_entrenador?: true
  }

  export type Tb_contactos_emergenciaSumAggregateInputType = {
    id?: true
    id_entrenador?: true
  }

  export type Tb_contactos_emergenciaMinAggregateInputType = {
    id?: true
    tipo_documento?: true
    id_entrenador?: true
    nombres?: true
    apellidos?: true
    correo?: true
    telefono?: true
  }

  export type Tb_contactos_emergenciaMaxAggregateInputType = {
    id?: true
    tipo_documento?: true
    id_entrenador?: true
    nombres?: true
    apellidos?: true
    correo?: true
    telefono?: true
  }

  export type Tb_contactos_emergenciaCountAggregateInputType = {
    id?: true
    tipo_documento?: true
    id_entrenador?: true
    nombres?: true
    apellidos?: true
    correo?: true
    telefono?: true
    _all?: true
  }

  export type Tb_contactos_emergenciaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_contactos_emergencia to aggregate.
     */
    where?: tb_contactos_emergenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_contactos_emergencias to fetch.
     */
    orderBy?: tb_contactos_emergenciaOrderByWithRelationInput | tb_contactos_emergenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tb_contactos_emergenciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_contactos_emergencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_contactos_emergencias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tb_contactos_emergencias
    **/
    _count?: true | Tb_contactos_emergenciaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tb_contactos_emergenciaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tb_contactos_emergenciaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tb_contactos_emergenciaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tb_contactos_emergenciaMaxAggregateInputType
  }

  export type GetTb_contactos_emergenciaAggregateType<T extends Tb_contactos_emergenciaAggregateArgs> = {
        [P in keyof T & keyof AggregateTb_contactos_emergencia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTb_contactos_emergencia[P]>
      : GetScalarType<T[P], AggregateTb_contactos_emergencia[P]>
  }




  export type tb_contactos_emergenciaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tb_contactos_emergenciaWhereInput
    orderBy?: tb_contactos_emergenciaOrderByWithAggregationInput | tb_contactos_emergenciaOrderByWithAggregationInput[]
    by: Tb_contactos_emergenciaScalarFieldEnum[] | Tb_contactos_emergenciaScalarFieldEnum
    having?: tb_contactos_emergenciaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tb_contactos_emergenciaCountAggregateInputType | true
    _avg?: Tb_contactos_emergenciaAvgAggregateInputType
    _sum?: Tb_contactos_emergenciaSumAggregateInputType
    _min?: Tb_contactos_emergenciaMinAggregateInputType
    _max?: Tb_contactos_emergenciaMaxAggregateInputType
  }

  export type Tb_contactos_emergenciaGroupByOutputType = {
    id: number
    tipo_documento: string
    id_entrenador: number | null
    nombres: string | null
    apellidos: string | null
    correo: string | null
    telefono: string | null
    _count: Tb_contactos_emergenciaCountAggregateOutputType | null
    _avg: Tb_contactos_emergenciaAvgAggregateOutputType | null
    _sum: Tb_contactos_emergenciaSumAggregateOutputType | null
    _min: Tb_contactos_emergenciaMinAggregateOutputType | null
    _max: Tb_contactos_emergenciaMaxAggregateOutputType | null
  }

  type GetTb_contactos_emergenciaGroupByPayload<T extends tb_contactos_emergenciaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tb_contactos_emergenciaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tb_contactos_emergenciaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tb_contactos_emergenciaGroupByOutputType[P]>
            : GetScalarType<T[P], Tb_contactos_emergenciaGroupByOutputType[P]>
        }
      >
    >


  export type tb_contactos_emergenciaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo_documento?: boolean
    id_entrenador?: boolean
    nombres?: boolean
    apellidos?: boolean
    correo?: boolean
    telefono?: boolean
  }, ExtArgs["result"]["tb_contactos_emergencia"]>



  export type tb_contactos_emergenciaSelectScalar = {
    id?: boolean
    tipo_documento?: boolean
    id_entrenador?: boolean
    nombres?: boolean
    apellidos?: boolean
    correo?: boolean
    telefono?: boolean
  }

  export type tb_contactos_emergenciaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tipo_documento" | "id_entrenador" | "nombres" | "apellidos" | "correo" | "telefono", ExtArgs["result"]["tb_contactos_emergencia"]>

  export type $tb_contactos_emergenciaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tb_contactos_emergencia"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tipo_documento: string
      id_entrenador: number | null
      nombres: string | null
      apellidos: string | null
      correo: string | null
      telefono: string | null
    }, ExtArgs["result"]["tb_contactos_emergencia"]>
    composites: {}
  }

  type tb_contactos_emergenciaGetPayload<S extends boolean | null | undefined | tb_contactos_emergenciaDefaultArgs> = $Result.GetResult<Prisma.$tb_contactos_emergenciaPayload, S>

  type tb_contactos_emergenciaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tb_contactos_emergenciaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tb_contactos_emergenciaCountAggregateInputType | true
    }

  export interface tb_contactos_emergenciaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tb_contactos_emergencia'], meta: { name: 'tb_contactos_emergencia' } }
    /**
     * Find zero or one Tb_contactos_emergencia that matches the filter.
     * @param {tb_contactos_emergenciaFindUniqueArgs} args - Arguments to find a Tb_contactos_emergencia
     * @example
     * // Get one Tb_contactos_emergencia
     * const tb_contactos_emergencia = await prisma.tb_contactos_emergencia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tb_contactos_emergenciaFindUniqueArgs>(args: SelectSubset<T, tb_contactos_emergenciaFindUniqueArgs<ExtArgs>>): Prisma__tb_contactos_emergenciaClient<$Result.GetResult<Prisma.$tb_contactos_emergenciaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tb_contactos_emergencia that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tb_contactos_emergenciaFindUniqueOrThrowArgs} args - Arguments to find a Tb_contactos_emergencia
     * @example
     * // Get one Tb_contactos_emergencia
     * const tb_contactos_emergencia = await prisma.tb_contactos_emergencia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tb_contactos_emergenciaFindUniqueOrThrowArgs>(args: SelectSubset<T, tb_contactos_emergenciaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tb_contactos_emergenciaClient<$Result.GetResult<Prisma.$tb_contactos_emergenciaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tb_contactos_emergencia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_contactos_emergenciaFindFirstArgs} args - Arguments to find a Tb_contactos_emergencia
     * @example
     * // Get one Tb_contactos_emergencia
     * const tb_contactos_emergencia = await prisma.tb_contactos_emergencia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tb_contactos_emergenciaFindFirstArgs>(args?: SelectSubset<T, tb_contactos_emergenciaFindFirstArgs<ExtArgs>>): Prisma__tb_contactos_emergenciaClient<$Result.GetResult<Prisma.$tb_contactos_emergenciaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tb_contactos_emergencia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_contactos_emergenciaFindFirstOrThrowArgs} args - Arguments to find a Tb_contactos_emergencia
     * @example
     * // Get one Tb_contactos_emergencia
     * const tb_contactos_emergencia = await prisma.tb_contactos_emergencia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tb_contactos_emergenciaFindFirstOrThrowArgs>(args?: SelectSubset<T, tb_contactos_emergenciaFindFirstOrThrowArgs<ExtArgs>>): Prisma__tb_contactos_emergenciaClient<$Result.GetResult<Prisma.$tb_contactos_emergenciaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tb_contactos_emergencias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_contactos_emergenciaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tb_contactos_emergencias
     * const tb_contactos_emergencias = await prisma.tb_contactos_emergencia.findMany()
     * 
     * // Get first 10 Tb_contactos_emergencias
     * const tb_contactos_emergencias = await prisma.tb_contactos_emergencia.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tb_contactos_emergenciaWithIdOnly = await prisma.tb_contactos_emergencia.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tb_contactos_emergenciaFindManyArgs>(args?: SelectSubset<T, tb_contactos_emergenciaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_contactos_emergenciaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tb_contactos_emergencia.
     * @param {tb_contactos_emergenciaCreateArgs} args - Arguments to create a Tb_contactos_emergencia.
     * @example
     * // Create one Tb_contactos_emergencia
     * const Tb_contactos_emergencia = await prisma.tb_contactos_emergencia.create({
     *   data: {
     *     // ... data to create a Tb_contactos_emergencia
     *   }
     * })
     * 
     */
    create<T extends tb_contactos_emergenciaCreateArgs>(args: SelectSubset<T, tb_contactos_emergenciaCreateArgs<ExtArgs>>): Prisma__tb_contactos_emergenciaClient<$Result.GetResult<Prisma.$tb_contactos_emergenciaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tb_contactos_emergencias.
     * @param {tb_contactos_emergenciaCreateManyArgs} args - Arguments to create many Tb_contactos_emergencias.
     * @example
     * // Create many Tb_contactos_emergencias
     * const tb_contactos_emergencia = await prisma.tb_contactos_emergencia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tb_contactos_emergenciaCreateManyArgs>(args?: SelectSubset<T, tb_contactos_emergenciaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tb_contactos_emergencia.
     * @param {tb_contactos_emergenciaDeleteArgs} args - Arguments to delete one Tb_contactos_emergencia.
     * @example
     * // Delete one Tb_contactos_emergencia
     * const Tb_contactos_emergencia = await prisma.tb_contactos_emergencia.delete({
     *   where: {
     *     // ... filter to delete one Tb_contactos_emergencia
     *   }
     * })
     * 
     */
    delete<T extends tb_contactos_emergenciaDeleteArgs>(args: SelectSubset<T, tb_contactos_emergenciaDeleteArgs<ExtArgs>>): Prisma__tb_contactos_emergenciaClient<$Result.GetResult<Prisma.$tb_contactos_emergenciaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tb_contactos_emergencia.
     * @param {tb_contactos_emergenciaUpdateArgs} args - Arguments to update one Tb_contactos_emergencia.
     * @example
     * // Update one Tb_contactos_emergencia
     * const tb_contactos_emergencia = await prisma.tb_contactos_emergencia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tb_contactos_emergenciaUpdateArgs>(args: SelectSubset<T, tb_contactos_emergenciaUpdateArgs<ExtArgs>>): Prisma__tb_contactos_emergenciaClient<$Result.GetResult<Prisma.$tb_contactos_emergenciaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tb_contactos_emergencias.
     * @param {tb_contactos_emergenciaDeleteManyArgs} args - Arguments to filter Tb_contactos_emergencias to delete.
     * @example
     * // Delete a few Tb_contactos_emergencias
     * const { count } = await prisma.tb_contactos_emergencia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tb_contactos_emergenciaDeleteManyArgs>(args?: SelectSubset<T, tb_contactos_emergenciaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tb_contactos_emergencias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_contactos_emergenciaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tb_contactos_emergencias
     * const tb_contactos_emergencia = await prisma.tb_contactos_emergencia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tb_contactos_emergenciaUpdateManyArgs>(args: SelectSubset<T, tb_contactos_emergenciaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tb_contactos_emergencia.
     * @param {tb_contactos_emergenciaUpsertArgs} args - Arguments to update or create a Tb_contactos_emergencia.
     * @example
     * // Update or create a Tb_contactos_emergencia
     * const tb_contactos_emergencia = await prisma.tb_contactos_emergencia.upsert({
     *   create: {
     *     // ... data to create a Tb_contactos_emergencia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tb_contactos_emergencia we want to update
     *   }
     * })
     */
    upsert<T extends tb_contactos_emergenciaUpsertArgs>(args: SelectSubset<T, tb_contactos_emergenciaUpsertArgs<ExtArgs>>): Prisma__tb_contactos_emergenciaClient<$Result.GetResult<Prisma.$tb_contactos_emergenciaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tb_contactos_emergencias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_contactos_emergenciaCountArgs} args - Arguments to filter Tb_contactos_emergencias to count.
     * @example
     * // Count the number of Tb_contactos_emergencias
     * const count = await prisma.tb_contactos_emergencia.count({
     *   where: {
     *     // ... the filter for the Tb_contactos_emergencias we want to count
     *   }
     * })
    **/
    count<T extends tb_contactos_emergenciaCountArgs>(
      args?: Subset<T, tb_contactos_emergenciaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tb_contactos_emergenciaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tb_contactos_emergencia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tb_contactos_emergenciaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Tb_contactos_emergenciaAggregateArgs>(args: Subset<T, Tb_contactos_emergenciaAggregateArgs>): Prisma.PrismaPromise<GetTb_contactos_emergenciaAggregateType<T>>

    /**
     * Group by Tb_contactos_emergencia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_contactos_emergenciaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tb_contactos_emergenciaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tb_contactos_emergenciaGroupByArgs['orderBy'] }
        : { orderBy?: tb_contactos_emergenciaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tb_contactos_emergenciaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTb_contactos_emergenciaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tb_contactos_emergencia model
   */
  readonly fields: tb_contactos_emergenciaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tb_contactos_emergencia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tb_contactos_emergenciaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tb_contactos_emergencia model
   */
  interface tb_contactos_emergenciaFieldRefs {
    readonly id: FieldRef<"tb_contactos_emergencia", 'Int'>
    readonly tipo_documento: FieldRef<"tb_contactos_emergencia", 'String'>
    readonly id_entrenador: FieldRef<"tb_contactos_emergencia", 'Int'>
    readonly nombres: FieldRef<"tb_contactos_emergencia", 'String'>
    readonly apellidos: FieldRef<"tb_contactos_emergencia", 'String'>
    readonly correo: FieldRef<"tb_contactos_emergencia", 'String'>
    readonly telefono: FieldRef<"tb_contactos_emergencia", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tb_contactos_emergencia findUnique
   */
  export type tb_contactos_emergenciaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_contactos_emergencia
     */
    select?: tb_contactos_emergenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_contactos_emergencia
     */
    omit?: tb_contactos_emergenciaOmit<ExtArgs> | null
    /**
     * Filter, which tb_contactos_emergencia to fetch.
     */
    where: tb_contactos_emergenciaWhereUniqueInput
  }

  /**
   * tb_contactos_emergencia findUniqueOrThrow
   */
  export type tb_contactos_emergenciaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_contactos_emergencia
     */
    select?: tb_contactos_emergenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_contactos_emergencia
     */
    omit?: tb_contactos_emergenciaOmit<ExtArgs> | null
    /**
     * Filter, which tb_contactos_emergencia to fetch.
     */
    where: tb_contactos_emergenciaWhereUniqueInput
  }

  /**
   * tb_contactos_emergencia findFirst
   */
  export type tb_contactos_emergenciaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_contactos_emergencia
     */
    select?: tb_contactos_emergenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_contactos_emergencia
     */
    omit?: tb_contactos_emergenciaOmit<ExtArgs> | null
    /**
     * Filter, which tb_contactos_emergencia to fetch.
     */
    where?: tb_contactos_emergenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_contactos_emergencias to fetch.
     */
    orderBy?: tb_contactos_emergenciaOrderByWithRelationInput | tb_contactos_emergenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_contactos_emergencias.
     */
    cursor?: tb_contactos_emergenciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_contactos_emergencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_contactos_emergencias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_contactos_emergencias.
     */
    distinct?: Tb_contactos_emergenciaScalarFieldEnum | Tb_contactos_emergenciaScalarFieldEnum[]
  }

  /**
   * tb_contactos_emergencia findFirstOrThrow
   */
  export type tb_contactos_emergenciaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_contactos_emergencia
     */
    select?: tb_contactos_emergenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_contactos_emergencia
     */
    omit?: tb_contactos_emergenciaOmit<ExtArgs> | null
    /**
     * Filter, which tb_contactos_emergencia to fetch.
     */
    where?: tb_contactos_emergenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_contactos_emergencias to fetch.
     */
    orderBy?: tb_contactos_emergenciaOrderByWithRelationInput | tb_contactos_emergenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_contactos_emergencias.
     */
    cursor?: tb_contactos_emergenciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_contactos_emergencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_contactos_emergencias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_contactos_emergencias.
     */
    distinct?: Tb_contactos_emergenciaScalarFieldEnum | Tb_contactos_emergenciaScalarFieldEnum[]
  }

  /**
   * tb_contactos_emergencia findMany
   */
  export type tb_contactos_emergenciaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_contactos_emergencia
     */
    select?: tb_contactos_emergenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_contactos_emergencia
     */
    omit?: tb_contactos_emergenciaOmit<ExtArgs> | null
    /**
     * Filter, which tb_contactos_emergencias to fetch.
     */
    where?: tb_contactos_emergenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_contactos_emergencias to fetch.
     */
    orderBy?: tb_contactos_emergenciaOrderByWithRelationInput | tb_contactos_emergenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tb_contactos_emergencias.
     */
    cursor?: tb_contactos_emergenciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_contactos_emergencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_contactos_emergencias.
     */
    skip?: number
    distinct?: Tb_contactos_emergenciaScalarFieldEnum | Tb_contactos_emergenciaScalarFieldEnum[]
  }

  /**
   * tb_contactos_emergencia create
   */
  export type tb_contactos_emergenciaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_contactos_emergencia
     */
    select?: tb_contactos_emergenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_contactos_emergencia
     */
    omit?: tb_contactos_emergenciaOmit<ExtArgs> | null
    /**
     * The data needed to create a tb_contactos_emergencia.
     */
    data: XOR<tb_contactos_emergenciaCreateInput, tb_contactos_emergenciaUncheckedCreateInput>
  }

  /**
   * tb_contactos_emergencia createMany
   */
  export type tb_contactos_emergenciaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tb_contactos_emergencias.
     */
    data: tb_contactos_emergenciaCreateManyInput | tb_contactos_emergenciaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tb_contactos_emergencia update
   */
  export type tb_contactos_emergenciaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_contactos_emergencia
     */
    select?: tb_contactos_emergenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_contactos_emergencia
     */
    omit?: tb_contactos_emergenciaOmit<ExtArgs> | null
    /**
     * The data needed to update a tb_contactos_emergencia.
     */
    data: XOR<tb_contactos_emergenciaUpdateInput, tb_contactos_emergenciaUncheckedUpdateInput>
    /**
     * Choose, which tb_contactos_emergencia to update.
     */
    where: tb_contactos_emergenciaWhereUniqueInput
  }

  /**
   * tb_contactos_emergencia updateMany
   */
  export type tb_contactos_emergenciaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tb_contactos_emergencias.
     */
    data: XOR<tb_contactos_emergenciaUpdateManyMutationInput, tb_contactos_emergenciaUncheckedUpdateManyInput>
    /**
     * Filter which tb_contactos_emergencias to update
     */
    where?: tb_contactos_emergenciaWhereInput
    /**
     * Limit how many tb_contactos_emergencias to update.
     */
    limit?: number
  }

  /**
   * tb_contactos_emergencia upsert
   */
  export type tb_contactos_emergenciaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_contactos_emergencia
     */
    select?: tb_contactos_emergenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_contactos_emergencia
     */
    omit?: tb_contactos_emergenciaOmit<ExtArgs> | null
    /**
     * The filter to search for the tb_contactos_emergencia to update in case it exists.
     */
    where: tb_contactos_emergenciaWhereUniqueInput
    /**
     * In case the tb_contactos_emergencia found by the `where` argument doesn't exist, create a new tb_contactos_emergencia with this data.
     */
    create: XOR<tb_contactos_emergenciaCreateInput, tb_contactos_emergenciaUncheckedCreateInput>
    /**
     * In case the tb_contactos_emergencia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tb_contactos_emergenciaUpdateInput, tb_contactos_emergenciaUncheckedUpdateInput>
  }

  /**
   * tb_contactos_emergencia delete
   */
  export type tb_contactos_emergenciaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_contactos_emergencia
     */
    select?: tb_contactos_emergenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_contactos_emergencia
     */
    omit?: tb_contactos_emergenciaOmit<ExtArgs> | null
    /**
     * Filter which tb_contactos_emergencia to delete.
     */
    where: tb_contactos_emergenciaWhereUniqueInput
  }

  /**
   * tb_contactos_emergencia deleteMany
   */
  export type tb_contactos_emergenciaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_contactos_emergencias to delete
     */
    where?: tb_contactos_emergenciaWhereInput
    /**
     * Limit how many tb_contactos_emergencias to delete.
     */
    limit?: number
  }

  /**
   * tb_contactos_emergencia without action
   */
  export type tb_contactos_emergenciaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_contactos_emergencia
     */
    select?: tb_contactos_emergenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_contactos_emergencia
     */
    omit?: tb_contactos_emergenciaOmit<ExtArgs> | null
  }


  /**
   * Model tb_departamento
   */

  export type AggregateTb_departamento = {
    _count: Tb_departamentoCountAggregateOutputType | null
    _avg: Tb_departamentoAvgAggregateOutputType | null
    _sum: Tb_departamentoSumAggregateOutputType | null
    _min: Tb_departamentoMinAggregateOutputType | null
    _max: Tb_departamentoMaxAggregateOutputType | null
  }

  export type Tb_departamentoAvgAggregateOutputType = {
    id: number | null
  }

  export type Tb_departamentoSumAggregateOutputType = {
    id: number | null
  }

  export type Tb_departamentoMinAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type Tb_departamentoMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type Tb_departamentoCountAggregateOutputType = {
    id: number
    nombre: number
    _all: number
  }


  export type Tb_departamentoAvgAggregateInputType = {
    id?: true
  }

  export type Tb_departamentoSumAggregateInputType = {
    id?: true
  }

  export type Tb_departamentoMinAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type Tb_departamentoMaxAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type Tb_departamentoCountAggregateInputType = {
    id?: true
    nombre?: true
    _all?: true
  }

  export type Tb_departamentoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_departamento to aggregate.
     */
    where?: tb_departamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_departamentos to fetch.
     */
    orderBy?: tb_departamentoOrderByWithRelationInput | tb_departamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tb_departamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_departamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_departamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tb_departamentos
    **/
    _count?: true | Tb_departamentoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tb_departamentoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tb_departamentoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tb_departamentoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tb_departamentoMaxAggregateInputType
  }

  export type GetTb_departamentoAggregateType<T extends Tb_departamentoAggregateArgs> = {
        [P in keyof T & keyof AggregateTb_departamento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTb_departamento[P]>
      : GetScalarType<T[P], AggregateTb_departamento[P]>
  }




  export type tb_departamentoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tb_departamentoWhereInput
    orderBy?: tb_departamentoOrderByWithAggregationInput | tb_departamentoOrderByWithAggregationInput[]
    by: Tb_departamentoScalarFieldEnum[] | Tb_departamentoScalarFieldEnum
    having?: tb_departamentoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tb_departamentoCountAggregateInputType | true
    _avg?: Tb_departamentoAvgAggregateInputType
    _sum?: Tb_departamentoSumAggregateInputType
    _min?: Tb_departamentoMinAggregateInputType
    _max?: Tb_departamentoMaxAggregateInputType
  }

  export type Tb_departamentoGroupByOutputType = {
    id: number
    nombre: string | null
    _count: Tb_departamentoCountAggregateOutputType | null
    _avg: Tb_departamentoAvgAggregateOutputType | null
    _sum: Tb_departamentoSumAggregateOutputType | null
    _min: Tb_departamentoMinAggregateOutputType | null
    _max: Tb_departamentoMaxAggregateOutputType | null
  }

  type GetTb_departamentoGroupByPayload<T extends tb_departamentoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tb_departamentoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tb_departamentoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tb_departamentoGroupByOutputType[P]>
            : GetScalarType<T[P], Tb_departamentoGroupByOutputType[P]>
        }
      >
    >


  export type tb_departamentoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["tb_departamento"]>



  export type tb_departamentoSelectScalar = {
    id?: boolean
    nombre?: boolean
  }

  export type tb_departamentoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre", ExtArgs["result"]["tb_departamento"]>

  export type $tb_departamentoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tb_departamento"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string | null
    }, ExtArgs["result"]["tb_departamento"]>
    composites: {}
  }

  type tb_departamentoGetPayload<S extends boolean | null | undefined | tb_departamentoDefaultArgs> = $Result.GetResult<Prisma.$tb_departamentoPayload, S>

  type tb_departamentoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tb_departamentoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tb_departamentoCountAggregateInputType | true
    }

  export interface tb_departamentoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tb_departamento'], meta: { name: 'tb_departamento' } }
    /**
     * Find zero or one Tb_departamento that matches the filter.
     * @param {tb_departamentoFindUniqueArgs} args - Arguments to find a Tb_departamento
     * @example
     * // Get one Tb_departamento
     * const tb_departamento = await prisma.tb_departamento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tb_departamentoFindUniqueArgs>(args: SelectSubset<T, tb_departamentoFindUniqueArgs<ExtArgs>>): Prisma__tb_departamentoClient<$Result.GetResult<Prisma.$tb_departamentoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tb_departamento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tb_departamentoFindUniqueOrThrowArgs} args - Arguments to find a Tb_departamento
     * @example
     * // Get one Tb_departamento
     * const tb_departamento = await prisma.tb_departamento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tb_departamentoFindUniqueOrThrowArgs>(args: SelectSubset<T, tb_departamentoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tb_departamentoClient<$Result.GetResult<Prisma.$tb_departamentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tb_departamento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_departamentoFindFirstArgs} args - Arguments to find a Tb_departamento
     * @example
     * // Get one Tb_departamento
     * const tb_departamento = await prisma.tb_departamento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tb_departamentoFindFirstArgs>(args?: SelectSubset<T, tb_departamentoFindFirstArgs<ExtArgs>>): Prisma__tb_departamentoClient<$Result.GetResult<Prisma.$tb_departamentoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tb_departamento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_departamentoFindFirstOrThrowArgs} args - Arguments to find a Tb_departamento
     * @example
     * // Get one Tb_departamento
     * const tb_departamento = await prisma.tb_departamento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tb_departamentoFindFirstOrThrowArgs>(args?: SelectSubset<T, tb_departamentoFindFirstOrThrowArgs<ExtArgs>>): Prisma__tb_departamentoClient<$Result.GetResult<Prisma.$tb_departamentoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tb_departamentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_departamentoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tb_departamentos
     * const tb_departamentos = await prisma.tb_departamento.findMany()
     * 
     * // Get first 10 Tb_departamentos
     * const tb_departamentos = await prisma.tb_departamento.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tb_departamentoWithIdOnly = await prisma.tb_departamento.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tb_departamentoFindManyArgs>(args?: SelectSubset<T, tb_departamentoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_departamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tb_departamento.
     * @param {tb_departamentoCreateArgs} args - Arguments to create a Tb_departamento.
     * @example
     * // Create one Tb_departamento
     * const Tb_departamento = await prisma.tb_departamento.create({
     *   data: {
     *     // ... data to create a Tb_departamento
     *   }
     * })
     * 
     */
    create<T extends tb_departamentoCreateArgs>(args: SelectSubset<T, tb_departamentoCreateArgs<ExtArgs>>): Prisma__tb_departamentoClient<$Result.GetResult<Prisma.$tb_departamentoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tb_departamentos.
     * @param {tb_departamentoCreateManyArgs} args - Arguments to create many Tb_departamentos.
     * @example
     * // Create many Tb_departamentos
     * const tb_departamento = await prisma.tb_departamento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tb_departamentoCreateManyArgs>(args?: SelectSubset<T, tb_departamentoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tb_departamento.
     * @param {tb_departamentoDeleteArgs} args - Arguments to delete one Tb_departamento.
     * @example
     * // Delete one Tb_departamento
     * const Tb_departamento = await prisma.tb_departamento.delete({
     *   where: {
     *     // ... filter to delete one Tb_departamento
     *   }
     * })
     * 
     */
    delete<T extends tb_departamentoDeleteArgs>(args: SelectSubset<T, tb_departamentoDeleteArgs<ExtArgs>>): Prisma__tb_departamentoClient<$Result.GetResult<Prisma.$tb_departamentoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tb_departamento.
     * @param {tb_departamentoUpdateArgs} args - Arguments to update one Tb_departamento.
     * @example
     * // Update one Tb_departamento
     * const tb_departamento = await prisma.tb_departamento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tb_departamentoUpdateArgs>(args: SelectSubset<T, tb_departamentoUpdateArgs<ExtArgs>>): Prisma__tb_departamentoClient<$Result.GetResult<Prisma.$tb_departamentoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tb_departamentos.
     * @param {tb_departamentoDeleteManyArgs} args - Arguments to filter Tb_departamentos to delete.
     * @example
     * // Delete a few Tb_departamentos
     * const { count } = await prisma.tb_departamento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tb_departamentoDeleteManyArgs>(args?: SelectSubset<T, tb_departamentoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tb_departamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_departamentoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tb_departamentos
     * const tb_departamento = await prisma.tb_departamento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tb_departamentoUpdateManyArgs>(args: SelectSubset<T, tb_departamentoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tb_departamento.
     * @param {tb_departamentoUpsertArgs} args - Arguments to update or create a Tb_departamento.
     * @example
     * // Update or create a Tb_departamento
     * const tb_departamento = await prisma.tb_departamento.upsert({
     *   create: {
     *     // ... data to create a Tb_departamento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tb_departamento we want to update
     *   }
     * })
     */
    upsert<T extends tb_departamentoUpsertArgs>(args: SelectSubset<T, tb_departamentoUpsertArgs<ExtArgs>>): Prisma__tb_departamentoClient<$Result.GetResult<Prisma.$tb_departamentoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tb_departamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_departamentoCountArgs} args - Arguments to filter Tb_departamentos to count.
     * @example
     * // Count the number of Tb_departamentos
     * const count = await prisma.tb_departamento.count({
     *   where: {
     *     // ... the filter for the Tb_departamentos we want to count
     *   }
     * })
    **/
    count<T extends tb_departamentoCountArgs>(
      args?: Subset<T, tb_departamentoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tb_departamentoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tb_departamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tb_departamentoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Tb_departamentoAggregateArgs>(args: Subset<T, Tb_departamentoAggregateArgs>): Prisma.PrismaPromise<GetTb_departamentoAggregateType<T>>

    /**
     * Group by Tb_departamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_departamentoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tb_departamentoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tb_departamentoGroupByArgs['orderBy'] }
        : { orderBy?: tb_departamentoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tb_departamentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTb_departamentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tb_departamento model
   */
  readonly fields: tb_departamentoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tb_departamento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tb_departamentoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tb_departamento model
   */
  interface tb_departamentoFieldRefs {
    readonly id: FieldRef<"tb_departamento", 'Int'>
    readonly nombre: FieldRef<"tb_departamento", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tb_departamento findUnique
   */
  export type tb_departamentoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_departamento
     */
    select?: tb_departamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_departamento
     */
    omit?: tb_departamentoOmit<ExtArgs> | null
    /**
     * Filter, which tb_departamento to fetch.
     */
    where: tb_departamentoWhereUniqueInput
  }

  /**
   * tb_departamento findUniqueOrThrow
   */
  export type tb_departamentoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_departamento
     */
    select?: tb_departamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_departamento
     */
    omit?: tb_departamentoOmit<ExtArgs> | null
    /**
     * Filter, which tb_departamento to fetch.
     */
    where: tb_departamentoWhereUniqueInput
  }

  /**
   * tb_departamento findFirst
   */
  export type tb_departamentoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_departamento
     */
    select?: tb_departamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_departamento
     */
    omit?: tb_departamentoOmit<ExtArgs> | null
    /**
     * Filter, which tb_departamento to fetch.
     */
    where?: tb_departamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_departamentos to fetch.
     */
    orderBy?: tb_departamentoOrderByWithRelationInput | tb_departamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_departamentos.
     */
    cursor?: tb_departamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_departamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_departamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_departamentos.
     */
    distinct?: Tb_departamentoScalarFieldEnum | Tb_departamentoScalarFieldEnum[]
  }

  /**
   * tb_departamento findFirstOrThrow
   */
  export type tb_departamentoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_departamento
     */
    select?: tb_departamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_departamento
     */
    omit?: tb_departamentoOmit<ExtArgs> | null
    /**
     * Filter, which tb_departamento to fetch.
     */
    where?: tb_departamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_departamentos to fetch.
     */
    orderBy?: tb_departamentoOrderByWithRelationInput | tb_departamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_departamentos.
     */
    cursor?: tb_departamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_departamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_departamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_departamentos.
     */
    distinct?: Tb_departamentoScalarFieldEnum | Tb_departamentoScalarFieldEnum[]
  }

  /**
   * tb_departamento findMany
   */
  export type tb_departamentoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_departamento
     */
    select?: tb_departamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_departamento
     */
    omit?: tb_departamentoOmit<ExtArgs> | null
    /**
     * Filter, which tb_departamentos to fetch.
     */
    where?: tb_departamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_departamentos to fetch.
     */
    orderBy?: tb_departamentoOrderByWithRelationInput | tb_departamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tb_departamentos.
     */
    cursor?: tb_departamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_departamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_departamentos.
     */
    skip?: number
    distinct?: Tb_departamentoScalarFieldEnum | Tb_departamentoScalarFieldEnum[]
  }

  /**
   * tb_departamento create
   */
  export type tb_departamentoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_departamento
     */
    select?: tb_departamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_departamento
     */
    omit?: tb_departamentoOmit<ExtArgs> | null
    /**
     * The data needed to create a tb_departamento.
     */
    data?: XOR<tb_departamentoCreateInput, tb_departamentoUncheckedCreateInput>
  }

  /**
   * tb_departamento createMany
   */
  export type tb_departamentoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tb_departamentos.
     */
    data: tb_departamentoCreateManyInput | tb_departamentoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tb_departamento update
   */
  export type tb_departamentoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_departamento
     */
    select?: tb_departamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_departamento
     */
    omit?: tb_departamentoOmit<ExtArgs> | null
    /**
     * The data needed to update a tb_departamento.
     */
    data: XOR<tb_departamentoUpdateInput, tb_departamentoUncheckedUpdateInput>
    /**
     * Choose, which tb_departamento to update.
     */
    where: tb_departamentoWhereUniqueInput
  }

  /**
   * tb_departamento updateMany
   */
  export type tb_departamentoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tb_departamentos.
     */
    data: XOR<tb_departamentoUpdateManyMutationInput, tb_departamentoUncheckedUpdateManyInput>
    /**
     * Filter which tb_departamentos to update
     */
    where?: tb_departamentoWhereInput
    /**
     * Limit how many tb_departamentos to update.
     */
    limit?: number
  }

  /**
   * tb_departamento upsert
   */
  export type tb_departamentoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_departamento
     */
    select?: tb_departamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_departamento
     */
    omit?: tb_departamentoOmit<ExtArgs> | null
    /**
     * The filter to search for the tb_departamento to update in case it exists.
     */
    where: tb_departamentoWhereUniqueInput
    /**
     * In case the tb_departamento found by the `where` argument doesn't exist, create a new tb_departamento with this data.
     */
    create: XOR<tb_departamentoCreateInput, tb_departamentoUncheckedCreateInput>
    /**
     * In case the tb_departamento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tb_departamentoUpdateInput, tb_departamentoUncheckedUpdateInput>
  }

  /**
   * tb_departamento delete
   */
  export type tb_departamentoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_departamento
     */
    select?: tb_departamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_departamento
     */
    omit?: tb_departamentoOmit<ExtArgs> | null
    /**
     * Filter which tb_departamento to delete.
     */
    where: tb_departamentoWhereUniqueInput
  }

  /**
   * tb_departamento deleteMany
   */
  export type tb_departamentoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_departamentos to delete
     */
    where?: tb_departamentoWhereInput
    /**
     * Limit how many tb_departamentos to delete.
     */
    limit?: number
  }

  /**
   * tb_departamento without action
   */
  export type tb_departamentoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_departamento
     */
    select?: tb_departamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_departamento
     */
    omit?: tb_departamentoOmit<ExtArgs> | null
  }


  /**
   * Model tb_deportistas
   */

  export type AggregateTb_deportistas = {
    _count: Tb_deportistasCountAggregateOutputType | null
    _avg: Tb_deportistasAvgAggregateOutputType | null
    _sum: Tb_deportistasSumAggregateOutputType | null
    _min: Tb_deportistasMinAggregateOutputType | null
    _max: Tb_deportistasMaxAggregateOutputType | null
  }

  export type Tb_deportistasAvgAggregateOutputType = {
    id: number | null
    id_tutor: number | null
    id_persona_club: number | null
    id_categoria: number | null
  }

  export type Tb_deportistasSumAggregateOutputType = {
    id: number | null
    id_tutor: number | null
    id_persona_club: number | null
    id_categoria: number | null
  }

  export type Tb_deportistasMinAggregateOutputType = {
    id: number | null
    id_tutor: number | null
    id_persona_club: number | null
    id_categoria: number | null
    activo: boolean | null
  }

  export type Tb_deportistasMaxAggregateOutputType = {
    id: number | null
    id_tutor: number | null
    id_persona_club: number | null
    id_categoria: number | null
    activo: boolean | null
  }

  export type Tb_deportistasCountAggregateOutputType = {
    id: number
    id_tutor: number
    id_persona_club: number
    id_categoria: number
    activo: number
    _all: number
  }


  export type Tb_deportistasAvgAggregateInputType = {
    id?: true
    id_tutor?: true
    id_persona_club?: true
    id_categoria?: true
  }

  export type Tb_deportistasSumAggregateInputType = {
    id?: true
    id_tutor?: true
    id_persona_club?: true
    id_categoria?: true
  }

  export type Tb_deportistasMinAggregateInputType = {
    id?: true
    id_tutor?: true
    id_persona_club?: true
    id_categoria?: true
    activo?: true
  }

  export type Tb_deportistasMaxAggregateInputType = {
    id?: true
    id_tutor?: true
    id_persona_club?: true
    id_categoria?: true
    activo?: true
  }

  export type Tb_deportistasCountAggregateInputType = {
    id?: true
    id_tutor?: true
    id_persona_club?: true
    id_categoria?: true
    activo?: true
    _all?: true
  }

  export type Tb_deportistasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_deportistas to aggregate.
     */
    where?: tb_deportistasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_deportistas to fetch.
     */
    orderBy?: tb_deportistasOrderByWithRelationInput | tb_deportistasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tb_deportistasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_deportistas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_deportistas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tb_deportistas
    **/
    _count?: true | Tb_deportistasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tb_deportistasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tb_deportistasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tb_deportistasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tb_deportistasMaxAggregateInputType
  }

  export type GetTb_deportistasAggregateType<T extends Tb_deportistasAggregateArgs> = {
        [P in keyof T & keyof AggregateTb_deportistas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTb_deportistas[P]>
      : GetScalarType<T[P], AggregateTb_deportistas[P]>
  }




  export type tb_deportistasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tb_deportistasWhereInput
    orderBy?: tb_deportistasOrderByWithAggregationInput | tb_deportistasOrderByWithAggregationInput[]
    by: Tb_deportistasScalarFieldEnum[] | Tb_deportistasScalarFieldEnum
    having?: tb_deportistasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tb_deportistasCountAggregateInputType | true
    _avg?: Tb_deportistasAvgAggregateInputType
    _sum?: Tb_deportistasSumAggregateInputType
    _min?: Tb_deportistasMinAggregateInputType
    _max?: Tb_deportistasMaxAggregateInputType
  }

  export type Tb_deportistasGroupByOutputType = {
    id: number
    id_tutor: number | null
    id_persona_club: number
    id_categoria: number | null
    activo: boolean | null
    _count: Tb_deportistasCountAggregateOutputType | null
    _avg: Tb_deportistasAvgAggregateOutputType | null
    _sum: Tb_deportistasSumAggregateOutputType | null
    _min: Tb_deportistasMinAggregateOutputType | null
    _max: Tb_deportistasMaxAggregateOutputType | null
  }

  type GetTb_deportistasGroupByPayload<T extends tb_deportistasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tb_deportistasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tb_deportistasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tb_deportistasGroupByOutputType[P]>
            : GetScalarType<T[P], Tb_deportistasGroupByOutputType[P]>
        }
      >
    >


  export type tb_deportistasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_tutor?: boolean
    id_persona_club?: boolean
    id_categoria?: boolean
    activo?: boolean
  }, ExtArgs["result"]["tb_deportistas"]>



  export type tb_deportistasSelectScalar = {
    id?: boolean
    id_tutor?: boolean
    id_persona_club?: boolean
    id_categoria?: boolean
    activo?: boolean
  }

  export type tb_deportistasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_tutor" | "id_persona_club" | "id_categoria" | "activo", ExtArgs["result"]["tb_deportistas"]>

  export type $tb_deportistasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tb_deportistas"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_tutor: number | null
      id_persona_club: number
      id_categoria: number | null
      activo: boolean | null
    }, ExtArgs["result"]["tb_deportistas"]>
    composites: {}
  }

  type tb_deportistasGetPayload<S extends boolean | null | undefined | tb_deportistasDefaultArgs> = $Result.GetResult<Prisma.$tb_deportistasPayload, S>

  type tb_deportistasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tb_deportistasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tb_deportistasCountAggregateInputType | true
    }

  export interface tb_deportistasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tb_deportistas'], meta: { name: 'tb_deportistas' } }
    /**
     * Find zero or one Tb_deportistas that matches the filter.
     * @param {tb_deportistasFindUniqueArgs} args - Arguments to find a Tb_deportistas
     * @example
     * // Get one Tb_deportistas
     * const tb_deportistas = await prisma.tb_deportistas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tb_deportistasFindUniqueArgs>(args: SelectSubset<T, tb_deportistasFindUniqueArgs<ExtArgs>>): Prisma__tb_deportistasClient<$Result.GetResult<Prisma.$tb_deportistasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tb_deportistas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tb_deportistasFindUniqueOrThrowArgs} args - Arguments to find a Tb_deportistas
     * @example
     * // Get one Tb_deportistas
     * const tb_deportistas = await prisma.tb_deportistas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tb_deportistasFindUniqueOrThrowArgs>(args: SelectSubset<T, tb_deportistasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tb_deportistasClient<$Result.GetResult<Prisma.$tb_deportistasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tb_deportistas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_deportistasFindFirstArgs} args - Arguments to find a Tb_deportistas
     * @example
     * // Get one Tb_deportistas
     * const tb_deportistas = await prisma.tb_deportistas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tb_deportistasFindFirstArgs>(args?: SelectSubset<T, tb_deportistasFindFirstArgs<ExtArgs>>): Prisma__tb_deportistasClient<$Result.GetResult<Prisma.$tb_deportistasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tb_deportistas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_deportistasFindFirstOrThrowArgs} args - Arguments to find a Tb_deportistas
     * @example
     * // Get one Tb_deportistas
     * const tb_deportistas = await prisma.tb_deportistas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tb_deportistasFindFirstOrThrowArgs>(args?: SelectSubset<T, tb_deportistasFindFirstOrThrowArgs<ExtArgs>>): Prisma__tb_deportistasClient<$Result.GetResult<Prisma.$tb_deportistasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tb_deportistas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_deportistasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tb_deportistas
     * const tb_deportistas = await prisma.tb_deportistas.findMany()
     * 
     * // Get first 10 Tb_deportistas
     * const tb_deportistas = await prisma.tb_deportistas.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tb_deportistasWithIdOnly = await prisma.tb_deportistas.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tb_deportistasFindManyArgs>(args?: SelectSubset<T, tb_deportistasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_deportistasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tb_deportistas.
     * @param {tb_deportistasCreateArgs} args - Arguments to create a Tb_deportistas.
     * @example
     * // Create one Tb_deportistas
     * const Tb_deportistas = await prisma.tb_deportistas.create({
     *   data: {
     *     // ... data to create a Tb_deportistas
     *   }
     * })
     * 
     */
    create<T extends tb_deportistasCreateArgs>(args: SelectSubset<T, tb_deportistasCreateArgs<ExtArgs>>): Prisma__tb_deportistasClient<$Result.GetResult<Prisma.$tb_deportistasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tb_deportistas.
     * @param {tb_deportistasCreateManyArgs} args - Arguments to create many Tb_deportistas.
     * @example
     * // Create many Tb_deportistas
     * const tb_deportistas = await prisma.tb_deportistas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tb_deportistasCreateManyArgs>(args?: SelectSubset<T, tb_deportistasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tb_deportistas.
     * @param {tb_deportistasDeleteArgs} args - Arguments to delete one Tb_deportistas.
     * @example
     * // Delete one Tb_deportistas
     * const Tb_deportistas = await prisma.tb_deportistas.delete({
     *   where: {
     *     // ... filter to delete one Tb_deportistas
     *   }
     * })
     * 
     */
    delete<T extends tb_deportistasDeleteArgs>(args: SelectSubset<T, tb_deportistasDeleteArgs<ExtArgs>>): Prisma__tb_deportistasClient<$Result.GetResult<Prisma.$tb_deportistasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tb_deportistas.
     * @param {tb_deportistasUpdateArgs} args - Arguments to update one Tb_deportistas.
     * @example
     * // Update one Tb_deportistas
     * const tb_deportistas = await prisma.tb_deportistas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tb_deportistasUpdateArgs>(args: SelectSubset<T, tb_deportistasUpdateArgs<ExtArgs>>): Prisma__tb_deportistasClient<$Result.GetResult<Prisma.$tb_deportistasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tb_deportistas.
     * @param {tb_deportistasDeleteManyArgs} args - Arguments to filter Tb_deportistas to delete.
     * @example
     * // Delete a few Tb_deportistas
     * const { count } = await prisma.tb_deportistas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tb_deportistasDeleteManyArgs>(args?: SelectSubset<T, tb_deportistasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tb_deportistas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_deportistasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tb_deportistas
     * const tb_deportistas = await prisma.tb_deportistas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tb_deportistasUpdateManyArgs>(args: SelectSubset<T, tb_deportistasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tb_deportistas.
     * @param {tb_deportistasUpsertArgs} args - Arguments to update or create a Tb_deportistas.
     * @example
     * // Update or create a Tb_deportistas
     * const tb_deportistas = await prisma.tb_deportistas.upsert({
     *   create: {
     *     // ... data to create a Tb_deportistas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tb_deportistas we want to update
     *   }
     * })
     */
    upsert<T extends tb_deportistasUpsertArgs>(args: SelectSubset<T, tb_deportistasUpsertArgs<ExtArgs>>): Prisma__tb_deportistasClient<$Result.GetResult<Prisma.$tb_deportistasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tb_deportistas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_deportistasCountArgs} args - Arguments to filter Tb_deportistas to count.
     * @example
     * // Count the number of Tb_deportistas
     * const count = await prisma.tb_deportistas.count({
     *   where: {
     *     // ... the filter for the Tb_deportistas we want to count
     *   }
     * })
    **/
    count<T extends tb_deportistasCountArgs>(
      args?: Subset<T, tb_deportistasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tb_deportistasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tb_deportistas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tb_deportistasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Tb_deportistasAggregateArgs>(args: Subset<T, Tb_deportistasAggregateArgs>): Prisma.PrismaPromise<GetTb_deportistasAggregateType<T>>

    /**
     * Group by Tb_deportistas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_deportistasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tb_deportistasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tb_deportistasGroupByArgs['orderBy'] }
        : { orderBy?: tb_deportistasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tb_deportistasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTb_deportistasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tb_deportistas model
   */
  readonly fields: tb_deportistasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tb_deportistas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tb_deportistasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tb_deportistas model
   */
  interface tb_deportistasFieldRefs {
    readonly id: FieldRef<"tb_deportistas", 'Int'>
    readonly id_tutor: FieldRef<"tb_deportistas", 'Int'>
    readonly id_persona_club: FieldRef<"tb_deportistas", 'Int'>
    readonly id_categoria: FieldRef<"tb_deportistas", 'Int'>
    readonly activo: FieldRef<"tb_deportistas", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * tb_deportistas findUnique
   */
  export type tb_deportistasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_deportistas
     */
    select?: tb_deportistasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_deportistas
     */
    omit?: tb_deportistasOmit<ExtArgs> | null
    /**
     * Filter, which tb_deportistas to fetch.
     */
    where: tb_deportistasWhereUniqueInput
  }

  /**
   * tb_deportistas findUniqueOrThrow
   */
  export type tb_deportistasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_deportistas
     */
    select?: tb_deportistasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_deportistas
     */
    omit?: tb_deportistasOmit<ExtArgs> | null
    /**
     * Filter, which tb_deportistas to fetch.
     */
    where: tb_deportistasWhereUniqueInput
  }

  /**
   * tb_deportistas findFirst
   */
  export type tb_deportistasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_deportistas
     */
    select?: tb_deportistasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_deportistas
     */
    omit?: tb_deportistasOmit<ExtArgs> | null
    /**
     * Filter, which tb_deportistas to fetch.
     */
    where?: tb_deportistasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_deportistas to fetch.
     */
    orderBy?: tb_deportistasOrderByWithRelationInput | tb_deportistasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_deportistas.
     */
    cursor?: tb_deportistasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_deportistas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_deportistas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_deportistas.
     */
    distinct?: Tb_deportistasScalarFieldEnum | Tb_deportistasScalarFieldEnum[]
  }

  /**
   * tb_deportistas findFirstOrThrow
   */
  export type tb_deportistasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_deportistas
     */
    select?: tb_deportistasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_deportistas
     */
    omit?: tb_deportistasOmit<ExtArgs> | null
    /**
     * Filter, which tb_deportistas to fetch.
     */
    where?: tb_deportistasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_deportistas to fetch.
     */
    orderBy?: tb_deportistasOrderByWithRelationInput | tb_deportistasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_deportistas.
     */
    cursor?: tb_deportistasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_deportistas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_deportistas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_deportistas.
     */
    distinct?: Tb_deportistasScalarFieldEnum | Tb_deportistasScalarFieldEnum[]
  }

  /**
   * tb_deportistas findMany
   */
  export type tb_deportistasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_deportistas
     */
    select?: tb_deportistasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_deportistas
     */
    omit?: tb_deportistasOmit<ExtArgs> | null
    /**
     * Filter, which tb_deportistas to fetch.
     */
    where?: tb_deportistasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_deportistas to fetch.
     */
    orderBy?: tb_deportistasOrderByWithRelationInput | tb_deportistasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tb_deportistas.
     */
    cursor?: tb_deportistasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_deportistas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_deportistas.
     */
    skip?: number
    distinct?: Tb_deportistasScalarFieldEnum | Tb_deportistasScalarFieldEnum[]
  }

  /**
   * tb_deportistas create
   */
  export type tb_deportistasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_deportistas
     */
    select?: tb_deportistasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_deportistas
     */
    omit?: tb_deportistasOmit<ExtArgs> | null
    /**
     * The data needed to create a tb_deportistas.
     */
    data: XOR<tb_deportistasCreateInput, tb_deportistasUncheckedCreateInput>
  }

  /**
   * tb_deportistas createMany
   */
  export type tb_deportistasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tb_deportistas.
     */
    data: tb_deportistasCreateManyInput | tb_deportistasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tb_deportistas update
   */
  export type tb_deportistasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_deportistas
     */
    select?: tb_deportistasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_deportistas
     */
    omit?: tb_deportistasOmit<ExtArgs> | null
    /**
     * The data needed to update a tb_deportistas.
     */
    data: XOR<tb_deportistasUpdateInput, tb_deportistasUncheckedUpdateInput>
    /**
     * Choose, which tb_deportistas to update.
     */
    where: tb_deportistasWhereUniqueInput
  }

  /**
   * tb_deportistas updateMany
   */
  export type tb_deportistasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tb_deportistas.
     */
    data: XOR<tb_deportistasUpdateManyMutationInput, tb_deportistasUncheckedUpdateManyInput>
    /**
     * Filter which tb_deportistas to update
     */
    where?: tb_deportistasWhereInput
    /**
     * Limit how many tb_deportistas to update.
     */
    limit?: number
  }

  /**
   * tb_deportistas upsert
   */
  export type tb_deportistasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_deportistas
     */
    select?: tb_deportistasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_deportistas
     */
    omit?: tb_deportistasOmit<ExtArgs> | null
    /**
     * The filter to search for the tb_deportistas to update in case it exists.
     */
    where: tb_deportistasWhereUniqueInput
    /**
     * In case the tb_deportistas found by the `where` argument doesn't exist, create a new tb_deportistas with this data.
     */
    create: XOR<tb_deportistasCreateInput, tb_deportistasUncheckedCreateInput>
    /**
     * In case the tb_deportistas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tb_deportistasUpdateInput, tb_deportistasUncheckedUpdateInput>
  }

  /**
   * tb_deportistas delete
   */
  export type tb_deportistasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_deportistas
     */
    select?: tb_deportistasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_deportistas
     */
    omit?: tb_deportistasOmit<ExtArgs> | null
    /**
     * Filter which tb_deportistas to delete.
     */
    where: tb_deportistasWhereUniqueInput
  }

  /**
   * tb_deportistas deleteMany
   */
  export type tb_deportistasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_deportistas to delete
     */
    where?: tb_deportistasWhereInput
    /**
     * Limit how many tb_deportistas to delete.
     */
    limit?: number
  }

  /**
   * tb_deportistas without action
   */
  export type tb_deportistasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_deportistas
     */
    select?: tb_deportistasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_deportistas
     */
    omit?: tb_deportistasOmit<ExtArgs> | null
  }


  /**
   * Model tb_desercion_deportistas
   */

  export type AggregateTb_desercion_deportistas = {
    _count: Tb_desercion_deportistasCountAggregateOutputType | null
    _avg: Tb_desercion_deportistasAvgAggregateOutputType | null
    _sum: Tb_desercion_deportistasSumAggregateOutputType | null
    _min: Tb_desercion_deportistasMinAggregateOutputType | null
    _max: Tb_desercion_deportistasMaxAggregateOutputType | null
  }

  export type Tb_desercion_deportistasAvgAggregateOutputType = {
    id: number | null
    id_deportista: number | null
  }

  export type Tb_desercion_deportistasSumAggregateOutputType = {
    id: number | null
    id_deportista: number | null
  }

  export type Tb_desercion_deportistasMinAggregateOutputType = {
    id: number | null
    id_deportista: number | null
    fecha_desercion: Date | null
    razon: string | null
    descripcion: string | null
  }

  export type Tb_desercion_deportistasMaxAggregateOutputType = {
    id: number | null
    id_deportista: number | null
    fecha_desercion: Date | null
    razon: string | null
    descripcion: string | null
  }

  export type Tb_desercion_deportistasCountAggregateOutputType = {
    id: number
    id_deportista: number
    fecha_desercion: number
    razon: number
    descripcion: number
    _all: number
  }


  export type Tb_desercion_deportistasAvgAggregateInputType = {
    id?: true
    id_deportista?: true
  }

  export type Tb_desercion_deportistasSumAggregateInputType = {
    id?: true
    id_deportista?: true
  }

  export type Tb_desercion_deportistasMinAggregateInputType = {
    id?: true
    id_deportista?: true
    fecha_desercion?: true
    razon?: true
    descripcion?: true
  }

  export type Tb_desercion_deportistasMaxAggregateInputType = {
    id?: true
    id_deportista?: true
    fecha_desercion?: true
    razon?: true
    descripcion?: true
  }

  export type Tb_desercion_deportistasCountAggregateInputType = {
    id?: true
    id_deportista?: true
    fecha_desercion?: true
    razon?: true
    descripcion?: true
    _all?: true
  }

  export type Tb_desercion_deportistasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_desercion_deportistas to aggregate.
     */
    where?: tb_desercion_deportistasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_desercion_deportistas to fetch.
     */
    orderBy?: tb_desercion_deportistasOrderByWithRelationInput | tb_desercion_deportistasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tb_desercion_deportistasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_desercion_deportistas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_desercion_deportistas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tb_desercion_deportistas
    **/
    _count?: true | Tb_desercion_deportistasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tb_desercion_deportistasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tb_desercion_deportistasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tb_desercion_deportistasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tb_desercion_deportistasMaxAggregateInputType
  }

  export type GetTb_desercion_deportistasAggregateType<T extends Tb_desercion_deportistasAggregateArgs> = {
        [P in keyof T & keyof AggregateTb_desercion_deportistas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTb_desercion_deportistas[P]>
      : GetScalarType<T[P], AggregateTb_desercion_deportistas[P]>
  }




  export type tb_desercion_deportistasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tb_desercion_deportistasWhereInput
    orderBy?: tb_desercion_deportistasOrderByWithAggregationInput | tb_desercion_deportistasOrderByWithAggregationInput[]
    by: Tb_desercion_deportistasScalarFieldEnum[] | Tb_desercion_deportistasScalarFieldEnum
    having?: tb_desercion_deportistasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tb_desercion_deportistasCountAggregateInputType | true
    _avg?: Tb_desercion_deportistasAvgAggregateInputType
    _sum?: Tb_desercion_deportistasSumAggregateInputType
    _min?: Tb_desercion_deportistasMinAggregateInputType
    _max?: Tb_desercion_deportistasMaxAggregateInputType
  }

  export type Tb_desercion_deportistasGroupByOutputType = {
    id: number
    id_deportista: number
    fecha_desercion: Date | null
    razon: string | null
    descripcion: string | null
    _count: Tb_desercion_deportistasCountAggregateOutputType | null
    _avg: Tb_desercion_deportistasAvgAggregateOutputType | null
    _sum: Tb_desercion_deportistasSumAggregateOutputType | null
    _min: Tb_desercion_deportistasMinAggregateOutputType | null
    _max: Tb_desercion_deportistasMaxAggregateOutputType | null
  }

  type GetTb_desercion_deportistasGroupByPayload<T extends tb_desercion_deportistasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tb_desercion_deportistasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tb_desercion_deportistasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tb_desercion_deportistasGroupByOutputType[P]>
            : GetScalarType<T[P], Tb_desercion_deportistasGroupByOutputType[P]>
        }
      >
    >


  export type tb_desercion_deportistasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_deportista?: boolean
    fecha_desercion?: boolean
    razon?: boolean
    descripcion?: boolean
  }, ExtArgs["result"]["tb_desercion_deportistas"]>



  export type tb_desercion_deportistasSelectScalar = {
    id?: boolean
    id_deportista?: boolean
    fecha_desercion?: boolean
    razon?: boolean
    descripcion?: boolean
  }

  export type tb_desercion_deportistasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_deportista" | "fecha_desercion" | "razon" | "descripcion", ExtArgs["result"]["tb_desercion_deportistas"]>

  export type $tb_desercion_deportistasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tb_desercion_deportistas"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_deportista: number
      fecha_desercion: Date | null
      razon: string | null
      descripcion: string | null
    }, ExtArgs["result"]["tb_desercion_deportistas"]>
    composites: {}
  }

  type tb_desercion_deportistasGetPayload<S extends boolean | null | undefined | tb_desercion_deportistasDefaultArgs> = $Result.GetResult<Prisma.$tb_desercion_deportistasPayload, S>

  type tb_desercion_deportistasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tb_desercion_deportistasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tb_desercion_deportistasCountAggregateInputType | true
    }

  export interface tb_desercion_deportistasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tb_desercion_deportistas'], meta: { name: 'tb_desercion_deportistas' } }
    /**
     * Find zero or one Tb_desercion_deportistas that matches the filter.
     * @param {tb_desercion_deportistasFindUniqueArgs} args - Arguments to find a Tb_desercion_deportistas
     * @example
     * // Get one Tb_desercion_deportistas
     * const tb_desercion_deportistas = await prisma.tb_desercion_deportistas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tb_desercion_deportistasFindUniqueArgs>(args: SelectSubset<T, tb_desercion_deportistasFindUniqueArgs<ExtArgs>>): Prisma__tb_desercion_deportistasClient<$Result.GetResult<Prisma.$tb_desercion_deportistasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tb_desercion_deportistas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tb_desercion_deportistasFindUniqueOrThrowArgs} args - Arguments to find a Tb_desercion_deportistas
     * @example
     * // Get one Tb_desercion_deportistas
     * const tb_desercion_deportistas = await prisma.tb_desercion_deportistas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tb_desercion_deportistasFindUniqueOrThrowArgs>(args: SelectSubset<T, tb_desercion_deportistasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tb_desercion_deportistasClient<$Result.GetResult<Prisma.$tb_desercion_deportistasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tb_desercion_deportistas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_desercion_deportistasFindFirstArgs} args - Arguments to find a Tb_desercion_deportistas
     * @example
     * // Get one Tb_desercion_deportistas
     * const tb_desercion_deportistas = await prisma.tb_desercion_deportistas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tb_desercion_deportistasFindFirstArgs>(args?: SelectSubset<T, tb_desercion_deportistasFindFirstArgs<ExtArgs>>): Prisma__tb_desercion_deportistasClient<$Result.GetResult<Prisma.$tb_desercion_deportistasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tb_desercion_deportistas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_desercion_deportistasFindFirstOrThrowArgs} args - Arguments to find a Tb_desercion_deportistas
     * @example
     * // Get one Tb_desercion_deportistas
     * const tb_desercion_deportistas = await prisma.tb_desercion_deportistas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tb_desercion_deportistasFindFirstOrThrowArgs>(args?: SelectSubset<T, tb_desercion_deportistasFindFirstOrThrowArgs<ExtArgs>>): Prisma__tb_desercion_deportistasClient<$Result.GetResult<Prisma.$tb_desercion_deportistasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tb_desercion_deportistas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_desercion_deportistasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tb_desercion_deportistas
     * const tb_desercion_deportistas = await prisma.tb_desercion_deportistas.findMany()
     * 
     * // Get first 10 Tb_desercion_deportistas
     * const tb_desercion_deportistas = await prisma.tb_desercion_deportistas.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tb_desercion_deportistasWithIdOnly = await prisma.tb_desercion_deportistas.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tb_desercion_deportistasFindManyArgs>(args?: SelectSubset<T, tb_desercion_deportistasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_desercion_deportistasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tb_desercion_deportistas.
     * @param {tb_desercion_deportistasCreateArgs} args - Arguments to create a Tb_desercion_deportistas.
     * @example
     * // Create one Tb_desercion_deportistas
     * const Tb_desercion_deportistas = await prisma.tb_desercion_deportistas.create({
     *   data: {
     *     // ... data to create a Tb_desercion_deportistas
     *   }
     * })
     * 
     */
    create<T extends tb_desercion_deportistasCreateArgs>(args: SelectSubset<T, tb_desercion_deportistasCreateArgs<ExtArgs>>): Prisma__tb_desercion_deportistasClient<$Result.GetResult<Prisma.$tb_desercion_deportistasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tb_desercion_deportistas.
     * @param {tb_desercion_deportistasCreateManyArgs} args - Arguments to create many Tb_desercion_deportistas.
     * @example
     * // Create many Tb_desercion_deportistas
     * const tb_desercion_deportistas = await prisma.tb_desercion_deportistas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tb_desercion_deportistasCreateManyArgs>(args?: SelectSubset<T, tb_desercion_deportistasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tb_desercion_deportistas.
     * @param {tb_desercion_deportistasDeleteArgs} args - Arguments to delete one Tb_desercion_deportistas.
     * @example
     * // Delete one Tb_desercion_deportistas
     * const Tb_desercion_deportistas = await prisma.tb_desercion_deportistas.delete({
     *   where: {
     *     // ... filter to delete one Tb_desercion_deportistas
     *   }
     * })
     * 
     */
    delete<T extends tb_desercion_deportistasDeleteArgs>(args: SelectSubset<T, tb_desercion_deportistasDeleteArgs<ExtArgs>>): Prisma__tb_desercion_deportistasClient<$Result.GetResult<Prisma.$tb_desercion_deportistasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tb_desercion_deportistas.
     * @param {tb_desercion_deportistasUpdateArgs} args - Arguments to update one Tb_desercion_deportistas.
     * @example
     * // Update one Tb_desercion_deportistas
     * const tb_desercion_deportistas = await prisma.tb_desercion_deportistas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tb_desercion_deportistasUpdateArgs>(args: SelectSubset<T, tb_desercion_deportistasUpdateArgs<ExtArgs>>): Prisma__tb_desercion_deportistasClient<$Result.GetResult<Prisma.$tb_desercion_deportistasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tb_desercion_deportistas.
     * @param {tb_desercion_deportistasDeleteManyArgs} args - Arguments to filter Tb_desercion_deportistas to delete.
     * @example
     * // Delete a few Tb_desercion_deportistas
     * const { count } = await prisma.tb_desercion_deportistas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tb_desercion_deportistasDeleteManyArgs>(args?: SelectSubset<T, tb_desercion_deportistasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tb_desercion_deportistas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_desercion_deportistasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tb_desercion_deportistas
     * const tb_desercion_deportistas = await prisma.tb_desercion_deportistas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tb_desercion_deportistasUpdateManyArgs>(args: SelectSubset<T, tb_desercion_deportistasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tb_desercion_deportistas.
     * @param {tb_desercion_deportistasUpsertArgs} args - Arguments to update or create a Tb_desercion_deportistas.
     * @example
     * // Update or create a Tb_desercion_deportistas
     * const tb_desercion_deportistas = await prisma.tb_desercion_deportistas.upsert({
     *   create: {
     *     // ... data to create a Tb_desercion_deportistas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tb_desercion_deportistas we want to update
     *   }
     * })
     */
    upsert<T extends tb_desercion_deportistasUpsertArgs>(args: SelectSubset<T, tb_desercion_deportistasUpsertArgs<ExtArgs>>): Prisma__tb_desercion_deportistasClient<$Result.GetResult<Prisma.$tb_desercion_deportistasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tb_desercion_deportistas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_desercion_deportistasCountArgs} args - Arguments to filter Tb_desercion_deportistas to count.
     * @example
     * // Count the number of Tb_desercion_deportistas
     * const count = await prisma.tb_desercion_deportistas.count({
     *   where: {
     *     // ... the filter for the Tb_desercion_deportistas we want to count
     *   }
     * })
    **/
    count<T extends tb_desercion_deportistasCountArgs>(
      args?: Subset<T, tb_desercion_deportistasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tb_desercion_deportistasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tb_desercion_deportistas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tb_desercion_deportistasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Tb_desercion_deportistasAggregateArgs>(args: Subset<T, Tb_desercion_deportistasAggregateArgs>): Prisma.PrismaPromise<GetTb_desercion_deportistasAggregateType<T>>

    /**
     * Group by Tb_desercion_deportistas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_desercion_deportistasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tb_desercion_deportistasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tb_desercion_deportistasGroupByArgs['orderBy'] }
        : { orderBy?: tb_desercion_deportistasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tb_desercion_deportistasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTb_desercion_deportistasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tb_desercion_deportistas model
   */
  readonly fields: tb_desercion_deportistasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tb_desercion_deportistas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tb_desercion_deportistasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tb_desercion_deportistas model
   */
  interface tb_desercion_deportistasFieldRefs {
    readonly id: FieldRef<"tb_desercion_deportistas", 'Int'>
    readonly id_deportista: FieldRef<"tb_desercion_deportistas", 'Int'>
    readonly fecha_desercion: FieldRef<"tb_desercion_deportistas", 'DateTime'>
    readonly razon: FieldRef<"tb_desercion_deportistas", 'String'>
    readonly descripcion: FieldRef<"tb_desercion_deportistas", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tb_desercion_deportistas findUnique
   */
  export type tb_desercion_deportistasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_desercion_deportistas
     */
    select?: tb_desercion_deportistasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_desercion_deportistas
     */
    omit?: tb_desercion_deportistasOmit<ExtArgs> | null
    /**
     * Filter, which tb_desercion_deportistas to fetch.
     */
    where: tb_desercion_deportistasWhereUniqueInput
  }

  /**
   * tb_desercion_deportistas findUniqueOrThrow
   */
  export type tb_desercion_deportistasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_desercion_deportistas
     */
    select?: tb_desercion_deportistasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_desercion_deportistas
     */
    omit?: tb_desercion_deportistasOmit<ExtArgs> | null
    /**
     * Filter, which tb_desercion_deportistas to fetch.
     */
    where: tb_desercion_deportistasWhereUniqueInput
  }

  /**
   * tb_desercion_deportistas findFirst
   */
  export type tb_desercion_deportistasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_desercion_deportistas
     */
    select?: tb_desercion_deportistasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_desercion_deportistas
     */
    omit?: tb_desercion_deportistasOmit<ExtArgs> | null
    /**
     * Filter, which tb_desercion_deportistas to fetch.
     */
    where?: tb_desercion_deportistasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_desercion_deportistas to fetch.
     */
    orderBy?: tb_desercion_deportistasOrderByWithRelationInput | tb_desercion_deportistasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_desercion_deportistas.
     */
    cursor?: tb_desercion_deportistasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_desercion_deportistas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_desercion_deportistas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_desercion_deportistas.
     */
    distinct?: Tb_desercion_deportistasScalarFieldEnum | Tb_desercion_deportistasScalarFieldEnum[]
  }

  /**
   * tb_desercion_deportistas findFirstOrThrow
   */
  export type tb_desercion_deportistasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_desercion_deportistas
     */
    select?: tb_desercion_deportistasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_desercion_deportistas
     */
    omit?: tb_desercion_deportistasOmit<ExtArgs> | null
    /**
     * Filter, which tb_desercion_deportistas to fetch.
     */
    where?: tb_desercion_deportistasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_desercion_deportistas to fetch.
     */
    orderBy?: tb_desercion_deportistasOrderByWithRelationInput | tb_desercion_deportistasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_desercion_deportistas.
     */
    cursor?: tb_desercion_deportistasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_desercion_deportistas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_desercion_deportistas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_desercion_deportistas.
     */
    distinct?: Tb_desercion_deportistasScalarFieldEnum | Tb_desercion_deportistasScalarFieldEnum[]
  }

  /**
   * tb_desercion_deportistas findMany
   */
  export type tb_desercion_deportistasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_desercion_deportistas
     */
    select?: tb_desercion_deportistasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_desercion_deportistas
     */
    omit?: tb_desercion_deportistasOmit<ExtArgs> | null
    /**
     * Filter, which tb_desercion_deportistas to fetch.
     */
    where?: tb_desercion_deportistasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_desercion_deportistas to fetch.
     */
    orderBy?: tb_desercion_deportistasOrderByWithRelationInput | tb_desercion_deportistasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tb_desercion_deportistas.
     */
    cursor?: tb_desercion_deportistasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_desercion_deportistas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_desercion_deportistas.
     */
    skip?: number
    distinct?: Tb_desercion_deportistasScalarFieldEnum | Tb_desercion_deportistasScalarFieldEnum[]
  }

  /**
   * tb_desercion_deportistas create
   */
  export type tb_desercion_deportistasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_desercion_deportistas
     */
    select?: tb_desercion_deportistasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_desercion_deportistas
     */
    omit?: tb_desercion_deportistasOmit<ExtArgs> | null
    /**
     * The data needed to create a tb_desercion_deportistas.
     */
    data: XOR<tb_desercion_deportistasCreateInput, tb_desercion_deportistasUncheckedCreateInput>
  }

  /**
   * tb_desercion_deportistas createMany
   */
  export type tb_desercion_deportistasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tb_desercion_deportistas.
     */
    data: tb_desercion_deportistasCreateManyInput | tb_desercion_deportistasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tb_desercion_deportistas update
   */
  export type tb_desercion_deportistasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_desercion_deportistas
     */
    select?: tb_desercion_deportistasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_desercion_deportistas
     */
    omit?: tb_desercion_deportistasOmit<ExtArgs> | null
    /**
     * The data needed to update a tb_desercion_deportistas.
     */
    data: XOR<tb_desercion_deportistasUpdateInput, tb_desercion_deportistasUncheckedUpdateInput>
    /**
     * Choose, which tb_desercion_deportistas to update.
     */
    where: tb_desercion_deportistasWhereUniqueInput
  }

  /**
   * tb_desercion_deportistas updateMany
   */
  export type tb_desercion_deportistasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tb_desercion_deportistas.
     */
    data: XOR<tb_desercion_deportistasUpdateManyMutationInput, tb_desercion_deportistasUncheckedUpdateManyInput>
    /**
     * Filter which tb_desercion_deportistas to update
     */
    where?: tb_desercion_deportistasWhereInput
    /**
     * Limit how many tb_desercion_deportistas to update.
     */
    limit?: number
  }

  /**
   * tb_desercion_deportistas upsert
   */
  export type tb_desercion_deportistasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_desercion_deportistas
     */
    select?: tb_desercion_deportistasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_desercion_deportistas
     */
    omit?: tb_desercion_deportistasOmit<ExtArgs> | null
    /**
     * The filter to search for the tb_desercion_deportistas to update in case it exists.
     */
    where: tb_desercion_deportistasWhereUniqueInput
    /**
     * In case the tb_desercion_deportistas found by the `where` argument doesn't exist, create a new tb_desercion_deportistas with this data.
     */
    create: XOR<tb_desercion_deportistasCreateInput, tb_desercion_deportistasUncheckedCreateInput>
    /**
     * In case the tb_desercion_deportistas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tb_desercion_deportistasUpdateInput, tb_desercion_deportistasUncheckedUpdateInput>
  }

  /**
   * tb_desercion_deportistas delete
   */
  export type tb_desercion_deportistasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_desercion_deportistas
     */
    select?: tb_desercion_deportistasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_desercion_deportistas
     */
    omit?: tb_desercion_deportistasOmit<ExtArgs> | null
    /**
     * Filter which tb_desercion_deportistas to delete.
     */
    where: tb_desercion_deportistasWhereUniqueInput
  }

  /**
   * tb_desercion_deportistas deleteMany
   */
  export type tb_desercion_deportistasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_desercion_deportistas to delete
     */
    where?: tb_desercion_deportistasWhereInput
    /**
     * Limit how many tb_desercion_deportistas to delete.
     */
    limit?: number
  }

  /**
   * tb_desercion_deportistas without action
   */
  export type tb_desercion_deportistasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_desercion_deportistas
     */
    select?: tb_desercion_deportistasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_desercion_deportistas
     */
    omit?: tb_desercion_deportistasOmit<ExtArgs> | null
  }


  /**
   * Model tb_entrenadores
   */

  export type AggregateTb_entrenadores = {
    _count: Tb_entrenadoresCountAggregateOutputType | null
    _avg: Tb_entrenadoresAvgAggregateOutputType | null
    _sum: Tb_entrenadoresSumAggregateOutputType | null
    _min: Tb_entrenadoresMinAggregateOutputType | null
    _max: Tb_entrenadoresMaxAggregateOutputType | null
  }

  export type Tb_entrenadoresAvgAggregateOutputType = {
    id: number | null
    id_persona_club: number | null
  }

  export type Tb_entrenadoresSumAggregateOutputType = {
    id: number | null
    id_persona_club: number | null
  }

  export type Tb_entrenadoresMinAggregateOutputType = {
    id: number | null
    id_persona_club: number | null
    fecha_ingreso: Date | null
    activo: boolean | null
    contrato: Uint8Array | null
  }

  export type Tb_entrenadoresMaxAggregateOutputType = {
    id: number | null
    id_persona_club: number | null
    fecha_ingreso: Date | null
    activo: boolean | null
    contrato: Uint8Array | null
  }

  export type Tb_entrenadoresCountAggregateOutputType = {
    id: number
    id_persona_club: number
    fecha_ingreso: number
    activo: number
    contrato: number
    _all: number
  }


  export type Tb_entrenadoresAvgAggregateInputType = {
    id?: true
    id_persona_club?: true
  }

  export type Tb_entrenadoresSumAggregateInputType = {
    id?: true
    id_persona_club?: true
  }

  export type Tb_entrenadoresMinAggregateInputType = {
    id?: true
    id_persona_club?: true
    fecha_ingreso?: true
    activo?: true
    contrato?: true
  }

  export type Tb_entrenadoresMaxAggregateInputType = {
    id?: true
    id_persona_club?: true
    fecha_ingreso?: true
    activo?: true
    contrato?: true
  }

  export type Tb_entrenadoresCountAggregateInputType = {
    id?: true
    id_persona_club?: true
    fecha_ingreso?: true
    activo?: true
    contrato?: true
    _all?: true
  }

  export type Tb_entrenadoresAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_entrenadores to aggregate.
     */
    where?: tb_entrenadoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_entrenadores to fetch.
     */
    orderBy?: tb_entrenadoresOrderByWithRelationInput | tb_entrenadoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tb_entrenadoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_entrenadores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_entrenadores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tb_entrenadores
    **/
    _count?: true | Tb_entrenadoresCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tb_entrenadoresAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tb_entrenadoresSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tb_entrenadoresMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tb_entrenadoresMaxAggregateInputType
  }

  export type GetTb_entrenadoresAggregateType<T extends Tb_entrenadoresAggregateArgs> = {
        [P in keyof T & keyof AggregateTb_entrenadores]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTb_entrenadores[P]>
      : GetScalarType<T[P], AggregateTb_entrenadores[P]>
  }




  export type tb_entrenadoresGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tb_entrenadoresWhereInput
    orderBy?: tb_entrenadoresOrderByWithAggregationInput | tb_entrenadoresOrderByWithAggregationInput[]
    by: Tb_entrenadoresScalarFieldEnum[] | Tb_entrenadoresScalarFieldEnum
    having?: tb_entrenadoresScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tb_entrenadoresCountAggregateInputType | true
    _avg?: Tb_entrenadoresAvgAggregateInputType
    _sum?: Tb_entrenadoresSumAggregateInputType
    _min?: Tb_entrenadoresMinAggregateInputType
    _max?: Tb_entrenadoresMaxAggregateInputType
  }

  export type Tb_entrenadoresGroupByOutputType = {
    id: number
    id_persona_club: number
    fecha_ingreso: Date | null
    activo: boolean | null
    contrato: Uint8Array | null
    _count: Tb_entrenadoresCountAggregateOutputType | null
    _avg: Tb_entrenadoresAvgAggregateOutputType | null
    _sum: Tb_entrenadoresSumAggregateOutputType | null
    _min: Tb_entrenadoresMinAggregateOutputType | null
    _max: Tb_entrenadoresMaxAggregateOutputType | null
  }

  type GetTb_entrenadoresGroupByPayload<T extends tb_entrenadoresGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tb_entrenadoresGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tb_entrenadoresGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tb_entrenadoresGroupByOutputType[P]>
            : GetScalarType<T[P], Tb_entrenadoresGroupByOutputType[P]>
        }
      >
    >


  export type tb_entrenadoresSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_persona_club?: boolean
    fecha_ingreso?: boolean
    activo?: boolean
    contrato?: boolean
  }, ExtArgs["result"]["tb_entrenadores"]>



  export type tb_entrenadoresSelectScalar = {
    id?: boolean
    id_persona_club?: boolean
    fecha_ingreso?: boolean
    activo?: boolean
    contrato?: boolean
  }

  export type tb_entrenadoresOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_persona_club" | "fecha_ingreso" | "activo" | "contrato", ExtArgs["result"]["tb_entrenadores"]>

  export type $tb_entrenadoresPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tb_entrenadores"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_persona_club: number
      fecha_ingreso: Date | null
      activo: boolean | null
      contrato: Uint8Array | null
    }, ExtArgs["result"]["tb_entrenadores"]>
    composites: {}
  }

  type tb_entrenadoresGetPayload<S extends boolean | null | undefined | tb_entrenadoresDefaultArgs> = $Result.GetResult<Prisma.$tb_entrenadoresPayload, S>

  type tb_entrenadoresCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tb_entrenadoresFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tb_entrenadoresCountAggregateInputType | true
    }

  export interface tb_entrenadoresDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tb_entrenadores'], meta: { name: 'tb_entrenadores' } }
    /**
     * Find zero or one Tb_entrenadores that matches the filter.
     * @param {tb_entrenadoresFindUniqueArgs} args - Arguments to find a Tb_entrenadores
     * @example
     * // Get one Tb_entrenadores
     * const tb_entrenadores = await prisma.tb_entrenadores.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tb_entrenadoresFindUniqueArgs>(args: SelectSubset<T, tb_entrenadoresFindUniqueArgs<ExtArgs>>): Prisma__tb_entrenadoresClient<$Result.GetResult<Prisma.$tb_entrenadoresPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tb_entrenadores that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tb_entrenadoresFindUniqueOrThrowArgs} args - Arguments to find a Tb_entrenadores
     * @example
     * // Get one Tb_entrenadores
     * const tb_entrenadores = await prisma.tb_entrenadores.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tb_entrenadoresFindUniqueOrThrowArgs>(args: SelectSubset<T, tb_entrenadoresFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tb_entrenadoresClient<$Result.GetResult<Prisma.$tb_entrenadoresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tb_entrenadores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_entrenadoresFindFirstArgs} args - Arguments to find a Tb_entrenadores
     * @example
     * // Get one Tb_entrenadores
     * const tb_entrenadores = await prisma.tb_entrenadores.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tb_entrenadoresFindFirstArgs>(args?: SelectSubset<T, tb_entrenadoresFindFirstArgs<ExtArgs>>): Prisma__tb_entrenadoresClient<$Result.GetResult<Prisma.$tb_entrenadoresPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tb_entrenadores that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_entrenadoresFindFirstOrThrowArgs} args - Arguments to find a Tb_entrenadores
     * @example
     * // Get one Tb_entrenadores
     * const tb_entrenadores = await prisma.tb_entrenadores.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tb_entrenadoresFindFirstOrThrowArgs>(args?: SelectSubset<T, tb_entrenadoresFindFirstOrThrowArgs<ExtArgs>>): Prisma__tb_entrenadoresClient<$Result.GetResult<Prisma.$tb_entrenadoresPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tb_entrenadores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_entrenadoresFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tb_entrenadores
     * const tb_entrenadores = await prisma.tb_entrenadores.findMany()
     * 
     * // Get first 10 Tb_entrenadores
     * const tb_entrenadores = await prisma.tb_entrenadores.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tb_entrenadoresWithIdOnly = await prisma.tb_entrenadores.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tb_entrenadoresFindManyArgs>(args?: SelectSubset<T, tb_entrenadoresFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_entrenadoresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tb_entrenadores.
     * @param {tb_entrenadoresCreateArgs} args - Arguments to create a Tb_entrenadores.
     * @example
     * // Create one Tb_entrenadores
     * const Tb_entrenadores = await prisma.tb_entrenadores.create({
     *   data: {
     *     // ... data to create a Tb_entrenadores
     *   }
     * })
     * 
     */
    create<T extends tb_entrenadoresCreateArgs>(args: SelectSubset<T, tb_entrenadoresCreateArgs<ExtArgs>>): Prisma__tb_entrenadoresClient<$Result.GetResult<Prisma.$tb_entrenadoresPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tb_entrenadores.
     * @param {tb_entrenadoresCreateManyArgs} args - Arguments to create many Tb_entrenadores.
     * @example
     * // Create many Tb_entrenadores
     * const tb_entrenadores = await prisma.tb_entrenadores.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tb_entrenadoresCreateManyArgs>(args?: SelectSubset<T, tb_entrenadoresCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tb_entrenadores.
     * @param {tb_entrenadoresDeleteArgs} args - Arguments to delete one Tb_entrenadores.
     * @example
     * // Delete one Tb_entrenadores
     * const Tb_entrenadores = await prisma.tb_entrenadores.delete({
     *   where: {
     *     // ... filter to delete one Tb_entrenadores
     *   }
     * })
     * 
     */
    delete<T extends tb_entrenadoresDeleteArgs>(args: SelectSubset<T, tb_entrenadoresDeleteArgs<ExtArgs>>): Prisma__tb_entrenadoresClient<$Result.GetResult<Prisma.$tb_entrenadoresPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tb_entrenadores.
     * @param {tb_entrenadoresUpdateArgs} args - Arguments to update one Tb_entrenadores.
     * @example
     * // Update one Tb_entrenadores
     * const tb_entrenadores = await prisma.tb_entrenadores.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tb_entrenadoresUpdateArgs>(args: SelectSubset<T, tb_entrenadoresUpdateArgs<ExtArgs>>): Prisma__tb_entrenadoresClient<$Result.GetResult<Prisma.$tb_entrenadoresPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tb_entrenadores.
     * @param {tb_entrenadoresDeleteManyArgs} args - Arguments to filter Tb_entrenadores to delete.
     * @example
     * // Delete a few Tb_entrenadores
     * const { count } = await prisma.tb_entrenadores.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tb_entrenadoresDeleteManyArgs>(args?: SelectSubset<T, tb_entrenadoresDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tb_entrenadores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_entrenadoresUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tb_entrenadores
     * const tb_entrenadores = await prisma.tb_entrenadores.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tb_entrenadoresUpdateManyArgs>(args: SelectSubset<T, tb_entrenadoresUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tb_entrenadores.
     * @param {tb_entrenadoresUpsertArgs} args - Arguments to update or create a Tb_entrenadores.
     * @example
     * // Update or create a Tb_entrenadores
     * const tb_entrenadores = await prisma.tb_entrenadores.upsert({
     *   create: {
     *     // ... data to create a Tb_entrenadores
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tb_entrenadores we want to update
     *   }
     * })
     */
    upsert<T extends tb_entrenadoresUpsertArgs>(args: SelectSubset<T, tb_entrenadoresUpsertArgs<ExtArgs>>): Prisma__tb_entrenadoresClient<$Result.GetResult<Prisma.$tb_entrenadoresPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tb_entrenadores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_entrenadoresCountArgs} args - Arguments to filter Tb_entrenadores to count.
     * @example
     * // Count the number of Tb_entrenadores
     * const count = await prisma.tb_entrenadores.count({
     *   where: {
     *     // ... the filter for the Tb_entrenadores we want to count
     *   }
     * })
    **/
    count<T extends tb_entrenadoresCountArgs>(
      args?: Subset<T, tb_entrenadoresCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tb_entrenadoresCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tb_entrenadores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tb_entrenadoresAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Tb_entrenadoresAggregateArgs>(args: Subset<T, Tb_entrenadoresAggregateArgs>): Prisma.PrismaPromise<GetTb_entrenadoresAggregateType<T>>

    /**
     * Group by Tb_entrenadores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_entrenadoresGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tb_entrenadoresGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tb_entrenadoresGroupByArgs['orderBy'] }
        : { orderBy?: tb_entrenadoresGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tb_entrenadoresGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTb_entrenadoresGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tb_entrenadores model
   */
  readonly fields: tb_entrenadoresFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tb_entrenadores.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tb_entrenadoresClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tb_entrenadores model
   */
  interface tb_entrenadoresFieldRefs {
    readonly id: FieldRef<"tb_entrenadores", 'Int'>
    readonly id_persona_club: FieldRef<"tb_entrenadores", 'Int'>
    readonly fecha_ingreso: FieldRef<"tb_entrenadores", 'DateTime'>
    readonly activo: FieldRef<"tb_entrenadores", 'Boolean'>
    readonly contrato: FieldRef<"tb_entrenadores", 'Bytes'>
  }
    

  // Custom InputTypes
  /**
   * tb_entrenadores findUnique
   */
  export type tb_entrenadoresFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_entrenadores
     */
    select?: tb_entrenadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_entrenadores
     */
    omit?: tb_entrenadoresOmit<ExtArgs> | null
    /**
     * Filter, which tb_entrenadores to fetch.
     */
    where: tb_entrenadoresWhereUniqueInput
  }

  /**
   * tb_entrenadores findUniqueOrThrow
   */
  export type tb_entrenadoresFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_entrenadores
     */
    select?: tb_entrenadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_entrenadores
     */
    omit?: tb_entrenadoresOmit<ExtArgs> | null
    /**
     * Filter, which tb_entrenadores to fetch.
     */
    where: tb_entrenadoresWhereUniqueInput
  }

  /**
   * tb_entrenadores findFirst
   */
  export type tb_entrenadoresFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_entrenadores
     */
    select?: tb_entrenadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_entrenadores
     */
    omit?: tb_entrenadoresOmit<ExtArgs> | null
    /**
     * Filter, which tb_entrenadores to fetch.
     */
    where?: tb_entrenadoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_entrenadores to fetch.
     */
    orderBy?: tb_entrenadoresOrderByWithRelationInput | tb_entrenadoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_entrenadores.
     */
    cursor?: tb_entrenadoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_entrenadores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_entrenadores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_entrenadores.
     */
    distinct?: Tb_entrenadoresScalarFieldEnum | Tb_entrenadoresScalarFieldEnum[]
  }

  /**
   * tb_entrenadores findFirstOrThrow
   */
  export type tb_entrenadoresFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_entrenadores
     */
    select?: tb_entrenadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_entrenadores
     */
    omit?: tb_entrenadoresOmit<ExtArgs> | null
    /**
     * Filter, which tb_entrenadores to fetch.
     */
    where?: tb_entrenadoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_entrenadores to fetch.
     */
    orderBy?: tb_entrenadoresOrderByWithRelationInput | tb_entrenadoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_entrenadores.
     */
    cursor?: tb_entrenadoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_entrenadores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_entrenadores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_entrenadores.
     */
    distinct?: Tb_entrenadoresScalarFieldEnum | Tb_entrenadoresScalarFieldEnum[]
  }

  /**
   * tb_entrenadores findMany
   */
  export type tb_entrenadoresFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_entrenadores
     */
    select?: tb_entrenadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_entrenadores
     */
    omit?: tb_entrenadoresOmit<ExtArgs> | null
    /**
     * Filter, which tb_entrenadores to fetch.
     */
    where?: tb_entrenadoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_entrenadores to fetch.
     */
    orderBy?: tb_entrenadoresOrderByWithRelationInput | tb_entrenadoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tb_entrenadores.
     */
    cursor?: tb_entrenadoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_entrenadores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_entrenadores.
     */
    skip?: number
    distinct?: Tb_entrenadoresScalarFieldEnum | Tb_entrenadoresScalarFieldEnum[]
  }

  /**
   * tb_entrenadores create
   */
  export type tb_entrenadoresCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_entrenadores
     */
    select?: tb_entrenadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_entrenadores
     */
    omit?: tb_entrenadoresOmit<ExtArgs> | null
    /**
     * The data needed to create a tb_entrenadores.
     */
    data: XOR<tb_entrenadoresCreateInput, tb_entrenadoresUncheckedCreateInput>
  }

  /**
   * tb_entrenadores createMany
   */
  export type tb_entrenadoresCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tb_entrenadores.
     */
    data: tb_entrenadoresCreateManyInput | tb_entrenadoresCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tb_entrenadores update
   */
  export type tb_entrenadoresUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_entrenadores
     */
    select?: tb_entrenadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_entrenadores
     */
    omit?: tb_entrenadoresOmit<ExtArgs> | null
    /**
     * The data needed to update a tb_entrenadores.
     */
    data: XOR<tb_entrenadoresUpdateInput, tb_entrenadoresUncheckedUpdateInput>
    /**
     * Choose, which tb_entrenadores to update.
     */
    where: tb_entrenadoresWhereUniqueInput
  }

  /**
   * tb_entrenadores updateMany
   */
  export type tb_entrenadoresUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tb_entrenadores.
     */
    data: XOR<tb_entrenadoresUpdateManyMutationInput, tb_entrenadoresUncheckedUpdateManyInput>
    /**
     * Filter which tb_entrenadores to update
     */
    where?: tb_entrenadoresWhereInput
    /**
     * Limit how many tb_entrenadores to update.
     */
    limit?: number
  }

  /**
   * tb_entrenadores upsert
   */
  export type tb_entrenadoresUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_entrenadores
     */
    select?: tb_entrenadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_entrenadores
     */
    omit?: tb_entrenadoresOmit<ExtArgs> | null
    /**
     * The filter to search for the tb_entrenadores to update in case it exists.
     */
    where: tb_entrenadoresWhereUniqueInput
    /**
     * In case the tb_entrenadores found by the `where` argument doesn't exist, create a new tb_entrenadores with this data.
     */
    create: XOR<tb_entrenadoresCreateInput, tb_entrenadoresUncheckedCreateInput>
    /**
     * In case the tb_entrenadores was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tb_entrenadoresUpdateInput, tb_entrenadoresUncheckedUpdateInput>
  }

  /**
   * tb_entrenadores delete
   */
  export type tb_entrenadoresDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_entrenadores
     */
    select?: tb_entrenadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_entrenadores
     */
    omit?: tb_entrenadoresOmit<ExtArgs> | null
    /**
     * Filter which tb_entrenadores to delete.
     */
    where: tb_entrenadoresWhereUniqueInput
  }

  /**
   * tb_entrenadores deleteMany
   */
  export type tb_entrenadoresDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_entrenadores to delete
     */
    where?: tb_entrenadoresWhereInput
    /**
     * Limit how many tb_entrenadores to delete.
     */
    limit?: number
  }

  /**
   * tb_entrenadores without action
   */
  export type tb_entrenadoresDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_entrenadores
     */
    select?: tb_entrenadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_entrenadores
     */
    omit?: tb_entrenadoresOmit<ExtArgs> | null
  }


  /**
   * Model tb_gestion_admin
   */

  export type AggregateTb_gestion_admin = {
    _count: Tb_gestion_adminCountAggregateOutputType | null
    _avg: Tb_gestion_adminAvgAggregateOutputType | null
    _sum: Tb_gestion_adminSumAggregateOutputType | null
    _min: Tb_gestion_adminMinAggregateOutputType | null
    _max: Tb_gestion_adminMaxAggregateOutputType | null
  }

  export type Tb_gestion_adminAvgAggregateOutputType = {
    id: number | null
    id_tutor: number | null
    id_deportista: number | null
    id_cargo: number | null
  }

  export type Tb_gestion_adminSumAggregateOutputType = {
    id: number | null
    id_tutor: number | null
    id_deportista: number | null
    id_cargo: number | null
  }

  export type Tb_gestion_adminMinAggregateOutputType = {
    id: number | null
    id_tutor: number | null
    id_deportista: number | null
    id_cargo: number | null
    fecha_inicio: Date | null
    fecha_fin: Date | null
    activo: boolean | null
  }

  export type Tb_gestion_adminMaxAggregateOutputType = {
    id: number | null
    id_tutor: number | null
    id_deportista: number | null
    id_cargo: number | null
    fecha_inicio: Date | null
    fecha_fin: Date | null
    activo: boolean | null
  }

  export type Tb_gestion_adminCountAggregateOutputType = {
    id: number
    id_tutor: number
    id_deportista: number
    id_cargo: number
    fecha_inicio: number
    fecha_fin: number
    activo: number
    _all: number
  }


  export type Tb_gestion_adminAvgAggregateInputType = {
    id?: true
    id_tutor?: true
    id_deportista?: true
    id_cargo?: true
  }

  export type Tb_gestion_adminSumAggregateInputType = {
    id?: true
    id_tutor?: true
    id_deportista?: true
    id_cargo?: true
  }

  export type Tb_gestion_adminMinAggregateInputType = {
    id?: true
    id_tutor?: true
    id_deportista?: true
    id_cargo?: true
    fecha_inicio?: true
    fecha_fin?: true
    activo?: true
  }

  export type Tb_gestion_adminMaxAggregateInputType = {
    id?: true
    id_tutor?: true
    id_deportista?: true
    id_cargo?: true
    fecha_inicio?: true
    fecha_fin?: true
    activo?: true
  }

  export type Tb_gestion_adminCountAggregateInputType = {
    id?: true
    id_tutor?: true
    id_deportista?: true
    id_cargo?: true
    fecha_inicio?: true
    fecha_fin?: true
    activo?: true
    _all?: true
  }

  export type Tb_gestion_adminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_gestion_admin to aggregate.
     */
    where?: tb_gestion_adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_gestion_admins to fetch.
     */
    orderBy?: tb_gestion_adminOrderByWithRelationInput | tb_gestion_adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tb_gestion_adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_gestion_admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_gestion_admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tb_gestion_admins
    **/
    _count?: true | Tb_gestion_adminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tb_gestion_adminAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tb_gestion_adminSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tb_gestion_adminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tb_gestion_adminMaxAggregateInputType
  }

  export type GetTb_gestion_adminAggregateType<T extends Tb_gestion_adminAggregateArgs> = {
        [P in keyof T & keyof AggregateTb_gestion_admin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTb_gestion_admin[P]>
      : GetScalarType<T[P], AggregateTb_gestion_admin[P]>
  }




  export type tb_gestion_adminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tb_gestion_adminWhereInput
    orderBy?: tb_gestion_adminOrderByWithAggregationInput | tb_gestion_adminOrderByWithAggregationInput[]
    by: Tb_gestion_adminScalarFieldEnum[] | Tb_gestion_adminScalarFieldEnum
    having?: tb_gestion_adminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tb_gestion_adminCountAggregateInputType | true
    _avg?: Tb_gestion_adminAvgAggregateInputType
    _sum?: Tb_gestion_adminSumAggregateInputType
    _min?: Tb_gestion_adminMinAggregateInputType
    _max?: Tb_gestion_adminMaxAggregateInputType
  }

  export type Tb_gestion_adminGroupByOutputType = {
    id: number
    id_tutor: number | null
    id_deportista: number | null
    id_cargo: number | null
    fecha_inicio: Date | null
    fecha_fin: Date | null
    activo: boolean | null
    _count: Tb_gestion_adminCountAggregateOutputType | null
    _avg: Tb_gestion_adminAvgAggregateOutputType | null
    _sum: Tb_gestion_adminSumAggregateOutputType | null
    _min: Tb_gestion_adminMinAggregateOutputType | null
    _max: Tb_gestion_adminMaxAggregateOutputType | null
  }

  type GetTb_gestion_adminGroupByPayload<T extends tb_gestion_adminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tb_gestion_adminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tb_gestion_adminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tb_gestion_adminGroupByOutputType[P]>
            : GetScalarType<T[P], Tb_gestion_adminGroupByOutputType[P]>
        }
      >
    >


  export type tb_gestion_adminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_tutor?: boolean
    id_deportista?: boolean
    id_cargo?: boolean
    fecha_inicio?: boolean
    fecha_fin?: boolean
    activo?: boolean
  }, ExtArgs["result"]["tb_gestion_admin"]>



  export type tb_gestion_adminSelectScalar = {
    id?: boolean
    id_tutor?: boolean
    id_deportista?: boolean
    id_cargo?: boolean
    fecha_inicio?: boolean
    fecha_fin?: boolean
    activo?: boolean
  }

  export type tb_gestion_adminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_tutor" | "id_deportista" | "id_cargo" | "fecha_inicio" | "fecha_fin" | "activo", ExtArgs["result"]["tb_gestion_admin"]>

  export type $tb_gestion_adminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tb_gestion_admin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_tutor: number | null
      id_deportista: number | null
      id_cargo: number | null
      fecha_inicio: Date | null
      fecha_fin: Date | null
      activo: boolean | null
    }, ExtArgs["result"]["tb_gestion_admin"]>
    composites: {}
  }

  type tb_gestion_adminGetPayload<S extends boolean | null | undefined | tb_gestion_adminDefaultArgs> = $Result.GetResult<Prisma.$tb_gestion_adminPayload, S>

  type tb_gestion_adminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tb_gestion_adminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tb_gestion_adminCountAggregateInputType | true
    }

  export interface tb_gestion_adminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tb_gestion_admin'], meta: { name: 'tb_gestion_admin' } }
    /**
     * Find zero or one Tb_gestion_admin that matches the filter.
     * @param {tb_gestion_adminFindUniqueArgs} args - Arguments to find a Tb_gestion_admin
     * @example
     * // Get one Tb_gestion_admin
     * const tb_gestion_admin = await prisma.tb_gestion_admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tb_gestion_adminFindUniqueArgs>(args: SelectSubset<T, tb_gestion_adminFindUniqueArgs<ExtArgs>>): Prisma__tb_gestion_adminClient<$Result.GetResult<Prisma.$tb_gestion_adminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tb_gestion_admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tb_gestion_adminFindUniqueOrThrowArgs} args - Arguments to find a Tb_gestion_admin
     * @example
     * // Get one Tb_gestion_admin
     * const tb_gestion_admin = await prisma.tb_gestion_admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tb_gestion_adminFindUniqueOrThrowArgs>(args: SelectSubset<T, tb_gestion_adminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tb_gestion_adminClient<$Result.GetResult<Prisma.$tb_gestion_adminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tb_gestion_admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_gestion_adminFindFirstArgs} args - Arguments to find a Tb_gestion_admin
     * @example
     * // Get one Tb_gestion_admin
     * const tb_gestion_admin = await prisma.tb_gestion_admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tb_gestion_adminFindFirstArgs>(args?: SelectSubset<T, tb_gestion_adminFindFirstArgs<ExtArgs>>): Prisma__tb_gestion_adminClient<$Result.GetResult<Prisma.$tb_gestion_adminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tb_gestion_admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_gestion_adminFindFirstOrThrowArgs} args - Arguments to find a Tb_gestion_admin
     * @example
     * // Get one Tb_gestion_admin
     * const tb_gestion_admin = await prisma.tb_gestion_admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tb_gestion_adminFindFirstOrThrowArgs>(args?: SelectSubset<T, tb_gestion_adminFindFirstOrThrowArgs<ExtArgs>>): Prisma__tb_gestion_adminClient<$Result.GetResult<Prisma.$tb_gestion_adminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tb_gestion_admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_gestion_adminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tb_gestion_admins
     * const tb_gestion_admins = await prisma.tb_gestion_admin.findMany()
     * 
     * // Get first 10 Tb_gestion_admins
     * const tb_gestion_admins = await prisma.tb_gestion_admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tb_gestion_adminWithIdOnly = await prisma.tb_gestion_admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tb_gestion_adminFindManyArgs>(args?: SelectSubset<T, tb_gestion_adminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_gestion_adminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tb_gestion_admin.
     * @param {tb_gestion_adminCreateArgs} args - Arguments to create a Tb_gestion_admin.
     * @example
     * // Create one Tb_gestion_admin
     * const Tb_gestion_admin = await prisma.tb_gestion_admin.create({
     *   data: {
     *     // ... data to create a Tb_gestion_admin
     *   }
     * })
     * 
     */
    create<T extends tb_gestion_adminCreateArgs>(args: SelectSubset<T, tb_gestion_adminCreateArgs<ExtArgs>>): Prisma__tb_gestion_adminClient<$Result.GetResult<Prisma.$tb_gestion_adminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tb_gestion_admins.
     * @param {tb_gestion_adminCreateManyArgs} args - Arguments to create many Tb_gestion_admins.
     * @example
     * // Create many Tb_gestion_admins
     * const tb_gestion_admin = await prisma.tb_gestion_admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tb_gestion_adminCreateManyArgs>(args?: SelectSubset<T, tb_gestion_adminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tb_gestion_admin.
     * @param {tb_gestion_adminDeleteArgs} args - Arguments to delete one Tb_gestion_admin.
     * @example
     * // Delete one Tb_gestion_admin
     * const Tb_gestion_admin = await prisma.tb_gestion_admin.delete({
     *   where: {
     *     // ... filter to delete one Tb_gestion_admin
     *   }
     * })
     * 
     */
    delete<T extends tb_gestion_adminDeleteArgs>(args: SelectSubset<T, tb_gestion_adminDeleteArgs<ExtArgs>>): Prisma__tb_gestion_adminClient<$Result.GetResult<Prisma.$tb_gestion_adminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tb_gestion_admin.
     * @param {tb_gestion_adminUpdateArgs} args - Arguments to update one Tb_gestion_admin.
     * @example
     * // Update one Tb_gestion_admin
     * const tb_gestion_admin = await prisma.tb_gestion_admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tb_gestion_adminUpdateArgs>(args: SelectSubset<T, tb_gestion_adminUpdateArgs<ExtArgs>>): Prisma__tb_gestion_adminClient<$Result.GetResult<Prisma.$tb_gestion_adminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tb_gestion_admins.
     * @param {tb_gestion_adminDeleteManyArgs} args - Arguments to filter Tb_gestion_admins to delete.
     * @example
     * // Delete a few Tb_gestion_admins
     * const { count } = await prisma.tb_gestion_admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tb_gestion_adminDeleteManyArgs>(args?: SelectSubset<T, tb_gestion_adminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tb_gestion_admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_gestion_adminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tb_gestion_admins
     * const tb_gestion_admin = await prisma.tb_gestion_admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tb_gestion_adminUpdateManyArgs>(args: SelectSubset<T, tb_gestion_adminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tb_gestion_admin.
     * @param {tb_gestion_adminUpsertArgs} args - Arguments to update or create a Tb_gestion_admin.
     * @example
     * // Update or create a Tb_gestion_admin
     * const tb_gestion_admin = await prisma.tb_gestion_admin.upsert({
     *   create: {
     *     // ... data to create a Tb_gestion_admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tb_gestion_admin we want to update
     *   }
     * })
     */
    upsert<T extends tb_gestion_adminUpsertArgs>(args: SelectSubset<T, tb_gestion_adminUpsertArgs<ExtArgs>>): Prisma__tb_gestion_adminClient<$Result.GetResult<Prisma.$tb_gestion_adminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tb_gestion_admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_gestion_adminCountArgs} args - Arguments to filter Tb_gestion_admins to count.
     * @example
     * // Count the number of Tb_gestion_admins
     * const count = await prisma.tb_gestion_admin.count({
     *   where: {
     *     // ... the filter for the Tb_gestion_admins we want to count
     *   }
     * })
    **/
    count<T extends tb_gestion_adminCountArgs>(
      args?: Subset<T, tb_gestion_adminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tb_gestion_adminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tb_gestion_admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tb_gestion_adminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Tb_gestion_adminAggregateArgs>(args: Subset<T, Tb_gestion_adminAggregateArgs>): Prisma.PrismaPromise<GetTb_gestion_adminAggregateType<T>>

    /**
     * Group by Tb_gestion_admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_gestion_adminGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tb_gestion_adminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tb_gestion_adminGroupByArgs['orderBy'] }
        : { orderBy?: tb_gestion_adminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tb_gestion_adminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTb_gestion_adminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tb_gestion_admin model
   */
  readonly fields: tb_gestion_adminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tb_gestion_admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tb_gestion_adminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tb_gestion_admin model
   */
  interface tb_gestion_adminFieldRefs {
    readonly id: FieldRef<"tb_gestion_admin", 'Int'>
    readonly id_tutor: FieldRef<"tb_gestion_admin", 'Int'>
    readonly id_deportista: FieldRef<"tb_gestion_admin", 'Int'>
    readonly id_cargo: FieldRef<"tb_gestion_admin", 'Int'>
    readonly fecha_inicio: FieldRef<"tb_gestion_admin", 'DateTime'>
    readonly fecha_fin: FieldRef<"tb_gestion_admin", 'DateTime'>
    readonly activo: FieldRef<"tb_gestion_admin", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * tb_gestion_admin findUnique
   */
  export type tb_gestion_adminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_gestion_admin
     */
    select?: tb_gestion_adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_gestion_admin
     */
    omit?: tb_gestion_adminOmit<ExtArgs> | null
    /**
     * Filter, which tb_gestion_admin to fetch.
     */
    where: tb_gestion_adminWhereUniqueInput
  }

  /**
   * tb_gestion_admin findUniqueOrThrow
   */
  export type tb_gestion_adminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_gestion_admin
     */
    select?: tb_gestion_adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_gestion_admin
     */
    omit?: tb_gestion_adminOmit<ExtArgs> | null
    /**
     * Filter, which tb_gestion_admin to fetch.
     */
    where: tb_gestion_adminWhereUniqueInput
  }

  /**
   * tb_gestion_admin findFirst
   */
  export type tb_gestion_adminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_gestion_admin
     */
    select?: tb_gestion_adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_gestion_admin
     */
    omit?: tb_gestion_adminOmit<ExtArgs> | null
    /**
     * Filter, which tb_gestion_admin to fetch.
     */
    where?: tb_gestion_adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_gestion_admins to fetch.
     */
    orderBy?: tb_gestion_adminOrderByWithRelationInput | tb_gestion_adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_gestion_admins.
     */
    cursor?: tb_gestion_adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_gestion_admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_gestion_admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_gestion_admins.
     */
    distinct?: Tb_gestion_adminScalarFieldEnum | Tb_gestion_adminScalarFieldEnum[]
  }

  /**
   * tb_gestion_admin findFirstOrThrow
   */
  export type tb_gestion_adminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_gestion_admin
     */
    select?: tb_gestion_adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_gestion_admin
     */
    omit?: tb_gestion_adminOmit<ExtArgs> | null
    /**
     * Filter, which tb_gestion_admin to fetch.
     */
    where?: tb_gestion_adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_gestion_admins to fetch.
     */
    orderBy?: tb_gestion_adminOrderByWithRelationInput | tb_gestion_adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_gestion_admins.
     */
    cursor?: tb_gestion_adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_gestion_admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_gestion_admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_gestion_admins.
     */
    distinct?: Tb_gestion_adminScalarFieldEnum | Tb_gestion_adminScalarFieldEnum[]
  }

  /**
   * tb_gestion_admin findMany
   */
  export type tb_gestion_adminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_gestion_admin
     */
    select?: tb_gestion_adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_gestion_admin
     */
    omit?: tb_gestion_adminOmit<ExtArgs> | null
    /**
     * Filter, which tb_gestion_admins to fetch.
     */
    where?: tb_gestion_adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_gestion_admins to fetch.
     */
    orderBy?: tb_gestion_adminOrderByWithRelationInput | tb_gestion_adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tb_gestion_admins.
     */
    cursor?: tb_gestion_adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_gestion_admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_gestion_admins.
     */
    skip?: number
    distinct?: Tb_gestion_adminScalarFieldEnum | Tb_gestion_adminScalarFieldEnum[]
  }

  /**
   * tb_gestion_admin create
   */
  export type tb_gestion_adminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_gestion_admin
     */
    select?: tb_gestion_adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_gestion_admin
     */
    omit?: tb_gestion_adminOmit<ExtArgs> | null
    /**
     * The data needed to create a tb_gestion_admin.
     */
    data?: XOR<tb_gestion_adminCreateInput, tb_gestion_adminUncheckedCreateInput>
  }

  /**
   * tb_gestion_admin createMany
   */
  export type tb_gestion_adminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tb_gestion_admins.
     */
    data: tb_gestion_adminCreateManyInput | tb_gestion_adminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tb_gestion_admin update
   */
  export type tb_gestion_adminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_gestion_admin
     */
    select?: tb_gestion_adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_gestion_admin
     */
    omit?: tb_gestion_adminOmit<ExtArgs> | null
    /**
     * The data needed to update a tb_gestion_admin.
     */
    data: XOR<tb_gestion_adminUpdateInput, tb_gestion_adminUncheckedUpdateInput>
    /**
     * Choose, which tb_gestion_admin to update.
     */
    where: tb_gestion_adminWhereUniqueInput
  }

  /**
   * tb_gestion_admin updateMany
   */
  export type tb_gestion_adminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tb_gestion_admins.
     */
    data: XOR<tb_gestion_adminUpdateManyMutationInput, tb_gestion_adminUncheckedUpdateManyInput>
    /**
     * Filter which tb_gestion_admins to update
     */
    where?: tb_gestion_adminWhereInput
    /**
     * Limit how many tb_gestion_admins to update.
     */
    limit?: number
  }

  /**
   * tb_gestion_admin upsert
   */
  export type tb_gestion_adminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_gestion_admin
     */
    select?: tb_gestion_adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_gestion_admin
     */
    omit?: tb_gestion_adminOmit<ExtArgs> | null
    /**
     * The filter to search for the tb_gestion_admin to update in case it exists.
     */
    where: tb_gestion_adminWhereUniqueInput
    /**
     * In case the tb_gestion_admin found by the `where` argument doesn't exist, create a new tb_gestion_admin with this data.
     */
    create: XOR<tb_gestion_adminCreateInput, tb_gestion_adminUncheckedCreateInput>
    /**
     * In case the tb_gestion_admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tb_gestion_adminUpdateInput, tb_gestion_adminUncheckedUpdateInput>
  }

  /**
   * tb_gestion_admin delete
   */
  export type tb_gestion_adminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_gestion_admin
     */
    select?: tb_gestion_adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_gestion_admin
     */
    omit?: tb_gestion_adminOmit<ExtArgs> | null
    /**
     * Filter which tb_gestion_admin to delete.
     */
    where: tb_gestion_adminWhereUniqueInput
  }

  /**
   * tb_gestion_admin deleteMany
   */
  export type tb_gestion_adminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_gestion_admins to delete
     */
    where?: tb_gestion_adminWhereInput
    /**
     * Limit how many tb_gestion_admins to delete.
     */
    limit?: number
  }

  /**
   * tb_gestion_admin without action
   */
  export type tb_gestion_adminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_gestion_admin
     */
    select?: tb_gestion_adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_gestion_admin
     */
    omit?: tb_gestion_adminOmit<ExtArgs> | null
  }


  /**
   * Model tb_municipio
   */

  export type AggregateTb_municipio = {
    _count: Tb_municipioCountAggregateOutputType | null
    _avg: Tb_municipioAvgAggregateOutputType | null
    _sum: Tb_municipioSumAggregateOutputType | null
    _min: Tb_municipioMinAggregateOutputType | null
    _max: Tb_municipioMaxAggregateOutputType | null
  }

  export type Tb_municipioAvgAggregateOutputType = {
    id: number | null
    id_departamento: number | null
  }

  export type Tb_municipioSumAggregateOutputType = {
    id: number | null
    id_departamento: number | null
  }

  export type Tb_municipioMinAggregateOutputType = {
    id: number | null
    id_departamento: number | null
    nombre: string | null
    estado: boolean | null
  }

  export type Tb_municipioMaxAggregateOutputType = {
    id: number | null
    id_departamento: number | null
    nombre: string | null
    estado: boolean | null
  }

  export type Tb_municipioCountAggregateOutputType = {
    id: number
    id_departamento: number
    nombre: number
    estado: number
    _all: number
  }


  export type Tb_municipioAvgAggregateInputType = {
    id?: true
    id_departamento?: true
  }

  export type Tb_municipioSumAggregateInputType = {
    id?: true
    id_departamento?: true
  }

  export type Tb_municipioMinAggregateInputType = {
    id?: true
    id_departamento?: true
    nombre?: true
    estado?: true
  }

  export type Tb_municipioMaxAggregateInputType = {
    id?: true
    id_departamento?: true
    nombre?: true
    estado?: true
  }

  export type Tb_municipioCountAggregateInputType = {
    id?: true
    id_departamento?: true
    nombre?: true
    estado?: true
    _all?: true
  }

  export type Tb_municipioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_municipio to aggregate.
     */
    where?: tb_municipioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_municipios to fetch.
     */
    orderBy?: tb_municipioOrderByWithRelationInput | tb_municipioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tb_municipioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_municipios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_municipios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tb_municipios
    **/
    _count?: true | Tb_municipioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tb_municipioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tb_municipioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tb_municipioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tb_municipioMaxAggregateInputType
  }

  export type GetTb_municipioAggregateType<T extends Tb_municipioAggregateArgs> = {
        [P in keyof T & keyof AggregateTb_municipio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTb_municipio[P]>
      : GetScalarType<T[P], AggregateTb_municipio[P]>
  }




  export type tb_municipioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tb_municipioWhereInput
    orderBy?: tb_municipioOrderByWithAggregationInput | tb_municipioOrderByWithAggregationInput[]
    by: Tb_municipioScalarFieldEnum[] | Tb_municipioScalarFieldEnum
    having?: tb_municipioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tb_municipioCountAggregateInputType | true
    _avg?: Tb_municipioAvgAggregateInputType
    _sum?: Tb_municipioSumAggregateInputType
    _min?: Tb_municipioMinAggregateInputType
    _max?: Tb_municipioMaxAggregateInputType
  }

  export type Tb_municipioGroupByOutputType = {
    id: number
    id_departamento: number
    nombre: string | null
    estado: boolean | null
    _count: Tb_municipioCountAggregateOutputType | null
    _avg: Tb_municipioAvgAggregateOutputType | null
    _sum: Tb_municipioSumAggregateOutputType | null
    _min: Tb_municipioMinAggregateOutputType | null
    _max: Tb_municipioMaxAggregateOutputType | null
  }

  type GetTb_municipioGroupByPayload<T extends tb_municipioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tb_municipioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tb_municipioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tb_municipioGroupByOutputType[P]>
            : GetScalarType<T[P], Tb_municipioGroupByOutputType[P]>
        }
      >
    >


  export type tb_municipioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_departamento?: boolean
    nombre?: boolean
    estado?: boolean
  }, ExtArgs["result"]["tb_municipio"]>



  export type tb_municipioSelectScalar = {
    id?: boolean
    id_departamento?: boolean
    nombre?: boolean
    estado?: boolean
  }

  export type tb_municipioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_departamento" | "nombre" | "estado", ExtArgs["result"]["tb_municipio"]>

  export type $tb_municipioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tb_municipio"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_departamento: number
      nombre: string | null
      estado: boolean | null
    }, ExtArgs["result"]["tb_municipio"]>
    composites: {}
  }

  type tb_municipioGetPayload<S extends boolean | null | undefined | tb_municipioDefaultArgs> = $Result.GetResult<Prisma.$tb_municipioPayload, S>

  type tb_municipioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tb_municipioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tb_municipioCountAggregateInputType | true
    }

  export interface tb_municipioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tb_municipio'], meta: { name: 'tb_municipio' } }
    /**
     * Find zero or one Tb_municipio that matches the filter.
     * @param {tb_municipioFindUniqueArgs} args - Arguments to find a Tb_municipio
     * @example
     * // Get one Tb_municipio
     * const tb_municipio = await prisma.tb_municipio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tb_municipioFindUniqueArgs>(args: SelectSubset<T, tb_municipioFindUniqueArgs<ExtArgs>>): Prisma__tb_municipioClient<$Result.GetResult<Prisma.$tb_municipioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tb_municipio that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tb_municipioFindUniqueOrThrowArgs} args - Arguments to find a Tb_municipio
     * @example
     * // Get one Tb_municipio
     * const tb_municipio = await prisma.tb_municipio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tb_municipioFindUniqueOrThrowArgs>(args: SelectSubset<T, tb_municipioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tb_municipioClient<$Result.GetResult<Prisma.$tb_municipioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tb_municipio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_municipioFindFirstArgs} args - Arguments to find a Tb_municipio
     * @example
     * // Get one Tb_municipio
     * const tb_municipio = await prisma.tb_municipio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tb_municipioFindFirstArgs>(args?: SelectSubset<T, tb_municipioFindFirstArgs<ExtArgs>>): Prisma__tb_municipioClient<$Result.GetResult<Prisma.$tb_municipioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tb_municipio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_municipioFindFirstOrThrowArgs} args - Arguments to find a Tb_municipio
     * @example
     * // Get one Tb_municipio
     * const tb_municipio = await prisma.tb_municipio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tb_municipioFindFirstOrThrowArgs>(args?: SelectSubset<T, tb_municipioFindFirstOrThrowArgs<ExtArgs>>): Prisma__tb_municipioClient<$Result.GetResult<Prisma.$tb_municipioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tb_municipios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_municipioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tb_municipios
     * const tb_municipios = await prisma.tb_municipio.findMany()
     * 
     * // Get first 10 Tb_municipios
     * const tb_municipios = await prisma.tb_municipio.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tb_municipioWithIdOnly = await prisma.tb_municipio.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tb_municipioFindManyArgs>(args?: SelectSubset<T, tb_municipioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_municipioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tb_municipio.
     * @param {tb_municipioCreateArgs} args - Arguments to create a Tb_municipio.
     * @example
     * // Create one Tb_municipio
     * const Tb_municipio = await prisma.tb_municipio.create({
     *   data: {
     *     // ... data to create a Tb_municipio
     *   }
     * })
     * 
     */
    create<T extends tb_municipioCreateArgs>(args: SelectSubset<T, tb_municipioCreateArgs<ExtArgs>>): Prisma__tb_municipioClient<$Result.GetResult<Prisma.$tb_municipioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tb_municipios.
     * @param {tb_municipioCreateManyArgs} args - Arguments to create many Tb_municipios.
     * @example
     * // Create many Tb_municipios
     * const tb_municipio = await prisma.tb_municipio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tb_municipioCreateManyArgs>(args?: SelectSubset<T, tb_municipioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tb_municipio.
     * @param {tb_municipioDeleteArgs} args - Arguments to delete one Tb_municipio.
     * @example
     * // Delete one Tb_municipio
     * const Tb_municipio = await prisma.tb_municipio.delete({
     *   where: {
     *     // ... filter to delete one Tb_municipio
     *   }
     * })
     * 
     */
    delete<T extends tb_municipioDeleteArgs>(args: SelectSubset<T, tb_municipioDeleteArgs<ExtArgs>>): Prisma__tb_municipioClient<$Result.GetResult<Prisma.$tb_municipioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tb_municipio.
     * @param {tb_municipioUpdateArgs} args - Arguments to update one Tb_municipio.
     * @example
     * // Update one Tb_municipio
     * const tb_municipio = await prisma.tb_municipio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tb_municipioUpdateArgs>(args: SelectSubset<T, tb_municipioUpdateArgs<ExtArgs>>): Prisma__tb_municipioClient<$Result.GetResult<Prisma.$tb_municipioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tb_municipios.
     * @param {tb_municipioDeleteManyArgs} args - Arguments to filter Tb_municipios to delete.
     * @example
     * // Delete a few Tb_municipios
     * const { count } = await prisma.tb_municipio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tb_municipioDeleteManyArgs>(args?: SelectSubset<T, tb_municipioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tb_municipios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_municipioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tb_municipios
     * const tb_municipio = await prisma.tb_municipio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tb_municipioUpdateManyArgs>(args: SelectSubset<T, tb_municipioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tb_municipio.
     * @param {tb_municipioUpsertArgs} args - Arguments to update or create a Tb_municipio.
     * @example
     * // Update or create a Tb_municipio
     * const tb_municipio = await prisma.tb_municipio.upsert({
     *   create: {
     *     // ... data to create a Tb_municipio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tb_municipio we want to update
     *   }
     * })
     */
    upsert<T extends tb_municipioUpsertArgs>(args: SelectSubset<T, tb_municipioUpsertArgs<ExtArgs>>): Prisma__tb_municipioClient<$Result.GetResult<Prisma.$tb_municipioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tb_municipios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_municipioCountArgs} args - Arguments to filter Tb_municipios to count.
     * @example
     * // Count the number of Tb_municipios
     * const count = await prisma.tb_municipio.count({
     *   where: {
     *     // ... the filter for the Tb_municipios we want to count
     *   }
     * })
    **/
    count<T extends tb_municipioCountArgs>(
      args?: Subset<T, tb_municipioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tb_municipioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tb_municipio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tb_municipioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Tb_municipioAggregateArgs>(args: Subset<T, Tb_municipioAggregateArgs>): Prisma.PrismaPromise<GetTb_municipioAggregateType<T>>

    /**
     * Group by Tb_municipio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_municipioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tb_municipioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tb_municipioGroupByArgs['orderBy'] }
        : { orderBy?: tb_municipioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tb_municipioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTb_municipioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tb_municipio model
   */
  readonly fields: tb_municipioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tb_municipio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tb_municipioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tb_municipio model
   */
  interface tb_municipioFieldRefs {
    readonly id: FieldRef<"tb_municipio", 'Int'>
    readonly id_departamento: FieldRef<"tb_municipio", 'Int'>
    readonly nombre: FieldRef<"tb_municipio", 'String'>
    readonly estado: FieldRef<"tb_municipio", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * tb_municipio findUnique
   */
  export type tb_municipioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_municipio
     */
    select?: tb_municipioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_municipio
     */
    omit?: tb_municipioOmit<ExtArgs> | null
    /**
     * Filter, which tb_municipio to fetch.
     */
    where: tb_municipioWhereUniqueInput
  }

  /**
   * tb_municipio findUniqueOrThrow
   */
  export type tb_municipioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_municipio
     */
    select?: tb_municipioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_municipio
     */
    omit?: tb_municipioOmit<ExtArgs> | null
    /**
     * Filter, which tb_municipio to fetch.
     */
    where: tb_municipioWhereUniqueInput
  }

  /**
   * tb_municipio findFirst
   */
  export type tb_municipioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_municipio
     */
    select?: tb_municipioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_municipio
     */
    omit?: tb_municipioOmit<ExtArgs> | null
    /**
     * Filter, which tb_municipio to fetch.
     */
    where?: tb_municipioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_municipios to fetch.
     */
    orderBy?: tb_municipioOrderByWithRelationInput | tb_municipioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_municipios.
     */
    cursor?: tb_municipioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_municipios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_municipios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_municipios.
     */
    distinct?: Tb_municipioScalarFieldEnum | Tb_municipioScalarFieldEnum[]
  }

  /**
   * tb_municipio findFirstOrThrow
   */
  export type tb_municipioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_municipio
     */
    select?: tb_municipioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_municipio
     */
    omit?: tb_municipioOmit<ExtArgs> | null
    /**
     * Filter, which tb_municipio to fetch.
     */
    where?: tb_municipioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_municipios to fetch.
     */
    orderBy?: tb_municipioOrderByWithRelationInput | tb_municipioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_municipios.
     */
    cursor?: tb_municipioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_municipios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_municipios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_municipios.
     */
    distinct?: Tb_municipioScalarFieldEnum | Tb_municipioScalarFieldEnum[]
  }

  /**
   * tb_municipio findMany
   */
  export type tb_municipioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_municipio
     */
    select?: tb_municipioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_municipio
     */
    omit?: tb_municipioOmit<ExtArgs> | null
    /**
     * Filter, which tb_municipios to fetch.
     */
    where?: tb_municipioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_municipios to fetch.
     */
    orderBy?: tb_municipioOrderByWithRelationInput | tb_municipioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tb_municipios.
     */
    cursor?: tb_municipioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_municipios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_municipios.
     */
    skip?: number
    distinct?: Tb_municipioScalarFieldEnum | Tb_municipioScalarFieldEnum[]
  }

  /**
   * tb_municipio create
   */
  export type tb_municipioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_municipio
     */
    select?: tb_municipioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_municipio
     */
    omit?: tb_municipioOmit<ExtArgs> | null
    /**
     * The data needed to create a tb_municipio.
     */
    data: XOR<tb_municipioCreateInput, tb_municipioUncheckedCreateInput>
  }

  /**
   * tb_municipio createMany
   */
  export type tb_municipioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tb_municipios.
     */
    data: tb_municipioCreateManyInput | tb_municipioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tb_municipio update
   */
  export type tb_municipioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_municipio
     */
    select?: tb_municipioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_municipio
     */
    omit?: tb_municipioOmit<ExtArgs> | null
    /**
     * The data needed to update a tb_municipio.
     */
    data: XOR<tb_municipioUpdateInput, tb_municipioUncheckedUpdateInput>
    /**
     * Choose, which tb_municipio to update.
     */
    where: tb_municipioWhereUniqueInput
  }

  /**
   * tb_municipio updateMany
   */
  export type tb_municipioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tb_municipios.
     */
    data: XOR<tb_municipioUpdateManyMutationInput, tb_municipioUncheckedUpdateManyInput>
    /**
     * Filter which tb_municipios to update
     */
    where?: tb_municipioWhereInput
    /**
     * Limit how many tb_municipios to update.
     */
    limit?: number
  }

  /**
   * tb_municipio upsert
   */
  export type tb_municipioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_municipio
     */
    select?: tb_municipioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_municipio
     */
    omit?: tb_municipioOmit<ExtArgs> | null
    /**
     * The filter to search for the tb_municipio to update in case it exists.
     */
    where: tb_municipioWhereUniqueInput
    /**
     * In case the tb_municipio found by the `where` argument doesn't exist, create a new tb_municipio with this data.
     */
    create: XOR<tb_municipioCreateInput, tb_municipioUncheckedCreateInput>
    /**
     * In case the tb_municipio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tb_municipioUpdateInput, tb_municipioUncheckedUpdateInput>
  }

  /**
   * tb_municipio delete
   */
  export type tb_municipioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_municipio
     */
    select?: tb_municipioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_municipio
     */
    omit?: tb_municipioOmit<ExtArgs> | null
    /**
     * Filter which tb_municipio to delete.
     */
    where: tb_municipioWhereUniqueInput
  }

  /**
   * tb_municipio deleteMany
   */
  export type tb_municipioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_municipios to delete
     */
    where?: tb_municipioWhereInput
    /**
     * Limit how many tb_municipios to delete.
     */
    limit?: number
  }

  /**
   * tb_municipio without action
   */
  export type tb_municipioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_municipio
     */
    select?: tb_municipioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_municipio
     */
    omit?: tb_municipioOmit<ExtArgs> | null
  }


  /**
   * Model tb_pagos_deportistas
   */

  export type AggregateTb_pagos_deportistas = {
    _count: Tb_pagos_deportistasCountAggregateOutputType | null
    _avg: Tb_pagos_deportistasAvgAggregateOutputType | null
    _sum: Tb_pagos_deportistasSumAggregateOutputType | null
    _min: Tb_pagos_deportistasMinAggregateOutputType | null
    _max: Tb_pagos_deportistasMaxAggregateOutputType | null
  }

  export type Tb_pagos_deportistasAvgAggregateOutputType = {
    id: number | null
    id_deportista: number | null
    valor: Decimal | null
  }

  export type Tb_pagos_deportistasSumAggregateOutputType = {
    id: number | null
    id_deportista: number | null
    valor: Decimal | null
  }

  export type Tb_pagos_deportistasMinAggregateOutputType = {
    id: number | null
    id_deportista: number | null
    fecha_pago: Date | null
    valor: Decimal | null
    tipo_pago: string | null
  }

  export type Tb_pagos_deportistasMaxAggregateOutputType = {
    id: number | null
    id_deportista: number | null
    fecha_pago: Date | null
    valor: Decimal | null
    tipo_pago: string | null
  }

  export type Tb_pagos_deportistasCountAggregateOutputType = {
    id: number
    id_deportista: number
    fecha_pago: number
    valor: number
    tipo_pago: number
    _all: number
  }


  export type Tb_pagos_deportistasAvgAggregateInputType = {
    id?: true
    id_deportista?: true
    valor?: true
  }

  export type Tb_pagos_deportistasSumAggregateInputType = {
    id?: true
    id_deportista?: true
    valor?: true
  }

  export type Tb_pagos_deportistasMinAggregateInputType = {
    id?: true
    id_deportista?: true
    fecha_pago?: true
    valor?: true
    tipo_pago?: true
  }

  export type Tb_pagos_deportistasMaxAggregateInputType = {
    id?: true
    id_deportista?: true
    fecha_pago?: true
    valor?: true
    tipo_pago?: true
  }

  export type Tb_pagos_deportistasCountAggregateInputType = {
    id?: true
    id_deportista?: true
    fecha_pago?: true
    valor?: true
    tipo_pago?: true
    _all?: true
  }

  export type Tb_pagos_deportistasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_pagos_deportistas to aggregate.
     */
    where?: tb_pagos_deportistasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_pagos_deportistas to fetch.
     */
    orderBy?: tb_pagos_deportistasOrderByWithRelationInput | tb_pagos_deportistasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tb_pagos_deportistasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_pagos_deportistas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_pagos_deportistas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tb_pagos_deportistas
    **/
    _count?: true | Tb_pagos_deportistasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tb_pagos_deportistasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tb_pagos_deportistasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tb_pagos_deportistasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tb_pagos_deportistasMaxAggregateInputType
  }

  export type GetTb_pagos_deportistasAggregateType<T extends Tb_pagos_deportistasAggregateArgs> = {
        [P in keyof T & keyof AggregateTb_pagos_deportistas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTb_pagos_deportistas[P]>
      : GetScalarType<T[P], AggregateTb_pagos_deportistas[P]>
  }




  export type tb_pagos_deportistasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tb_pagos_deportistasWhereInput
    orderBy?: tb_pagos_deportistasOrderByWithAggregationInput | tb_pagos_deportistasOrderByWithAggregationInput[]
    by: Tb_pagos_deportistasScalarFieldEnum[] | Tb_pagos_deportistasScalarFieldEnum
    having?: tb_pagos_deportistasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tb_pagos_deportistasCountAggregateInputType | true
    _avg?: Tb_pagos_deportistasAvgAggregateInputType
    _sum?: Tb_pagos_deportistasSumAggregateInputType
    _min?: Tb_pagos_deportistasMinAggregateInputType
    _max?: Tb_pagos_deportistasMaxAggregateInputType
  }

  export type Tb_pagos_deportistasGroupByOutputType = {
    id: number
    id_deportista: number
    fecha_pago: Date | null
    valor: Decimal | null
    tipo_pago: string | null
    _count: Tb_pagos_deportistasCountAggregateOutputType | null
    _avg: Tb_pagos_deportistasAvgAggregateOutputType | null
    _sum: Tb_pagos_deportistasSumAggregateOutputType | null
    _min: Tb_pagos_deportistasMinAggregateOutputType | null
    _max: Tb_pagos_deportistasMaxAggregateOutputType | null
  }

  type GetTb_pagos_deportistasGroupByPayload<T extends tb_pagos_deportistasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tb_pagos_deportistasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tb_pagos_deportistasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tb_pagos_deportistasGroupByOutputType[P]>
            : GetScalarType<T[P], Tb_pagos_deportistasGroupByOutputType[P]>
        }
      >
    >


  export type tb_pagos_deportistasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_deportista?: boolean
    fecha_pago?: boolean
    valor?: boolean
    tipo_pago?: boolean
  }, ExtArgs["result"]["tb_pagos_deportistas"]>



  export type tb_pagos_deportistasSelectScalar = {
    id?: boolean
    id_deportista?: boolean
    fecha_pago?: boolean
    valor?: boolean
    tipo_pago?: boolean
  }

  export type tb_pagos_deportistasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_deportista" | "fecha_pago" | "valor" | "tipo_pago", ExtArgs["result"]["tb_pagos_deportistas"]>

  export type $tb_pagos_deportistasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tb_pagos_deportistas"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_deportista: number
      fecha_pago: Date | null
      valor: Prisma.Decimal | null
      tipo_pago: string | null
    }, ExtArgs["result"]["tb_pagos_deportistas"]>
    composites: {}
  }

  type tb_pagos_deportistasGetPayload<S extends boolean | null | undefined | tb_pagos_deportistasDefaultArgs> = $Result.GetResult<Prisma.$tb_pagos_deportistasPayload, S>

  type tb_pagos_deportistasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tb_pagos_deportistasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tb_pagos_deportistasCountAggregateInputType | true
    }

  export interface tb_pagos_deportistasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tb_pagos_deportistas'], meta: { name: 'tb_pagos_deportistas' } }
    /**
     * Find zero or one Tb_pagos_deportistas that matches the filter.
     * @param {tb_pagos_deportistasFindUniqueArgs} args - Arguments to find a Tb_pagos_deportistas
     * @example
     * // Get one Tb_pagos_deportistas
     * const tb_pagos_deportistas = await prisma.tb_pagos_deportistas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tb_pagos_deportistasFindUniqueArgs>(args: SelectSubset<T, tb_pagos_deportistasFindUniqueArgs<ExtArgs>>): Prisma__tb_pagos_deportistasClient<$Result.GetResult<Prisma.$tb_pagos_deportistasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tb_pagos_deportistas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tb_pagos_deportistasFindUniqueOrThrowArgs} args - Arguments to find a Tb_pagos_deportistas
     * @example
     * // Get one Tb_pagos_deportistas
     * const tb_pagos_deportistas = await prisma.tb_pagos_deportistas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tb_pagos_deportistasFindUniqueOrThrowArgs>(args: SelectSubset<T, tb_pagos_deportistasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tb_pagos_deportistasClient<$Result.GetResult<Prisma.$tb_pagos_deportistasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tb_pagos_deportistas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_pagos_deportistasFindFirstArgs} args - Arguments to find a Tb_pagos_deportistas
     * @example
     * // Get one Tb_pagos_deportistas
     * const tb_pagos_deportistas = await prisma.tb_pagos_deportistas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tb_pagos_deportistasFindFirstArgs>(args?: SelectSubset<T, tb_pagos_deportistasFindFirstArgs<ExtArgs>>): Prisma__tb_pagos_deportistasClient<$Result.GetResult<Prisma.$tb_pagos_deportistasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tb_pagos_deportistas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_pagos_deportistasFindFirstOrThrowArgs} args - Arguments to find a Tb_pagos_deportistas
     * @example
     * // Get one Tb_pagos_deportistas
     * const tb_pagos_deportistas = await prisma.tb_pagos_deportistas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tb_pagos_deportistasFindFirstOrThrowArgs>(args?: SelectSubset<T, tb_pagos_deportistasFindFirstOrThrowArgs<ExtArgs>>): Prisma__tb_pagos_deportistasClient<$Result.GetResult<Prisma.$tb_pagos_deportistasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tb_pagos_deportistas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_pagos_deportistasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tb_pagos_deportistas
     * const tb_pagos_deportistas = await prisma.tb_pagos_deportistas.findMany()
     * 
     * // Get first 10 Tb_pagos_deportistas
     * const tb_pagos_deportistas = await prisma.tb_pagos_deportistas.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tb_pagos_deportistasWithIdOnly = await prisma.tb_pagos_deportistas.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tb_pagos_deportistasFindManyArgs>(args?: SelectSubset<T, tb_pagos_deportistasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_pagos_deportistasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tb_pagos_deportistas.
     * @param {tb_pagos_deportistasCreateArgs} args - Arguments to create a Tb_pagos_deportistas.
     * @example
     * // Create one Tb_pagos_deportistas
     * const Tb_pagos_deportistas = await prisma.tb_pagos_deportistas.create({
     *   data: {
     *     // ... data to create a Tb_pagos_deportistas
     *   }
     * })
     * 
     */
    create<T extends tb_pagos_deportistasCreateArgs>(args: SelectSubset<T, tb_pagos_deportistasCreateArgs<ExtArgs>>): Prisma__tb_pagos_deportistasClient<$Result.GetResult<Prisma.$tb_pagos_deportistasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tb_pagos_deportistas.
     * @param {tb_pagos_deportistasCreateManyArgs} args - Arguments to create many Tb_pagos_deportistas.
     * @example
     * // Create many Tb_pagos_deportistas
     * const tb_pagos_deportistas = await prisma.tb_pagos_deportistas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tb_pagos_deportistasCreateManyArgs>(args?: SelectSubset<T, tb_pagos_deportistasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tb_pagos_deportistas.
     * @param {tb_pagos_deportistasDeleteArgs} args - Arguments to delete one Tb_pagos_deportistas.
     * @example
     * // Delete one Tb_pagos_deportistas
     * const Tb_pagos_deportistas = await prisma.tb_pagos_deportistas.delete({
     *   where: {
     *     // ... filter to delete one Tb_pagos_deportistas
     *   }
     * })
     * 
     */
    delete<T extends tb_pagos_deportistasDeleteArgs>(args: SelectSubset<T, tb_pagos_deportistasDeleteArgs<ExtArgs>>): Prisma__tb_pagos_deportistasClient<$Result.GetResult<Prisma.$tb_pagos_deportistasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tb_pagos_deportistas.
     * @param {tb_pagos_deportistasUpdateArgs} args - Arguments to update one Tb_pagos_deportistas.
     * @example
     * // Update one Tb_pagos_deportistas
     * const tb_pagos_deportistas = await prisma.tb_pagos_deportistas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tb_pagos_deportistasUpdateArgs>(args: SelectSubset<T, tb_pagos_deportistasUpdateArgs<ExtArgs>>): Prisma__tb_pagos_deportistasClient<$Result.GetResult<Prisma.$tb_pagos_deportistasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tb_pagos_deportistas.
     * @param {tb_pagos_deportistasDeleteManyArgs} args - Arguments to filter Tb_pagos_deportistas to delete.
     * @example
     * // Delete a few Tb_pagos_deportistas
     * const { count } = await prisma.tb_pagos_deportistas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tb_pagos_deportistasDeleteManyArgs>(args?: SelectSubset<T, tb_pagos_deportistasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tb_pagos_deportistas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_pagos_deportistasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tb_pagos_deportistas
     * const tb_pagos_deportistas = await prisma.tb_pagos_deportistas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tb_pagos_deportistasUpdateManyArgs>(args: SelectSubset<T, tb_pagos_deportistasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tb_pagos_deportistas.
     * @param {tb_pagos_deportistasUpsertArgs} args - Arguments to update or create a Tb_pagos_deportistas.
     * @example
     * // Update or create a Tb_pagos_deportistas
     * const tb_pagos_deportistas = await prisma.tb_pagos_deportistas.upsert({
     *   create: {
     *     // ... data to create a Tb_pagos_deportistas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tb_pagos_deportistas we want to update
     *   }
     * })
     */
    upsert<T extends tb_pagos_deportistasUpsertArgs>(args: SelectSubset<T, tb_pagos_deportistasUpsertArgs<ExtArgs>>): Prisma__tb_pagos_deportistasClient<$Result.GetResult<Prisma.$tb_pagos_deportistasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tb_pagos_deportistas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_pagos_deportistasCountArgs} args - Arguments to filter Tb_pagos_deportistas to count.
     * @example
     * // Count the number of Tb_pagos_deportistas
     * const count = await prisma.tb_pagos_deportistas.count({
     *   where: {
     *     // ... the filter for the Tb_pagos_deportistas we want to count
     *   }
     * })
    **/
    count<T extends tb_pagos_deportistasCountArgs>(
      args?: Subset<T, tb_pagos_deportistasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tb_pagos_deportistasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tb_pagos_deportistas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tb_pagos_deportistasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Tb_pagos_deportistasAggregateArgs>(args: Subset<T, Tb_pagos_deportistasAggregateArgs>): Prisma.PrismaPromise<GetTb_pagos_deportistasAggregateType<T>>

    /**
     * Group by Tb_pagos_deportistas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_pagos_deportistasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tb_pagos_deportistasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tb_pagos_deportistasGroupByArgs['orderBy'] }
        : { orderBy?: tb_pagos_deportistasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tb_pagos_deportistasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTb_pagos_deportistasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tb_pagos_deportistas model
   */
  readonly fields: tb_pagos_deportistasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tb_pagos_deportistas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tb_pagos_deportistasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tb_pagos_deportistas model
   */
  interface tb_pagos_deportistasFieldRefs {
    readonly id: FieldRef<"tb_pagos_deportistas", 'Int'>
    readonly id_deportista: FieldRef<"tb_pagos_deportistas", 'Int'>
    readonly fecha_pago: FieldRef<"tb_pagos_deportistas", 'DateTime'>
    readonly valor: FieldRef<"tb_pagos_deportistas", 'Decimal'>
    readonly tipo_pago: FieldRef<"tb_pagos_deportistas", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tb_pagos_deportistas findUnique
   */
  export type tb_pagos_deportistasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_pagos_deportistas
     */
    select?: tb_pagos_deportistasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_pagos_deportistas
     */
    omit?: tb_pagos_deportistasOmit<ExtArgs> | null
    /**
     * Filter, which tb_pagos_deportistas to fetch.
     */
    where: tb_pagos_deportistasWhereUniqueInput
  }

  /**
   * tb_pagos_deportistas findUniqueOrThrow
   */
  export type tb_pagos_deportistasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_pagos_deportistas
     */
    select?: tb_pagos_deportistasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_pagos_deportistas
     */
    omit?: tb_pagos_deportistasOmit<ExtArgs> | null
    /**
     * Filter, which tb_pagos_deportistas to fetch.
     */
    where: tb_pagos_deportistasWhereUniqueInput
  }

  /**
   * tb_pagos_deportistas findFirst
   */
  export type tb_pagos_deportistasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_pagos_deportistas
     */
    select?: tb_pagos_deportistasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_pagos_deportistas
     */
    omit?: tb_pagos_deportistasOmit<ExtArgs> | null
    /**
     * Filter, which tb_pagos_deportistas to fetch.
     */
    where?: tb_pagos_deportistasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_pagos_deportistas to fetch.
     */
    orderBy?: tb_pagos_deportistasOrderByWithRelationInput | tb_pagos_deportistasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_pagos_deportistas.
     */
    cursor?: tb_pagos_deportistasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_pagos_deportistas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_pagos_deportistas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_pagos_deportistas.
     */
    distinct?: Tb_pagos_deportistasScalarFieldEnum | Tb_pagos_deportistasScalarFieldEnum[]
  }

  /**
   * tb_pagos_deportistas findFirstOrThrow
   */
  export type tb_pagos_deportistasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_pagos_deportistas
     */
    select?: tb_pagos_deportistasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_pagos_deportistas
     */
    omit?: tb_pagos_deportistasOmit<ExtArgs> | null
    /**
     * Filter, which tb_pagos_deportistas to fetch.
     */
    where?: tb_pagos_deportistasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_pagos_deportistas to fetch.
     */
    orderBy?: tb_pagos_deportistasOrderByWithRelationInput | tb_pagos_deportistasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_pagos_deportistas.
     */
    cursor?: tb_pagos_deportistasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_pagos_deportistas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_pagos_deportistas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_pagos_deportistas.
     */
    distinct?: Tb_pagos_deportistasScalarFieldEnum | Tb_pagos_deportistasScalarFieldEnum[]
  }

  /**
   * tb_pagos_deportistas findMany
   */
  export type tb_pagos_deportistasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_pagos_deportistas
     */
    select?: tb_pagos_deportistasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_pagos_deportistas
     */
    omit?: tb_pagos_deportistasOmit<ExtArgs> | null
    /**
     * Filter, which tb_pagos_deportistas to fetch.
     */
    where?: tb_pagos_deportistasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_pagos_deportistas to fetch.
     */
    orderBy?: tb_pagos_deportistasOrderByWithRelationInput | tb_pagos_deportistasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tb_pagos_deportistas.
     */
    cursor?: tb_pagos_deportistasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_pagos_deportistas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_pagos_deportistas.
     */
    skip?: number
    distinct?: Tb_pagos_deportistasScalarFieldEnum | Tb_pagos_deportistasScalarFieldEnum[]
  }

  /**
   * tb_pagos_deportistas create
   */
  export type tb_pagos_deportistasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_pagos_deportistas
     */
    select?: tb_pagos_deportistasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_pagos_deportistas
     */
    omit?: tb_pagos_deportistasOmit<ExtArgs> | null
    /**
     * The data needed to create a tb_pagos_deportistas.
     */
    data: XOR<tb_pagos_deportistasCreateInput, tb_pagos_deportistasUncheckedCreateInput>
  }

  /**
   * tb_pagos_deportistas createMany
   */
  export type tb_pagos_deportistasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tb_pagos_deportistas.
     */
    data: tb_pagos_deportistasCreateManyInput | tb_pagos_deportistasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tb_pagos_deportistas update
   */
  export type tb_pagos_deportistasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_pagos_deportistas
     */
    select?: tb_pagos_deportistasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_pagos_deportistas
     */
    omit?: tb_pagos_deportistasOmit<ExtArgs> | null
    /**
     * The data needed to update a tb_pagos_deportistas.
     */
    data: XOR<tb_pagos_deportistasUpdateInput, tb_pagos_deportistasUncheckedUpdateInput>
    /**
     * Choose, which tb_pagos_deportistas to update.
     */
    where: tb_pagos_deportistasWhereUniqueInput
  }

  /**
   * tb_pagos_deportistas updateMany
   */
  export type tb_pagos_deportistasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tb_pagos_deportistas.
     */
    data: XOR<tb_pagos_deportistasUpdateManyMutationInput, tb_pagos_deportistasUncheckedUpdateManyInput>
    /**
     * Filter which tb_pagos_deportistas to update
     */
    where?: tb_pagos_deportistasWhereInput
    /**
     * Limit how many tb_pagos_deportistas to update.
     */
    limit?: number
  }

  /**
   * tb_pagos_deportistas upsert
   */
  export type tb_pagos_deportistasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_pagos_deportistas
     */
    select?: tb_pagos_deportistasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_pagos_deportistas
     */
    omit?: tb_pagos_deportistasOmit<ExtArgs> | null
    /**
     * The filter to search for the tb_pagos_deportistas to update in case it exists.
     */
    where: tb_pagos_deportistasWhereUniqueInput
    /**
     * In case the tb_pagos_deportistas found by the `where` argument doesn't exist, create a new tb_pagos_deportistas with this data.
     */
    create: XOR<tb_pagos_deportistasCreateInput, tb_pagos_deportistasUncheckedCreateInput>
    /**
     * In case the tb_pagos_deportistas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tb_pagos_deportistasUpdateInput, tb_pagos_deportistasUncheckedUpdateInput>
  }

  /**
   * tb_pagos_deportistas delete
   */
  export type tb_pagos_deportistasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_pagos_deportistas
     */
    select?: tb_pagos_deportistasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_pagos_deportistas
     */
    omit?: tb_pagos_deportistasOmit<ExtArgs> | null
    /**
     * Filter which tb_pagos_deportistas to delete.
     */
    where: tb_pagos_deportistasWhereUniqueInput
  }

  /**
   * tb_pagos_deportistas deleteMany
   */
  export type tb_pagos_deportistasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_pagos_deportistas to delete
     */
    where?: tb_pagos_deportistasWhereInput
    /**
     * Limit how many tb_pagos_deportistas to delete.
     */
    limit?: number
  }

  /**
   * tb_pagos_deportistas without action
   */
  export type tb_pagos_deportistasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_pagos_deportistas
     */
    select?: tb_pagos_deportistasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_pagos_deportistas
     */
    omit?: tb_pagos_deportistasOmit<ExtArgs> | null
  }


  /**
   * Model tb_personas_club
   */

  export type AggregateTb_personas_club = {
    _count: Tb_personas_clubCountAggregateOutputType | null
    _avg: Tb_personas_clubAvgAggregateOutputType | null
    _sum: Tb_personas_clubSumAggregateOutputType | null
    _min: Tb_personas_clubMinAggregateOutputType | null
    _max: Tb_personas_clubMaxAggregateOutputType | null
  }

  export type Tb_personas_clubAvgAggregateOutputType = {
    id: number | null
    id_municipio: number | null
    id_usuario: number | null
    peso: number | null
    altura: number | null
    numero_telefono: number | null
  }

  export type Tb_personas_clubSumAggregateOutputType = {
    id: number | null
    id_municipio: number | null
    id_usuario: number | null
    peso: number | null
    altura: number | null
    numero_telefono: number | null
  }

  export type Tb_personas_clubMinAggregateOutputType = {
    id: number | null
    tipo_documento: string | null
    id_municipio: number | null
    id_usuario: number | null
    nombres: string | null
    apellidos: string | null
    fecha_nacimento: Date | null
    tipo_rh: string | null
    peso: number | null
    altura: number | null
    correo: string | null
    numero_telefono: number | null
    talla_camisa: string | null
    talla_calzado: string | null
    talla_pantaloneta: string | null
    genero: string | null
    direccion: string | null
  }

  export type Tb_personas_clubMaxAggregateOutputType = {
    id: number | null
    tipo_documento: string | null
    id_municipio: number | null
    id_usuario: number | null
    nombres: string | null
    apellidos: string | null
    fecha_nacimento: Date | null
    tipo_rh: string | null
    peso: number | null
    altura: number | null
    correo: string | null
    numero_telefono: number | null
    talla_camisa: string | null
    talla_calzado: string | null
    talla_pantaloneta: string | null
    genero: string | null
    direccion: string | null
  }

  export type Tb_personas_clubCountAggregateOutputType = {
    id: number
    tipo_documento: number
    id_municipio: number
    id_usuario: number
    nombres: number
    apellidos: number
    fecha_nacimento: number
    tipo_rh: number
    peso: number
    altura: number
    correo: number
    numero_telefono: number
    talla_camisa: number
    talla_calzado: number
    talla_pantaloneta: number
    genero: number
    direccion: number
    _all: number
  }


  export type Tb_personas_clubAvgAggregateInputType = {
    id?: true
    id_municipio?: true
    id_usuario?: true
    peso?: true
    altura?: true
    numero_telefono?: true
  }

  export type Tb_personas_clubSumAggregateInputType = {
    id?: true
    id_municipio?: true
    id_usuario?: true
    peso?: true
    altura?: true
    numero_telefono?: true
  }

  export type Tb_personas_clubMinAggregateInputType = {
    id?: true
    tipo_documento?: true
    id_municipio?: true
    id_usuario?: true
    nombres?: true
    apellidos?: true
    fecha_nacimento?: true
    tipo_rh?: true
    peso?: true
    altura?: true
    correo?: true
    numero_telefono?: true
    talla_camisa?: true
    talla_calzado?: true
    talla_pantaloneta?: true
    genero?: true
    direccion?: true
  }

  export type Tb_personas_clubMaxAggregateInputType = {
    id?: true
    tipo_documento?: true
    id_municipio?: true
    id_usuario?: true
    nombres?: true
    apellidos?: true
    fecha_nacimento?: true
    tipo_rh?: true
    peso?: true
    altura?: true
    correo?: true
    numero_telefono?: true
    talla_camisa?: true
    talla_calzado?: true
    talla_pantaloneta?: true
    genero?: true
    direccion?: true
  }

  export type Tb_personas_clubCountAggregateInputType = {
    id?: true
    tipo_documento?: true
    id_municipio?: true
    id_usuario?: true
    nombres?: true
    apellidos?: true
    fecha_nacimento?: true
    tipo_rh?: true
    peso?: true
    altura?: true
    correo?: true
    numero_telefono?: true
    talla_camisa?: true
    talla_calzado?: true
    talla_pantaloneta?: true
    genero?: true
    direccion?: true
    _all?: true
  }

  export type Tb_personas_clubAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_personas_club to aggregate.
     */
    where?: tb_personas_clubWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_personas_clubs to fetch.
     */
    orderBy?: tb_personas_clubOrderByWithRelationInput | tb_personas_clubOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tb_personas_clubWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_personas_clubs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_personas_clubs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tb_personas_clubs
    **/
    _count?: true | Tb_personas_clubCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tb_personas_clubAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tb_personas_clubSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tb_personas_clubMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tb_personas_clubMaxAggregateInputType
  }

  export type GetTb_personas_clubAggregateType<T extends Tb_personas_clubAggregateArgs> = {
        [P in keyof T & keyof AggregateTb_personas_club]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTb_personas_club[P]>
      : GetScalarType<T[P], AggregateTb_personas_club[P]>
  }




  export type tb_personas_clubGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tb_personas_clubWhereInput
    orderBy?: tb_personas_clubOrderByWithAggregationInput | tb_personas_clubOrderByWithAggregationInput[]
    by: Tb_personas_clubScalarFieldEnum[] | Tb_personas_clubScalarFieldEnum
    having?: tb_personas_clubScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tb_personas_clubCountAggregateInputType | true
    _avg?: Tb_personas_clubAvgAggregateInputType
    _sum?: Tb_personas_clubSumAggregateInputType
    _min?: Tb_personas_clubMinAggregateInputType
    _max?: Tb_personas_clubMaxAggregateInputType
  }

  export type Tb_personas_clubGroupByOutputType = {
    id: number
    tipo_documento: string
    id_municipio: number
    id_usuario: number
    nombres: string
    apellidos: string
    fecha_nacimento: Date | null
    tipo_rh: string | null
    peso: number | null
    altura: number | null
    correo: string
    numero_telefono: number | null
    talla_camisa: string | null
    talla_calzado: string | null
    talla_pantaloneta: string | null
    genero: string | null
    direccion: string | null
    _count: Tb_personas_clubCountAggregateOutputType | null
    _avg: Tb_personas_clubAvgAggregateOutputType | null
    _sum: Tb_personas_clubSumAggregateOutputType | null
    _min: Tb_personas_clubMinAggregateOutputType | null
    _max: Tb_personas_clubMaxAggregateOutputType | null
  }

  type GetTb_personas_clubGroupByPayload<T extends tb_personas_clubGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tb_personas_clubGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tb_personas_clubGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tb_personas_clubGroupByOutputType[P]>
            : GetScalarType<T[P], Tb_personas_clubGroupByOutputType[P]>
        }
      >
    >


  export type tb_personas_clubSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo_documento?: boolean
    id_municipio?: boolean
    id_usuario?: boolean
    nombres?: boolean
    apellidos?: boolean
    fecha_nacimento?: boolean
    tipo_rh?: boolean
    peso?: boolean
    altura?: boolean
    correo?: boolean
    numero_telefono?: boolean
    talla_camisa?: boolean
    talla_calzado?: boolean
    talla_pantaloneta?: boolean
    genero?: boolean
    direccion?: boolean
  }, ExtArgs["result"]["tb_personas_club"]>



  export type tb_personas_clubSelectScalar = {
    id?: boolean
    tipo_documento?: boolean
    id_municipio?: boolean
    id_usuario?: boolean
    nombres?: boolean
    apellidos?: boolean
    fecha_nacimento?: boolean
    tipo_rh?: boolean
    peso?: boolean
    altura?: boolean
    correo?: boolean
    numero_telefono?: boolean
    talla_camisa?: boolean
    talla_calzado?: boolean
    talla_pantaloneta?: boolean
    genero?: boolean
    direccion?: boolean
  }

  export type tb_personas_clubOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tipo_documento" | "id_municipio" | "id_usuario" | "nombres" | "apellidos" | "fecha_nacimento" | "tipo_rh" | "peso" | "altura" | "correo" | "numero_telefono" | "talla_camisa" | "talla_calzado" | "talla_pantaloneta" | "genero" | "direccion", ExtArgs["result"]["tb_personas_club"]>

  export type $tb_personas_clubPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tb_personas_club"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tipo_documento: string
      id_municipio: number
      id_usuario: number
      nombres: string
      apellidos: string
      fecha_nacimento: Date | null
      tipo_rh: string | null
      peso: number | null
      altura: number | null
      correo: string
      numero_telefono: number | null
      talla_camisa: string | null
      talla_calzado: string | null
      talla_pantaloneta: string | null
      genero: string | null
      direccion: string | null
    }, ExtArgs["result"]["tb_personas_club"]>
    composites: {}
  }

  type tb_personas_clubGetPayload<S extends boolean | null | undefined | tb_personas_clubDefaultArgs> = $Result.GetResult<Prisma.$tb_personas_clubPayload, S>

  type tb_personas_clubCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tb_personas_clubFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tb_personas_clubCountAggregateInputType | true
    }

  export interface tb_personas_clubDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tb_personas_club'], meta: { name: 'tb_personas_club' } }
    /**
     * Find zero or one Tb_personas_club that matches the filter.
     * @param {tb_personas_clubFindUniqueArgs} args - Arguments to find a Tb_personas_club
     * @example
     * // Get one Tb_personas_club
     * const tb_personas_club = await prisma.tb_personas_club.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tb_personas_clubFindUniqueArgs>(args: SelectSubset<T, tb_personas_clubFindUniqueArgs<ExtArgs>>): Prisma__tb_personas_clubClient<$Result.GetResult<Prisma.$tb_personas_clubPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tb_personas_club that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tb_personas_clubFindUniqueOrThrowArgs} args - Arguments to find a Tb_personas_club
     * @example
     * // Get one Tb_personas_club
     * const tb_personas_club = await prisma.tb_personas_club.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tb_personas_clubFindUniqueOrThrowArgs>(args: SelectSubset<T, tb_personas_clubFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tb_personas_clubClient<$Result.GetResult<Prisma.$tb_personas_clubPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tb_personas_club that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_personas_clubFindFirstArgs} args - Arguments to find a Tb_personas_club
     * @example
     * // Get one Tb_personas_club
     * const tb_personas_club = await prisma.tb_personas_club.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tb_personas_clubFindFirstArgs>(args?: SelectSubset<T, tb_personas_clubFindFirstArgs<ExtArgs>>): Prisma__tb_personas_clubClient<$Result.GetResult<Prisma.$tb_personas_clubPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tb_personas_club that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_personas_clubFindFirstOrThrowArgs} args - Arguments to find a Tb_personas_club
     * @example
     * // Get one Tb_personas_club
     * const tb_personas_club = await prisma.tb_personas_club.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tb_personas_clubFindFirstOrThrowArgs>(args?: SelectSubset<T, tb_personas_clubFindFirstOrThrowArgs<ExtArgs>>): Prisma__tb_personas_clubClient<$Result.GetResult<Prisma.$tb_personas_clubPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tb_personas_clubs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_personas_clubFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tb_personas_clubs
     * const tb_personas_clubs = await prisma.tb_personas_club.findMany()
     * 
     * // Get first 10 Tb_personas_clubs
     * const tb_personas_clubs = await prisma.tb_personas_club.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tb_personas_clubWithIdOnly = await prisma.tb_personas_club.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tb_personas_clubFindManyArgs>(args?: SelectSubset<T, tb_personas_clubFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_personas_clubPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tb_personas_club.
     * @param {tb_personas_clubCreateArgs} args - Arguments to create a Tb_personas_club.
     * @example
     * // Create one Tb_personas_club
     * const Tb_personas_club = await prisma.tb_personas_club.create({
     *   data: {
     *     // ... data to create a Tb_personas_club
     *   }
     * })
     * 
     */
    create<T extends tb_personas_clubCreateArgs>(args: SelectSubset<T, tb_personas_clubCreateArgs<ExtArgs>>): Prisma__tb_personas_clubClient<$Result.GetResult<Prisma.$tb_personas_clubPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tb_personas_clubs.
     * @param {tb_personas_clubCreateManyArgs} args - Arguments to create many Tb_personas_clubs.
     * @example
     * // Create many Tb_personas_clubs
     * const tb_personas_club = await prisma.tb_personas_club.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tb_personas_clubCreateManyArgs>(args?: SelectSubset<T, tb_personas_clubCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tb_personas_club.
     * @param {tb_personas_clubDeleteArgs} args - Arguments to delete one Tb_personas_club.
     * @example
     * // Delete one Tb_personas_club
     * const Tb_personas_club = await prisma.tb_personas_club.delete({
     *   where: {
     *     // ... filter to delete one Tb_personas_club
     *   }
     * })
     * 
     */
    delete<T extends tb_personas_clubDeleteArgs>(args: SelectSubset<T, tb_personas_clubDeleteArgs<ExtArgs>>): Prisma__tb_personas_clubClient<$Result.GetResult<Prisma.$tb_personas_clubPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tb_personas_club.
     * @param {tb_personas_clubUpdateArgs} args - Arguments to update one Tb_personas_club.
     * @example
     * // Update one Tb_personas_club
     * const tb_personas_club = await prisma.tb_personas_club.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tb_personas_clubUpdateArgs>(args: SelectSubset<T, tb_personas_clubUpdateArgs<ExtArgs>>): Prisma__tb_personas_clubClient<$Result.GetResult<Prisma.$tb_personas_clubPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tb_personas_clubs.
     * @param {tb_personas_clubDeleteManyArgs} args - Arguments to filter Tb_personas_clubs to delete.
     * @example
     * // Delete a few Tb_personas_clubs
     * const { count } = await prisma.tb_personas_club.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tb_personas_clubDeleteManyArgs>(args?: SelectSubset<T, tb_personas_clubDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tb_personas_clubs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_personas_clubUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tb_personas_clubs
     * const tb_personas_club = await prisma.tb_personas_club.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tb_personas_clubUpdateManyArgs>(args: SelectSubset<T, tb_personas_clubUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tb_personas_club.
     * @param {tb_personas_clubUpsertArgs} args - Arguments to update or create a Tb_personas_club.
     * @example
     * // Update or create a Tb_personas_club
     * const tb_personas_club = await prisma.tb_personas_club.upsert({
     *   create: {
     *     // ... data to create a Tb_personas_club
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tb_personas_club we want to update
     *   }
     * })
     */
    upsert<T extends tb_personas_clubUpsertArgs>(args: SelectSubset<T, tb_personas_clubUpsertArgs<ExtArgs>>): Prisma__tb_personas_clubClient<$Result.GetResult<Prisma.$tb_personas_clubPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tb_personas_clubs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_personas_clubCountArgs} args - Arguments to filter Tb_personas_clubs to count.
     * @example
     * // Count the number of Tb_personas_clubs
     * const count = await prisma.tb_personas_club.count({
     *   where: {
     *     // ... the filter for the Tb_personas_clubs we want to count
     *   }
     * })
    **/
    count<T extends tb_personas_clubCountArgs>(
      args?: Subset<T, tb_personas_clubCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tb_personas_clubCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tb_personas_club.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tb_personas_clubAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Tb_personas_clubAggregateArgs>(args: Subset<T, Tb_personas_clubAggregateArgs>): Prisma.PrismaPromise<GetTb_personas_clubAggregateType<T>>

    /**
     * Group by Tb_personas_club.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_personas_clubGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tb_personas_clubGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tb_personas_clubGroupByArgs['orderBy'] }
        : { orderBy?: tb_personas_clubGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tb_personas_clubGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTb_personas_clubGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tb_personas_club model
   */
  readonly fields: tb_personas_clubFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tb_personas_club.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tb_personas_clubClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tb_personas_club model
   */
  interface tb_personas_clubFieldRefs {
    readonly id: FieldRef<"tb_personas_club", 'Int'>
    readonly tipo_documento: FieldRef<"tb_personas_club", 'String'>
    readonly id_municipio: FieldRef<"tb_personas_club", 'Int'>
    readonly id_usuario: FieldRef<"tb_personas_club", 'Int'>
    readonly nombres: FieldRef<"tb_personas_club", 'String'>
    readonly apellidos: FieldRef<"tb_personas_club", 'String'>
    readonly fecha_nacimento: FieldRef<"tb_personas_club", 'DateTime'>
    readonly tipo_rh: FieldRef<"tb_personas_club", 'String'>
    readonly peso: FieldRef<"tb_personas_club", 'Float'>
    readonly altura: FieldRef<"tb_personas_club", 'Float'>
    readonly correo: FieldRef<"tb_personas_club", 'String'>
    readonly numero_telefono: FieldRef<"tb_personas_club", 'Int'>
    readonly talla_camisa: FieldRef<"tb_personas_club", 'String'>
    readonly talla_calzado: FieldRef<"tb_personas_club", 'String'>
    readonly talla_pantaloneta: FieldRef<"tb_personas_club", 'String'>
    readonly genero: FieldRef<"tb_personas_club", 'String'>
    readonly direccion: FieldRef<"tb_personas_club", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tb_personas_club findUnique
   */
  export type tb_personas_clubFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_personas_club
     */
    select?: tb_personas_clubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_personas_club
     */
    omit?: tb_personas_clubOmit<ExtArgs> | null
    /**
     * Filter, which tb_personas_club to fetch.
     */
    where: tb_personas_clubWhereUniqueInput
  }

  /**
   * tb_personas_club findUniqueOrThrow
   */
  export type tb_personas_clubFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_personas_club
     */
    select?: tb_personas_clubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_personas_club
     */
    omit?: tb_personas_clubOmit<ExtArgs> | null
    /**
     * Filter, which tb_personas_club to fetch.
     */
    where: tb_personas_clubWhereUniqueInput
  }

  /**
   * tb_personas_club findFirst
   */
  export type tb_personas_clubFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_personas_club
     */
    select?: tb_personas_clubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_personas_club
     */
    omit?: tb_personas_clubOmit<ExtArgs> | null
    /**
     * Filter, which tb_personas_club to fetch.
     */
    where?: tb_personas_clubWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_personas_clubs to fetch.
     */
    orderBy?: tb_personas_clubOrderByWithRelationInput | tb_personas_clubOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_personas_clubs.
     */
    cursor?: tb_personas_clubWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_personas_clubs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_personas_clubs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_personas_clubs.
     */
    distinct?: Tb_personas_clubScalarFieldEnum | Tb_personas_clubScalarFieldEnum[]
  }

  /**
   * tb_personas_club findFirstOrThrow
   */
  export type tb_personas_clubFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_personas_club
     */
    select?: tb_personas_clubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_personas_club
     */
    omit?: tb_personas_clubOmit<ExtArgs> | null
    /**
     * Filter, which tb_personas_club to fetch.
     */
    where?: tb_personas_clubWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_personas_clubs to fetch.
     */
    orderBy?: tb_personas_clubOrderByWithRelationInput | tb_personas_clubOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_personas_clubs.
     */
    cursor?: tb_personas_clubWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_personas_clubs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_personas_clubs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_personas_clubs.
     */
    distinct?: Tb_personas_clubScalarFieldEnum | Tb_personas_clubScalarFieldEnum[]
  }

  /**
   * tb_personas_club findMany
   */
  export type tb_personas_clubFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_personas_club
     */
    select?: tb_personas_clubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_personas_club
     */
    omit?: tb_personas_clubOmit<ExtArgs> | null
    /**
     * Filter, which tb_personas_clubs to fetch.
     */
    where?: tb_personas_clubWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_personas_clubs to fetch.
     */
    orderBy?: tb_personas_clubOrderByWithRelationInput | tb_personas_clubOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tb_personas_clubs.
     */
    cursor?: tb_personas_clubWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_personas_clubs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_personas_clubs.
     */
    skip?: number
    distinct?: Tb_personas_clubScalarFieldEnum | Tb_personas_clubScalarFieldEnum[]
  }

  /**
   * tb_personas_club create
   */
  export type tb_personas_clubCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_personas_club
     */
    select?: tb_personas_clubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_personas_club
     */
    omit?: tb_personas_clubOmit<ExtArgs> | null
    /**
     * The data needed to create a tb_personas_club.
     */
    data: XOR<tb_personas_clubCreateInput, tb_personas_clubUncheckedCreateInput>
  }

  /**
   * tb_personas_club createMany
   */
  export type tb_personas_clubCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tb_personas_clubs.
     */
    data: tb_personas_clubCreateManyInput | tb_personas_clubCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tb_personas_club update
   */
  export type tb_personas_clubUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_personas_club
     */
    select?: tb_personas_clubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_personas_club
     */
    omit?: tb_personas_clubOmit<ExtArgs> | null
    /**
     * The data needed to update a tb_personas_club.
     */
    data: XOR<tb_personas_clubUpdateInput, tb_personas_clubUncheckedUpdateInput>
    /**
     * Choose, which tb_personas_club to update.
     */
    where: tb_personas_clubWhereUniqueInput
  }

  /**
   * tb_personas_club updateMany
   */
  export type tb_personas_clubUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tb_personas_clubs.
     */
    data: XOR<tb_personas_clubUpdateManyMutationInput, tb_personas_clubUncheckedUpdateManyInput>
    /**
     * Filter which tb_personas_clubs to update
     */
    where?: tb_personas_clubWhereInput
    /**
     * Limit how many tb_personas_clubs to update.
     */
    limit?: number
  }

  /**
   * tb_personas_club upsert
   */
  export type tb_personas_clubUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_personas_club
     */
    select?: tb_personas_clubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_personas_club
     */
    omit?: tb_personas_clubOmit<ExtArgs> | null
    /**
     * The filter to search for the tb_personas_club to update in case it exists.
     */
    where: tb_personas_clubWhereUniqueInput
    /**
     * In case the tb_personas_club found by the `where` argument doesn't exist, create a new tb_personas_club with this data.
     */
    create: XOR<tb_personas_clubCreateInput, tb_personas_clubUncheckedCreateInput>
    /**
     * In case the tb_personas_club was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tb_personas_clubUpdateInput, tb_personas_clubUncheckedUpdateInput>
  }

  /**
   * tb_personas_club delete
   */
  export type tb_personas_clubDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_personas_club
     */
    select?: tb_personas_clubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_personas_club
     */
    omit?: tb_personas_clubOmit<ExtArgs> | null
    /**
     * Filter which tb_personas_club to delete.
     */
    where: tb_personas_clubWhereUniqueInput
  }

  /**
   * tb_personas_club deleteMany
   */
  export type tb_personas_clubDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_personas_clubs to delete
     */
    where?: tb_personas_clubWhereInput
    /**
     * Limit how many tb_personas_clubs to delete.
     */
    limit?: number
  }

  /**
   * tb_personas_club without action
   */
  export type tb_personas_clubDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_personas_club
     */
    select?: tb_personas_clubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_personas_club
     */
    omit?: tb_personas_clubOmit<ExtArgs> | null
  }


  /**
   * Model tb_tipo_documento
   */

  export type AggregateTb_tipo_documento = {
    _count: Tb_tipo_documentoCountAggregateOutputType | null
    _avg: Tb_tipo_documentoAvgAggregateOutputType | null
    _sum: Tb_tipo_documentoSumAggregateOutputType | null
    _min: Tb_tipo_documentoMinAggregateOutputType | null
    _max: Tb_tipo_documentoMaxAggregateOutputType | null
  }

  export type Tb_tipo_documentoAvgAggregateOutputType = {
    id: number | null
  }

  export type Tb_tipo_documentoSumAggregateOutputType = {
    id: number | null
  }

  export type Tb_tipo_documentoMinAggregateOutputType = {
    id: number | null
    tipo_documento: string | null
    descripcion: string | null
  }

  export type Tb_tipo_documentoMaxAggregateOutputType = {
    id: number | null
    tipo_documento: string | null
    descripcion: string | null
  }

  export type Tb_tipo_documentoCountAggregateOutputType = {
    id: number
    tipo_documento: number
    descripcion: number
    _all: number
  }


  export type Tb_tipo_documentoAvgAggregateInputType = {
    id?: true
  }

  export type Tb_tipo_documentoSumAggregateInputType = {
    id?: true
  }

  export type Tb_tipo_documentoMinAggregateInputType = {
    id?: true
    tipo_documento?: true
    descripcion?: true
  }

  export type Tb_tipo_documentoMaxAggregateInputType = {
    id?: true
    tipo_documento?: true
    descripcion?: true
  }

  export type Tb_tipo_documentoCountAggregateInputType = {
    id?: true
    tipo_documento?: true
    descripcion?: true
    _all?: true
  }

  export type Tb_tipo_documentoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_tipo_documento to aggregate.
     */
    where?: tb_tipo_documentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_tipo_documentos to fetch.
     */
    orderBy?: tb_tipo_documentoOrderByWithRelationInput | tb_tipo_documentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tb_tipo_documentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_tipo_documentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_tipo_documentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tb_tipo_documentos
    **/
    _count?: true | Tb_tipo_documentoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tb_tipo_documentoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tb_tipo_documentoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tb_tipo_documentoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tb_tipo_documentoMaxAggregateInputType
  }

  export type GetTb_tipo_documentoAggregateType<T extends Tb_tipo_documentoAggregateArgs> = {
        [P in keyof T & keyof AggregateTb_tipo_documento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTb_tipo_documento[P]>
      : GetScalarType<T[P], AggregateTb_tipo_documento[P]>
  }




  export type tb_tipo_documentoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tb_tipo_documentoWhereInput
    orderBy?: tb_tipo_documentoOrderByWithAggregationInput | tb_tipo_documentoOrderByWithAggregationInput[]
    by: Tb_tipo_documentoScalarFieldEnum[] | Tb_tipo_documentoScalarFieldEnum
    having?: tb_tipo_documentoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tb_tipo_documentoCountAggregateInputType | true
    _avg?: Tb_tipo_documentoAvgAggregateInputType
    _sum?: Tb_tipo_documentoSumAggregateInputType
    _min?: Tb_tipo_documentoMinAggregateInputType
    _max?: Tb_tipo_documentoMaxAggregateInputType
  }

  export type Tb_tipo_documentoGroupByOutputType = {
    id: number
    tipo_documento: string | null
    descripcion: string | null
    _count: Tb_tipo_documentoCountAggregateOutputType | null
    _avg: Tb_tipo_documentoAvgAggregateOutputType | null
    _sum: Tb_tipo_documentoSumAggregateOutputType | null
    _min: Tb_tipo_documentoMinAggregateOutputType | null
    _max: Tb_tipo_documentoMaxAggregateOutputType | null
  }

  type GetTb_tipo_documentoGroupByPayload<T extends tb_tipo_documentoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tb_tipo_documentoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tb_tipo_documentoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tb_tipo_documentoGroupByOutputType[P]>
            : GetScalarType<T[P], Tb_tipo_documentoGroupByOutputType[P]>
        }
      >
    >


  export type tb_tipo_documentoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo_documento?: boolean
    descripcion?: boolean
  }, ExtArgs["result"]["tb_tipo_documento"]>



  export type tb_tipo_documentoSelectScalar = {
    id?: boolean
    tipo_documento?: boolean
    descripcion?: boolean
  }

  export type tb_tipo_documentoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tipo_documento" | "descripcion", ExtArgs["result"]["tb_tipo_documento"]>

  export type $tb_tipo_documentoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tb_tipo_documento"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tipo_documento: string | null
      descripcion: string | null
    }, ExtArgs["result"]["tb_tipo_documento"]>
    composites: {}
  }

  type tb_tipo_documentoGetPayload<S extends boolean | null | undefined | tb_tipo_documentoDefaultArgs> = $Result.GetResult<Prisma.$tb_tipo_documentoPayload, S>

  type tb_tipo_documentoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tb_tipo_documentoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tb_tipo_documentoCountAggregateInputType | true
    }

  export interface tb_tipo_documentoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tb_tipo_documento'], meta: { name: 'tb_tipo_documento' } }
    /**
     * Find zero or one Tb_tipo_documento that matches the filter.
     * @param {tb_tipo_documentoFindUniqueArgs} args - Arguments to find a Tb_tipo_documento
     * @example
     * // Get one Tb_tipo_documento
     * const tb_tipo_documento = await prisma.tb_tipo_documento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tb_tipo_documentoFindUniqueArgs>(args: SelectSubset<T, tb_tipo_documentoFindUniqueArgs<ExtArgs>>): Prisma__tb_tipo_documentoClient<$Result.GetResult<Prisma.$tb_tipo_documentoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tb_tipo_documento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tb_tipo_documentoFindUniqueOrThrowArgs} args - Arguments to find a Tb_tipo_documento
     * @example
     * // Get one Tb_tipo_documento
     * const tb_tipo_documento = await prisma.tb_tipo_documento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tb_tipo_documentoFindUniqueOrThrowArgs>(args: SelectSubset<T, tb_tipo_documentoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tb_tipo_documentoClient<$Result.GetResult<Prisma.$tb_tipo_documentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tb_tipo_documento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_tipo_documentoFindFirstArgs} args - Arguments to find a Tb_tipo_documento
     * @example
     * // Get one Tb_tipo_documento
     * const tb_tipo_documento = await prisma.tb_tipo_documento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tb_tipo_documentoFindFirstArgs>(args?: SelectSubset<T, tb_tipo_documentoFindFirstArgs<ExtArgs>>): Prisma__tb_tipo_documentoClient<$Result.GetResult<Prisma.$tb_tipo_documentoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tb_tipo_documento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_tipo_documentoFindFirstOrThrowArgs} args - Arguments to find a Tb_tipo_documento
     * @example
     * // Get one Tb_tipo_documento
     * const tb_tipo_documento = await prisma.tb_tipo_documento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tb_tipo_documentoFindFirstOrThrowArgs>(args?: SelectSubset<T, tb_tipo_documentoFindFirstOrThrowArgs<ExtArgs>>): Prisma__tb_tipo_documentoClient<$Result.GetResult<Prisma.$tb_tipo_documentoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tb_tipo_documentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_tipo_documentoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tb_tipo_documentos
     * const tb_tipo_documentos = await prisma.tb_tipo_documento.findMany()
     * 
     * // Get first 10 Tb_tipo_documentos
     * const tb_tipo_documentos = await prisma.tb_tipo_documento.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tb_tipo_documentoWithIdOnly = await prisma.tb_tipo_documento.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tb_tipo_documentoFindManyArgs>(args?: SelectSubset<T, tb_tipo_documentoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_tipo_documentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tb_tipo_documento.
     * @param {tb_tipo_documentoCreateArgs} args - Arguments to create a Tb_tipo_documento.
     * @example
     * // Create one Tb_tipo_documento
     * const Tb_tipo_documento = await prisma.tb_tipo_documento.create({
     *   data: {
     *     // ... data to create a Tb_tipo_documento
     *   }
     * })
     * 
     */
    create<T extends tb_tipo_documentoCreateArgs>(args: SelectSubset<T, tb_tipo_documentoCreateArgs<ExtArgs>>): Prisma__tb_tipo_documentoClient<$Result.GetResult<Prisma.$tb_tipo_documentoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tb_tipo_documentos.
     * @param {tb_tipo_documentoCreateManyArgs} args - Arguments to create many Tb_tipo_documentos.
     * @example
     * // Create many Tb_tipo_documentos
     * const tb_tipo_documento = await prisma.tb_tipo_documento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tb_tipo_documentoCreateManyArgs>(args?: SelectSubset<T, tb_tipo_documentoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tb_tipo_documento.
     * @param {tb_tipo_documentoDeleteArgs} args - Arguments to delete one Tb_tipo_documento.
     * @example
     * // Delete one Tb_tipo_documento
     * const Tb_tipo_documento = await prisma.tb_tipo_documento.delete({
     *   where: {
     *     // ... filter to delete one Tb_tipo_documento
     *   }
     * })
     * 
     */
    delete<T extends tb_tipo_documentoDeleteArgs>(args: SelectSubset<T, tb_tipo_documentoDeleteArgs<ExtArgs>>): Prisma__tb_tipo_documentoClient<$Result.GetResult<Prisma.$tb_tipo_documentoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tb_tipo_documento.
     * @param {tb_tipo_documentoUpdateArgs} args - Arguments to update one Tb_tipo_documento.
     * @example
     * // Update one Tb_tipo_documento
     * const tb_tipo_documento = await prisma.tb_tipo_documento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tb_tipo_documentoUpdateArgs>(args: SelectSubset<T, tb_tipo_documentoUpdateArgs<ExtArgs>>): Prisma__tb_tipo_documentoClient<$Result.GetResult<Prisma.$tb_tipo_documentoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tb_tipo_documentos.
     * @param {tb_tipo_documentoDeleteManyArgs} args - Arguments to filter Tb_tipo_documentos to delete.
     * @example
     * // Delete a few Tb_tipo_documentos
     * const { count } = await prisma.tb_tipo_documento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tb_tipo_documentoDeleteManyArgs>(args?: SelectSubset<T, tb_tipo_documentoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tb_tipo_documentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_tipo_documentoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tb_tipo_documentos
     * const tb_tipo_documento = await prisma.tb_tipo_documento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tb_tipo_documentoUpdateManyArgs>(args: SelectSubset<T, tb_tipo_documentoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tb_tipo_documento.
     * @param {tb_tipo_documentoUpsertArgs} args - Arguments to update or create a Tb_tipo_documento.
     * @example
     * // Update or create a Tb_tipo_documento
     * const tb_tipo_documento = await prisma.tb_tipo_documento.upsert({
     *   create: {
     *     // ... data to create a Tb_tipo_documento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tb_tipo_documento we want to update
     *   }
     * })
     */
    upsert<T extends tb_tipo_documentoUpsertArgs>(args: SelectSubset<T, tb_tipo_documentoUpsertArgs<ExtArgs>>): Prisma__tb_tipo_documentoClient<$Result.GetResult<Prisma.$tb_tipo_documentoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tb_tipo_documentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_tipo_documentoCountArgs} args - Arguments to filter Tb_tipo_documentos to count.
     * @example
     * // Count the number of Tb_tipo_documentos
     * const count = await prisma.tb_tipo_documento.count({
     *   where: {
     *     // ... the filter for the Tb_tipo_documentos we want to count
     *   }
     * })
    **/
    count<T extends tb_tipo_documentoCountArgs>(
      args?: Subset<T, tb_tipo_documentoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tb_tipo_documentoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tb_tipo_documento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tb_tipo_documentoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Tb_tipo_documentoAggregateArgs>(args: Subset<T, Tb_tipo_documentoAggregateArgs>): Prisma.PrismaPromise<GetTb_tipo_documentoAggregateType<T>>

    /**
     * Group by Tb_tipo_documento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_tipo_documentoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tb_tipo_documentoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tb_tipo_documentoGroupByArgs['orderBy'] }
        : { orderBy?: tb_tipo_documentoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tb_tipo_documentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTb_tipo_documentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tb_tipo_documento model
   */
  readonly fields: tb_tipo_documentoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tb_tipo_documento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tb_tipo_documentoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tb_tipo_documento model
   */
  interface tb_tipo_documentoFieldRefs {
    readonly id: FieldRef<"tb_tipo_documento", 'Int'>
    readonly tipo_documento: FieldRef<"tb_tipo_documento", 'String'>
    readonly descripcion: FieldRef<"tb_tipo_documento", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tb_tipo_documento findUnique
   */
  export type tb_tipo_documentoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_tipo_documento
     */
    select?: tb_tipo_documentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_tipo_documento
     */
    omit?: tb_tipo_documentoOmit<ExtArgs> | null
    /**
     * Filter, which tb_tipo_documento to fetch.
     */
    where: tb_tipo_documentoWhereUniqueInput
  }

  /**
   * tb_tipo_documento findUniqueOrThrow
   */
  export type tb_tipo_documentoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_tipo_documento
     */
    select?: tb_tipo_documentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_tipo_documento
     */
    omit?: tb_tipo_documentoOmit<ExtArgs> | null
    /**
     * Filter, which tb_tipo_documento to fetch.
     */
    where: tb_tipo_documentoWhereUniqueInput
  }

  /**
   * tb_tipo_documento findFirst
   */
  export type tb_tipo_documentoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_tipo_documento
     */
    select?: tb_tipo_documentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_tipo_documento
     */
    omit?: tb_tipo_documentoOmit<ExtArgs> | null
    /**
     * Filter, which tb_tipo_documento to fetch.
     */
    where?: tb_tipo_documentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_tipo_documentos to fetch.
     */
    orderBy?: tb_tipo_documentoOrderByWithRelationInput | tb_tipo_documentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_tipo_documentos.
     */
    cursor?: tb_tipo_documentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_tipo_documentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_tipo_documentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_tipo_documentos.
     */
    distinct?: Tb_tipo_documentoScalarFieldEnum | Tb_tipo_documentoScalarFieldEnum[]
  }

  /**
   * tb_tipo_documento findFirstOrThrow
   */
  export type tb_tipo_documentoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_tipo_documento
     */
    select?: tb_tipo_documentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_tipo_documento
     */
    omit?: tb_tipo_documentoOmit<ExtArgs> | null
    /**
     * Filter, which tb_tipo_documento to fetch.
     */
    where?: tb_tipo_documentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_tipo_documentos to fetch.
     */
    orderBy?: tb_tipo_documentoOrderByWithRelationInput | tb_tipo_documentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_tipo_documentos.
     */
    cursor?: tb_tipo_documentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_tipo_documentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_tipo_documentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_tipo_documentos.
     */
    distinct?: Tb_tipo_documentoScalarFieldEnum | Tb_tipo_documentoScalarFieldEnum[]
  }

  /**
   * tb_tipo_documento findMany
   */
  export type tb_tipo_documentoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_tipo_documento
     */
    select?: tb_tipo_documentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_tipo_documento
     */
    omit?: tb_tipo_documentoOmit<ExtArgs> | null
    /**
     * Filter, which tb_tipo_documentos to fetch.
     */
    where?: tb_tipo_documentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_tipo_documentos to fetch.
     */
    orderBy?: tb_tipo_documentoOrderByWithRelationInput | tb_tipo_documentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tb_tipo_documentos.
     */
    cursor?: tb_tipo_documentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_tipo_documentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_tipo_documentos.
     */
    skip?: number
    distinct?: Tb_tipo_documentoScalarFieldEnum | Tb_tipo_documentoScalarFieldEnum[]
  }

  /**
   * tb_tipo_documento create
   */
  export type tb_tipo_documentoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_tipo_documento
     */
    select?: tb_tipo_documentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_tipo_documento
     */
    omit?: tb_tipo_documentoOmit<ExtArgs> | null
    /**
     * The data needed to create a tb_tipo_documento.
     */
    data?: XOR<tb_tipo_documentoCreateInput, tb_tipo_documentoUncheckedCreateInput>
  }

  /**
   * tb_tipo_documento createMany
   */
  export type tb_tipo_documentoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tb_tipo_documentos.
     */
    data: tb_tipo_documentoCreateManyInput | tb_tipo_documentoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tb_tipo_documento update
   */
  export type tb_tipo_documentoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_tipo_documento
     */
    select?: tb_tipo_documentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_tipo_documento
     */
    omit?: tb_tipo_documentoOmit<ExtArgs> | null
    /**
     * The data needed to update a tb_tipo_documento.
     */
    data: XOR<tb_tipo_documentoUpdateInput, tb_tipo_documentoUncheckedUpdateInput>
    /**
     * Choose, which tb_tipo_documento to update.
     */
    where: tb_tipo_documentoWhereUniqueInput
  }

  /**
   * tb_tipo_documento updateMany
   */
  export type tb_tipo_documentoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tb_tipo_documentos.
     */
    data: XOR<tb_tipo_documentoUpdateManyMutationInput, tb_tipo_documentoUncheckedUpdateManyInput>
    /**
     * Filter which tb_tipo_documentos to update
     */
    where?: tb_tipo_documentoWhereInput
    /**
     * Limit how many tb_tipo_documentos to update.
     */
    limit?: number
  }

  /**
   * tb_tipo_documento upsert
   */
  export type tb_tipo_documentoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_tipo_documento
     */
    select?: tb_tipo_documentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_tipo_documento
     */
    omit?: tb_tipo_documentoOmit<ExtArgs> | null
    /**
     * The filter to search for the tb_tipo_documento to update in case it exists.
     */
    where: tb_tipo_documentoWhereUniqueInput
    /**
     * In case the tb_tipo_documento found by the `where` argument doesn't exist, create a new tb_tipo_documento with this data.
     */
    create: XOR<tb_tipo_documentoCreateInput, tb_tipo_documentoUncheckedCreateInput>
    /**
     * In case the tb_tipo_documento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tb_tipo_documentoUpdateInput, tb_tipo_documentoUncheckedUpdateInput>
  }

  /**
   * tb_tipo_documento delete
   */
  export type tb_tipo_documentoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_tipo_documento
     */
    select?: tb_tipo_documentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_tipo_documento
     */
    omit?: tb_tipo_documentoOmit<ExtArgs> | null
    /**
     * Filter which tb_tipo_documento to delete.
     */
    where: tb_tipo_documentoWhereUniqueInput
  }

  /**
   * tb_tipo_documento deleteMany
   */
  export type tb_tipo_documentoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_tipo_documentos to delete
     */
    where?: tb_tipo_documentoWhereInput
    /**
     * Limit how many tb_tipo_documentos to delete.
     */
    limit?: number
  }

  /**
   * tb_tipo_documento without action
   */
  export type tb_tipo_documentoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_tipo_documento
     */
    select?: tb_tipo_documentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_tipo_documento
     */
    omit?: tb_tipo_documentoOmit<ExtArgs> | null
  }


  /**
   * Model tb_tutores
   */

  export type AggregateTb_tutores = {
    _count: Tb_tutoresCountAggregateOutputType | null
    _avg: Tb_tutoresAvgAggregateOutputType | null
    _sum: Tb_tutoresSumAggregateOutputType | null
    _min: Tb_tutoresMinAggregateOutputType | null
    _max: Tb_tutoresMaxAggregateOutputType | null
  }

  export type Tb_tutoresAvgAggregateOutputType = {
    id: number | null
  }

  export type Tb_tutoresSumAggregateOutputType = {
    id: number | null
  }

  export type Tb_tutoresMinAggregateOutputType = {
    id: number | null
    tipo_documento: string | null
    nombres: string | null
    apellidos: string | null
    correo: string | null
    telefono: string | null
  }

  export type Tb_tutoresMaxAggregateOutputType = {
    id: number | null
    tipo_documento: string | null
    nombres: string | null
    apellidos: string | null
    correo: string | null
    telefono: string | null
  }

  export type Tb_tutoresCountAggregateOutputType = {
    id: number
    tipo_documento: number
    nombres: number
    apellidos: number
    correo: number
    telefono: number
    _all: number
  }


  export type Tb_tutoresAvgAggregateInputType = {
    id?: true
  }

  export type Tb_tutoresSumAggregateInputType = {
    id?: true
  }

  export type Tb_tutoresMinAggregateInputType = {
    id?: true
    tipo_documento?: true
    nombres?: true
    apellidos?: true
    correo?: true
    telefono?: true
  }

  export type Tb_tutoresMaxAggregateInputType = {
    id?: true
    tipo_documento?: true
    nombres?: true
    apellidos?: true
    correo?: true
    telefono?: true
  }

  export type Tb_tutoresCountAggregateInputType = {
    id?: true
    tipo_documento?: true
    nombres?: true
    apellidos?: true
    correo?: true
    telefono?: true
    _all?: true
  }

  export type Tb_tutoresAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_tutores to aggregate.
     */
    where?: tb_tutoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_tutores to fetch.
     */
    orderBy?: tb_tutoresOrderByWithRelationInput | tb_tutoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tb_tutoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_tutores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_tutores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tb_tutores
    **/
    _count?: true | Tb_tutoresCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tb_tutoresAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tb_tutoresSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tb_tutoresMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tb_tutoresMaxAggregateInputType
  }

  export type GetTb_tutoresAggregateType<T extends Tb_tutoresAggregateArgs> = {
        [P in keyof T & keyof AggregateTb_tutores]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTb_tutores[P]>
      : GetScalarType<T[P], AggregateTb_tutores[P]>
  }




  export type tb_tutoresGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tb_tutoresWhereInput
    orderBy?: tb_tutoresOrderByWithAggregationInput | tb_tutoresOrderByWithAggregationInput[]
    by: Tb_tutoresScalarFieldEnum[] | Tb_tutoresScalarFieldEnum
    having?: tb_tutoresScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tb_tutoresCountAggregateInputType | true
    _avg?: Tb_tutoresAvgAggregateInputType
    _sum?: Tb_tutoresSumAggregateInputType
    _min?: Tb_tutoresMinAggregateInputType
    _max?: Tb_tutoresMaxAggregateInputType
  }

  export type Tb_tutoresGroupByOutputType = {
    id: number
    tipo_documento: string
    nombres: string | null
    apellidos: string | null
    correo: string | null
    telefono: string | null
    _count: Tb_tutoresCountAggregateOutputType | null
    _avg: Tb_tutoresAvgAggregateOutputType | null
    _sum: Tb_tutoresSumAggregateOutputType | null
    _min: Tb_tutoresMinAggregateOutputType | null
    _max: Tb_tutoresMaxAggregateOutputType | null
  }

  type GetTb_tutoresGroupByPayload<T extends tb_tutoresGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tb_tutoresGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tb_tutoresGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tb_tutoresGroupByOutputType[P]>
            : GetScalarType<T[P], Tb_tutoresGroupByOutputType[P]>
        }
      >
    >


  export type tb_tutoresSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo_documento?: boolean
    nombres?: boolean
    apellidos?: boolean
    correo?: boolean
    telefono?: boolean
  }, ExtArgs["result"]["tb_tutores"]>



  export type tb_tutoresSelectScalar = {
    id?: boolean
    tipo_documento?: boolean
    nombres?: boolean
    apellidos?: boolean
    correo?: boolean
    telefono?: boolean
  }

  export type tb_tutoresOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tipo_documento" | "nombres" | "apellidos" | "correo" | "telefono", ExtArgs["result"]["tb_tutores"]>

  export type $tb_tutoresPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tb_tutores"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tipo_documento: string
      nombres: string | null
      apellidos: string | null
      correo: string | null
      telefono: string | null
    }, ExtArgs["result"]["tb_tutores"]>
    composites: {}
  }

  type tb_tutoresGetPayload<S extends boolean | null | undefined | tb_tutoresDefaultArgs> = $Result.GetResult<Prisma.$tb_tutoresPayload, S>

  type tb_tutoresCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tb_tutoresFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tb_tutoresCountAggregateInputType | true
    }

  export interface tb_tutoresDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tb_tutores'], meta: { name: 'tb_tutores' } }
    /**
     * Find zero or one Tb_tutores that matches the filter.
     * @param {tb_tutoresFindUniqueArgs} args - Arguments to find a Tb_tutores
     * @example
     * // Get one Tb_tutores
     * const tb_tutores = await prisma.tb_tutores.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tb_tutoresFindUniqueArgs>(args: SelectSubset<T, tb_tutoresFindUniqueArgs<ExtArgs>>): Prisma__tb_tutoresClient<$Result.GetResult<Prisma.$tb_tutoresPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tb_tutores that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tb_tutoresFindUniqueOrThrowArgs} args - Arguments to find a Tb_tutores
     * @example
     * // Get one Tb_tutores
     * const tb_tutores = await prisma.tb_tutores.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tb_tutoresFindUniqueOrThrowArgs>(args: SelectSubset<T, tb_tutoresFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tb_tutoresClient<$Result.GetResult<Prisma.$tb_tutoresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tb_tutores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_tutoresFindFirstArgs} args - Arguments to find a Tb_tutores
     * @example
     * // Get one Tb_tutores
     * const tb_tutores = await prisma.tb_tutores.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tb_tutoresFindFirstArgs>(args?: SelectSubset<T, tb_tutoresFindFirstArgs<ExtArgs>>): Prisma__tb_tutoresClient<$Result.GetResult<Prisma.$tb_tutoresPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tb_tutores that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_tutoresFindFirstOrThrowArgs} args - Arguments to find a Tb_tutores
     * @example
     * // Get one Tb_tutores
     * const tb_tutores = await prisma.tb_tutores.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tb_tutoresFindFirstOrThrowArgs>(args?: SelectSubset<T, tb_tutoresFindFirstOrThrowArgs<ExtArgs>>): Prisma__tb_tutoresClient<$Result.GetResult<Prisma.$tb_tutoresPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tb_tutores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_tutoresFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tb_tutores
     * const tb_tutores = await prisma.tb_tutores.findMany()
     * 
     * // Get first 10 Tb_tutores
     * const tb_tutores = await prisma.tb_tutores.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tb_tutoresWithIdOnly = await prisma.tb_tutores.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tb_tutoresFindManyArgs>(args?: SelectSubset<T, tb_tutoresFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_tutoresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tb_tutores.
     * @param {tb_tutoresCreateArgs} args - Arguments to create a Tb_tutores.
     * @example
     * // Create one Tb_tutores
     * const Tb_tutores = await prisma.tb_tutores.create({
     *   data: {
     *     // ... data to create a Tb_tutores
     *   }
     * })
     * 
     */
    create<T extends tb_tutoresCreateArgs>(args: SelectSubset<T, tb_tutoresCreateArgs<ExtArgs>>): Prisma__tb_tutoresClient<$Result.GetResult<Prisma.$tb_tutoresPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tb_tutores.
     * @param {tb_tutoresCreateManyArgs} args - Arguments to create many Tb_tutores.
     * @example
     * // Create many Tb_tutores
     * const tb_tutores = await prisma.tb_tutores.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tb_tutoresCreateManyArgs>(args?: SelectSubset<T, tb_tutoresCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tb_tutores.
     * @param {tb_tutoresDeleteArgs} args - Arguments to delete one Tb_tutores.
     * @example
     * // Delete one Tb_tutores
     * const Tb_tutores = await prisma.tb_tutores.delete({
     *   where: {
     *     // ... filter to delete one Tb_tutores
     *   }
     * })
     * 
     */
    delete<T extends tb_tutoresDeleteArgs>(args: SelectSubset<T, tb_tutoresDeleteArgs<ExtArgs>>): Prisma__tb_tutoresClient<$Result.GetResult<Prisma.$tb_tutoresPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tb_tutores.
     * @param {tb_tutoresUpdateArgs} args - Arguments to update one Tb_tutores.
     * @example
     * // Update one Tb_tutores
     * const tb_tutores = await prisma.tb_tutores.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tb_tutoresUpdateArgs>(args: SelectSubset<T, tb_tutoresUpdateArgs<ExtArgs>>): Prisma__tb_tutoresClient<$Result.GetResult<Prisma.$tb_tutoresPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tb_tutores.
     * @param {tb_tutoresDeleteManyArgs} args - Arguments to filter Tb_tutores to delete.
     * @example
     * // Delete a few Tb_tutores
     * const { count } = await prisma.tb_tutores.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tb_tutoresDeleteManyArgs>(args?: SelectSubset<T, tb_tutoresDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tb_tutores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_tutoresUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tb_tutores
     * const tb_tutores = await prisma.tb_tutores.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tb_tutoresUpdateManyArgs>(args: SelectSubset<T, tb_tutoresUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tb_tutores.
     * @param {tb_tutoresUpsertArgs} args - Arguments to update or create a Tb_tutores.
     * @example
     * // Update or create a Tb_tutores
     * const tb_tutores = await prisma.tb_tutores.upsert({
     *   create: {
     *     // ... data to create a Tb_tutores
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tb_tutores we want to update
     *   }
     * })
     */
    upsert<T extends tb_tutoresUpsertArgs>(args: SelectSubset<T, tb_tutoresUpsertArgs<ExtArgs>>): Prisma__tb_tutoresClient<$Result.GetResult<Prisma.$tb_tutoresPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tb_tutores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_tutoresCountArgs} args - Arguments to filter Tb_tutores to count.
     * @example
     * // Count the number of Tb_tutores
     * const count = await prisma.tb_tutores.count({
     *   where: {
     *     // ... the filter for the Tb_tutores we want to count
     *   }
     * })
    **/
    count<T extends tb_tutoresCountArgs>(
      args?: Subset<T, tb_tutoresCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tb_tutoresCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tb_tutores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tb_tutoresAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Tb_tutoresAggregateArgs>(args: Subset<T, Tb_tutoresAggregateArgs>): Prisma.PrismaPromise<GetTb_tutoresAggregateType<T>>

    /**
     * Group by Tb_tutores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_tutoresGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tb_tutoresGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tb_tutoresGroupByArgs['orderBy'] }
        : { orderBy?: tb_tutoresGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tb_tutoresGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTb_tutoresGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tb_tutores model
   */
  readonly fields: tb_tutoresFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tb_tutores.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tb_tutoresClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tb_tutores model
   */
  interface tb_tutoresFieldRefs {
    readonly id: FieldRef<"tb_tutores", 'Int'>
    readonly tipo_documento: FieldRef<"tb_tutores", 'String'>
    readonly nombres: FieldRef<"tb_tutores", 'String'>
    readonly apellidos: FieldRef<"tb_tutores", 'String'>
    readonly correo: FieldRef<"tb_tutores", 'String'>
    readonly telefono: FieldRef<"tb_tutores", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tb_tutores findUnique
   */
  export type tb_tutoresFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_tutores
     */
    select?: tb_tutoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_tutores
     */
    omit?: tb_tutoresOmit<ExtArgs> | null
    /**
     * Filter, which tb_tutores to fetch.
     */
    where: tb_tutoresWhereUniqueInput
  }

  /**
   * tb_tutores findUniqueOrThrow
   */
  export type tb_tutoresFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_tutores
     */
    select?: tb_tutoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_tutores
     */
    omit?: tb_tutoresOmit<ExtArgs> | null
    /**
     * Filter, which tb_tutores to fetch.
     */
    where: tb_tutoresWhereUniqueInput
  }

  /**
   * tb_tutores findFirst
   */
  export type tb_tutoresFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_tutores
     */
    select?: tb_tutoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_tutores
     */
    omit?: tb_tutoresOmit<ExtArgs> | null
    /**
     * Filter, which tb_tutores to fetch.
     */
    where?: tb_tutoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_tutores to fetch.
     */
    orderBy?: tb_tutoresOrderByWithRelationInput | tb_tutoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_tutores.
     */
    cursor?: tb_tutoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_tutores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_tutores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_tutores.
     */
    distinct?: Tb_tutoresScalarFieldEnum | Tb_tutoresScalarFieldEnum[]
  }

  /**
   * tb_tutores findFirstOrThrow
   */
  export type tb_tutoresFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_tutores
     */
    select?: tb_tutoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_tutores
     */
    omit?: tb_tutoresOmit<ExtArgs> | null
    /**
     * Filter, which tb_tutores to fetch.
     */
    where?: tb_tutoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_tutores to fetch.
     */
    orderBy?: tb_tutoresOrderByWithRelationInput | tb_tutoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_tutores.
     */
    cursor?: tb_tutoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_tutores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_tutores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_tutores.
     */
    distinct?: Tb_tutoresScalarFieldEnum | Tb_tutoresScalarFieldEnum[]
  }

  /**
   * tb_tutores findMany
   */
  export type tb_tutoresFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_tutores
     */
    select?: tb_tutoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_tutores
     */
    omit?: tb_tutoresOmit<ExtArgs> | null
    /**
     * Filter, which tb_tutores to fetch.
     */
    where?: tb_tutoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_tutores to fetch.
     */
    orderBy?: tb_tutoresOrderByWithRelationInput | tb_tutoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tb_tutores.
     */
    cursor?: tb_tutoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_tutores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_tutores.
     */
    skip?: number
    distinct?: Tb_tutoresScalarFieldEnum | Tb_tutoresScalarFieldEnum[]
  }

  /**
   * tb_tutores create
   */
  export type tb_tutoresCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_tutores
     */
    select?: tb_tutoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_tutores
     */
    omit?: tb_tutoresOmit<ExtArgs> | null
    /**
     * The data needed to create a tb_tutores.
     */
    data: XOR<tb_tutoresCreateInput, tb_tutoresUncheckedCreateInput>
  }

  /**
   * tb_tutores createMany
   */
  export type tb_tutoresCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tb_tutores.
     */
    data: tb_tutoresCreateManyInput | tb_tutoresCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tb_tutores update
   */
  export type tb_tutoresUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_tutores
     */
    select?: tb_tutoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_tutores
     */
    omit?: tb_tutoresOmit<ExtArgs> | null
    /**
     * The data needed to update a tb_tutores.
     */
    data: XOR<tb_tutoresUpdateInput, tb_tutoresUncheckedUpdateInput>
    /**
     * Choose, which tb_tutores to update.
     */
    where: tb_tutoresWhereUniqueInput
  }

  /**
   * tb_tutores updateMany
   */
  export type tb_tutoresUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tb_tutores.
     */
    data: XOR<tb_tutoresUpdateManyMutationInput, tb_tutoresUncheckedUpdateManyInput>
    /**
     * Filter which tb_tutores to update
     */
    where?: tb_tutoresWhereInput
    /**
     * Limit how many tb_tutores to update.
     */
    limit?: number
  }

  /**
   * tb_tutores upsert
   */
  export type tb_tutoresUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_tutores
     */
    select?: tb_tutoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_tutores
     */
    omit?: tb_tutoresOmit<ExtArgs> | null
    /**
     * The filter to search for the tb_tutores to update in case it exists.
     */
    where: tb_tutoresWhereUniqueInput
    /**
     * In case the tb_tutores found by the `where` argument doesn't exist, create a new tb_tutores with this data.
     */
    create: XOR<tb_tutoresCreateInput, tb_tutoresUncheckedCreateInput>
    /**
     * In case the tb_tutores was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tb_tutoresUpdateInput, tb_tutoresUncheckedUpdateInput>
  }

  /**
   * tb_tutores delete
   */
  export type tb_tutoresDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_tutores
     */
    select?: tb_tutoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_tutores
     */
    omit?: tb_tutoresOmit<ExtArgs> | null
    /**
     * Filter which tb_tutores to delete.
     */
    where: tb_tutoresWhereUniqueInput
  }

  /**
   * tb_tutores deleteMany
   */
  export type tb_tutoresDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_tutores to delete
     */
    where?: tb_tutoresWhereInput
    /**
     * Limit how many tb_tutores to delete.
     */
    limit?: number
  }

  /**
   * tb_tutores without action
   */
  export type tb_tutoresDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_tutores
     */
    select?: tb_tutoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_tutores
     */
    omit?: tb_tutoresOmit<ExtArgs> | null
  }


  /**
   * Model tb_usuarios
   */

  export type AggregateTb_usuarios = {
    _count: Tb_usuariosCountAggregateOutputType | null
    _avg: Tb_usuariosAvgAggregateOutputType | null
    _sum: Tb_usuariosSumAggregateOutputType | null
    _min: Tb_usuariosMinAggregateOutputType | null
    _max: Tb_usuariosMaxAggregateOutputType | null
  }

  export type Tb_usuariosAvgAggregateOutputType = {
    id: number | null
    id_usuario: number | null
  }

  export type Tb_usuariosSumAggregateOutputType = {
    id: number | null
    id_usuario: number | null
  }

  export type Tb_usuariosMinAggregateOutputType = {
    id: number | null
    usuario: string | null
    contrasenia: string | null
    activo: boolean | null
    id_usuario: number | null
  }

  export type Tb_usuariosMaxAggregateOutputType = {
    id: number | null
    usuario: string | null
    contrasenia: string | null
    activo: boolean | null
    id_usuario: number | null
  }

  export type Tb_usuariosCountAggregateOutputType = {
    id: number
    usuario: number
    contrasenia: number
    activo: number
    id_usuario: number
    _all: number
  }


  export type Tb_usuariosAvgAggregateInputType = {
    id?: true
    id_usuario?: true
  }

  export type Tb_usuariosSumAggregateInputType = {
    id?: true
    id_usuario?: true
  }

  export type Tb_usuariosMinAggregateInputType = {
    id?: true
    usuario?: true
    contrasenia?: true
    activo?: true
    id_usuario?: true
  }

  export type Tb_usuariosMaxAggregateInputType = {
    id?: true
    usuario?: true
    contrasenia?: true
    activo?: true
    id_usuario?: true
  }

  export type Tb_usuariosCountAggregateInputType = {
    id?: true
    usuario?: true
    contrasenia?: true
    activo?: true
    id_usuario?: true
    _all?: true
  }

  export type Tb_usuariosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_usuarios to aggregate.
     */
    where?: tb_usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_usuarios to fetch.
     */
    orderBy?: tb_usuariosOrderByWithRelationInput | tb_usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tb_usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tb_usuarios
    **/
    _count?: true | Tb_usuariosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tb_usuariosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tb_usuariosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tb_usuariosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tb_usuariosMaxAggregateInputType
  }

  export type GetTb_usuariosAggregateType<T extends Tb_usuariosAggregateArgs> = {
        [P in keyof T & keyof AggregateTb_usuarios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTb_usuarios[P]>
      : GetScalarType<T[P], AggregateTb_usuarios[P]>
  }




  export type tb_usuariosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tb_usuariosWhereInput
    orderBy?: tb_usuariosOrderByWithAggregationInput | tb_usuariosOrderByWithAggregationInput[]
    by: Tb_usuariosScalarFieldEnum[] | Tb_usuariosScalarFieldEnum
    having?: tb_usuariosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tb_usuariosCountAggregateInputType | true
    _avg?: Tb_usuariosAvgAggregateInputType
    _sum?: Tb_usuariosSumAggregateInputType
    _min?: Tb_usuariosMinAggregateInputType
    _max?: Tb_usuariosMaxAggregateInputType
  }

  export type Tb_usuariosGroupByOutputType = {
    id: number
    usuario: string | null
    contrasenia: string | null
    activo: boolean | null
    id_usuario: number | null
    _count: Tb_usuariosCountAggregateOutputType | null
    _avg: Tb_usuariosAvgAggregateOutputType | null
    _sum: Tb_usuariosSumAggregateOutputType | null
    _min: Tb_usuariosMinAggregateOutputType | null
    _max: Tb_usuariosMaxAggregateOutputType | null
  }

  type GetTb_usuariosGroupByPayload<T extends tb_usuariosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tb_usuariosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tb_usuariosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tb_usuariosGroupByOutputType[P]>
            : GetScalarType<T[P], Tb_usuariosGroupByOutputType[P]>
        }
      >
    >


  export type tb_usuariosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuario?: boolean
    contrasenia?: boolean
    activo?: boolean
    id_usuario?: boolean
  }, ExtArgs["result"]["tb_usuarios"]>



  export type tb_usuariosSelectScalar = {
    id?: boolean
    usuario?: boolean
    contrasenia?: boolean
    activo?: boolean
    id_usuario?: boolean
  }

  export type tb_usuariosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usuario" | "contrasenia" | "activo" | "id_usuario", ExtArgs["result"]["tb_usuarios"]>

  export type $tb_usuariosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tb_usuarios"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      usuario: string | null
      contrasenia: string | null
      activo: boolean | null
      id_usuario: number | null
    }, ExtArgs["result"]["tb_usuarios"]>
    composites: {}
  }

  type tb_usuariosGetPayload<S extends boolean | null | undefined | tb_usuariosDefaultArgs> = $Result.GetResult<Prisma.$tb_usuariosPayload, S>

  type tb_usuariosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tb_usuariosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tb_usuariosCountAggregateInputType | true
    }

  export interface tb_usuariosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tb_usuarios'], meta: { name: 'tb_usuarios' } }
    /**
     * Find zero or one Tb_usuarios that matches the filter.
     * @param {tb_usuariosFindUniqueArgs} args - Arguments to find a Tb_usuarios
     * @example
     * // Get one Tb_usuarios
     * const tb_usuarios = await prisma.tb_usuarios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tb_usuariosFindUniqueArgs>(args: SelectSubset<T, tb_usuariosFindUniqueArgs<ExtArgs>>): Prisma__tb_usuariosClient<$Result.GetResult<Prisma.$tb_usuariosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tb_usuarios that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tb_usuariosFindUniqueOrThrowArgs} args - Arguments to find a Tb_usuarios
     * @example
     * // Get one Tb_usuarios
     * const tb_usuarios = await prisma.tb_usuarios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tb_usuariosFindUniqueOrThrowArgs>(args: SelectSubset<T, tb_usuariosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tb_usuariosClient<$Result.GetResult<Prisma.$tb_usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tb_usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_usuariosFindFirstArgs} args - Arguments to find a Tb_usuarios
     * @example
     * // Get one Tb_usuarios
     * const tb_usuarios = await prisma.tb_usuarios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tb_usuariosFindFirstArgs>(args?: SelectSubset<T, tb_usuariosFindFirstArgs<ExtArgs>>): Prisma__tb_usuariosClient<$Result.GetResult<Prisma.$tb_usuariosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tb_usuarios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_usuariosFindFirstOrThrowArgs} args - Arguments to find a Tb_usuarios
     * @example
     * // Get one Tb_usuarios
     * const tb_usuarios = await prisma.tb_usuarios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tb_usuariosFindFirstOrThrowArgs>(args?: SelectSubset<T, tb_usuariosFindFirstOrThrowArgs<ExtArgs>>): Prisma__tb_usuariosClient<$Result.GetResult<Prisma.$tb_usuariosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tb_usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_usuariosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tb_usuarios
     * const tb_usuarios = await prisma.tb_usuarios.findMany()
     * 
     * // Get first 10 Tb_usuarios
     * const tb_usuarios = await prisma.tb_usuarios.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tb_usuariosWithIdOnly = await prisma.tb_usuarios.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tb_usuariosFindManyArgs>(args?: SelectSubset<T, tb_usuariosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_usuariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tb_usuarios.
     * @param {tb_usuariosCreateArgs} args - Arguments to create a Tb_usuarios.
     * @example
     * // Create one Tb_usuarios
     * const Tb_usuarios = await prisma.tb_usuarios.create({
     *   data: {
     *     // ... data to create a Tb_usuarios
     *   }
     * })
     * 
     */
    create<T extends tb_usuariosCreateArgs>(args: SelectSubset<T, tb_usuariosCreateArgs<ExtArgs>>): Prisma__tb_usuariosClient<$Result.GetResult<Prisma.$tb_usuariosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tb_usuarios.
     * @param {tb_usuariosCreateManyArgs} args - Arguments to create many Tb_usuarios.
     * @example
     * // Create many Tb_usuarios
     * const tb_usuarios = await prisma.tb_usuarios.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tb_usuariosCreateManyArgs>(args?: SelectSubset<T, tb_usuariosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tb_usuarios.
     * @param {tb_usuariosDeleteArgs} args - Arguments to delete one Tb_usuarios.
     * @example
     * // Delete one Tb_usuarios
     * const Tb_usuarios = await prisma.tb_usuarios.delete({
     *   where: {
     *     // ... filter to delete one Tb_usuarios
     *   }
     * })
     * 
     */
    delete<T extends tb_usuariosDeleteArgs>(args: SelectSubset<T, tb_usuariosDeleteArgs<ExtArgs>>): Prisma__tb_usuariosClient<$Result.GetResult<Prisma.$tb_usuariosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tb_usuarios.
     * @param {tb_usuariosUpdateArgs} args - Arguments to update one Tb_usuarios.
     * @example
     * // Update one Tb_usuarios
     * const tb_usuarios = await prisma.tb_usuarios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tb_usuariosUpdateArgs>(args: SelectSubset<T, tb_usuariosUpdateArgs<ExtArgs>>): Prisma__tb_usuariosClient<$Result.GetResult<Prisma.$tb_usuariosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tb_usuarios.
     * @param {tb_usuariosDeleteManyArgs} args - Arguments to filter Tb_usuarios to delete.
     * @example
     * // Delete a few Tb_usuarios
     * const { count } = await prisma.tb_usuarios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tb_usuariosDeleteManyArgs>(args?: SelectSubset<T, tb_usuariosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tb_usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_usuariosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tb_usuarios
     * const tb_usuarios = await prisma.tb_usuarios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tb_usuariosUpdateManyArgs>(args: SelectSubset<T, tb_usuariosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tb_usuarios.
     * @param {tb_usuariosUpsertArgs} args - Arguments to update or create a Tb_usuarios.
     * @example
     * // Update or create a Tb_usuarios
     * const tb_usuarios = await prisma.tb_usuarios.upsert({
     *   create: {
     *     // ... data to create a Tb_usuarios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tb_usuarios we want to update
     *   }
     * })
     */
    upsert<T extends tb_usuariosUpsertArgs>(args: SelectSubset<T, tb_usuariosUpsertArgs<ExtArgs>>): Prisma__tb_usuariosClient<$Result.GetResult<Prisma.$tb_usuariosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tb_usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_usuariosCountArgs} args - Arguments to filter Tb_usuarios to count.
     * @example
     * // Count the number of Tb_usuarios
     * const count = await prisma.tb_usuarios.count({
     *   where: {
     *     // ... the filter for the Tb_usuarios we want to count
     *   }
     * })
    **/
    count<T extends tb_usuariosCountArgs>(
      args?: Subset<T, tb_usuariosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tb_usuariosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tb_usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tb_usuariosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Tb_usuariosAggregateArgs>(args: Subset<T, Tb_usuariosAggregateArgs>): Prisma.PrismaPromise<GetTb_usuariosAggregateType<T>>

    /**
     * Group by Tb_usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_usuariosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tb_usuariosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tb_usuariosGroupByArgs['orderBy'] }
        : { orderBy?: tb_usuariosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tb_usuariosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTb_usuariosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tb_usuarios model
   */
  readonly fields: tb_usuariosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tb_usuarios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tb_usuariosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tb_usuarios model
   */
  interface tb_usuariosFieldRefs {
    readonly id: FieldRef<"tb_usuarios", 'Int'>
    readonly usuario: FieldRef<"tb_usuarios", 'String'>
    readonly contrasenia: FieldRef<"tb_usuarios", 'String'>
    readonly activo: FieldRef<"tb_usuarios", 'Boolean'>
    readonly id_usuario: FieldRef<"tb_usuarios", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * tb_usuarios findUnique
   */
  export type tb_usuariosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_usuarios
     */
    select?: tb_usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_usuarios
     */
    omit?: tb_usuariosOmit<ExtArgs> | null
    /**
     * Filter, which tb_usuarios to fetch.
     */
    where: tb_usuariosWhereUniqueInput
  }

  /**
   * tb_usuarios findUniqueOrThrow
   */
  export type tb_usuariosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_usuarios
     */
    select?: tb_usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_usuarios
     */
    omit?: tb_usuariosOmit<ExtArgs> | null
    /**
     * Filter, which tb_usuarios to fetch.
     */
    where: tb_usuariosWhereUniqueInput
  }

  /**
   * tb_usuarios findFirst
   */
  export type tb_usuariosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_usuarios
     */
    select?: tb_usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_usuarios
     */
    omit?: tb_usuariosOmit<ExtArgs> | null
    /**
     * Filter, which tb_usuarios to fetch.
     */
    where?: tb_usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_usuarios to fetch.
     */
    orderBy?: tb_usuariosOrderByWithRelationInput | tb_usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_usuarios.
     */
    cursor?: tb_usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_usuarios.
     */
    distinct?: Tb_usuariosScalarFieldEnum | Tb_usuariosScalarFieldEnum[]
  }

  /**
   * tb_usuarios findFirstOrThrow
   */
  export type tb_usuariosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_usuarios
     */
    select?: tb_usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_usuarios
     */
    omit?: tb_usuariosOmit<ExtArgs> | null
    /**
     * Filter, which tb_usuarios to fetch.
     */
    where?: tb_usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_usuarios to fetch.
     */
    orderBy?: tb_usuariosOrderByWithRelationInput | tb_usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_usuarios.
     */
    cursor?: tb_usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_usuarios.
     */
    distinct?: Tb_usuariosScalarFieldEnum | Tb_usuariosScalarFieldEnum[]
  }

  /**
   * tb_usuarios findMany
   */
  export type tb_usuariosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_usuarios
     */
    select?: tb_usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_usuarios
     */
    omit?: tb_usuariosOmit<ExtArgs> | null
    /**
     * Filter, which tb_usuarios to fetch.
     */
    where?: tb_usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_usuarios to fetch.
     */
    orderBy?: tb_usuariosOrderByWithRelationInput | tb_usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tb_usuarios.
     */
    cursor?: tb_usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_usuarios.
     */
    skip?: number
    distinct?: Tb_usuariosScalarFieldEnum | Tb_usuariosScalarFieldEnum[]
  }

  /**
   * tb_usuarios create
   */
  export type tb_usuariosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_usuarios
     */
    select?: tb_usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_usuarios
     */
    omit?: tb_usuariosOmit<ExtArgs> | null
    /**
     * The data needed to create a tb_usuarios.
     */
    data?: XOR<tb_usuariosCreateInput, tb_usuariosUncheckedCreateInput>
  }

  /**
   * tb_usuarios createMany
   */
  export type tb_usuariosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tb_usuarios.
     */
    data: tb_usuariosCreateManyInput | tb_usuariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tb_usuarios update
   */
  export type tb_usuariosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_usuarios
     */
    select?: tb_usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_usuarios
     */
    omit?: tb_usuariosOmit<ExtArgs> | null
    /**
     * The data needed to update a tb_usuarios.
     */
    data: XOR<tb_usuariosUpdateInput, tb_usuariosUncheckedUpdateInput>
    /**
     * Choose, which tb_usuarios to update.
     */
    where: tb_usuariosWhereUniqueInput
  }

  /**
   * tb_usuarios updateMany
   */
  export type tb_usuariosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tb_usuarios.
     */
    data: XOR<tb_usuariosUpdateManyMutationInput, tb_usuariosUncheckedUpdateManyInput>
    /**
     * Filter which tb_usuarios to update
     */
    where?: tb_usuariosWhereInput
    /**
     * Limit how many tb_usuarios to update.
     */
    limit?: number
  }

  /**
   * tb_usuarios upsert
   */
  export type tb_usuariosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_usuarios
     */
    select?: tb_usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_usuarios
     */
    omit?: tb_usuariosOmit<ExtArgs> | null
    /**
     * The filter to search for the tb_usuarios to update in case it exists.
     */
    where: tb_usuariosWhereUniqueInput
    /**
     * In case the tb_usuarios found by the `where` argument doesn't exist, create a new tb_usuarios with this data.
     */
    create: XOR<tb_usuariosCreateInput, tb_usuariosUncheckedCreateInput>
    /**
     * In case the tb_usuarios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tb_usuariosUpdateInput, tb_usuariosUncheckedUpdateInput>
  }

  /**
   * tb_usuarios delete
   */
  export type tb_usuariosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_usuarios
     */
    select?: tb_usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_usuarios
     */
    omit?: tb_usuariosOmit<ExtArgs> | null
    /**
     * Filter which tb_usuarios to delete.
     */
    where: tb_usuariosWhereUniqueInput
  }

  /**
   * tb_usuarios deleteMany
   */
  export type tb_usuariosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_usuarios to delete
     */
    where?: tb_usuariosWhereInput
    /**
     * Limit how many tb_usuarios to delete.
     */
    limit?: number
  }

  /**
   * tb_usuarios without action
   */
  export type tb_usuariosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_usuarios
     */
    select?: tb_usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_usuarios
     */
    omit?: tb_usuariosOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Tb_cargos_adminScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre'
  };

  export type Tb_cargos_adminScalarFieldEnum = (typeof Tb_cargos_adminScalarFieldEnum)[keyof typeof Tb_cargos_adminScalarFieldEnum]


  export const Tb_categoriasScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre'
  };

  export type Tb_categoriasScalarFieldEnum = (typeof Tb_categoriasScalarFieldEnum)[keyof typeof Tb_categoriasScalarFieldEnum]


  export const Tb_contactos_emergenciaScalarFieldEnum: {
    id: 'id',
    tipo_documento: 'tipo_documento',
    id_entrenador: 'id_entrenador',
    nombres: 'nombres',
    apellidos: 'apellidos',
    correo: 'correo',
    telefono: 'telefono'
  };

  export type Tb_contactos_emergenciaScalarFieldEnum = (typeof Tb_contactos_emergenciaScalarFieldEnum)[keyof typeof Tb_contactos_emergenciaScalarFieldEnum]


  export const Tb_departamentoScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre'
  };

  export type Tb_departamentoScalarFieldEnum = (typeof Tb_departamentoScalarFieldEnum)[keyof typeof Tb_departamentoScalarFieldEnum]


  export const Tb_deportistasScalarFieldEnum: {
    id: 'id',
    id_tutor: 'id_tutor',
    id_persona_club: 'id_persona_club',
    id_categoria: 'id_categoria',
    activo: 'activo'
  };

  export type Tb_deportistasScalarFieldEnum = (typeof Tb_deportistasScalarFieldEnum)[keyof typeof Tb_deportistasScalarFieldEnum]


  export const Tb_desercion_deportistasScalarFieldEnum: {
    id: 'id',
    id_deportista: 'id_deportista',
    fecha_desercion: 'fecha_desercion',
    razon: 'razon',
    descripcion: 'descripcion'
  };

  export type Tb_desercion_deportistasScalarFieldEnum = (typeof Tb_desercion_deportistasScalarFieldEnum)[keyof typeof Tb_desercion_deportistasScalarFieldEnum]


  export const Tb_entrenadoresScalarFieldEnum: {
    id: 'id',
    id_persona_club: 'id_persona_club',
    fecha_ingreso: 'fecha_ingreso',
    activo: 'activo',
    contrato: 'contrato'
  };

  export type Tb_entrenadoresScalarFieldEnum = (typeof Tb_entrenadoresScalarFieldEnum)[keyof typeof Tb_entrenadoresScalarFieldEnum]


  export const Tb_gestion_adminScalarFieldEnum: {
    id: 'id',
    id_tutor: 'id_tutor',
    id_deportista: 'id_deportista',
    id_cargo: 'id_cargo',
    fecha_inicio: 'fecha_inicio',
    fecha_fin: 'fecha_fin',
    activo: 'activo'
  };

  export type Tb_gestion_adminScalarFieldEnum = (typeof Tb_gestion_adminScalarFieldEnum)[keyof typeof Tb_gestion_adminScalarFieldEnum]


  export const Tb_municipioScalarFieldEnum: {
    id: 'id',
    id_departamento: 'id_departamento',
    nombre: 'nombre',
    estado: 'estado'
  };

  export type Tb_municipioScalarFieldEnum = (typeof Tb_municipioScalarFieldEnum)[keyof typeof Tb_municipioScalarFieldEnum]


  export const Tb_pagos_deportistasScalarFieldEnum: {
    id: 'id',
    id_deportista: 'id_deportista',
    fecha_pago: 'fecha_pago',
    valor: 'valor',
    tipo_pago: 'tipo_pago'
  };

  export type Tb_pagos_deportistasScalarFieldEnum = (typeof Tb_pagos_deportistasScalarFieldEnum)[keyof typeof Tb_pagos_deportistasScalarFieldEnum]


  export const Tb_personas_clubScalarFieldEnum: {
    id: 'id',
    tipo_documento: 'tipo_documento',
    id_municipio: 'id_municipio',
    id_usuario: 'id_usuario',
    nombres: 'nombres',
    apellidos: 'apellidos',
    fecha_nacimento: 'fecha_nacimento',
    tipo_rh: 'tipo_rh',
    peso: 'peso',
    altura: 'altura',
    correo: 'correo',
    numero_telefono: 'numero_telefono',
    talla_camisa: 'talla_camisa',
    talla_calzado: 'talla_calzado',
    talla_pantaloneta: 'talla_pantaloneta',
    genero: 'genero',
    direccion: 'direccion'
  };

  export type Tb_personas_clubScalarFieldEnum = (typeof Tb_personas_clubScalarFieldEnum)[keyof typeof Tb_personas_clubScalarFieldEnum]


  export const Tb_tipo_documentoScalarFieldEnum: {
    id: 'id',
    tipo_documento: 'tipo_documento',
    descripcion: 'descripcion'
  };

  export type Tb_tipo_documentoScalarFieldEnum = (typeof Tb_tipo_documentoScalarFieldEnum)[keyof typeof Tb_tipo_documentoScalarFieldEnum]


  export const Tb_tutoresScalarFieldEnum: {
    id: 'id',
    tipo_documento: 'tipo_documento',
    nombres: 'nombres',
    apellidos: 'apellidos',
    correo: 'correo',
    telefono: 'telefono'
  };

  export type Tb_tutoresScalarFieldEnum = (typeof Tb_tutoresScalarFieldEnum)[keyof typeof Tb_tutoresScalarFieldEnum]


  export const Tb_usuariosScalarFieldEnum: {
    id: 'id',
    usuario: 'usuario',
    contrasenia: 'contrasenia',
    activo: 'activo',
    id_usuario: 'id_usuario'
  };

  export type Tb_usuariosScalarFieldEnum = (typeof Tb_usuariosScalarFieldEnum)[keyof typeof Tb_usuariosScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const tb_cargos_adminOrderByRelevanceFieldEnum: {
    nombre: 'nombre'
  };

  export type tb_cargos_adminOrderByRelevanceFieldEnum = (typeof tb_cargos_adminOrderByRelevanceFieldEnum)[keyof typeof tb_cargos_adminOrderByRelevanceFieldEnum]


  export const tb_categoriasOrderByRelevanceFieldEnum: {
    nombre: 'nombre'
  };

  export type tb_categoriasOrderByRelevanceFieldEnum = (typeof tb_categoriasOrderByRelevanceFieldEnum)[keyof typeof tb_categoriasOrderByRelevanceFieldEnum]


  export const tb_contactos_emergenciaOrderByRelevanceFieldEnum: {
    tipo_documento: 'tipo_documento',
    nombres: 'nombres',
    apellidos: 'apellidos',
    correo: 'correo',
    telefono: 'telefono'
  };

  export type tb_contactos_emergenciaOrderByRelevanceFieldEnum = (typeof tb_contactos_emergenciaOrderByRelevanceFieldEnum)[keyof typeof tb_contactos_emergenciaOrderByRelevanceFieldEnum]


  export const tb_departamentoOrderByRelevanceFieldEnum: {
    nombre: 'nombre'
  };

  export type tb_departamentoOrderByRelevanceFieldEnum = (typeof tb_departamentoOrderByRelevanceFieldEnum)[keyof typeof tb_departamentoOrderByRelevanceFieldEnum]


  export const tb_desercion_deportistasOrderByRelevanceFieldEnum: {
    razon: 'razon',
    descripcion: 'descripcion'
  };

  export type tb_desercion_deportistasOrderByRelevanceFieldEnum = (typeof tb_desercion_deportistasOrderByRelevanceFieldEnum)[keyof typeof tb_desercion_deportistasOrderByRelevanceFieldEnum]


  export const tb_municipioOrderByRelevanceFieldEnum: {
    nombre: 'nombre'
  };

  export type tb_municipioOrderByRelevanceFieldEnum = (typeof tb_municipioOrderByRelevanceFieldEnum)[keyof typeof tb_municipioOrderByRelevanceFieldEnum]


  export const tb_pagos_deportistasOrderByRelevanceFieldEnum: {
    tipo_pago: 'tipo_pago'
  };

  export type tb_pagos_deportistasOrderByRelevanceFieldEnum = (typeof tb_pagos_deportistasOrderByRelevanceFieldEnum)[keyof typeof tb_pagos_deportistasOrderByRelevanceFieldEnum]


  export const tb_personas_clubOrderByRelevanceFieldEnum: {
    tipo_documento: 'tipo_documento',
    nombres: 'nombres',
    apellidos: 'apellidos',
    tipo_rh: 'tipo_rh',
    correo: 'correo',
    talla_camisa: 'talla_camisa',
    talla_calzado: 'talla_calzado',
    talla_pantaloneta: 'talla_pantaloneta',
    genero: 'genero',
    direccion: 'direccion'
  };

  export type tb_personas_clubOrderByRelevanceFieldEnum = (typeof tb_personas_clubOrderByRelevanceFieldEnum)[keyof typeof tb_personas_clubOrderByRelevanceFieldEnum]


  export const tb_tipo_documentoOrderByRelevanceFieldEnum: {
    tipo_documento: 'tipo_documento',
    descripcion: 'descripcion'
  };

  export type tb_tipo_documentoOrderByRelevanceFieldEnum = (typeof tb_tipo_documentoOrderByRelevanceFieldEnum)[keyof typeof tb_tipo_documentoOrderByRelevanceFieldEnum]


  export const tb_tutoresOrderByRelevanceFieldEnum: {
    tipo_documento: 'tipo_documento',
    nombres: 'nombres',
    apellidos: 'apellidos',
    correo: 'correo',
    telefono: 'telefono'
  };

  export type tb_tutoresOrderByRelevanceFieldEnum = (typeof tb_tutoresOrderByRelevanceFieldEnum)[keyof typeof tb_tutoresOrderByRelevanceFieldEnum]


  export const tb_usuariosOrderByRelevanceFieldEnum: {
    usuario: 'usuario',
    contrasenia: 'contrasenia'
  };

  export type tb_usuariosOrderByRelevanceFieldEnum = (typeof tb_usuariosOrderByRelevanceFieldEnum)[keyof typeof tb_usuariosOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Bytes'
   */
  export type BytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type tb_cargos_adminWhereInput = {
    AND?: tb_cargos_adminWhereInput | tb_cargos_adminWhereInput[]
    OR?: tb_cargos_adminWhereInput[]
    NOT?: tb_cargos_adminWhereInput | tb_cargos_adminWhereInput[]
    id?: IntFilter<"tb_cargos_admin"> | number
    nombre?: StringNullableFilter<"tb_cargos_admin"> | string | null
  }

  export type tb_cargos_adminOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrderInput | SortOrder
    _relevance?: tb_cargos_adminOrderByRelevanceInput
  }

  export type tb_cargos_adminWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tb_cargos_adminWhereInput | tb_cargos_adminWhereInput[]
    OR?: tb_cargos_adminWhereInput[]
    NOT?: tb_cargos_adminWhereInput | tb_cargos_adminWhereInput[]
    nombre?: StringNullableFilter<"tb_cargos_admin"> | string | null
  }, "id">

  export type tb_cargos_adminOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrderInput | SortOrder
    _count?: tb_cargos_adminCountOrderByAggregateInput
    _avg?: tb_cargos_adminAvgOrderByAggregateInput
    _max?: tb_cargos_adminMaxOrderByAggregateInput
    _min?: tb_cargos_adminMinOrderByAggregateInput
    _sum?: tb_cargos_adminSumOrderByAggregateInput
  }

  export type tb_cargos_adminScalarWhereWithAggregatesInput = {
    AND?: tb_cargos_adminScalarWhereWithAggregatesInput | tb_cargos_adminScalarWhereWithAggregatesInput[]
    OR?: tb_cargos_adminScalarWhereWithAggregatesInput[]
    NOT?: tb_cargos_adminScalarWhereWithAggregatesInput | tb_cargos_adminScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tb_cargos_admin"> | number
    nombre?: StringNullableWithAggregatesFilter<"tb_cargos_admin"> | string | null
  }

  export type tb_categoriasWhereInput = {
    AND?: tb_categoriasWhereInput | tb_categoriasWhereInput[]
    OR?: tb_categoriasWhereInput[]
    NOT?: tb_categoriasWhereInput | tb_categoriasWhereInput[]
    id?: IntFilter<"tb_categorias"> | number
    nombre?: StringNullableFilter<"tb_categorias"> | string | null
  }

  export type tb_categoriasOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrderInput | SortOrder
    _relevance?: tb_categoriasOrderByRelevanceInput
  }

  export type tb_categoriasWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tb_categoriasWhereInput | tb_categoriasWhereInput[]
    OR?: tb_categoriasWhereInput[]
    NOT?: tb_categoriasWhereInput | tb_categoriasWhereInput[]
    nombre?: StringNullableFilter<"tb_categorias"> | string | null
  }, "id">

  export type tb_categoriasOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrderInput | SortOrder
    _count?: tb_categoriasCountOrderByAggregateInput
    _avg?: tb_categoriasAvgOrderByAggregateInput
    _max?: tb_categoriasMaxOrderByAggregateInput
    _min?: tb_categoriasMinOrderByAggregateInput
    _sum?: tb_categoriasSumOrderByAggregateInput
  }

  export type tb_categoriasScalarWhereWithAggregatesInput = {
    AND?: tb_categoriasScalarWhereWithAggregatesInput | tb_categoriasScalarWhereWithAggregatesInput[]
    OR?: tb_categoriasScalarWhereWithAggregatesInput[]
    NOT?: tb_categoriasScalarWhereWithAggregatesInput | tb_categoriasScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tb_categorias"> | number
    nombre?: StringNullableWithAggregatesFilter<"tb_categorias"> | string | null
  }

  export type tb_contactos_emergenciaWhereInput = {
    AND?: tb_contactos_emergenciaWhereInput | tb_contactos_emergenciaWhereInput[]
    OR?: tb_contactos_emergenciaWhereInput[]
    NOT?: tb_contactos_emergenciaWhereInput | tb_contactos_emergenciaWhereInput[]
    id?: IntFilter<"tb_contactos_emergencia"> | number
    tipo_documento?: StringFilter<"tb_contactos_emergencia"> | string
    id_entrenador?: IntNullableFilter<"tb_contactos_emergencia"> | number | null
    nombres?: StringNullableFilter<"tb_contactos_emergencia"> | string | null
    apellidos?: StringNullableFilter<"tb_contactos_emergencia"> | string | null
    correo?: StringNullableFilter<"tb_contactos_emergencia"> | string | null
    telefono?: StringNullableFilter<"tb_contactos_emergencia"> | string | null
  }

  export type tb_contactos_emergenciaOrderByWithRelationInput = {
    id?: SortOrder
    tipo_documento?: SortOrder
    id_entrenador?: SortOrderInput | SortOrder
    nombres?: SortOrderInput | SortOrder
    apellidos?: SortOrderInput | SortOrder
    correo?: SortOrderInput | SortOrder
    telefono?: SortOrderInput | SortOrder
    _relevance?: tb_contactos_emergenciaOrderByRelevanceInput
  }

  export type tb_contactos_emergenciaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tb_contactos_emergenciaWhereInput | tb_contactos_emergenciaWhereInput[]
    OR?: tb_contactos_emergenciaWhereInput[]
    NOT?: tb_contactos_emergenciaWhereInput | tb_contactos_emergenciaWhereInput[]
    tipo_documento?: StringFilter<"tb_contactos_emergencia"> | string
    id_entrenador?: IntNullableFilter<"tb_contactos_emergencia"> | number | null
    nombres?: StringNullableFilter<"tb_contactos_emergencia"> | string | null
    apellidos?: StringNullableFilter<"tb_contactos_emergencia"> | string | null
    correo?: StringNullableFilter<"tb_contactos_emergencia"> | string | null
    telefono?: StringNullableFilter<"tb_contactos_emergencia"> | string | null
  }, "id">

  export type tb_contactos_emergenciaOrderByWithAggregationInput = {
    id?: SortOrder
    tipo_documento?: SortOrder
    id_entrenador?: SortOrderInput | SortOrder
    nombres?: SortOrderInput | SortOrder
    apellidos?: SortOrderInput | SortOrder
    correo?: SortOrderInput | SortOrder
    telefono?: SortOrderInput | SortOrder
    _count?: tb_contactos_emergenciaCountOrderByAggregateInput
    _avg?: tb_contactos_emergenciaAvgOrderByAggregateInput
    _max?: tb_contactos_emergenciaMaxOrderByAggregateInput
    _min?: tb_contactos_emergenciaMinOrderByAggregateInput
    _sum?: tb_contactos_emergenciaSumOrderByAggregateInput
  }

  export type tb_contactos_emergenciaScalarWhereWithAggregatesInput = {
    AND?: tb_contactos_emergenciaScalarWhereWithAggregatesInput | tb_contactos_emergenciaScalarWhereWithAggregatesInput[]
    OR?: tb_contactos_emergenciaScalarWhereWithAggregatesInput[]
    NOT?: tb_contactos_emergenciaScalarWhereWithAggregatesInput | tb_contactos_emergenciaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tb_contactos_emergencia"> | number
    tipo_documento?: StringWithAggregatesFilter<"tb_contactos_emergencia"> | string
    id_entrenador?: IntNullableWithAggregatesFilter<"tb_contactos_emergencia"> | number | null
    nombres?: StringNullableWithAggregatesFilter<"tb_contactos_emergencia"> | string | null
    apellidos?: StringNullableWithAggregatesFilter<"tb_contactos_emergencia"> | string | null
    correo?: StringNullableWithAggregatesFilter<"tb_contactos_emergencia"> | string | null
    telefono?: StringNullableWithAggregatesFilter<"tb_contactos_emergencia"> | string | null
  }

  export type tb_departamentoWhereInput = {
    AND?: tb_departamentoWhereInput | tb_departamentoWhereInput[]
    OR?: tb_departamentoWhereInput[]
    NOT?: tb_departamentoWhereInput | tb_departamentoWhereInput[]
    id?: IntFilter<"tb_departamento"> | number
    nombre?: StringNullableFilter<"tb_departamento"> | string | null
  }

  export type tb_departamentoOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrderInput | SortOrder
    _relevance?: tb_departamentoOrderByRelevanceInput
  }

  export type tb_departamentoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tb_departamentoWhereInput | tb_departamentoWhereInput[]
    OR?: tb_departamentoWhereInput[]
    NOT?: tb_departamentoWhereInput | tb_departamentoWhereInput[]
    nombre?: StringNullableFilter<"tb_departamento"> | string | null
  }, "id">

  export type tb_departamentoOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrderInput | SortOrder
    _count?: tb_departamentoCountOrderByAggregateInput
    _avg?: tb_departamentoAvgOrderByAggregateInput
    _max?: tb_departamentoMaxOrderByAggregateInput
    _min?: tb_departamentoMinOrderByAggregateInput
    _sum?: tb_departamentoSumOrderByAggregateInput
  }

  export type tb_departamentoScalarWhereWithAggregatesInput = {
    AND?: tb_departamentoScalarWhereWithAggregatesInput | tb_departamentoScalarWhereWithAggregatesInput[]
    OR?: tb_departamentoScalarWhereWithAggregatesInput[]
    NOT?: tb_departamentoScalarWhereWithAggregatesInput | tb_departamentoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tb_departamento"> | number
    nombre?: StringNullableWithAggregatesFilter<"tb_departamento"> | string | null
  }

  export type tb_deportistasWhereInput = {
    AND?: tb_deportistasWhereInput | tb_deportistasWhereInput[]
    OR?: tb_deportistasWhereInput[]
    NOT?: tb_deportistasWhereInput | tb_deportistasWhereInput[]
    id?: IntFilter<"tb_deportistas"> | number
    id_tutor?: IntNullableFilter<"tb_deportistas"> | number | null
    id_persona_club?: IntFilter<"tb_deportistas"> | number
    id_categoria?: IntNullableFilter<"tb_deportistas"> | number | null
    activo?: BoolNullableFilter<"tb_deportistas"> | boolean | null
  }

  export type tb_deportistasOrderByWithRelationInput = {
    id?: SortOrder
    id_tutor?: SortOrderInput | SortOrder
    id_persona_club?: SortOrder
    id_categoria?: SortOrderInput | SortOrder
    activo?: SortOrderInput | SortOrder
  }

  export type tb_deportistasWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tb_deportistasWhereInput | tb_deportistasWhereInput[]
    OR?: tb_deportistasWhereInput[]
    NOT?: tb_deportistasWhereInput | tb_deportistasWhereInput[]
    id_tutor?: IntNullableFilter<"tb_deportistas"> | number | null
    id_persona_club?: IntFilter<"tb_deportistas"> | number
    id_categoria?: IntNullableFilter<"tb_deportistas"> | number | null
    activo?: BoolNullableFilter<"tb_deportistas"> | boolean | null
  }, "id">

  export type tb_deportistasOrderByWithAggregationInput = {
    id?: SortOrder
    id_tutor?: SortOrderInput | SortOrder
    id_persona_club?: SortOrder
    id_categoria?: SortOrderInput | SortOrder
    activo?: SortOrderInput | SortOrder
    _count?: tb_deportistasCountOrderByAggregateInput
    _avg?: tb_deportistasAvgOrderByAggregateInput
    _max?: tb_deportistasMaxOrderByAggregateInput
    _min?: tb_deportistasMinOrderByAggregateInput
    _sum?: tb_deportistasSumOrderByAggregateInput
  }

  export type tb_deportistasScalarWhereWithAggregatesInput = {
    AND?: tb_deportistasScalarWhereWithAggregatesInput | tb_deportistasScalarWhereWithAggregatesInput[]
    OR?: tb_deportistasScalarWhereWithAggregatesInput[]
    NOT?: tb_deportistasScalarWhereWithAggregatesInput | tb_deportistasScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tb_deportistas"> | number
    id_tutor?: IntNullableWithAggregatesFilter<"tb_deportistas"> | number | null
    id_persona_club?: IntWithAggregatesFilter<"tb_deportistas"> | number
    id_categoria?: IntNullableWithAggregatesFilter<"tb_deportistas"> | number | null
    activo?: BoolNullableWithAggregatesFilter<"tb_deportistas"> | boolean | null
  }

  export type tb_desercion_deportistasWhereInput = {
    AND?: tb_desercion_deportistasWhereInput | tb_desercion_deportistasWhereInput[]
    OR?: tb_desercion_deportistasWhereInput[]
    NOT?: tb_desercion_deportistasWhereInput | tb_desercion_deportistasWhereInput[]
    id?: IntFilter<"tb_desercion_deportistas"> | number
    id_deportista?: IntFilter<"tb_desercion_deportistas"> | number
    fecha_desercion?: DateTimeNullableFilter<"tb_desercion_deportistas"> | Date | string | null
    razon?: StringNullableFilter<"tb_desercion_deportistas"> | string | null
    descripcion?: StringNullableFilter<"tb_desercion_deportistas"> | string | null
  }

  export type tb_desercion_deportistasOrderByWithRelationInput = {
    id?: SortOrder
    id_deportista?: SortOrder
    fecha_desercion?: SortOrderInput | SortOrder
    razon?: SortOrderInput | SortOrder
    descripcion?: SortOrderInput | SortOrder
    _relevance?: tb_desercion_deportistasOrderByRelevanceInput
  }

  export type tb_desercion_deportistasWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tb_desercion_deportistasWhereInput | tb_desercion_deportistasWhereInput[]
    OR?: tb_desercion_deportistasWhereInput[]
    NOT?: tb_desercion_deportistasWhereInput | tb_desercion_deportistasWhereInput[]
    id_deportista?: IntFilter<"tb_desercion_deportistas"> | number
    fecha_desercion?: DateTimeNullableFilter<"tb_desercion_deportistas"> | Date | string | null
    razon?: StringNullableFilter<"tb_desercion_deportistas"> | string | null
    descripcion?: StringNullableFilter<"tb_desercion_deportistas"> | string | null
  }, "id">

  export type tb_desercion_deportistasOrderByWithAggregationInput = {
    id?: SortOrder
    id_deportista?: SortOrder
    fecha_desercion?: SortOrderInput | SortOrder
    razon?: SortOrderInput | SortOrder
    descripcion?: SortOrderInput | SortOrder
    _count?: tb_desercion_deportistasCountOrderByAggregateInput
    _avg?: tb_desercion_deportistasAvgOrderByAggregateInput
    _max?: tb_desercion_deportistasMaxOrderByAggregateInput
    _min?: tb_desercion_deportistasMinOrderByAggregateInput
    _sum?: tb_desercion_deportistasSumOrderByAggregateInput
  }

  export type tb_desercion_deportistasScalarWhereWithAggregatesInput = {
    AND?: tb_desercion_deportistasScalarWhereWithAggregatesInput | tb_desercion_deportistasScalarWhereWithAggregatesInput[]
    OR?: tb_desercion_deportistasScalarWhereWithAggregatesInput[]
    NOT?: tb_desercion_deportistasScalarWhereWithAggregatesInput | tb_desercion_deportistasScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tb_desercion_deportistas"> | number
    id_deportista?: IntWithAggregatesFilter<"tb_desercion_deportistas"> | number
    fecha_desercion?: DateTimeNullableWithAggregatesFilter<"tb_desercion_deportistas"> | Date | string | null
    razon?: StringNullableWithAggregatesFilter<"tb_desercion_deportistas"> | string | null
    descripcion?: StringNullableWithAggregatesFilter<"tb_desercion_deportistas"> | string | null
  }

  export type tb_entrenadoresWhereInput = {
    AND?: tb_entrenadoresWhereInput | tb_entrenadoresWhereInput[]
    OR?: tb_entrenadoresWhereInput[]
    NOT?: tb_entrenadoresWhereInput | tb_entrenadoresWhereInput[]
    id?: IntFilter<"tb_entrenadores"> | number
    id_persona_club?: IntFilter<"tb_entrenadores"> | number
    fecha_ingreso?: DateTimeNullableFilter<"tb_entrenadores"> | Date | string | null
    activo?: BoolNullableFilter<"tb_entrenadores"> | boolean | null
    contrato?: BytesNullableFilter<"tb_entrenadores"> | Uint8Array | null
  }

  export type tb_entrenadoresOrderByWithRelationInput = {
    id?: SortOrder
    id_persona_club?: SortOrder
    fecha_ingreso?: SortOrderInput | SortOrder
    activo?: SortOrderInput | SortOrder
    contrato?: SortOrderInput | SortOrder
  }

  export type tb_entrenadoresWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tb_entrenadoresWhereInput | tb_entrenadoresWhereInput[]
    OR?: tb_entrenadoresWhereInput[]
    NOT?: tb_entrenadoresWhereInput | tb_entrenadoresWhereInput[]
    id_persona_club?: IntFilter<"tb_entrenadores"> | number
    fecha_ingreso?: DateTimeNullableFilter<"tb_entrenadores"> | Date | string | null
    activo?: BoolNullableFilter<"tb_entrenadores"> | boolean | null
    contrato?: BytesNullableFilter<"tb_entrenadores"> | Uint8Array | null
  }, "id">

  export type tb_entrenadoresOrderByWithAggregationInput = {
    id?: SortOrder
    id_persona_club?: SortOrder
    fecha_ingreso?: SortOrderInput | SortOrder
    activo?: SortOrderInput | SortOrder
    contrato?: SortOrderInput | SortOrder
    _count?: tb_entrenadoresCountOrderByAggregateInput
    _avg?: tb_entrenadoresAvgOrderByAggregateInput
    _max?: tb_entrenadoresMaxOrderByAggregateInput
    _min?: tb_entrenadoresMinOrderByAggregateInput
    _sum?: tb_entrenadoresSumOrderByAggregateInput
  }

  export type tb_entrenadoresScalarWhereWithAggregatesInput = {
    AND?: tb_entrenadoresScalarWhereWithAggregatesInput | tb_entrenadoresScalarWhereWithAggregatesInput[]
    OR?: tb_entrenadoresScalarWhereWithAggregatesInput[]
    NOT?: tb_entrenadoresScalarWhereWithAggregatesInput | tb_entrenadoresScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tb_entrenadores"> | number
    id_persona_club?: IntWithAggregatesFilter<"tb_entrenadores"> | number
    fecha_ingreso?: DateTimeNullableWithAggregatesFilter<"tb_entrenadores"> | Date | string | null
    activo?: BoolNullableWithAggregatesFilter<"tb_entrenadores"> | boolean | null
    contrato?: BytesNullableWithAggregatesFilter<"tb_entrenadores"> | Uint8Array | null
  }

  export type tb_gestion_adminWhereInput = {
    AND?: tb_gestion_adminWhereInput | tb_gestion_adminWhereInput[]
    OR?: tb_gestion_adminWhereInput[]
    NOT?: tb_gestion_adminWhereInput | tb_gestion_adminWhereInput[]
    id?: IntFilter<"tb_gestion_admin"> | number
    id_tutor?: IntNullableFilter<"tb_gestion_admin"> | number | null
    id_deportista?: IntNullableFilter<"tb_gestion_admin"> | number | null
    id_cargo?: IntNullableFilter<"tb_gestion_admin"> | number | null
    fecha_inicio?: DateTimeNullableFilter<"tb_gestion_admin"> | Date | string | null
    fecha_fin?: DateTimeNullableFilter<"tb_gestion_admin"> | Date | string | null
    activo?: BoolNullableFilter<"tb_gestion_admin"> | boolean | null
  }

  export type tb_gestion_adminOrderByWithRelationInput = {
    id?: SortOrder
    id_tutor?: SortOrderInput | SortOrder
    id_deportista?: SortOrderInput | SortOrder
    id_cargo?: SortOrderInput | SortOrder
    fecha_inicio?: SortOrderInput | SortOrder
    fecha_fin?: SortOrderInput | SortOrder
    activo?: SortOrderInput | SortOrder
  }

  export type tb_gestion_adminWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tb_gestion_adminWhereInput | tb_gestion_adminWhereInput[]
    OR?: tb_gestion_adminWhereInput[]
    NOT?: tb_gestion_adminWhereInput | tb_gestion_adminWhereInput[]
    id_tutor?: IntNullableFilter<"tb_gestion_admin"> | number | null
    id_deportista?: IntNullableFilter<"tb_gestion_admin"> | number | null
    id_cargo?: IntNullableFilter<"tb_gestion_admin"> | number | null
    fecha_inicio?: DateTimeNullableFilter<"tb_gestion_admin"> | Date | string | null
    fecha_fin?: DateTimeNullableFilter<"tb_gestion_admin"> | Date | string | null
    activo?: BoolNullableFilter<"tb_gestion_admin"> | boolean | null
  }, "id">

  export type tb_gestion_adminOrderByWithAggregationInput = {
    id?: SortOrder
    id_tutor?: SortOrderInput | SortOrder
    id_deportista?: SortOrderInput | SortOrder
    id_cargo?: SortOrderInput | SortOrder
    fecha_inicio?: SortOrderInput | SortOrder
    fecha_fin?: SortOrderInput | SortOrder
    activo?: SortOrderInput | SortOrder
    _count?: tb_gestion_adminCountOrderByAggregateInput
    _avg?: tb_gestion_adminAvgOrderByAggregateInput
    _max?: tb_gestion_adminMaxOrderByAggregateInput
    _min?: tb_gestion_adminMinOrderByAggregateInput
    _sum?: tb_gestion_adminSumOrderByAggregateInput
  }

  export type tb_gestion_adminScalarWhereWithAggregatesInput = {
    AND?: tb_gestion_adminScalarWhereWithAggregatesInput | tb_gestion_adminScalarWhereWithAggregatesInput[]
    OR?: tb_gestion_adminScalarWhereWithAggregatesInput[]
    NOT?: tb_gestion_adminScalarWhereWithAggregatesInput | tb_gestion_adminScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tb_gestion_admin"> | number
    id_tutor?: IntNullableWithAggregatesFilter<"tb_gestion_admin"> | number | null
    id_deportista?: IntNullableWithAggregatesFilter<"tb_gestion_admin"> | number | null
    id_cargo?: IntNullableWithAggregatesFilter<"tb_gestion_admin"> | number | null
    fecha_inicio?: DateTimeNullableWithAggregatesFilter<"tb_gestion_admin"> | Date | string | null
    fecha_fin?: DateTimeNullableWithAggregatesFilter<"tb_gestion_admin"> | Date | string | null
    activo?: BoolNullableWithAggregatesFilter<"tb_gestion_admin"> | boolean | null
  }

  export type tb_municipioWhereInput = {
    AND?: tb_municipioWhereInput | tb_municipioWhereInput[]
    OR?: tb_municipioWhereInput[]
    NOT?: tb_municipioWhereInput | tb_municipioWhereInput[]
    id?: IntFilter<"tb_municipio"> | number
    id_departamento?: IntFilter<"tb_municipio"> | number
    nombre?: StringNullableFilter<"tb_municipio"> | string | null
    estado?: BoolNullableFilter<"tb_municipio"> | boolean | null
  }

  export type tb_municipioOrderByWithRelationInput = {
    id?: SortOrder
    id_departamento?: SortOrder
    nombre?: SortOrderInput | SortOrder
    estado?: SortOrderInput | SortOrder
    _relevance?: tb_municipioOrderByRelevanceInput
  }

  export type tb_municipioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tb_municipioWhereInput | tb_municipioWhereInput[]
    OR?: tb_municipioWhereInput[]
    NOT?: tb_municipioWhereInput | tb_municipioWhereInput[]
    id_departamento?: IntFilter<"tb_municipio"> | number
    nombre?: StringNullableFilter<"tb_municipio"> | string | null
    estado?: BoolNullableFilter<"tb_municipio"> | boolean | null
  }, "id">

  export type tb_municipioOrderByWithAggregationInput = {
    id?: SortOrder
    id_departamento?: SortOrder
    nombre?: SortOrderInput | SortOrder
    estado?: SortOrderInput | SortOrder
    _count?: tb_municipioCountOrderByAggregateInput
    _avg?: tb_municipioAvgOrderByAggregateInput
    _max?: tb_municipioMaxOrderByAggregateInput
    _min?: tb_municipioMinOrderByAggregateInput
    _sum?: tb_municipioSumOrderByAggregateInput
  }

  export type tb_municipioScalarWhereWithAggregatesInput = {
    AND?: tb_municipioScalarWhereWithAggregatesInput | tb_municipioScalarWhereWithAggregatesInput[]
    OR?: tb_municipioScalarWhereWithAggregatesInput[]
    NOT?: tb_municipioScalarWhereWithAggregatesInput | tb_municipioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tb_municipio"> | number
    id_departamento?: IntWithAggregatesFilter<"tb_municipio"> | number
    nombre?: StringNullableWithAggregatesFilter<"tb_municipio"> | string | null
    estado?: BoolNullableWithAggregatesFilter<"tb_municipio"> | boolean | null
  }

  export type tb_pagos_deportistasWhereInput = {
    AND?: tb_pagos_deportistasWhereInput | tb_pagos_deportistasWhereInput[]
    OR?: tb_pagos_deportistasWhereInput[]
    NOT?: tb_pagos_deportistasWhereInput | tb_pagos_deportistasWhereInput[]
    id?: IntFilter<"tb_pagos_deportistas"> | number
    id_deportista?: IntFilter<"tb_pagos_deportistas"> | number
    fecha_pago?: DateTimeNullableFilter<"tb_pagos_deportistas"> | Date | string | null
    valor?: DecimalNullableFilter<"tb_pagos_deportistas"> | Decimal | DecimalJsLike | number | string | null
    tipo_pago?: StringNullableFilter<"tb_pagos_deportistas"> | string | null
  }

  export type tb_pagos_deportistasOrderByWithRelationInput = {
    id?: SortOrder
    id_deportista?: SortOrder
    fecha_pago?: SortOrderInput | SortOrder
    valor?: SortOrderInput | SortOrder
    tipo_pago?: SortOrderInput | SortOrder
    _relevance?: tb_pagos_deportistasOrderByRelevanceInput
  }

  export type tb_pagos_deportistasWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tb_pagos_deportistasWhereInput | tb_pagos_deportistasWhereInput[]
    OR?: tb_pagos_deportistasWhereInput[]
    NOT?: tb_pagos_deportistasWhereInput | tb_pagos_deportistasWhereInput[]
    id_deportista?: IntFilter<"tb_pagos_deportistas"> | number
    fecha_pago?: DateTimeNullableFilter<"tb_pagos_deportistas"> | Date | string | null
    valor?: DecimalNullableFilter<"tb_pagos_deportistas"> | Decimal | DecimalJsLike | number | string | null
    tipo_pago?: StringNullableFilter<"tb_pagos_deportistas"> | string | null
  }, "id">

  export type tb_pagos_deportistasOrderByWithAggregationInput = {
    id?: SortOrder
    id_deportista?: SortOrder
    fecha_pago?: SortOrderInput | SortOrder
    valor?: SortOrderInput | SortOrder
    tipo_pago?: SortOrderInput | SortOrder
    _count?: tb_pagos_deportistasCountOrderByAggregateInput
    _avg?: tb_pagos_deportistasAvgOrderByAggregateInput
    _max?: tb_pagos_deportistasMaxOrderByAggregateInput
    _min?: tb_pagos_deportistasMinOrderByAggregateInput
    _sum?: tb_pagos_deportistasSumOrderByAggregateInput
  }

  export type tb_pagos_deportistasScalarWhereWithAggregatesInput = {
    AND?: tb_pagos_deportistasScalarWhereWithAggregatesInput | tb_pagos_deportistasScalarWhereWithAggregatesInput[]
    OR?: tb_pagos_deportistasScalarWhereWithAggregatesInput[]
    NOT?: tb_pagos_deportistasScalarWhereWithAggregatesInput | tb_pagos_deportistasScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tb_pagos_deportistas"> | number
    id_deportista?: IntWithAggregatesFilter<"tb_pagos_deportistas"> | number
    fecha_pago?: DateTimeNullableWithAggregatesFilter<"tb_pagos_deportistas"> | Date | string | null
    valor?: DecimalNullableWithAggregatesFilter<"tb_pagos_deportistas"> | Decimal | DecimalJsLike | number | string | null
    tipo_pago?: StringNullableWithAggregatesFilter<"tb_pagos_deportistas"> | string | null
  }

  export type tb_personas_clubWhereInput = {
    AND?: tb_personas_clubWhereInput | tb_personas_clubWhereInput[]
    OR?: tb_personas_clubWhereInput[]
    NOT?: tb_personas_clubWhereInput | tb_personas_clubWhereInput[]
    id?: IntFilter<"tb_personas_club"> | number
    tipo_documento?: StringFilter<"tb_personas_club"> | string
    id_municipio?: IntFilter<"tb_personas_club"> | number
    id_usuario?: IntFilter<"tb_personas_club"> | number
    nombres?: StringFilter<"tb_personas_club"> | string
    apellidos?: StringFilter<"tb_personas_club"> | string
    fecha_nacimento?: DateTimeNullableFilter<"tb_personas_club"> | Date | string | null
    tipo_rh?: StringNullableFilter<"tb_personas_club"> | string | null
    peso?: FloatNullableFilter<"tb_personas_club"> | number | null
    altura?: FloatNullableFilter<"tb_personas_club"> | number | null
    correo?: StringFilter<"tb_personas_club"> | string
    numero_telefono?: IntNullableFilter<"tb_personas_club"> | number | null
    talla_camisa?: StringNullableFilter<"tb_personas_club"> | string | null
    talla_calzado?: StringNullableFilter<"tb_personas_club"> | string | null
    talla_pantaloneta?: StringNullableFilter<"tb_personas_club"> | string | null
    genero?: StringNullableFilter<"tb_personas_club"> | string | null
    direccion?: StringNullableFilter<"tb_personas_club"> | string | null
  }

  export type tb_personas_clubOrderByWithRelationInput = {
    id?: SortOrder
    tipo_documento?: SortOrder
    id_municipio?: SortOrder
    id_usuario?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    fecha_nacimento?: SortOrderInput | SortOrder
    tipo_rh?: SortOrderInput | SortOrder
    peso?: SortOrderInput | SortOrder
    altura?: SortOrderInput | SortOrder
    correo?: SortOrder
    numero_telefono?: SortOrderInput | SortOrder
    talla_camisa?: SortOrderInput | SortOrder
    talla_calzado?: SortOrderInput | SortOrder
    talla_pantaloneta?: SortOrderInput | SortOrder
    genero?: SortOrderInput | SortOrder
    direccion?: SortOrderInput | SortOrder
    _relevance?: tb_personas_clubOrderByRelevanceInput
  }

  export type tb_personas_clubWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tb_personas_clubWhereInput | tb_personas_clubWhereInput[]
    OR?: tb_personas_clubWhereInput[]
    NOT?: tb_personas_clubWhereInput | tb_personas_clubWhereInput[]
    tipo_documento?: StringFilter<"tb_personas_club"> | string
    id_municipio?: IntFilter<"tb_personas_club"> | number
    id_usuario?: IntFilter<"tb_personas_club"> | number
    nombres?: StringFilter<"tb_personas_club"> | string
    apellidos?: StringFilter<"tb_personas_club"> | string
    fecha_nacimento?: DateTimeNullableFilter<"tb_personas_club"> | Date | string | null
    tipo_rh?: StringNullableFilter<"tb_personas_club"> | string | null
    peso?: FloatNullableFilter<"tb_personas_club"> | number | null
    altura?: FloatNullableFilter<"tb_personas_club"> | number | null
    correo?: StringFilter<"tb_personas_club"> | string
    numero_telefono?: IntNullableFilter<"tb_personas_club"> | number | null
    talla_camisa?: StringNullableFilter<"tb_personas_club"> | string | null
    talla_calzado?: StringNullableFilter<"tb_personas_club"> | string | null
    talla_pantaloneta?: StringNullableFilter<"tb_personas_club"> | string | null
    genero?: StringNullableFilter<"tb_personas_club"> | string | null
    direccion?: StringNullableFilter<"tb_personas_club"> | string | null
  }, "id">

  export type tb_personas_clubOrderByWithAggregationInput = {
    id?: SortOrder
    tipo_documento?: SortOrder
    id_municipio?: SortOrder
    id_usuario?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    fecha_nacimento?: SortOrderInput | SortOrder
    tipo_rh?: SortOrderInput | SortOrder
    peso?: SortOrderInput | SortOrder
    altura?: SortOrderInput | SortOrder
    correo?: SortOrder
    numero_telefono?: SortOrderInput | SortOrder
    talla_camisa?: SortOrderInput | SortOrder
    talla_calzado?: SortOrderInput | SortOrder
    talla_pantaloneta?: SortOrderInput | SortOrder
    genero?: SortOrderInput | SortOrder
    direccion?: SortOrderInput | SortOrder
    _count?: tb_personas_clubCountOrderByAggregateInput
    _avg?: tb_personas_clubAvgOrderByAggregateInput
    _max?: tb_personas_clubMaxOrderByAggregateInput
    _min?: tb_personas_clubMinOrderByAggregateInput
    _sum?: tb_personas_clubSumOrderByAggregateInput
  }

  export type tb_personas_clubScalarWhereWithAggregatesInput = {
    AND?: tb_personas_clubScalarWhereWithAggregatesInput | tb_personas_clubScalarWhereWithAggregatesInput[]
    OR?: tb_personas_clubScalarWhereWithAggregatesInput[]
    NOT?: tb_personas_clubScalarWhereWithAggregatesInput | tb_personas_clubScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tb_personas_club"> | number
    tipo_documento?: StringWithAggregatesFilter<"tb_personas_club"> | string
    id_municipio?: IntWithAggregatesFilter<"tb_personas_club"> | number
    id_usuario?: IntWithAggregatesFilter<"tb_personas_club"> | number
    nombres?: StringWithAggregatesFilter<"tb_personas_club"> | string
    apellidos?: StringWithAggregatesFilter<"tb_personas_club"> | string
    fecha_nacimento?: DateTimeNullableWithAggregatesFilter<"tb_personas_club"> | Date | string | null
    tipo_rh?: StringNullableWithAggregatesFilter<"tb_personas_club"> | string | null
    peso?: FloatNullableWithAggregatesFilter<"tb_personas_club"> | number | null
    altura?: FloatNullableWithAggregatesFilter<"tb_personas_club"> | number | null
    correo?: StringWithAggregatesFilter<"tb_personas_club"> | string
    numero_telefono?: IntNullableWithAggregatesFilter<"tb_personas_club"> | number | null
    talla_camisa?: StringNullableWithAggregatesFilter<"tb_personas_club"> | string | null
    talla_calzado?: StringNullableWithAggregatesFilter<"tb_personas_club"> | string | null
    talla_pantaloneta?: StringNullableWithAggregatesFilter<"tb_personas_club"> | string | null
    genero?: StringNullableWithAggregatesFilter<"tb_personas_club"> | string | null
    direccion?: StringNullableWithAggregatesFilter<"tb_personas_club"> | string | null
  }

  export type tb_tipo_documentoWhereInput = {
    AND?: tb_tipo_documentoWhereInput | tb_tipo_documentoWhereInput[]
    OR?: tb_tipo_documentoWhereInput[]
    NOT?: tb_tipo_documentoWhereInput | tb_tipo_documentoWhereInput[]
    id?: IntFilter<"tb_tipo_documento"> | number
    tipo_documento?: StringNullableFilter<"tb_tipo_documento"> | string | null
    descripcion?: StringNullableFilter<"tb_tipo_documento"> | string | null
  }

  export type tb_tipo_documentoOrderByWithRelationInput = {
    id?: SortOrder
    tipo_documento?: SortOrderInput | SortOrder
    descripcion?: SortOrderInput | SortOrder
    _relevance?: tb_tipo_documentoOrderByRelevanceInput
  }

  export type tb_tipo_documentoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tb_tipo_documentoWhereInput | tb_tipo_documentoWhereInput[]
    OR?: tb_tipo_documentoWhereInput[]
    NOT?: tb_tipo_documentoWhereInput | tb_tipo_documentoWhereInput[]
    tipo_documento?: StringNullableFilter<"tb_tipo_documento"> | string | null
    descripcion?: StringNullableFilter<"tb_tipo_documento"> | string | null
  }, "id">

  export type tb_tipo_documentoOrderByWithAggregationInput = {
    id?: SortOrder
    tipo_documento?: SortOrderInput | SortOrder
    descripcion?: SortOrderInput | SortOrder
    _count?: tb_tipo_documentoCountOrderByAggregateInput
    _avg?: tb_tipo_documentoAvgOrderByAggregateInput
    _max?: tb_tipo_documentoMaxOrderByAggregateInput
    _min?: tb_tipo_documentoMinOrderByAggregateInput
    _sum?: tb_tipo_documentoSumOrderByAggregateInput
  }

  export type tb_tipo_documentoScalarWhereWithAggregatesInput = {
    AND?: tb_tipo_documentoScalarWhereWithAggregatesInput | tb_tipo_documentoScalarWhereWithAggregatesInput[]
    OR?: tb_tipo_documentoScalarWhereWithAggregatesInput[]
    NOT?: tb_tipo_documentoScalarWhereWithAggregatesInput | tb_tipo_documentoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tb_tipo_documento"> | number
    tipo_documento?: StringNullableWithAggregatesFilter<"tb_tipo_documento"> | string | null
    descripcion?: StringNullableWithAggregatesFilter<"tb_tipo_documento"> | string | null
  }

  export type tb_tutoresWhereInput = {
    AND?: tb_tutoresWhereInput | tb_tutoresWhereInput[]
    OR?: tb_tutoresWhereInput[]
    NOT?: tb_tutoresWhereInput | tb_tutoresWhereInput[]
    id?: IntFilter<"tb_tutores"> | number
    tipo_documento?: StringFilter<"tb_tutores"> | string
    nombres?: StringNullableFilter<"tb_tutores"> | string | null
    apellidos?: StringNullableFilter<"tb_tutores"> | string | null
    correo?: StringNullableFilter<"tb_tutores"> | string | null
    telefono?: StringNullableFilter<"tb_tutores"> | string | null
  }

  export type tb_tutoresOrderByWithRelationInput = {
    id?: SortOrder
    tipo_documento?: SortOrder
    nombres?: SortOrderInput | SortOrder
    apellidos?: SortOrderInput | SortOrder
    correo?: SortOrderInput | SortOrder
    telefono?: SortOrderInput | SortOrder
    _relevance?: tb_tutoresOrderByRelevanceInput
  }

  export type tb_tutoresWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tb_tutoresWhereInput | tb_tutoresWhereInput[]
    OR?: tb_tutoresWhereInput[]
    NOT?: tb_tutoresWhereInput | tb_tutoresWhereInput[]
    tipo_documento?: StringFilter<"tb_tutores"> | string
    nombres?: StringNullableFilter<"tb_tutores"> | string | null
    apellidos?: StringNullableFilter<"tb_tutores"> | string | null
    correo?: StringNullableFilter<"tb_tutores"> | string | null
    telefono?: StringNullableFilter<"tb_tutores"> | string | null
  }, "id">

  export type tb_tutoresOrderByWithAggregationInput = {
    id?: SortOrder
    tipo_documento?: SortOrder
    nombres?: SortOrderInput | SortOrder
    apellidos?: SortOrderInput | SortOrder
    correo?: SortOrderInput | SortOrder
    telefono?: SortOrderInput | SortOrder
    _count?: tb_tutoresCountOrderByAggregateInput
    _avg?: tb_tutoresAvgOrderByAggregateInput
    _max?: tb_tutoresMaxOrderByAggregateInput
    _min?: tb_tutoresMinOrderByAggregateInput
    _sum?: tb_tutoresSumOrderByAggregateInput
  }

  export type tb_tutoresScalarWhereWithAggregatesInput = {
    AND?: tb_tutoresScalarWhereWithAggregatesInput | tb_tutoresScalarWhereWithAggregatesInput[]
    OR?: tb_tutoresScalarWhereWithAggregatesInput[]
    NOT?: tb_tutoresScalarWhereWithAggregatesInput | tb_tutoresScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tb_tutores"> | number
    tipo_documento?: StringWithAggregatesFilter<"tb_tutores"> | string
    nombres?: StringNullableWithAggregatesFilter<"tb_tutores"> | string | null
    apellidos?: StringNullableWithAggregatesFilter<"tb_tutores"> | string | null
    correo?: StringNullableWithAggregatesFilter<"tb_tutores"> | string | null
    telefono?: StringNullableWithAggregatesFilter<"tb_tutores"> | string | null
  }

  export type tb_usuariosWhereInput = {
    AND?: tb_usuariosWhereInput | tb_usuariosWhereInput[]
    OR?: tb_usuariosWhereInput[]
    NOT?: tb_usuariosWhereInput | tb_usuariosWhereInput[]
    id?: IntFilter<"tb_usuarios"> | number
    usuario?: StringNullableFilter<"tb_usuarios"> | string | null
    contrasenia?: StringNullableFilter<"tb_usuarios"> | string | null
    activo?: BoolNullableFilter<"tb_usuarios"> | boolean | null
    id_usuario?: IntNullableFilter<"tb_usuarios"> | number | null
  }

  export type tb_usuariosOrderByWithRelationInput = {
    id?: SortOrder
    usuario?: SortOrderInput | SortOrder
    contrasenia?: SortOrderInput | SortOrder
    activo?: SortOrderInput | SortOrder
    id_usuario?: SortOrderInput | SortOrder
    _relevance?: tb_usuariosOrderByRelevanceInput
  }

  export type tb_usuariosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tb_usuariosWhereInput | tb_usuariosWhereInput[]
    OR?: tb_usuariosWhereInput[]
    NOT?: tb_usuariosWhereInput | tb_usuariosWhereInput[]
    usuario?: StringNullableFilter<"tb_usuarios"> | string | null
    contrasenia?: StringNullableFilter<"tb_usuarios"> | string | null
    activo?: BoolNullableFilter<"tb_usuarios"> | boolean | null
    id_usuario?: IntNullableFilter<"tb_usuarios"> | number | null
  }, "id">

  export type tb_usuariosOrderByWithAggregationInput = {
    id?: SortOrder
    usuario?: SortOrderInput | SortOrder
    contrasenia?: SortOrderInput | SortOrder
    activo?: SortOrderInput | SortOrder
    id_usuario?: SortOrderInput | SortOrder
    _count?: tb_usuariosCountOrderByAggregateInput
    _avg?: tb_usuariosAvgOrderByAggregateInput
    _max?: tb_usuariosMaxOrderByAggregateInput
    _min?: tb_usuariosMinOrderByAggregateInput
    _sum?: tb_usuariosSumOrderByAggregateInput
  }

  export type tb_usuariosScalarWhereWithAggregatesInput = {
    AND?: tb_usuariosScalarWhereWithAggregatesInput | tb_usuariosScalarWhereWithAggregatesInput[]
    OR?: tb_usuariosScalarWhereWithAggregatesInput[]
    NOT?: tb_usuariosScalarWhereWithAggregatesInput | tb_usuariosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tb_usuarios"> | number
    usuario?: StringNullableWithAggregatesFilter<"tb_usuarios"> | string | null
    contrasenia?: StringNullableWithAggregatesFilter<"tb_usuarios"> | string | null
    activo?: BoolNullableWithAggregatesFilter<"tb_usuarios"> | boolean | null
    id_usuario?: IntNullableWithAggregatesFilter<"tb_usuarios"> | number | null
  }

  export type tb_cargos_adminCreateInput = {
    nombre?: string | null
  }

  export type tb_cargos_adminUncheckedCreateInput = {
    id?: number
    nombre?: string | null
  }

  export type tb_cargos_adminUpdateInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tb_cargos_adminUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tb_cargos_adminCreateManyInput = {
    id?: number
    nombre?: string | null
  }

  export type tb_cargos_adminUpdateManyMutationInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tb_cargos_adminUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tb_categoriasCreateInput = {
    nombre?: string | null
  }

  export type tb_categoriasUncheckedCreateInput = {
    id?: number
    nombre?: string | null
  }

  export type tb_categoriasUpdateInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tb_categoriasUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tb_categoriasCreateManyInput = {
    id?: number
    nombre?: string | null
  }

  export type tb_categoriasUpdateManyMutationInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tb_categoriasUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tb_contactos_emergenciaCreateInput = {
    tipo_documento: string
    id_entrenador?: number | null
    nombres?: string | null
    apellidos?: string | null
    correo?: string | null
    telefono?: string | null
  }

  export type tb_contactos_emergenciaUncheckedCreateInput = {
    id?: number
    tipo_documento: string
    id_entrenador?: number | null
    nombres?: string | null
    apellidos?: string | null
    correo?: string | null
    telefono?: string | null
  }

  export type tb_contactos_emergenciaUpdateInput = {
    tipo_documento?: StringFieldUpdateOperationsInput | string
    id_entrenador?: NullableIntFieldUpdateOperationsInput | number | null
    nombres?: NullableStringFieldUpdateOperationsInput | string | null
    apellidos?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tb_contactos_emergenciaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo_documento?: StringFieldUpdateOperationsInput | string
    id_entrenador?: NullableIntFieldUpdateOperationsInput | number | null
    nombres?: NullableStringFieldUpdateOperationsInput | string | null
    apellidos?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tb_contactos_emergenciaCreateManyInput = {
    id?: number
    tipo_documento: string
    id_entrenador?: number | null
    nombres?: string | null
    apellidos?: string | null
    correo?: string | null
    telefono?: string | null
  }

  export type tb_contactos_emergenciaUpdateManyMutationInput = {
    tipo_documento?: StringFieldUpdateOperationsInput | string
    id_entrenador?: NullableIntFieldUpdateOperationsInput | number | null
    nombres?: NullableStringFieldUpdateOperationsInput | string | null
    apellidos?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tb_contactos_emergenciaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo_documento?: StringFieldUpdateOperationsInput | string
    id_entrenador?: NullableIntFieldUpdateOperationsInput | number | null
    nombres?: NullableStringFieldUpdateOperationsInput | string | null
    apellidos?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tb_departamentoCreateInput = {
    nombre?: string | null
  }

  export type tb_departamentoUncheckedCreateInput = {
    id?: number
    nombre?: string | null
  }

  export type tb_departamentoUpdateInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tb_departamentoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tb_departamentoCreateManyInput = {
    id?: number
    nombre?: string | null
  }

  export type tb_departamentoUpdateManyMutationInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tb_departamentoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tb_deportistasCreateInput = {
    id_tutor?: number | null
    id_persona_club: number
    id_categoria?: number | null
    activo?: boolean | null
  }

  export type tb_deportistasUncheckedCreateInput = {
    id?: number
    id_tutor?: number | null
    id_persona_club: number
    id_categoria?: number | null
    activo?: boolean | null
  }

  export type tb_deportistasUpdateInput = {
    id_tutor?: NullableIntFieldUpdateOperationsInput | number | null
    id_persona_club?: IntFieldUpdateOperationsInput | number
    id_categoria?: NullableIntFieldUpdateOperationsInput | number | null
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type tb_deportistasUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_tutor?: NullableIntFieldUpdateOperationsInput | number | null
    id_persona_club?: IntFieldUpdateOperationsInput | number
    id_categoria?: NullableIntFieldUpdateOperationsInput | number | null
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type tb_deportistasCreateManyInput = {
    id?: number
    id_tutor?: number | null
    id_persona_club: number
    id_categoria?: number | null
    activo?: boolean | null
  }

  export type tb_deportistasUpdateManyMutationInput = {
    id_tutor?: NullableIntFieldUpdateOperationsInput | number | null
    id_persona_club?: IntFieldUpdateOperationsInput | number
    id_categoria?: NullableIntFieldUpdateOperationsInput | number | null
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type tb_deportistasUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_tutor?: NullableIntFieldUpdateOperationsInput | number | null
    id_persona_club?: IntFieldUpdateOperationsInput | number
    id_categoria?: NullableIntFieldUpdateOperationsInput | number | null
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type tb_desercion_deportistasCreateInput = {
    id_deportista: number
    fecha_desercion?: Date | string | null
    razon?: string | null
    descripcion?: string | null
  }

  export type tb_desercion_deportistasUncheckedCreateInput = {
    id?: number
    id_deportista: number
    fecha_desercion?: Date | string | null
    razon?: string | null
    descripcion?: string | null
  }

  export type tb_desercion_deportistasUpdateInput = {
    id_deportista?: IntFieldUpdateOperationsInput | number
    fecha_desercion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    razon?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tb_desercion_deportistasUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_deportista?: IntFieldUpdateOperationsInput | number
    fecha_desercion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    razon?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tb_desercion_deportistasCreateManyInput = {
    id?: number
    id_deportista: number
    fecha_desercion?: Date | string | null
    razon?: string | null
    descripcion?: string | null
  }

  export type tb_desercion_deportistasUpdateManyMutationInput = {
    id_deportista?: IntFieldUpdateOperationsInput | number
    fecha_desercion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    razon?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tb_desercion_deportistasUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_deportista?: IntFieldUpdateOperationsInput | number
    fecha_desercion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    razon?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tb_entrenadoresCreateInput = {
    id_persona_club: number
    fecha_ingreso?: Date | string | null
    activo?: boolean | null
    contrato?: Uint8Array | null
  }

  export type tb_entrenadoresUncheckedCreateInput = {
    id?: number
    id_persona_club: number
    fecha_ingreso?: Date | string | null
    activo?: boolean | null
    contrato?: Uint8Array | null
  }

  export type tb_entrenadoresUpdateInput = {
    id_persona_club?: IntFieldUpdateOperationsInput | number
    fecha_ingreso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    contrato?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
  }

  export type tb_entrenadoresUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_persona_club?: IntFieldUpdateOperationsInput | number
    fecha_ingreso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    contrato?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
  }

  export type tb_entrenadoresCreateManyInput = {
    id?: number
    id_persona_club: number
    fecha_ingreso?: Date | string | null
    activo?: boolean | null
    contrato?: Uint8Array | null
  }

  export type tb_entrenadoresUpdateManyMutationInput = {
    id_persona_club?: IntFieldUpdateOperationsInput | number
    fecha_ingreso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    contrato?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
  }

  export type tb_entrenadoresUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_persona_club?: IntFieldUpdateOperationsInput | number
    fecha_ingreso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    contrato?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
  }

  export type tb_gestion_adminCreateInput = {
    id_tutor?: number | null
    id_deportista?: number | null
    id_cargo?: number | null
    fecha_inicio?: Date | string | null
    fecha_fin?: Date | string | null
    activo?: boolean | null
  }

  export type tb_gestion_adminUncheckedCreateInput = {
    id?: number
    id_tutor?: number | null
    id_deportista?: number | null
    id_cargo?: number | null
    fecha_inicio?: Date | string | null
    fecha_fin?: Date | string | null
    activo?: boolean | null
  }

  export type tb_gestion_adminUpdateInput = {
    id_tutor?: NullableIntFieldUpdateOperationsInput | number | null
    id_deportista?: NullableIntFieldUpdateOperationsInput | number | null
    id_cargo?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type tb_gestion_adminUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_tutor?: NullableIntFieldUpdateOperationsInput | number | null
    id_deportista?: NullableIntFieldUpdateOperationsInput | number | null
    id_cargo?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type tb_gestion_adminCreateManyInput = {
    id?: number
    id_tutor?: number | null
    id_deportista?: number | null
    id_cargo?: number | null
    fecha_inicio?: Date | string | null
    fecha_fin?: Date | string | null
    activo?: boolean | null
  }

  export type tb_gestion_adminUpdateManyMutationInput = {
    id_tutor?: NullableIntFieldUpdateOperationsInput | number | null
    id_deportista?: NullableIntFieldUpdateOperationsInput | number | null
    id_cargo?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type tb_gestion_adminUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_tutor?: NullableIntFieldUpdateOperationsInput | number | null
    id_deportista?: NullableIntFieldUpdateOperationsInput | number | null
    id_cargo?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type tb_municipioCreateInput = {
    id_departamento: number
    nombre?: string | null
    estado?: boolean | null
  }

  export type tb_municipioUncheckedCreateInput = {
    id?: number
    id_departamento: number
    nombre?: string | null
    estado?: boolean | null
  }

  export type tb_municipioUpdateInput = {
    id_departamento?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type tb_municipioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_departamento?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type tb_municipioCreateManyInput = {
    id?: number
    id_departamento: number
    nombre?: string | null
    estado?: boolean | null
  }

  export type tb_municipioUpdateManyMutationInput = {
    id_departamento?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type tb_municipioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_departamento?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type tb_pagos_deportistasCreateInput = {
    id_deportista: number
    fecha_pago?: Date | string | null
    valor?: Decimal | DecimalJsLike | number | string | null
    tipo_pago?: string | null
  }

  export type tb_pagos_deportistasUncheckedCreateInput = {
    id?: number
    id_deportista: number
    fecha_pago?: Date | string | null
    valor?: Decimal | DecimalJsLike | number | string | null
    tipo_pago?: string | null
  }

  export type tb_pagos_deportistasUpdateInput = {
    id_deportista?: IntFieldUpdateOperationsInput | number
    fecha_pago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valor?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tipo_pago?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tb_pagos_deportistasUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_deportista?: IntFieldUpdateOperationsInput | number
    fecha_pago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valor?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tipo_pago?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tb_pagos_deportistasCreateManyInput = {
    id?: number
    id_deportista: number
    fecha_pago?: Date | string | null
    valor?: Decimal | DecimalJsLike | number | string | null
    tipo_pago?: string | null
  }

  export type tb_pagos_deportistasUpdateManyMutationInput = {
    id_deportista?: IntFieldUpdateOperationsInput | number
    fecha_pago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valor?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tipo_pago?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tb_pagos_deportistasUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_deportista?: IntFieldUpdateOperationsInput | number
    fecha_pago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valor?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tipo_pago?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tb_personas_clubCreateInput = {
    tipo_documento: string
    id_municipio: number
    id_usuario: number
    nombres: string
    apellidos: string
    fecha_nacimento?: Date | string | null
    tipo_rh?: string | null
    peso?: number | null
    altura?: number | null
    correo: string
    numero_telefono?: number | null
    talla_camisa?: string | null
    talla_calzado?: string | null
    talla_pantaloneta?: string | null
    genero?: string | null
    direccion?: string | null
  }

  export type tb_personas_clubUncheckedCreateInput = {
    id?: number
    tipo_documento: string
    id_municipio: number
    id_usuario: number
    nombres: string
    apellidos: string
    fecha_nacimento?: Date | string | null
    tipo_rh?: string | null
    peso?: number | null
    altura?: number | null
    correo: string
    numero_telefono?: number | null
    talla_camisa?: string | null
    talla_calzado?: string | null
    talla_pantaloneta?: string | null
    genero?: string | null
    direccion?: string | null
  }

  export type tb_personas_clubUpdateInput = {
    tipo_documento?: StringFieldUpdateOperationsInput | string
    id_municipio?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    fecha_nacimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipo_rh?: NullableStringFieldUpdateOperationsInput | string | null
    peso?: NullableFloatFieldUpdateOperationsInput | number | null
    altura?: NullableFloatFieldUpdateOperationsInput | number | null
    correo?: StringFieldUpdateOperationsInput | string
    numero_telefono?: NullableIntFieldUpdateOperationsInput | number | null
    talla_camisa?: NullableStringFieldUpdateOperationsInput | string | null
    talla_calzado?: NullableStringFieldUpdateOperationsInput | string | null
    talla_pantaloneta?: NullableStringFieldUpdateOperationsInput | string | null
    genero?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tb_personas_clubUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo_documento?: StringFieldUpdateOperationsInput | string
    id_municipio?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    fecha_nacimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipo_rh?: NullableStringFieldUpdateOperationsInput | string | null
    peso?: NullableFloatFieldUpdateOperationsInput | number | null
    altura?: NullableFloatFieldUpdateOperationsInput | number | null
    correo?: StringFieldUpdateOperationsInput | string
    numero_telefono?: NullableIntFieldUpdateOperationsInput | number | null
    talla_camisa?: NullableStringFieldUpdateOperationsInput | string | null
    talla_calzado?: NullableStringFieldUpdateOperationsInput | string | null
    talla_pantaloneta?: NullableStringFieldUpdateOperationsInput | string | null
    genero?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tb_personas_clubCreateManyInput = {
    id?: number
    tipo_documento: string
    id_municipio: number
    id_usuario: number
    nombres: string
    apellidos: string
    fecha_nacimento?: Date | string | null
    tipo_rh?: string | null
    peso?: number | null
    altura?: number | null
    correo: string
    numero_telefono?: number | null
    talla_camisa?: string | null
    talla_calzado?: string | null
    talla_pantaloneta?: string | null
    genero?: string | null
    direccion?: string | null
  }

  export type tb_personas_clubUpdateManyMutationInput = {
    tipo_documento?: StringFieldUpdateOperationsInput | string
    id_municipio?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    fecha_nacimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipo_rh?: NullableStringFieldUpdateOperationsInput | string | null
    peso?: NullableFloatFieldUpdateOperationsInput | number | null
    altura?: NullableFloatFieldUpdateOperationsInput | number | null
    correo?: StringFieldUpdateOperationsInput | string
    numero_telefono?: NullableIntFieldUpdateOperationsInput | number | null
    talla_camisa?: NullableStringFieldUpdateOperationsInput | string | null
    talla_calzado?: NullableStringFieldUpdateOperationsInput | string | null
    talla_pantaloneta?: NullableStringFieldUpdateOperationsInput | string | null
    genero?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tb_personas_clubUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo_documento?: StringFieldUpdateOperationsInput | string
    id_municipio?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    fecha_nacimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipo_rh?: NullableStringFieldUpdateOperationsInput | string | null
    peso?: NullableFloatFieldUpdateOperationsInput | number | null
    altura?: NullableFloatFieldUpdateOperationsInput | number | null
    correo?: StringFieldUpdateOperationsInput | string
    numero_telefono?: NullableIntFieldUpdateOperationsInput | number | null
    talla_camisa?: NullableStringFieldUpdateOperationsInput | string | null
    talla_calzado?: NullableStringFieldUpdateOperationsInput | string | null
    talla_pantaloneta?: NullableStringFieldUpdateOperationsInput | string | null
    genero?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tb_tipo_documentoCreateInput = {
    tipo_documento?: string | null
    descripcion?: string | null
  }

  export type tb_tipo_documentoUncheckedCreateInput = {
    id?: number
    tipo_documento?: string | null
    descripcion?: string | null
  }

  export type tb_tipo_documentoUpdateInput = {
    tipo_documento?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tb_tipo_documentoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo_documento?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tb_tipo_documentoCreateManyInput = {
    id?: number
    tipo_documento?: string | null
    descripcion?: string | null
  }

  export type tb_tipo_documentoUpdateManyMutationInput = {
    tipo_documento?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tb_tipo_documentoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo_documento?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tb_tutoresCreateInput = {
    tipo_documento: string
    nombres?: string | null
    apellidos?: string | null
    correo?: string | null
    telefono?: string | null
  }

  export type tb_tutoresUncheckedCreateInput = {
    id?: number
    tipo_documento: string
    nombres?: string | null
    apellidos?: string | null
    correo?: string | null
    telefono?: string | null
  }

  export type tb_tutoresUpdateInput = {
    tipo_documento?: StringFieldUpdateOperationsInput | string
    nombres?: NullableStringFieldUpdateOperationsInput | string | null
    apellidos?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tb_tutoresUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo_documento?: StringFieldUpdateOperationsInput | string
    nombres?: NullableStringFieldUpdateOperationsInput | string | null
    apellidos?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tb_tutoresCreateManyInput = {
    id?: number
    tipo_documento: string
    nombres?: string | null
    apellidos?: string | null
    correo?: string | null
    telefono?: string | null
  }

  export type tb_tutoresUpdateManyMutationInput = {
    tipo_documento?: StringFieldUpdateOperationsInput | string
    nombres?: NullableStringFieldUpdateOperationsInput | string | null
    apellidos?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tb_tutoresUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo_documento?: StringFieldUpdateOperationsInput | string
    nombres?: NullableStringFieldUpdateOperationsInput | string | null
    apellidos?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tb_usuariosCreateInput = {
    usuario?: string | null
    contrasenia?: string | null
    activo?: boolean | null
    id_usuario?: number | null
  }

  export type tb_usuariosUncheckedCreateInput = {
    id?: number
    usuario?: string | null
    contrasenia?: string | null
    activo?: boolean | null
    id_usuario?: number | null
  }

  export type tb_usuariosUpdateInput = {
    usuario?: NullableStringFieldUpdateOperationsInput | string | null
    contrasenia?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type tb_usuariosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario?: NullableStringFieldUpdateOperationsInput | string | null
    contrasenia?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type tb_usuariosCreateManyInput = {
    id?: number
    usuario?: string | null
    contrasenia?: string | null
    activo?: boolean | null
    id_usuario?: number | null
  }

  export type tb_usuariosUpdateManyMutationInput = {
    usuario?: NullableStringFieldUpdateOperationsInput | string | null
    contrasenia?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type tb_usuariosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario?: NullableStringFieldUpdateOperationsInput | string | null
    contrasenia?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type tb_cargos_adminOrderByRelevanceInput = {
    fields: tb_cargos_adminOrderByRelevanceFieldEnum | tb_cargos_adminOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type tb_cargos_adminCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type tb_cargos_adminAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type tb_cargos_adminMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type tb_cargos_adminMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type tb_cargos_adminSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type tb_categoriasOrderByRelevanceInput = {
    fields: tb_categoriasOrderByRelevanceFieldEnum | tb_categoriasOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type tb_categoriasCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type tb_categoriasAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type tb_categoriasMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type tb_categoriasMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type tb_categoriasSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type tb_contactos_emergenciaOrderByRelevanceInput = {
    fields: tb_contactos_emergenciaOrderByRelevanceFieldEnum | tb_contactos_emergenciaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type tb_contactos_emergenciaCountOrderByAggregateInput = {
    id?: SortOrder
    tipo_documento?: SortOrder
    id_entrenador?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    correo?: SortOrder
    telefono?: SortOrder
  }

  export type tb_contactos_emergenciaAvgOrderByAggregateInput = {
    id?: SortOrder
    id_entrenador?: SortOrder
  }

  export type tb_contactos_emergenciaMaxOrderByAggregateInput = {
    id?: SortOrder
    tipo_documento?: SortOrder
    id_entrenador?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    correo?: SortOrder
    telefono?: SortOrder
  }

  export type tb_contactos_emergenciaMinOrderByAggregateInput = {
    id?: SortOrder
    tipo_documento?: SortOrder
    id_entrenador?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    correo?: SortOrder
    telefono?: SortOrder
  }

  export type tb_contactos_emergenciaSumOrderByAggregateInput = {
    id?: SortOrder
    id_entrenador?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type tb_departamentoOrderByRelevanceInput = {
    fields: tb_departamentoOrderByRelevanceFieldEnum | tb_departamentoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type tb_departamentoCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type tb_departamentoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type tb_departamentoMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type tb_departamentoMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type tb_departamentoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type tb_deportistasCountOrderByAggregateInput = {
    id?: SortOrder
    id_tutor?: SortOrder
    id_persona_club?: SortOrder
    id_categoria?: SortOrder
    activo?: SortOrder
  }

  export type tb_deportistasAvgOrderByAggregateInput = {
    id?: SortOrder
    id_tutor?: SortOrder
    id_persona_club?: SortOrder
    id_categoria?: SortOrder
  }

  export type tb_deportistasMaxOrderByAggregateInput = {
    id?: SortOrder
    id_tutor?: SortOrder
    id_persona_club?: SortOrder
    id_categoria?: SortOrder
    activo?: SortOrder
  }

  export type tb_deportistasMinOrderByAggregateInput = {
    id?: SortOrder
    id_tutor?: SortOrder
    id_persona_club?: SortOrder
    id_categoria?: SortOrder
    activo?: SortOrder
  }

  export type tb_deportistasSumOrderByAggregateInput = {
    id?: SortOrder
    id_tutor?: SortOrder
    id_persona_club?: SortOrder
    id_categoria?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type tb_desercion_deportistasOrderByRelevanceInput = {
    fields: tb_desercion_deportistasOrderByRelevanceFieldEnum | tb_desercion_deportistasOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type tb_desercion_deportistasCountOrderByAggregateInput = {
    id?: SortOrder
    id_deportista?: SortOrder
    fecha_desercion?: SortOrder
    razon?: SortOrder
    descripcion?: SortOrder
  }

  export type tb_desercion_deportistasAvgOrderByAggregateInput = {
    id?: SortOrder
    id_deportista?: SortOrder
  }

  export type tb_desercion_deportistasMaxOrderByAggregateInput = {
    id?: SortOrder
    id_deportista?: SortOrder
    fecha_desercion?: SortOrder
    razon?: SortOrder
    descripcion?: SortOrder
  }

  export type tb_desercion_deportistasMinOrderByAggregateInput = {
    id?: SortOrder
    id_deportista?: SortOrder
    fecha_desercion?: SortOrder
    razon?: SortOrder
    descripcion?: SortOrder
  }

  export type tb_desercion_deportistasSumOrderByAggregateInput = {
    id?: SortOrder
    id_deportista?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BytesNullableFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | null
    notIn?: Uint8Array[] | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Uint8Array | null
  }

  export type tb_entrenadoresCountOrderByAggregateInput = {
    id?: SortOrder
    id_persona_club?: SortOrder
    fecha_ingreso?: SortOrder
    activo?: SortOrder
    contrato?: SortOrder
  }

  export type tb_entrenadoresAvgOrderByAggregateInput = {
    id?: SortOrder
    id_persona_club?: SortOrder
  }

  export type tb_entrenadoresMaxOrderByAggregateInput = {
    id?: SortOrder
    id_persona_club?: SortOrder
    fecha_ingreso?: SortOrder
    activo?: SortOrder
    contrato?: SortOrder
  }

  export type tb_entrenadoresMinOrderByAggregateInput = {
    id?: SortOrder
    id_persona_club?: SortOrder
    fecha_ingreso?: SortOrder
    activo?: SortOrder
    contrato?: SortOrder
  }

  export type tb_entrenadoresSumOrderByAggregateInput = {
    id?: SortOrder
    id_persona_club?: SortOrder
  }

  export type BytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | null
    notIn?: Uint8Array[] | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Uint8Array | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
  }

  export type tb_gestion_adminCountOrderByAggregateInput = {
    id?: SortOrder
    id_tutor?: SortOrder
    id_deportista?: SortOrder
    id_cargo?: SortOrder
    fecha_inicio?: SortOrder
    fecha_fin?: SortOrder
    activo?: SortOrder
  }

  export type tb_gestion_adminAvgOrderByAggregateInput = {
    id?: SortOrder
    id_tutor?: SortOrder
    id_deportista?: SortOrder
    id_cargo?: SortOrder
  }

  export type tb_gestion_adminMaxOrderByAggregateInput = {
    id?: SortOrder
    id_tutor?: SortOrder
    id_deportista?: SortOrder
    id_cargo?: SortOrder
    fecha_inicio?: SortOrder
    fecha_fin?: SortOrder
    activo?: SortOrder
  }

  export type tb_gestion_adminMinOrderByAggregateInput = {
    id?: SortOrder
    id_tutor?: SortOrder
    id_deportista?: SortOrder
    id_cargo?: SortOrder
    fecha_inicio?: SortOrder
    fecha_fin?: SortOrder
    activo?: SortOrder
  }

  export type tb_gestion_adminSumOrderByAggregateInput = {
    id?: SortOrder
    id_tutor?: SortOrder
    id_deportista?: SortOrder
    id_cargo?: SortOrder
  }

  export type tb_municipioOrderByRelevanceInput = {
    fields: tb_municipioOrderByRelevanceFieldEnum | tb_municipioOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type tb_municipioCountOrderByAggregateInput = {
    id?: SortOrder
    id_departamento?: SortOrder
    nombre?: SortOrder
    estado?: SortOrder
  }

  export type tb_municipioAvgOrderByAggregateInput = {
    id?: SortOrder
    id_departamento?: SortOrder
  }

  export type tb_municipioMaxOrderByAggregateInput = {
    id?: SortOrder
    id_departamento?: SortOrder
    nombre?: SortOrder
    estado?: SortOrder
  }

  export type tb_municipioMinOrderByAggregateInput = {
    id?: SortOrder
    id_departamento?: SortOrder
    nombre?: SortOrder
    estado?: SortOrder
  }

  export type tb_municipioSumOrderByAggregateInput = {
    id?: SortOrder
    id_departamento?: SortOrder
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type tb_pagos_deportistasOrderByRelevanceInput = {
    fields: tb_pagos_deportistasOrderByRelevanceFieldEnum | tb_pagos_deportistasOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type tb_pagos_deportistasCountOrderByAggregateInput = {
    id?: SortOrder
    id_deportista?: SortOrder
    fecha_pago?: SortOrder
    valor?: SortOrder
    tipo_pago?: SortOrder
  }

  export type tb_pagos_deportistasAvgOrderByAggregateInput = {
    id?: SortOrder
    id_deportista?: SortOrder
    valor?: SortOrder
  }

  export type tb_pagos_deportistasMaxOrderByAggregateInput = {
    id?: SortOrder
    id_deportista?: SortOrder
    fecha_pago?: SortOrder
    valor?: SortOrder
    tipo_pago?: SortOrder
  }

  export type tb_pagos_deportistasMinOrderByAggregateInput = {
    id?: SortOrder
    id_deportista?: SortOrder
    fecha_pago?: SortOrder
    valor?: SortOrder
    tipo_pago?: SortOrder
  }

  export type tb_pagos_deportistasSumOrderByAggregateInput = {
    id?: SortOrder
    id_deportista?: SortOrder
    valor?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type tb_personas_clubOrderByRelevanceInput = {
    fields: tb_personas_clubOrderByRelevanceFieldEnum | tb_personas_clubOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type tb_personas_clubCountOrderByAggregateInput = {
    id?: SortOrder
    tipo_documento?: SortOrder
    id_municipio?: SortOrder
    id_usuario?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    fecha_nacimento?: SortOrder
    tipo_rh?: SortOrder
    peso?: SortOrder
    altura?: SortOrder
    correo?: SortOrder
    numero_telefono?: SortOrder
    talla_camisa?: SortOrder
    talla_calzado?: SortOrder
    talla_pantaloneta?: SortOrder
    genero?: SortOrder
    direccion?: SortOrder
  }

  export type tb_personas_clubAvgOrderByAggregateInput = {
    id?: SortOrder
    id_municipio?: SortOrder
    id_usuario?: SortOrder
    peso?: SortOrder
    altura?: SortOrder
    numero_telefono?: SortOrder
  }

  export type tb_personas_clubMaxOrderByAggregateInput = {
    id?: SortOrder
    tipo_documento?: SortOrder
    id_municipio?: SortOrder
    id_usuario?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    fecha_nacimento?: SortOrder
    tipo_rh?: SortOrder
    peso?: SortOrder
    altura?: SortOrder
    correo?: SortOrder
    numero_telefono?: SortOrder
    talla_camisa?: SortOrder
    talla_calzado?: SortOrder
    talla_pantaloneta?: SortOrder
    genero?: SortOrder
    direccion?: SortOrder
  }

  export type tb_personas_clubMinOrderByAggregateInput = {
    id?: SortOrder
    tipo_documento?: SortOrder
    id_municipio?: SortOrder
    id_usuario?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    fecha_nacimento?: SortOrder
    tipo_rh?: SortOrder
    peso?: SortOrder
    altura?: SortOrder
    correo?: SortOrder
    numero_telefono?: SortOrder
    talla_camisa?: SortOrder
    talla_calzado?: SortOrder
    talla_pantaloneta?: SortOrder
    genero?: SortOrder
    direccion?: SortOrder
  }

  export type tb_personas_clubSumOrderByAggregateInput = {
    id?: SortOrder
    id_municipio?: SortOrder
    id_usuario?: SortOrder
    peso?: SortOrder
    altura?: SortOrder
    numero_telefono?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type tb_tipo_documentoOrderByRelevanceInput = {
    fields: tb_tipo_documentoOrderByRelevanceFieldEnum | tb_tipo_documentoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type tb_tipo_documentoCountOrderByAggregateInput = {
    id?: SortOrder
    tipo_documento?: SortOrder
    descripcion?: SortOrder
  }

  export type tb_tipo_documentoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type tb_tipo_documentoMaxOrderByAggregateInput = {
    id?: SortOrder
    tipo_documento?: SortOrder
    descripcion?: SortOrder
  }

  export type tb_tipo_documentoMinOrderByAggregateInput = {
    id?: SortOrder
    tipo_documento?: SortOrder
    descripcion?: SortOrder
  }

  export type tb_tipo_documentoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type tb_tutoresOrderByRelevanceInput = {
    fields: tb_tutoresOrderByRelevanceFieldEnum | tb_tutoresOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type tb_tutoresCountOrderByAggregateInput = {
    id?: SortOrder
    tipo_documento?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    correo?: SortOrder
    telefono?: SortOrder
  }

  export type tb_tutoresAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type tb_tutoresMaxOrderByAggregateInput = {
    id?: SortOrder
    tipo_documento?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    correo?: SortOrder
    telefono?: SortOrder
  }

  export type tb_tutoresMinOrderByAggregateInput = {
    id?: SortOrder
    tipo_documento?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    correo?: SortOrder
    telefono?: SortOrder
  }

  export type tb_tutoresSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type tb_usuariosOrderByRelevanceInput = {
    fields: tb_usuariosOrderByRelevanceFieldEnum | tb_usuariosOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type tb_usuariosCountOrderByAggregateInput = {
    id?: SortOrder
    usuario?: SortOrder
    contrasenia?: SortOrder
    activo?: SortOrder
    id_usuario?: SortOrder
  }

  export type tb_usuariosAvgOrderByAggregateInput = {
    id?: SortOrder
    id_usuario?: SortOrder
  }

  export type tb_usuariosMaxOrderByAggregateInput = {
    id?: SortOrder
    usuario?: SortOrder
    contrasenia?: SortOrder
    activo?: SortOrder
    id_usuario?: SortOrder
  }

  export type tb_usuariosMinOrderByAggregateInput = {
    id?: SortOrder
    usuario?: SortOrder
    contrasenia?: SortOrder
    activo?: SortOrder
    id_usuario?: SortOrder
  }

  export type tb_usuariosSumOrderByAggregateInput = {
    id?: SortOrder
    id_usuario?: SortOrder
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableBytesFieldUpdateOperationsInput = {
    set?: Uint8Array | null
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBytesNullableFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | null
    notIn?: Uint8Array[] | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Uint8Array | null
  }

  export type NestedBytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | null
    notIn?: Uint8Array[] | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Uint8Array | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}