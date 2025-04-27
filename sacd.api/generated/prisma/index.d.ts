
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
 * Model tb_departamento
 * 
 */
export type tb_departamento = $Result.DefaultSelection<Prisma.$tb_departamentoPayload>
/**
 * Model tb_municipio
 * 
 */
export type tb_municipio = $Result.DefaultSelection<Prisma.$tb_municipioPayload>
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
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Tb_departamentos
 * const tb_departamentos = await prisma.tb_departamento.findMany()
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
   * // Fetch zero or more Tb_departamentos
   * const tb_departamentos = await prisma.tb_departamento.findMany()
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
   * `prisma.tb_departamento`: Exposes CRUD operations for the **tb_departamento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tb_departamentos
    * const tb_departamentos = await prisma.tb_departamento.findMany()
    * ```
    */
  get tb_departamento(): Prisma.tb_departamentoDelegate<ExtArgs, ClientOptions>;

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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    tb_departamento: 'tb_departamento',
    tb_municipio: 'tb_municipio',
    tb_personas_club: 'tb_personas_club',
    tb_tipo_documento: 'tb_tipo_documento'
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
      modelProps: "tb_departamento" | "tb_municipio" | "tb_personas_club" | "tb_tipo_documento"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
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
    tb_departamento?: tb_departamentoOmit
    tb_municipio?: tb_municipioOmit
    tb_personas_club?: tb_personas_clubOmit
    tb_tipo_documento?: tb_tipo_documentoOmit
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
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Tb_departamentoScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre'
  };

  export type Tb_departamentoScalarFieldEnum = (typeof Tb_departamentoScalarFieldEnum)[keyof typeof Tb_departamentoScalarFieldEnum]


  export const Tb_municipioScalarFieldEnum: {
    id: 'id',
    id_departamento: 'id_departamento',
    nombre: 'nombre',
    estado: 'estado'
  };

  export type Tb_municipioScalarFieldEnum = (typeof Tb_municipioScalarFieldEnum)[keyof typeof Tb_municipioScalarFieldEnum]


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


  export const tb_departamentoOrderByRelevanceFieldEnum: {
    nombre: 'nombre'
  };

  export type tb_departamentoOrderByRelevanceFieldEnum = (typeof tb_departamentoOrderByRelevanceFieldEnum)[keyof typeof tb_departamentoOrderByRelevanceFieldEnum]


  export const tb_municipioOrderByRelevanceFieldEnum: {
    nombre: 'nombre'
  };

  export type tb_municipioOrderByRelevanceFieldEnum = (typeof tb_municipioOrderByRelevanceFieldEnum)[keyof typeof tb_municipioOrderByRelevanceFieldEnum]


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


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

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
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

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
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

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
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