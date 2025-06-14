
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Waiter
 * 
 */
export type Waiter = $Result.DefaultSelection<Prisma.$WaiterPayload>
/**
 * Model Kitchen
 * 
 */
export type Kitchen = $Result.DefaultSelection<Prisma.$KitchenPayload>
/**
 * Model restaurants
 * 
 */
export type restaurants = $Result.DefaultSelection<Prisma.$restaurantsPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>
/**
 * Model Orders
 * 
 */
export type Orders = $Result.DefaultSelection<Prisma.$OrdersPayload>
/**
 * Model tables
 * 
 */
export type tables = $Result.DefaultSelection<Prisma.$tablesPayload>
/**
 * Model Order_Item
 * 
 */
export type Order_Item = $Result.DefaultSelection<Prisma.$Order_ItemPayload>
/**
 * Model payment
 * 
 */
export type payment = $Result.DefaultSelection<Prisma.$paymentPayload>
/**
 * Model menuItem
 * 
 */
export type menuItem = $Result.DefaultSelection<Prisma.$menuItemPayload>
/**
 * Model menu_categories
 * 
 */
export type menu_categories = $Result.DefaultSelection<Prisma.$menu_categoriesPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const method: {
  CASH: 'CASH',
  CARD: 'CARD',
  ONLINE: 'ONLINE'
};

export type method = (typeof method)[keyof typeof method]


export const status: {
  PENDING: 'PENDING',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED',
  REFUNDED: 'REFUNDED'
};

export type status = (typeof status)[keyof typeof status]


export const Role: {
  ADMIN: 'ADMIN',
  CUSTOMER: 'CUSTOMER'
};

export type Role = (typeof Role)[keyof typeof Role]


export const OrderStatus: {
  PENDING: 'PENDING',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
};

export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus]

}

export type method = $Enums.method

export const method: typeof $Enums.method

export type status = $Enums.status

export const status: typeof $Enums.status

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type OrderStatus = $Enums.OrderStatus

export const OrderStatus: typeof $Enums.OrderStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.waiter`: Exposes CRUD operations for the **Waiter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Waiters
    * const waiters = await prisma.waiter.findMany()
    * ```
    */
  get waiter(): Prisma.WaiterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.kitchen`: Exposes CRUD operations for the **Kitchen** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Kitchens
    * const kitchens = await prisma.kitchen.findMany()
    * ```
    */
  get kitchen(): Prisma.KitchenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.restaurants`: Exposes CRUD operations for the **restaurants** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Restaurants
    * const restaurants = await prisma.restaurants.findMany()
    * ```
    */
  get restaurants(): Prisma.restaurantsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orders`: Exposes CRUD operations for the **Orders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.orders.findMany()
    * ```
    */
  get orders(): Prisma.OrdersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tables`: Exposes CRUD operations for the **tables** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tables
    * const tables = await prisma.tables.findMany()
    * ```
    */
  get tables(): Prisma.tablesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order_Item`: Exposes CRUD operations for the **Order_Item** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Order_Items
    * const order_Items = await prisma.order_Item.findMany()
    * ```
    */
  get order_Item(): Prisma.Order_ItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.paymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.menuItem`: Exposes CRUD operations for the **menuItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MenuItems
    * const menuItems = await prisma.menuItem.findMany()
    * ```
    */
  get menuItem(): Prisma.menuItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.menu_categories`: Exposes CRUD operations for the **menu_categories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Menu_categories
    * const menu_categories = await prisma.menu_categories.findMany()
    * ```
    */
  get menu_categories(): Prisma.menu_categoriesDelegate<ExtArgs, ClientOptions>;
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
   * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
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
    User: 'User',
    Waiter: 'Waiter',
    Kitchen: 'Kitchen',
    restaurants: 'restaurants',
    Notification: 'Notification',
    Orders: 'Orders',
    tables: 'tables',
    Order_Item: 'Order_Item',
    payment: 'payment',
    menuItem: 'menuItem',
    menu_categories: 'menu_categories'
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
      modelProps: "user" | "waiter" | "kitchen" | "restaurants" | "notification" | "orders" | "tables" | "order_Item" | "payment" | "menuItem" | "menu_categories"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Waiter: {
        payload: Prisma.$WaiterPayload<ExtArgs>
        fields: Prisma.WaiterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WaiterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaiterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WaiterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaiterPayload>
          }
          findFirst: {
            args: Prisma.WaiterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaiterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WaiterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaiterPayload>
          }
          findMany: {
            args: Prisma.WaiterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaiterPayload>[]
          }
          create: {
            args: Prisma.WaiterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaiterPayload>
          }
          createMany: {
            args: Prisma.WaiterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WaiterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaiterPayload>[]
          }
          delete: {
            args: Prisma.WaiterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaiterPayload>
          }
          update: {
            args: Prisma.WaiterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaiterPayload>
          }
          deleteMany: {
            args: Prisma.WaiterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WaiterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WaiterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaiterPayload>[]
          }
          upsert: {
            args: Prisma.WaiterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaiterPayload>
          }
          aggregate: {
            args: Prisma.WaiterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWaiter>
          }
          groupBy: {
            args: Prisma.WaiterGroupByArgs<ExtArgs>
            result: $Utils.Optional<WaiterGroupByOutputType>[]
          }
          count: {
            args: Prisma.WaiterCountArgs<ExtArgs>
            result: $Utils.Optional<WaiterCountAggregateOutputType> | number
          }
        }
      }
      Kitchen: {
        payload: Prisma.$KitchenPayload<ExtArgs>
        fields: Prisma.KitchenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KitchenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KitchenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KitchenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KitchenPayload>
          }
          findFirst: {
            args: Prisma.KitchenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KitchenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KitchenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KitchenPayload>
          }
          findMany: {
            args: Prisma.KitchenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KitchenPayload>[]
          }
          create: {
            args: Prisma.KitchenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KitchenPayload>
          }
          createMany: {
            args: Prisma.KitchenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.KitchenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KitchenPayload>[]
          }
          delete: {
            args: Prisma.KitchenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KitchenPayload>
          }
          update: {
            args: Prisma.KitchenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KitchenPayload>
          }
          deleteMany: {
            args: Prisma.KitchenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KitchenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.KitchenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KitchenPayload>[]
          }
          upsert: {
            args: Prisma.KitchenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KitchenPayload>
          }
          aggregate: {
            args: Prisma.KitchenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKitchen>
          }
          groupBy: {
            args: Prisma.KitchenGroupByArgs<ExtArgs>
            result: $Utils.Optional<KitchenGroupByOutputType>[]
          }
          count: {
            args: Prisma.KitchenCountArgs<ExtArgs>
            result: $Utils.Optional<KitchenCountAggregateOutputType> | number
          }
        }
      }
      restaurants: {
        payload: Prisma.$restaurantsPayload<ExtArgs>
        fields: Prisma.restaurantsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.restaurantsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$restaurantsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.restaurantsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$restaurantsPayload>
          }
          findFirst: {
            args: Prisma.restaurantsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$restaurantsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.restaurantsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$restaurantsPayload>
          }
          findMany: {
            args: Prisma.restaurantsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$restaurantsPayload>[]
          }
          create: {
            args: Prisma.restaurantsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$restaurantsPayload>
          }
          createMany: {
            args: Prisma.restaurantsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.restaurantsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$restaurantsPayload>[]
          }
          delete: {
            args: Prisma.restaurantsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$restaurantsPayload>
          }
          update: {
            args: Prisma.restaurantsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$restaurantsPayload>
          }
          deleteMany: {
            args: Prisma.restaurantsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.restaurantsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.restaurantsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$restaurantsPayload>[]
          }
          upsert: {
            args: Prisma.restaurantsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$restaurantsPayload>
          }
          aggregate: {
            args: Prisma.RestaurantsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRestaurants>
          }
          groupBy: {
            args: Prisma.restaurantsGroupByArgs<ExtArgs>
            result: $Utils.Optional<RestaurantsGroupByOutputType>[]
          }
          count: {
            args: Prisma.restaurantsCountArgs<ExtArgs>
            result: $Utils.Optional<RestaurantsCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
      Orders: {
        payload: Prisma.$OrdersPayload<ExtArgs>
        fields: Prisma.OrdersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrdersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrdersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          findFirst: {
            args: Prisma.OrdersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrdersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          findMany: {
            args: Prisma.OrdersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>[]
          }
          create: {
            args: Prisma.OrdersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          createMany: {
            args: Prisma.OrdersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrdersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>[]
          }
          delete: {
            args: Prisma.OrdersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          update: {
            args: Prisma.OrdersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          deleteMany: {
            args: Prisma.OrdersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrdersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrdersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>[]
          }
          upsert: {
            args: Prisma.OrdersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          aggregate: {
            args: Prisma.OrdersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrders>
          }
          groupBy: {
            args: Prisma.OrdersGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrdersGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrdersCountArgs<ExtArgs>
            result: $Utils.Optional<OrdersCountAggregateOutputType> | number
          }
        }
      }
      tables: {
        payload: Prisma.$tablesPayload<ExtArgs>
        fields: Prisma.tablesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tablesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tablesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tablesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tablesPayload>
          }
          findFirst: {
            args: Prisma.tablesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tablesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tablesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tablesPayload>
          }
          findMany: {
            args: Prisma.tablesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tablesPayload>[]
          }
          create: {
            args: Prisma.tablesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tablesPayload>
          }
          createMany: {
            args: Prisma.tablesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tablesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tablesPayload>[]
          }
          delete: {
            args: Prisma.tablesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tablesPayload>
          }
          update: {
            args: Prisma.tablesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tablesPayload>
          }
          deleteMany: {
            args: Prisma.tablesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tablesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tablesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tablesPayload>[]
          }
          upsert: {
            args: Prisma.tablesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tablesPayload>
          }
          aggregate: {
            args: Prisma.TablesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTables>
          }
          groupBy: {
            args: Prisma.tablesGroupByArgs<ExtArgs>
            result: $Utils.Optional<TablesGroupByOutputType>[]
          }
          count: {
            args: Prisma.tablesCountArgs<ExtArgs>
            result: $Utils.Optional<TablesCountAggregateOutputType> | number
          }
        }
      }
      Order_Item: {
        payload: Prisma.$Order_ItemPayload<ExtArgs>
        fields: Prisma.Order_ItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Order_ItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Order_ItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Order_ItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Order_ItemPayload>
          }
          findFirst: {
            args: Prisma.Order_ItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Order_ItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Order_ItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Order_ItemPayload>
          }
          findMany: {
            args: Prisma.Order_ItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Order_ItemPayload>[]
          }
          create: {
            args: Prisma.Order_ItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Order_ItemPayload>
          }
          createMany: {
            args: Prisma.Order_ItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Order_ItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Order_ItemPayload>[]
          }
          delete: {
            args: Prisma.Order_ItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Order_ItemPayload>
          }
          update: {
            args: Prisma.Order_ItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Order_ItemPayload>
          }
          deleteMany: {
            args: Prisma.Order_ItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Order_ItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Order_ItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Order_ItemPayload>[]
          }
          upsert: {
            args: Prisma.Order_ItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Order_ItemPayload>
          }
          aggregate: {
            args: Prisma.Order_ItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder_Item>
          }
          groupBy: {
            args: Prisma.Order_ItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<Order_ItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.Order_ItemCountArgs<ExtArgs>
            result: $Utils.Optional<Order_ItemCountAggregateOutputType> | number
          }
        }
      }
      payment: {
        payload: Prisma.$paymentPayload<ExtArgs>
        fields: Prisma.paymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.paymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.paymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>
          }
          findFirst: {
            args: Prisma.paymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.paymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>
          }
          findMany: {
            args: Prisma.paymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>[]
          }
          create: {
            args: Prisma.paymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>
          }
          createMany: {
            args: Prisma.paymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.paymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>[]
          }
          delete: {
            args: Prisma.paymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>
          }
          update: {
            args: Prisma.paymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>
          }
          deleteMany: {
            args: Prisma.paymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.paymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.paymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>[]
          }
          upsert: {
            args: Prisma.paymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.paymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.paymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      menuItem: {
        payload: Prisma.$menuItemPayload<ExtArgs>
        fields: Prisma.menuItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.menuItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menuItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.menuItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menuItemPayload>
          }
          findFirst: {
            args: Prisma.menuItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menuItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.menuItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menuItemPayload>
          }
          findMany: {
            args: Prisma.menuItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menuItemPayload>[]
          }
          create: {
            args: Prisma.menuItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menuItemPayload>
          }
          createMany: {
            args: Prisma.menuItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.menuItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menuItemPayload>[]
          }
          delete: {
            args: Prisma.menuItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menuItemPayload>
          }
          update: {
            args: Prisma.menuItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menuItemPayload>
          }
          deleteMany: {
            args: Prisma.menuItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.menuItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.menuItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menuItemPayload>[]
          }
          upsert: {
            args: Prisma.menuItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menuItemPayload>
          }
          aggregate: {
            args: Prisma.MenuItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMenuItem>
          }
          groupBy: {
            args: Prisma.menuItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<MenuItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.menuItemCountArgs<ExtArgs>
            result: $Utils.Optional<MenuItemCountAggregateOutputType> | number
          }
        }
      }
      menu_categories: {
        payload: Prisma.$menu_categoriesPayload<ExtArgs>
        fields: Prisma.menu_categoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.menu_categoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menu_categoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.menu_categoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menu_categoriesPayload>
          }
          findFirst: {
            args: Prisma.menu_categoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menu_categoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.menu_categoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menu_categoriesPayload>
          }
          findMany: {
            args: Prisma.menu_categoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menu_categoriesPayload>[]
          }
          create: {
            args: Prisma.menu_categoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menu_categoriesPayload>
          }
          createMany: {
            args: Prisma.menu_categoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.menu_categoriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menu_categoriesPayload>[]
          }
          delete: {
            args: Prisma.menu_categoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menu_categoriesPayload>
          }
          update: {
            args: Prisma.menu_categoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menu_categoriesPayload>
          }
          deleteMany: {
            args: Prisma.menu_categoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.menu_categoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.menu_categoriesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menu_categoriesPayload>[]
          }
          upsert: {
            args: Prisma.menu_categoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menu_categoriesPayload>
          }
          aggregate: {
            args: Prisma.Menu_categoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMenu_categories>
          }
          groupBy: {
            args: Prisma.menu_categoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Menu_categoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.menu_categoriesCountArgs<ExtArgs>
            result: $Utils.Optional<Menu_categoriesCountAggregateOutputType> | number
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
    user?: UserOmit
    waiter?: WaiterOmit
    kitchen?: KitchenOmit
    restaurants?: restaurantsOmit
    notification?: NotificationOmit
    orders?: OrdersOmit
    tables?: tablesOmit
    order_Item?: Order_ItemOmit
    payment?: paymentOmit
    menuItem?: menuItemOmit
    menu_categories?: menu_categoriesOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    Notification: number
    Orders: number
    restaurants: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Notification?: boolean | UserCountOutputTypeCountNotificationArgs
    Orders?: boolean | UserCountOutputTypeCountOrdersArgs
    restaurants?: boolean | UserCountOutputTypeCountRestaurantsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdersWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRestaurantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: restaurantsWhereInput
  }


  /**
   * Count Type RestaurantsCountOutputType
   */

  export type RestaurantsCountOutputType = {
    menuItem: number
    menu_categories: number
    tables: number
    Orders: number
    Waiter: number
    Kitchen: number
  }

  export type RestaurantsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menuItem?: boolean | RestaurantsCountOutputTypeCountMenuItemArgs
    menu_categories?: boolean | RestaurantsCountOutputTypeCountMenu_categoriesArgs
    tables?: boolean | RestaurantsCountOutputTypeCountTablesArgs
    Orders?: boolean | RestaurantsCountOutputTypeCountOrdersArgs
    Waiter?: boolean | RestaurantsCountOutputTypeCountWaiterArgs
    Kitchen?: boolean | RestaurantsCountOutputTypeCountKitchenArgs
  }

  // Custom InputTypes
  /**
   * RestaurantsCountOutputType without action
   */
  export type RestaurantsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantsCountOutputType
     */
    select?: RestaurantsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RestaurantsCountOutputType without action
   */
  export type RestaurantsCountOutputTypeCountMenuItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: menuItemWhereInput
  }

  /**
   * RestaurantsCountOutputType without action
   */
  export type RestaurantsCountOutputTypeCountMenu_categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: menu_categoriesWhereInput
  }

  /**
   * RestaurantsCountOutputType without action
   */
  export type RestaurantsCountOutputTypeCountTablesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tablesWhereInput
  }

  /**
   * RestaurantsCountOutputType without action
   */
  export type RestaurantsCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdersWhereInput
  }

  /**
   * RestaurantsCountOutputType without action
   */
  export type RestaurantsCountOutputTypeCountWaiterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WaiterWhereInput
  }

  /**
   * RestaurantsCountOutputType without action
   */
  export type RestaurantsCountOutputTypeCountKitchenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KitchenWhereInput
  }


  /**
   * Count Type OrdersCountOutputType
   */

  export type OrdersCountOutputType = {
    Order_Item: number
    payment: number
  }

  export type OrdersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Order_Item?: boolean | OrdersCountOutputTypeCountOrder_ItemArgs
    payment?: boolean | OrdersCountOutputTypeCountPaymentArgs
  }

  // Custom InputTypes
  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdersCountOutputType
     */
    select?: OrdersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeCountOrder_ItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Order_ItemWhereInput
  }

  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeCountPaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: paymentWhereInput
  }


  /**
   * Count Type TablesCountOutputType
   */

  export type TablesCountOutputType = {
    Orders: number
  }

  export type TablesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Orders?: boolean | TablesCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * TablesCountOutputType without action
   */
  export type TablesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TablesCountOutputType
     */
    select?: TablesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TablesCountOutputType without action
   */
  export type TablesCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdersWhereInput
  }


  /**
   * Count Type MenuItemCountOutputType
   */

  export type MenuItemCountOutputType = {
    Order_Item: number
  }

  export type MenuItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Order_Item?: boolean | MenuItemCountOutputTypeCountOrder_ItemArgs
  }

  // Custom InputTypes
  /**
   * MenuItemCountOutputType without action
   */
  export type MenuItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItemCountOutputType
     */
    select?: MenuItemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MenuItemCountOutputType without action
   */
  export type MenuItemCountOutputTypeCountOrder_ItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Order_ItemWhereInput
  }


  /**
   * Count Type Menu_categoriesCountOutputType
   */

  export type Menu_categoriesCountOutputType = {
    menuItem: number
  }

  export type Menu_categoriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menuItem?: boolean | Menu_categoriesCountOutputTypeCountMenuItemArgs
  }

  // Custom InputTypes
  /**
   * Menu_categoriesCountOutputType without action
   */
  export type Menu_categoriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu_categoriesCountOutputType
     */
    select?: Menu_categoriesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Menu_categoriesCountOutputType without action
   */
  export type Menu_categoriesCountOutputTypeCountMenuItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: menuItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    fullName: string | null
    email: string | null
    password: string | null
    avatar: string | null
    role: $Enums.Role | null
    isVerified: boolean | null
    accessToken: string | null
    verificationToken: string | null
    verificationTokenExpiry: Date | null
    resetToken: string | null
    resetTokenExpiry: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    fullName: string | null
    email: string | null
    password: string | null
    avatar: string | null
    role: $Enums.Role | null
    isVerified: boolean | null
    accessToken: string | null
    verificationToken: string | null
    verificationTokenExpiry: Date | null
    resetToken: string | null
    resetTokenExpiry: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    fullName: number
    email: number
    password: number
    avatar: number
    role: number
    isVerified: number
    accessToken: number
    verificationToken: number
    verificationTokenExpiry: number
    resetToken: number
    resetTokenExpiry: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    fullName?: true
    email?: true
    password?: true
    avatar?: true
    role?: true
    isVerified?: true
    accessToken?: true
    verificationToken?: true
    verificationTokenExpiry?: true
    resetToken?: true
    resetTokenExpiry?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    fullName?: true
    email?: true
    password?: true
    avatar?: true
    role?: true
    isVerified?: true
    accessToken?: true
    verificationToken?: true
    verificationTokenExpiry?: true
    resetToken?: true
    resetTokenExpiry?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    fullName?: true
    email?: true
    password?: true
    avatar?: true
    role?: true
    isVerified?: true
    accessToken?: true
    verificationToken?: true
    verificationTokenExpiry?: true
    resetToken?: true
    resetTokenExpiry?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    fullName: string
    email: string
    password: string
    avatar: string | null
    role: $Enums.Role
    isVerified: boolean
    accessToken: string | null
    verificationToken: string | null
    verificationTokenExpiry: Date | null
    resetToken: string | null
    resetTokenExpiry: Date | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
    avatar?: boolean
    role?: boolean
    isVerified?: boolean
    accessToken?: boolean
    verificationToken?: boolean
    verificationTokenExpiry?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Notification?: boolean | User$NotificationArgs<ExtArgs>
    Orders?: boolean | User$OrdersArgs<ExtArgs>
    restaurants?: boolean | User$restaurantsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
    avatar?: boolean
    role?: boolean
    isVerified?: boolean
    accessToken?: boolean
    verificationToken?: boolean
    verificationTokenExpiry?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
    avatar?: boolean
    role?: boolean
    isVerified?: boolean
    accessToken?: boolean
    verificationToken?: boolean
    verificationTokenExpiry?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
    avatar?: boolean
    role?: boolean
    isVerified?: boolean
    accessToken?: boolean
    verificationToken?: boolean
    verificationTokenExpiry?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "fullName" | "email" | "password" | "avatar" | "role" | "isVerified" | "accessToken" | "verificationToken" | "verificationTokenExpiry" | "resetToken" | "resetTokenExpiry" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Notification?: boolean | User$NotificationArgs<ExtArgs>
    Orders?: boolean | User$OrdersArgs<ExtArgs>
    restaurants?: boolean | User$restaurantsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Notification: Prisma.$NotificationPayload<ExtArgs>[]
      Orders: Prisma.$OrdersPayload<ExtArgs>[]
      restaurants: Prisma.$restaurantsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      fullName: string
      email: string
      password: string
      avatar: string | null
      role: $Enums.Role
      isVerified: boolean
      accessToken: string | null
      verificationToken: string | null
      verificationTokenExpiry: Date | null
      resetToken: string | null
      resetTokenExpiry: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Notification<T extends User$NotificationArgs<ExtArgs> = {}>(args?: Subset<T, User$NotificationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Orders<T extends User$OrdersArgs<ExtArgs> = {}>(args?: Subset<T, User$OrdersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    restaurants<T extends User$restaurantsArgs<ExtArgs> = {}>(args?: Subset<T, User$restaurantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$restaurantsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly fullName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly isVerified: FieldRef<"User", 'Boolean'>
    readonly accessToken: FieldRef<"User", 'String'>
    readonly verificationToken: FieldRef<"User", 'String'>
    readonly verificationTokenExpiry: FieldRef<"User", 'DateTime'>
    readonly resetToken: FieldRef<"User", 'String'>
    readonly resetTokenExpiry: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.Notification
   */
  export type User$NotificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * User.Orders
   */
  export type User$OrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    where?: OrdersWhereInput
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    cursor?: OrdersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * User.restaurants
   */
  export type User$restaurantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurants
     */
    select?: restaurantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the restaurants
     */
    omit?: restaurantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: restaurantsInclude<ExtArgs> | null
    where?: restaurantsWhereInput
    orderBy?: restaurantsOrderByWithRelationInput | restaurantsOrderByWithRelationInput[]
    cursor?: restaurantsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RestaurantsScalarFieldEnum | RestaurantsScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Waiter
   */

  export type AggregateWaiter = {
    _count: WaiterCountAggregateOutputType | null
    _min: WaiterMinAggregateOutputType | null
    _max: WaiterMaxAggregateOutputType | null
  }

  export type WaiterMinAggregateOutputType = {
    id: string | null
    fullName: string | null
    email: string | null
    password: string | null
    avatar: string | null
    accessToken: string | null
    role: string | null
    restaurantId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WaiterMaxAggregateOutputType = {
    id: string | null
    fullName: string | null
    email: string | null
    password: string | null
    avatar: string | null
    accessToken: string | null
    role: string | null
    restaurantId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WaiterCountAggregateOutputType = {
    id: number
    fullName: number
    email: number
    password: number
    avatar: number
    accessToken: number
    role: number
    restaurantId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WaiterMinAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    password?: true
    avatar?: true
    accessToken?: true
    role?: true
    restaurantId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WaiterMaxAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    password?: true
    avatar?: true
    accessToken?: true
    role?: true
    restaurantId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WaiterCountAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    password?: true
    avatar?: true
    accessToken?: true
    role?: true
    restaurantId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WaiterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Waiter to aggregate.
     */
    where?: WaiterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Waiters to fetch.
     */
    orderBy?: WaiterOrderByWithRelationInput | WaiterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WaiterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Waiters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Waiters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Waiters
    **/
    _count?: true | WaiterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WaiterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WaiterMaxAggregateInputType
  }

  export type GetWaiterAggregateType<T extends WaiterAggregateArgs> = {
        [P in keyof T & keyof AggregateWaiter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWaiter[P]>
      : GetScalarType<T[P], AggregateWaiter[P]>
  }




  export type WaiterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WaiterWhereInput
    orderBy?: WaiterOrderByWithAggregationInput | WaiterOrderByWithAggregationInput[]
    by: WaiterScalarFieldEnum[] | WaiterScalarFieldEnum
    having?: WaiterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WaiterCountAggregateInputType | true
    _min?: WaiterMinAggregateInputType
    _max?: WaiterMaxAggregateInputType
  }

  export type WaiterGroupByOutputType = {
    id: string
    fullName: string
    email: string
    password: string
    avatar: string | null
    accessToken: string | null
    role: string
    restaurantId: string
    createdAt: Date
    updatedAt: Date
    _count: WaiterCountAggregateOutputType | null
    _min: WaiterMinAggregateOutputType | null
    _max: WaiterMaxAggregateOutputType | null
  }

  type GetWaiterGroupByPayload<T extends WaiterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WaiterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WaiterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WaiterGroupByOutputType[P]>
            : GetScalarType<T[P], WaiterGroupByOutputType[P]>
        }
      >
    >


  export type WaiterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
    avatar?: boolean
    accessToken?: boolean
    role?: boolean
    restaurantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    restaurant?: boolean | restaurantsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["waiter"]>

  export type WaiterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
    avatar?: boolean
    accessToken?: boolean
    role?: boolean
    restaurantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    restaurant?: boolean | restaurantsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["waiter"]>

  export type WaiterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
    avatar?: boolean
    accessToken?: boolean
    role?: boolean
    restaurantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    restaurant?: boolean | restaurantsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["waiter"]>

  export type WaiterSelectScalar = {
    id?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
    avatar?: boolean
    accessToken?: boolean
    role?: boolean
    restaurantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WaiterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullName" | "email" | "password" | "avatar" | "accessToken" | "role" | "restaurantId" | "createdAt" | "updatedAt", ExtArgs["result"]["waiter"]>
  export type WaiterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurant?: boolean | restaurantsDefaultArgs<ExtArgs>
  }
  export type WaiterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurant?: boolean | restaurantsDefaultArgs<ExtArgs>
  }
  export type WaiterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurant?: boolean | restaurantsDefaultArgs<ExtArgs>
  }

  export type $WaiterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Waiter"
    objects: {
      restaurant: Prisma.$restaurantsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fullName: string
      email: string
      password: string
      avatar: string | null
      accessToken: string | null
      role: string
      restaurantId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["waiter"]>
    composites: {}
  }

  type WaiterGetPayload<S extends boolean | null | undefined | WaiterDefaultArgs> = $Result.GetResult<Prisma.$WaiterPayload, S>

  type WaiterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WaiterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WaiterCountAggregateInputType | true
    }

  export interface WaiterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Waiter'], meta: { name: 'Waiter' } }
    /**
     * Find zero or one Waiter that matches the filter.
     * @param {WaiterFindUniqueArgs} args - Arguments to find a Waiter
     * @example
     * // Get one Waiter
     * const waiter = await prisma.waiter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WaiterFindUniqueArgs>(args: SelectSubset<T, WaiterFindUniqueArgs<ExtArgs>>): Prisma__WaiterClient<$Result.GetResult<Prisma.$WaiterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Waiter that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WaiterFindUniqueOrThrowArgs} args - Arguments to find a Waiter
     * @example
     * // Get one Waiter
     * const waiter = await prisma.waiter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WaiterFindUniqueOrThrowArgs>(args: SelectSubset<T, WaiterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WaiterClient<$Result.GetResult<Prisma.$WaiterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Waiter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaiterFindFirstArgs} args - Arguments to find a Waiter
     * @example
     * // Get one Waiter
     * const waiter = await prisma.waiter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WaiterFindFirstArgs>(args?: SelectSubset<T, WaiterFindFirstArgs<ExtArgs>>): Prisma__WaiterClient<$Result.GetResult<Prisma.$WaiterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Waiter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaiterFindFirstOrThrowArgs} args - Arguments to find a Waiter
     * @example
     * // Get one Waiter
     * const waiter = await prisma.waiter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WaiterFindFirstOrThrowArgs>(args?: SelectSubset<T, WaiterFindFirstOrThrowArgs<ExtArgs>>): Prisma__WaiterClient<$Result.GetResult<Prisma.$WaiterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Waiters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaiterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Waiters
     * const waiters = await prisma.waiter.findMany()
     * 
     * // Get first 10 Waiters
     * const waiters = await prisma.waiter.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const waiterWithIdOnly = await prisma.waiter.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WaiterFindManyArgs>(args?: SelectSubset<T, WaiterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaiterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Waiter.
     * @param {WaiterCreateArgs} args - Arguments to create a Waiter.
     * @example
     * // Create one Waiter
     * const Waiter = await prisma.waiter.create({
     *   data: {
     *     // ... data to create a Waiter
     *   }
     * })
     * 
     */
    create<T extends WaiterCreateArgs>(args: SelectSubset<T, WaiterCreateArgs<ExtArgs>>): Prisma__WaiterClient<$Result.GetResult<Prisma.$WaiterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Waiters.
     * @param {WaiterCreateManyArgs} args - Arguments to create many Waiters.
     * @example
     * // Create many Waiters
     * const waiter = await prisma.waiter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WaiterCreateManyArgs>(args?: SelectSubset<T, WaiterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Waiters and returns the data saved in the database.
     * @param {WaiterCreateManyAndReturnArgs} args - Arguments to create many Waiters.
     * @example
     * // Create many Waiters
     * const waiter = await prisma.waiter.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Waiters and only return the `id`
     * const waiterWithIdOnly = await prisma.waiter.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WaiterCreateManyAndReturnArgs>(args?: SelectSubset<T, WaiterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaiterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Waiter.
     * @param {WaiterDeleteArgs} args - Arguments to delete one Waiter.
     * @example
     * // Delete one Waiter
     * const Waiter = await prisma.waiter.delete({
     *   where: {
     *     // ... filter to delete one Waiter
     *   }
     * })
     * 
     */
    delete<T extends WaiterDeleteArgs>(args: SelectSubset<T, WaiterDeleteArgs<ExtArgs>>): Prisma__WaiterClient<$Result.GetResult<Prisma.$WaiterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Waiter.
     * @param {WaiterUpdateArgs} args - Arguments to update one Waiter.
     * @example
     * // Update one Waiter
     * const waiter = await prisma.waiter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WaiterUpdateArgs>(args: SelectSubset<T, WaiterUpdateArgs<ExtArgs>>): Prisma__WaiterClient<$Result.GetResult<Prisma.$WaiterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Waiters.
     * @param {WaiterDeleteManyArgs} args - Arguments to filter Waiters to delete.
     * @example
     * // Delete a few Waiters
     * const { count } = await prisma.waiter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WaiterDeleteManyArgs>(args?: SelectSubset<T, WaiterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Waiters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaiterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Waiters
     * const waiter = await prisma.waiter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WaiterUpdateManyArgs>(args: SelectSubset<T, WaiterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Waiters and returns the data updated in the database.
     * @param {WaiterUpdateManyAndReturnArgs} args - Arguments to update many Waiters.
     * @example
     * // Update many Waiters
     * const waiter = await prisma.waiter.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Waiters and only return the `id`
     * const waiterWithIdOnly = await prisma.waiter.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WaiterUpdateManyAndReturnArgs>(args: SelectSubset<T, WaiterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaiterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Waiter.
     * @param {WaiterUpsertArgs} args - Arguments to update or create a Waiter.
     * @example
     * // Update or create a Waiter
     * const waiter = await prisma.waiter.upsert({
     *   create: {
     *     // ... data to create a Waiter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Waiter we want to update
     *   }
     * })
     */
    upsert<T extends WaiterUpsertArgs>(args: SelectSubset<T, WaiterUpsertArgs<ExtArgs>>): Prisma__WaiterClient<$Result.GetResult<Prisma.$WaiterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Waiters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaiterCountArgs} args - Arguments to filter Waiters to count.
     * @example
     * // Count the number of Waiters
     * const count = await prisma.waiter.count({
     *   where: {
     *     // ... the filter for the Waiters we want to count
     *   }
     * })
    **/
    count<T extends WaiterCountArgs>(
      args?: Subset<T, WaiterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WaiterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Waiter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaiterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WaiterAggregateArgs>(args: Subset<T, WaiterAggregateArgs>): Prisma.PrismaPromise<GetWaiterAggregateType<T>>

    /**
     * Group by Waiter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaiterGroupByArgs} args - Group by arguments.
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
      T extends WaiterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WaiterGroupByArgs['orderBy'] }
        : { orderBy?: WaiterGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WaiterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWaiterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Waiter model
   */
  readonly fields: WaiterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Waiter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WaiterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    restaurant<T extends restaurantsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, restaurantsDefaultArgs<ExtArgs>>): Prisma__restaurantsClient<$Result.GetResult<Prisma.$restaurantsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Waiter model
   */
  interface WaiterFieldRefs {
    readonly id: FieldRef<"Waiter", 'String'>
    readonly fullName: FieldRef<"Waiter", 'String'>
    readonly email: FieldRef<"Waiter", 'String'>
    readonly password: FieldRef<"Waiter", 'String'>
    readonly avatar: FieldRef<"Waiter", 'String'>
    readonly accessToken: FieldRef<"Waiter", 'String'>
    readonly role: FieldRef<"Waiter", 'String'>
    readonly restaurantId: FieldRef<"Waiter", 'String'>
    readonly createdAt: FieldRef<"Waiter", 'DateTime'>
    readonly updatedAt: FieldRef<"Waiter", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Waiter findUnique
   */
  export type WaiterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Waiter
     */
    select?: WaiterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Waiter
     */
    omit?: WaiterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaiterInclude<ExtArgs> | null
    /**
     * Filter, which Waiter to fetch.
     */
    where: WaiterWhereUniqueInput
  }

  /**
   * Waiter findUniqueOrThrow
   */
  export type WaiterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Waiter
     */
    select?: WaiterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Waiter
     */
    omit?: WaiterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaiterInclude<ExtArgs> | null
    /**
     * Filter, which Waiter to fetch.
     */
    where: WaiterWhereUniqueInput
  }

  /**
   * Waiter findFirst
   */
  export type WaiterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Waiter
     */
    select?: WaiterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Waiter
     */
    omit?: WaiterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaiterInclude<ExtArgs> | null
    /**
     * Filter, which Waiter to fetch.
     */
    where?: WaiterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Waiters to fetch.
     */
    orderBy?: WaiterOrderByWithRelationInput | WaiterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Waiters.
     */
    cursor?: WaiterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Waiters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Waiters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Waiters.
     */
    distinct?: WaiterScalarFieldEnum | WaiterScalarFieldEnum[]
  }

  /**
   * Waiter findFirstOrThrow
   */
  export type WaiterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Waiter
     */
    select?: WaiterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Waiter
     */
    omit?: WaiterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaiterInclude<ExtArgs> | null
    /**
     * Filter, which Waiter to fetch.
     */
    where?: WaiterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Waiters to fetch.
     */
    orderBy?: WaiterOrderByWithRelationInput | WaiterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Waiters.
     */
    cursor?: WaiterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Waiters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Waiters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Waiters.
     */
    distinct?: WaiterScalarFieldEnum | WaiterScalarFieldEnum[]
  }

  /**
   * Waiter findMany
   */
  export type WaiterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Waiter
     */
    select?: WaiterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Waiter
     */
    omit?: WaiterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaiterInclude<ExtArgs> | null
    /**
     * Filter, which Waiters to fetch.
     */
    where?: WaiterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Waiters to fetch.
     */
    orderBy?: WaiterOrderByWithRelationInput | WaiterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Waiters.
     */
    cursor?: WaiterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Waiters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Waiters.
     */
    skip?: number
    distinct?: WaiterScalarFieldEnum | WaiterScalarFieldEnum[]
  }

  /**
   * Waiter create
   */
  export type WaiterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Waiter
     */
    select?: WaiterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Waiter
     */
    omit?: WaiterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaiterInclude<ExtArgs> | null
    /**
     * The data needed to create a Waiter.
     */
    data: XOR<WaiterCreateInput, WaiterUncheckedCreateInput>
  }

  /**
   * Waiter createMany
   */
  export type WaiterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Waiters.
     */
    data: WaiterCreateManyInput | WaiterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Waiter createManyAndReturn
   */
  export type WaiterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Waiter
     */
    select?: WaiterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Waiter
     */
    omit?: WaiterOmit<ExtArgs> | null
    /**
     * The data used to create many Waiters.
     */
    data: WaiterCreateManyInput | WaiterCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaiterIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Waiter update
   */
  export type WaiterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Waiter
     */
    select?: WaiterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Waiter
     */
    omit?: WaiterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaiterInclude<ExtArgs> | null
    /**
     * The data needed to update a Waiter.
     */
    data: XOR<WaiterUpdateInput, WaiterUncheckedUpdateInput>
    /**
     * Choose, which Waiter to update.
     */
    where: WaiterWhereUniqueInput
  }

  /**
   * Waiter updateMany
   */
  export type WaiterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Waiters.
     */
    data: XOR<WaiterUpdateManyMutationInput, WaiterUncheckedUpdateManyInput>
    /**
     * Filter which Waiters to update
     */
    where?: WaiterWhereInput
    /**
     * Limit how many Waiters to update.
     */
    limit?: number
  }

  /**
   * Waiter updateManyAndReturn
   */
  export type WaiterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Waiter
     */
    select?: WaiterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Waiter
     */
    omit?: WaiterOmit<ExtArgs> | null
    /**
     * The data used to update Waiters.
     */
    data: XOR<WaiterUpdateManyMutationInput, WaiterUncheckedUpdateManyInput>
    /**
     * Filter which Waiters to update
     */
    where?: WaiterWhereInput
    /**
     * Limit how many Waiters to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaiterIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Waiter upsert
   */
  export type WaiterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Waiter
     */
    select?: WaiterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Waiter
     */
    omit?: WaiterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaiterInclude<ExtArgs> | null
    /**
     * The filter to search for the Waiter to update in case it exists.
     */
    where: WaiterWhereUniqueInput
    /**
     * In case the Waiter found by the `where` argument doesn't exist, create a new Waiter with this data.
     */
    create: XOR<WaiterCreateInput, WaiterUncheckedCreateInput>
    /**
     * In case the Waiter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WaiterUpdateInput, WaiterUncheckedUpdateInput>
  }

  /**
   * Waiter delete
   */
  export type WaiterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Waiter
     */
    select?: WaiterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Waiter
     */
    omit?: WaiterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaiterInclude<ExtArgs> | null
    /**
     * Filter which Waiter to delete.
     */
    where: WaiterWhereUniqueInput
  }

  /**
   * Waiter deleteMany
   */
  export type WaiterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Waiters to delete
     */
    where?: WaiterWhereInput
    /**
     * Limit how many Waiters to delete.
     */
    limit?: number
  }

  /**
   * Waiter without action
   */
  export type WaiterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Waiter
     */
    select?: WaiterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Waiter
     */
    omit?: WaiterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaiterInclude<ExtArgs> | null
  }


  /**
   * Model Kitchen
   */

  export type AggregateKitchen = {
    _count: KitchenCountAggregateOutputType | null
    _min: KitchenMinAggregateOutputType | null
    _max: KitchenMaxAggregateOutputType | null
  }

  export type KitchenMinAggregateOutputType = {
    id: string | null
    fullName: string | null
    email: string | null
    password: string | null
    avatar: string | null
    role: string | null
    accessToken: string | null
    restaurantId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type KitchenMaxAggregateOutputType = {
    id: string | null
    fullName: string | null
    email: string | null
    password: string | null
    avatar: string | null
    role: string | null
    accessToken: string | null
    restaurantId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type KitchenCountAggregateOutputType = {
    id: number
    fullName: number
    email: number
    password: number
    avatar: number
    role: number
    accessToken: number
    restaurantId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type KitchenMinAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    password?: true
    avatar?: true
    role?: true
    accessToken?: true
    restaurantId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type KitchenMaxAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    password?: true
    avatar?: true
    role?: true
    accessToken?: true
    restaurantId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type KitchenCountAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    password?: true
    avatar?: true
    role?: true
    accessToken?: true
    restaurantId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type KitchenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Kitchen to aggregate.
     */
    where?: KitchenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kitchens to fetch.
     */
    orderBy?: KitchenOrderByWithRelationInput | KitchenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KitchenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kitchens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kitchens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Kitchens
    **/
    _count?: true | KitchenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KitchenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KitchenMaxAggregateInputType
  }

  export type GetKitchenAggregateType<T extends KitchenAggregateArgs> = {
        [P in keyof T & keyof AggregateKitchen]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKitchen[P]>
      : GetScalarType<T[P], AggregateKitchen[P]>
  }




  export type KitchenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KitchenWhereInput
    orderBy?: KitchenOrderByWithAggregationInput | KitchenOrderByWithAggregationInput[]
    by: KitchenScalarFieldEnum[] | KitchenScalarFieldEnum
    having?: KitchenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KitchenCountAggregateInputType | true
    _min?: KitchenMinAggregateInputType
    _max?: KitchenMaxAggregateInputType
  }

  export type KitchenGroupByOutputType = {
    id: string
    fullName: string
    email: string
    password: string
    avatar: string | null
    role: string
    accessToken: string | null
    restaurantId: string
    createdAt: Date
    updatedAt: Date
    _count: KitchenCountAggregateOutputType | null
    _min: KitchenMinAggregateOutputType | null
    _max: KitchenMaxAggregateOutputType | null
  }

  type GetKitchenGroupByPayload<T extends KitchenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KitchenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KitchenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KitchenGroupByOutputType[P]>
            : GetScalarType<T[P], KitchenGroupByOutputType[P]>
        }
      >
    >


  export type KitchenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
    avatar?: boolean
    role?: boolean
    accessToken?: boolean
    restaurantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    restaurant?: boolean | restaurantsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kitchen"]>

  export type KitchenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
    avatar?: boolean
    role?: boolean
    accessToken?: boolean
    restaurantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    restaurant?: boolean | restaurantsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kitchen"]>

  export type KitchenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
    avatar?: boolean
    role?: boolean
    accessToken?: boolean
    restaurantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    restaurant?: boolean | restaurantsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kitchen"]>

  export type KitchenSelectScalar = {
    id?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
    avatar?: boolean
    role?: boolean
    accessToken?: boolean
    restaurantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type KitchenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullName" | "email" | "password" | "avatar" | "role" | "accessToken" | "restaurantId" | "createdAt" | "updatedAt", ExtArgs["result"]["kitchen"]>
  export type KitchenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurant?: boolean | restaurantsDefaultArgs<ExtArgs>
  }
  export type KitchenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurant?: boolean | restaurantsDefaultArgs<ExtArgs>
  }
  export type KitchenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurant?: boolean | restaurantsDefaultArgs<ExtArgs>
  }

  export type $KitchenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Kitchen"
    objects: {
      restaurant: Prisma.$restaurantsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fullName: string
      email: string
      password: string
      avatar: string | null
      role: string
      accessToken: string | null
      restaurantId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["kitchen"]>
    composites: {}
  }

  type KitchenGetPayload<S extends boolean | null | undefined | KitchenDefaultArgs> = $Result.GetResult<Prisma.$KitchenPayload, S>

  type KitchenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<KitchenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KitchenCountAggregateInputType | true
    }

  export interface KitchenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Kitchen'], meta: { name: 'Kitchen' } }
    /**
     * Find zero or one Kitchen that matches the filter.
     * @param {KitchenFindUniqueArgs} args - Arguments to find a Kitchen
     * @example
     * // Get one Kitchen
     * const kitchen = await prisma.kitchen.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KitchenFindUniqueArgs>(args: SelectSubset<T, KitchenFindUniqueArgs<ExtArgs>>): Prisma__KitchenClient<$Result.GetResult<Prisma.$KitchenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Kitchen that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {KitchenFindUniqueOrThrowArgs} args - Arguments to find a Kitchen
     * @example
     * // Get one Kitchen
     * const kitchen = await prisma.kitchen.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KitchenFindUniqueOrThrowArgs>(args: SelectSubset<T, KitchenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KitchenClient<$Result.GetResult<Prisma.$KitchenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kitchen that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KitchenFindFirstArgs} args - Arguments to find a Kitchen
     * @example
     * // Get one Kitchen
     * const kitchen = await prisma.kitchen.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KitchenFindFirstArgs>(args?: SelectSubset<T, KitchenFindFirstArgs<ExtArgs>>): Prisma__KitchenClient<$Result.GetResult<Prisma.$KitchenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kitchen that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KitchenFindFirstOrThrowArgs} args - Arguments to find a Kitchen
     * @example
     * // Get one Kitchen
     * const kitchen = await prisma.kitchen.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KitchenFindFirstOrThrowArgs>(args?: SelectSubset<T, KitchenFindFirstOrThrowArgs<ExtArgs>>): Prisma__KitchenClient<$Result.GetResult<Prisma.$KitchenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Kitchens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KitchenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Kitchens
     * const kitchens = await prisma.kitchen.findMany()
     * 
     * // Get first 10 Kitchens
     * const kitchens = await prisma.kitchen.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const kitchenWithIdOnly = await prisma.kitchen.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends KitchenFindManyArgs>(args?: SelectSubset<T, KitchenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KitchenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Kitchen.
     * @param {KitchenCreateArgs} args - Arguments to create a Kitchen.
     * @example
     * // Create one Kitchen
     * const Kitchen = await prisma.kitchen.create({
     *   data: {
     *     // ... data to create a Kitchen
     *   }
     * })
     * 
     */
    create<T extends KitchenCreateArgs>(args: SelectSubset<T, KitchenCreateArgs<ExtArgs>>): Prisma__KitchenClient<$Result.GetResult<Prisma.$KitchenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Kitchens.
     * @param {KitchenCreateManyArgs} args - Arguments to create many Kitchens.
     * @example
     * // Create many Kitchens
     * const kitchen = await prisma.kitchen.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KitchenCreateManyArgs>(args?: SelectSubset<T, KitchenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Kitchens and returns the data saved in the database.
     * @param {KitchenCreateManyAndReturnArgs} args - Arguments to create many Kitchens.
     * @example
     * // Create many Kitchens
     * const kitchen = await prisma.kitchen.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Kitchens and only return the `id`
     * const kitchenWithIdOnly = await prisma.kitchen.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends KitchenCreateManyAndReturnArgs>(args?: SelectSubset<T, KitchenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KitchenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Kitchen.
     * @param {KitchenDeleteArgs} args - Arguments to delete one Kitchen.
     * @example
     * // Delete one Kitchen
     * const Kitchen = await prisma.kitchen.delete({
     *   where: {
     *     // ... filter to delete one Kitchen
     *   }
     * })
     * 
     */
    delete<T extends KitchenDeleteArgs>(args: SelectSubset<T, KitchenDeleteArgs<ExtArgs>>): Prisma__KitchenClient<$Result.GetResult<Prisma.$KitchenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Kitchen.
     * @param {KitchenUpdateArgs} args - Arguments to update one Kitchen.
     * @example
     * // Update one Kitchen
     * const kitchen = await prisma.kitchen.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KitchenUpdateArgs>(args: SelectSubset<T, KitchenUpdateArgs<ExtArgs>>): Prisma__KitchenClient<$Result.GetResult<Prisma.$KitchenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Kitchens.
     * @param {KitchenDeleteManyArgs} args - Arguments to filter Kitchens to delete.
     * @example
     * // Delete a few Kitchens
     * const { count } = await prisma.kitchen.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KitchenDeleteManyArgs>(args?: SelectSubset<T, KitchenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kitchens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KitchenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Kitchens
     * const kitchen = await prisma.kitchen.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KitchenUpdateManyArgs>(args: SelectSubset<T, KitchenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kitchens and returns the data updated in the database.
     * @param {KitchenUpdateManyAndReturnArgs} args - Arguments to update many Kitchens.
     * @example
     * // Update many Kitchens
     * const kitchen = await prisma.kitchen.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Kitchens and only return the `id`
     * const kitchenWithIdOnly = await prisma.kitchen.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends KitchenUpdateManyAndReturnArgs>(args: SelectSubset<T, KitchenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KitchenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Kitchen.
     * @param {KitchenUpsertArgs} args - Arguments to update or create a Kitchen.
     * @example
     * // Update or create a Kitchen
     * const kitchen = await prisma.kitchen.upsert({
     *   create: {
     *     // ... data to create a Kitchen
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Kitchen we want to update
     *   }
     * })
     */
    upsert<T extends KitchenUpsertArgs>(args: SelectSubset<T, KitchenUpsertArgs<ExtArgs>>): Prisma__KitchenClient<$Result.GetResult<Prisma.$KitchenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Kitchens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KitchenCountArgs} args - Arguments to filter Kitchens to count.
     * @example
     * // Count the number of Kitchens
     * const count = await prisma.kitchen.count({
     *   where: {
     *     // ... the filter for the Kitchens we want to count
     *   }
     * })
    **/
    count<T extends KitchenCountArgs>(
      args?: Subset<T, KitchenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KitchenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Kitchen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KitchenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends KitchenAggregateArgs>(args: Subset<T, KitchenAggregateArgs>): Prisma.PrismaPromise<GetKitchenAggregateType<T>>

    /**
     * Group by Kitchen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KitchenGroupByArgs} args - Group by arguments.
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
      T extends KitchenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KitchenGroupByArgs['orderBy'] }
        : { orderBy?: KitchenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, KitchenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKitchenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Kitchen model
   */
  readonly fields: KitchenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Kitchen.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KitchenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    restaurant<T extends restaurantsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, restaurantsDefaultArgs<ExtArgs>>): Prisma__restaurantsClient<$Result.GetResult<Prisma.$restaurantsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Kitchen model
   */
  interface KitchenFieldRefs {
    readonly id: FieldRef<"Kitchen", 'String'>
    readonly fullName: FieldRef<"Kitchen", 'String'>
    readonly email: FieldRef<"Kitchen", 'String'>
    readonly password: FieldRef<"Kitchen", 'String'>
    readonly avatar: FieldRef<"Kitchen", 'String'>
    readonly role: FieldRef<"Kitchen", 'String'>
    readonly accessToken: FieldRef<"Kitchen", 'String'>
    readonly restaurantId: FieldRef<"Kitchen", 'String'>
    readonly createdAt: FieldRef<"Kitchen", 'DateTime'>
    readonly updatedAt: FieldRef<"Kitchen", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Kitchen findUnique
   */
  export type KitchenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kitchen
     */
    select?: KitchenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kitchen
     */
    omit?: KitchenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KitchenInclude<ExtArgs> | null
    /**
     * Filter, which Kitchen to fetch.
     */
    where: KitchenWhereUniqueInput
  }

  /**
   * Kitchen findUniqueOrThrow
   */
  export type KitchenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kitchen
     */
    select?: KitchenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kitchen
     */
    omit?: KitchenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KitchenInclude<ExtArgs> | null
    /**
     * Filter, which Kitchen to fetch.
     */
    where: KitchenWhereUniqueInput
  }

  /**
   * Kitchen findFirst
   */
  export type KitchenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kitchen
     */
    select?: KitchenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kitchen
     */
    omit?: KitchenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KitchenInclude<ExtArgs> | null
    /**
     * Filter, which Kitchen to fetch.
     */
    where?: KitchenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kitchens to fetch.
     */
    orderBy?: KitchenOrderByWithRelationInput | KitchenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Kitchens.
     */
    cursor?: KitchenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kitchens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kitchens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Kitchens.
     */
    distinct?: KitchenScalarFieldEnum | KitchenScalarFieldEnum[]
  }

  /**
   * Kitchen findFirstOrThrow
   */
  export type KitchenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kitchen
     */
    select?: KitchenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kitchen
     */
    omit?: KitchenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KitchenInclude<ExtArgs> | null
    /**
     * Filter, which Kitchen to fetch.
     */
    where?: KitchenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kitchens to fetch.
     */
    orderBy?: KitchenOrderByWithRelationInput | KitchenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Kitchens.
     */
    cursor?: KitchenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kitchens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kitchens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Kitchens.
     */
    distinct?: KitchenScalarFieldEnum | KitchenScalarFieldEnum[]
  }

  /**
   * Kitchen findMany
   */
  export type KitchenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kitchen
     */
    select?: KitchenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kitchen
     */
    omit?: KitchenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KitchenInclude<ExtArgs> | null
    /**
     * Filter, which Kitchens to fetch.
     */
    where?: KitchenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kitchens to fetch.
     */
    orderBy?: KitchenOrderByWithRelationInput | KitchenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Kitchens.
     */
    cursor?: KitchenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kitchens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kitchens.
     */
    skip?: number
    distinct?: KitchenScalarFieldEnum | KitchenScalarFieldEnum[]
  }

  /**
   * Kitchen create
   */
  export type KitchenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kitchen
     */
    select?: KitchenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kitchen
     */
    omit?: KitchenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KitchenInclude<ExtArgs> | null
    /**
     * The data needed to create a Kitchen.
     */
    data: XOR<KitchenCreateInput, KitchenUncheckedCreateInput>
  }

  /**
   * Kitchen createMany
   */
  export type KitchenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Kitchens.
     */
    data: KitchenCreateManyInput | KitchenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Kitchen createManyAndReturn
   */
  export type KitchenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kitchen
     */
    select?: KitchenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Kitchen
     */
    omit?: KitchenOmit<ExtArgs> | null
    /**
     * The data used to create many Kitchens.
     */
    data: KitchenCreateManyInput | KitchenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KitchenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Kitchen update
   */
  export type KitchenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kitchen
     */
    select?: KitchenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kitchen
     */
    omit?: KitchenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KitchenInclude<ExtArgs> | null
    /**
     * The data needed to update a Kitchen.
     */
    data: XOR<KitchenUpdateInput, KitchenUncheckedUpdateInput>
    /**
     * Choose, which Kitchen to update.
     */
    where: KitchenWhereUniqueInput
  }

  /**
   * Kitchen updateMany
   */
  export type KitchenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Kitchens.
     */
    data: XOR<KitchenUpdateManyMutationInput, KitchenUncheckedUpdateManyInput>
    /**
     * Filter which Kitchens to update
     */
    where?: KitchenWhereInput
    /**
     * Limit how many Kitchens to update.
     */
    limit?: number
  }

  /**
   * Kitchen updateManyAndReturn
   */
  export type KitchenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kitchen
     */
    select?: KitchenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Kitchen
     */
    omit?: KitchenOmit<ExtArgs> | null
    /**
     * The data used to update Kitchens.
     */
    data: XOR<KitchenUpdateManyMutationInput, KitchenUncheckedUpdateManyInput>
    /**
     * Filter which Kitchens to update
     */
    where?: KitchenWhereInput
    /**
     * Limit how many Kitchens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KitchenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Kitchen upsert
   */
  export type KitchenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kitchen
     */
    select?: KitchenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kitchen
     */
    omit?: KitchenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KitchenInclude<ExtArgs> | null
    /**
     * The filter to search for the Kitchen to update in case it exists.
     */
    where: KitchenWhereUniqueInput
    /**
     * In case the Kitchen found by the `where` argument doesn't exist, create a new Kitchen with this data.
     */
    create: XOR<KitchenCreateInput, KitchenUncheckedCreateInput>
    /**
     * In case the Kitchen was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KitchenUpdateInput, KitchenUncheckedUpdateInput>
  }

  /**
   * Kitchen delete
   */
  export type KitchenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kitchen
     */
    select?: KitchenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kitchen
     */
    omit?: KitchenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KitchenInclude<ExtArgs> | null
    /**
     * Filter which Kitchen to delete.
     */
    where: KitchenWhereUniqueInput
  }

  /**
   * Kitchen deleteMany
   */
  export type KitchenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Kitchens to delete
     */
    where?: KitchenWhereInput
    /**
     * Limit how many Kitchens to delete.
     */
    limit?: number
  }

  /**
   * Kitchen without action
   */
  export type KitchenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kitchen
     */
    select?: KitchenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kitchen
     */
    omit?: KitchenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KitchenInclude<ExtArgs> | null
  }


  /**
   * Model restaurants
   */

  export type AggregateRestaurants = {
    _count: RestaurantsCountAggregateOutputType | null
    _min: RestaurantsMinAggregateOutputType | null
    _max: RestaurantsMaxAggregateOutputType | null
  }

  export type RestaurantsMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    address: string | null
    phone: string | null
    email: string | null
    logoUrl: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RestaurantsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    address: string | null
    phone: string | null
    email: string | null
    logoUrl: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RestaurantsCountAggregateOutputType = {
    id: number
    name: number
    description: number
    address: number
    phone: number
    email: number
    logoUrl: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RestaurantsMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    address?: true
    phone?: true
    email?: true
    logoUrl?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RestaurantsMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    address?: true
    phone?: true
    email?: true
    logoUrl?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RestaurantsCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    address?: true
    phone?: true
    email?: true
    logoUrl?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RestaurantsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which restaurants to aggregate.
     */
    where?: restaurantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of restaurants to fetch.
     */
    orderBy?: restaurantsOrderByWithRelationInput | restaurantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: restaurantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` restaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` restaurants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned restaurants
    **/
    _count?: true | RestaurantsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RestaurantsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RestaurantsMaxAggregateInputType
  }

  export type GetRestaurantsAggregateType<T extends RestaurantsAggregateArgs> = {
        [P in keyof T & keyof AggregateRestaurants]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRestaurants[P]>
      : GetScalarType<T[P], AggregateRestaurants[P]>
  }




  export type restaurantsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: restaurantsWhereInput
    orderBy?: restaurantsOrderByWithAggregationInput | restaurantsOrderByWithAggregationInput[]
    by: RestaurantsScalarFieldEnum[] | RestaurantsScalarFieldEnum
    having?: restaurantsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RestaurantsCountAggregateInputType | true
    _min?: RestaurantsMinAggregateInputType
    _max?: RestaurantsMaxAggregateInputType
  }

  export type RestaurantsGroupByOutputType = {
    id: string
    name: string
    description: string | null
    address: string
    phone: string | null
    email: string | null
    logoUrl: string | null
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: RestaurantsCountAggregateOutputType | null
    _min: RestaurantsMinAggregateOutputType | null
    _max: RestaurantsMaxAggregateOutputType | null
  }

  type GetRestaurantsGroupByPayload<T extends restaurantsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RestaurantsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RestaurantsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RestaurantsGroupByOutputType[P]>
            : GetScalarType<T[P], RestaurantsGroupByOutputType[P]>
        }
      >
    >


  export type restaurantsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    address?: boolean
    phone?: boolean
    email?: boolean
    logoUrl?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    menuItem?: boolean | restaurants$menuItemArgs<ExtArgs>
    menu_categories?: boolean | restaurants$menu_categoriesArgs<ExtArgs>
    tables?: boolean | restaurants$tablesArgs<ExtArgs>
    Orders?: boolean | restaurants$OrdersArgs<ExtArgs>
    Waiter?: boolean | restaurants$WaiterArgs<ExtArgs>
    Kitchen?: boolean | restaurants$KitchenArgs<ExtArgs>
    _count?: boolean | RestaurantsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["restaurants"]>

  export type restaurantsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    address?: boolean
    phone?: boolean
    email?: boolean
    logoUrl?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["restaurants"]>

  export type restaurantsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    address?: boolean
    phone?: boolean
    email?: boolean
    logoUrl?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["restaurants"]>

  export type restaurantsSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    address?: boolean
    phone?: boolean
    email?: boolean
    logoUrl?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type restaurantsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "address" | "phone" | "email" | "logoUrl" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["restaurants"]>
  export type restaurantsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    menuItem?: boolean | restaurants$menuItemArgs<ExtArgs>
    menu_categories?: boolean | restaurants$menu_categoriesArgs<ExtArgs>
    tables?: boolean | restaurants$tablesArgs<ExtArgs>
    Orders?: boolean | restaurants$OrdersArgs<ExtArgs>
    Waiter?: boolean | restaurants$WaiterArgs<ExtArgs>
    Kitchen?: boolean | restaurants$KitchenArgs<ExtArgs>
    _count?: boolean | RestaurantsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type restaurantsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type restaurantsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $restaurantsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "restaurants"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      menuItem: Prisma.$menuItemPayload<ExtArgs>[]
      menu_categories: Prisma.$menu_categoriesPayload<ExtArgs>[]
      tables: Prisma.$tablesPayload<ExtArgs>[]
      Orders: Prisma.$OrdersPayload<ExtArgs>[]
      Waiter: Prisma.$WaiterPayload<ExtArgs>[]
      Kitchen: Prisma.$KitchenPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      address: string
      phone: string | null
      email: string | null
      logoUrl: string | null
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["restaurants"]>
    composites: {}
  }

  type restaurantsGetPayload<S extends boolean | null | undefined | restaurantsDefaultArgs> = $Result.GetResult<Prisma.$restaurantsPayload, S>

  type restaurantsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<restaurantsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RestaurantsCountAggregateInputType | true
    }

  export interface restaurantsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['restaurants'], meta: { name: 'restaurants' } }
    /**
     * Find zero or one Restaurants that matches the filter.
     * @param {restaurantsFindUniqueArgs} args - Arguments to find a Restaurants
     * @example
     * // Get one Restaurants
     * const restaurants = await prisma.restaurants.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends restaurantsFindUniqueArgs>(args: SelectSubset<T, restaurantsFindUniqueArgs<ExtArgs>>): Prisma__restaurantsClient<$Result.GetResult<Prisma.$restaurantsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Restaurants that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {restaurantsFindUniqueOrThrowArgs} args - Arguments to find a Restaurants
     * @example
     * // Get one Restaurants
     * const restaurants = await prisma.restaurants.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends restaurantsFindUniqueOrThrowArgs>(args: SelectSubset<T, restaurantsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__restaurantsClient<$Result.GetResult<Prisma.$restaurantsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Restaurants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {restaurantsFindFirstArgs} args - Arguments to find a Restaurants
     * @example
     * // Get one Restaurants
     * const restaurants = await prisma.restaurants.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends restaurantsFindFirstArgs>(args?: SelectSubset<T, restaurantsFindFirstArgs<ExtArgs>>): Prisma__restaurantsClient<$Result.GetResult<Prisma.$restaurantsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Restaurants that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {restaurantsFindFirstOrThrowArgs} args - Arguments to find a Restaurants
     * @example
     * // Get one Restaurants
     * const restaurants = await prisma.restaurants.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends restaurantsFindFirstOrThrowArgs>(args?: SelectSubset<T, restaurantsFindFirstOrThrowArgs<ExtArgs>>): Prisma__restaurantsClient<$Result.GetResult<Prisma.$restaurantsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Restaurants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {restaurantsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Restaurants
     * const restaurants = await prisma.restaurants.findMany()
     * 
     * // Get first 10 Restaurants
     * const restaurants = await prisma.restaurants.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const restaurantsWithIdOnly = await prisma.restaurants.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends restaurantsFindManyArgs>(args?: SelectSubset<T, restaurantsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$restaurantsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Restaurants.
     * @param {restaurantsCreateArgs} args - Arguments to create a Restaurants.
     * @example
     * // Create one Restaurants
     * const Restaurants = await prisma.restaurants.create({
     *   data: {
     *     // ... data to create a Restaurants
     *   }
     * })
     * 
     */
    create<T extends restaurantsCreateArgs>(args: SelectSubset<T, restaurantsCreateArgs<ExtArgs>>): Prisma__restaurantsClient<$Result.GetResult<Prisma.$restaurantsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Restaurants.
     * @param {restaurantsCreateManyArgs} args - Arguments to create many Restaurants.
     * @example
     * // Create many Restaurants
     * const restaurants = await prisma.restaurants.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends restaurantsCreateManyArgs>(args?: SelectSubset<T, restaurantsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Restaurants and returns the data saved in the database.
     * @param {restaurantsCreateManyAndReturnArgs} args - Arguments to create many Restaurants.
     * @example
     * // Create many Restaurants
     * const restaurants = await prisma.restaurants.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Restaurants and only return the `id`
     * const restaurantsWithIdOnly = await prisma.restaurants.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends restaurantsCreateManyAndReturnArgs>(args?: SelectSubset<T, restaurantsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$restaurantsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Restaurants.
     * @param {restaurantsDeleteArgs} args - Arguments to delete one Restaurants.
     * @example
     * // Delete one Restaurants
     * const Restaurants = await prisma.restaurants.delete({
     *   where: {
     *     // ... filter to delete one Restaurants
     *   }
     * })
     * 
     */
    delete<T extends restaurantsDeleteArgs>(args: SelectSubset<T, restaurantsDeleteArgs<ExtArgs>>): Prisma__restaurantsClient<$Result.GetResult<Prisma.$restaurantsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Restaurants.
     * @param {restaurantsUpdateArgs} args - Arguments to update one Restaurants.
     * @example
     * // Update one Restaurants
     * const restaurants = await prisma.restaurants.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends restaurantsUpdateArgs>(args: SelectSubset<T, restaurantsUpdateArgs<ExtArgs>>): Prisma__restaurantsClient<$Result.GetResult<Prisma.$restaurantsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Restaurants.
     * @param {restaurantsDeleteManyArgs} args - Arguments to filter Restaurants to delete.
     * @example
     * // Delete a few Restaurants
     * const { count } = await prisma.restaurants.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends restaurantsDeleteManyArgs>(args?: SelectSubset<T, restaurantsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Restaurants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {restaurantsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Restaurants
     * const restaurants = await prisma.restaurants.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends restaurantsUpdateManyArgs>(args: SelectSubset<T, restaurantsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Restaurants and returns the data updated in the database.
     * @param {restaurantsUpdateManyAndReturnArgs} args - Arguments to update many Restaurants.
     * @example
     * // Update many Restaurants
     * const restaurants = await prisma.restaurants.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Restaurants and only return the `id`
     * const restaurantsWithIdOnly = await prisma.restaurants.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends restaurantsUpdateManyAndReturnArgs>(args: SelectSubset<T, restaurantsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$restaurantsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Restaurants.
     * @param {restaurantsUpsertArgs} args - Arguments to update or create a Restaurants.
     * @example
     * // Update or create a Restaurants
     * const restaurants = await prisma.restaurants.upsert({
     *   create: {
     *     // ... data to create a Restaurants
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Restaurants we want to update
     *   }
     * })
     */
    upsert<T extends restaurantsUpsertArgs>(args: SelectSubset<T, restaurantsUpsertArgs<ExtArgs>>): Prisma__restaurantsClient<$Result.GetResult<Prisma.$restaurantsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Restaurants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {restaurantsCountArgs} args - Arguments to filter Restaurants to count.
     * @example
     * // Count the number of Restaurants
     * const count = await prisma.restaurants.count({
     *   where: {
     *     // ... the filter for the Restaurants we want to count
     *   }
     * })
    **/
    count<T extends restaurantsCountArgs>(
      args?: Subset<T, restaurantsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RestaurantsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Restaurants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RestaurantsAggregateArgs>(args: Subset<T, RestaurantsAggregateArgs>): Prisma.PrismaPromise<GetRestaurantsAggregateType<T>>

    /**
     * Group by Restaurants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {restaurantsGroupByArgs} args - Group by arguments.
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
      T extends restaurantsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: restaurantsGroupByArgs['orderBy'] }
        : { orderBy?: restaurantsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, restaurantsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRestaurantsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the restaurants model
   */
  readonly fields: restaurantsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for restaurants.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__restaurantsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    menuItem<T extends restaurants$menuItemArgs<ExtArgs> = {}>(args?: Subset<T, restaurants$menuItemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$menuItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    menu_categories<T extends restaurants$menu_categoriesArgs<ExtArgs> = {}>(args?: Subset<T, restaurants$menu_categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$menu_categoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tables<T extends restaurants$tablesArgs<ExtArgs> = {}>(args?: Subset<T, restaurants$tablesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tablesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Orders<T extends restaurants$OrdersArgs<ExtArgs> = {}>(args?: Subset<T, restaurants$OrdersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Waiter<T extends restaurants$WaiterArgs<ExtArgs> = {}>(args?: Subset<T, restaurants$WaiterArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaiterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Kitchen<T extends restaurants$KitchenArgs<ExtArgs> = {}>(args?: Subset<T, restaurants$KitchenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KitchenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the restaurants model
   */
  interface restaurantsFieldRefs {
    readonly id: FieldRef<"restaurants", 'String'>
    readonly name: FieldRef<"restaurants", 'String'>
    readonly description: FieldRef<"restaurants", 'String'>
    readonly address: FieldRef<"restaurants", 'String'>
    readonly phone: FieldRef<"restaurants", 'String'>
    readonly email: FieldRef<"restaurants", 'String'>
    readonly logoUrl: FieldRef<"restaurants", 'String'>
    readonly userId: FieldRef<"restaurants", 'String'>
    readonly createdAt: FieldRef<"restaurants", 'DateTime'>
    readonly updatedAt: FieldRef<"restaurants", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * restaurants findUnique
   */
  export type restaurantsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurants
     */
    select?: restaurantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the restaurants
     */
    omit?: restaurantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: restaurantsInclude<ExtArgs> | null
    /**
     * Filter, which restaurants to fetch.
     */
    where: restaurantsWhereUniqueInput
  }

  /**
   * restaurants findUniqueOrThrow
   */
  export type restaurantsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurants
     */
    select?: restaurantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the restaurants
     */
    omit?: restaurantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: restaurantsInclude<ExtArgs> | null
    /**
     * Filter, which restaurants to fetch.
     */
    where: restaurantsWhereUniqueInput
  }

  /**
   * restaurants findFirst
   */
  export type restaurantsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurants
     */
    select?: restaurantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the restaurants
     */
    omit?: restaurantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: restaurantsInclude<ExtArgs> | null
    /**
     * Filter, which restaurants to fetch.
     */
    where?: restaurantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of restaurants to fetch.
     */
    orderBy?: restaurantsOrderByWithRelationInput | restaurantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for restaurants.
     */
    cursor?: restaurantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` restaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` restaurants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of restaurants.
     */
    distinct?: RestaurantsScalarFieldEnum | RestaurantsScalarFieldEnum[]
  }

  /**
   * restaurants findFirstOrThrow
   */
  export type restaurantsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurants
     */
    select?: restaurantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the restaurants
     */
    omit?: restaurantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: restaurantsInclude<ExtArgs> | null
    /**
     * Filter, which restaurants to fetch.
     */
    where?: restaurantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of restaurants to fetch.
     */
    orderBy?: restaurantsOrderByWithRelationInput | restaurantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for restaurants.
     */
    cursor?: restaurantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` restaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` restaurants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of restaurants.
     */
    distinct?: RestaurantsScalarFieldEnum | RestaurantsScalarFieldEnum[]
  }

  /**
   * restaurants findMany
   */
  export type restaurantsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurants
     */
    select?: restaurantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the restaurants
     */
    omit?: restaurantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: restaurantsInclude<ExtArgs> | null
    /**
     * Filter, which restaurants to fetch.
     */
    where?: restaurantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of restaurants to fetch.
     */
    orderBy?: restaurantsOrderByWithRelationInput | restaurantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing restaurants.
     */
    cursor?: restaurantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` restaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` restaurants.
     */
    skip?: number
    distinct?: RestaurantsScalarFieldEnum | RestaurantsScalarFieldEnum[]
  }

  /**
   * restaurants create
   */
  export type restaurantsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurants
     */
    select?: restaurantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the restaurants
     */
    omit?: restaurantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: restaurantsInclude<ExtArgs> | null
    /**
     * The data needed to create a restaurants.
     */
    data: XOR<restaurantsCreateInput, restaurantsUncheckedCreateInput>
  }

  /**
   * restaurants createMany
   */
  export type restaurantsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many restaurants.
     */
    data: restaurantsCreateManyInput | restaurantsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * restaurants createManyAndReturn
   */
  export type restaurantsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurants
     */
    select?: restaurantsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the restaurants
     */
    omit?: restaurantsOmit<ExtArgs> | null
    /**
     * The data used to create many restaurants.
     */
    data: restaurantsCreateManyInput | restaurantsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: restaurantsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * restaurants update
   */
  export type restaurantsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurants
     */
    select?: restaurantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the restaurants
     */
    omit?: restaurantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: restaurantsInclude<ExtArgs> | null
    /**
     * The data needed to update a restaurants.
     */
    data: XOR<restaurantsUpdateInput, restaurantsUncheckedUpdateInput>
    /**
     * Choose, which restaurants to update.
     */
    where: restaurantsWhereUniqueInput
  }

  /**
   * restaurants updateMany
   */
  export type restaurantsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update restaurants.
     */
    data: XOR<restaurantsUpdateManyMutationInput, restaurantsUncheckedUpdateManyInput>
    /**
     * Filter which restaurants to update
     */
    where?: restaurantsWhereInput
    /**
     * Limit how many restaurants to update.
     */
    limit?: number
  }

  /**
   * restaurants updateManyAndReturn
   */
  export type restaurantsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurants
     */
    select?: restaurantsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the restaurants
     */
    omit?: restaurantsOmit<ExtArgs> | null
    /**
     * The data used to update restaurants.
     */
    data: XOR<restaurantsUpdateManyMutationInput, restaurantsUncheckedUpdateManyInput>
    /**
     * Filter which restaurants to update
     */
    where?: restaurantsWhereInput
    /**
     * Limit how many restaurants to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: restaurantsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * restaurants upsert
   */
  export type restaurantsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurants
     */
    select?: restaurantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the restaurants
     */
    omit?: restaurantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: restaurantsInclude<ExtArgs> | null
    /**
     * The filter to search for the restaurants to update in case it exists.
     */
    where: restaurantsWhereUniqueInput
    /**
     * In case the restaurants found by the `where` argument doesn't exist, create a new restaurants with this data.
     */
    create: XOR<restaurantsCreateInput, restaurantsUncheckedCreateInput>
    /**
     * In case the restaurants was found with the provided `where` argument, update it with this data.
     */
    update: XOR<restaurantsUpdateInput, restaurantsUncheckedUpdateInput>
  }

  /**
   * restaurants delete
   */
  export type restaurantsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurants
     */
    select?: restaurantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the restaurants
     */
    omit?: restaurantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: restaurantsInclude<ExtArgs> | null
    /**
     * Filter which restaurants to delete.
     */
    where: restaurantsWhereUniqueInput
  }

  /**
   * restaurants deleteMany
   */
  export type restaurantsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which restaurants to delete
     */
    where?: restaurantsWhereInput
    /**
     * Limit how many restaurants to delete.
     */
    limit?: number
  }

  /**
   * restaurants.menuItem
   */
  export type restaurants$menuItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menuItem
     */
    select?: menuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menuItem
     */
    omit?: menuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menuItemInclude<ExtArgs> | null
    where?: menuItemWhereInput
    orderBy?: menuItemOrderByWithRelationInput | menuItemOrderByWithRelationInput[]
    cursor?: menuItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MenuItemScalarFieldEnum | MenuItemScalarFieldEnum[]
  }

  /**
   * restaurants.menu_categories
   */
  export type restaurants$menu_categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_categories
     */
    select?: menu_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu_categories
     */
    omit?: menu_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menu_categoriesInclude<ExtArgs> | null
    where?: menu_categoriesWhereInput
    orderBy?: menu_categoriesOrderByWithRelationInput | menu_categoriesOrderByWithRelationInput[]
    cursor?: menu_categoriesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Menu_categoriesScalarFieldEnum | Menu_categoriesScalarFieldEnum[]
  }

  /**
   * restaurants.tables
   */
  export type restaurants$tablesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tables
     */
    select?: tablesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tables
     */
    omit?: tablesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tablesInclude<ExtArgs> | null
    where?: tablesWhereInput
    orderBy?: tablesOrderByWithRelationInput | tablesOrderByWithRelationInput[]
    cursor?: tablesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TablesScalarFieldEnum | TablesScalarFieldEnum[]
  }

  /**
   * restaurants.Orders
   */
  export type restaurants$OrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    where?: OrdersWhereInput
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    cursor?: OrdersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * restaurants.Waiter
   */
  export type restaurants$WaiterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Waiter
     */
    select?: WaiterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Waiter
     */
    omit?: WaiterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaiterInclude<ExtArgs> | null
    where?: WaiterWhereInput
    orderBy?: WaiterOrderByWithRelationInput | WaiterOrderByWithRelationInput[]
    cursor?: WaiterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WaiterScalarFieldEnum | WaiterScalarFieldEnum[]
  }

  /**
   * restaurants.Kitchen
   */
  export type restaurants$KitchenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kitchen
     */
    select?: KitchenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kitchen
     */
    omit?: KitchenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KitchenInclude<ExtArgs> | null
    where?: KitchenWhereInput
    orderBy?: KitchenOrderByWithRelationInput | KitchenOrderByWithRelationInput[]
    cursor?: KitchenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: KitchenScalarFieldEnum | KitchenScalarFieldEnum[]
  }

  /**
   * restaurants without action
   */
  export type restaurantsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurants
     */
    select?: restaurantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the restaurants
     */
    omit?: restaurantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: restaurantsInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    message: string | null
    isRead: boolean | null
    createdAt: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    message: string | null
    isRead: boolean | null
    createdAt: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    message: number
    isRead: number
    createdAt: number
    _all: number
  }


  export type NotificationMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    message?: true
    isRead?: true
    createdAt?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    message?: true
    isRead?: true
    createdAt?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    message?: true
    isRead?: true
    createdAt?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: string
    userId: string
    type: string
    message: string
    isRead: boolean
    createdAt: Date
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    message?: boolean
    isRead?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    message?: boolean
    isRead?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    message?: boolean
    isRead?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    message?: boolean
    isRead?: boolean
    createdAt?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "message" | "isRead" | "createdAt", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      message: string
      isRead: boolean
      createdAt: Date
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
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
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'String'>
    readonly userId: FieldRef<"Notification", 'String'>
    readonly type: FieldRef<"Notification", 'String'>
    readonly message: FieldRef<"Notification", 'String'>
    readonly isRead: FieldRef<"Notification", 'Boolean'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification updateManyAndReturn
   */
  export type NotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Model Orders
   */

  export type AggregateOrders = {
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  export type OrdersAvgAggregateOutputType = {
    id: number | null
    total: number | null
  }

  export type OrdersSumAggregateOutputType = {
    id: number | null
    total: number | null
  }

  export type OrdersMinAggregateOutputType = {
    id: number | null
    userId: string | null
    tableId: string | null
    status: $Enums.OrderStatus | null
    total: number | null
    restaurantId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrdersMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    tableId: string | null
    status: $Enums.OrderStatus | null
    total: number | null
    restaurantId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrdersCountAggregateOutputType = {
    id: number
    userId: number
    tableId: number
    status: number
    total: number
    restaurantId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrdersAvgAggregateInputType = {
    id?: true
    total?: true
  }

  export type OrdersSumAggregateInputType = {
    id?: true
    total?: true
  }

  export type OrdersMinAggregateInputType = {
    id?: true
    userId?: true
    tableId?: true
    status?: true
    total?: true
    restaurantId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrdersMaxAggregateInputType = {
    id?: true
    userId?: true
    tableId?: true
    status?: true
    total?: true
    restaurantId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrdersCountAggregateInputType = {
    id?: true
    userId?: true
    tableId?: true
    status?: true
    total?: true
    restaurantId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrdersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to aggregate.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrdersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrdersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrdersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrdersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrdersMaxAggregateInputType
  }

  export type GetOrdersAggregateType<T extends OrdersAggregateArgs> = {
        [P in keyof T & keyof AggregateOrders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrders[P]>
      : GetScalarType<T[P], AggregateOrders[P]>
  }




  export type OrdersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdersWhereInput
    orderBy?: OrdersOrderByWithAggregationInput | OrdersOrderByWithAggregationInput[]
    by: OrdersScalarFieldEnum[] | OrdersScalarFieldEnum
    having?: OrdersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrdersCountAggregateInputType | true
    _avg?: OrdersAvgAggregateInputType
    _sum?: OrdersSumAggregateInputType
    _min?: OrdersMinAggregateInputType
    _max?: OrdersMaxAggregateInputType
  }

  export type OrdersGroupByOutputType = {
    id: number
    userId: string
    tableId: string
    status: $Enums.OrderStatus
    total: number
    restaurantId: string
    createdAt: Date
    updatedAt: Date
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  type GetOrdersGroupByPayload<T extends OrdersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrdersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrdersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrdersGroupByOutputType[P]>
            : GetScalarType<T[P], OrdersGroupByOutputType[P]>
        }
      >
    >


  export type OrdersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tableId?: boolean
    status?: boolean
    total?: boolean
    restaurantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    table?: boolean | tablesDefaultArgs<ExtArgs>
    Order_Item?: boolean | Orders$Order_ItemArgs<ExtArgs>
    payment?: boolean | Orders$paymentArgs<ExtArgs>
    restaurant?: boolean | restaurantsDefaultArgs<ExtArgs>
    _count?: boolean | OrdersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type OrdersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tableId?: boolean
    status?: boolean
    total?: boolean
    restaurantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    table?: boolean | tablesDefaultArgs<ExtArgs>
    restaurant?: boolean | restaurantsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type OrdersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tableId?: boolean
    status?: boolean
    total?: boolean
    restaurantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    table?: boolean | tablesDefaultArgs<ExtArgs>
    restaurant?: boolean | restaurantsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type OrdersSelectScalar = {
    id?: boolean
    userId?: boolean
    tableId?: boolean
    status?: boolean
    total?: boolean
    restaurantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrdersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "tableId" | "status" | "total" | "restaurantId" | "createdAt" | "updatedAt", ExtArgs["result"]["orders"]>
  export type OrdersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    table?: boolean | tablesDefaultArgs<ExtArgs>
    Order_Item?: boolean | Orders$Order_ItemArgs<ExtArgs>
    payment?: boolean | Orders$paymentArgs<ExtArgs>
    restaurant?: boolean | restaurantsDefaultArgs<ExtArgs>
    _count?: boolean | OrdersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrdersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    table?: boolean | tablesDefaultArgs<ExtArgs>
    restaurant?: boolean | restaurantsDefaultArgs<ExtArgs>
  }
  export type OrdersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    table?: boolean | tablesDefaultArgs<ExtArgs>
    restaurant?: boolean | restaurantsDefaultArgs<ExtArgs>
  }

  export type $OrdersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Orders"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      table: Prisma.$tablesPayload<ExtArgs>
      Order_Item: Prisma.$Order_ItemPayload<ExtArgs>[]
      payment: Prisma.$paymentPayload<ExtArgs>[]
      restaurant: Prisma.$restaurantsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      tableId: string
      status: $Enums.OrderStatus
      total: number
      restaurantId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["orders"]>
    composites: {}
  }

  type OrdersGetPayload<S extends boolean | null | undefined | OrdersDefaultArgs> = $Result.GetResult<Prisma.$OrdersPayload, S>

  type OrdersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrdersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrdersCountAggregateInputType | true
    }

  export interface OrdersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Orders'], meta: { name: 'Orders' } }
    /**
     * Find zero or one Orders that matches the filter.
     * @param {OrdersFindUniqueArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrdersFindUniqueArgs>(args: SelectSubset<T, OrdersFindUniqueArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Orders that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrdersFindUniqueOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrdersFindUniqueOrThrowArgs>(args: SelectSubset<T, OrdersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindFirstArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrdersFindFirstArgs>(args?: SelectSubset<T, OrdersFindFirstArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindFirstOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrdersFindFirstOrThrowArgs>(args?: SelectSubset<T, OrdersFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.orders.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.orders.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ordersWithIdOnly = await prisma.orders.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrdersFindManyArgs>(args?: SelectSubset<T, OrdersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Orders.
     * @param {OrdersCreateArgs} args - Arguments to create a Orders.
     * @example
     * // Create one Orders
     * const Orders = await prisma.orders.create({
     *   data: {
     *     // ... data to create a Orders
     *   }
     * })
     * 
     */
    create<T extends OrdersCreateArgs>(args: SelectSubset<T, OrdersCreateArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrdersCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrdersCreateManyArgs>(args?: SelectSubset<T, OrdersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrdersCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const ordersWithIdOnly = await prisma.orders.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrdersCreateManyAndReturnArgs>(args?: SelectSubset<T, OrdersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Orders.
     * @param {OrdersDeleteArgs} args - Arguments to delete one Orders.
     * @example
     * // Delete one Orders
     * const Orders = await prisma.orders.delete({
     *   where: {
     *     // ... filter to delete one Orders
     *   }
     * })
     * 
     */
    delete<T extends OrdersDeleteArgs>(args: SelectSubset<T, OrdersDeleteArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Orders.
     * @param {OrdersUpdateArgs} args - Arguments to update one Orders.
     * @example
     * // Update one Orders
     * const orders = await prisma.orders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrdersUpdateArgs>(args: SelectSubset<T, OrdersUpdateArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrdersDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.orders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrdersDeleteManyArgs>(args?: SelectSubset<T, OrdersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrdersUpdateManyArgs>(args: SelectSubset<T, OrdersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {OrdersUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id`
     * const ordersWithIdOnly = await prisma.orders.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrdersUpdateManyAndReturnArgs>(args: SelectSubset<T, OrdersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Orders.
     * @param {OrdersUpsertArgs} args - Arguments to update or create a Orders.
     * @example
     * // Update or create a Orders
     * const orders = await prisma.orders.upsert({
     *   create: {
     *     // ... data to create a Orders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Orders we want to update
     *   }
     * })
     */
    upsert<T extends OrdersUpsertArgs>(args: SelectSubset<T, OrdersUpsertArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.orders.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrdersCountArgs>(
      args?: Subset<T, OrdersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrdersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrdersAggregateArgs>(args: Subset<T, OrdersAggregateArgs>): Prisma.PrismaPromise<GetOrdersAggregateType<T>>

    /**
     * Group by Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersGroupByArgs} args - Group by arguments.
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
      T extends OrdersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrdersGroupByArgs['orderBy'] }
        : { orderBy?: OrdersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrdersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrdersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Orders model
   */
  readonly fields: OrdersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Orders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrdersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    table<T extends tablesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tablesDefaultArgs<ExtArgs>>): Prisma__tablesClient<$Result.GetResult<Prisma.$tablesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Order_Item<T extends Orders$Order_ItemArgs<ExtArgs> = {}>(args?: Subset<T, Orders$Order_ItemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Order_ItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payment<T extends Orders$paymentArgs<ExtArgs> = {}>(args?: Subset<T, Orders$paymentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    restaurant<T extends restaurantsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, restaurantsDefaultArgs<ExtArgs>>): Prisma__restaurantsClient<$Result.GetResult<Prisma.$restaurantsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Orders model
   */
  interface OrdersFieldRefs {
    readonly id: FieldRef<"Orders", 'Int'>
    readonly userId: FieldRef<"Orders", 'String'>
    readonly tableId: FieldRef<"Orders", 'String'>
    readonly status: FieldRef<"Orders", 'OrderStatus'>
    readonly total: FieldRef<"Orders", 'Float'>
    readonly restaurantId: FieldRef<"Orders", 'String'>
    readonly createdAt: FieldRef<"Orders", 'DateTime'>
    readonly updatedAt: FieldRef<"Orders", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Orders findUnique
   */
  export type OrdersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders findUniqueOrThrow
   */
  export type OrdersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders findFirst
   */
  export type OrdersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Orders findFirstOrThrow
   */
  export type OrdersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Orders findMany
   */
  export type OrdersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Orders create
   */
  export type OrdersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * The data needed to create a Orders.
     */
    data: XOR<OrdersCreateInput, OrdersUncheckedCreateInput>
  }

  /**
   * Orders createMany
   */
  export type OrdersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrdersCreateManyInput | OrdersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Orders createManyAndReturn
   */
  export type OrdersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrdersCreateManyInput | OrdersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Orders update
   */
  export type OrdersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * The data needed to update a Orders.
     */
    data: XOR<OrdersUpdateInput, OrdersUncheckedUpdateInput>
    /**
     * Choose, which Orders to update.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders updateMany
   */
  export type OrdersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrdersWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Orders updateManyAndReturn
   */
  export type OrdersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * The data used to update Orders.
     */
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrdersWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Orders upsert
   */
  export type OrdersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * The filter to search for the Orders to update in case it exists.
     */
    where: OrdersWhereUniqueInput
    /**
     * In case the Orders found by the `where` argument doesn't exist, create a new Orders with this data.
     */
    create: XOR<OrdersCreateInput, OrdersUncheckedCreateInput>
    /**
     * In case the Orders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrdersUpdateInput, OrdersUncheckedUpdateInput>
  }

  /**
   * Orders delete
   */
  export type OrdersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter which Orders to delete.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders deleteMany
   */
  export type OrdersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrdersWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Orders.Order_Item
   */
  export type Orders$Order_ItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order_Item
     */
    select?: Order_ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order_Item
     */
    omit?: Order_ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Order_ItemInclude<ExtArgs> | null
    where?: Order_ItemWhereInput
    orderBy?: Order_ItemOrderByWithRelationInput | Order_ItemOrderByWithRelationInput[]
    cursor?: Order_ItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Order_ItemScalarFieldEnum | Order_ItemScalarFieldEnum[]
  }

  /**
   * Orders.payment
   */
  export type Orders$paymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
    where?: paymentWhereInput
    orderBy?: paymentOrderByWithRelationInput | paymentOrderByWithRelationInput[]
    cursor?: paymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Orders without action
   */
  export type OrdersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
  }


  /**
   * Model tables
   */

  export type AggregateTables = {
    _count: TablesCountAggregateOutputType | null
    _avg: TablesAvgAggregateOutputType | null
    _sum: TablesSumAggregateOutputType | null
    _min: TablesMinAggregateOutputType | null
    _max: TablesMaxAggregateOutputType | null
  }

  export type TablesAvgAggregateOutputType = {
    number: number | null
    capacity: number | null
  }

  export type TablesSumAggregateOutputType = {
    number: number | null
    capacity: number | null
  }

  export type TablesMinAggregateOutputType = {
    id: string | null
    number: number | null
    capacity: number | null
    restaurantId: string | null
    qrCodeUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TablesMaxAggregateOutputType = {
    id: string | null
    number: number | null
    capacity: number | null
    restaurantId: string | null
    qrCodeUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TablesCountAggregateOutputType = {
    id: number
    number: number
    capacity: number
    restaurantId: number
    qrCodeUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TablesAvgAggregateInputType = {
    number?: true
    capacity?: true
  }

  export type TablesSumAggregateInputType = {
    number?: true
    capacity?: true
  }

  export type TablesMinAggregateInputType = {
    id?: true
    number?: true
    capacity?: true
    restaurantId?: true
    qrCodeUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TablesMaxAggregateInputType = {
    id?: true
    number?: true
    capacity?: true
    restaurantId?: true
    qrCodeUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TablesCountAggregateInputType = {
    id?: true
    number?: true
    capacity?: true
    restaurantId?: true
    qrCodeUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TablesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tables to aggregate.
     */
    where?: tablesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tables to fetch.
     */
    orderBy?: tablesOrderByWithRelationInput | tablesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tablesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tables
    **/
    _count?: true | TablesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TablesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TablesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TablesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TablesMaxAggregateInputType
  }

  export type GetTablesAggregateType<T extends TablesAggregateArgs> = {
        [P in keyof T & keyof AggregateTables]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTables[P]>
      : GetScalarType<T[P], AggregateTables[P]>
  }




  export type tablesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tablesWhereInput
    orderBy?: tablesOrderByWithAggregationInput | tablesOrderByWithAggregationInput[]
    by: TablesScalarFieldEnum[] | TablesScalarFieldEnum
    having?: tablesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TablesCountAggregateInputType | true
    _avg?: TablesAvgAggregateInputType
    _sum?: TablesSumAggregateInputType
    _min?: TablesMinAggregateInputType
    _max?: TablesMaxAggregateInputType
  }

  export type TablesGroupByOutputType = {
    id: string
    number: number
    capacity: number
    restaurantId: string
    qrCodeUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: TablesCountAggregateOutputType | null
    _avg: TablesAvgAggregateOutputType | null
    _sum: TablesSumAggregateOutputType | null
    _min: TablesMinAggregateOutputType | null
    _max: TablesMaxAggregateOutputType | null
  }

  type GetTablesGroupByPayload<T extends tablesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TablesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TablesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TablesGroupByOutputType[P]>
            : GetScalarType<T[P], TablesGroupByOutputType[P]>
        }
      >
    >


  export type tablesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    number?: boolean
    capacity?: boolean
    restaurantId?: boolean
    qrCodeUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    restaurant?: boolean | restaurantsDefaultArgs<ExtArgs>
    Orders?: boolean | tables$OrdersArgs<ExtArgs>
    _count?: boolean | TablesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tables"]>

  export type tablesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    number?: boolean
    capacity?: boolean
    restaurantId?: boolean
    qrCodeUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    restaurant?: boolean | restaurantsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tables"]>

  export type tablesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    number?: boolean
    capacity?: boolean
    restaurantId?: boolean
    qrCodeUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    restaurant?: boolean | restaurantsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tables"]>

  export type tablesSelectScalar = {
    id?: boolean
    number?: boolean
    capacity?: boolean
    restaurantId?: boolean
    qrCodeUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type tablesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "number" | "capacity" | "restaurantId" | "qrCodeUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["tables"]>
  export type tablesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurant?: boolean | restaurantsDefaultArgs<ExtArgs>
    Orders?: boolean | tables$OrdersArgs<ExtArgs>
    _count?: boolean | TablesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type tablesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurant?: boolean | restaurantsDefaultArgs<ExtArgs>
  }
  export type tablesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurant?: boolean | restaurantsDefaultArgs<ExtArgs>
  }

  export type $tablesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tables"
    objects: {
      restaurant: Prisma.$restaurantsPayload<ExtArgs>
      Orders: Prisma.$OrdersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      number: number
      capacity: number
      restaurantId: string
      qrCodeUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tables"]>
    composites: {}
  }

  type tablesGetPayload<S extends boolean | null | undefined | tablesDefaultArgs> = $Result.GetResult<Prisma.$tablesPayload, S>

  type tablesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tablesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TablesCountAggregateInputType | true
    }

  export interface tablesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tables'], meta: { name: 'tables' } }
    /**
     * Find zero or one Tables that matches the filter.
     * @param {tablesFindUniqueArgs} args - Arguments to find a Tables
     * @example
     * // Get one Tables
     * const tables = await prisma.tables.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tablesFindUniqueArgs>(args: SelectSubset<T, tablesFindUniqueArgs<ExtArgs>>): Prisma__tablesClient<$Result.GetResult<Prisma.$tablesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tables that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tablesFindUniqueOrThrowArgs} args - Arguments to find a Tables
     * @example
     * // Get one Tables
     * const tables = await prisma.tables.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tablesFindUniqueOrThrowArgs>(args: SelectSubset<T, tablesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tablesClient<$Result.GetResult<Prisma.$tablesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tablesFindFirstArgs} args - Arguments to find a Tables
     * @example
     * // Get one Tables
     * const tables = await prisma.tables.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tablesFindFirstArgs>(args?: SelectSubset<T, tablesFindFirstArgs<ExtArgs>>): Prisma__tablesClient<$Result.GetResult<Prisma.$tablesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tables that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tablesFindFirstOrThrowArgs} args - Arguments to find a Tables
     * @example
     * // Get one Tables
     * const tables = await prisma.tables.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tablesFindFirstOrThrowArgs>(args?: SelectSubset<T, tablesFindFirstOrThrowArgs<ExtArgs>>): Prisma__tablesClient<$Result.GetResult<Prisma.$tablesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tablesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tables
     * const tables = await prisma.tables.findMany()
     * 
     * // Get first 10 Tables
     * const tables = await prisma.tables.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tablesWithIdOnly = await prisma.tables.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tablesFindManyArgs>(args?: SelectSubset<T, tablesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tablesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tables.
     * @param {tablesCreateArgs} args - Arguments to create a Tables.
     * @example
     * // Create one Tables
     * const Tables = await prisma.tables.create({
     *   data: {
     *     // ... data to create a Tables
     *   }
     * })
     * 
     */
    create<T extends tablesCreateArgs>(args: SelectSubset<T, tablesCreateArgs<ExtArgs>>): Prisma__tablesClient<$Result.GetResult<Prisma.$tablesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tables.
     * @param {tablesCreateManyArgs} args - Arguments to create many Tables.
     * @example
     * // Create many Tables
     * const tables = await prisma.tables.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tablesCreateManyArgs>(args?: SelectSubset<T, tablesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tables and returns the data saved in the database.
     * @param {tablesCreateManyAndReturnArgs} args - Arguments to create many Tables.
     * @example
     * // Create many Tables
     * const tables = await prisma.tables.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tables and only return the `id`
     * const tablesWithIdOnly = await prisma.tables.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tablesCreateManyAndReturnArgs>(args?: SelectSubset<T, tablesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tablesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tables.
     * @param {tablesDeleteArgs} args - Arguments to delete one Tables.
     * @example
     * // Delete one Tables
     * const Tables = await prisma.tables.delete({
     *   where: {
     *     // ... filter to delete one Tables
     *   }
     * })
     * 
     */
    delete<T extends tablesDeleteArgs>(args: SelectSubset<T, tablesDeleteArgs<ExtArgs>>): Prisma__tablesClient<$Result.GetResult<Prisma.$tablesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tables.
     * @param {tablesUpdateArgs} args - Arguments to update one Tables.
     * @example
     * // Update one Tables
     * const tables = await prisma.tables.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tablesUpdateArgs>(args: SelectSubset<T, tablesUpdateArgs<ExtArgs>>): Prisma__tablesClient<$Result.GetResult<Prisma.$tablesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tables.
     * @param {tablesDeleteManyArgs} args - Arguments to filter Tables to delete.
     * @example
     * // Delete a few Tables
     * const { count } = await prisma.tables.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tablesDeleteManyArgs>(args?: SelectSubset<T, tablesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tablesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tables
     * const tables = await prisma.tables.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tablesUpdateManyArgs>(args: SelectSubset<T, tablesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tables and returns the data updated in the database.
     * @param {tablesUpdateManyAndReturnArgs} args - Arguments to update many Tables.
     * @example
     * // Update many Tables
     * const tables = await prisma.tables.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tables and only return the `id`
     * const tablesWithIdOnly = await prisma.tables.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends tablesUpdateManyAndReturnArgs>(args: SelectSubset<T, tablesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tablesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tables.
     * @param {tablesUpsertArgs} args - Arguments to update or create a Tables.
     * @example
     * // Update or create a Tables
     * const tables = await prisma.tables.upsert({
     *   create: {
     *     // ... data to create a Tables
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tables we want to update
     *   }
     * })
     */
    upsert<T extends tablesUpsertArgs>(args: SelectSubset<T, tablesUpsertArgs<ExtArgs>>): Prisma__tablesClient<$Result.GetResult<Prisma.$tablesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tablesCountArgs} args - Arguments to filter Tables to count.
     * @example
     * // Count the number of Tables
     * const count = await prisma.tables.count({
     *   where: {
     *     // ... the filter for the Tables we want to count
     *   }
     * })
    **/
    count<T extends tablesCountArgs>(
      args?: Subset<T, tablesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TablesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TablesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TablesAggregateArgs>(args: Subset<T, TablesAggregateArgs>): Prisma.PrismaPromise<GetTablesAggregateType<T>>

    /**
     * Group by Tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tablesGroupByArgs} args - Group by arguments.
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
      T extends tablesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tablesGroupByArgs['orderBy'] }
        : { orderBy?: tablesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tablesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTablesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tables model
   */
  readonly fields: tablesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tables.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tablesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    restaurant<T extends restaurantsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, restaurantsDefaultArgs<ExtArgs>>): Prisma__restaurantsClient<$Result.GetResult<Prisma.$restaurantsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Orders<T extends tables$OrdersArgs<ExtArgs> = {}>(args?: Subset<T, tables$OrdersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the tables model
   */
  interface tablesFieldRefs {
    readonly id: FieldRef<"tables", 'String'>
    readonly number: FieldRef<"tables", 'Int'>
    readonly capacity: FieldRef<"tables", 'Int'>
    readonly restaurantId: FieldRef<"tables", 'String'>
    readonly qrCodeUrl: FieldRef<"tables", 'String'>
    readonly createdAt: FieldRef<"tables", 'DateTime'>
    readonly updatedAt: FieldRef<"tables", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * tables findUnique
   */
  export type tablesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tables
     */
    select?: tablesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tables
     */
    omit?: tablesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tablesInclude<ExtArgs> | null
    /**
     * Filter, which tables to fetch.
     */
    where: tablesWhereUniqueInput
  }

  /**
   * tables findUniqueOrThrow
   */
  export type tablesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tables
     */
    select?: tablesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tables
     */
    omit?: tablesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tablesInclude<ExtArgs> | null
    /**
     * Filter, which tables to fetch.
     */
    where: tablesWhereUniqueInput
  }

  /**
   * tables findFirst
   */
  export type tablesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tables
     */
    select?: tablesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tables
     */
    omit?: tablesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tablesInclude<ExtArgs> | null
    /**
     * Filter, which tables to fetch.
     */
    where?: tablesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tables to fetch.
     */
    orderBy?: tablesOrderByWithRelationInput | tablesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tables.
     */
    cursor?: tablesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tables.
     */
    distinct?: TablesScalarFieldEnum | TablesScalarFieldEnum[]
  }

  /**
   * tables findFirstOrThrow
   */
  export type tablesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tables
     */
    select?: tablesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tables
     */
    omit?: tablesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tablesInclude<ExtArgs> | null
    /**
     * Filter, which tables to fetch.
     */
    where?: tablesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tables to fetch.
     */
    orderBy?: tablesOrderByWithRelationInput | tablesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tables.
     */
    cursor?: tablesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tables.
     */
    distinct?: TablesScalarFieldEnum | TablesScalarFieldEnum[]
  }

  /**
   * tables findMany
   */
  export type tablesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tables
     */
    select?: tablesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tables
     */
    omit?: tablesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tablesInclude<ExtArgs> | null
    /**
     * Filter, which tables to fetch.
     */
    where?: tablesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tables to fetch.
     */
    orderBy?: tablesOrderByWithRelationInput | tablesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tables.
     */
    cursor?: tablesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tables.
     */
    skip?: number
    distinct?: TablesScalarFieldEnum | TablesScalarFieldEnum[]
  }

  /**
   * tables create
   */
  export type tablesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tables
     */
    select?: tablesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tables
     */
    omit?: tablesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tablesInclude<ExtArgs> | null
    /**
     * The data needed to create a tables.
     */
    data: XOR<tablesCreateInput, tablesUncheckedCreateInput>
  }

  /**
   * tables createMany
   */
  export type tablesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tables.
     */
    data: tablesCreateManyInput | tablesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tables createManyAndReturn
   */
  export type tablesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tables
     */
    select?: tablesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tables
     */
    omit?: tablesOmit<ExtArgs> | null
    /**
     * The data used to create many tables.
     */
    data: tablesCreateManyInput | tablesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tablesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * tables update
   */
  export type tablesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tables
     */
    select?: tablesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tables
     */
    omit?: tablesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tablesInclude<ExtArgs> | null
    /**
     * The data needed to update a tables.
     */
    data: XOR<tablesUpdateInput, tablesUncheckedUpdateInput>
    /**
     * Choose, which tables to update.
     */
    where: tablesWhereUniqueInput
  }

  /**
   * tables updateMany
   */
  export type tablesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tables.
     */
    data: XOR<tablesUpdateManyMutationInput, tablesUncheckedUpdateManyInput>
    /**
     * Filter which tables to update
     */
    where?: tablesWhereInput
    /**
     * Limit how many tables to update.
     */
    limit?: number
  }

  /**
   * tables updateManyAndReturn
   */
  export type tablesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tables
     */
    select?: tablesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tables
     */
    omit?: tablesOmit<ExtArgs> | null
    /**
     * The data used to update tables.
     */
    data: XOR<tablesUpdateManyMutationInput, tablesUncheckedUpdateManyInput>
    /**
     * Filter which tables to update
     */
    where?: tablesWhereInput
    /**
     * Limit how many tables to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tablesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * tables upsert
   */
  export type tablesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tables
     */
    select?: tablesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tables
     */
    omit?: tablesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tablesInclude<ExtArgs> | null
    /**
     * The filter to search for the tables to update in case it exists.
     */
    where: tablesWhereUniqueInput
    /**
     * In case the tables found by the `where` argument doesn't exist, create a new tables with this data.
     */
    create: XOR<tablesCreateInput, tablesUncheckedCreateInput>
    /**
     * In case the tables was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tablesUpdateInput, tablesUncheckedUpdateInput>
  }

  /**
   * tables delete
   */
  export type tablesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tables
     */
    select?: tablesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tables
     */
    omit?: tablesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tablesInclude<ExtArgs> | null
    /**
     * Filter which tables to delete.
     */
    where: tablesWhereUniqueInput
  }

  /**
   * tables deleteMany
   */
  export type tablesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tables to delete
     */
    where?: tablesWhereInput
    /**
     * Limit how many tables to delete.
     */
    limit?: number
  }

  /**
   * tables.Orders
   */
  export type tables$OrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    where?: OrdersWhereInput
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    cursor?: OrdersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * tables without action
   */
  export type tablesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tables
     */
    select?: tablesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tables
     */
    omit?: tablesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tablesInclude<ExtArgs> | null
  }


  /**
   * Model Order_Item
   */

  export type AggregateOrder_Item = {
    _count: Order_ItemCountAggregateOutputType | null
    _avg: Order_ItemAvgAggregateOutputType | null
    _sum: Order_ItemSumAggregateOutputType | null
    _min: Order_ItemMinAggregateOutputType | null
    _max: Order_ItemMaxAggregateOutputType | null
  }

  export type Order_ItemAvgAggregateOutputType = {
    orderId: number | null
    quantity: number | null
    price: number | null
  }

  export type Order_ItemSumAggregateOutputType = {
    orderId: number | null
    quantity: number | null
    price: number | null
  }

  export type Order_ItemMinAggregateOutputType = {
    id: string | null
    orderId: number | null
    menuItemId: string | null
    quantity: number | null
    price: number | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Order_ItemMaxAggregateOutputType = {
    id: string | null
    orderId: number | null
    menuItemId: string | null
    quantity: number | null
    price: number | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Order_ItemCountAggregateOutputType = {
    id: number
    orderId: number
    menuItemId: number
    quantity: number
    price: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Order_ItemAvgAggregateInputType = {
    orderId?: true
    quantity?: true
    price?: true
  }

  export type Order_ItemSumAggregateInputType = {
    orderId?: true
    quantity?: true
    price?: true
  }

  export type Order_ItemMinAggregateInputType = {
    id?: true
    orderId?: true
    menuItemId?: true
    quantity?: true
    price?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Order_ItemMaxAggregateInputType = {
    id?: true
    orderId?: true
    menuItemId?: true
    quantity?: true
    price?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Order_ItemCountAggregateInputType = {
    id?: true
    orderId?: true
    menuItemId?: true
    quantity?: true
    price?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Order_ItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order_Item to aggregate.
     */
    where?: Order_ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Order_Items to fetch.
     */
    orderBy?: Order_ItemOrderByWithRelationInput | Order_ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Order_ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Order_Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Order_Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Order_Items
    **/
    _count?: true | Order_ItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Order_ItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Order_ItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Order_ItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Order_ItemMaxAggregateInputType
  }

  export type GetOrder_ItemAggregateType<T extends Order_ItemAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder_Item]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder_Item[P]>
      : GetScalarType<T[P], AggregateOrder_Item[P]>
  }




  export type Order_ItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Order_ItemWhereInput
    orderBy?: Order_ItemOrderByWithAggregationInput | Order_ItemOrderByWithAggregationInput[]
    by: Order_ItemScalarFieldEnum[] | Order_ItemScalarFieldEnum
    having?: Order_ItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Order_ItemCountAggregateInputType | true
    _avg?: Order_ItemAvgAggregateInputType
    _sum?: Order_ItemSumAggregateInputType
    _min?: Order_ItemMinAggregateInputType
    _max?: Order_ItemMaxAggregateInputType
  }

  export type Order_ItemGroupByOutputType = {
    id: string
    orderId: number
    menuItemId: string
    quantity: number
    price: number
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: Order_ItemCountAggregateOutputType | null
    _avg: Order_ItemAvgAggregateOutputType | null
    _sum: Order_ItemSumAggregateOutputType | null
    _min: Order_ItemMinAggregateOutputType | null
    _max: Order_ItemMaxAggregateOutputType | null
  }

  type GetOrder_ItemGroupByPayload<T extends Order_ItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Order_ItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Order_ItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Order_ItemGroupByOutputType[P]>
            : GetScalarType<T[P], Order_ItemGroupByOutputType[P]>
        }
      >
    >


  export type Order_ItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    menuItemId?: boolean
    quantity?: boolean
    price?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    order?: boolean | OrdersDefaultArgs<ExtArgs>
    menuItem?: boolean | menuItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order_Item"]>

  export type Order_ItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    menuItemId?: boolean
    quantity?: boolean
    price?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    order?: boolean | OrdersDefaultArgs<ExtArgs>
    menuItem?: boolean | menuItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order_Item"]>

  export type Order_ItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    menuItemId?: boolean
    quantity?: boolean
    price?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    order?: boolean | OrdersDefaultArgs<ExtArgs>
    menuItem?: boolean | menuItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order_Item"]>

  export type Order_ItemSelectScalar = {
    id?: boolean
    orderId?: boolean
    menuItemId?: boolean
    quantity?: boolean
    price?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type Order_ItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderId" | "menuItemId" | "quantity" | "price" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["order_Item"]>
  export type Order_ItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrdersDefaultArgs<ExtArgs>
    menuItem?: boolean | menuItemDefaultArgs<ExtArgs>
  }
  export type Order_ItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrdersDefaultArgs<ExtArgs>
    menuItem?: boolean | menuItemDefaultArgs<ExtArgs>
  }
  export type Order_ItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrdersDefaultArgs<ExtArgs>
    menuItem?: boolean | menuItemDefaultArgs<ExtArgs>
  }

  export type $Order_ItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order_Item"
    objects: {
      order: Prisma.$OrdersPayload<ExtArgs>
      menuItem: Prisma.$menuItemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderId: number
      menuItemId: string
      quantity: number
      price: number
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["order_Item"]>
    composites: {}
  }

  type Order_ItemGetPayload<S extends boolean | null | undefined | Order_ItemDefaultArgs> = $Result.GetResult<Prisma.$Order_ItemPayload, S>

  type Order_ItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Order_ItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Order_ItemCountAggregateInputType | true
    }

  export interface Order_ItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order_Item'], meta: { name: 'Order_Item' } }
    /**
     * Find zero or one Order_Item that matches the filter.
     * @param {Order_ItemFindUniqueArgs} args - Arguments to find a Order_Item
     * @example
     * // Get one Order_Item
     * const order_Item = await prisma.order_Item.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Order_ItemFindUniqueArgs>(args: SelectSubset<T, Order_ItemFindUniqueArgs<ExtArgs>>): Prisma__Order_ItemClient<$Result.GetResult<Prisma.$Order_ItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order_Item that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Order_ItemFindUniqueOrThrowArgs} args - Arguments to find a Order_Item
     * @example
     * // Get one Order_Item
     * const order_Item = await prisma.order_Item.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Order_ItemFindUniqueOrThrowArgs>(args: SelectSubset<T, Order_ItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Order_ItemClient<$Result.GetResult<Prisma.$Order_ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order_Item that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Order_ItemFindFirstArgs} args - Arguments to find a Order_Item
     * @example
     * // Get one Order_Item
     * const order_Item = await prisma.order_Item.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Order_ItemFindFirstArgs>(args?: SelectSubset<T, Order_ItemFindFirstArgs<ExtArgs>>): Prisma__Order_ItemClient<$Result.GetResult<Prisma.$Order_ItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order_Item that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Order_ItemFindFirstOrThrowArgs} args - Arguments to find a Order_Item
     * @example
     * // Get one Order_Item
     * const order_Item = await prisma.order_Item.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Order_ItemFindFirstOrThrowArgs>(args?: SelectSubset<T, Order_ItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__Order_ItemClient<$Result.GetResult<Prisma.$Order_ItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Order_Items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Order_ItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Order_Items
     * const order_Items = await prisma.order_Item.findMany()
     * 
     * // Get first 10 Order_Items
     * const order_Items = await prisma.order_Item.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const order_ItemWithIdOnly = await prisma.order_Item.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Order_ItemFindManyArgs>(args?: SelectSubset<T, Order_ItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Order_ItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order_Item.
     * @param {Order_ItemCreateArgs} args - Arguments to create a Order_Item.
     * @example
     * // Create one Order_Item
     * const Order_Item = await prisma.order_Item.create({
     *   data: {
     *     // ... data to create a Order_Item
     *   }
     * })
     * 
     */
    create<T extends Order_ItemCreateArgs>(args: SelectSubset<T, Order_ItemCreateArgs<ExtArgs>>): Prisma__Order_ItemClient<$Result.GetResult<Prisma.$Order_ItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Order_Items.
     * @param {Order_ItemCreateManyArgs} args - Arguments to create many Order_Items.
     * @example
     * // Create many Order_Items
     * const order_Item = await prisma.order_Item.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Order_ItemCreateManyArgs>(args?: SelectSubset<T, Order_ItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Order_Items and returns the data saved in the database.
     * @param {Order_ItemCreateManyAndReturnArgs} args - Arguments to create many Order_Items.
     * @example
     * // Create many Order_Items
     * const order_Item = await prisma.order_Item.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Order_Items and only return the `id`
     * const order_ItemWithIdOnly = await prisma.order_Item.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Order_ItemCreateManyAndReturnArgs>(args?: SelectSubset<T, Order_ItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Order_ItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Order_Item.
     * @param {Order_ItemDeleteArgs} args - Arguments to delete one Order_Item.
     * @example
     * // Delete one Order_Item
     * const Order_Item = await prisma.order_Item.delete({
     *   where: {
     *     // ... filter to delete one Order_Item
     *   }
     * })
     * 
     */
    delete<T extends Order_ItemDeleteArgs>(args: SelectSubset<T, Order_ItemDeleteArgs<ExtArgs>>): Prisma__Order_ItemClient<$Result.GetResult<Prisma.$Order_ItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order_Item.
     * @param {Order_ItemUpdateArgs} args - Arguments to update one Order_Item.
     * @example
     * // Update one Order_Item
     * const order_Item = await prisma.order_Item.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Order_ItemUpdateArgs>(args: SelectSubset<T, Order_ItemUpdateArgs<ExtArgs>>): Prisma__Order_ItemClient<$Result.GetResult<Prisma.$Order_ItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Order_Items.
     * @param {Order_ItemDeleteManyArgs} args - Arguments to filter Order_Items to delete.
     * @example
     * // Delete a few Order_Items
     * const { count } = await prisma.order_Item.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Order_ItemDeleteManyArgs>(args?: SelectSubset<T, Order_ItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Order_Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Order_ItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Order_Items
     * const order_Item = await prisma.order_Item.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Order_ItemUpdateManyArgs>(args: SelectSubset<T, Order_ItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Order_Items and returns the data updated in the database.
     * @param {Order_ItemUpdateManyAndReturnArgs} args - Arguments to update many Order_Items.
     * @example
     * // Update many Order_Items
     * const order_Item = await prisma.order_Item.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Order_Items and only return the `id`
     * const order_ItemWithIdOnly = await prisma.order_Item.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Order_ItemUpdateManyAndReturnArgs>(args: SelectSubset<T, Order_ItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Order_ItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Order_Item.
     * @param {Order_ItemUpsertArgs} args - Arguments to update or create a Order_Item.
     * @example
     * // Update or create a Order_Item
     * const order_Item = await prisma.order_Item.upsert({
     *   create: {
     *     // ... data to create a Order_Item
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order_Item we want to update
     *   }
     * })
     */
    upsert<T extends Order_ItemUpsertArgs>(args: SelectSubset<T, Order_ItemUpsertArgs<ExtArgs>>): Prisma__Order_ItemClient<$Result.GetResult<Prisma.$Order_ItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Order_Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Order_ItemCountArgs} args - Arguments to filter Order_Items to count.
     * @example
     * // Count the number of Order_Items
     * const count = await prisma.order_Item.count({
     *   where: {
     *     // ... the filter for the Order_Items we want to count
     *   }
     * })
    **/
    count<T extends Order_ItemCountArgs>(
      args?: Subset<T, Order_ItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Order_ItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order_Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Order_ItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Order_ItemAggregateArgs>(args: Subset<T, Order_ItemAggregateArgs>): Prisma.PrismaPromise<GetOrder_ItemAggregateType<T>>

    /**
     * Group by Order_Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Order_ItemGroupByArgs} args - Group by arguments.
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
      T extends Order_ItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Order_ItemGroupByArgs['orderBy'] }
        : { orderBy?: Order_ItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Order_ItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrder_ItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order_Item model
   */
  readonly fields: Order_ItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order_Item.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Order_ItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrdersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrdersDefaultArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    menuItem<T extends menuItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, menuItemDefaultArgs<ExtArgs>>): Prisma__menuItemClient<$Result.GetResult<Prisma.$menuItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Order_Item model
   */
  interface Order_ItemFieldRefs {
    readonly id: FieldRef<"Order_Item", 'String'>
    readonly orderId: FieldRef<"Order_Item", 'Int'>
    readonly menuItemId: FieldRef<"Order_Item", 'String'>
    readonly quantity: FieldRef<"Order_Item", 'Int'>
    readonly price: FieldRef<"Order_Item", 'Float'>
    readonly notes: FieldRef<"Order_Item", 'String'>
    readonly createdAt: FieldRef<"Order_Item", 'DateTime'>
    readonly updatedAt: FieldRef<"Order_Item", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Order_Item findUnique
   */
  export type Order_ItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order_Item
     */
    select?: Order_ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order_Item
     */
    omit?: Order_ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Order_ItemInclude<ExtArgs> | null
    /**
     * Filter, which Order_Item to fetch.
     */
    where: Order_ItemWhereUniqueInput
  }

  /**
   * Order_Item findUniqueOrThrow
   */
  export type Order_ItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order_Item
     */
    select?: Order_ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order_Item
     */
    omit?: Order_ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Order_ItemInclude<ExtArgs> | null
    /**
     * Filter, which Order_Item to fetch.
     */
    where: Order_ItemWhereUniqueInput
  }

  /**
   * Order_Item findFirst
   */
  export type Order_ItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order_Item
     */
    select?: Order_ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order_Item
     */
    omit?: Order_ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Order_ItemInclude<ExtArgs> | null
    /**
     * Filter, which Order_Item to fetch.
     */
    where?: Order_ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Order_Items to fetch.
     */
    orderBy?: Order_ItemOrderByWithRelationInput | Order_ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Order_Items.
     */
    cursor?: Order_ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Order_Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Order_Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Order_Items.
     */
    distinct?: Order_ItemScalarFieldEnum | Order_ItemScalarFieldEnum[]
  }

  /**
   * Order_Item findFirstOrThrow
   */
  export type Order_ItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order_Item
     */
    select?: Order_ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order_Item
     */
    omit?: Order_ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Order_ItemInclude<ExtArgs> | null
    /**
     * Filter, which Order_Item to fetch.
     */
    where?: Order_ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Order_Items to fetch.
     */
    orderBy?: Order_ItemOrderByWithRelationInput | Order_ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Order_Items.
     */
    cursor?: Order_ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Order_Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Order_Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Order_Items.
     */
    distinct?: Order_ItemScalarFieldEnum | Order_ItemScalarFieldEnum[]
  }

  /**
   * Order_Item findMany
   */
  export type Order_ItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order_Item
     */
    select?: Order_ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order_Item
     */
    omit?: Order_ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Order_ItemInclude<ExtArgs> | null
    /**
     * Filter, which Order_Items to fetch.
     */
    where?: Order_ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Order_Items to fetch.
     */
    orderBy?: Order_ItemOrderByWithRelationInput | Order_ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Order_Items.
     */
    cursor?: Order_ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Order_Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Order_Items.
     */
    skip?: number
    distinct?: Order_ItemScalarFieldEnum | Order_ItemScalarFieldEnum[]
  }

  /**
   * Order_Item create
   */
  export type Order_ItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order_Item
     */
    select?: Order_ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order_Item
     */
    omit?: Order_ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Order_ItemInclude<ExtArgs> | null
    /**
     * The data needed to create a Order_Item.
     */
    data: XOR<Order_ItemCreateInput, Order_ItemUncheckedCreateInput>
  }

  /**
   * Order_Item createMany
   */
  export type Order_ItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Order_Items.
     */
    data: Order_ItemCreateManyInput | Order_ItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order_Item createManyAndReturn
   */
  export type Order_ItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order_Item
     */
    select?: Order_ItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order_Item
     */
    omit?: Order_ItemOmit<ExtArgs> | null
    /**
     * The data used to create many Order_Items.
     */
    data: Order_ItemCreateManyInput | Order_ItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Order_ItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order_Item update
   */
  export type Order_ItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order_Item
     */
    select?: Order_ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order_Item
     */
    omit?: Order_ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Order_ItemInclude<ExtArgs> | null
    /**
     * The data needed to update a Order_Item.
     */
    data: XOR<Order_ItemUpdateInput, Order_ItemUncheckedUpdateInput>
    /**
     * Choose, which Order_Item to update.
     */
    where: Order_ItemWhereUniqueInput
  }

  /**
   * Order_Item updateMany
   */
  export type Order_ItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Order_Items.
     */
    data: XOR<Order_ItemUpdateManyMutationInput, Order_ItemUncheckedUpdateManyInput>
    /**
     * Filter which Order_Items to update
     */
    where?: Order_ItemWhereInput
    /**
     * Limit how many Order_Items to update.
     */
    limit?: number
  }

  /**
   * Order_Item updateManyAndReturn
   */
  export type Order_ItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order_Item
     */
    select?: Order_ItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order_Item
     */
    omit?: Order_ItemOmit<ExtArgs> | null
    /**
     * The data used to update Order_Items.
     */
    data: XOR<Order_ItemUpdateManyMutationInput, Order_ItemUncheckedUpdateManyInput>
    /**
     * Filter which Order_Items to update
     */
    where?: Order_ItemWhereInput
    /**
     * Limit how many Order_Items to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Order_ItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order_Item upsert
   */
  export type Order_ItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order_Item
     */
    select?: Order_ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order_Item
     */
    omit?: Order_ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Order_ItemInclude<ExtArgs> | null
    /**
     * The filter to search for the Order_Item to update in case it exists.
     */
    where: Order_ItemWhereUniqueInput
    /**
     * In case the Order_Item found by the `where` argument doesn't exist, create a new Order_Item with this data.
     */
    create: XOR<Order_ItemCreateInput, Order_ItemUncheckedCreateInput>
    /**
     * In case the Order_Item was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Order_ItemUpdateInput, Order_ItemUncheckedUpdateInput>
  }

  /**
   * Order_Item delete
   */
  export type Order_ItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order_Item
     */
    select?: Order_ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order_Item
     */
    omit?: Order_ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Order_ItemInclude<ExtArgs> | null
    /**
     * Filter which Order_Item to delete.
     */
    where: Order_ItemWhereUniqueInput
  }

  /**
   * Order_Item deleteMany
   */
  export type Order_ItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order_Items to delete
     */
    where?: Order_ItemWhereInput
    /**
     * Limit how many Order_Items to delete.
     */
    limit?: number
  }

  /**
   * Order_Item without action
   */
  export type Order_ItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order_Item
     */
    select?: Order_ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order_Item
     */
    omit?: Order_ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Order_ItemInclude<ExtArgs> | null
  }


  /**
   * Model payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    orderId: number | null
    amount: number | null
  }

  export type PaymentSumAggregateOutputType = {
    orderId: number | null
    amount: number | null
  }

  export type PaymentMinAggregateOutputType = {
    id: string | null
    orderId: number | null
    amount: number | null
    method: $Enums.method | null
    status: $Enums.status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: string | null
    orderId: number | null
    amount: number | null
    method: $Enums.method | null
    status: $Enums.status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    orderId: number
    amount: number
    method: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    orderId?: true
    amount?: true
  }

  export type PaymentSumAggregateInputType = {
    orderId?: true
    amount?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    orderId?: true
    amount?: true
    method?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    orderId?: true
    amount?: true
    method?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    orderId?: true
    amount?: true
    method?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which payment to aggregate.
     */
    where?: paymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentOrderByWithRelationInput | paymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: paymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type paymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: paymentWhereInput
    orderBy?: paymentOrderByWithAggregationInput | paymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: paymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: string
    orderId: number
    amount: number
    method: $Enums.method
    status: $Enums.status
    createdAt: Date
    updatedAt: Date
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends paymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type paymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    amount?: boolean
    method?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    order?: boolean | OrdersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type paymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    amount?: boolean
    method?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    order?: boolean | OrdersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type paymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    amount?: boolean
    method?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    order?: boolean | OrdersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type paymentSelectScalar = {
    id?: boolean
    orderId?: boolean
    amount?: boolean
    method?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type paymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderId" | "amount" | "method" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["payment"]>
  export type paymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrdersDefaultArgs<ExtArgs>
  }
  export type paymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrdersDefaultArgs<ExtArgs>
  }
  export type paymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrdersDefaultArgs<ExtArgs>
  }

  export type $paymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "payment"
    objects: {
      order: Prisma.$OrdersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderId: number
      amount: number
      method: $Enums.method
      status: $Enums.status
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type paymentGetPayload<S extends boolean | null | undefined | paymentDefaultArgs> = $Result.GetResult<Prisma.$paymentPayload, S>

  type paymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<paymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface paymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['payment'], meta: { name: 'payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {paymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends paymentFindUniqueArgs>(args: SelectSubset<T, paymentFindUniqueArgs<ExtArgs>>): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {paymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends paymentFindUniqueOrThrowArgs>(args: SelectSubset<T, paymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends paymentFindFirstArgs>(args?: SelectSubset<T, paymentFindFirstArgs<ExtArgs>>): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends paymentFindFirstOrThrowArgs>(args?: SelectSubset<T, paymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends paymentFindManyArgs>(args?: SelectSubset<T, paymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {paymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends paymentCreateArgs>(args: SelectSubset<T, paymentCreateArgs<ExtArgs>>): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {paymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends paymentCreateManyArgs>(args?: SelectSubset<T, paymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {paymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends paymentCreateManyAndReturnArgs>(args?: SelectSubset<T, paymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment.
     * @param {paymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends paymentDeleteArgs>(args: SelectSubset<T, paymentDeleteArgs<ExtArgs>>): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {paymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends paymentUpdateArgs>(args: SelectSubset<T, paymentUpdateArgs<ExtArgs>>): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {paymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends paymentDeleteManyArgs>(args?: SelectSubset<T, paymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends paymentUpdateManyArgs>(args: SelectSubset<T, paymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {paymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends paymentUpdateManyAndReturnArgs>(args: SelectSubset<T, paymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment.
     * @param {paymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends paymentUpsertArgs>(args: SelectSubset<T, paymentUpsertArgs<ExtArgs>>): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends paymentCountArgs>(
      args?: Subset<T, paymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentGroupByArgs} args - Group by arguments.
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
      T extends paymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: paymentGroupByArgs['orderBy'] }
        : { orderBy?: paymentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, paymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the payment model
   */
  readonly fields: paymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__paymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrdersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrdersDefaultArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the payment model
   */
  interface paymentFieldRefs {
    readonly id: FieldRef<"payment", 'String'>
    readonly orderId: FieldRef<"payment", 'Int'>
    readonly amount: FieldRef<"payment", 'Float'>
    readonly method: FieldRef<"payment", 'method'>
    readonly status: FieldRef<"payment", 'status'>
    readonly createdAt: FieldRef<"payment", 'DateTime'>
    readonly updatedAt: FieldRef<"payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * payment findUnique
   */
  export type paymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
    /**
     * Filter, which payment to fetch.
     */
    where: paymentWhereUniqueInput
  }

  /**
   * payment findUniqueOrThrow
   */
  export type paymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
    /**
     * Filter, which payment to fetch.
     */
    where: paymentWhereUniqueInput
  }

  /**
   * payment findFirst
   */
  export type paymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
    /**
     * Filter, which payment to fetch.
     */
    where?: paymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentOrderByWithRelationInput | paymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for payments.
     */
    cursor?: paymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * payment findFirstOrThrow
   */
  export type paymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
    /**
     * Filter, which payment to fetch.
     */
    where?: paymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentOrderByWithRelationInput | paymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for payments.
     */
    cursor?: paymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * payment findMany
   */
  export type paymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
    /**
     * Filter, which payments to fetch.
     */
    where?: paymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentOrderByWithRelationInput | paymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing payments.
     */
    cursor?: paymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * payment create
   */
  export type paymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
    /**
     * The data needed to create a payment.
     */
    data: XOR<paymentCreateInput, paymentUncheckedCreateInput>
  }

  /**
   * payment createMany
   */
  export type paymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many payments.
     */
    data: paymentCreateManyInput | paymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * payment createManyAndReturn
   */
  export type paymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * The data used to create many payments.
     */
    data: paymentCreateManyInput | paymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * payment update
   */
  export type paymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
    /**
     * The data needed to update a payment.
     */
    data: XOR<paymentUpdateInput, paymentUncheckedUpdateInput>
    /**
     * Choose, which payment to update.
     */
    where: paymentWhereUniqueInput
  }

  /**
   * payment updateMany
   */
  export type paymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update payments.
     */
    data: XOR<paymentUpdateManyMutationInput, paymentUncheckedUpdateManyInput>
    /**
     * Filter which payments to update
     */
    where?: paymentWhereInput
    /**
     * Limit how many payments to update.
     */
    limit?: number
  }

  /**
   * payment updateManyAndReturn
   */
  export type paymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * The data used to update payments.
     */
    data: XOR<paymentUpdateManyMutationInput, paymentUncheckedUpdateManyInput>
    /**
     * Filter which payments to update
     */
    where?: paymentWhereInput
    /**
     * Limit how many payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * payment upsert
   */
  export type paymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
    /**
     * The filter to search for the payment to update in case it exists.
     */
    where: paymentWhereUniqueInput
    /**
     * In case the payment found by the `where` argument doesn't exist, create a new payment with this data.
     */
    create: XOR<paymentCreateInput, paymentUncheckedCreateInput>
    /**
     * In case the payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<paymentUpdateInput, paymentUncheckedUpdateInput>
  }

  /**
   * payment delete
   */
  export type paymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
    /**
     * Filter which payment to delete.
     */
    where: paymentWhereUniqueInput
  }

  /**
   * payment deleteMany
   */
  export type paymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which payments to delete
     */
    where?: paymentWhereInput
    /**
     * Limit how many payments to delete.
     */
    limit?: number
  }

  /**
   * payment without action
   */
  export type paymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
  }


  /**
   * Model menuItem
   */

  export type AggregateMenuItem = {
    _count: MenuItemCountAggregateOutputType | null
    _avg: MenuItemAvgAggregateOutputType | null
    _sum: MenuItemSumAggregateOutputType | null
    _min: MenuItemMinAggregateOutputType | null
    _max: MenuItemMaxAggregateOutputType | null
  }

  export type MenuItemAvgAggregateOutputType = {
    price: number | null
  }

  export type MenuItemSumAggregateOutputType = {
    price: number | null
  }

  export type MenuItemMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    price: number | null
    imageUrl: string | null
    available: boolean | null
    restaurantId: string | null
    categoryId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MenuItemMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    price: number | null
    imageUrl: string | null
    available: boolean | null
    restaurantId: string | null
    categoryId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MenuItemCountAggregateOutputType = {
    id: number
    name: number
    description: number
    price: number
    imageUrl: number
    available: number
    restaurantId: number
    categoryId: number
    tags: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MenuItemAvgAggregateInputType = {
    price?: true
  }

  export type MenuItemSumAggregateInputType = {
    price?: true
  }

  export type MenuItemMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    imageUrl?: true
    available?: true
    restaurantId?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MenuItemMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    imageUrl?: true
    available?: true
    restaurantId?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MenuItemCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    imageUrl?: true
    available?: true
    restaurantId?: true
    categoryId?: true
    tags?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MenuItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which menuItem to aggregate.
     */
    where?: menuItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of menuItems to fetch.
     */
    orderBy?: menuItemOrderByWithRelationInput | menuItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: menuItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` menuItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` menuItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned menuItems
    **/
    _count?: true | MenuItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MenuItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MenuItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MenuItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MenuItemMaxAggregateInputType
  }

  export type GetMenuItemAggregateType<T extends MenuItemAggregateArgs> = {
        [P in keyof T & keyof AggregateMenuItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMenuItem[P]>
      : GetScalarType<T[P], AggregateMenuItem[P]>
  }




  export type menuItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: menuItemWhereInput
    orderBy?: menuItemOrderByWithAggregationInput | menuItemOrderByWithAggregationInput[]
    by: MenuItemScalarFieldEnum[] | MenuItemScalarFieldEnum
    having?: menuItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MenuItemCountAggregateInputType | true
    _avg?: MenuItemAvgAggregateInputType
    _sum?: MenuItemSumAggregateInputType
    _min?: MenuItemMinAggregateInputType
    _max?: MenuItemMaxAggregateInputType
  }

  export type MenuItemGroupByOutputType = {
    id: string
    name: string
    description: string | null
    price: number
    imageUrl: string | null
    available: boolean
    restaurantId: string
    categoryId: string | null
    tags: string[]
    createdAt: Date
    updatedAt: Date
    _count: MenuItemCountAggregateOutputType | null
    _avg: MenuItemAvgAggregateOutputType | null
    _sum: MenuItemSumAggregateOutputType | null
    _min: MenuItemMinAggregateOutputType | null
    _max: MenuItemMaxAggregateOutputType | null
  }

  type GetMenuItemGroupByPayload<T extends menuItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MenuItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MenuItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MenuItemGroupByOutputType[P]>
            : GetScalarType<T[P], MenuItemGroupByOutputType[P]>
        }
      >
    >


  export type menuItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    imageUrl?: boolean
    available?: boolean
    restaurantId?: boolean
    categoryId?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | menuItem$categoryArgs<ExtArgs>
    restaurant?: boolean | restaurantsDefaultArgs<ExtArgs>
    Order_Item?: boolean | menuItem$Order_ItemArgs<ExtArgs>
    _count?: boolean | MenuItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menuItem"]>

  export type menuItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    imageUrl?: boolean
    available?: boolean
    restaurantId?: boolean
    categoryId?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | menuItem$categoryArgs<ExtArgs>
    restaurant?: boolean | restaurantsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menuItem"]>

  export type menuItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    imageUrl?: boolean
    available?: boolean
    restaurantId?: boolean
    categoryId?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | menuItem$categoryArgs<ExtArgs>
    restaurant?: boolean | restaurantsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menuItem"]>

  export type menuItemSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    imageUrl?: boolean
    available?: boolean
    restaurantId?: boolean
    categoryId?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type menuItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "price" | "imageUrl" | "available" | "restaurantId" | "categoryId" | "tags" | "createdAt" | "updatedAt", ExtArgs["result"]["menuItem"]>
  export type menuItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | menuItem$categoryArgs<ExtArgs>
    restaurant?: boolean | restaurantsDefaultArgs<ExtArgs>
    Order_Item?: boolean | menuItem$Order_ItemArgs<ExtArgs>
    _count?: boolean | MenuItemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type menuItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | menuItem$categoryArgs<ExtArgs>
    restaurant?: boolean | restaurantsDefaultArgs<ExtArgs>
  }
  export type menuItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | menuItem$categoryArgs<ExtArgs>
    restaurant?: boolean | restaurantsDefaultArgs<ExtArgs>
  }

  export type $menuItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "menuItem"
    objects: {
      category: Prisma.$menu_categoriesPayload<ExtArgs> | null
      restaurant: Prisma.$restaurantsPayload<ExtArgs>
      Order_Item: Prisma.$Order_ItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      price: number
      imageUrl: string | null
      available: boolean
      restaurantId: string
      categoryId: string | null
      tags: string[]
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["menuItem"]>
    composites: {}
  }

  type menuItemGetPayload<S extends boolean | null | undefined | menuItemDefaultArgs> = $Result.GetResult<Prisma.$menuItemPayload, S>

  type menuItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<menuItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MenuItemCountAggregateInputType | true
    }

  export interface menuItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['menuItem'], meta: { name: 'menuItem' } }
    /**
     * Find zero or one MenuItem that matches the filter.
     * @param {menuItemFindUniqueArgs} args - Arguments to find a MenuItem
     * @example
     * // Get one MenuItem
     * const menuItem = await prisma.menuItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends menuItemFindUniqueArgs>(args: SelectSubset<T, menuItemFindUniqueArgs<ExtArgs>>): Prisma__menuItemClient<$Result.GetResult<Prisma.$menuItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MenuItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {menuItemFindUniqueOrThrowArgs} args - Arguments to find a MenuItem
     * @example
     * // Get one MenuItem
     * const menuItem = await prisma.menuItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends menuItemFindUniqueOrThrowArgs>(args: SelectSubset<T, menuItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__menuItemClient<$Result.GetResult<Prisma.$menuItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MenuItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menuItemFindFirstArgs} args - Arguments to find a MenuItem
     * @example
     * // Get one MenuItem
     * const menuItem = await prisma.menuItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends menuItemFindFirstArgs>(args?: SelectSubset<T, menuItemFindFirstArgs<ExtArgs>>): Prisma__menuItemClient<$Result.GetResult<Prisma.$menuItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MenuItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menuItemFindFirstOrThrowArgs} args - Arguments to find a MenuItem
     * @example
     * // Get one MenuItem
     * const menuItem = await prisma.menuItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends menuItemFindFirstOrThrowArgs>(args?: SelectSubset<T, menuItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__menuItemClient<$Result.GetResult<Prisma.$menuItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MenuItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menuItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MenuItems
     * const menuItems = await prisma.menuItem.findMany()
     * 
     * // Get first 10 MenuItems
     * const menuItems = await prisma.menuItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const menuItemWithIdOnly = await prisma.menuItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends menuItemFindManyArgs>(args?: SelectSubset<T, menuItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$menuItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MenuItem.
     * @param {menuItemCreateArgs} args - Arguments to create a MenuItem.
     * @example
     * // Create one MenuItem
     * const MenuItem = await prisma.menuItem.create({
     *   data: {
     *     // ... data to create a MenuItem
     *   }
     * })
     * 
     */
    create<T extends menuItemCreateArgs>(args: SelectSubset<T, menuItemCreateArgs<ExtArgs>>): Prisma__menuItemClient<$Result.GetResult<Prisma.$menuItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MenuItems.
     * @param {menuItemCreateManyArgs} args - Arguments to create many MenuItems.
     * @example
     * // Create many MenuItems
     * const menuItem = await prisma.menuItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends menuItemCreateManyArgs>(args?: SelectSubset<T, menuItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MenuItems and returns the data saved in the database.
     * @param {menuItemCreateManyAndReturnArgs} args - Arguments to create many MenuItems.
     * @example
     * // Create many MenuItems
     * const menuItem = await prisma.menuItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MenuItems and only return the `id`
     * const menuItemWithIdOnly = await prisma.menuItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends menuItemCreateManyAndReturnArgs>(args?: SelectSubset<T, menuItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$menuItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MenuItem.
     * @param {menuItemDeleteArgs} args - Arguments to delete one MenuItem.
     * @example
     * // Delete one MenuItem
     * const MenuItem = await prisma.menuItem.delete({
     *   where: {
     *     // ... filter to delete one MenuItem
     *   }
     * })
     * 
     */
    delete<T extends menuItemDeleteArgs>(args: SelectSubset<T, menuItemDeleteArgs<ExtArgs>>): Prisma__menuItemClient<$Result.GetResult<Prisma.$menuItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MenuItem.
     * @param {menuItemUpdateArgs} args - Arguments to update one MenuItem.
     * @example
     * // Update one MenuItem
     * const menuItem = await prisma.menuItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends menuItemUpdateArgs>(args: SelectSubset<T, menuItemUpdateArgs<ExtArgs>>): Prisma__menuItemClient<$Result.GetResult<Prisma.$menuItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MenuItems.
     * @param {menuItemDeleteManyArgs} args - Arguments to filter MenuItems to delete.
     * @example
     * // Delete a few MenuItems
     * const { count } = await prisma.menuItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends menuItemDeleteManyArgs>(args?: SelectSubset<T, menuItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MenuItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menuItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MenuItems
     * const menuItem = await prisma.menuItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends menuItemUpdateManyArgs>(args: SelectSubset<T, menuItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MenuItems and returns the data updated in the database.
     * @param {menuItemUpdateManyAndReturnArgs} args - Arguments to update many MenuItems.
     * @example
     * // Update many MenuItems
     * const menuItem = await prisma.menuItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MenuItems and only return the `id`
     * const menuItemWithIdOnly = await prisma.menuItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends menuItemUpdateManyAndReturnArgs>(args: SelectSubset<T, menuItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$menuItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MenuItem.
     * @param {menuItemUpsertArgs} args - Arguments to update or create a MenuItem.
     * @example
     * // Update or create a MenuItem
     * const menuItem = await prisma.menuItem.upsert({
     *   create: {
     *     // ... data to create a MenuItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MenuItem we want to update
     *   }
     * })
     */
    upsert<T extends menuItemUpsertArgs>(args: SelectSubset<T, menuItemUpsertArgs<ExtArgs>>): Prisma__menuItemClient<$Result.GetResult<Prisma.$menuItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MenuItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menuItemCountArgs} args - Arguments to filter MenuItems to count.
     * @example
     * // Count the number of MenuItems
     * const count = await prisma.menuItem.count({
     *   where: {
     *     // ... the filter for the MenuItems we want to count
     *   }
     * })
    **/
    count<T extends menuItemCountArgs>(
      args?: Subset<T, menuItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MenuItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MenuItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MenuItemAggregateArgs>(args: Subset<T, MenuItemAggregateArgs>): Prisma.PrismaPromise<GetMenuItemAggregateType<T>>

    /**
     * Group by MenuItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menuItemGroupByArgs} args - Group by arguments.
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
      T extends menuItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: menuItemGroupByArgs['orderBy'] }
        : { orderBy?: menuItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, menuItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMenuItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the menuItem model
   */
  readonly fields: menuItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for menuItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__menuItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends menuItem$categoryArgs<ExtArgs> = {}>(args?: Subset<T, menuItem$categoryArgs<ExtArgs>>): Prisma__menu_categoriesClient<$Result.GetResult<Prisma.$menu_categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    restaurant<T extends restaurantsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, restaurantsDefaultArgs<ExtArgs>>): Prisma__restaurantsClient<$Result.GetResult<Prisma.$restaurantsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Order_Item<T extends menuItem$Order_ItemArgs<ExtArgs> = {}>(args?: Subset<T, menuItem$Order_ItemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Order_ItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the menuItem model
   */
  interface menuItemFieldRefs {
    readonly id: FieldRef<"menuItem", 'String'>
    readonly name: FieldRef<"menuItem", 'String'>
    readonly description: FieldRef<"menuItem", 'String'>
    readonly price: FieldRef<"menuItem", 'Float'>
    readonly imageUrl: FieldRef<"menuItem", 'String'>
    readonly available: FieldRef<"menuItem", 'Boolean'>
    readonly restaurantId: FieldRef<"menuItem", 'String'>
    readonly categoryId: FieldRef<"menuItem", 'String'>
    readonly tags: FieldRef<"menuItem", 'String[]'>
    readonly createdAt: FieldRef<"menuItem", 'DateTime'>
    readonly updatedAt: FieldRef<"menuItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * menuItem findUnique
   */
  export type menuItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menuItem
     */
    select?: menuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menuItem
     */
    omit?: menuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menuItemInclude<ExtArgs> | null
    /**
     * Filter, which menuItem to fetch.
     */
    where: menuItemWhereUniqueInput
  }

  /**
   * menuItem findUniqueOrThrow
   */
  export type menuItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menuItem
     */
    select?: menuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menuItem
     */
    omit?: menuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menuItemInclude<ExtArgs> | null
    /**
     * Filter, which menuItem to fetch.
     */
    where: menuItemWhereUniqueInput
  }

  /**
   * menuItem findFirst
   */
  export type menuItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menuItem
     */
    select?: menuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menuItem
     */
    omit?: menuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menuItemInclude<ExtArgs> | null
    /**
     * Filter, which menuItem to fetch.
     */
    where?: menuItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of menuItems to fetch.
     */
    orderBy?: menuItemOrderByWithRelationInput | menuItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for menuItems.
     */
    cursor?: menuItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` menuItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` menuItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of menuItems.
     */
    distinct?: MenuItemScalarFieldEnum | MenuItemScalarFieldEnum[]
  }

  /**
   * menuItem findFirstOrThrow
   */
  export type menuItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menuItem
     */
    select?: menuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menuItem
     */
    omit?: menuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menuItemInclude<ExtArgs> | null
    /**
     * Filter, which menuItem to fetch.
     */
    where?: menuItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of menuItems to fetch.
     */
    orderBy?: menuItemOrderByWithRelationInput | menuItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for menuItems.
     */
    cursor?: menuItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` menuItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` menuItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of menuItems.
     */
    distinct?: MenuItemScalarFieldEnum | MenuItemScalarFieldEnum[]
  }

  /**
   * menuItem findMany
   */
  export type menuItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menuItem
     */
    select?: menuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menuItem
     */
    omit?: menuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menuItemInclude<ExtArgs> | null
    /**
     * Filter, which menuItems to fetch.
     */
    where?: menuItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of menuItems to fetch.
     */
    orderBy?: menuItemOrderByWithRelationInput | menuItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing menuItems.
     */
    cursor?: menuItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` menuItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` menuItems.
     */
    skip?: number
    distinct?: MenuItemScalarFieldEnum | MenuItemScalarFieldEnum[]
  }

  /**
   * menuItem create
   */
  export type menuItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menuItem
     */
    select?: menuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menuItem
     */
    omit?: menuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menuItemInclude<ExtArgs> | null
    /**
     * The data needed to create a menuItem.
     */
    data: XOR<menuItemCreateInput, menuItemUncheckedCreateInput>
  }

  /**
   * menuItem createMany
   */
  export type menuItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many menuItems.
     */
    data: menuItemCreateManyInput | menuItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * menuItem createManyAndReturn
   */
  export type menuItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menuItem
     */
    select?: menuItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the menuItem
     */
    omit?: menuItemOmit<ExtArgs> | null
    /**
     * The data used to create many menuItems.
     */
    data: menuItemCreateManyInput | menuItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menuItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * menuItem update
   */
  export type menuItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menuItem
     */
    select?: menuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menuItem
     */
    omit?: menuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menuItemInclude<ExtArgs> | null
    /**
     * The data needed to update a menuItem.
     */
    data: XOR<menuItemUpdateInput, menuItemUncheckedUpdateInput>
    /**
     * Choose, which menuItem to update.
     */
    where: menuItemWhereUniqueInput
  }

  /**
   * menuItem updateMany
   */
  export type menuItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update menuItems.
     */
    data: XOR<menuItemUpdateManyMutationInput, menuItemUncheckedUpdateManyInput>
    /**
     * Filter which menuItems to update
     */
    where?: menuItemWhereInput
    /**
     * Limit how many menuItems to update.
     */
    limit?: number
  }

  /**
   * menuItem updateManyAndReturn
   */
  export type menuItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menuItem
     */
    select?: menuItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the menuItem
     */
    omit?: menuItemOmit<ExtArgs> | null
    /**
     * The data used to update menuItems.
     */
    data: XOR<menuItemUpdateManyMutationInput, menuItemUncheckedUpdateManyInput>
    /**
     * Filter which menuItems to update
     */
    where?: menuItemWhereInput
    /**
     * Limit how many menuItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menuItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * menuItem upsert
   */
  export type menuItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menuItem
     */
    select?: menuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menuItem
     */
    omit?: menuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menuItemInclude<ExtArgs> | null
    /**
     * The filter to search for the menuItem to update in case it exists.
     */
    where: menuItemWhereUniqueInput
    /**
     * In case the menuItem found by the `where` argument doesn't exist, create a new menuItem with this data.
     */
    create: XOR<menuItemCreateInput, menuItemUncheckedCreateInput>
    /**
     * In case the menuItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<menuItemUpdateInput, menuItemUncheckedUpdateInput>
  }

  /**
   * menuItem delete
   */
  export type menuItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menuItem
     */
    select?: menuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menuItem
     */
    omit?: menuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menuItemInclude<ExtArgs> | null
    /**
     * Filter which menuItem to delete.
     */
    where: menuItemWhereUniqueInput
  }

  /**
   * menuItem deleteMany
   */
  export type menuItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which menuItems to delete
     */
    where?: menuItemWhereInput
    /**
     * Limit how many menuItems to delete.
     */
    limit?: number
  }

  /**
   * menuItem.category
   */
  export type menuItem$categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_categories
     */
    select?: menu_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu_categories
     */
    omit?: menu_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menu_categoriesInclude<ExtArgs> | null
    where?: menu_categoriesWhereInput
  }

  /**
   * menuItem.Order_Item
   */
  export type menuItem$Order_ItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order_Item
     */
    select?: Order_ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order_Item
     */
    omit?: Order_ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Order_ItemInclude<ExtArgs> | null
    where?: Order_ItemWhereInput
    orderBy?: Order_ItemOrderByWithRelationInput | Order_ItemOrderByWithRelationInput[]
    cursor?: Order_ItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Order_ItemScalarFieldEnum | Order_ItemScalarFieldEnum[]
  }

  /**
   * menuItem without action
   */
  export type menuItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menuItem
     */
    select?: menuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menuItem
     */
    omit?: menuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menuItemInclude<ExtArgs> | null
  }


  /**
   * Model menu_categories
   */

  export type AggregateMenu_categories = {
    _count: Menu_categoriesCountAggregateOutputType | null
    _min: Menu_categoriesMinAggregateOutputType | null
    _max: Menu_categoriesMaxAggregateOutputType | null
  }

  export type Menu_categoriesMinAggregateOutputType = {
    id: string | null
    name: string | null
    restaurantId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Menu_categoriesMaxAggregateOutputType = {
    id: string | null
    name: string | null
    restaurantId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Menu_categoriesCountAggregateOutputType = {
    id: number
    name: number
    restaurantId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Menu_categoriesMinAggregateInputType = {
    id?: true
    name?: true
    restaurantId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Menu_categoriesMaxAggregateInputType = {
    id?: true
    name?: true
    restaurantId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Menu_categoriesCountAggregateInputType = {
    id?: true
    name?: true
    restaurantId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Menu_categoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which menu_categories to aggregate.
     */
    where?: menu_categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of menu_categories to fetch.
     */
    orderBy?: menu_categoriesOrderByWithRelationInput | menu_categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: menu_categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` menu_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` menu_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned menu_categories
    **/
    _count?: true | Menu_categoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Menu_categoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Menu_categoriesMaxAggregateInputType
  }

  export type GetMenu_categoriesAggregateType<T extends Menu_categoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateMenu_categories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMenu_categories[P]>
      : GetScalarType<T[P], AggregateMenu_categories[P]>
  }




  export type menu_categoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: menu_categoriesWhereInput
    orderBy?: menu_categoriesOrderByWithAggregationInput | menu_categoriesOrderByWithAggregationInput[]
    by: Menu_categoriesScalarFieldEnum[] | Menu_categoriesScalarFieldEnum
    having?: menu_categoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Menu_categoriesCountAggregateInputType | true
    _min?: Menu_categoriesMinAggregateInputType
    _max?: Menu_categoriesMaxAggregateInputType
  }

  export type Menu_categoriesGroupByOutputType = {
    id: string
    name: string
    restaurantId: string
    createdAt: Date
    updatedAt: Date
    _count: Menu_categoriesCountAggregateOutputType | null
    _min: Menu_categoriesMinAggregateOutputType | null
    _max: Menu_categoriesMaxAggregateOutputType | null
  }

  type GetMenu_categoriesGroupByPayload<T extends menu_categoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Menu_categoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Menu_categoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Menu_categoriesGroupByOutputType[P]>
            : GetScalarType<T[P], Menu_categoriesGroupByOutputType[P]>
        }
      >
    >


  export type menu_categoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    restaurantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    restaurant?: boolean | restaurantsDefaultArgs<ExtArgs>
    menuItem?: boolean | menu_categories$menuItemArgs<ExtArgs>
    _count?: boolean | Menu_categoriesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menu_categories"]>

  export type menu_categoriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    restaurantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    restaurant?: boolean | restaurantsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menu_categories"]>

  export type menu_categoriesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    restaurantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    restaurant?: boolean | restaurantsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menu_categories"]>

  export type menu_categoriesSelectScalar = {
    id?: boolean
    name?: boolean
    restaurantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type menu_categoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "restaurantId" | "createdAt" | "updatedAt", ExtArgs["result"]["menu_categories"]>
  export type menu_categoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurant?: boolean | restaurantsDefaultArgs<ExtArgs>
    menuItem?: boolean | menu_categories$menuItemArgs<ExtArgs>
    _count?: boolean | Menu_categoriesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type menu_categoriesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurant?: boolean | restaurantsDefaultArgs<ExtArgs>
  }
  export type menu_categoriesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurant?: boolean | restaurantsDefaultArgs<ExtArgs>
  }

  export type $menu_categoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "menu_categories"
    objects: {
      restaurant: Prisma.$restaurantsPayload<ExtArgs>
      menuItem: Prisma.$menuItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      restaurantId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["menu_categories"]>
    composites: {}
  }

  type menu_categoriesGetPayload<S extends boolean | null | undefined | menu_categoriesDefaultArgs> = $Result.GetResult<Prisma.$menu_categoriesPayload, S>

  type menu_categoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<menu_categoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Menu_categoriesCountAggregateInputType | true
    }

  export interface menu_categoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['menu_categories'], meta: { name: 'menu_categories' } }
    /**
     * Find zero or one Menu_categories that matches the filter.
     * @param {menu_categoriesFindUniqueArgs} args - Arguments to find a Menu_categories
     * @example
     * // Get one Menu_categories
     * const menu_categories = await prisma.menu_categories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends menu_categoriesFindUniqueArgs>(args: SelectSubset<T, menu_categoriesFindUniqueArgs<ExtArgs>>): Prisma__menu_categoriesClient<$Result.GetResult<Prisma.$menu_categoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Menu_categories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {menu_categoriesFindUniqueOrThrowArgs} args - Arguments to find a Menu_categories
     * @example
     * // Get one Menu_categories
     * const menu_categories = await prisma.menu_categories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends menu_categoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, menu_categoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__menu_categoriesClient<$Result.GetResult<Prisma.$menu_categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Menu_categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menu_categoriesFindFirstArgs} args - Arguments to find a Menu_categories
     * @example
     * // Get one Menu_categories
     * const menu_categories = await prisma.menu_categories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends menu_categoriesFindFirstArgs>(args?: SelectSubset<T, menu_categoriesFindFirstArgs<ExtArgs>>): Prisma__menu_categoriesClient<$Result.GetResult<Prisma.$menu_categoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Menu_categories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menu_categoriesFindFirstOrThrowArgs} args - Arguments to find a Menu_categories
     * @example
     * // Get one Menu_categories
     * const menu_categories = await prisma.menu_categories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends menu_categoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, menu_categoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__menu_categoriesClient<$Result.GetResult<Prisma.$menu_categoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Menu_categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menu_categoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Menu_categories
     * const menu_categories = await prisma.menu_categories.findMany()
     * 
     * // Get first 10 Menu_categories
     * const menu_categories = await prisma.menu_categories.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const menu_categoriesWithIdOnly = await prisma.menu_categories.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends menu_categoriesFindManyArgs>(args?: SelectSubset<T, menu_categoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$menu_categoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Menu_categories.
     * @param {menu_categoriesCreateArgs} args - Arguments to create a Menu_categories.
     * @example
     * // Create one Menu_categories
     * const Menu_categories = await prisma.menu_categories.create({
     *   data: {
     *     // ... data to create a Menu_categories
     *   }
     * })
     * 
     */
    create<T extends menu_categoriesCreateArgs>(args: SelectSubset<T, menu_categoriesCreateArgs<ExtArgs>>): Prisma__menu_categoriesClient<$Result.GetResult<Prisma.$menu_categoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Menu_categories.
     * @param {menu_categoriesCreateManyArgs} args - Arguments to create many Menu_categories.
     * @example
     * // Create many Menu_categories
     * const menu_categories = await prisma.menu_categories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends menu_categoriesCreateManyArgs>(args?: SelectSubset<T, menu_categoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Menu_categories and returns the data saved in the database.
     * @param {menu_categoriesCreateManyAndReturnArgs} args - Arguments to create many Menu_categories.
     * @example
     * // Create many Menu_categories
     * const menu_categories = await prisma.menu_categories.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Menu_categories and only return the `id`
     * const menu_categoriesWithIdOnly = await prisma.menu_categories.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends menu_categoriesCreateManyAndReturnArgs>(args?: SelectSubset<T, menu_categoriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$menu_categoriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Menu_categories.
     * @param {menu_categoriesDeleteArgs} args - Arguments to delete one Menu_categories.
     * @example
     * // Delete one Menu_categories
     * const Menu_categories = await prisma.menu_categories.delete({
     *   where: {
     *     // ... filter to delete one Menu_categories
     *   }
     * })
     * 
     */
    delete<T extends menu_categoriesDeleteArgs>(args: SelectSubset<T, menu_categoriesDeleteArgs<ExtArgs>>): Prisma__menu_categoriesClient<$Result.GetResult<Prisma.$menu_categoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Menu_categories.
     * @param {menu_categoriesUpdateArgs} args - Arguments to update one Menu_categories.
     * @example
     * // Update one Menu_categories
     * const menu_categories = await prisma.menu_categories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends menu_categoriesUpdateArgs>(args: SelectSubset<T, menu_categoriesUpdateArgs<ExtArgs>>): Prisma__menu_categoriesClient<$Result.GetResult<Prisma.$menu_categoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Menu_categories.
     * @param {menu_categoriesDeleteManyArgs} args - Arguments to filter Menu_categories to delete.
     * @example
     * // Delete a few Menu_categories
     * const { count } = await prisma.menu_categories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends menu_categoriesDeleteManyArgs>(args?: SelectSubset<T, menu_categoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Menu_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menu_categoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Menu_categories
     * const menu_categories = await prisma.menu_categories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends menu_categoriesUpdateManyArgs>(args: SelectSubset<T, menu_categoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Menu_categories and returns the data updated in the database.
     * @param {menu_categoriesUpdateManyAndReturnArgs} args - Arguments to update many Menu_categories.
     * @example
     * // Update many Menu_categories
     * const menu_categories = await prisma.menu_categories.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Menu_categories and only return the `id`
     * const menu_categoriesWithIdOnly = await prisma.menu_categories.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends menu_categoriesUpdateManyAndReturnArgs>(args: SelectSubset<T, menu_categoriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$menu_categoriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Menu_categories.
     * @param {menu_categoriesUpsertArgs} args - Arguments to update or create a Menu_categories.
     * @example
     * // Update or create a Menu_categories
     * const menu_categories = await prisma.menu_categories.upsert({
     *   create: {
     *     // ... data to create a Menu_categories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Menu_categories we want to update
     *   }
     * })
     */
    upsert<T extends menu_categoriesUpsertArgs>(args: SelectSubset<T, menu_categoriesUpsertArgs<ExtArgs>>): Prisma__menu_categoriesClient<$Result.GetResult<Prisma.$menu_categoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Menu_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menu_categoriesCountArgs} args - Arguments to filter Menu_categories to count.
     * @example
     * // Count the number of Menu_categories
     * const count = await prisma.menu_categories.count({
     *   where: {
     *     // ... the filter for the Menu_categories we want to count
     *   }
     * })
    **/
    count<T extends menu_categoriesCountArgs>(
      args?: Subset<T, menu_categoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Menu_categoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Menu_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Menu_categoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Menu_categoriesAggregateArgs>(args: Subset<T, Menu_categoriesAggregateArgs>): Prisma.PrismaPromise<GetMenu_categoriesAggregateType<T>>

    /**
     * Group by Menu_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menu_categoriesGroupByArgs} args - Group by arguments.
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
      T extends menu_categoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: menu_categoriesGroupByArgs['orderBy'] }
        : { orderBy?: menu_categoriesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, menu_categoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMenu_categoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the menu_categories model
   */
  readonly fields: menu_categoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for menu_categories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__menu_categoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    restaurant<T extends restaurantsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, restaurantsDefaultArgs<ExtArgs>>): Prisma__restaurantsClient<$Result.GetResult<Prisma.$restaurantsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    menuItem<T extends menu_categories$menuItemArgs<ExtArgs> = {}>(args?: Subset<T, menu_categories$menuItemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$menuItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the menu_categories model
   */
  interface menu_categoriesFieldRefs {
    readonly id: FieldRef<"menu_categories", 'String'>
    readonly name: FieldRef<"menu_categories", 'String'>
    readonly restaurantId: FieldRef<"menu_categories", 'String'>
    readonly createdAt: FieldRef<"menu_categories", 'DateTime'>
    readonly updatedAt: FieldRef<"menu_categories", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * menu_categories findUnique
   */
  export type menu_categoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_categories
     */
    select?: menu_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu_categories
     */
    omit?: menu_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menu_categoriesInclude<ExtArgs> | null
    /**
     * Filter, which menu_categories to fetch.
     */
    where: menu_categoriesWhereUniqueInput
  }

  /**
   * menu_categories findUniqueOrThrow
   */
  export type menu_categoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_categories
     */
    select?: menu_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu_categories
     */
    omit?: menu_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menu_categoriesInclude<ExtArgs> | null
    /**
     * Filter, which menu_categories to fetch.
     */
    where: menu_categoriesWhereUniqueInput
  }

  /**
   * menu_categories findFirst
   */
  export type menu_categoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_categories
     */
    select?: menu_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu_categories
     */
    omit?: menu_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menu_categoriesInclude<ExtArgs> | null
    /**
     * Filter, which menu_categories to fetch.
     */
    where?: menu_categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of menu_categories to fetch.
     */
    orderBy?: menu_categoriesOrderByWithRelationInput | menu_categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for menu_categories.
     */
    cursor?: menu_categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` menu_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` menu_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of menu_categories.
     */
    distinct?: Menu_categoriesScalarFieldEnum | Menu_categoriesScalarFieldEnum[]
  }

  /**
   * menu_categories findFirstOrThrow
   */
  export type menu_categoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_categories
     */
    select?: menu_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu_categories
     */
    omit?: menu_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menu_categoriesInclude<ExtArgs> | null
    /**
     * Filter, which menu_categories to fetch.
     */
    where?: menu_categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of menu_categories to fetch.
     */
    orderBy?: menu_categoriesOrderByWithRelationInput | menu_categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for menu_categories.
     */
    cursor?: menu_categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` menu_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` menu_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of menu_categories.
     */
    distinct?: Menu_categoriesScalarFieldEnum | Menu_categoriesScalarFieldEnum[]
  }

  /**
   * menu_categories findMany
   */
  export type menu_categoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_categories
     */
    select?: menu_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu_categories
     */
    omit?: menu_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menu_categoriesInclude<ExtArgs> | null
    /**
     * Filter, which menu_categories to fetch.
     */
    where?: menu_categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of menu_categories to fetch.
     */
    orderBy?: menu_categoriesOrderByWithRelationInput | menu_categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing menu_categories.
     */
    cursor?: menu_categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` menu_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` menu_categories.
     */
    skip?: number
    distinct?: Menu_categoriesScalarFieldEnum | Menu_categoriesScalarFieldEnum[]
  }

  /**
   * menu_categories create
   */
  export type menu_categoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_categories
     */
    select?: menu_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu_categories
     */
    omit?: menu_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menu_categoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a menu_categories.
     */
    data: XOR<menu_categoriesCreateInput, menu_categoriesUncheckedCreateInput>
  }

  /**
   * menu_categories createMany
   */
  export type menu_categoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many menu_categories.
     */
    data: menu_categoriesCreateManyInput | menu_categoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * menu_categories createManyAndReturn
   */
  export type menu_categoriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_categories
     */
    select?: menu_categoriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the menu_categories
     */
    omit?: menu_categoriesOmit<ExtArgs> | null
    /**
     * The data used to create many menu_categories.
     */
    data: menu_categoriesCreateManyInput | menu_categoriesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menu_categoriesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * menu_categories update
   */
  export type menu_categoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_categories
     */
    select?: menu_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu_categories
     */
    omit?: menu_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menu_categoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a menu_categories.
     */
    data: XOR<menu_categoriesUpdateInput, menu_categoriesUncheckedUpdateInput>
    /**
     * Choose, which menu_categories to update.
     */
    where: menu_categoriesWhereUniqueInput
  }

  /**
   * menu_categories updateMany
   */
  export type menu_categoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update menu_categories.
     */
    data: XOR<menu_categoriesUpdateManyMutationInput, menu_categoriesUncheckedUpdateManyInput>
    /**
     * Filter which menu_categories to update
     */
    where?: menu_categoriesWhereInput
    /**
     * Limit how many menu_categories to update.
     */
    limit?: number
  }

  /**
   * menu_categories updateManyAndReturn
   */
  export type menu_categoriesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_categories
     */
    select?: menu_categoriesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the menu_categories
     */
    omit?: menu_categoriesOmit<ExtArgs> | null
    /**
     * The data used to update menu_categories.
     */
    data: XOR<menu_categoriesUpdateManyMutationInput, menu_categoriesUncheckedUpdateManyInput>
    /**
     * Filter which menu_categories to update
     */
    where?: menu_categoriesWhereInput
    /**
     * Limit how many menu_categories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menu_categoriesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * menu_categories upsert
   */
  export type menu_categoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_categories
     */
    select?: menu_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu_categories
     */
    omit?: menu_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menu_categoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the menu_categories to update in case it exists.
     */
    where: menu_categoriesWhereUniqueInput
    /**
     * In case the menu_categories found by the `where` argument doesn't exist, create a new menu_categories with this data.
     */
    create: XOR<menu_categoriesCreateInput, menu_categoriesUncheckedCreateInput>
    /**
     * In case the menu_categories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<menu_categoriesUpdateInput, menu_categoriesUncheckedUpdateInput>
  }

  /**
   * menu_categories delete
   */
  export type menu_categoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_categories
     */
    select?: menu_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu_categories
     */
    omit?: menu_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menu_categoriesInclude<ExtArgs> | null
    /**
     * Filter which menu_categories to delete.
     */
    where: menu_categoriesWhereUniqueInput
  }

  /**
   * menu_categories deleteMany
   */
  export type menu_categoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which menu_categories to delete
     */
    where?: menu_categoriesWhereInput
    /**
     * Limit how many menu_categories to delete.
     */
    limit?: number
  }

  /**
   * menu_categories.menuItem
   */
  export type menu_categories$menuItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menuItem
     */
    select?: menuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menuItem
     */
    omit?: menuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menuItemInclude<ExtArgs> | null
    where?: menuItemWhereInput
    orderBy?: menuItemOrderByWithRelationInput | menuItemOrderByWithRelationInput[]
    cursor?: menuItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MenuItemScalarFieldEnum | MenuItemScalarFieldEnum[]
  }

  /**
   * menu_categories without action
   */
  export type menu_categoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_categories
     */
    select?: menu_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu_categories
     */
    omit?: menu_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menu_categoriesInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    fullName: 'fullName',
    email: 'email',
    password: 'password',
    avatar: 'avatar',
    role: 'role',
    isVerified: 'isVerified',
    accessToken: 'accessToken',
    verificationToken: 'verificationToken',
    verificationTokenExpiry: 'verificationTokenExpiry',
    resetToken: 'resetToken',
    resetTokenExpiry: 'resetTokenExpiry',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const WaiterScalarFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    email: 'email',
    password: 'password',
    avatar: 'avatar',
    accessToken: 'accessToken',
    role: 'role',
    restaurantId: 'restaurantId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WaiterScalarFieldEnum = (typeof WaiterScalarFieldEnum)[keyof typeof WaiterScalarFieldEnum]


  export const KitchenScalarFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    email: 'email',
    password: 'password',
    avatar: 'avatar',
    role: 'role',
    accessToken: 'accessToken',
    restaurantId: 'restaurantId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type KitchenScalarFieldEnum = (typeof KitchenScalarFieldEnum)[keyof typeof KitchenScalarFieldEnum]


  export const RestaurantsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    address: 'address',
    phone: 'phone',
    email: 'email',
    logoUrl: 'logoUrl',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RestaurantsScalarFieldEnum = (typeof RestaurantsScalarFieldEnum)[keyof typeof RestaurantsScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    message: 'message',
    isRead: 'isRead',
    createdAt: 'createdAt'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const OrdersScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    tableId: 'tableId',
    status: 'status',
    total: 'total',
    restaurantId: 'restaurantId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrdersScalarFieldEnum = (typeof OrdersScalarFieldEnum)[keyof typeof OrdersScalarFieldEnum]


  export const TablesScalarFieldEnum: {
    id: 'id',
    number: 'number',
    capacity: 'capacity',
    restaurantId: 'restaurantId',
    qrCodeUrl: 'qrCodeUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TablesScalarFieldEnum = (typeof TablesScalarFieldEnum)[keyof typeof TablesScalarFieldEnum]


  export const Order_ItemScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    menuItemId: 'menuItemId',
    quantity: 'quantity',
    price: 'price',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Order_ItemScalarFieldEnum = (typeof Order_ItemScalarFieldEnum)[keyof typeof Order_ItemScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    amount: 'amount',
    method: 'method',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const MenuItemScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    price: 'price',
    imageUrl: 'imageUrl',
    available: 'available',
    restaurantId: 'restaurantId',
    categoryId: 'categoryId',
    tags: 'tags',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MenuItemScalarFieldEnum = (typeof MenuItemScalarFieldEnum)[keyof typeof MenuItemScalarFieldEnum]


  export const Menu_categoriesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    restaurantId: 'restaurantId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Menu_categoriesScalarFieldEnum = (typeof Menu_categoriesScalarFieldEnum)[keyof typeof Menu_categoriesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'OrderStatus'
   */
  export type EnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus'>
    


  /**
   * Reference to a field of type 'OrderStatus[]'
   */
  export type ListEnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'method'
   */
  export type EnummethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'method'>
    


  /**
   * Reference to a field of type 'method[]'
   */
  export type ListEnummethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'method[]'>
    


  /**
   * Reference to a field of type 'status'
   */
  export type EnumstatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'status'>
    


  /**
   * Reference to a field of type 'status[]'
   */
  export type ListEnumstatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'status[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    fullName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    avatar?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    isVerified?: BoolFilter<"User"> | boolean
    accessToken?: StringNullableFilter<"User"> | string | null
    verificationToken?: StringNullableFilter<"User"> | string | null
    verificationTokenExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    resetToken?: StringNullableFilter<"User"> | string | null
    resetTokenExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    Notification?: NotificationListRelationFilter
    Orders?: OrdersListRelationFilter
    restaurants?: RestaurantsListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrderInput | SortOrder
    role?: SortOrder
    isVerified?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    verificationToken?: SortOrderInput | SortOrder
    verificationTokenExpiry?: SortOrderInput | SortOrder
    resetToken?: SortOrderInput | SortOrder
    resetTokenExpiry?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Notification?: NotificationOrderByRelationAggregateInput
    Orders?: OrdersOrderByRelationAggregateInput
    restaurants?: restaurantsOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    accessToken?: string
    verificationToken?: string
    resetToken?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    fullName?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    avatar?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    isVerified?: BoolFilter<"User"> | boolean
    verificationTokenExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    resetTokenExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    Notification?: NotificationListRelationFilter
    Orders?: OrdersListRelationFilter
    restaurants?: RestaurantsListRelationFilter
  }, "id" | "username" | "email" | "accessToken" | "verificationToken" | "resetToken">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrderInput | SortOrder
    role?: SortOrder
    isVerified?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    verificationToken?: SortOrderInput | SortOrder
    verificationTokenExpiry?: SortOrderInput | SortOrder
    resetToken?: SortOrderInput | SortOrder
    resetTokenExpiry?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    fullName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    isVerified?: BoolWithAggregatesFilter<"User"> | boolean
    accessToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    verificationToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    verificationTokenExpiry?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    resetToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    resetTokenExpiry?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type WaiterWhereInput = {
    AND?: WaiterWhereInput | WaiterWhereInput[]
    OR?: WaiterWhereInput[]
    NOT?: WaiterWhereInput | WaiterWhereInput[]
    id?: StringFilter<"Waiter"> | string
    fullName?: StringFilter<"Waiter"> | string
    email?: StringFilter<"Waiter"> | string
    password?: StringFilter<"Waiter"> | string
    avatar?: StringNullableFilter<"Waiter"> | string | null
    accessToken?: StringNullableFilter<"Waiter"> | string | null
    role?: StringFilter<"Waiter"> | string
    restaurantId?: StringFilter<"Waiter"> | string
    createdAt?: DateTimeFilter<"Waiter"> | Date | string
    updatedAt?: DateTimeFilter<"Waiter"> | Date | string
    restaurant?: XOR<RestaurantsScalarRelationFilter, restaurantsWhereInput>
  }

  export type WaiterOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrderInput | SortOrder
    accessToken?: SortOrderInput | SortOrder
    role?: SortOrder
    restaurantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    restaurant?: restaurantsOrderByWithRelationInput
  }

  export type WaiterWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    accessToken?: string
    AND?: WaiterWhereInput | WaiterWhereInput[]
    OR?: WaiterWhereInput[]
    NOT?: WaiterWhereInput | WaiterWhereInput[]
    fullName?: StringFilter<"Waiter"> | string
    password?: StringFilter<"Waiter"> | string
    avatar?: StringNullableFilter<"Waiter"> | string | null
    role?: StringFilter<"Waiter"> | string
    restaurantId?: StringFilter<"Waiter"> | string
    createdAt?: DateTimeFilter<"Waiter"> | Date | string
    updatedAt?: DateTimeFilter<"Waiter"> | Date | string
    restaurant?: XOR<RestaurantsScalarRelationFilter, restaurantsWhereInput>
  }, "id" | "email" | "accessToken">

  export type WaiterOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrderInput | SortOrder
    accessToken?: SortOrderInput | SortOrder
    role?: SortOrder
    restaurantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WaiterCountOrderByAggregateInput
    _max?: WaiterMaxOrderByAggregateInput
    _min?: WaiterMinOrderByAggregateInput
  }

  export type WaiterScalarWhereWithAggregatesInput = {
    AND?: WaiterScalarWhereWithAggregatesInput | WaiterScalarWhereWithAggregatesInput[]
    OR?: WaiterScalarWhereWithAggregatesInput[]
    NOT?: WaiterScalarWhereWithAggregatesInput | WaiterScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Waiter"> | string
    fullName?: StringWithAggregatesFilter<"Waiter"> | string
    email?: StringWithAggregatesFilter<"Waiter"> | string
    password?: StringWithAggregatesFilter<"Waiter"> | string
    avatar?: StringNullableWithAggregatesFilter<"Waiter"> | string | null
    accessToken?: StringNullableWithAggregatesFilter<"Waiter"> | string | null
    role?: StringWithAggregatesFilter<"Waiter"> | string
    restaurantId?: StringWithAggregatesFilter<"Waiter"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Waiter"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Waiter"> | Date | string
  }

  export type KitchenWhereInput = {
    AND?: KitchenWhereInput | KitchenWhereInput[]
    OR?: KitchenWhereInput[]
    NOT?: KitchenWhereInput | KitchenWhereInput[]
    id?: StringFilter<"Kitchen"> | string
    fullName?: StringFilter<"Kitchen"> | string
    email?: StringFilter<"Kitchen"> | string
    password?: StringFilter<"Kitchen"> | string
    avatar?: StringNullableFilter<"Kitchen"> | string | null
    role?: StringFilter<"Kitchen"> | string
    accessToken?: StringNullableFilter<"Kitchen"> | string | null
    restaurantId?: StringFilter<"Kitchen"> | string
    createdAt?: DateTimeFilter<"Kitchen"> | Date | string
    updatedAt?: DateTimeFilter<"Kitchen"> | Date | string
    restaurant?: XOR<RestaurantsScalarRelationFilter, restaurantsWhereInput>
  }

  export type KitchenOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrderInput | SortOrder
    role?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    restaurantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    restaurant?: restaurantsOrderByWithRelationInput
  }

  export type KitchenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    accessToken?: string
    AND?: KitchenWhereInput | KitchenWhereInput[]
    OR?: KitchenWhereInput[]
    NOT?: KitchenWhereInput | KitchenWhereInput[]
    fullName?: StringFilter<"Kitchen"> | string
    password?: StringFilter<"Kitchen"> | string
    avatar?: StringNullableFilter<"Kitchen"> | string | null
    role?: StringFilter<"Kitchen"> | string
    restaurantId?: StringFilter<"Kitchen"> | string
    createdAt?: DateTimeFilter<"Kitchen"> | Date | string
    updatedAt?: DateTimeFilter<"Kitchen"> | Date | string
    restaurant?: XOR<RestaurantsScalarRelationFilter, restaurantsWhereInput>
  }, "id" | "email" | "accessToken">

  export type KitchenOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrderInput | SortOrder
    role?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    restaurantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: KitchenCountOrderByAggregateInput
    _max?: KitchenMaxOrderByAggregateInput
    _min?: KitchenMinOrderByAggregateInput
  }

  export type KitchenScalarWhereWithAggregatesInput = {
    AND?: KitchenScalarWhereWithAggregatesInput | KitchenScalarWhereWithAggregatesInput[]
    OR?: KitchenScalarWhereWithAggregatesInput[]
    NOT?: KitchenScalarWhereWithAggregatesInput | KitchenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Kitchen"> | string
    fullName?: StringWithAggregatesFilter<"Kitchen"> | string
    email?: StringWithAggregatesFilter<"Kitchen"> | string
    password?: StringWithAggregatesFilter<"Kitchen"> | string
    avatar?: StringNullableWithAggregatesFilter<"Kitchen"> | string | null
    role?: StringWithAggregatesFilter<"Kitchen"> | string
    accessToken?: StringNullableWithAggregatesFilter<"Kitchen"> | string | null
    restaurantId?: StringWithAggregatesFilter<"Kitchen"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Kitchen"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Kitchen"> | Date | string
  }

  export type restaurantsWhereInput = {
    AND?: restaurantsWhereInput | restaurantsWhereInput[]
    OR?: restaurantsWhereInput[]
    NOT?: restaurantsWhereInput | restaurantsWhereInput[]
    id?: StringFilter<"restaurants"> | string
    name?: StringFilter<"restaurants"> | string
    description?: StringNullableFilter<"restaurants"> | string | null
    address?: StringFilter<"restaurants"> | string
    phone?: StringNullableFilter<"restaurants"> | string | null
    email?: StringNullableFilter<"restaurants"> | string | null
    logoUrl?: StringNullableFilter<"restaurants"> | string | null
    userId?: StringFilter<"restaurants"> | string
    createdAt?: DateTimeFilter<"restaurants"> | Date | string
    updatedAt?: DateTimeFilter<"restaurants"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    menuItem?: MenuItemListRelationFilter
    menu_categories?: Menu_categoriesListRelationFilter
    tables?: TablesListRelationFilter
    Orders?: OrdersListRelationFilter
    Waiter?: WaiterListRelationFilter
    Kitchen?: KitchenListRelationFilter
  }

  export type restaurantsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    address?: SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    logoUrl?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    menuItem?: menuItemOrderByRelationAggregateInput
    menu_categories?: menu_categoriesOrderByRelationAggregateInput
    tables?: tablesOrderByRelationAggregateInput
    Orders?: OrdersOrderByRelationAggregateInput
    Waiter?: WaiterOrderByRelationAggregateInput
    Kitchen?: KitchenOrderByRelationAggregateInput
  }

  export type restaurantsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    email?: string
    AND?: restaurantsWhereInput | restaurantsWhereInput[]
    OR?: restaurantsWhereInput[]
    NOT?: restaurantsWhereInput | restaurantsWhereInput[]
    description?: StringNullableFilter<"restaurants"> | string | null
    address?: StringFilter<"restaurants"> | string
    phone?: StringNullableFilter<"restaurants"> | string | null
    logoUrl?: StringNullableFilter<"restaurants"> | string | null
    userId?: StringFilter<"restaurants"> | string
    createdAt?: DateTimeFilter<"restaurants"> | Date | string
    updatedAt?: DateTimeFilter<"restaurants"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    menuItem?: MenuItemListRelationFilter
    menu_categories?: Menu_categoriesListRelationFilter
    tables?: TablesListRelationFilter
    Orders?: OrdersListRelationFilter
    Waiter?: WaiterListRelationFilter
    Kitchen?: KitchenListRelationFilter
  }, "id" | "name" | "email">

  export type restaurantsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    address?: SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    logoUrl?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: restaurantsCountOrderByAggregateInput
    _max?: restaurantsMaxOrderByAggregateInput
    _min?: restaurantsMinOrderByAggregateInput
  }

  export type restaurantsScalarWhereWithAggregatesInput = {
    AND?: restaurantsScalarWhereWithAggregatesInput | restaurantsScalarWhereWithAggregatesInput[]
    OR?: restaurantsScalarWhereWithAggregatesInput[]
    NOT?: restaurantsScalarWhereWithAggregatesInput | restaurantsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"restaurants"> | string
    name?: StringWithAggregatesFilter<"restaurants"> | string
    description?: StringNullableWithAggregatesFilter<"restaurants"> | string | null
    address?: StringWithAggregatesFilter<"restaurants"> | string
    phone?: StringNullableWithAggregatesFilter<"restaurants"> | string | null
    email?: StringNullableWithAggregatesFilter<"restaurants"> | string | null
    logoUrl?: StringNullableWithAggregatesFilter<"restaurants"> | string | null
    userId?: StringWithAggregatesFilter<"restaurants"> | string
    createdAt?: DateTimeWithAggregatesFilter<"restaurants"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"restaurants"> | Date | string
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: StringFilter<"Notification"> | string
    userId?: StringFilter<"Notification"> | string
    type?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    isRead?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    userId?: StringFilter<"Notification"> | string
    type?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    isRead?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notification"> | string
    userId?: StringWithAggregatesFilter<"Notification"> | string
    type?: StringWithAggregatesFilter<"Notification"> | string
    message?: StringWithAggregatesFilter<"Notification"> | string
    isRead?: BoolWithAggregatesFilter<"Notification"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
  }

  export type OrdersWhereInput = {
    AND?: OrdersWhereInput | OrdersWhereInput[]
    OR?: OrdersWhereInput[]
    NOT?: OrdersWhereInput | OrdersWhereInput[]
    id?: IntFilter<"Orders"> | number
    userId?: StringFilter<"Orders"> | string
    tableId?: StringFilter<"Orders"> | string
    status?: EnumOrderStatusFilter<"Orders"> | $Enums.OrderStatus
    total?: FloatFilter<"Orders"> | number
    restaurantId?: StringFilter<"Orders"> | string
    createdAt?: DateTimeFilter<"Orders"> | Date | string
    updatedAt?: DateTimeFilter<"Orders"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    table?: XOR<TablesScalarRelationFilter, tablesWhereInput>
    Order_Item?: Order_ItemListRelationFilter
    payment?: PaymentListRelationFilter
    restaurant?: XOR<RestaurantsScalarRelationFilter, restaurantsWhereInput>
  }

  export type OrdersOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    tableId?: SortOrder
    status?: SortOrder
    total?: SortOrder
    restaurantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    table?: tablesOrderByWithRelationInput
    Order_Item?: Order_ItemOrderByRelationAggregateInput
    payment?: paymentOrderByRelationAggregateInput
    restaurant?: restaurantsOrderByWithRelationInput
  }

  export type OrdersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OrdersWhereInput | OrdersWhereInput[]
    OR?: OrdersWhereInput[]
    NOT?: OrdersWhereInput | OrdersWhereInput[]
    userId?: StringFilter<"Orders"> | string
    tableId?: StringFilter<"Orders"> | string
    status?: EnumOrderStatusFilter<"Orders"> | $Enums.OrderStatus
    total?: FloatFilter<"Orders"> | number
    restaurantId?: StringFilter<"Orders"> | string
    createdAt?: DateTimeFilter<"Orders"> | Date | string
    updatedAt?: DateTimeFilter<"Orders"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    table?: XOR<TablesScalarRelationFilter, tablesWhereInput>
    Order_Item?: Order_ItemListRelationFilter
    payment?: PaymentListRelationFilter
    restaurant?: XOR<RestaurantsScalarRelationFilter, restaurantsWhereInput>
  }, "id">

  export type OrdersOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    tableId?: SortOrder
    status?: SortOrder
    total?: SortOrder
    restaurantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrdersCountOrderByAggregateInput
    _avg?: OrdersAvgOrderByAggregateInput
    _max?: OrdersMaxOrderByAggregateInput
    _min?: OrdersMinOrderByAggregateInput
    _sum?: OrdersSumOrderByAggregateInput
  }

  export type OrdersScalarWhereWithAggregatesInput = {
    AND?: OrdersScalarWhereWithAggregatesInput | OrdersScalarWhereWithAggregatesInput[]
    OR?: OrdersScalarWhereWithAggregatesInput[]
    NOT?: OrdersScalarWhereWithAggregatesInput | OrdersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Orders"> | number
    userId?: StringWithAggregatesFilter<"Orders"> | string
    tableId?: StringWithAggregatesFilter<"Orders"> | string
    status?: EnumOrderStatusWithAggregatesFilter<"Orders"> | $Enums.OrderStatus
    total?: FloatWithAggregatesFilter<"Orders"> | number
    restaurantId?: StringWithAggregatesFilter<"Orders"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Orders"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Orders"> | Date | string
  }

  export type tablesWhereInput = {
    AND?: tablesWhereInput | tablesWhereInput[]
    OR?: tablesWhereInput[]
    NOT?: tablesWhereInput | tablesWhereInput[]
    id?: StringFilter<"tables"> | string
    number?: IntFilter<"tables"> | number
    capacity?: IntFilter<"tables"> | number
    restaurantId?: StringFilter<"tables"> | string
    qrCodeUrl?: StringNullableFilter<"tables"> | string | null
    createdAt?: DateTimeFilter<"tables"> | Date | string
    updatedAt?: DateTimeFilter<"tables"> | Date | string
    restaurant?: XOR<RestaurantsScalarRelationFilter, restaurantsWhereInput>
    Orders?: OrdersListRelationFilter
  }

  export type tablesOrderByWithRelationInput = {
    id?: SortOrder
    number?: SortOrder
    capacity?: SortOrder
    restaurantId?: SortOrder
    qrCodeUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    restaurant?: restaurantsOrderByWithRelationInput
    Orders?: OrdersOrderByRelationAggregateInput
  }

  export type tablesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: tablesWhereInput | tablesWhereInput[]
    OR?: tablesWhereInput[]
    NOT?: tablesWhereInput | tablesWhereInput[]
    number?: IntFilter<"tables"> | number
    capacity?: IntFilter<"tables"> | number
    restaurantId?: StringFilter<"tables"> | string
    qrCodeUrl?: StringNullableFilter<"tables"> | string | null
    createdAt?: DateTimeFilter<"tables"> | Date | string
    updatedAt?: DateTimeFilter<"tables"> | Date | string
    restaurant?: XOR<RestaurantsScalarRelationFilter, restaurantsWhereInput>
    Orders?: OrdersListRelationFilter
  }, "id">

  export type tablesOrderByWithAggregationInput = {
    id?: SortOrder
    number?: SortOrder
    capacity?: SortOrder
    restaurantId?: SortOrder
    qrCodeUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: tablesCountOrderByAggregateInput
    _avg?: tablesAvgOrderByAggregateInput
    _max?: tablesMaxOrderByAggregateInput
    _min?: tablesMinOrderByAggregateInput
    _sum?: tablesSumOrderByAggregateInput
  }

  export type tablesScalarWhereWithAggregatesInput = {
    AND?: tablesScalarWhereWithAggregatesInput | tablesScalarWhereWithAggregatesInput[]
    OR?: tablesScalarWhereWithAggregatesInput[]
    NOT?: tablesScalarWhereWithAggregatesInput | tablesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"tables"> | string
    number?: IntWithAggregatesFilter<"tables"> | number
    capacity?: IntWithAggregatesFilter<"tables"> | number
    restaurantId?: StringWithAggregatesFilter<"tables"> | string
    qrCodeUrl?: StringNullableWithAggregatesFilter<"tables"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"tables"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"tables"> | Date | string
  }

  export type Order_ItemWhereInput = {
    AND?: Order_ItemWhereInput | Order_ItemWhereInput[]
    OR?: Order_ItemWhereInput[]
    NOT?: Order_ItemWhereInput | Order_ItemWhereInput[]
    id?: StringFilter<"Order_Item"> | string
    orderId?: IntFilter<"Order_Item"> | number
    menuItemId?: StringFilter<"Order_Item"> | string
    quantity?: IntFilter<"Order_Item"> | number
    price?: FloatFilter<"Order_Item"> | number
    notes?: StringNullableFilter<"Order_Item"> | string | null
    createdAt?: DateTimeFilter<"Order_Item"> | Date | string
    updatedAt?: DateTimeFilter<"Order_Item"> | Date | string
    order?: XOR<OrdersScalarRelationFilter, OrdersWhereInput>
    menuItem?: XOR<MenuItemScalarRelationFilter, menuItemWhereInput>
  }

  export type Order_ItemOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    menuItemId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    order?: OrdersOrderByWithRelationInput
    menuItem?: menuItemOrderByWithRelationInput
  }

  export type Order_ItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: Order_ItemWhereInput | Order_ItemWhereInput[]
    OR?: Order_ItemWhereInput[]
    NOT?: Order_ItemWhereInput | Order_ItemWhereInput[]
    orderId?: IntFilter<"Order_Item"> | number
    menuItemId?: StringFilter<"Order_Item"> | string
    quantity?: IntFilter<"Order_Item"> | number
    price?: FloatFilter<"Order_Item"> | number
    notes?: StringNullableFilter<"Order_Item"> | string | null
    createdAt?: DateTimeFilter<"Order_Item"> | Date | string
    updatedAt?: DateTimeFilter<"Order_Item"> | Date | string
    order?: XOR<OrdersScalarRelationFilter, OrdersWhereInput>
    menuItem?: XOR<MenuItemScalarRelationFilter, menuItemWhereInput>
  }, "id">

  export type Order_ItemOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    menuItemId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: Order_ItemCountOrderByAggregateInput
    _avg?: Order_ItemAvgOrderByAggregateInput
    _max?: Order_ItemMaxOrderByAggregateInput
    _min?: Order_ItemMinOrderByAggregateInput
    _sum?: Order_ItemSumOrderByAggregateInput
  }

  export type Order_ItemScalarWhereWithAggregatesInput = {
    AND?: Order_ItemScalarWhereWithAggregatesInput | Order_ItemScalarWhereWithAggregatesInput[]
    OR?: Order_ItemScalarWhereWithAggregatesInput[]
    NOT?: Order_ItemScalarWhereWithAggregatesInput | Order_ItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Order_Item"> | string
    orderId?: IntWithAggregatesFilter<"Order_Item"> | number
    menuItemId?: StringWithAggregatesFilter<"Order_Item"> | string
    quantity?: IntWithAggregatesFilter<"Order_Item"> | number
    price?: FloatWithAggregatesFilter<"Order_Item"> | number
    notes?: StringNullableWithAggregatesFilter<"Order_Item"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Order_Item"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Order_Item"> | Date | string
  }

  export type paymentWhereInput = {
    AND?: paymentWhereInput | paymentWhereInput[]
    OR?: paymentWhereInput[]
    NOT?: paymentWhereInput | paymentWhereInput[]
    id?: StringFilter<"payment"> | string
    orderId?: IntFilter<"payment"> | number
    amount?: FloatFilter<"payment"> | number
    method?: EnummethodFilter<"payment"> | $Enums.method
    status?: EnumstatusFilter<"payment"> | $Enums.status
    createdAt?: DateTimeFilter<"payment"> | Date | string
    updatedAt?: DateTimeFilter<"payment"> | Date | string
    order?: XOR<OrdersScalarRelationFilter, OrdersWhereInput>
  }

  export type paymentOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    order?: OrdersOrderByWithRelationInput
  }

  export type paymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: paymentWhereInput | paymentWhereInput[]
    OR?: paymentWhereInput[]
    NOT?: paymentWhereInput | paymentWhereInput[]
    orderId?: IntFilter<"payment"> | number
    amount?: FloatFilter<"payment"> | number
    method?: EnummethodFilter<"payment"> | $Enums.method
    status?: EnumstatusFilter<"payment"> | $Enums.status
    createdAt?: DateTimeFilter<"payment"> | Date | string
    updatedAt?: DateTimeFilter<"payment"> | Date | string
    order?: XOR<OrdersScalarRelationFilter, OrdersWhereInput>
  }, "id">

  export type paymentOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: paymentCountOrderByAggregateInput
    _avg?: paymentAvgOrderByAggregateInput
    _max?: paymentMaxOrderByAggregateInput
    _min?: paymentMinOrderByAggregateInput
    _sum?: paymentSumOrderByAggregateInput
  }

  export type paymentScalarWhereWithAggregatesInput = {
    AND?: paymentScalarWhereWithAggregatesInput | paymentScalarWhereWithAggregatesInput[]
    OR?: paymentScalarWhereWithAggregatesInput[]
    NOT?: paymentScalarWhereWithAggregatesInput | paymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"payment"> | string
    orderId?: IntWithAggregatesFilter<"payment"> | number
    amount?: FloatWithAggregatesFilter<"payment"> | number
    method?: EnummethodWithAggregatesFilter<"payment"> | $Enums.method
    status?: EnumstatusWithAggregatesFilter<"payment"> | $Enums.status
    createdAt?: DateTimeWithAggregatesFilter<"payment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"payment"> | Date | string
  }

  export type menuItemWhereInput = {
    AND?: menuItemWhereInput | menuItemWhereInput[]
    OR?: menuItemWhereInput[]
    NOT?: menuItemWhereInput | menuItemWhereInput[]
    id?: StringFilter<"menuItem"> | string
    name?: StringFilter<"menuItem"> | string
    description?: StringNullableFilter<"menuItem"> | string | null
    price?: FloatFilter<"menuItem"> | number
    imageUrl?: StringNullableFilter<"menuItem"> | string | null
    available?: BoolFilter<"menuItem"> | boolean
    restaurantId?: StringFilter<"menuItem"> | string
    categoryId?: StringNullableFilter<"menuItem"> | string | null
    tags?: StringNullableListFilter<"menuItem">
    createdAt?: DateTimeFilter<"menuItem"> | Date | string
    updatedAt?: DateTimeFilter<"menuItem"> | Date | string
    category?: XOR<Menu_categoriesNullableScalarRelationFilter, menu_categoriesWhereInput> | null
    restaurant?: XOR<RestaurantsScalarRelationFilter, restaurantsWhereInput>
    Order_Item?: Order_ItemListRelationFilter
  }

  export type menuItemOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    available?: SortOrder
    restaurantId?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: menu_categoriesOrderByWithRelationInput
    restaurant?: restaurantsOrderByWithRelationInput
    Order_Item?: Order_ItemOrderByRelationAggregateInput
  }

  export type menuItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: menuItemWhereInput | menuItemWhereInput[]
    OR?: menuItemWhereInput[]
    NOT?: menuItemWhereInput | menuItemWhereInput[]
    name?: StringFilter<"menuItem"> | string
    description?: StringNullableFilter<"menuItem"> | string | null
    price?: FloatFilter<"menuItem"> | number
    imageUrl?: StringNullableFilter<"menuItem"> | string | null
    available?: BoolFilter<"menuItem"> | boolean
    restaurantId?: StringFilter<"menuItem"> | string
    categoryId?: StringNullableFilter<"menuItem"> | string | null
    tags?: StringNullableListFilter<"menuItem">
    createdAt?: DateTimeFilter<"menuItem"> | Date | string
    updatedAt?: DateTimeFilter<"menuItem"> | Date | string
    category?: XOR<Menu_categoriesNullableScalarRelationFilter, menu_categoriesWhereInput> | null
    restaurant?: XOR<RestaurantsScalarRelationFilter, restaurantsWhereInput>
    Order_Item?: Order_ItemListRelationFilter
  }, "id">

  export type menuItemOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    available?: SortOrder
    restaurantId?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: menuItemCountOrderByAggregateInput
    _avg?: menuItemAvgOrderByAggregateInput
    _max?: menuItemMaxOrderByAggregateInput
    _min?: menuItemMinOrderByAggregateInput
    _sum?: menuItemSumOrderByAggregateInput
  }

  export type menuItemScalarWhereWithAggregatesInput = {
    AND?: menuItemScalarWhereWithAggregatesInput | menuItemScalarWhereWithAggregatesInput[]
    OR?: menuItemScalarWhereWithAggregatesInput[]
    NOT?: menuItemScalarWhereWithAggregatesInput | menuItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"menuItem"> | string
    name?: StringWithAggregatesFilter<"menuItem"> | string
    description?: StringNullableWithAggregatesFilter<"menuItem"> | string | null
    price?: FloatWithAggregatesFilter<"menuItem"> | number
    imageUrl?: StringNullableWithAggregatesFilter<"menuItem"> | string | null
    available?: BoolWithAggregatesFilter<"menuItem"> | boolean
    restaurantId?: StringWithAggregatesFilter<"menuItem"> | string
    categoryId?: StringNullableWithAggregatesFilter<"menuItem"> | string | null
    tags?: StringNullableListFilter<"menuItem">
    createdAt?: DateTimeWithAggregatesFilter<"menuItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"menuItem"> | Date | string
  }

  export type menu_categoriesWhereInput = {
    AND?: menu_categoriesWhereInput | menu_categoriesWhereInput[]
    OR?: menu_categoriesWhereInput[]
    NOT?: menu_categoriesWhereInput | menu_categoriesWhereInput[]
    id?: StringFilter<"menu_categories"> | string
    name?: StringFilter<"menu_categories"> | string
    restaurantId?: StringFilter<"menu_categories"> | string
    createdAt?: DateTimeFilter<"menu_categories"> | Date | string
    updatedAt?: DateTimeFilter<"menu_categories"> | Date | string
    restaurant?: XOR<RestaurantsScalarRelationFilter, restaurantsWhereInput>
    menuItem?: MenuItemListRelationFilter
  }

  export type menu_categoriesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    restaurantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    restaurant?: restaurantsOrderByWithRelationInput
    menuItem?: menuItemOrderByRelationAggregateInput
  }

  export type menu_categoriesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name_restaurantId?: menu_categoriesNameRestaurantIdCompoundUniqueInput
    AND?: menu_categoriesWhereInput | menu_categoriesWhereInput[]
    OR?: menu_categoriesWhereInput[]
    NOT?: menu_categoriesWhereInput | menu_categoriesWhereInput[]
    name?: StringFilter<"menu_categories"> | string
    restaurantId?: StringFilter<"menu_categories"> | string
    createdAt?: DateTimeFilter<"menu_categories"> | Date | string
    updatedAt?: DateTimeFilter<"menu_categories"> | Date | string
    restaurant?: XOR<RestaurantsScalarRelationFilter, restaurantsWhereInput>
    menuItem?: MenuItemListRelationFilter
  }, "id" | "name_restaurantId">

  export type menu_categoriesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    restaurantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: menu_categoriesCountOrderByAggregateInput
    _max?: menu_categoriesMaxOrderByAggregateInput
    _min?: menu_categoriesMinOrderByAggregateInput
  }

  export type menu_categoriesScalarWhereWithAggregatesInput = {
    AND?: menu_categoriesScalarWhereWithAggregatesInput | menu_categoriesScalarWhereWithAggregatesInput[]
    OR?: menu_categoriesScalarWhereWithAggregatesInput[]
    NOT?: menu_categoriesScalarWhereWithAggregatesInput | menu_categoriesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"menu_categories"> | string
    name?: StringWithAggregatesFilter<"menu_categories"> | string
    restaurantId?: StringWithAggregatesFilter<"menu_categories"> | string
    createdAt?: DateTimeWithAggregatesFilter<"menu_categories"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"menu_categories"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    username: string
    fullName: string
    email: string
    password: string
    avatar?: string | null
    role?: $Enums.Role
    isVerified?: boolean
    accessToken?: string | null
    verificationToken?: string | null
    verificationTokenExpiry?: Date | string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Notification?: NotificationCreateNestedManyWithoutUserInput
    Orders?: OrdersCreateNestedManyWithoutUserInput
    restaurants?: restaurantsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    fullName: string
    email: string
    password: string
    avatar?: string | null
    role?: $Enums.Role
    isVerified?: boolean
    accessToken?: string | null
    verificationToken?: string | null
    verificationTokenExpiry?: Date | string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Notification?: NotificationUncheckedCreateNestedManyWithoutUserInput
    Orders?: OrdersUncheckedCreateNestedManyWithoutUserInput
    restaurants?: restaurantsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Notification?: NotificationUpdateManyWithoutUserNestedInput
    Orders?: OrdersUpdateManyWithoutUserNestedInput
    restaurants?: restaurantsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Notification?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    Orders?: OrdersUncheckedUpdateManyWithoutUserNestedInput
    restaurants?: restaurantsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    fullName: string
    email: string
    password: string
    avatar?: string | null
    role?: $Enums.Role
    isVerified?: boolean
    accessToken?: string | null
    verificationToken?: string | null
    verificationTokenExpiry?: Date | string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WaiterCreateInput = {
    id?: string
    fullName: string
    email: string
    password: string
    avatar?: string | null
    accessToken?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    restaurant: restaurantsCreateNestedOneWithoutWaiterInput
  }

  export type WaiterUncheckedCreateInput = {
    id?: string
    fullName: string
    email: string
    password: string
    avatar?: string | null
    accessToken?: string | null
    role?: string
    restaurantId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WaiterUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurant?: restaurantsUpdateOneRequiredWithoutWaiterNestedInput
  }

  export type WaiterUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    restaurantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WaiterCreateManyInput = {
    id?: string
    fullName: string
    email: string
    password: string
    avatar?: string | null
    accessToken?: string | null
    role?: string
    restaurantId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WaiterUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WaiterUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    restaurantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KitchenCreateInput = {
    id?: string
    fullName: string
    email: string
    password: string
    avatar?: string | null
    role?: string
    accessToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    restaurant: restaurantsCreateNestedOneWithoutKitchenInput
  }

  export type KitchenUncheckedCreateInput = {
    id?: string
    fullName: string
    email: string
    password: string
    avatar?: string | null
    role?: string
    accessToken?: string | null
    restaurantId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KitchenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurant?: restaurantsUpdateOneRequiredWithoutKitchenNestedInput
  }

  export type KitchenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    restaurantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KitchenCreateManyInput = {
    id?: string
    fullName: string
    email: string
    password: string
    avatar?: string | null
    role?: string
    accessToken?: string | null
    restaurantId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KitchenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KitchenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    restaurantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type restaurantsCreateInput = {
    id?: string
    name: string
    description?: string | null
    address: string
    phone?: string | null
    email?: string | null
    logoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRestaurantsInput
    menuItem?: menuItemCreateNestedManyWithoutRestaurantInput
    menu_categories?: menu_categoriesCreateNestedManyWithoutRestaurantInput
    tables?: tablesCreateNestedManyWithoutRestaurantInput
    Orders?: OrdersCreateNestedManyWithoutRestaurantInput
    Waiter?: WaiterCreateNestedManyWithoutRestaurantInput
    Kitchen?: KitchenCreateNestedManyWithoutRestaurantInput
  }

  export type restaurantsUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    address: string
    phone?: string | null
    email?: string | null
    logoUrl?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    menuItem?: menuItemUncheckedCreateNestedManyWithoutRestaurantInput
    menu_categories?: menu_categoriesUncheckedCreateNestedManyWithoutRestaurantInput
    tables?: tablesUncheckedCreateNestedManyWithoutRestaurantInput
    Orders?: OrdersUncheckedCreateNestedManyWithoutRestaurantInput
    Waiter?: WaiterUncheckedCreateNestedManyWithoutRestaurantInput
    Kitchen?: KitchenUncheckedCreateNestedManyWithoutRestaurantInput
  }

  export type restaurantsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRestaurantsNestedInput
    menuItem?: menuItemUpdateManyWithoutRestaurantNestedInput
    menu_categories?: menu_categoriesUpdateManyWithoutRestaurantNestedInput
    tables?: tablesUpdateManyWithoutRestaurantNestedInput
    Orders?: OrdersUpdateManyWithoutRestaurantNestedInput
    Waiter?: WaiterUpdateManyWithoutRestaurantNestedInput
    Kitchen?: KitchenUpdateManyWithoutRestaurantNestedInput
  }

  export type restaurantsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    menuItem?: menuItemUncheckedUpdateManyWithoutRestaurantNestedInput
    menu_categories?: menu_categoriesUncheckedUpdateManyWithoutRestaurantNestedInput
    tables?: tablesUncheckedUpdateManyWithoutRestaurantNestedInput
    Orders?: OrdersUncheckedUpdateManyWithoutRestaurantNestedInput
    Waiter?: WaiterUncheckedUpdateManyWithoutRestaurantNestedInput
    Kitchen?: KitchenUncheckedUpdateManyWithoutRestaurantNestedInput
  }

  export type restaurantsCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    address: string
    phone?: string | null
    email?: string | null
    logoUrl?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type restaurantsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type restaurantsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateInput = {
    id?: string
    type: string
    message: string
    isRead?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutNotificationInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    message: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotificationNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyInput = {
    id?: string
    userId: string
    type: string
    message: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdersCreateInput = {
    status?: $Enums.OrderStatus
    total?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutOrdersInput
    table: tablesCreateNestedOneWithoutOrdersInput
    Order_Item?: Order_ItemCreateNestedManyWithoutOrderInput
    payment?: paymentCreateNestedManyWithoutOrderInput
    restaurant: restaurantsCreateNestedOneWithoutOrdersInput
  }

  export type OrdersUncheckedCreateInput = {
    id?: number
    userId: string
    tableId: string
    status?: $Enums.OrderStatus
    total?: number
    restaurantId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Order_Item?: Order_ItemUncheckedCreateNestedManyWithoutOrderInput
    payment?: paymentUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrdersUpdateInput = {
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
    table?: tablesUpdateOneRequiredWithoutOrdersNestedInput
    Order_Item?: Order_ItemUpdateManyWithoutOrderNestedInput
    payment?: paymentUpdateManyWithoutOrderNestedInput
    restaurant?: restaurantsUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrdersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    tableId?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    total?: FloatFieldUpdateOperationsInput | number
    restaurantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Order_Item?: Order_ItemUncheckedUpdateManyWithoutOrderNestedInput
    payment?: paymentUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrdersCreateManyInput = {
    id?: number
    userId: string
    tableId: string
    status?: $Enums.OrderStatus
    total?: number
    restaurantId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrdersUpdateManyMutationInput = {
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    tableId?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    total?: FloatFieldUpdateOperationsInput | number
    restaurantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tablesCreateInput = {
    id?: string
    number: number
    capacity: number
    qrCodeUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    restaurant: restaurantsCreateNestedOneWithoutTablesInput
    Orders?: OrdersCreateNestedManyWithoutTableInput
  }

  export type tablesUncheckedCreateInput = {
    id?: string
    number: number
    capacity: number
    restaurantId: string
    qrCodeUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Orders?: OrdersUncheckedCreateNestedManyWithoutTableInput
  }

  export type tablesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    qrCodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurant?: restaurantsUpdateOneRequiredWithoutTablesNestedInput
    Orders?: OrdersUpdateManyWithoutTableNestedInput
  }

  export type tablesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    restaurantId?: StringFieldUpdateOperationsInput | string
    qrCodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Orders?: OrdersUncheckedUpdateManyWithoutTableNestedInput
  }

  export type tablesCreateManyInput = {
    id?: string
    number: number
    capacity: number
    restaurantId: string
    qrCodeUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type tablesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    qrCodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tablesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    restaurantId?: StringFieldUpdateOperationsInput | string
    qrCodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Order_ItemCreateInput = {
    id?: string
    quantity?: number
    price: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    order: OrdersCreateNestedOneWithoutOrder_ItemInput
    menuItem: menuItemCreateNestedOneWithoutOrder_ItemInput
  }

  export type Order_ItemUncheckedCreateInput = {
    id?: string
    orderId: number
    menuItemId: string
    quantity?: number
    price: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Order_ItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrdersUpdateOneRequiredWithoutOrder_ItemNestedInput
    menuItem?: menuItemUpdateOneRequiredWithoutOrder_ItemNestedInput
  }

  export type Order_ItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: IntFieldUpdateOperationsInput | number
    menuItemId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Order_ItemCreateManyInput = {
    id?: string
    orderId: number
    menuItemId: string
    quantity?: number
    price: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Order_ItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Order_ItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: IntFieldUpdateOperationsInput | number
    menuItemId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type paymentCreateInput = {
    id?: string
    amount: number
    method?: $Enums.method
    status?: $Enums.status
    createdAt?: Date | string
    updatedAt?: Date | string
    order: OrdersCreateNestedOneWithoutPaymentInput
  }

  export type paymentUncheckedCreateInput = {
    id?: string
    orderId: number
    amount: number
    method?: $Enums.method
    status?: $Enums.status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type paymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    method?: EnummethodFieldUpdateOperationsInput | $Enums.method
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrdersUpdateOneRequiredWithoutPaymentNestedInput
  }

  export type paymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    method?: EnummethodFieldUpdateOperationsInput | $Enums.method
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type paymentCreateManyInput = {
    id?: string
    orderId: number
    amount: number
    method?: $Enums.method
    status?: $Enums.status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type paymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    method?: EnummethodFieldUpdateOperationsInput | $Enums.method
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type paymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    method?: EnummethodFieldUpdateOperationsInput | $Enums.method
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type menuItemCreateInput = {
    id?: string
    name: string
    description?: string | null
    price: number
    imageUrl?: string | null
    available?: boolean
    tags?: menuItemCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: menu_categoriesCreateNestedOneWithoutMenuItemInput
    restaurant: restaurantsCreateNestedOneWithoutMenuItemInput
    Order_Item?: Order_ItemCreateNestedManyWithoutMenuItemInput
  }

  export type menuItemUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    price: number
    imageUrl?: string | null
    available?: boolean
    restaurantId: string
    categoryId?: string | null
    tags?: menuItemCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    Order_Item?: Order_ItemUncheckedCreateNestedManyWithoutMenuItemInput
  }

  export type menuItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    available?: BoolFieldUpdateOperationsInput | boolean
    tags?: menuItemUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: menu_categoriesUpdateOneWithoutMenuItemNestedInput
    restaurant?: restaurantsUpdateOneRequiredWithoutMenuItemNestedInput
    Order_Item?: Order_ItemUpdateManyWithoutMenuItemNestedInput
  }

  export type menuItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    available?: BoolFieldUpdateOperationsInput | boolean
    restaurantId?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: menuItemUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Order_Item?: Order_ItemUncheckedUpdateManyWithoutMenuItemNestedInput
  }

  export type menuItemCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    price: number
    imageUrl?: string | null
    available?: boolean
    restaurantId: string
    categoryId?: string | null
    tags?: menuItemCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type menuItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    available?: BoolFieldUpdateOperationsInput | boolean
    tags?: menuItemUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type menuItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    available?: BoolFieldUpdateOperationsInput | boolean
    restaurantId?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: menuItemUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type menu_categoriesCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    restaurant: restaurantsCreateNestedOneWithoutMenu_categoriesInput
    menuItem?: menuItemCreateNestedManyWithoutCategoryInput
  }

  export type menu_categoriesUncheckedCreateInput = {
    id?: string
    name: string
    restaurantId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    menuItem?: menuItemUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type menu_categoriesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurant?: restaurantsUpdateOneRequiredWithoutMenu_categoriesNestedInput
    menuItem?: menuItemUpdateManyWithoutCategoryNestedInput
  }

  export type menu_categoriesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    restaurantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    menuItem?: menuItemUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type menu_categoriesCreateManyInput = {
    id?: string
    name: string
    restaurantId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type menu_categoriesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type menu_categoriesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    restaurantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type OrdersListRelationFilter = {
    every?: OrdersWhereInput
    some?: OrdersWhereInput
    none?: OrdersWhereInput
  }

  export type RestaurantsListRelationFilter = {
    every?: restaurantsWhereInput
    some?: restaurantsWhereInput
    none?: restaurantsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrdersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type restaurantsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    role?: SortOrder
    isVerified?: SortOrder
    accessToken?: SortOrder
    verificationToken?: SortOrder
    verificationTokenExpiry?: SortOrder
    resetToken?: SortOrder
    resetTokenExpiry?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    role?: SortOrder
    isVerified?: SortOrder
    accessToken?: SortOrder
    verificationToken?: SortOrder
    verificationTokenExpiry?: SortOrder
    resetToken?: SortOrder
    resetTokenExpiry?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    role?: SortOrder
    isVerified?: SortOrder
    accessToken?: SortOrder
    verificationToken?: SortOrder
    verificationTokenExpiry?: SortOrder
    resetToken?: SortOrder
    resetTokenExpiry?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type RestaurantsScalarRelationFilter = {
    is?: restaurantsWhereInput
    isNot?: restaurantsWhereInput
  }

  export type WaiterCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    accessToken?: SortOrder
    role?: SortOrder
    restaurantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WaiterMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    accessToken?: SortOrder
    role?: SortOrder
    restaurantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WaiterMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    accessToken?: SortOrder
    role?: SortOrder
    restaurantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KitchenCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    role?: SortOrder
    accessToken?: SortOrder
    restaurantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KitchenMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    role?: SortOrder
    accessToken?: SortOrder
    restaurantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KitchenMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    role?: SortOrder
    accessToken?: SortOrder
    restaurantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type MenuItemListRelationFilter = {
    every?: menuItemWhereInput
    some?: menuItemWhereInput
    none?: menuItemWhereInput
  }

  export type Menu_categoriesListRelationFilter = {
    every?: menu_categoriesWhereInput
    some?: menu_categoriesWhereInput
    none?: menu_categoriesWhereInput
  }

  export type TablesListRelationFilter = {
    every?: tablesWhereInput
    some?: tablesWhereInput
    none?: tablesWhereInput
  }

  export type WaiterListRelationFilter = {
    every?: WaiterWhereInput
    some?: WaiterWhereInput
    none?: WaiterWhereInput
  }

  export type KitchenListRelationFilter = {
    every?: KitchenWhereInput
    some?: KitchenWhereInput
    none?: KitchenWhereInput
  }

  export type menuItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type menu_categoriesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tablesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WaiterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type KitchenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type restaurantsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    logoUrl?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type restaurantsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    logoUrl?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type restaurantsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    logoUrl?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type TablesScalarRelationFilter = {
    is?: tablesWhereInput
    isNot?: tablesWhereInput
  }

  export type Order_ItemListRelationFilter = {
    every?: Order_ItemWhereInput
    some?: Order_ItemWhereInput
    none?: Order_ItemWhereInput
  }

  export type PaymentListRelationFilter = {
    every?: paymentWhereInput
    some?: paymentWhereInput
    none?: paymentWhereInput
  }

  export type Order_ItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type paymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrdersCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tableId?: SortOrder
    status?: SortOrder
    total?: SortOrder
    restaurantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrdersAvgOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
  }

  export type OrdersMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tableId?: SortOrder
    status?: SortOrder
    total?: SortOrder
    restaurantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrdersMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tableId?: SortOrder
    status?: SortOrder
    total?: SortOrder
    restaurantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrdersSumOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type EnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type tablesCountOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    capacity?: SortOrder
    restaurantId?: SortOrder
    qrCodeUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type tablesAvgOrderByAggregateInput = {
    number?: SortOrder
    capacity?: SortOrder
  }

  export type tablesMaxOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    capacity?: SortOrder
    restaurantId?: SortOrder
    qrCodeUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type tablesMinOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    capacity?: SortOrder
    restaurantId?: SortOrder
    qrCodeUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type tablesSumOrderByAggregateInput = {
    number?: SortOrder
    capacity?: SortOrder
  }

  export type OrdersScalarRelationFilter = {
    is?: OrdersWhereInput
    isNot?: OrdersWhereInput
  }

  export type MenuItemScalarRelationFilter = {
    is?: menuItemWhereInput
    isNot?: menuItemWhereInput
  }

  export type Order_ItemCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    menuItemId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Order_ItemAvgOrderByAggregateInput = {
    orderId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type Order_ItemMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    menuItemId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Order_ItemMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    menuItemId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Order_ItemSumOrderByAggregateInput = {
    orderId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type EnummethodFilter<$PrismaModel = never> = {
    equals?: $Enums.method | EnummethodFieldRefInput<$PrismaModel>
    in?: $Enums.method[] | ListEnummethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.method[] | ListEnummethodFieldRefInput<$PrismaModel>
    not?: NestedEnummethodFilter<$PrismaModel> | $Enums.method
  }

  export type EnumstatusFilter<$PrismaModel = never> = {
    equals?: $Enums.status | EnumstatusFieldRefInput<$PrismaModel>
    in?: $Enums.status[] | ListEnumstatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.status[] | ListEnumstatusFieldRefInput<$PrismaModel>
    not?: NestedEnumstatusFilter<$PrismaModel> | $Enums.status
  }

  export type paymentCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type paymentAvgOrderByAggregateInput = {
    orderId?: SortOrder
    amount?: SortOrder
  }

  export type paymentMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type paymentMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type paymentSumOrderByAggregateInput = {
    orderId?: SortOrder
    amount?: SortOrder
  }

  export type EnummethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.method | EnummethodFieldRefInput<$PrismaModel>
    in?: $Enums.method[] | ListEnummethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.method[] | ListEnummethodFieldRefInput<$PrismaModel>
    not?: NestedEnummethodWithAggregatesFilter<$PrismaModel> | $Enums.method
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnummethodFilter<$PrismaModel>
    _max?: NestedEnummethodFilter<$PrismaModel>
  }

  export type EnumstatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.status | EnumstatusFieldRefInput<$PrismaModel>
    in?: $Enums.status[] | ListEnumstatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.status[] | ListEnumstatusFieldRefInput<$PrismaModel>
    not?: NestedEnumstatusWithAggregatesFilter<$PrismaModel> | $Enums.status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumstatusFilter<$PrismaModel>
    _max?: NestedEnumstatusFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type Menu_categoriesNullableScalarRelationFilter = {
    is?: menu_categoriesWhereInput | null
    isNot?: menu_categoriesWhereInput | null
  }

  export type menuItemCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    imageUrl?: SortOrder
    available?: SortOrder
    restaurantId?: SortOrder
    categoryId?: SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type menuItemAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type menuItemMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    imageUrl?: SortOrder
    available?: SortOrder
    restaurantId?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type menuItemMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    imageUrl?: SortOrder
    available?: SortOrder
    restaurantId?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type menuItemSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type menu_categoriesNameRestaurantIdCompoundUniqueInput = {
    name: string
    restaurantId: string
  }

  export type menu_categoriesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    restaurantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type menu_categoriesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    restaurantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type menu_categoriesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    restaurantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type OrdersCreateNestedManyWithoutUserInput = {
    create?: XOR<OrdersCreateWithoutUserInput, OrdersUncheckedCreateWithoutUserInput> | OrdersCreateWithoutUserInput[] | OrdersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutUserInput | OrdersCreateOrConnectWithoutUserInput[]
    createMany?: OrdersCreateManyUserInputEnvelope
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
  }

  export type restaurantsCreateNestedManyWithoutUserInput = {
    create?: XOR<restaurantsCreateWithoutUserInput, restaurantsUncheckedCreateWithoutUserInput> | restaurantsCreateWithoutUserInput[] | restaurantsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: restaurantsCreateOrConnectWithoutUserInput | restaurantsCreateOrConnectWithoutUserInput[]
    createMany?: restaurantsCreateManyUserInputEnvelope
    connect?: restaurantsWhereUniqueInput | restaurantsWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type OrdersUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OrdersCreateWithoutUserInput, OrdersUncheckedCreateWithoutUserInput> | OrdersCreateWithoutUserInput[] | OrdersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutUserInput | OrdersCreateOrConnectWithoutUserInput[]
    createMany?: OrdersCreateManyUserInputEnvelope
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
  }

  export type restaurantsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<restaurantsCreateWithoutUserInput, restaurantsUncheckedCreateWithoutUserInput> | restaurantsCreateWithoutUserInput[] | restaurantsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: restaurantsCreateOrConnectWithoutUserInput | restaurantsCreateOrConnectWithoutUserInput[]
    createMany?: restaurantsCreateManyUserInputEnvelope
    connect?: restaurantsWhereUniqueInput | restaurantsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NotificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type OrdersUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrdersCreateWithoutUserInput, OrdersUncheckedCreateWithoutUserInput> | OrdersCreateWithoutUserInput[] | OrdersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutUserInput | OrdersCreateOrConnectWithoutUserInput[]
    upsert?: OrdersUpsertWithWhereUniqueWithoutUserInput | OrdersUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrdersCreateManyUserInputEnvelope
    set?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    disconnect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    delete?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    update?: OrdersUpdateWithWhereUniqueWithoutUserInput | OrdersUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrdersUpdateManyWithWhereWithoutUserInput | OrdersUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
  }

  export type restaurantsUpdateManyWithoutUserNestedInput = {
    create?: XOR<restaurantsCreateWithoutUserInput, restaurantsUncheckedCreateWithoutUserInput> | restaurantsCreateWithoutUserInput[] | restaurantsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: restaurantsCreateOrConnectWithoutUserInput | restaurantsCreateOrConnectWithoutUserInput[]
    upsert?: restaurantsUpsertWithWhereUniqueWithoutUserInput | restaurantsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: restaurantsCreateManyUserInputEnvelope
    set?: restaurantsWhereUniqueInput | restaurantsWhereUniqueInput[]
    disconnect?: restaurantsWhereUniqueInput | restaurantsWhereUniqueInput[]
    delete?: restaurantsWhereUniqueInput | restaurantsWhereUniqueInput[]
    connect?: restaurantsWhereUniqueInput | restaurantsWhereUniqueInput[]
    update?: restaurantsUpdateWithWhereUniqueWithoutUserInput | restaurantsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: restaurantsUpdateManyWithWhereWithoutUserInput | restaurantsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: restaurantsScalarWhereInput | restaurantsScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type OrdersUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrdersCreateWithoutUserInput, OrdersUncheckedCreateWithoutUserInput> | OrdersCreateWithoutUserInput[] | OrdersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutUserInput | OrdersCreateOrConnectWithoutUserInput[]
    upsert?: OrdersUpsertWithWhereUniqueWithoutUserInput | OrdersUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrdersCreateManyUserInputEnvelope
    set?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    disconnect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    delete?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    update?: OrdersUpdateWithWhereUniqueWithoutUserInput | OrdersUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrdersUpdateManyWithWhereWithoutUserInput | OrdersUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
  }

  export type restaurantsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<restaurantsCreateWithoutUserInput, restaurantsUncheckedCreateWithoutUserInput> | restaurantsCreateWithoutUserInput[] | restaurantsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: restaurantsCreateOrConnectWithoutUserInput | restaurantsCreateOrConnectWithoutUserInput[]
    upsert?: restaurantsUpsertWithWhereUniqueWithoutUserInput | restaurantsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: restaurantsCreateManyUserInputEnvelope
    set?: restaurantsWhereUniqueInput | restaurantsWhereUniqueInput[]
    disconnect?: restaurantsWhereUniqueInput | restaurantsWhereUniqueInput[]
    delete?: restaurantsWhereUniqueInput | restaurantsWhereUniqueInput[]
    connect?: restaurantsWhereUniqueInput | restaurantsWhereUniqueInput[]
    update?: restaurantsUpdateWithWhereUniqueWithoutUserInput | restaurantsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: restaurantsUpdateManyWithWhereWithoutUserInput | restaurantsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: restaurantsScalarWhereInput | restaurantsScalarWhereInput[]
  }

  export type restaurantsCreateNestedOneWithoutWaiterInput = {
    create?: XOR<restaurantsCreateWithoutWaiterInput, restaurantsUncheckedCreateWithoutWaiterInput>
    connectOrCreate?: restaurantsCreateOrConnectWithoutWaiterInput
    connect?: restaurantsWhereUniqueInput
  }

  export type restaurantsUpdateOneRequiredWithoutWaiterNestedInput = {
    create?: XOR<restaurantsCreateWithoutWaiterInput, restaurantsUncheckedCreateWithoutWaiterInput>
    connectOrCreate?: restaurantsCreateOrConnectWithoutWaiterInput
    upsert?: restaurantsUpsertWithoutWaiterInput
    connect?: restaurantsWhereUniqueInput
    update?: XOR<XOR<restaurantsUpdateToOneWithWhereWithoutWaiterInput, restaurantsUpdateWithoutWaiterInput>, restaurantsUncheckedUpdateWithoutWaiterInput>
  }

  export type restaurantsCreateNestedOneWithoutKitchenInput = {
    create?: XOR<restaurantsCreateWithoutKitchenInput, restaurantsUncheckedCreateWithoutKitchenInput>
    connectOrCreate?: restaurantsCreateOrConnectWithoutKitchenInput
    connect?: restaurantsWhereUniqueInput
  }

  export type restaurantsUpdateOneRequiredWithoutKitchenNestedInput = {
    create?: XOR<restaurantsCreateWithoutKitchenInput, restaurantsUncheckedCreateWithoutKitchenInput>
    connectOrCreate?: restaurantsCreateOrConnectWithoutKitchenInput
    upsert?: restaurantsUpsertWithoutKitchenInput
    connect?: restaurantsWhereUniqueInput
    update?: XOR<XOR<restaurantsUpdateToOneWithWhereWithoutKitchenInput, restaurantsUpdateWithoutKitchenInput>, restaurantsUncheckedUpdateWithoutKitchenInput>
  }

  export type UserCreateNestedOneWithoutRestaurantsInput = {
    create?: XOR<UserCreateWithoutRestaurantsInput, UserUncheckedCreateWithoutRestaurantsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRestaurantsInput
    connect?: UserWhereUniqueInput
  }

  export type menuItemCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<menuItemCreateWithoutRestaurantInput, menuItemUncheckedCreateWithoutRestaurantInput> | menuItemCreateWithoutRestaurantInput[] | menuItemUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: menuItemCreateOrConnectWithoutRestaurantInput | menuItemCreateOrConnectWithoutRestaurantInput[]
    createMany?: menuItemCreateManyRestaurantInputEnvelope
    connect?: menuItemWhereUniqueInput | menuItemWhereUniqueInput[]
  }

  export type menu_categoriesCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<menu_categoriesCreateWithoutRestaurantInput, menu_categoriesUncheckedCreateWithoutRestaurantInput> | menu_categoriesCreateWithoutRestaurantInput[] | menu_categoriesUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: menu_categoriesCreateOrConnectWithoutRestaurantInput | menu_categoriesCreateOrConnectWithoutRestaurantInput[]
    createMany?: menu_categoriesCreateManyRestaurantInputEnvelope
    connect?: menu_categoriesWhereUniqueInput | menu_categoriesWhereUniqueInput[]
  }

  export type tablesCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<tablesCreateWithoutRestaurantInput, tablesUncheckedCreateWithoutRestaurantInput> | tablesCreateWithoutRestaurantInput[] | tablesUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: tablesCreateOrConnectWithoutRestaurantInput | tablesCreateOrConnectWithoutRestaurantInput[]
    createMany?: tablesCreateManyRestaurantInputEnvelope
    connect?: tablesWhereUniqueInput | tablesWhereUniqueInput[]
  }

  export type OrdersCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<OrdersCreateWithoutRestaurantInput, OrdersUncheckedCreateWithoutRestaurantInput> | OrdersCreateWithoutRestaurantInput[] | OrdersUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutRestaurantInput | OrdersCreateOrConnectWithoutRestaurantInput[]
    createMany?: OrdersCreateManyRestaurantInputEnvelope
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
  }

  export type WaiterCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<WaiterCreateWithoutRestaurantInput, WaiterUncheckedCreateWithoutRestaurantInput> | WaiterCreateWithoutRestaurantInput[] | WaiterUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: WaiterCreateOrConnectWithoutRestaurantInput | WaiterCreateOrConnectWithoutRestaurantInput[]
    createMany?: WaiterCreateManyRestaurantInputEnvelope
    connect?: WaiterWhereUniqueInput | WaiterWhereUniqueInput[]
  }

  export type KitchenCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<KitchenCreateWithoutRestaurantInput, KitchenUncheckedCreateWithoutRestaurantInput> | KitchenCreateWithoutRestaurantInput[] | KitchenUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: KitchenCreateOrConnectWithoutRestaurantInput | KitchenCreateOrConnectWithoutRestaurantInput[]
    createMany?: KitchenCreateManyRestaurantInputEnvelope
    connect?: KitchenWhereUniqueInput | KitchenWhereUniqueInput[]
  }

  export type menuItemUncheckedCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<menuItemCreateWithoutRestaurantInput, menuItemUncheckedCreateWithoutRestaurantInput> | menuItemCreateWithoutRestaurantInput[] | menuItemUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: menuItemCreateOrConnectWithoutRestaurantInput | menuItemCreateOrConnectWithoutRestaurantInput[]
    createMany?: menuItemCreateManyRestaurantInputEnvelope
    connect?: menuItemWhereUniqueInput | menuItemWhereUniqueInput[]
  }

  export type menu_categoriesUncheckedCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<menu_categoriesCreateWithoutRestaurantInput, menu_categoriesUncheckedCreateWithoutRestaurantInput> | menu_categoriesCreateWithoutRestaurantInput[] | menu_categoriesUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: menu_categoriesCreateOrConnectWithoutRestaurantInput | menu_categoriesCreateOrConnectWithoutRestaurantInput[]
    createMany?: menu_categoriesCreateManyRestaurantInputEnvelope
    connect?: menu_categoriesWhereUniqueInput | menu_categoriesWhereUniqueInput[]
  }

  export type tablesUncheckedCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<tablesCreateWithoutRestaurantInput, tablesUncheckedCreateWithoutRestaurantInput> | tablesCreateWithoutRestaurantInput[] | tablesUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: tablesCreateOrConnectWithoutRestaurantInput | tablesCreateOrConnectWithoutRestaurantInput[]
    createMany?: tablesCreateManyRestaurantInputEnvelope
    connect?: tablesWhereUniqueInput | tablesWhereUniqueInput[]
  }

  export type OrdersUncheckedCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<OrdersCreateWithoutRestaurantInput, OrdersUncheckedCreateWithoutRestaurantInput> | OrdersCreateWithoutRestaurantInput[] | OrdersUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutRestaurantInput | OrdersCreateOrConnectWithoutRestaurantInput[]
    createMany?: OrdersCreateManyRestaurantInputEnvelope
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
  }

  export type WaiterUncheckedCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<WaiterCreateWithoutRestaurantInput, WaiterUncheckedCreateWithoutRestaurantInput> | WaiterCreateWithoutRestaurantInput[] | WaiterUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: WaiterCreateOrConnectWithoutRestaurantInput | WaiterCreateOrConnectWithoutRestaurantInput[]
    createMany?: WaiterCreateManyRestaurantInputEnvelope
    connect?: WaiterWhereUniqueInput | WaiterWhereUniqueInput[]
  }

  export type KitchenUncheckedCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<KitchenCreateWithoutRestaurantInput, KitchenUncheckedCreateWithoutRestaurantInput> | KitchenCreateWithoutRestaurantInput[] | KitchenUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: KitchenCreateOrConnectWithoutRestaurantInput | KitchenCreateOrConnectWithoutRestaurantInput[]
    createMany?: KitchenCreateManyRestaurantInputEnvelope
    connect?: KitchenWhereUniqueInput | KitchenWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutRestaurantsNestedInput = {
    create?: XOR<UserCreateWithoutRestaurantsInput, UserUncheckedCreateWithoutRestaurantsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRestaurantsInput
    upsert?: UserUpsertWithoutRestaurantsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRestaurantsInput, UserUpdateWithoutRestaurantsInput>, UserUncheckedUpdateWithoutRestaurantsInput>
  }

  export type menuItemUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<menuItemCreateWithoutRestaurantInput, menuItemUncheckedCreateWithoutRestaurantInput> | menuItemCreateWithoutRestaurantInput[] | menuItemUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: menuItemCreateOrConnectWithoutRestaurantInput | menuItemCreateOrConnectWithoutRestaurantInput[]
    upsert?: menuItemUpsertWithWhereUniqueWithoutRestaurantInput | menuItemUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: menuItemCreateManyRestaurantInputEnvelope
    set?: menuItemWhereUniqueInput | menuItemWhereUniqueInput[]
    disconnect?: menuItemWhereUniqueInput | menuItemWhereUniqueInput[]
    delete?: menuItemWhereUniqueInput | menuItemWhereUniqueInput[]
    connect?: menuItemWhereUniqueInput | menuItemWhereUniqueInput[]
    update?: menuItemUpdateWithWhereUniqueWithoutRestaurantInput | menuItemUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: menuItemUpdateManyWithWhereWithoutRestaurantInput | menuItemUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: menuItemScalarWhereInput | menuItemScalarWhereInput[]
  }

  export type menu_categoriesUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<menu_categoriesCreateWithoutRestaurantInput, menu_categoriesUncheckedCreateWithoutRestaurantInput> | menu_categoriesCreateWithoutRestaurantInput[] | menu_categoriesUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: menu_categoriesCreateOrConnectWithoutRestaurantInput | menu_categoriesCreateOrConnectWithoutRestaurantInput[]
    upsert?: menu_categoriesUpsertWithWhereUniqueWithoutRestaurantInput | menu_categoriesUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: menu_categoriesCreateManyRestaurantInputEnvelope
    set?: menu_categoriesWhereUniqueInput | menu_categoriesWhereUniqueInput[]
    disconnect?: menu_categoriesWhereUniqueInput | menu_categoriesWhereUniqueInput[]
    delete?: menu_categoriesWhereUniqueInput | menu_categoriesWhereUniqueInput[]
    connect?: menu_categoriesWhereUniqueInput | menu_categoriesWhereUniqueInput[]
    update?: menu_categoriesUpdateWithWhereUniqueWithoutRestaurantInput | menu_categoriesUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: menu_categoriesUpdateManyWithWhereWithoutRestaurantInput | menu_categoriesUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: menu_categoriesScalarWhereInput | menu_categoriesScalarWhereInput[]
  }

  export type tablesUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<tablesCreateWithoutRestaurantInput, tablesUncheckedCreateWithoutRestaurantInput> | tablesCreateWithoutRestaurantInput[] | tablesUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: tablesCreateOrConnectWithoutRestaurantInput | tablesCreateOrConnectWithoutRestaurantInput[]
    upsert?: tablesUpsertWithWhereUniqueWithoutRestaurantInput | tablesUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: tablesCreateManyRestaurantInputEnvelope
    set?: tablesWhereUniqueInput | tablesWhereUniqueInput[]
    disconnect?: tablesWhereUniqueInput | tablesWhereUniqueInput[]
    delete?: tablesWhereUniqueInput | tablesWhereUniqueInput[]
    connect?: tablesWhereUniqueInput | tablesWhereUniqueInput[]
    update?: tablesUpdateWithWhereUniqueWithoutRestaurantInput | tablesUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: tablesUpdateManyWithWhereWithoutRestaurantInput | tablesUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: tablesScalarWhereInput | tablesScalarWhereInput[]
  }

  export type OrdersUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<OrdersCreateWithoutRestaurantInput, OrdersUncheckedCreateWithoutRestaurantInput> | OrdersCreateWithoutRestaurantInput[] | OrdersUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutRestaurantInput | OrdersCreateOrConnectWithoutRestaurantInput[]
    upsert?: OrdersUpsertWithWhereUniqueWithoutRestaurantInput | OrdersUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: OrdersCreateManyRestaurantInputEnvelope
    set?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    disconnect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    delete?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    update?: OrdersUpdateWithWhereUniqueWithoutRestaurantInput | OrdersUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: OrdersUpdateManyWithWhereWithoutRestaurantInput | OrdersUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
  }

  export type WaiterUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<WaiterCreateWithoutRestaurantInput, WaiterUncheckedCreateWithoutRestaurantInput> | WaiterCreateWithoutRestaurantInput[] | WaiterUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: WaiterCreateOrConnectWithoutRestaurantInput | WaiterCreateOrConnectWithoutRestaurantInput[]
    upsert?: WaiterUpsertWithWhereUniqueWithoutRestaurantInput | WaiterUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: WaiterCreateManyRestaurantInputEnvelope
    set?: WaiterWhereUniqueInput | WaiterWhereUniqueInput[]
    disconnect?: WaiterWhereUniqueInput | WaiterWhereUniqueInput[]
    delete?: WaiterWhereUniqueInput | WaiterWhereUniqueInput[]
    connect?: WaiterWhereUniqueInput | WaiterWhereUniqueInput[]
    update?: WaiterUpdateWithWhereUniqueWithoutRestaurantInput | WaiterUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: WaiterUpdateManyWithWhereWithoutRestaurantInput | WaiterUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: WaiterScalarWhereInput | WaiterScalarWhereInput[]
  }

  export type KitchenUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<KitchenCreateWithoutRestaurantInput, KitchenUncheckedCreateWithoutRestaurantInput> | KitchenCreateWithoutRestaurantInput[] | KitchenUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: KitchenCreateOrConnectWithoutRestaurantInput | KitchenCreateOrConnectWithoutRestaurantInput[]
    upsert?: KitchenUpsertWithWhereUniqueWithoutRestaurantInput | KitchenUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: KitchenCreateManyRestaurantInputEnvelope
    set?: KitchenWhereUniqueInput | KitchenWhereUniqueInput[]
    disconnect?: KitchenWhereUniqueInput | KitchenWhereUniqueInput[]
    delete?: KitchenWhereUniqueInput | KitchenWhereUniqueInput[]
    connect?: KitchenWhereUniqueInput | KitchenWhereUniqueInput[]
    update?: KitchenUpdateWithWhereUniqueWithoutRestaurantInput | KitchenUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: KitchenUpdateManyWithWhereWithoutRestaurantInput | KitchenUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: KitchenScalarWhereInput | KitchenScalarWhereInput[]
  }

  export type menuItemUncheckedUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<menuItemCreateWithoutRestaurantInput, menuItemUncheckedCreateWithoutRestaurantInput> | menuItemCreateWithoutRestaurantInput[] | menuItemUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: menuItemCreateOrConnectWithoutRestaurantInput | menuItemCreateOrConnectWithoutRestaurantInput[]
    upsert?: menuItemUpsertWithWhereUniqueWithoutRestaurantInput | menuItemUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: menuItemCreateManyRestaurantInputEnvelope
    set?: menuItemWhereUniqueInput | menuItemWhereUniqueInput[]
    disconnect?: menuItemWhereUniqueInput | menuItemWhereUniqueInput[]
    delete?: menuItemWhereUniqueInput | menuItemWhereUniqueInput[]
    connect?: menuItemWhereUniqueInput | menuItemWhereUniqueInput[]
    update?: menuItemUpdateWithWhereUniqueWithoutRestaurantInput | menuItemUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: menuItemUpdateManyWithWhereWithoutRestaurantInput | menuItemUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: menuItemScalarWhereInput | menuItemScalarWhereInput[]
  }

  export type menu_categoriesUncheckedUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<menu_categoriesCreateWithoutRestaurantInput, menu_categoriesUncheckedCreateWithoutRestaurantInput> | menu_categoriesCreateWithoutRestaurantInput[] | menu_categoriesUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: menu_categoriesCreateOrConnectWithoutRestaurantInput | menu_categoriesCreateOrConnectWithoutRestaurantInput[]
    upsert?: menu_categoriesUpsertWithWhereUniqueWithoutRestaurantInput | menu_categoriesUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: menu_categoriesCreateManyRestaurantInputEnvelope
    set?: menu_categoriesWhereUniqueInput | menu_categoriesWhereUniqueInput[]
    disconnect?: menu_categoriesWhereUniqueInput | menu_categoriesWhereUniqueInput[]
    delete?: menu_categoriesWhereUniqueInput | menu_categoriesWhereUniqueInput[]
    connect?: menu_categoriesWhereUniqueInput | menu_categoriesWhereUniqueInput[]
    update?: menu_categoriesUpdateWithWhereUniqueWithoutRestaurantInput | menu_categoriesUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: menu_categoriesUpdateManyWithWhereWithoutRestaurantInput | menu_categoriesUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: menu_categoriesScalarWhereInput | menu_categoriesScalarWhereInput[]
  }

  export type tablesUncheckedUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<tablesCreateWithoutRestaurantInput, tablesUncheckedCreateWithoutRestaurantInput> | tablesCreateWithoutRestaurantInput[] | tablesUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: tablesCreateOrConnectWithoutRestaurantInput | tablesCreateOrConnectWithoutRestaurantInput[]
    upsert?: tablesUpsertWithWhereUniqueWithoutRestaurantInput | tablesUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: tablesCreateManyRestaurantInputEnvelope
    set?: tablesWhereUniqueInput | tablesWhereUniqueInput[]
    disconnect?: tablesWhereUniqueInput | tablesWhereUniqueInput[]
    delete?: tablesWhereUniqueInput | tablesWhereUniqueInput[]
    connect?: tablesWhereUniqueInput | tablesWhereUniqueInput[]
    update?: tablesUpdateWithWhereUniqueWithoutRestaurantInput | tablesUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: tablesUpdateManyWithWhereWithoutRestaurantInput | tablesUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: tablesScalarWhereInput | tablesScalarWhereInput[]
  }

  export type OrdersUncheckedUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<OrdersCreateWithoutRestaurantInput, OrdersUncheckedCreateWithoutRestaurantInput> | OrdersCreateWithoutRestaurantInput[] | OrdersUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutRestaurantInput | OrdersCreateOrConnectWithoutRestaurantInput[]
    upsert?: OrdersUpsertWithWhereUniqueWithoutRestaurantInput | OrdersUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: OrdersCreateManyRestaurantInputEnvelope
    set?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    disconnect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    delete?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    update?: OrdersUpdateWithWhereUniqueWithoutRestaurantInput | OrdersUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: OrdersUpdateManyWithWhereWithoutRestaurantInput | OrdersUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
  }

  export type WaiterUncheckedUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<WaiterCreateWithoutRestaurantInput, WaiterUncheckedCreateWithoutRestaurantInput> | WaiterCreateWithoutRestaurantInput[] | WaiterUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: WaiterCreateOrConnectWithoutRestaurantInput | WaiterCreateOrConnectWithoutRestaurantInput[]
    upsert?: WaiterUpsertWithWhereUniqueWithoutRestaurantInput | WaiterUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: WaiterCreateManyRestaurantInputEnvelope
    set?: WaiterWhereUniqueInput | WaiterWhereUniqueInput[]
    disconnect?: WaiterWhereUniqueInput | WaiterWhereUniqueInput[]
    delete?: WaiterWhereUniqueInput | WaiterWhereUniqueInput[]
    connect?: WaiterWhereUniqueInput | WaiterWhereUniqueInput[]
    update?: WaiterUpdateWithWhereUniqueWithoutRestaurantInput | WaiterUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: WaiterUpdateManyWithWhereWithoutRestaurantInput | WaiterUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: WaiterScalarWhereInput | WaiterScalarWhereInput[]
  }

  export type KitchenUncheckedUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<KitchenCreateWithoutRestaurantInput, KitchenUncheckedCreateWithoutRestaurantInput> | KitchenCreateWithoutRestaurantInput[] | KitchenUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: KitchenCreateOrConnectWithoutRestaurantInput | KitchenCreateOrConnectWithoutRestaurantInput[]
    upsert?: KitchenUpsertWithWhereUniqueWithoutRestaurantInput | KitchenUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: KitchenCreateManyRestaurantInputEnvelope
    set?: KitchenWhereUniqueInput | KitchenWhereUniqueInput[]
    disconnect?: KitchenWhereUniqueInput | KitchenWhereUniqueInput[]
    delete?: KitchenWhereUniqueInput | KitchenWhereUniqueInput[]
    connect?: KitchenWhereUniqueInput | KitchenWhereUniqueInput[]
    update?: KitchenUpdateWithWhereUniqueWithoutRestaurantInput | KitchenUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: KitchenUpdateManyWithWhereWithoutRestaurantInput | KitchenUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: KitchenScalarWhereInput | KitchenScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutNotificationInput = {
    create?: XOR<UserCreateWithoutNotificationInput, UserUncheckedCreateWithoutNotificationInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutNotificationNestedInput = {
    create?: XOR<UserCreateWithoutNotificationInput, UserUncheckedCreateWithoutNotificationInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationInput
    upsert?: UserUpsertWithoutNotificationInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationInput, UserUpdateWithoutNotificationInput>, UserUncheckedUpdateWithoutNotificationInput>
  }

  export type UserCreateNestedOneWithoutOrdersInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    connect?: UserWhereUniqueInput
  }

  export type tablesCreateNestedOneWithoutOrdersInput = {
    create?: XOR<tablesCreateWithoutOrdersInput, tablesUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: tablesCreateOrConnectWithoutOrdersInput
    connect?: tablesWhereUniqueInput
  }

  export type Order_ItemCreateNestedManyWithoutOrderInput = {
    create?: XOR<Order_ItemCreateWithoutOrderInput, Order_ItemUncheckedCreateWithoutOrderInput> | Order_ItemCreateWithoutOrderInput[] | Order_ItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: Order_ItemCreateOrConnectWithoutOrderInput | Order_ItemCreateOrConnectWithoutOrderInput[]
    createMany?: Order_ItemCreateManyOrderInputEnvelope
    connect?: Order_ItemWhereUniqueInput | Order_ItemWhereUniqueInput[]
  }

  export type paymentCreateNestedManyWithoutOrderInput = {
    create?: XOR<paymentCreateWithoutOrderInput, paymentUncheckedCreateWithoutOrderInput> | paymentCreateWithoutOrderInput[] | paymentUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: paymentCreateOrConnectWithoutOrderInput | paymentCreateOrConnectWithoutOrderInput[]
    createMany?: paymentCreateManyOrderInputEnvelope
    connect?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
  }

  export type restaurantsCreateNestedOneWithoutOrdersInput = {
    create?: XOR<restaurantsCreateWithoutOrdersInput, restaurantsUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: restaurantsCreateOrConnectWithoutOrdersInput
    connect?: restaurantsWhereUniqueInput
  }

  export type Order_ItemUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<Order_ItemCreateWithoutOrderInput, Order_ItemUncheckedCreateWithoutOrderInput> | Order_ItemCreateWithoutOrderInput[] | Order_ItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: Order_ItemCreateOrConnectWithoutOrderInput | Order_ItemCreateOrConnectWithoutOrderInput[]
    createMany?: Order_ItemCreateManyOrderInputEnvelope
    connect?: Order_ItemWhereUniqueInput | Order_ItemWhereUniqueInput[]
  }

  export type paymentUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<paymentCreateWithoutOrderInput, paymentUncheckedCreateWithoutOrderInput> | paymentCreateWithoutOrderInput[] | paymentUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: paymentCreateOrConnectWithoutOrderInput | paymentCreateOrConnectWithoutOrderInput[]
    createMany?: paymentCreateManyOrderInputEnvelope
    connect?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
  }

  export type EnumOrderStatusFieldUpdateOperationsInput = {
    set?: $Enums.OrderStatus
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    upsert?: UserUpsertWithoutOrdersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrdersInput, UserUpdateWithoutOrdersInput>, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type tablesUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<tablesCreateWithoutOrdersInput, tablesUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: tablesCreateOrConnectWithoutOrdersInput
    upsert?: tablesUpsertWithoutOrdersInput
    connect?: tablesWhereUniqueInput
    update?: XOR<XOR<tablesUpdateToOneWithWhereWithoutOrdersInput, tablesUpdateWithoutOrdersInput>, tablesUncheckedUpdateWithoutOrdersInput>
  }

  export type Order_ItemUpdateManyWithoutOrderNestedInput = {
    create?: XOR<Order_ItemCreateWithoutOrderInput, Order_ItemUncheckedCreateWithoutOrderInput> | Order_ItemCreateWithoutOrderInput[] | Order_ItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: Order_ItemCreateOrConnectWithoutOrderInput | Order_ItemCreateOrConnectWithoutOrderInput[]
    upsert?: Order_ItemUpsertWithWhereUniqueWithoutOrderInput | Order_ItemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: Order_ItemCreateManyOrderInputEnvelope
    set?: Order_ItemWhereUniqueInput | Order_ItemWhereUniqueInput[]
    disconnect?: Order_ItemWhereUniqueInput | Order_ItemWhereUniqueInput[]
    delete?: Order_ItemWhereUniqueInput | Order_ItemWhereUniqueInput[]
    connect?: Order_ItemWhereUniqueInput | Order_ItemWhereUniqueInput[]
    update?: Order_ItemUpdateWithWhereUniqueWithoutOrderInput | Order_ItemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: Order_ItemUpdateManyWithWhereWithoutOrderInput | Order_ItemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: Order_ItemScalarWhereInput | Order_ItemScalarWhereInput[]
  }

  export type paymentUpdateManyWithoutOrderNestedInput = {
    create?: XOR<paymentCreateWithoutOrderInput, paymentUncheckedCreateWithoutOrderInput> | paymentCreateWithoutOrderInput[] | paymentUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: paymentCreateOrConnectWithoutOrderInput | paymentCreateOrConnectWithoutOrderInput[]
    upsert?: paymentUpsertWithWhereUniqueWithoutOrderInput | paymentUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: paymentCreateManyOrderInputEnvelope
    set?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
    disconnect?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
    delete?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
    connect?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
    update?: paymentUpdateWithWhereUniqueWithoutOrderInput | paymentUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: paymentUpdateManyWithWhereWithoutOrderInput | paymentUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: paymentScalarWhereInput | paymentScalarWhereInput[]
  }

  export type restaurantsUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<restaurantsCreateWithoutOrdersInput, restaurantsUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: restaurantsCreateOrConnectWithoutOrdersInput
    upsert?: restaurantsUpsertWithoutOrdersInput
    connect?: restaurantsWhereUniqueInput
    update?: XOR<XOR<restaurantsUpdateToOneWithWhereWithoutOrdersInput, restaurantsUpdateWithoutOrdersInput>, restaurantsUncheckedUpdateWithoutOrdersInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type Order_ItemUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<Order_ItemCreateWithoutOrderInput, Order_ItemUncheckedCreateWithoutOrderInput> | Order_ItemCreateWithoutOrderInput[] | Order_ItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: Order_ItemCreateOrConnectWithoutOrderInput | Order_ItemCreateOrConnectWithoutOrderInput[]
    upsert?: Order_ItemUpsertWithWhereUniqueWithoutOrderInput | Order_ItemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: Order_ItemCreateManyOrderInputEnvelope
    set?: Order_ItemWhereUniqueInput | Order_ItemWhereUniqueInput[]
    disconnect?: Order_ItemWhereUniqueInput | Order_ItemWhereUniqueInput[]
    delete?: Order_ItemWhereUniqueInput | Order_ItemWhereUniqueInput[]
    connect?: Order_ItemWhereUniqueInput | Order_ItemWhereUniqueInput[]
    update?: Order_ItemUpdateWithWhereUniqueWithoutOrderInput | Order_ItemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: Order_ItemUpdateManyWithWhereWithoutOrderInput | Order_ItemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: Order_ItemScalarWhereInput | Order_ItemScalarWhereInput[]
  }

  export type paymentUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<paymentCreateWithoutOrderInput, paymentUncheckedCreateWithoutOrderInput> | paymentCreateWithoutOrderInput[] | paymentUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: paymentCreateOrConnectWithoutOrderInput | paymentCreateOrConnectWithoutOrderInput[]
    upsert?: paymentUpsertWithWhereUniqueWithoutOrderInput | paymentUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: paymentCreateManyOrderInputEnvelope
    set?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
    disconnect?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
    delete?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
    connect?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
    update?: paymentUpdateWithWhereUniqueWithoutOrderInput | paymentUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: paymentUpdateManyWithWhereWithoutOrderInput | paymentUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: paymentScalarWhereInput | paymentScalarWhereInput[]
  }

  export type restaurantsCreateNestedOneWithoutTablesInput = {
    create?: XOR<restaurantsCreateWithoutTablesInput, restaurantsUncheckedCreateWithoutTablesInput>
    connectOrCreate?: restaurantsCreateOrConnectWithoutTablesInput
    connect?: restaurantsWhereUniqueInput
  }

  export type OrdersCreateNestedManyWithoutTableInput = {
    create?: XOR<OrdersCreateWithoutTableInput, OrdersUncheckedCreateWithoutTableInput> | OrdersCreateWithoutTableInput[] | OrdersUncheckedCreateWithoutTableInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutTableInput | OrdersCreateOrConnectWithoutTableInput[]
    createMany?: OrdersCreateManyTableInputEnvelope
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
  }

  export type OrdersUncheckedCreateNestedManyWithoutTableInput = {
    create?: XOR<OrdersCreateWithoutTableInput, OrdersUncheckedCreateWithoutTableInput> | OrdersCreateWithoutTableInput[] | OrdersUncheckedCreateWithoutTableInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutTableInput | OrdersCreateOrConnectWithoutTableInput[]
    createMany?: OrdersCreateManyTableInputEnvelope
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
  }

  export type restaurantsUpdateOneRequiredWithoutTablesNestedInput = {
    create?: XOR<restaurantsCreateWithoutTablesInput, restaurantsUncheckedCreateWithoutTablesInput>
    connectOrCreate?: restaurantsCreateOrConnectWithoutTablesInput
    upsert?: restaurantsUpsertWithoutTablesInput
    connect?: restaurantsWhereUniqueInput
    update?: XOR<XOR<restaurantsUpdateToOneWithWhereWithoutTablesInput, restaurantsUpdateWithoutTablesInput>, restaurantsUncheckedUpdateWithoutTablesInput>
  }

  export type OrdersUpdateManyWithoutTableNestedInput = {
    create?: XOR<OrdersCreateWithoutTableInput, OrdersUncheckedCreateWithoutTableInput> | OrdersCreateWithoutTableInput[] | OrdersUncheckedCreateWithoutTableInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutTableInput | OrdersCreateOrConnectWithoutTableInput[]
    upsert?: OrdersUpsertWithWhereUniqueWithoutTableInput | OrdersUpsertWithWhereUniqueWithoutTableInput[]
    createMany?: OrdersCreateManyTableInputEnvelope
    set?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    disconnect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    delete?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    update?: OrdersUpdateWithWhereUniqueWithoutTableInput | OrdersUpdateWithWhereUniqueWithoutTableInput[]
    updateMany?: OrdersUpdateManyWithWhereWithoutTableInput | OrdersUpdateManyWithWhereWithoutTableInput[]
    deleteMany?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
  }

  export type OrdersUncheckedUpdateManyWithoutTableNestedInput = {
    create?: XOR<OrdersCreateWithoutTableInput, OrdersUncheckedCreateWithoutTableInput> | OrdersCreateWithoutTableInput[] | OrdersUncheckedCreateWithoutTableInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutTableInput | OrdersCreateOrConnectWithoutTableInput[]
    upsert?: OrdersUpsertWithWhereUniqueWithoutTableInput | OrdersUpsertWithWhereUniqueWithoutTableInput[]
    createMany?: OrdersCreateManyTableInputEnvelope
    set?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    disconnect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    delete?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    update?: OrdersUpdateWithWhereUniqueWithoutTableInput | OrdersUpdateWithWhereUniqueWithoutTableInput[]
    updateMany?: OrdersUpdateManyWithWhereWithoutTableInput | OrdersUpdateManyWithWhereWithoutTableInput[]
    deleteMany?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
  }

  export type OrdersCreateNestedOneWithoutOrder_ItemInput = {
    create?: XOR<OrdersCreateWithoutOrder_ItemInput, OrdersUncheckedCreateWithoutOrder_ItemInput>
    connectOrCreate?: OrdersCreateOrConnectWithoutOrder_ItemInput
    connect?: OrdersWhereUniqueInput
  }

  export type menuItemCreateNestedOneWithoutOrder_ItemInput = {
    create?: XOR<menuItemCreateWithoutOrder_ItemInput, menuItemUncheckedCreateWithoutOrder_ItemInput>
    connectOrCreate?: menuItemCreateOrConnectWithoutOrder_ItemInput
    connect?: menuItemWhereUniqueInput
  }

  export type OrdersUpdateOneRequiredWithoutOrder_ItemNestedInput = {
    create?: XOR<OrdersCreateWithoutOrder_ItemInput, OrdersUncheckedCreateWithoutOrder_ItemInput>
    connectOrCreate?: OrdersCreateOrConnectWithoutOrder_ItemInput
    upsert?: OrdersUpsertWithoutOrder_ItemInput
    connect?: OrdersWhereUniqueInput
    update?: XOR<XOR<OrdersUpdateToOneWithWhereWithoutOrder_ItemInput, OrdersUpdateWithoutOrder_ItemInput>, OrdersUncheckedUpdateWithoutOrder_ItemInput>
  }

  export type menuItemUpdateOneRequiredWithoutOrder_ItemNestedInput = {
    create?: XOR<menuItemCreateWithoutOrder_ItemInput, menuItemUncheckedCreateWithoutOrder_ItemInput>
    connectOrCreate?: menuItemCreateOrConnectWithoutOrder_ItemInput
    upsert?: menuItemUpsertWithoutOrder_ItemInput
    connect?: menuItemWhereUniqueInput
    update?: XOR<XOR<menuItemUpdateToOneWithWhereWithoutOrder_ItemInput, menuItemUpdateWithoutOrder_ItemInput>, menuItemUncheckedUpdateWithoutOrder_ItemInput>
  }

  export type OrdersCreateNestedOneWithoutPaymentInput = {
    create?: XOR<OrdersCreateWithoutPaymentInput, OrdersUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: OrdersCreateOrConnectWithoutPaymentInput
    connect?: OrdersWhereUniqueInput
  }

  export type EnummethodFieldUpdateOperationsInput = {
    set?: $Enums.method
  }

  export type EnumstatusFieldUpdateOperationsInput = {
    set?: $Enums.status
  }

  export type OrdersUpdateOneRequiredWithoutPaymentNestedInput = {
    create?: XOR<OrdersCreateWithoutPaymentInput, OrdersUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: OrdersCreateOrConnectWithoutPaymentInput
    upsert?: OrdersUpsertWithoutPaymentInput
    connect?: OrdersWhereUniqueInput
    update?: XOR<XOR<OrdersUpdateToOneWithWhereWithoutPaymentInput, OrdersUpdateWithoutPaymentInput>, OrdersUncheckedUpdateWithoutPaymentInput>
  }

  export type menuItemCreatetagsInput = {
    set: string[]
  }

  export type menu_categoriesCreateNestedOneWithoutMenuItemInput = {
    create?: XOR<menu_categoriesCreateWithoutMenuItemInput, menu_categoriesUncheckedCreateWithoutMenuItemInput>
    connectOrCreate?: menu_categoriesCreateOrConnectWithoutMenuItemInput
    connect?: menu_categoriesWhereUniqueInput
  }

  export type restaurantsCreateNestedOneWithoutMenuItemInput = {
    create?: XOR<restaurantsCreateWithoutMenuItemInput, restaurantsUncheckedCreateWithoutMenuItemInput>
    connectOrCreate?: restaurantsCreateOrConnectWithoutMenuItemInput
    connect?: restaurantsWhereUniqueInput
  }

  export type Order_ItemCreateNestedManyWithoutMenuItemInput = {
    create?: XOR<Order_ItemCreateWithoutMenuItemInput, Order_ItemUncheckedCreateWithoutMenuItemInput> | Order_ItemCreateWithoutMenuItemInput[] | Order_ItemUncheckedCreateWithoutMenuItemInput[]
    connectOrCreate?: Order_ItemCreateOrConnectWithoutMenuItemInput | Order_ItemCreateOrConnectWithoutMenuItemInput[]
    createMany?: Order_ItemCreateManyMenuItemInputEnvelope
    connect?: Order_ItemWhereUniqueInput | Order_ItemWhereUniqueInput[]
  }

  export type Order_ItemUncheckedCreateNestedManyWithoutMenuItemInput = {
    create?: XOR<Order_ItemCreateWithoutMenuItemInput, Order_ItemUncheckedCreateWithoutMenuItemInput> | Order_ItemCreateWithoutMenuItemInput[] | Order_ItemUncheckedCreateWithoutMenuItemInput[]
    connectOrCreate?: Order_ItemCreateOrConnectWithoutMenuItemInput | Order_ItemCreateOrConnectWithoutMenuItemInput[]
    createMany?: Order_ItemCreateManyMenuItemInputEnvelope
    connect?: Order_ItemWhereUniqueInput | Order_ItemWhereUniqueInput[]
  }

  export type menuItemUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type menu_categoriesUpdateOneWithoutMenuItemNestedInput = {
    create?: XOR<menu_categoriesCreateWithoutMenuItemInput, menu_categoriesUncheckedCreateWithoutMenuItemInput>
    connectOrCreate?: menu_categoriesCreateOrConnectWithoutMenuItemInput
    upsert?: menu_categoriesUpsertWithoutMenuItemInput
    disconnect?: menu_categoriesWhereInput | boolean
    delete?: menu_categoriesWhereInput | boolean
    connect?: menu_categoriesWhereUniqueInput
    update?: XOR<XOR<menu_categoriesUpdateToOneWithWhereWithoutMenuItemInput, menu_categoriesUpdateWithoutMenuItemInput>, menu_categoriesUncheckedUpdateWithoutMenuItemInput>
  }

  export type restaurantsUpdateOneRequiredWithoutMenuItemNestedInput = {
    create?: XOR<restaurantsCreateWithoutMenuItemInput, restaurantsUncheckedCreateWithoutMenuItemInput>
    connectOrCreate?: restaurantsCreateOrConnectWithoutMenuItemInput
    upsert?: restaurantsUpsertWithoutMenuItemInput
    connect?: restaurantsWhereUniqueInput
    update?: XOR<XOR<restaurantsUpdateToOneWithWhereWithoutMenuItemInput, restaurantsUpdateWithoutMenuItemInput>, restaurantsUncheckedUpdateWithoutMenuItemInput>
  }

  export type Order_ItemUpdateManyWithoutMenuItemNestedInput = {
    create?: XOR<Order_ItemCreateWithoutMenuItemInput, Order_ItemUncheckedCreateWithoutMenuItemInput> | Order_ItemCreateWithoutMenuItemInput[] | Order_ItemUncheckedCreateWithoutMenuItemInput[]
    connectOrCreate?: Order_ItemCreateOrConnectWithoutMenuItemInput | Order_ItemCreateOrConnectWithoutMenuItemInput[]
    upsert?: Order_ItemUpsertWithWhereUniqueWithoutMenuItemInput | Order_ItemUpsertWithWhereUniqueWithoutMenuItemInput[]
    createMany?: Order_ItemCreateManyMenuItemInputEnvelope
    set?: Order_ItemWhereUniqueInput | Order_ItemWhereUniqueInput[]
    disconnect?: Order_ItemWhereUniqueInput | Order_ItemWhereUniqueInput[]
    delete?: Order_ItemWhereUniqueInput | Order_ItemWhereUniqueInput[]
    connect?: Order_ItemWhereUniqueInput | Order_ItemWhereUniqueInput[]
    update?: Order_ItemUpdateWithWhereUniqueWithoutMenuItemInput | Order_ItemUpdateWithWhereUniqueWithoutMenuItemInput[]
    updateMany?: Order_ItemUpdateManyWithWhereWithoutMenuItemInput | Order_ItemUpdateManyWithWhereWithoutMenuItemInput[]
    deleteMany?: Order_ItemScalarWhereInput | Order_ItemScalarWhereInput[]
  }

  export type Order_ItemUncheckedUpdateManyWithoutMenuItemNestedInput = {
    create?: XOR<Order_ItemCreateWithoutMenuItemInput, Order_ItemUncheckedCreateWithoutMenuItemInput> | Order_ItemCreateWithoutMenuItemInput[] | Order_ItemUncheckedCreateWithoutMenuItemInput[]
    connectOrCreate?: Order_ItemCreateOrConnectWithoutMenuItemInput | Order_ItemCreateOrConnectWithoutMenuItemInput[]
    upsert?: Order_ItemUpsertWithWhereUniqueWithoutMenuItemInput | Order_ItemUpsertWithWhereUniqueWithoutMenuItemInput[]
    createMany?: Order_ItemCreateManyMenuItemInputEnvelope
    set?: Order_ItemWhereUniqueInput | Order_ItemWhereUniqueInput[]
    disconnect?: Order_ItemWhereUniqueInput | Order_ItemWhereUniqueInput[]
    delete?: Order_ItemWhereUniqueInput | Order_ItemWhereUniqueInput[]
    connect?: Order_ItemWhereUniqueInput | Order_ItemWhereUniqueInput[]
    update?: Order_ItemUpdateWithWhereUniqueWithoutMenuItemInput | Order_ItemUpdateWithWhereUniqueWithoutMenuItemInput[]
    updateMany?: Order_ItemUpdateManyWithWhereWithoutMenuItemInput | Order_ItemUpdateManyWithWhereWithoutMenuItemInput[]
    deleteMany?: Order_ItemScalarWhereInput | Order_ItemScalarWhereInput[]
  }

  export type restaurantsCreateNestedOneWithoutMenu_categoriesInput = {
    create?: XOR<restaurantsCreateWithoutMenu_categoriesInput, restaurantsUncheckedCreateWithoutMenu_categoriesInput>
    connectOrCreate?: restaurantsCreateOrConnectWithoutMenu_categoriesInput
    connect?: restaurantsWhereUniqueInput
  }

  export type menuItemCreateNestedManyWithoutCategoryInput = {
    create?: XOR<menuItemCreateWithoutCategoryInput, menuItemUncheckedCreateWithoutCategoryInput> | menuItemCreateWithoutCategoryInput[] | menuItemUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: menuItemCreateOrConnectWithoutCategoryInput | menuItemCreateOrConnectWithoutCategoryInput[]
    createMany?: menuItemCreateManyCategoryInputEnvelope
    connect?: menuItemWhereUniqueInput | menuItemWhereUniqueInput[]
  }

  export type menuItemUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<menuItemCreateWithoutCategoryInput, menuItemUncheckedCreateWithoutCategoryInput> | menuItemCreateWithoutCategoryInput[] | menuItemUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: menuItemCreateOrConnectWithoutCategoryInput | menuItemCreateOrConnectWithoutCategoryInput[]
    createMany?: menuItemCreateManyCategoryInputEnvelope
    connect?: menuItemWhereUniqueInput | menuItemWhereUniqueInput[]
  }

  export type restaurantsUpdateOneRequiredWithoutMenu_categoriesNestedInput = {
    create?: XOR<restaurantsCreateWithoutMenu_categoriesInput, restaurantsUncheckedCreateWithoutMenu_categoriesInput>
    connectOrCreate?: restaurantsCreateOrConnectWithoutMenu_categoriesInput
    upsert?: restaurantsUpsertWithoutMenu_categoriesInput
    connect?: restaurantsWhereUniqueInput
    update?: XOR<XOR<restaurantsUpdateToOneWithWhereWithoutMenu_categoriesInput, restaurantsUpdateWithoutMenu_categoriesInput>, restaurantsUncheckedUpdateWithoutMenu_categoriesInput>
  }

  export type menuItemUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<menuItemCreateWithoutCategoryInput, menuItemUncheckedCreateWithoutCategoryInput> | menuItemCreateWithoutCategoryInput[] | menuItemUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: menuItemCreateOrConnectWithoutCategoryInput | menuItemCreateOrConnectWithoutCategoryInput[]
    upsert?: menuItemUpsertWithWhereUniqueWithoutCategoryInput | menuItemUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: menuItemCreateManyCategoryInputEnvelope
    set?: menuItemWhereUniqueInput | menuItemWhereUniqueInput[]
    disconnect?: menuItemWhereUniqueInput | menuItemWhereUniqueInput[]
    delete?: menuItemWhereUniqueInput | menuItemWhereUniqueInput[]
    connect?: menuItemWhereUniqueInput | menuItemWhereUniqueInput[]
    update?: menuItemUpdateWithWhereUniqueWithoutCategoryInput | menuItemUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: menuItemUpdateManyWithWhereWithoutCategoryInput | menuItemUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: menuItemScalarWhereInput | menuItemScalarWhereInput[]
  }

  export type menuItemUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<menuItemCreateWithoutCategoryInput, menuItemUncheckedCreateWithoutCategoryInput> | menuItemCreateWithoutCategoryInput[] | menuItemUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: menuItemCreateOrConnectWithoutCategoryInput | menuItemCreateOrConnectWithoutCategoryInput[]
    upsert?: menuItemUpsertWithWhereUniqueWithoutCategoryInput | menuItemUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: menuItemCreateManyCategoryInputEnvelope
    set?: menuItemWhereUniqueInput | menuItemWhereUniqueInput[]
    disconnect?: menuItemWhereUniqueInput | menuItemWhereUniqueInput[]
    delete?: menuItemWhereUniqueInput | menuItemWhereUniqueInput[]
    connect?: menuItemWhereUniqueInput | menuItemWhereUniqueInput[]
    update?: menuItemUpdateWithWhereUniqueWithoutCategoryInput | menuItemUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: menuItemUpdateManyWithWhereWithoutCategoryInput | menuItemUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: menuItemScalarWhereInput | menuItemScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnummethodFilter<$PrismaModel = never> = {
    equals?: $Enums.method | EnummethodFieldRefInput<$PrismaModel>
    in?: $Enums.method[] | ListEnummethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.method[] | ListEnummethodFieldRefInput<$PrismaModel>
    not?: NestedEnummethodFilter<$PrismaModel> | $Enums.method
  }

  export type NestedEnumstatusFilter<$PrismaModel = never> = {
    equals?: $Enums.status | EnumstatusFieldRefInput<$PrismaModel>
    in?: $Enums.status[] | ListEnumstatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.status[] | ListEnumstatusFieldRefInput<$PrismaModel>
    not?: NestedEnumstatusFilter<$PrismaModel> | $Enums.status
  }

  export type NestedEnummethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.method | EnummethodFieldRefInput<$PrismaModel>
    in?: $Enums.method[] | ListEnummethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.method[] | ListEnummethodFieldRefInput<$PrismaModel>
    not?: NestedEnummethodWithAggregatesFilter<$PrismaModel> | $Enums.method
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnummethodFilter<$PrismaModel>
    _max?: NestedEnummethodFilter<$PrismaModel>
  }

  export type NestedEnumstatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.status | EnumstatusFieldRefInput<$PrismaModel>
    in?: $Enums.status[] | ListEnumstatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.status[] | ListEnumstatusFieldRefInput<$PrismaModel>
    not?: NestedEnumstatusWithAggregatesFilter<$PrismaModel> | $Enums.status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumstatusFilter<$PrismaModel>
    _max?: NestedEnumstatusFilter<$PrismaModel>
  }

  export type NotificationCreateWithoutUserInput = {
    id?: string
    type: string
    message: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    message: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationCreateOrConnectWithoutUserInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationCreateManyUserInputEnvelope = {
    data: NotificationCreateManyUserInput | NotificationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OrdersCreateWithoutUserInput = {
    status?: $Enums.OrderStatus
    total?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    table: tablesCreateNestedOneWithoutOrdersInput
    Order_Item?: Order_ItemCreateNestedManyWithoutOrderInput
    payment?: paymentCreateNestedManyWithoutOrderInput
    restaurant: restaurantsCreateNestedOneWithoutOrdersInput
  }

  export type OrdersUncheckedCreateWithoutUserInput = {
    id?: number
    tableId: string
    status?: $Enums.OrderStatus
    total?: number
    restaurantId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Order_Item?: Order_ItemUncheckedCreateNestedManyWithoutOrderInput
    payment?: paymentUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrdersCreateOrConnectWithoutUserInput = {
    where: OrdersWhereUniqueInput
    create: XOR<OrdersCreateWithoutUserInput, OrdersUncheckedCreateWithoutUserInput>
  }

  export type OrdersCreateManyUserInputEnvelope = {
    data: OrdersCreateManyUserInput | OrdersCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type restaurantsCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    address: string
    phone?: string | null
    email?: string | null
    logoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    menuItem?: menuItemCreateNestedManyWithoutRestaurantInput
    menu_categories?: menu_categoriesCreateNestedManyWithoutRestaurantInput
    tables?: tablesCreateNestedManyWithoutRestaurantInput
    Orders?: OrdersCreateNestedManyWithoutRestaurantInput
    Waiter?: WaiterCreateNestedManyWithoutRestaurantInput
    Kitchen?: KitchenCreateNestedManyWithoutRestaurantInput
  }

  export type restaurantsUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    address: string
    phone?: string | null
    email?: string | null
    logoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    menuItem?: menuItemUncheckedCreateNestedManyWithoutRestaurantInput
    menu_categories?: menu_categoriesUncheckedCreateNestedManyWithoutRestaurantInput
    tables?: tablesUncheckedCreateNestedManyWithoutRestaurantInput
    Orders?: OrdersUncheckedCreateNestedManyWithoutRestaurantInput
    Waiter?: WaiterUncheckedCreateNestedManyWithoutRestaurantInput
    Kitchen?: KitchenUncheckedCreateNestedManyWithoutRestaurantInput
  }

  export type restaurantsCreateOrConnectWithoutUserInput = {
    where: restaurantsWhereUniqueInput
    create: XOR<restaurantsCreateWithoutUserInput, restaurantsUncheckedCreateWithoutUserInput>
  }

  export type restaurantsCreateManyUserInputEnvelope = {
    data: restaurantsCreateManyUserInput | restaurantsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
  }

  export type NotificationUpdateManyWithWhereWithoutUserInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: StringFilter<"Notification"> | string
    userId?: StringFilter<"Notification"> | string
    type?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    isRead?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
  }

  export type OrdersUpsertWithWhereUniqueWithoutUserInput = {
    where: OrdersWhereUniqueInput
    update: XOR<OrdersUpdateWithoutUserInput, OrdersUncheckedUpdateWithoutUserInput>
    create: XOR<OrdersCreateWithoutUserInput, OrdersUncheckedCreateWithoutUserInput>
  }

  export type OrdersUpdateWithWhereUniqueWithoutUserInput = {
    where: OrdersWhereUniqueInput
    data: XOR<OrdersUpdateWithoutUserInput, OrdersUncheckedUpdateWithoutUserInput>
  }

  export type OrdersUpdateManyWithWhereWithoutUserInput = {
    where: OrdersScalarWhereInput
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyWithoutUserInput>
  }

  export type OrdersScalarWhereInput = {
    AND?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
    OR?: OrdersScalarWhereInput[]
    NOT?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
    id?: IntFilter<"Orders"> | number
    userId?: StringFilter<"Orders"> | string
    tableId?: StringFilter<"Orders"> | string
    status?: EnumOrderStatusFilter<"Orders"> | $Enums.OrderStatus
    total?: FloatFilter<"Orders"> | number
    restaurantId?: StringFilter<"Orders"> | string
    createdAt?: DateTimeFilter<"Orders"> | Date | string
    updatedAt?: DateTimeFilter<"Orders"> | Date | string
  }

  export type restaurantsUpsertWithWhereUniqueWithoutUserInput = {
    where: restaurantsWhereUniqueInput
    update: XOR<restaurantsUpdateWithoutUserInput, restaurantsUncheckedUpdateWithoutUserInput>
    create: XOR<restaurantsCreateWithoutUserInput, restaurantsUncheckedCreateWithoutUserInput>
  }

  export type restaurantsUpdateWithWhereUniqueWithoutUserInput = {
    where: restaurantsWhereUniqueInput
    data: XOR<restaurantsUpdateWithoutUserInput, restaurantsUncheckedUpdateWithoutUserInput>
  }

  export type restaurantsUpdateManyWithWhereWithoutUserInput = {
    where: restaurantsScalarWhereInput
    data: XOR<restaurantsUpdateManyMutationInput, restaurantsUncheckedUpdateManyWithoutUserInput>
  }

  export type restaurantsScalarWhereInput = {
    AND?: restaurantsScalarWhereInput | restaurantsScalarWhereInput[]
    OR?: restaurantsScalarWhereInput[]
    NOT?: restaurantsScalarWhereInput | restaurantsScalarWhereInput[]
    id?: StringFilter<"restaurants"> | string
    name?: StringFilter<"restaurants"> | string
    description?: StringNullableFilter<"restaurants"> | string | null
    address?: StringFilter<"restaurants"> | string
    phone?: StringNullableFilter<"restaurants"> | string | null
    email?: StringNullableFilter<"restaurants"> | string | null
    logoUrl?: StringNullableFilter<"restaurants"> | string | null
    userId?: StringFilter<"restaurants"> | string
    createdAt?: DateTimeFilter<"restaurants"> | Date | string
    updatedAt?: DateTimeFilter<"restaurants"> | Date | string
  }

  export type restaurantsCreateWithoutWaiterInput = {
    id?: string
    name: string
    description?: string | null
    address: string
    phone?: string | null
    email?: string | null
    logoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRestaurantsInput
    menuItem?: menuItemCreateNestedManyWithoutRestaurantInput
    menu_categories?: menu_categoriesCreateNestedManyWithoutRestaurantInput
    tables?: tablesCreateNestedManyWithoutRestaurantInput
    Orders?: OrdersCreateNestedManyWithoutRestaurantInput
    Kitchen?: KitchenCreateNestedManyWithoutRestaurantInput
  }

  export type restaurantsUncheckedCreateWithoutWaiterInput = {
    id?: string
    name: string
    description?: string | null
    address: string
    phone?: string | null
    email?: string | null
    logoUrl?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    menuItem?: menuItemUncheckedCreateNestedManyWithoutRestaurantInput
    menu_categories?: menu_categoriesUncheckedCreateNestedManyWithoutRestaurantInput
    tables?: tablesUncheckedCreateNestedManyWithoutRestaurantInput
    Orders?: OrdersUncheckedCreateNestedManyWithoutRestaurantInput
    Kitchen?: KitchenUncheckedCreateNestedManyWithoutRestaurantInput
  }

  export type restaurantsCreateOrConnectWithoutWaiterInput = {
    where: restaurantsWhereUniqueInput
    create: XOR<restaurantsCreateWithoutWaiterInput, restaurantsUncheckedCreateWithoutWaiterInput>
  }

  export type restaurantsUpsertWithoutWaiterInput = {
    update: XOR<restaurantsUpdateWithoutWaiterInput, restaurantsUncheckedUpdateWithoutWaiterInput>
    create: XOR<restaurantsCreateWithoutWaiterInput, restaurantsUncheckedCreateWithoutWaiterInput>
    where?: restaurantsWhereInput
  }

  export type restaurantsUpdateToOneWithWhereWithoutWaiterInput = {
    where?: restaurantsWhereInput
    data: XOR<restaurantsUpdateWithoutWaiterInput, restaurantsUncheckedUpdateWithoutWaiterInput>
  }

  export type restaurantsUpdateWithoutWaiterInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRestaurantsNestedInput
    menuItem?: menuItemUpdateManyWithoutRestaurantNestedInput
    menu_categories?: menu_categoriesUpdateManyWithoutRestaurantNestedInput
    tables?: tablesUpdateManyWithoutRestaurantNestedInput
    Orders?: OrdersUpdateManyWithoutRestaurantNestedInput
    Kitchen?: KitchenUpdateManyWithoutRestaurantNestedInput
  }

  export type restaurantsUncheckedUpdateWithoutWaiterInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    menuItem?: menuItemUncheckedUpdateManyWithoutRestaurantNestedInput
    menu_categories?: menu_categoriesUncheckedUpdateManyWithoutRestaurantNestedInput
    tables?: tablesUncheckedUpdateManyWithoutRestaurantNestedInput
    Orders?: OrdersUncheckedUpdateManyWithoutRestaurantNestedInput
    Kitchen?: KitchenUncheckedUpdateManyWithoutRestaurantNestedInput
  }

  export type restaurantsCreateWithoutKitchenInput = {
    id?: string
    name: string
    description?: string | null
    address: string
    phone?: string | null
    email?: string | null
    logoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRestaurantsInput
    menuItem?: menuItemCreateNestedManyWithoutRestaurantInput
    menu_categories?: menu_categoriesCreateNestedManyWithoutRestaurantInput
    tables?: tablesCreateNestedManyWithoutRestaurantInput
    Orders?: OrdersCreateNestedManyWithoutRestaurantInput
    Waiter?: WaiterCreateNestedManyWithoutRestaurantInput
  }

  export type restaurantsUncheckedCreateWithoutKitchenInput = {
    id?: string
    name: string
    description?: string | null
    address: string
    phone?: string | null
    email?: string | null
    logoUrl?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    menuItem?: menuItemUncheckedCreateNestedManyWithoutRestaurantInput
    menu_categories?: menu_categoriesUncheckedCreateNestedManyWithoutRestaurantInput
    tables?: tablesUncheckedCreateNestedManyWithoutRestaurantInput
    Orders?: OrdersUncheckedCreateNestedManyWithoutRestaurantInput
    Waiter?: WaiterUncheckedCreateNestedManyWithoutRestaurantInput
  }

  export type restaurantsCreateOrConnectWithoutKitchenInput = {
    where: restaurantsWhereUniqueInput
    create: XOR<restaurantsCreateWithoutKitchenInput, restaurantsUncheckedCreateWithoutKitchenInput>
  }

  export type restaurantsUpsertWithoutKitchenInput = {
    update: XOR<restaurantsUpdateWithoutKitchenInput, restaurantsUncheckedUpdateWithoutKitchenInput>
    create: XOR<restaurantsCreateWithoutKitchenInput, restaurantsUncheckedCreateWithoutKitchenInput>
    where?: restaurantsWhereInput
  }

  export type restaurantsUpdateToOneWithWhereWithoutKitchenInput = {
    where?: restaurantsWhereInput
    data: XOR<restaurantsUpdateWithoutKitchenInput, restaurantsUncheckedUpdateWithoutKitchenInput>
  }

  export type restaurantsUpdateWithoutKitchenInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRestaurantsNestedInput
    menuItem?: menuItemUpdateManyWithoutRestaurantNestedInput
    menu_categories?: menu_categoriesUpdateManyWithoutRestaurantNestedInput
    tables?: tablesUpdateManyWithoutRestaurantNestedInput
    Orders?: OrdersUpdateManyWithoutRestaurantNestedInput
    Waiter?: WaiterUpdateManyWithoutRestaurantNestedInput
  }

  export type restaurantsUncheckedUpdateWithoutKitchenInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    menuItem?: menuItemUncheckedUpdateManyWithoutRestaurantNestedInput
    menu_categories?: menu_categoriesUncheckedUpdateManyWithoutRestaurantNestedInput
    tables?: tablesUncheckedUpdateManyWithoutRestaurantNestedInput
    Orders?: OrdersUncheckedUpdateManyWithoutRestaurantNestedInput
    Waiter?: WaiterUncheckedUpdateManyWithoutRestaurantNestedInput
  }

  export type UserCreateWithoutRestaurantsInput = {
    id?: string
    username: string
    fullName: string
    email: string
    password: string
    avatar?: string | null
    role?: $Enums.Role
    isVerified?: boolean
    accessToken?: string | null
    verificationToken?: string | null
    verificationTokenExpiry?: Date | string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Notification?: NotificationCreateNestedManyWithoutUserInput
    Orders?: OrdersCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRestaurantsInput = {
    id?: string
    username: string
    fullName: string
    email: string
    password: string
    avatar?: string | null
    role?: $Enums.Role
    isVerified?: boolean
    accessToken?: string | null
    verificationToken?: string | null
    verificationTokenExpiry?: Date | string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Notification?: NotificationUncheckedCreateNestedManyWithoutUserInput
    Orders?: OrdersUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRestaurantsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRestaurantsInput, UserUncheckedCreateWithoutRestaurantsInput>
  }

  export type menuItemCreateWithoutRestaurantInput = {
    id?: string
    name: string
    description?: string | null
    price: number
    imageUrl?: string | null
    available?: boolean
    tags?: menuItemCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: menu_categoriesCreateNestedOneWithoutMenuItemInput
    Order_Item?: Order_ItemCreateNestedManyWithoutMenuItemInput
  }

  export type menuItemUncheckedCreateWithoutRestaurantInput = {
    id?: string
    name: string
    description?: string | null
    price: number
    imageUrl?: string | null
    available?: boolean
    categoryId?: string | null
    tags?: menuItemCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    Order_Item?: Order_ItemUncheckedCreateNestedManyWithoutMenuItemInput
  }

  export type menuItemCreateOrConnectWithoutRestaurantInput = {
    where: menuItemWhereUniqueInput
    create: XOR<menuItemCreateWithoutRestaurantInput, menuItemUncheckedCreateWithoutRestaurantInput>
  }

  export type menuItemCreateManyRestaurantInputEnvelope = {
    data: menuItemCreateManyRestaurantInput | menuItemCreateManyRestaurantInput[]
    skipDuplicates?: boolean
  }

  export type menu_categoriesCreateWithoutRestaurantInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    menuItem?: menuItemCreateNestedManyWithoutCategoryInput
  }

  export type menu_categoriesUncheckedCreateWithoutRestaurantInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    menuItem?: menuItemUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type menu_categoriesCreateOrConnectWithoutRestaurantInput = {
    where: menu_categoriesWhereUniqueInput
    create: XOR<menu_categoriesCreateWithoutRestaurantInput, menu_categoriesUncheckedCreateWithoutRestaurantInput>
  }

  export type menu_categoriesCreateManyRestaurantInputEnvelope = {
    data: menu_categoriesCreateManyRestaurantInput | menu_categoriesCreateManyRestaurantInput[]
    skipDuplicates?: boolean
  }

  export type tablesCreateWithoutRestaurantInput = {
    id?: string
    number: number
    capacity: number
    qrCodeUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Orders?: OrdersCreateNestedManyWithoutTableInput
  }

  export type tablesUncheckedCreateWithoutRestaurantInput = {
    id?: string
    number: number
    capacity: number
    qrCodeUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Orders?: OrdersUncheckedCreateNestedManyWithoutTableInput
  }

  export type tablesCreateOrConnectWithoutRestaurantInput = {
    where: tablesWhereUniqueInput
    create: XOR<tablesCreateWithoutRestaurantInput, tablesUncheckedCreateWithoutRestaurantInput>
  }

  export type tablesCreateManyRestaurantInputEnvelope = {
    data: tablesCreateManyRestaurantInput | tablesCreateManyRestaurantInput[]
    skipDuplicates?: boolean
  }

  export type OrdersCreateWithoutRestaurantInput = {
    status?: $Enums.OrderStatus
    total?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutOrdersInput
    table: tablesCreateNestedOneWithoutOrdersInput
    Order_Item?: Order_ItemCreateNestedManyWithoutOrderInput
    payment?: paymentCreateNestedManyWithoutOrderInput
  }

  export type OrdersUncheckedCreateWithoutRestaurantInput = {
    id?: number
    userId: string
    tableId: string
    status?: $Enums.OrderStatus
    total?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Order_Item?: Order_ItemUncheckedCreateNestedManyWithoutOrderInput
    payment?: paymentUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrdersCreateOrConnectWithoutRestaurantInput = {
    where: OrdersWhereUniqueInput
    create: XOR<OrdersCreateWithoutRestaurantInput, OrdersUncheckedCreateWithoutRestaurantInput>
  }

  export type OrdersCreateManyRestaurantInputEnvelope = {
    data: OrdersCreateManyRestaurantInput | OrdersCreateManyRestaurantInput[]
    skipDuplicates?: boolean
  }

  export type WaiterCreateWithoutRestaurantInput = {
    id?: string
    fullName: string
    email: string
    password: string
    avatar?: string | null
    accessToken?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WaiterUncheckedCreateWithoutRestaurantInput = {
    id?: string
    fullName: string
    email: string
    password: string
    avatar?: string | null
    accessToken?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WaiterCreateOrConnectWithoutRestaurantInput = {
    where: WaiterWhereUniqueInput
    create: XOR<WaiterCreateWithoutRestaurantInput, WaiterUncheckedCreateWithoutRestaurantInput>
  }

  export type WaiterCreateManyRestaurantInputEnvelope = {
    data: WaiterCreateManyRestaurantInput | WaiterCreateManyRestaurantInput[]
    skipDuplicates?: boolean
  }

  export type KitchenCreateWithoutRestaurantInput = {
    id?: string
    fullName: string
    email: string
    password: string
    avatar?: string | null
    role?: string
    accessToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KitchenUncheckedCreateWithoutRestaurantInput = {
    id?: string
    fullName: string
    email: string
    password: string
    avatar?: string | null
    role?: string
    accessToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KitchenCreateOrConnectWithoutRestaurantInput = {
    where: KitchenWhereUniqueInput
    create: XOR<KitchenCreateWithoutRestaurantInput, KitchenUncheckedCreateWithoutRestaurantInput>
  }

  export type KitchenCreateManyRestaurantInputEnvelope = {
    data: KitchenCreateManyRestaurantInput | KitchenCreateManyRestaurantInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutRestaurantsInput = {
    update: XOR<UserUpdateWithoutRestaurantsInput, UserUncheckedUpdateWithoutRestaurantsInput>
    create: XOR<UserCreateWithoutRestaurantsInput, UserUncheckedCreateWithoutRestaurantsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRestaurantsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRestaurantsInput, UserUncheckedUpdateWithoutRestaurantsInput>
  }

  export type UserUpdateWithoutRestaurantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Notification?: NotificationUpdateManyWithoutUserNestedInput
    Orders?: OrdersUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRestaurantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Notification?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    Orders?: OrdersUncheckedUpdateManyWithoutUserNestedInput
  }

  export type menuItemUpsertWithWhereUniqueWithoutRestaurantInput = {
    where: menuItemWhereUniqueInput
    update: XOR<menuItemUpdateWithoutRestaurantInput, menuItemUncheckedUpdateWithoutRestaurantInput>
    create: XOR<menuItemCreateWithoutRestaurantInput, menuItemUncheckedCreateWithoutRestaurantInput>
  }

  export type menuItemUpdateWithWhereUniqueWithoutRestaurantInput = {
    where: menuItemWhereUniqueInput
    data: XOR<menuItemUpdateWithoutRestaurantInput, menuItemUncheckedUpdateWithoutRestaurantInput>
  }

  export type menuItemUpdateManyWithWhereWithoutRestaurantInput = {
    where: menuItemScalarWhereInput
    data: XOR<menuItemUpdateManyMutationInput, menuItemUncheckedUpdateManyWithoutRestaurantInput>
  }

  export type menuItemScalarWhereInput = {
    AND?: menuItemScalarWhereInput | menuItemScalarWhereInput[]
    OR?: menuItemScalarWhereInput[]
    NOT?: menuItemScalarWhereInput | menuItemScalarWhereInput[]
    id?: StringFilter<"menuItem"> | string
    name?: StringFilter<"menuItem"> | string
    description?: StringNullableFilter<"menuItem"> | string | null
    price?: FloatFilter<"menuItem"> | number
    imageUrl?: StringNullableFilter<"menuItem"> | string | null
    available?: BoolFilter<"menuItem"> | boolean
    restaurantId?: StringFilter<"menuItem"> | string
    categoryId?: StringNullableFilter<"menuItem"> | string | null
    tags?: StringNullableListFilter<"menuItem">
    createdAt?: DateTimeFilter<"menuItem"> | Date | string
    updatedAt?: DateTimeFilter<"menuItem"> | Date | string
  }

  export type menu_categoriesUpsertWithWhereUniqueWithoutRestaurantInput = {
    where: menu_categoriesWhereUniqueInput
    update: XOR<menu_categoriesUpdateWithoutRestaurantInput, menu_categoriesUncheckedUpdateWithoutRestaurantInput>
    create: XOR<menu_categoriesCreateWithoutRestaurantInput, menu_categoriesUncheckedCreateWithoutRestaurantInput>
  }

  export type menu_categoriesUpdateWithWhereUniqueWithoutRestaurantInput = {
    where: menu_categoriesWhereUniqueInput
    data: XOR<menu_categoriesUpdateWithoutRestaurantInput, menu_categoriesUncheckedUpdateWithoutRestaurantInput>
  }

  export type menu_categoriesUpdateManyWithWhereWithoutRestaurantInput = {
    where: menu_categoriesScalarWhereInput
    data: XOR<menu_categoriesUpdateManyMutationInput, menu_categoriesUncheckedUpdateManyWithoutRestaurantInput>
  }

  export type menu_categoriesScalarWhereInput = {
    AND?: menu_categoriesScalarWhereInput | menu_categoriesScalarWhereInput[]
    OR?: menu_categoriesScalarWhereInput[]
    NOT?: menu_categoriesScalarWhereInput | menu_categoriesScalarWhereInput[]
    id?: StringFilter<"menu_categories"> | string
    name?: StringFilter<"menu_categories"> | string
    restaurantId?: StringFilter<"menu_categories"> | string
    createdAt?: DateTimeFilter<"menu_categories"> | Date | string
    updatedAt?: DateTimeFilter<"menu_categories"> | Date | string
  }

  export type tablesUpsertWithWhereUniqueWithoutRestaurantInput = {
    where: tablesWhereUniqueInput
    update: XOR<tablesUpdateWithoutRestaurantInput, tablesUncheckedUpdateWithoutRestaurantInput>
    create: XOR<tablesCreateWithoutRestaurantInput, tablesUncheckedCreateWithoutRestaurantInput>
  }

  export type tablesUpdateWithWhereUniqueWithoutRestaurantInput = {
    where: tablesWhereUniqueInput
    data: XOR<tablesUpdateWithoutRestaurantInput, tablesUncheckedUpdateWithoutRestaurantInput>
  }

  export type tablesUpdateManyWithWhereWithoutRestaurantInput = {
    where: tablesScalarWhereInput
    data: XOR<tablesUpdateManyMutationInput, tablesUncheckedUpdateManyWithoutRestaurantInput>
  }

  export type tablesScalarWhereInput = {
    AND?: tablesScalarWhereInput | tablesScalarWhereInput[]
    OR?: tablesScalarWhereInput[]
    NOT?: tablesScalarWhereInput | tablesScalarWhereInput[]
    id?: StringFilter<"tables"> | string
    number?: IntFilter<"tables"> | number
    capacity?: IntFilter<"tables"> | number
    restaurantId?: StringFilter<"tables"> | string
    qrCodeUrl?: StringNullableFilter<"tables"> | string | null
    createdAt?: DateTimeFilter<"tables"> | Date | string
    updatedAt?: DateTimeFilter<"tables"> | Date | string
  }

  export type OrdersUpsertWithWhereUniqueWithoutRestaurantInput = {
    where: OrdersWhereUniqueInput
    update: XOR<OrdersUpdateWithoutRestaurantInput, OrdersUncheckedUpdateWithoutRestaurantInput>
    create: XOR<OrdersCreateWithoutRestaurantInput, OrdersUncheckedCreateWithoutRestaurantInput>
  }

  export type OrdersUpdateWithWhereUniqueWithoutRestaurantInput = {
    where: OrdersWhereUniqueInput
    data: XOR<OrdersUpdateWithoutRestaurantInput, OrdersUncheckedUpdateWithoutRestaurantInput>
  }

  export type OrdersUpdateManyWithWhereWithoutRestaurantInput = {
    where: OrdersScalarWhereInput
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyWithoutRestaurantInput>
  }

  export type WaiterUpsertWithWhereUniqueWithoutRestaurantInput = {
    where: WaiterWhereUniqueInput
    update: XOR<WaiterUpdateWithoutRestaurantInput, WaiterUncheckedUpdateWithoutRestaurantInput>
    create: XOR<WaiterCreateWithoutRestaurantInput, WaiterUncheckedCreateWithoutRestaurantInput>
  }

  export type WaiterUpdateWithWhereUniqueWithoutRestaurantInput = {
    where: WaiterWhereUniqueInput
    data: XOR<WaiterUpdateWithoutRestaurantInput, WaiterUncheckedUpdateWithoutRestaurantInput>
  }

  export type WaiterUpdateManyWithWhereWithoutRestaurantInput = {
    where: WaiterScalarWhereInput
    data: XOR<WaiterUpdateManyMutationInput, WaiterUncheckedUpdateManyWithoutRestaurantInput>
  }

  export type WaiterScalarWhereInput = {
    AND?: WaiterScalarWhereInput | WaiterScalarWhereInput[]
    OR?: WaiterScalarWhereInput[]
    NOT?: WaiterScalarWhereInput | WaiterScalarWhereInput[]
    id?: StringFilter<"Waiter"> | string
    fullName?: StringFilter<"Waiter"> | string
    email?: StringFilter<"Waiter"> | string
    password?: StringFilter<"Waiter"> | string
    avatar?: StringNullableFilter<"Waiter"> | string | null
    accessToken?: StringNullableFilter<"Waiter"> | string | null
    role?: StringFilter<"Waiter"> | string
    restaurantId?: StringFilter<"Waiter"> | string
    createdAt?: DateTimeFilter<"Waiter"> | Date | string
    updatedAt?: DateTimeFilter<"Waiter"> | Date | string
  }

  export type KitchenUpsertWithWhereUniqueWithoutRestaurantInput = {
    where: KitchenWhereUniqueInput
    update: XOR<KitchenUpdateWithoutRestaurantInput, KitchenUncheckedUpdateWithoutRestaurantInput>
    create: XOR<KitchenCreateWithoutRestaurantInput, KitchenUncheckedCreateWithoutRestaurantInput>
  }

  export type KitchenUpdateWithWhereUniqueWithoutRestaurantInput = {
    where: KitchenWhereUniqueInput
    data: XOR<KitchenUpdateWithoutRestaurantInput, KitchenUncheckedUpdateWithoutRestaurantInput>
  }

  export type KitchenUpdateManyWithWhereWithoutRestaurantInput = {
    where: KitchenScalarWhereInput
    data: XOR<KitchenUpdateManyMutationInput, KitchenUncheckedUpdateManyWithoutRestaurantInput>
  }

  export type KitchenScalarWhereInput = {
    AND?: KitchenScalarWhereInput | KitchenScalarWhereInput[]
    OR?: KitchenScalarWhereInput[]
    NOT?: KitchenScalarWhereInput | KitchenScalarWhereInput[]
    id?: StringFilter<"Kitchen"> | string
    fullName?: StringFilter<"Kitchen"> | string
    email?: StringFilter<"Kitchen"> | string
    password?: StringFilter<"Kitchen"> | string
    avatar?: StringNullableFilter<"Kitchen"> | string | null
    role?: StringFilter<"Kitchen"> | string
    accessToken?: StringNullableFilter<"Kitchen"> | string | null
    restaurantId?: StringFilter<"Kitchen"> | string
    createdAt?: DateTimeFilter<"Kitchen"> | Date | string
    updatedAt?: DateTimeFilter<"Kitchen"> | Date | string
  }

  export type UserCreateWithoutNotificationInput = {
    id?: string
    username: string
    fullName: string
    email: string
    password: string
    avatar?: string | null
    role?: $Enums.Role
    isVerified?: boolean
    accessToken?: string | null
    verificationToken?: string | null
    verificationTokenExpiry?: Date | string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Orders?: OrdersCreateNestedManyWithoutUserInput
    restaurants?: restaurantsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNotificationInput = {
    id?: string
    username: string
    fullName: string
    email: string
    password: string
    avatar?: string | null
    role?: $Enums.Role
    isVerified?: boolean
    accessToken?: string | null
    verificationToken?: string | null
    verificationTokenExpiry?: Date | string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Orders?: OrdersUncheckedCreateNestedManyWithoutUserInput
    restaurants?: restaurantsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNotificationInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationInput, UserUncheckedCreateWithoutNotificationInput>
  }

  export type UserUpsertWithoutNotificationInput = {
    update: XOR<UserUpdateWithoutNotificationInput, UserUncheckedUpdateWithoutNotificationInput>
    create: XOR<UserCreateWithoutNotificationInput, UserUncheckedCreateWithoutNotificationInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationInput, UserUncheckedUpdateWithoutNotificationInput>
  }

  export type UserUpdateWithoutNotificationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Orders?: OrdersUpdateManyWithoutUserNestedInput
    restaurants?: restaurantsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Orders?: OrdersUncheckedUpdateManyWithoutUserNestedInput
    restaurants?: restaurantsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutOrdersInput = {
    id?: string
    username: string
    fullName: string
    email: string
    password: string
    avatar?: string | null
    role?: $Enums.Role
    isVerified?: boolean
    accessToken?: string | null
    verificationToken?: string | null
    verificationTokenExpiry?: Date | string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Notification?: NotificationCreateNestedManyWithoutUserInput
    restaurants?: restaurantsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOrdersInput = {
    id?: string
    username: string
    fullName: string
    email: string
    password: string
    avatar?: string | null
    role?: $Enums.Role
    isVerified?: boolean
    accessToken?: string | null
    verificationToken?: string | null
    verificationTokenExpiry?: Date | string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Notification?: NotificationUncheckedCreateNestedManyWithoutUserInput
    restaurants?: restaurantsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOrdersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
  }

  export type tablesCreateWithoutOrdersInput = {
    id?: string
    number: number
    capacity: number
    qrCodeUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    restaurant: restaurantsCreateNestedOneWithoutTablesInput
  }

  export type tablesUncheckedCreateWithoutOrdersInput = {
    id?: string
    number: number
    capacity: number
    restaurantId: string
    qrCodeUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type tablesCreateOrConnectWithoutOrdersInput = {
    where: tablesWhereUniqueInput
    create: XOR<tablesCreateWithoutOrdersInput, tablesUncheckedCreateWithoutOrdersInput>
  }

  export type Order_ItemCreateWithoutOrderInput = {
    id?: string
    quantity?: number
    price: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    menuItem: menuItemCreateNestedOneWithoutOrder_ItemInput
  }

  export type Order_ItemUncheckedCreateWithoutOrderInput = {
    id?: string
    menuItemId: string
    quantity?: number
    price: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Order_ItemCreateOrConnectWithoutOrderInput = {
    where: Order_ItemWhereUniqueInput
    create: XOR<Order_ItemCreateWithoutOrderInput, Order_ItemUncheckedCreateWithoutOrderInput>
  }

  export type Order_ItemCreateManyOrderInputEnvelope = {
    data: Order_ItemCreateManyOrderInput | Order_ItemCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type paymentCreateWithoutOrderInput = {
    id?: string
    amount: number
    method?: $Enums.method
    status?: $Enums.status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type paymentUncheckedCreateWithoutOrderInput = {
    id?: string
    amount: number
    method?: $Enums.method
    status?: $Enums.status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type paymentCreateOrConnectWithoutOrderInput = {
    where: paymentWhereUniqueInput
    create: XOR<paymentCreateWithoutOrderInput, paymentUncheckedCreateWithoutOrderInput>
  }

  export type paymentCreateManyOrderInputEnvelope = {
    data: paymentCreateManyOrderInput | paymentCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type restaurantsCreateWithoutOrdersInput = {
    id?: string
    name: string
    description?: string | null
    address: string
    phone?: string | null
    email?: string | null
    logoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRestaurantsInput
    menuItem?: menuItemCreateNestedManyWithoutRestaurantInput
    menu_categories?: menu_categoriesCreateNestedManyWithoutRestaurantInput
    tables?: tablesCreateNestedManyWithoutRestaurantInput
    Waiter?: WaiterCreateNestedManyWithoutRestaurantInput
    Kitchen?: KitchenCreateNestedManyWithoutRestaurantInput
  }

  export type restaurantsUncheckedCreateWithoutOrdersInput = {
    id?: string
    name: string
    description?: string | null
    address: string
    phone?: string | null
    email?: string | null
    logoUrl?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    menuItem?: menuItemUncheckedCreateNestedManyWithoutRestaurantInput
    menu_categories?: menu_categoriesUncheckedCreateNestedManyWithoutRestaurantInput
    tables?: tablesUncheckedCreateNestedManyWithoutRestaurantInput
    Waiter?: WaiterUncheckedCreateNestedManyWithoutRestaurantInput
    Kitchen?: KitchenUncheckedCreateNestedManyWithoutRestaurantInput
  }

  export type restaurantsCreateOrConnectWithoutOrdersInput = {
    where: restaurantsWhereUniqueInput
    create: XOR<restaurantsCreateWithoutOrdersInput, restaurantsUncheckedCreateWithoutOrdersInput>
  }

  export type UserUpsertWithoutOrdersInput = {
    update: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrdersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type UserUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Notification?: NotificationUpdateManyWithoutUserNestedInput
    restaurants?: restaurantsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Notification?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    restaurants?: restaurantsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type tablesUpsertWithoutOrdersInput = {
    update: XOR<tablesUpdateWithoutOrdersInput, tablesUncheckedUpdateWithoutOrdersInput>
    create: XOR<tablesCreateWithoutOrdersInput, tablesUncheckedCreateWithoutOrdersInput>
    where?: tablesWhereInput
  }

  export type tablesUpdateToOneWithWhereWithoutOrdersInput = {
    where?: tablesWhereInput
    data: XOR<tablesUpdateWithoutOrdersInput, tablesUncheckedUpdateWithoutOrdersInput>
  }

  export type tablesUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    qrCodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurant?: restaurantsUpdateOneRequiredWithoutTablesNestedInput
  }

  export type tablesUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    restaurantId?: StringFieldUpdateOperationsInput | string
    qrCodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Order_ItemUpsertWithWhereUniqueWithoutOrderInput = {
    where: Order_ItemWhereUniqueInput
    update: XOR<Order_ItemUpdateWithoutOrderInput, Order_ItemUncheckedUpdateWithoutOrderInput>
    create: XOR<Order_ItemCreateWithoutOrderInput, Order_ItemUncheckedCreateWithoutOrderInput>
  }

  export type Order_ItemUpdateWithWhereUniqueWithoutOrderInput = {
    where: Order_ItemWhereUniqueInput
    data: XOR<Order_ItemUpdateWithoutOrderInput, Order_ItemUncheckedUpdateWithoutOrderInput>
  }

  export type Order_ItemUpdateManyWithWhereWithoutOrderInput = {
    where: Order_ItemScalarWhereInput
    data: XOR<Order_ItemUpdateManyMutationInput, Order_ItemUncheckedUpdateManyWithoutOrderInput>
  }

  export type Order_ItemScalarWhereInput = {
    AND?: Order_ItemScalarWhereInput | Order_ItemScalarWhereInput[]
    OR?: Order_ItemScalarWhereInput[]
    NOT?: Order_ItemScalarWhereInput | Order_ItemScalarWhereInput[]
    id?: StringFilter<"Order_Item"> | string
    orderId?: IntFilter<"Order_Item"> | number
    menuItemId?: StringFilter<"Order_Item"> | string
    quantity?: IntFilter<"Order_Item"> | number
    price?: FloatFilter<"Order_Item"> | number
    notes?: StringNullableFilter<"Order_Item"> | string | null
    createdAt?: DateTimeFilter<"Order_Item"> | Date | string
    updatedAt?: DateTimeFilter<"Order_Item"> | Date | string
  }

  export type paymentUpsertWithWhereUniqueWithoutOrderInput = {
    where: paymentWhereUniqueInput
    update: XOR<paymentUpdateWithoutOrderInput, paymentUncheckedUpdateWithoutOrderInput>
    create: XOR<paymentCreateWithoutOrderInput, paymentUncheckedCreateWithoutOrderInput>
  }

  export type paymentUpdateWithWhereUniqueWithoutOrderInput = {
    where: paymentWhereUniqueInput
    data: XOR<paymentUpdateWithoutOrderInput, paymentUncheckedUpdateWithoutOrderInput>
  }

  export type paymentUpdateManyWithWhereWithoutOrderInput = {
    where: paymentScalarWhereInput
    data: XOR<paymentUpdateManyMutationInput, paymentUncheckedUpdateManyWithoutOrderInput>
  }

  export type paymentScalarWhereInput = {
    AND?: paymentScalarWhereInput | paymentScalarWhereInput[]
    OR?: paymentScalarWhereInput[]
    NOT?: paymentScalarWhereInput | paymentScalarWhereInput[]
    id?: StringFilter<"payment"> | string
    orderId?: IntFilter<"payment"> | number
    amount?: FloatFilter<"payment"> | number
    method?: EnummethodFilter<"payment"> | $Enums.method
    status?: EnumstatusFilter<"payment"> | $Enums.status
    createdAt?: DateTimeFilter<"payment"> | Date | string
    updatedAt?: DateTimeFilter<"payment"> | Date | string
  }

  export type restaurantsUpsertWithoutOrdersInput = {
    update: XOR<restaurantsUpdateWithoutOrdersInput, restaurantsUncheckedUpdateWithoutOrdersInput>
    create: XOR<restaurantsCreateWithoutOrdersInput, restaurantsUncheckedCreateWithoutOrdersInput>
    where?: restaurantsWhereInput
  }

  export type restaurantsUpdateToOneWithWhereWithoutOrdersInput = {
    where?: restaurantsWhereInput
    data: XOR<restaurantsUpdateWithoutOrdersInput, restaurantsUncheckedUpdateWithoutOrdersInput>
  }

  export type restaurantsUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRestaurantsNestedInput
    menuItem?: menuItemUpdateManyWithoutRestaurantNestedInput
    menu_categories?: menu_categoriesUpdateManyWithoutRestaurantNestedInput
    tables?: tablesUpdateManyWithoutRestaurantNestedInput
    Waiter?: WaiterUpdateManyWithoutRestaurantNestedInput
    Kitchen?: KitchenUpdateManyWithoutRestaurantNestedInput
  }

  export type restaurantsUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    menuItem?: menuItemUncheckedUpdateManyWithoutRestaurantNestedInput
    menu_categories?: menu_categoriesUncheckedUpdateManyWithoutRestaurantNestedInput
    tables?: tablesUncheckedUpdateManyWithoutRestaurantNestedInput
    Waiter?: WaiterUncheckedUpdateManyWithoutRestaurantNestedInput
    Kitchen?: KitchenUncheckedUpdateManyWithoutRestaurantNestedInput
  }

  export type restaurantsCreateWithoutTablesInput = {
    id?: string
    name: string
    description?: string | null
    address: string
    phone?: string | null
    email?: string | null
    logoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRestaurantsInput
    menuItem?: menuItemCreateNestedManyWithoutRestaurantInput
    menu_categories?: menu_categoriesCreateNestedManyWithoutRestaurantInput
    Orders?: OrdersCreateNestedManyWithoutRestaurantInput
    Waiter?: WaiterCreateNestedManyWithoutRestaurantInput
    Kitchen?: KitchenCreateNestedManyWithoutRestaurantInput
  }

  export type restaurantsUncheckedCreateWithoutTablesInput = {
    id?: string
    name: string
    description?: string | null
    address: string
    phone?: string | null
    email?: string | null
    logoUrl?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    menuItem?: menuItemUncheckedCreateNestedManyWithoutRestaurantInput
    menu_categories?: menu_categoriesUncheckedCreateNestedManyWithoutRestaurantInput
    Orders?: OrdersUncheckedCreateNestedManyWithoutRestaurantInput
    Waiter?: WaiterUncheckedCreateNestedManyWithoutRestaurantInput
    Kitchen?: KitchenUncheckedCreateNestedManyWithoutRestaurantInput
  }

  export type restaurantsCreateOrConnectWithoutTablesInput = {
    where: restaurantsWhereUniqueInput
    create: XOR<restaurantsCreateWithoutTablesInput, restaurantsUncheckedCreateWithoutTablesInput>
  }

  export type OrdersCreateWithoutTableInput = {
    status?: $Enums.OrderStatus
    total?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutOrdersInput
    Order_Item?: Order_ItemCreateNestedManyWithoutOrderInput
    payment?: paymentCreateNestedManyWithoutOrderInput
    restaurant: restaurantsCreateNestedOneWithoutOrdersInput
  }

  export type OrdersUncheckedCreateWithoutTableInput = {
    id?: number
    userId: string
    status?: $Enums.OrderStatus
    total?: number
    restaurantId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Order_Item?: Order_ItemUncheckedCreateNestedManyWithoutOrderInput
    payment?: paymentUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrdersCreateOrConnectWithoutTableInput = {
    where: OrdersWhereUniqueInput
    create: XOR<OrdersCreateWithoutTableInput, OrdersUncheckedCreateWithoutTableInput>
  }

  export type OrdersCreateManyTableInputEnvelope = {
    data: OrdersCreateManyTableInput | OrdersCreateManyTableInput[]
    skipDuplicates?: boolean
  }

  export type restaurantsUpsertWithoutTablesInput = {
    update: XOR<restaurantsUpdateWithoutTablesInput, restaurantsUncheckedUpdateWithoutTablesInput>
    create: XOR<restaurantsCreateWithoutTablesInput, restaurantsUncheckedCreateWithoutTablesInput>
    where?: restaurantsWhereInput
  }

  export type restaurantsUpdateToOneWithWhereWithoutTablesInput = {
    where?: restaurantsWhereInput
    data: XOR<restaurantsUpdateWithoutTablesInput, restaurantsUncheckedUpdateWithoutTablesInput>
  }

  export type restaurantsUpdateWithoutTablesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRestaurantsNestedInput
    menuItem?: menuItemUpdateManyWithoutRestaurantNestedInput
    menu_categories?: menu_categoriesUpdateManyWithoutRestaurantNestedInput
    Orders?: OrdersUpdateManyWithoutRestaurantNestedInput
    Waiter?: WaiterUpdateManyWithoutRestaurantNestedInput
    Kitchen?: KitchenUpdateManyWithoutRestaurantNestedInput
  }

  export type restaurantsUncheckedUpdateWithoutTablesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    menuItem?: menuItemUncheckedUpdateManyWithoutRestaurantNestedInput
    menu_categories?: menu_categoriesUncheckedUpdateManyWithoutRestaurantNestedInput
    Orders?: OrdersUncheckedUpdateManyWithoutRestaurantNestedInput
    Waiter?: WaiterUncheckedUpdateManyWithoutRestaurantNestedInput
    Kitchen?: KitchenUncheckedUpdateManyWithoutRestaurantNestedInput
  }

  export type OrdersUpsertWithWhereUniqueWithoutTableInput = {
    where: OrdersWhereUniqueInput
    update: XOR<OrdersUpdateWithoutTableInput, OrdersUncheckedUpdateWithoutTableInput>
    create: XOR<OrdersCreateWithoutTableInput, OrdersUncheckedCreateWithoutTableInput>
  }

  export type OrdersUpdateWithWhereUniqueWithoutTableInput = {
    where: OrdersWhereUniqueInput
    data: XOR<OrdersUpdateWithoutTableInput, OrdersUncheckedUpdateWithoutTableInput>
  }

  export type OrdersUpdateManyWithWhereWithoutTableInput = {
    where: OrdersScalarWhereInput
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyWithoutTableInput>
  }

  export type OrdersCreateWithoutOrder_ItemInput = {
    status?: $Enums.OrderStatus
    total?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutOrdersInput
    table: tablesCreateNestedOneWithoutOrdersInput
    payment?: paymentCreateNestedManyWithoutOrderInput
    restaurant: restaurantsCreateNestedOneWithoutOrdersInput
  }

  export type OrdersUncheckedCreateWithoutOrder_ItemInput = {
    id?: number
    userId: string
    tableId: string
    status?: $Enums.OrderStatus
    total?: number
    restaurantId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    payment?: paymentUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrdersCreateOrConnectWithoutOrder_ItemInput = {
    where: OrdersWhereUniqueInput
    create: XOR<OrdersCreateWithoutOrder_ItemInput, OrdersUncheckedCreateWithoutOrder_ItemInput>
  }

  export type menuItemCreateWithoutOrder_ItemInput = {
    id?: string
    name: string
    description?: string | null
    price: number
    imageUrl?: string | null
    available?: boolean
    tags?: menuItemCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: menu_categoriesCreateNestedOneWithoutMenuItemInput
    restaurant: restaurantsCreateNestedOneWithoutMenuItemInput
  }

  export type menuItemUncheckedCreateWithoutOrder_ItemInput = {
    id?: string
    name: string
    description?: string | null
    price: number
    imageUrl?: string | null
    available?: boolean
    restaurantId: string
    categoryId?: string | null
    tags?: menuItemCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type menuItemCreateOrConnectWithoutOrder_ItemInput = {
    where: menuItemWhereUniqueInput
    create: XOR<menuItemCreateWithoutOrder_ItemInput, menuItemUncheckedCreateWithoutOrder_ItemInput>
  }

  export type OrdersUpsertWithoutOrder_ItemInput = {
    update: XOR<OrdersUpdateWithoutOrder_ItemInput, OrdersUncheckedUpdateWithoutOrder_ItemInput>
    create: XOR<OrdersCreateWithoutOrder_ItemInput, OrdersUncheckedCreateWithoutOrder_ItemInput>
    where?: OrdersWhereInput
  }

  export type OrdersUpdateToOneWithWhereWithoutOrder_ItemInput = {
    where?: OrdersWhereInput
    data: XOR<OrdersUpdateWithoutOrder_ItemInput, OrdersUncheckedUpdateWithoutOrder_ItemInput>
  }

  export type OrdersUpdateWithoutOrder_ItemInput = {
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
    table?: tablesUpdateOneRequiredWithoutOrdersNestedInput
    payment?: paymentUpdateManyWithoutOrderNestedInput
    restaurant?: restaurantsUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrdersUncheckedUpdateWithoutOrder_ItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    tableId?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    total?: FloatFieldUpdateOperationsInput | number
    restaurantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: paymentUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type menuItemUpsertWithoutOrder_ItemInput = {
    update: XOR<menuItemUpdateWithoutOrder_ItemInput, menuItemUncheckedUpdateWithoutOrder_ItemInput>
    create: XOR<menuItemCreateWithoutOrder_ItemInput, menuItemUncheckedCreateWithoutOrder_ItemInput>
    where?: menuItemWhereInput
  }

  export type menuItemUpdateToOneWithWhereWithoutOrder_ItemInput = {
    where?: menuItemWhereInput
    data: XOR<menuItemUpdateWithoutOrder_ItemInput, menuItemUncheckedUpdateWithoutOrder_ItemInput>
  }

  export type menuItemUpdateWithoutOrder_ItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    available?: BoolFieldUpdateOperationsInput | boolean
    tags?: menuItemUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: menu_categoriesUpdateOneWithoutMenuItemNestedInput
    restaurant?: restaurantsUpdateOneRequiredWithoutMenuItemNestedInput
  }

  export type menuItemUncheckedUpdateWithoutOrder_ItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    available?: BoolFieldUpdateOperationsInput | boolean
    restaurantId?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: menuItemUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdersCreateWithoutPaymentInput = {
    status?: $Enums.OrderStatus
    total?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutOrdersInput
    table: tablesCreateNestedOneWithoutOrdersInput
    Order_Item?: Order_ItemCreateNestedManyWithoutOrderInput
    restaurant: restaurantsCreateNestedOneWithoutOrdersInput
  }

  export type OrdersUncheckedCreateWithoutPaymentInput = {
    id?: number
    userId: string
    tableId: string
    status?: $Enums.OrderStatus
    total?: number
    restaurantId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Order_Item?: Order_ItemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrdersCreateOrConnectWithoutPaymentInput = {
    where: OrdersWhereUniqueInput
    create: XOR<OrdersCreateWithoutPaymentInput, OrdersUncheckedCreateWithoutPaymentInput>
  }

  export type OrdersUpsertWithoutPaymentInput = {
    update: XOR<OrdersUpdateWithoutPaymentInput, OrdersUncheckedUpdateWithoutPaymentInput>
    create: XOR<OrdersCreateWithoutPaymentInput, OrdersUncheckedCreateWithoutPaymentInput>
    where?: OrdersWhereInput
  }

  export type OrdersUpdateToOneWithWhereWithoutPaymentInput = {
    where?: OrdersWhereInput
    data: XOR<OrdersUpdateWithoutPaymentInput, OrdersUncheckedUpdateWithoutPaymentInput>
  }

  export type OrdersUpdateWithoutPaymentInput = {
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
    table?: tablesUpdateOneRequiredWithoutOrdersNestedInput
    Order_Item?: Order_ItemUpdateManyWithoutOrderNestedInput
    restaurant?: restaurantsUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrdersUncheckedUpdateWithoutPaymentInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    tableId?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    total?: FloatFieldUpdateOperationsInput | number
    restaurantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Order_Item?: Order_ItemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type menu_categoriesCreateWithoutMenuItemInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    restaurant: restaurantsCreateNestedOneWithoutMenu_categoriesInput
  }

  export type menu_categoriesUncheckedCreateWithoutMenuItemInput = {
    id?: string
    name: string
    restaurantId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type menu_categoriesCreateOrConnectWithoutMenuItemInput = {
    where: menu_categoriesWhereUniqueInput
    create: XOR<menu_categoriesCreateWithoutMenuItemInput, menu_categoriesUncheckedCreateWithoutMenuItemInput>
  }

  export type restaurantsCreateWithoutMenuItemInput = {
    id?: string
    name: string
    description?: string | null
    address: string
    phone?: string | null
    email?: string | null
    logoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRestaurantsInput
    menu_categories?: menu_categoriesCreateNestedManyWithoutRestaurantInput
    tables?: tablesCreateNestedManyWithoutRestaurantInput
    Orders?: OrdersCreateNestedManyWithoutRestaurantInput
    Waiter?: WaiterCreateNestedManyWithoutRestaurantInput
    Kitchen?: KitchenCreateNestedManyWithoutRestaurantInput
  }

  export type restaurantsUncheckedCreateWithoutMenuItemInput = {
    id?: string
    name: string
    description?: string | null
    address: string
    phone?: string | null
    email?: string | null
    logoUrl?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    menu_categories?: menu_categoriesUncheckedCreateNestedManyWithoutRestaurantInput
    tables?: tablesUncheckedCreateNestedManyWithoutRestaurantInput
    Orders?: OrdersUncheckedCreateNestedManyWithoutRestaurantInput
    Waiter?: WaiterUncheckedCreateNestedManyWithoutRestaurantInput
    Kitchen?: KitchenUncheckedCreateNestedManyWithoutRestaurantInput
  }

  export type restaurantsCreateOrConnectWithoutMenuItemInput = {
    where: restaurantsWhereUniqueInput
    create: XOR<restaurantsCreateWithoutMenuItemInput, restaurantsUncheckedCreateWithoutMenuItemInput>
  }

  export type Order_ItemCreateWithoutMenuItemInput = {
    id?: string
    quantity?: number
    price: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    order: OrdersCreateNestedOneWithoutOrder_ItemInput
  }

  export type Order_ItemUncheckedCreateWithoutMenuItemInput = {
    id?: string
    orderId: number
    quantity?: number
    price: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Order_ItemCreateOrConnectWithoutMenuItemInput = {
    where: Order_ItemWhereUniqueInput
    create: XOR<Order_ItemCreateWithoutMenuItemInput, Order_ItemUncheckedCreateWithoutMenuItemInput>
  }

  export type Order_ItemCreateManyMenuItemInputEnvelope = {
    data: Order_ItemCreateManyMenuItemInput | Order_ItemCreateManyMenuItemInput[]
    skipDuplicates?: boolean
  }

  export type menu_categoriesUpsertWithoutMenuItemInput = {
    update: XOR<menu_categoriesUpdateWithoutMenuItemInput, menu_categoriesUncheckedUpdateWithoutMenuItemInput>
    create: XOR<menu_categoriesCreateWithoutMenuItemInput, menu_categoriesUncheckedCreateWithoutMenuItemInput>
    where?: menu_categoriesWhereInput
  }

  export type menu_categoriesUpdateToOneWithWhereWithoutMenuItemInput = {
    where?: menu_categoriesWhereInput
    data: XOR<menu_categoriesUpdateWithoutMenuItemInput, menu_categoriesUncheckedUpdateWithoutMenuItemInput>
  }

  export type menu_categoriesUpdateWithoutMenuItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurant?: restaurantsUpdateOneRequiredWithoutMenu_categoriesNestedInput
  }

  export type menu_categoriesUncheckedUpdateWithoutMenuItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    restaurantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type restaurantsUpsertWithoutMenuItemInput = {
    update: XOR<restaurantsUpdateWithoutMenuItemInput, restaurantsUncheckedUpdateWithoutMenuItemInput>
    create: XOR<restaurantsCreateWithoutMenuItemInput, restaurantsUncheckedCreateWithoutMenuItemInput>
    where?: restaurantsWhereInput
  }

  export type restaurantsUpdateToOneWithWhereWithoutMenuItemInput = {
    where?: restaurantsWhereInput
    data: XOR<restaurantsUpdateWithoutMenuItemInput, restaurantsUncheckedUpdateWithoutMenuItemInput>
  }

  export type restaurantsUpdateWithoutMenuItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRestaurantsNestedInput
    menu_categories?: menu_categoriesUpdateManyWithoutRestaurantNestedInput
    tables?: tablesUpdateManyWithoutRestaurantNestedInput
    Orders?: OrdersUpdateManyWithoutRestaurantNestedInput
    Waiter?: WaiterUpdateManyWithoutRestaurantNestedInput
    Kitchen?: KitchenUpdateManyWithoutRestaurantNestedInput
  }

  export type restaurantsUncheckedUpdateWithoutMenuItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    menu_categories?: menu_categoriesUncheckedUpdateManyWithoutRestaurantNestedInput
    tables?: tablesUncheckedUpdateManyWithoutRestaurantNestedInput
    Orders?: OrdersUncheckedUpdateManyWithoutRestaurantNestedInput
    Waiter?: WaiterUncheckedUpdateManyWithoutRestaurantNestedInput
    Kitchen?: KitchenUncheckedUpdateManyWithoutRestaurantNestedInput
  }

  export type Order_ItemUpsertWithWhereUniqueWithoutMenuItemInput = {
    where: Order_ItemWhereUniqueInput
    update: XOR<Order_ItemUpdateWithoutMenuItemInput, Order_ItemUncheckedUpdateWithoutMenuItemInput>
    create: XOR<Order_ItemCreateWithoutMenuItemInput, Order_ItemUncheckedCreateWithoutMenuItemInput>
  }

  export type Order_ItemUpdateWithWhereUniqueWithoutMenuItemInput = {
    where: Order_ItemWhereUniqueInput
    data: XOR<Order_ItemUpdateWithoutMenuItemInput, Order_ItemUncheckedUpdateWithoutMenuItemInput>
  }

  export type Order_ItemUpdateManyWithWhereWithoutMenuItemInput = {
    where: Order_ItemScalarWhereInput
    data: XOR<Order_ItemUpdateManyMutationInput, Order_ItemUncheckedUpdateManyWithoutMenuItemInput>
  }

  export type restaurantsCreateWithoutMenu_categoriesInput = {
    id?: string
    name: string
    description?: string | null
    address: string
    phone?: string | null
    email?: string | null
    logoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRestaurantsInput
    menuItem?: menuItemCreateNestedManyWithoutRestaurantInput
    tables?: tablesCreateNestedManyWithoutRestaurantInput
    Orders?: OrdersCreateNestedManyWithoutRestaurantInput
    Waiter?: WaiterCreateNestedManyWithoutRestaurantInput
    Kitchen?: KitchenCreateNestedManyWithoutRestaurantInput
  }

  export type restaurantsUncheckedCreateWithoutMenu_categoriesInput = {
    id?: string
    name: string
    description?: string | null
    address: string
    phone?: string | null
    email?: string | null
    logoUrl?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    menuItem?: menuItemUncheckedCreateNestedManyWithoutRestaurantInput
    tables?: tablesUncheckedCreateNestedManyWithoutRestaurantInput
    Orders?: OrdersUncheckedCreateNestedManyWithoutRestaurantInput
    Waiter?: WaiterUncheckedCreateNestedManyWithoutRestaurantInput
    Kitchen?: KitchenUncheckedCreateNestedManyWithoutRestaurantInput
  }

  export type restaurantsCreateOrConnectWithoutMenu_categoriesInput = {
    where: restaurantsWhereUniqueInput
    create: XOR<restaurantsCreateWithoutMenu_categoriesInput, restaurantsUncheckedCreateWithoutMenu_categoriesInput>
  }

  export type menuItemCreateWithoutCategoryInput = {
    id?: string
    name: string
    description?: string | null
    price: number
    imageUrl?: string | null
    available?: boolean
    tags?: menuItemCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    restaurant: restaurantsCreateNestedOneWithoutMenuItemInput
    Order_Item?: Order_ItemCreateNestedManyWithoutMenuItemInput
  }

  export type menuItemUncheckedCreateWithoutCategoryInput = {
    id?: string
    name: string
    description?: string | null
    price: number
    imageUrl?: string | null
    available?: boolean
    restaurantId: string
    tags?: menuItemCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    Order_Item?: Order_ItemUncheckedCreateNestedManyWithoutMenuItemInput
  }

  export type menuItemCreateOrConnectWithoutCategoryInput = {
    where: menuItemWhereUniqueInput
    create: XOR<menuItemCreateWithoutCategoryInput, menuItemUncheckedCreateWithoutCategoryInput>
  }

  export type menuItemCreateManyCategoryInputEnvelope = {
    data: menuItemCreateManyCategoryInput | menuItemCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type restaurantsUpsertWithoutMenu_categoriesInput = {
    update: XOR<restaurantsUpdateWithoutMenu_categoriesInput, restaurantsUncheckedUpdateWithoutMenu_categoriesInput>
    create: XOR<restaurantsCreateWithoutMenu_categoriesInput, restaurantsUncheckedCreateWithoutMenu_categoriesInput>
    where?: restaurantsWhereInput
  }

  export type restaurantsUpdateToOneWithWhereWithoutMenu_categoriesInput = {
    where?: restaurantsWhereInput
    data: XOR<restaurantsUpdateWithoutMenu_categoriesInput, restaurantsUncheckedUpdateWithoutMenu_categoriesInput>
  }

  export type restaurantsUpdateWithoutMenu_categoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRestaurantsNestedInput
    menuItem?: menuItemUpdateManyWithoutRestaurantNestedInput
    tables?: tablesUpdateManyWithoutRestaurantNestedInput
    Orders?: OrdersUpdateManyWithoutRestaurantNestedInput
    Waiter?: WaiterUpdateManyWithoutRestaurantNestedInput
    Kitchen?: KitchenUpdateManyWithoutRestaurantNestedInput
  }

  export type restaurantsUncheckedUpdateWithoutMenu_categoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    menuItem?: menuItemUncheckedUpdateManyWithoutRestaurantNestedInput
    tables?: tablesUncheckedUpdateManyWithoutRestaurantNestedInput
    Orders?: OrdersUncheckedUpdateManyWithoutRestaurantNestedInput
    Waiter?: WaiterUncheckedUpdateManyWithoutRestaurantNestedInput
    Kitchen?: KitchenUncheckedUpdateManyWithoutRestaurantNestedInput
  }

  export type menuItemUpsertWithWhereUniqueWithoutCategoryInput = {
    where: menuItemWhereUniqueInput
    update: XOR<menuItemUpdateWithoutCategoryInput, menuItemUncheckedUpdateWithoutCategoryInput>
    create: XOR<menuItemCreateWithoutCategoryInput, menuItemUncheckedCreateWithoutCategoryInput>
  }

  export type menuItemUpdateWithWhereUniqueWithoutCategoryInput = {
    where: menuItemWhereUniqueInput
    data: XOR<menuItemUpdateWithoutCategoryInput, menuItemUncheckedUpdateWithoutCategoryInput>
  }

  export type menuItemUpdateManyWithWhereWithoutCategoryInput = {
    where: menuItemScalarWhereInput
    data: XOR<menuItemUpdateManyMutationInput, menuItemUncheckedUpdateManyWithoutCategoryInput>
  }

  export type NotificationCreateManyUserInput = {
    id?: string
    type: string
    message: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type OrdersCreateManyUserInput = {
    id?: number
    tableId: string
    status?: $Enums.OrderStatus
    total?: number
    restaurantId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type restaurantsCreateManyUserInput = {
    id?: string
    name: string
    description?: string | null
    address: string
    phone?: string | null
    email?: string | null
    logoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdersUpdateWithoutUserInput = {
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    table?: tablesUpdateOneRequiredWithoutOrdersNestedInput
    Order_Item?: Order_ItemUpdateManyWithoutOrderNestedInput
    payment?: paymentUpdateManyWithoutOrderNestedInput
    restaurant?: restaurantsUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrdersUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    tableId?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    total?: FloatFieldUpdateOperationsInput | number
    restaurantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Order_Item?: Order_ItemUncheckedUpdateManyWithoutOrderNestedInput
    payment?: paymentUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrdersUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    tableId?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    total?: FloatFieldUpdateOperationsInput | number
    restaurantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type restaurantsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    menuItem?: menuItemUpdateManyWithoutRestaurantNestedInput
    menu_categories?: menu_categoriesUpdateManyWithoutRestaurantNestedInput
    tables?: tablesUpdateManyWithoutRestaurantNestedInput
    Orders?: OrdersUpdateManyWithoutRestaurantNestedInput
    Waiter?: WaiterUpdateManyWithoutRestaurantNestedInput
    Kitchen?: KitchenUpdateManyWithoutRestaurantNestedInput
  }

  export type restaurantsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    menuItem?: menuItemUncheckedUpdateManyWithoutRestaurantNestedInput
    menu_categories?: menu_categoriesUncheckedUpdateManyWithoutRestaurantNestedInput
    tables?: tablesUncheckedUpdateManyWithoutRestaurantNestedInput
    Orders?: OrdersUncheckedUpdateManyWithoutRestaurantNestedInput
    Waiter?: WaiterUncheckedUpdateManyWithoutRestaurantNestedInput
    Kitchen?: KitchenUncheckedUpdateManyWithoutRestaurantNestedInput
  }

  export type restaurantsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type menuItemCreateManyRestaurantInput = {
    id?: string
    name: string
    description?: string | null
    price: number
    imageUrl?: string | null
    available?: boolean
    categoryId?: string | null
    tags?: menuItemCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type menu_categoriesCreateManyRestaurantInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type tablesCreateManyRestaurantInput = {
    id?: string
    number: number
    capacity: number
    qrCodeUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrdersCreateManyRestaurantInput = {
    id?: number
    userId: string
    tableId: string
    status?: $Enums.OrderStatus
    total?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WaiterCreateManyRestaurantInput = {
    id?: string
    fullName: string
    email: string
    password: string
    avatar?: string | null
    accessToken?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KitchenCreateManyRestaurantInput = {
    id?: string
    fullName: string
    email: string
    password: string
    avatar?: string | null
    role?: string
    accessToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type menuItemUpdateWithoutRestaurantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    available?: BoolFieldUpdateOperationsInput | boolean
    tags?: menuItemUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: menu_categoriesUpdateOneWithoutMenuItemNestedInput
    Order_Item?: Order_ItemUpdateManyWithoutMenuItemNestedInput
  }

  export type menuItemUncheckedUpdateWithoutRestaurantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    available?: BoolFieldUpdateOperationsInput | boolean
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: menuItemUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Order_Item?: Order_ItemUncheckedUpdateManyWithoutMenuItemNestedInput
  }

  export type menuItemUncheckedUpdateManyWithoutRestaurantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    available?: BoolFieldUpdateOperationsInput | boolean
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: menuItemUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type menu_categoriesUpdateWithoutRestaurantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    menuItem?: menuItemUpdateManyWithoutCategoryNestedInput
  }

  export type menu_categoriesUncheckedUpdateWithoutRestaurantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    menuItem?: menuItemUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type menu_categoriesUncheckedUpdateManyWithoutRestaurantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tablesUpdateWithoutRestaurantInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    qrCodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Orders?: OrdersUpdateManyWithoutTableNestedInput
  }

  export type tablesUncheckedUpdateWithoutRestaurantInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    qrCodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Orders?: OrdersUncheckedUpdateManyWithoutTableNestedInput
  }

  export type tablesUncheckedUpdateManyWithoutRestaurantInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    qrCodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdersUpdateWithoutRestaurantInput = {
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
    table?: tablesUpdateOneRequiredWithoutOrdersNestedInput
    Order_Item?: Order_ItemUpdateManyWithoutOrderNestedInput
    payment?: paymentUpdateManyWithoutOrderNestedInput
  }

  export type OrdersUncheckedUpdateWithoutRestaurantInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    tableId?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Order_Item?: Order_ItemUncheckedUpdateManyWithoutOrderNestedInput
    payment?: paymentUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrdersUncheckedUpdateManyWithoutRestaurantInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    tableId?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WaiterUpdateWithoutRestaurantInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WaiterUncheckedUpdateWithoutRestaurantInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WaiterUncheckedUpdateManyWithoutRestaurantInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KitchenUpdateWithoutRestaurantInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KitchenUncheckedUpdateWithoutRestaurantInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KitchenUncheckedUpdateManyWithoutRestaurantInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Order_ItemCreateManyOrderInput = {
    id?: string
    menuItemId: string
    quantity?: number
    price: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type paymentCreateManyOrderInput = {
    id?: string
    amount: number
    method?: $Enums.method
    status?: $Enums.status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Order_ItemUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    menuItem?: menuItemUpdateOneRequiredWithoutOrder_ItemNestedInput
  }

  export type Order_ItemUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    menuItemId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Order_ItemUncheckedUpdateManyWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    menuItemId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type paymentUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    method?: EnummethodFieldUpdateOperationsInput | $Enums.method
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type paymentUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    method?: EnummethodFieldUpdateOperationsInput | $Enums.method
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type paymentUncheckedUpdateManyWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    method?: EnummethodFieldUpdateOperationsInput | $Enums.method
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdersCreateManyTableInput = {
    id?: number
    userId: string
    status?: $Enums.OrderStatus
    total?: number
    restaurantId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrdersUpdateWithoutTableInput = {
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
    Order_Item?: Order_ItemUpdateManyWithoutOrderNestedInput
    payment?: paymentUpdateManyWithoutOrderNestedInput
    restaurant?: restaurantsUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrdersUncheckedUpdateWithoutTableInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    total?: FloatFieldUpdateOperationsInput | number
    restaurantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Order_Item?: Order_ItemUncheckedUpdateManyWithoutOrderNestedInput
    payment?: paymentUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrdersUncheckedUpdateManyWithoutTableInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    total?: FloatFieldUpdateOperationsInput | number
    restaurantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Order_ItemCreateManyMenuItemInput = {
    id?: string
    orderId: number
    quantity?: number
    price: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Order_ItemUpdateWithoutMenuItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrdersUpdateOneRequiredWithoutOrder_ItemNestedInput
  }

  export type Order_ItemUncheckedUpdateWithoutMenuItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Order_ItemUncheckedUpdateManyWithoutMenuItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type menuItemCreateManyCategoryInput = {
    id?: string
    name: string
    description?: string | null
    price: number
    imageUrl?: string | null
    available?: boolean
    restaurantId: string
    tags?: menuItemCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type menuItemUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    available?: BoolFieldUpdateOperationsInput | boolean
    tags?: menuItemUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurant?: restaurantsUpdateOneRequiredWithoutMenuItemNestedInput
    Order_Item?: Order_ItemUpdateManyWithoutMenuItemNestedInput
  }

  export type menuItemUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    available?: BoolFieldUpdateOperationsInput | boolean
    restaurantId?: StringFieldUpdateOperationsInput | string
    tags?: menuItemUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Order_Item?: Order_ItemUncheckedUpdateManyWithoutMenuItemNestedInput
  }

  export type menuItemUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    available?: BoolFieldUpdateOperationsInput | boolean
    restaurantId?: StringFieldUpdateOperationsInput | string
    tags?: menuItemUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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