interface DomConfig {
    viewportExpansion?: number;
    interactiveBlacklist?: (Element | (() => Element))[];
    interactiveWhitelist?: (Element | (() => Element))[];
    includeAttributes?: string[];
    highlightOpacity?: number;
    highlightLabelOpacity?: number;
    /**
     * Preserve semantic landmark tags in dehydrated output even if not interactive
     * @note maybe confusing for LLM combining with page scrolling, use with caution
     **/
    keepSemanticTags?: boolean;
}

/**
 * Configuration for PageController
 */
interface PageControllerConfig extends DomConfig {
    /** Enable visual mask overlay during operations (default: false) */
    enableMask?: boolean;
}
/**
 * Structured browser state for LLM consumption
 */
interface BrowserState {
    url: string;
    title: string;
    /** Page info + scroll position hint (e.g. "Page info: 1920x1080px...\n[Start of page]") */
    header: string;
    /** Simplified HTML of interactive elements */
    content: string;
    /** Page footer hint (e.g. "... 300 pixels below ..." or "[End of page]") */
    footer: string;
}
interface ActionResult {
    success: boolean;
    message: string;
}
/**
 * PageController manages DOM state and element interactions.
 * It provides async methods for all DOM operations, keeping state isolated.
 *
 * @lifecycle
 * - beforeUpdate: Emitted before the DOM tree is updated.
 * - afterUpdate: Emitted after the DOM tree is updated.
 */
declare class PageController extends EventTarget {
    private config;
    /** Corresponds to eval_page in browser-use */
    private flatTree;
    /**
     * All highlighted index-mapped interactive elements
     * Corresponds to DOMState.selector_map in browser-use
     */
    private selectorMap;
    /** Index -> element text description mapping */
    private elementTextMap;
    /**
     * Simplified HTML for LLM consumption.
     * Corresponds to clickable_elements_to_string in browser-use
     */
    private simplifiedHTML;
    /** last time the tree was updated */
    private lastTimeUpdate;
    /** Whether the tree has been indexed at least once */
    private isIndexed;
    /** Visual mask overlay for blocking user interaction during automation */
    private mask;
    private maskReady;
    constructor(config?: PageControllerConfig);
    /**
     * Initialize mask asynchronously (dynamic import to avoid CSS loading in Node)
     */
    initMask(): void;
    /**
     * Get current page URL
     */
    getCurrentUrl(): Promise<string>;
    /**
     * Get last tree update timestamp
     */
    getLastUpdateTime(): Promise<number>;
    /**
     * Get structured browser state for LLM consumption.
     * Automatically calls updateTree() to refresh the DOM state.
     */
    getBrowserState(): Promise<BrowserState>;
    /**
     * Update DOM tree, returns simplified HTML for LLM.
     * This is the main method to refresh the page state.
     * Automatically bypasses mask during DOM extraction if enabled.
     */
    updateTree(): Promise<string>;
    /**
     * Clean up all element highlights
     */
    cleanUpHighlights(): Promise<void>;
    /**
     * Ensure the tree has been indexed before any index-based operation.
     * Throws if updateTree() hasn't been called yet.
     */
    private assertIndexed;
    /**
     * Click element by index
     */
    clickElement(index: number): Promise<ActionResult>;
    /**
     * Input text into element by index
     */
    inputText(index: number, text: string): Promise<ActionResult>;
    /**
     * Select dropdown option by index and option text
     */
    selectOption(index: number, optionText: string): Promise<ActionResult>;
    /**
     * Scroll vertically
     */
    scroll(options: {
        down: boolean;
        numPages: number;
        pixels?: number;
        index?: number;
    }): Promise<ActionResult>;
    /**
     * Scroll horizontally
     */
    scrollHorizontally(options: {
        right: boolean;
        pixels: number;
        index?: number;
    }): Promise<ActionResult>;
    /**
     * Execute arbitrary JavaScript on the page.
     * The optional `signal` is exposed to the script scope so cooperative code
     * can abort promptly when the task is stopped.
     */
    executeJavascript(script: string, signal?: AbortSignal): Promise<ActionResult>;
    /**
     * Show the visual mask overlay.
     * Only works after mask is setup.
     */
    showMask(): Promise<void>;
    /**
     * Hide the visual mask overlay.
     * Only works after mask is setup.
     */
    hideMask(): Promise<void>;
    /**
     * Dispose and clean up resources
     */
    dispose(): void;
}

type _JSONSchema = boolean | JSONSchema;
type JSONSchema = {
    [k: string]: unknown;
    $schema?: "https://json-schema.org/draft/2020-12/schema" | "http://json-schema.org/draft-07/schema#" | "http://json-schema.org/draft-04/schema#";
    $id?: string;
    $anchor?: string;
    $ref?: string;
    $dynamicRef?: string;
    $dynamicAnchor?: string;
    $vocabulary?: Record<string, boolean>;
    $comment?: string;
    $defs?: Record<string, JSONSchema>;
    type?: "object" | "array" | "string" | "number" | "boolean" | "null" | "integer";
    additionalItems?: _JSONSchema;
    unevaluatedItems?: _JSONSchema;
    prefixItems?: _JSONSchema[];
    items?: _JSONSchema | _JSONSchema[];
    contains?: _JSONSchema;
    additionalProperties?: _JSONSchema;
    unevaluatedProperties?: _JSONSchema;
    properties?: Record<string, _JSONSchema>;
    patternProperties?: Record<string, _JSONSchema>;
    dependentSchemas?: Record<string, _JSONSchema>;
    propertyNames?: _JSONSchema;
    if?: _JSONSchema;
    then?: _JSONSchema;
    else?: _JSONSchema;
    allOf?: JSONSchema[];
    anyOf?: JSONSchema[];
    oneOf?: JSONSchema[];
    not?: _JSONSchema;
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number | boolean;
    minimum?: number;
    exclusiveMinimum?: number | boolean;
    maxLength?: number;
    minLength?: number;
    pattern?: string;
    maxItems?: number;
    minItems?: number;
    uniqueItems?: boolean;
    maxContains?: number;
    minContains?: number;
    maxProperties?: number;
    minProperties?: number;
    required?: string[];
    dependentRequired?: Record<string, string[]>;
    enum?: Array<string | number | boolean | null>;
    const?: string | number | boolean | null;
    id?: string;
    title?: string;
    description?: string;
    default?: unknown;
    deprecated?: boolean;
    readOnly?: boolean;
    writeOnly?: boolean;
    nullable?: boolean;
    examples?: unknown[];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    contentSchema?: JSONSchema;
    _prefault?: unknown;
};
type BaseSchema = JSONSchema;

/** The Standard interface. */
interface StandardTypedV1<Input = unknown, Output = Input> {
    /** The Standard properties. */
    readonly "~standard": StandardTypedV1.Props<Input, Output>;
}
declare namespace StandardTypedV1 {
    /** The Standard properties interface. */
    interface Props<Input = unknown, Output = Input> {
        /** The version number of the standard. */
        readonly version: 1;
        /** The vendor name of the schema library. */
        readonly vendor: string;
        /** Inferred types associated with the schema. */
        readonly types?: Types<Input, Output> | undefined;
    }
    /** The Standard types interface. */
    interface Types<Input = unknown, Output = Input> {
        /** The input type of the schema. */
        readonly input: Input;
        /** The output type of the schema. */
        readonly output: Output;
    }
    /** Infers the input type of a Standard. */
    type InferInput<Schema extends StandardTypedV1> = NonNullable<Schema["~standard"]["types"]>["input"];
    /** Infers the output type of a Standard. */
    type InferOutput<Schema extends StandardTypedV1> = NonNullable<Schema["~standard"]["types"]>["output"];
}
/** The Standard Schema interface. */
interface StandardSchemaV1<Input = unknown, Output = Input> {
    /** The Standard Schema properties. */
    readonly "~standard": StandardSchemaV1.Props<Input, Output>;
}
declare namespace StandardSchemaV1 {
    /** The Standard Schema properties interface. */
    interface Props<Input = unknown, Output = Input> extends StandardTypedV1.Props<Input, Output> {
        /** Validates unknown input values. */
        readonly validate: (value: unknown, options?: StandardSchemaV1.Options | undefined) => Result<Output> | Promise<Result<Output>>;
    }
    /** The result interface of the validate function. */
    type Result<Output> = SuccessResult<Output> | FailureResult;
    /** The result interface if validation succeeds. */
    interface SuccessResult<Output> {
        /** The typed output value. */
        readonly value: Output;
        /** The absence of issues indicates success. */
        readonly issues?: undefined;
    }
    interface Options {
        /** Implicit support for additional vendor-specific parameters, if needed. */
        readonly libraryOptions?: Record<string, unknown> | undefined;
    }
    /** The result interface if validation fails. */
    interface FailureResult {
        /** The issues of failed validation. */
        readonly issues: ReadonlyArray<Issue>;
    }
    /** The issue interface of the failure output. */
    interface Issue {
        /** The error message of the issue. */
        readonly message: string;
        /** The path of the issue, if any. */
        readonly path?: ReadonlyArray<PropertyKey | PathSegment> | undefined;
    }
    /** The path segment interface of the issue. */
    interface PathSegment {
        /** The key representing a path segment. */
        readonly key: PropertyKey;
    }
    /** The Standard types interface. */
    interface Types<Input = unknown, Output = Input> extends StandardTypedV1.Types<Input, Output> {
    }
    /** Infers the input type of a Standard. */
    type InferInput<Schema extends StandardTypedV1> = StandardTypedV1.InferInput<Schema>;
    /** Infers the output type of a Standard. */
    type InferOutput<Schema extends StandardTypedV1> = StandardTypedV1.InferOutput<Schema>;
}
/** The Standard JSON Schema interface. */
interface StandardJSONSchemaV1<Input = unknown, Output = Input> {
    /** The Standard JSON Schema properties. */
    readonly "~standard": StandardJSONSchemaV1.Props<Input, Output>;
}
declare namespace StandardJSONSchemaV1 {
    /** The Standard JSON Schema properties interface. */
    interface Props<Input = unknown, Output = Input> extends StandardTypedV1.Props<Input, Output> {
        /** Methods for generating the input/output JSON Schema. */
        readonly jsonSchema: Converter;
    }
    /** The Standard JSON Schema converter interface. */
    interface Converter {
        /** Converts the input type to JSON Schema. May throw if conversion is not supported. */
        readonly input: (options: StandardJSONSchemaV1.Options) => Record<string, unknown>;
        /** Converts the output type to JSON Schema. May throw if conversion is not supported. */
        readonly output: (options: StandardJSONSchemaV1.Options) => Record<string, unknown>;
    }
    /** The target version of the generated JSON Schema.
     *
     * It is *strongly recommended* that implementers support `"draft-2020-12"` and `"draft-07"`, as they are both in wide use.
     *
     * The `"openapi-3.0"` target is intended as a standardized specifier for OpenAPI 3.0 which is a superset of JSON Schema `"draft-04"`.
     *
     * All other targets can be implemented on a best-effort basis. Libraries should throw if they don't support a specified target.
     */
    type Target = "draft-2020-12" | "draft-07" | "openapi-3.0" | ({} & string);
    /** The options for the input/output methods. */
    interface Options {
        /** Specifies the target version of the generated JSON Schema. Support for all versions is on a best-effort basis. If a given version is not supported, the library should throw. */
        readonly target: Target;
        /** Implicit support for additional vendor-specific parameters, if needed. */
        readonly libraryOptions?: Record<string, unknown> | undefined;
    }
    /** The Standard types interface. */
    interface Types<Input = unknown, Output = Input> extends StandardTypedV1.Types<Input, Output> {
    }
    /** Infers the input type of a Standard. */
    type InferInput<Schema extends StandardTypedV1> = StandardTypedV1.InferInput<Schema>;
    /** Infers the output type of a Standard. */
    type InferOutput<Schema extends StandardTypedV1> = StandardTypedV1.InferOutput<Schema>;
}
interface StandardSchemaWithJSONProps<Input = unknown, Output = Input> extends StandardSchemaV1.Props<Input, Output>, StandardJSONSchemaV1.Props<Input, Output> {
}

declare const $output: unique symbol;
type $output = typeof $output;
declare const $input: unique symbol;
type $input = typeof $input;
type $replace<Meta, S extends $ZodType> = Meta extends $output ? output<S> : Meta extends $input ? input<S> : Meta extends (infer M)[] ? $replace<M, S>[] : Meta extends (...args: infer P) => infer R ? (...args: {
    [K in keyof P]: $replace<P[K], S>;
}) => $replace<R, S> : Meta extends object ? {
    [K in keyof Meta]: $replace<Meta[K], S>;
} : Meta;
type MetadataType = object | undefined;
declare class $ZodRegistry<Meta extends MetadataType = MetadataType, Schema extends $ZodType = $ZodType> {
    _meta: Meta;
    _schema: Schema;
    _map: WeakMap<Schema, $replace<Meta, Schema>>;
    _idmap: Map<string, Schema>;
    add<S extends Schema>(schema: S, ..._meta: undefined extends Meta ? [$replace<Meta, S>?] : [$replace<Meta, S>]): this;
    clear(): this;
    remove(schema: Schema): this;
    get<S extends Schema>(schema: S): $replace<Meta, S> | undefined;
    has(schema: Schema): boolean;
}
interface JSONSchemaMeta {
    id?: string | undefined;
    title?: string | undefined;
    description?: string | undefined;
    deprecated?: boolean | undefined;
    [k: string]: unknown;
}
interface GlobalMeta extends JSONSchemaMeta {
}

type Processor<T extends $ZodType = $ZodType> = (schema: T, ctx: ToJSONSchemaContext, json: BaseSchema, params: ProcessParams) => void;
interface JSONSchemaGeneratorParams {
    processors: Record<string, Processor>;
    /** A registry used to look up metadata for each schema. Any schema with an `id` property will be extracted as a $def.
     *  @default globalRegistry */
    metadata?: $ZodRegistry<Record<string, any>>;
    /** The JSON Schema version to target.
     * - `"draft-2020-12"` — Default. JSON Schema Draft 2020-12
     * - `"draft-07"` — JSON Schema Draft 7
     * - `"draft-04"` — JSON Schema Draft 4
     * - `"openapi-3.0"` — OpenAPI 3.0 Schema Object */
    target?: "draft-04" | "draft-07" | "draft-2020-12" | "openapi-3.0" | ({} & string) | undefined;
    /** How to handle unrepresentable types.
     * - `"throw"` — Default. Unrepresentable types throw an error
     * - `"any"` — Unrepresentable types become `{}` */
    unrepresentable?: "throw" | "any";
    /** Arbitrary custom logic that can be used to modify the generated JSON Schema. */
    override?: (ctx: {
        zodSchema: $ZodTypes;
        jsonSchema: BaseSchema;
        path: (string | number)[];
    }) => void;
    /** Whether to extract the `"input"` or `"output"` type. Relevant to transforms, defaults, coerced primitives, etc.
     * - `"output"` — Default. Convert the output schema.
     * - `"input"` — Convert the input schema. */
    io?: "input" | "output";
    cycles?: "ref" | "throw";
    reused?: "ref" | "inline";
    external?: {
        registry: $ZodRegistry<{
            id?: string | undefined;
        }>;
        uri?: ((id: string) => string) | undefined;
        defs: Record<string, BaseSchema>;
    } | undefined;
}
/**
 * Parameters for the toJSONSchema function.
 */
type ToJSONSchemaParams = Omit<JSONSchemaGeneratorParams, "processors" | "external">;
interface ProcessParams {
    schemaPath: $ZodType[];
    path: (string | number)[];
}
interface Seen {
    /** JSON Schema result for this Zod schema */
    schema: BaseSchema;
    /** A cached version of the schema that doesn't get overwritten during ref resolution */
    def?: BaseSchema;
    defId?: string | undefined;
    /** Number of times this schema was encountered during traversal */
    count: number;
    /** Cycle path */
    cycle?: (string | number)[] | undefined;
    isParent?: boolean | undefined;
    /** Schema to inherit JSON Schema properties from (set by processor for wrappers) */
    ref?: $ZodType | null;
    /** JSON Schema property path for this schema */
    path?: (string | number)[] | undefined;
}
interface ToJSONSchemaContext {
    processors: Record<string, Processor>;
    metadataRegistry: $ZodRegistry<Record<string, any>>;
    target: "draft-04" | "draft-07" | "draft-2020-12" | "openapi-3.0" | ({} & string);
    unrepresentable: "throw" | "any";
    override: (ctx: {
        zodSchema: $ZodType;
        jsonSchema: BaseSchema;
        path: (string | number)[];
    }) => void;
    io: "input" | "output";
    counter: number;
    seen: Map<$ZodType, Seen>;
    cycles: "ref" | "throw";
    reused: "ref" | "inline";
    external?: {
        registry: $ZodRegistry<{
            id?: string | undefined;
        }>;
        uri?: ((id: string) => string) | undefined;
        defs: Record<string, BaseSchema>;
    } | undefined;
}
type ZodStandardSchemaWithJSON$1<T> = StandardSchemaWithJSONProps<input<T>, output<T>>;
interface ZodStandardJSONSchemaPayload<T> extends BaseSchema {
    "~standard": ZodStandardSchemaWithJSON$1<T>;
}

type MimeTypes = "application/json" | "application/xml" | "application/x-www-form-urlencoded" | "application/javascript" | "application/pdf" | "application/zip" | "application/vnd.ms-excel" | "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" | "application/msword" | "application/vnd.openxmlformats-officedocument.wordprocessingml.document" | "application/vnd.ms-powerpoint" | "application/vnd.openxmlformats-officedocument.presentationml.presentation" | "application/octet-stream" | "application/graphql" | "text/html" | "text/plain" | "text/css" | "text/javascript" | "text/csv" | "image/png" | "image/jpeg" | "image/gif" | "image/svg+xml" | "image/webp" | "audio/mpeg" | "audio/ogg" | "audio/wav" | "audio/webm" | "video/mp4" | "video/webm" | "video/ogg" | "font/woff" | "font/woff2" | "font/ttf" | "font/otf" | "multipart/form-data" | (string & {});
type IsAny<T> = 0 extends 1 & T ? true : false;
type Omit$1<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
type MakePartial<T, K extends keyof T> = Omit$1<T, K> & InexactPartial<Pick<T, K>>;
type NoUndefined<T> = T extends undefined ? never : T;
type LoosePartial<T extends object> = InexactPartial<T> & {
    [k: string]: unknown;
};
type InexactPartial<T> = {
    [P in keyof T]?: T[P] | undefined;
};
type BuiltIn = (((...args: any[]) => any) | (new (...args: any[]) => any)) | {
    readonly [Symbol.toStringTag]: string;
} | Date | Error | Generator | Promise<unknown> | RegExp;
type MakeReadonly<T> = T extends Map<infer K, infer V> ? ReadonlyMap<K, V> : T extends Set<infer V> ? ReadonlySet<V> : T extends [infer Head, ...infer Tail] ? readonly [Head, ...Tail] : T extends Array<infer V> ? ReadonlyArray<V> : T extends BuiltIn ? T : Readonly<T>;
type Identity<T> = T;
type Flatten<T> = Identity<{
    [k in keyof T]: T[k];
}>;
type Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
type TupleItems = ReadonlyArray<SomeType>;
type AnyFunc = (...args: any[]) => any;
type MaybeAsync<T> = T | Promise<T>;
type EnumValue = string | number;
type EnumLike = Readonly<Record<string, EnumValue>>;
type Literal = string | number | bigint | boolean | null | undefined;
type Primitive = string | number | symbol | bigint | boolean | null | undefined;
type HasLength = {
    length: number;
};
type PropValues = Record<string, Set<Primitive>>;
type PrimitiveSet = Set<Primitive>;
type EmptyToNever<T> = keyof T extends never ? never : T;
declare abstract class Class {
    constructor(..._args: any[]);
}

declare const version: {
    readonly major: 4;
    readonly minor: 4;
    readonly patch: number;
};

interface ParseContext<T extends $ZodIssueBase = never> {
    /** Customize error messages. */
    readonly error?: $ZodErrorMap<T>;
    /** Include the `input` field in issue objects. Default `false`. */
    readonly reportInput?: boolean;
    /** Skip eval-based fast path. Default `false`. */
    readonly jitless?: boolean;
}
/** @internal */
interface ParseContextInternal<T extends $ZodIssueBase = never> extends ParseContext<T> {
    readonly async?: boolean | undefined;
    readonly direction?: "forward" | "backward";
    readonly skipChecks?: boolean;
}
interface ParsePayload<T = unknown> {
    value: T;
    issues: $ZodRawIssue[];
    /** A way to mark a whole payload as aborted. Used in codecs/pipes. */
    aborted?: boolean;
    /** @internal Marks a value as a fallback that an outer wrapper (e.g.
     * $ZodOptional) may override with its own interpretation when input was
     * undefined. Set by $ZodCatch when catchValue substitutes and by every
     * $ZodTransform invocation. */
    fallback?: boolean | undefined;
}
type CheckFn<T> = (input: ParsePayload<T>) => MaybeAsync<void>;
interface $ZodTypeDef {
    type: "string" | "number" | "int" | "boolean" | "bigint" | "symbol" | "null" | "undefined" | "void" | "never" | "any" | "unknown" | "date" | "object" | "record" | "file" | "array" | "tuple" | "union" | "intersection" | "map" | "set" | "enum" | "literal" | "nullable" | "optional" | "nonoptional" | "success" | "transform" | "default" | "prefault" | "catch" | "nan" | "pipe" | "readonly" | "template_literal" | "promise" | "lazy" | "function" | "custom";
    error?: $ZodErrorMap<never> | undefined;
    checks?: $ZodCheck<never>[];
}
interface _$ZodTypeInternals {
    /** The `@zod/core` version of this schema */
    version: typeof version;
    /** Schema definition. */
    def: $ZodTypeDef;
    /** @internal Randomly generated ID for this schema. */
    /** @internal List of deferred initializers. */
    deferred: AnyFunc[] | undefined;
    /** @internal Parses input and runs all checks (refinements). */
    run(payload: ParsePayload<any>, ctx: ParseContextInternal): MaybeAsync<ParsePayload>;
    /** @internal Parses input, doesn't run checks. */
    parse(payload: ParsePayload<any>, ctx: ParseContextInternal): MaybeAsync<ParsePayload>;
    /** @internal  Stores identifiers for the set of traits implemented by this schema. */
    traits: Set<string>;
    /** @internal Indicates that a schema output type should be considered optional inside objects.
     * @default Required
     */
    /** @internal */
    optin?: "optional" | undefined;
    /** @internal */
    optout?: "optional" | undefined;
    /** @internal The set of literal values that will pass validation. Must be an exhaustive set. Used to determine optionality in z.record().
     *
     * Defined on: enum, const, literal, null, undefined
     * Passthrough: optional, nullable, branded, default, catch, pipe
     * Todo: unions?
     */
    values?: PrimitiveSet | undefined;
    /** Default value bubbled up from  */
    /** @internal A set of literal discriminators used for the fast path in discriminated unions. */
    propValues?: PropValues | undefined;
    /** @internal This flag indicates that a schema validation can be represented with a regular expression. Used to determine allowable schemas in z.templateLiteral(). */
    pattern: RegExp | undefined;
    /** @internal The constructor function of this schema. */
    constr: new (def: any) => $ZodType;
    /** @internal A catchall object for bag metadata related to this schema. Commonly modified by checks using `onattach`. */
    bag: Record<string, unknown>;
    /** @internal The set of issues this schema might throw during type checking. */
    isst: $ZodIssueBase;
    /** @internal Subject to change, not a public API. */
    processJSONSchema?: ((ctx: ToJSONSchemaContext, json: BaseSchema, params: ProcessParams) => void) | undefined;
    /** An optional method used to override `toJSONSchema` logic. */
    toJSONSchema?: () => unknown;
    /** @internal The parent of this schema. Only set during certain clone operations. */
    parent?: $ZodType | undefined;
}
/** @internal */
interface $ZodTypeInternals<out O = unknown, out I = unknown> extends _$ZodTypeInternals {
    /** @internal The inferred output type */
    output: O;
    /** @internal The inferred input type */
    input: I;
}
type $ZodStandardSchema<T> = StandardSchemaV1.Props<input<T>, output<T>>;
type SomeType = {
    _zod: _$ZodTypeInternals;
};
interface _$ZodType<T extends $ZodTypeInternals = $ZodTypeInternals> extends $ZodType<T["output"], T["input"], T> {
}
interface $ZodType<O = unknown, I = unknown, Internals extends $ZodTypeInternals<O, I> = $ZodTypeInternals<O, I>> {
    _zod: Internals;
    "~standard": $ZodStandardSchema<this>;
}
declare const $ZodType: $constructor<$ZodType>;

interface $ZodStringDef extends $ZodTypeDef {
    type: "string";
    coerce?: boolean;
    checks?: $ZodCheck<string>[];
}
interface $ZodStringInternals<Input> extends $ZodTypeInternals<string, Input> {
    def: $ZodStringDef;
    /** @deprecated Internal API, use with caution (not deprecated) */
    pattern: RegExp;
    /** @deprecated Internal API, use with caution (not deprecated) */
    isst: $ZodIssueInvalidType;
    bag: LoosePartial<{
        minimum: number;
        maximum: number;
        patterns: Set<RegExp>;
        format: string;
        contentEncoding: string;
    }>;
}
interface $ZodString<Input = unknown> extends _$ZodType<$ZodStringInternals<Input>> {
}
declare const $ZodString: $constructor<$ZodString>;
interface $ZodNumberDef extends $ZodTypeDef {
    type: "number";
    coerce?: boolean;
}
interface $ZodNumberInternals<Input = unknown> extends $ZodTypeInternals<number, Input> {
    def: $ZodNumberDef;
    /** @deprecated Internal API, use with caution (not deprecated) */
    pattern: RegExp;
    /** @deprecated Internal API, use with caution (not deprecated) */
    isst: $ZodIssueInvalidType;
    bag: LoosePartial<{
        minimum: number;
        maximum: number;
        exclusiveMinimum: number;
        exclusiveMaximum: number;
        format: string;
        pattern: RegExp;
    }>;
}
interface $ZodNumber<Input = unknown> extends $ZodType {
    _zod: $ZodNumberInternals<Input>;
}
declare const $ZodNumber: $constructor<$ZodNumber>;
interface $ZodBooleanDef extends $ZodTypeDef {
    type: "boolean";
    coerce?: boolean;
    checks?: $ZodCheck<boolean>[];
}
interface $ZodBooleanInternals<T = unknown> extends $ZodTypeInternals<boolean, T> {
    pattern: RegExp;
    def: $ZodBooleanDef;
    isst: $ZodIssueInvalidType;
}
interface $ZodBoolean<T = unknown> extends $ZodType {
    _zod: $ZodBooleanInternals<T>;
}
declare const $ZodBoolean: $constructor<$ZodBoolean>;
interface $ZodBigIntDef extends $ZodTypeDef {
    type: "bigint";
    coerce?: boolean;
}
interface $ZodBigIntInternals<T = unknown> extends $ZodTypeInternals<bigint, T> {
    pattern: RegExp;
    /** @internal Internal API, use with caution */
    def: $ZodBigIntDef;
    isst: $ZodIssueInvalidType;
    bag: LoosePartial<{
        minimum: bigint;
        maximum: bigint;
        format: string;
    }>;
}
interface $ZodBigInt<T = unknown> extends $ZodType {
    _zod: $ZodBigIntInternals<T>;
}
declare const $ZodBigInt: $constructor<$ZodBigInt>;
interface $ZodSymbolDef extends $ZodTypeDef {
    type: "symbol";
}
interface $ZodSymbolInternals extends $ZodTypeInternals<symbol, symbol> {
    def: $ZodSymbolDef;
    isst: $ZodIssueInvalidType;
}
interface $ZodSymbol extends $ZodType {
    _zod: $ZodSymbolInternals;
}
declare const $ZodSymbol: $constructor<$ZodSymbol>;
interface $ZodUndefinedDef extends $ZodTypeDef {
    type: "undefined";
}
interface $ZodUndefinedInternals extends $ZodTypeInternals<undefined, undefined> {
    pattern: RegExp;
    def: $ZodUndefinedDef;
    values: PrimitiveSet;
    isst: $ZodIssueInvalidType;
}
interface $ZodUndefined extends $ZodType {
    _zod: $ZodUndefinedInternals;
}
declare const $ZodUndefined: $constructor<$ZodUndefined>;
interface $ZodNullDef extends $ZodTypeDef {
    type: "null";
}
interface $ZodNullInternals extends $ZodTypeInternals<null, null> {
    pattern: RegExp;
    def: $ZodNullDef;
    values: PrimitiveSet;
    isst: $ZodIssueInvalidType;
}
interface $ZodNull extends $ZodType {
    _zod: $ZodNullInternals;
}
declare const $ZodNull: $constructor<$ZodNull>;
interface $ZodAnyDef extends $ZodTypeDef {
    type: "any";
}
interface $ZodAnyInternals extends $ZodTypeInternals<any, any> {
    def: $ZodAnyDef;
    isst: never;
}
interface $ZodAny extends $ZodType {
    _zod: $ZodAnyInternals;
}
declare const $ZodAny: $constructor<$ZodAny>;
interface $ZodUnknownDef extends $ZodTypeDef {
    type: "unknown";
}
interface $ZodUnknownInternals extends $ZodTypeInternals<unknown, unknown> {
    def: $ZodUnknownDef;
    isst: never;
}
interface $ZodUnknown extends $ZodType {
    _zod: $ZodUnknownInternals;
}
declare const $ZodUnknown: $constructor<$ZodUnknown>;
interface $ZodNeverDef extends $ZodTypeDef {
    type: "never";
}
interface $ZodNeverInternals extends $ZodTypeInternals<never, never> {
    def: $ZodNeverDef;
    isst: $ZodIssueInvalidType;
}
interface $ZodNever extends $ZodType {
    _zod: $ZodNeverInternals;
}
declare const $ZodNever: $constructor<$ZodNever>;
interface $ZodVoidDef extends $ZodTypeDef {
    type: "void";
}
interface $ZodVoidInternals extends $ZodTypeInternals<void, void> {
    def: $ZodVoidDef;
    isst: $ZodIssueInvalidType;
}
interface $ZodVoid extends $ZodType {
    _zod: $ZodVoidInternals;
}
declare const $ZodVoid: $constructor<$ZodVoid>;
interface $ZodDateDef extends $ZodTypeDef {
    type: "date";
    coerce?: boolean;
}
interface $ZodDateInternals<T = unknown> extends $ZodTypeInternals<Date, T> {
    def: $ZodDateDef;
    isst: $ZodIssueInvalidType;
    bag: LoosePartial<{
        minimum: Date;
        maximum: Date;
        format: string;
    }>;
}
interface $ZodDate<T = unknown> extends $ZodType {
    _zod: $ZodDateInternals<T>;
}
declare const $ZodDate: $constructor<$ZodDate>;
interface $ZodArrayDef<T extends SomeType = $ZodType> extends $ZodTypeDef {
    type: "array";
    element: T;
}
interface $ZodArrayInternals<T extends SomeType = $ZodType> extends _$ZodTypeInternals {
    def: $ZodArrayDef<T>;
    isst: $ZodIssueInvalidType;
    output: output<T>[];
    input: input<T>[];
}
interface $ZodArray<T extends SomeType = $ZodType> extends $ZodType<any, any, $ZodArrayInternals<T>> {
}
declare const $ZodArray: $constructor<$ZodArray>;
type OptionalOutSchema = {
    _zod: {
        optout: "optional";
    };
};
type OptionalInSchema = {
    _zod: {
        optin: "optional";
    };
};
type $InferObjectOutput<T extends $ZodLooseShape, Extra extends Record<string, unknown>> = string extends keyof T ? IsAny<T[keyof T]> extends true ? Record<string, unknown> : Record<string, output<T[keyof T]>> : keyof (T & Extra) extends never ? Record<string, never> : Prettify<{
    -readonly [k in keyof T as T[k] extends OptionalOutSchema ? never : k]: T[k]["_zod"]["output"];
} & {
    -readonly [k in keyof T as T[k] extends OptionalOutSchema ? k : never]?: T[k]["_zod"]["output"];
} & Extra>;
type $InferObjectInput<T extends $ZodLooseShape, Extra extends Record<string, unknown>> = string extends keyof T ? IsAny<T[keyof T]> extends true ? Record<string, unknown> : Record<string, input<T[keyof T]>> : keyof (T & Extra) extends never ? Record<string, never> : Prettify<{
    -readonly [k in keyof T as T[k] extends OptionalInSchema ? never : k]: T[k]["_zod"]["input"];
} & {
    -readonly [k in keyof T as T[k] extends OptionalInSchema ? k : never]?: T[k]["_zod"]["input"];
} & Extra>;
type $ZodObjectConfig = {
    out: Record<string, unknown>;
    in: Record<string, unknown>;
};
type $ZodShape = Readonly<{
    [k: string]: $ZodType;
}>;
interface $ZodObjectDef<Shape extends $ZodShape = $ZodShape> extends $ZodTypeDef {
    type: "object";
    shape: Shape;
    catchall?: $ZodType | undefined;
}
interface $ZodObjectInternals<
/** @ts-ignore Cast variance */
out Shape extends $ZodShape = $ZodShape, out Config extends $ZodObjectConfig = $ZodObjectConfig> extends _$ZodTypeInternals {
    def: $ZodObjectDef<Shape>;
    config: Config;
    isst: $ZodIssueInvalidType | $ZodIssueUnrecognizedKeys;
    propValues: PropValues;
    output: $InferObjectOutput<Shape, Config["out"]>;
    input: $InferObjectInput<Shape, Config["in"]>;
    optin?: "optional" | undefined;
    optout?: "optional" | undefined;
}
type $ZodLooseShape = Record<string, any>;
interface $ZodObject<
/** @ts-ignore Cast variance */
out Shape extends Readonly<$ZodShape> = Readonly<$ZodShape>, out Params extends $ZodObjectConfig = $ZodObjectConfig> extends $ZodType<any, any, $ZodObjectInternals<Shape, Params>> {
}
declare const $ZodObject: $constructor<$ZodObject>;
type $InferUnionOutput<T extends SomeType> = T extends any ? output<T> : never;
type $InferUnionInput<T extends SomeType> = T extends any ? input<T> : never;
interface $ZodUnionDef<Options extends readonly SomeType[] = readonly $ZodType[]> extends $ZodTypeDef {
    type: "union";
    options: Options;
    inclusive?: boolean;
}
type IsOptionalIn<T extends SomeType> = T extends OptionalInSchema ? true : false;
type IsOptionalOut<T extends SomeType> = T extends OptionalOutSchema ? true : false;
interface $ZodUnionInternals<T extends readonly SomeType[] = readonly $ZodType[]> extends _$ZodTypeInternals {
    def: $ZodUnionDef<T>;
    isst: $ZodIssueInvalidUnion;
    pattern: T[number]["_zod"]["pattern"];
    values: T[number]["_zod"]["values"];
    output: $InferUnionOutput<T[number]>;
    input: $InferUnionInput<T[number]>;
    optin: IsOptionalIn<T[number]> extends false ? "optional" | undefined : "optional";
    optout: IsOptionalOut<T[number]> extends false ? "optional" | undefined : "optional";
}
interface $ZodUnion<T extends readonly SomeType[] = readonly $ZodType[]> extends $ZodType<any, any, $ZodUnionInternals<T>> {
    _zod: $ZodUnionInternals<T>;
}
declare const $ZodUnion: $constructor<$ZodUnion>;
interface $ZodIntersectionDef<Left extends SomeType = $ZodType, Right extends SomeType = $ZodType> extends $ZodTypeDef {
    type: "intersection";
    left: Left;
    right: Right;
}
interface $ZodIntersectionInternals<A extends SomeType = $ZodType, B extends SomeType = $ZodType> extends _$ZodTypeInternals {
    def: $ZodIntersectionDef<A, B>;
    isst: never;
    optin: A["_zod"]["optin"] | B["_zod"]["optin"];
    optout: A["_zod"]["optout"] | B["_zod"]["optout"];
    output: output<A> & output<B>;
    input: input<A> & input<B>;
}
interface $ZodIntersection<A extends SomeType = $ZodType, B extends SomeType = $ZodType> extends $ZodType {
    _zod: $ZodIntersectionInternals<A, B>;
}
declare const $ZodIntersection: $constructor<$ZodIntersection>;
interface $ZodTupleDef<T extends TupleItems = readonly $ZodType[], Rest extends SomeType | null = $ZodType | null> extends $ZodTypeDef {
    type: "tuple";
    items: T;
    rest: Rest;
}
type $InferTupleInputType<T extends TupleItems, Rest extends SomeType | null> = [
    ...TupleInputTypeWithOptionals<T>,
    ...(Rest extends SomeType ? input<Rest>[] : [])
];
type TupleInputTypeNoOptionals<T extends TupleItems> = {
    [k in keyof T]: input<T[k]>;
};
type TupleInputTypeWithOptionals<T extends TupleItems> = T extends readonly [
    ...infer Prefix extends SomeType[],
    infer Tail extends SomeType
] ? Tail["_zod"]["optin"] extends "optional" ? [...TupleInputTypeWithOptionals<Prefix>, input<Tail>?] : TupleInputTypeNoOptionals<T> : [];
type $InferTupleOutputType<T extends TupleItems, Rest extends SomeType | null> = [
    ...TupleOutputTypeWithOptionals<T>,
    ...(Rest extends SomeType ? output<Rest>[] : [])
];
type TupleOutputTypeNoOptionals<T extends TupleItems> = {
    [k in keyof T]: output<T[k]>;
};
type TupleOutputTypeWithOptionals<T extends TupleItems> = T extends readonly [
    ...infer Prefix extends SomeType[],
    infer Tail extends SomeType
] ? Tail["_zod"]["optout"] extends "optional" ? [...TupleOutputTypeWithOptionals<Prefix>, output<Tail>?] : TupleOutputTypeNoOptionals<T> : [];
interface $ZodTupleInternals<T extends TupleItems = readonly $ZodType[], Rest extends SomeType | null = $ZodType | null> extends _$ZodTypeInternals {
    def: $ZodTupleDef<T, Rest>;
    isst: $ZodIssueInvalidType | $ZodIssueTooBig<unknown[]> | $ZodIssueTooSmall<unknown[]>;
    output: $InferTupleOutputType<T, Rest>;
    input: $InferTupleInputType<T, Rest>;
}
interface $ZodTuple<T extends TupleItems = readonly $ZodType[], Rest extends SomeType | null = $ZodType | null> extends $ZodType {
    _zod: $ZodTupleInternals<T, Rest>;
}
declare const $ZodTuple: $constructor<$ZodTuple>;
type $ZodRecordKey = $ZodType<string | number | symbol, unknown>;
interface $ZodRecordDef<Key extends $ZodRecordKey = $ZodRecordKey, Value extends SomeType = $ZodType> extends $ZodTypeDef {
    type: "record";
    keyType: Key;
    valueType: Value;
    /** @default "strict" - errors on keys not matching keyType. "loose" passes through non-matching keys unchanged. */
    mode?: "strict" | "loose";
}
type $InferZodRecordOutput<Key extends $ZodRecordKey = $ZodRecordKey, Value extends SomeType = $ZodType> = Key extends $partial ? Partial<Record<output<Key>, output<Value>>> : Record<output<Key>, output<Value>>;
type $InferZodRecordInput<Key extends $ZodRecordKey = $ZodRecordKey, Value extends SomeType = $ZodType> = Key extends $partial ? Partial<Record<input<Key> & PropertyKey, input<Value>>> : Record<input<Key> & PropertyKey, input<Value>>;
interface $ZodRecordInternals<Key extends $ZodRecordKey = $ZodRecordKey, Value extends SomeType = $ZodType> extends $ZodTypeInternals<$InferZodRecordOutput<Key, Value>, $InferZodRecordInput<Key, Value>> {
    def: $ZodRecordDef<Key, Value>;
    isst: $ZodIssueInvalidType | $ZodIssueInvalidKey<Record<PropertyKey, unknown>>;
    optin?: "optional" | undefined;
    optout?: "optional" | undefined;
}
type $partial = {
    "~~partial": true;
};
interface $ZodRecord<Key extends $ZodRecordKey = $ZodRecordKey, Value extends SomeType = $ZodType> extends $ZodType {
    _zod: $ZodRecordInternals<Key, Value>;
}
declare const $ZodRecord: $constructor<$ZodRecord>;
interface $ZodMapDef<Key extends SomeType = $ZodType, Value extends SomeType = $ZodType> extends $ZodTypeDef {
    type: "map";
    keyType: Key;
    valueType: Value;
}
interface $ZodMapInternals<Key extends SomeType = $ZodType, Value extends SomeType = $ZodType> extends $ZodTypeInternals<Map<output<Key>, output<Value>>, Map<input<Key>, input<Value>>> {
    def: $ZodMapDef<Key, Value>;
    isst: $ZodIssueInvalidType | $ZodIssueInvalidKey | $ZodIssueInvalidElement<unknown>;
    optin?: "optional" | undefined;
    optout?: "optional" | undefined;
}
interface $ZodMap<Key extends SomeType = $ZodType, Value extends SomeType = $ZodType> extends $ZodType {
    _zod: $ZodMapInternals<Key, Value>;
}
declare const $ZodMap: $constructor<$ZodMap>;
interface $ZodSetDef<T extends SomeType = $ZodType> extends $ZodTypeDef {
    type: "set";
    valueType: T;
}
interface $ZodSetInternals<T extends SomeType = $ZodType> extends $ZodTypeInternals<Set<output<T>>, Set<input<T>>> {
    def: $ZodSetDef<T>;
    isst: $ZodIssueInvalidType;
    optin?: "optional" | undefined;
    optout?: "optional" | undefined;
}
interface $ZodSet<T extends SomeType = $ZodType> extends $ZodType {
    _zod: $ZodSetInternals<T>;
}
declare const $ZodSet: $constructor<$ZodSet>;
type $InferEnumOutput<T extends EnumLike> = T[keyof T] & {};
type $InferEnumInput<T extends EnumLike> = T[keyof T] & {};
interface $ZodEnumDef<T extends EnumLike = EnumLike> extends $ZodTypeDef {
    type: "enum";
    entries: T;
}
interface $ZodEnumInternals<
/** @ts-ignore Cast variance */
out T extends EnumLike = EnumLike> extends $ZodTypeInternals<$InferEnumOutput<T>, $InferEnumInput<T>> {
    def: $ZodEnumDef<T>;
    /** @deprecated Internal API, use with caution (not deprecated) */
    values: PrimitiveSet;
    /** @deprecated Internal API, use with caution (not deprecated) */
    pattern: RegExp;
    isst: $ZodIssueInvalidValue;
}
interface $ZodEnum<T extends EnumLike = EnumLike> extends $ZodType {
    _zod: $ZodEnumInternals<T>;
}
declare const $ZodEnum: $constructor<$ZodEnum>;
interface $ZodLiteralDef<T extends Literal> extends $ZodTypeDef {
    type: "literal";
    values: T[];
}
interface $ZodLiteralInternals<T extends Literal = Literal> extends $ZodTypeInternals<T, T> {
    def: $ZodLiteralDef<T>;
    values: Set<T>;
    pattern: RegExp;
    isst: $ZodIssueInvalidValue;
}
interface $ZodLiteral<T extends Literal = Literal> extends $ZodType {
    _zod: $ZodLiteralInternals<T>;
}
declare const $ZodLiteral: $constructor<$ZodLiteral>;
type _File = typeof globalThis extends {
    File: infer F extends new (...args: any[]) => any;
} ? InstanceType<F> : {};
/** Do not reference this directly. */
interface File extends _File {
    readonly type: string;
    readonly size: number;
}
interface $ZodFileDef extends $ZodTypeDef {
    type: "file";
}
interface $ZodFileInternals extends $ZodTypeInternals<File, File> {
    def: $ZodFileDef;
    isst: $ZodIssueInvalidType;
    bag: LoosePartial<{
        minimum: number;
        maximum: number;
        mime: MimeTypes[];
    }>;
}
interface $ZodFile extends $ZodType {
    _zod: $ZodFileInternals;
}
declare const $ZodFile: $constructor<$ZodFile>;
interface $ZodTransformDef extends $ZodTypeDef {
    type: "transform";
    transform: (input: unknown, payload: ParsePayload<unknown>) => MaybeAsync<unknown>;
}
interface $ZodTransformInternals<O = unknown, I = unknown> extends $ZodTypeInternals<O, I> {
    def: $ZodTransformDef;
    isst: never;
}
interface $ZodTransform<O = unknown, I = unknown> extends $ZodType {
    _zod: $ZodTransformInternals<O, I>;
}
declare const $ZodTransform: $constructor<$ZodTransform>;
interface $ZodOptionalDef<T extends SomeType = $ZodType> extends $ZodTypeDef {
    type: "optional";
    innerType: T;
}
interface $ZodOptionalInternals<T extends SomeType = $ZodType> extends $ZodTypeInternals<output<T> | undefined, input<T> | undefined> {
    def: $ZodOptionalDef<T>;
    optin: "optional";
    optout: "optional";
    isst: never;
    values: T["_zod"]["values"];
    pattern: T["_zod"]["pattern"];
}
interface $ZodOptional<T extends SomeType = $ZodType> extends $ZodType {
    _zod: $ZodOptionalInternals<T>;
}
declare const $ZodOptional: $constructor<$ZodOptional>;
interface $ZodExactOptionalDef<T extends SomeType = $ZodType> extends $ZodOptionalDef<T> {
}
interface $ZodExactOptionalInternals<T extends SomeType = $ZodType> extends $ZodOptionalInternals<T> {
    def: $ZodExactOptionalDef<T>;
    output: output<T>;
    input: input<T>;
}
interface $ZodExactOptional<T extends SomeType = $ZodType> extends $ZodType {
    _zod: $ZodExactOptionalInternals<T>;
}
declare const $ZodExactOptional: $constructor<$ZodExactOptional>;
interface $ZodNullableDef<T extends SomeType = $ZodType> extends $ZodTypeDef {
    type: "nullable";
    innerType: T;
}
interface $ZodNullableInternals<T extends SomeType = $ZodType> extends $ZodTypeInternals<output<T> | null, input<T> | null> {
    def: $ZodNullableDef<T>;
    optin: T["_zod"]["optin"];
    optout: T["_zod"]["optout"];
    isst: never;
    values: T["_zod"]["values"];
    pattern: T["_zod"]["pattern"];
}
interface $ZodNullable<T extends SomeType = $ZodType> extends $ZodType {
    _zod: $ZodNullableInternals<T>;
}
declare const $ZodNullable: $constructor<$ZodNullable>;
interface $ZodDefaultDef<T extends SomeType = $ZodType> extends $ZodTypeDef {
    type: "default";
    innerType: T;
    /** The default value. May be a getter. */
    defaultValue: NoUndefined<output<T>>;
}
interface $ZodDefaultInternals<T extends SomeType = $ZodType> extends $ZodTypeInternals<NoUndefined<output<T>>, input<T> | undefined> {
    def: $ZodDefaultDef<T>;
    optin: "optional";
    optout?: "optional" | undefined;
    isst: never;
    values: T["_zod"]["values"];
}
interface $ZodDefault<T extends SomeType = $ZodType> extends $ZodType {
    _zod: $ZodDefaultInternals<T>;
}
declare const $ZodDefault: $constructor<$ZodDefault>;
interface $ZodPrefaultDef<T extends SomeType = $ZodType> extends $ZodTypeDef {
    type: "prefault";
    innerType: T;
    /** The default value. May be a getter. */
    defaultValue: input<T>;
}
interface $ZodPrefaultInternals<T extends SomeType = $ZodType> extends $ZodTypeInternals<NoUndefined<output<T>>, input<T> | undefined> {
    def: $ZodPrefaultDef<T>;
    optin: "optional";
    optout?: "optional" | undefined;
    isst: never;
    values: T["_zod"]["values"];
}
interface $ZodPrefault<T extends SomeType = $ZodType> extends $ZodType {
    _zod: $ZodPrefaultInternals<T>;
}
declare const $ZodPrefault: $constructor<$ZodPrefault>;
interface $ZodNonOptionalDef<T extends SomeType = $ZodType> extends $ZodTypeDef {
    type: "nonoptional";
    innerType: T;
}
interface $ZodNonOptionalInternals<T extends SomeType = $ZodType> extends $ZodTypeInternals<NoUndefined<output<T>>, NoUndefined<input<T>>> {
    def: $ZodNonOptionalDef<T>;
    isst: $ZodIssueInvalidType;
    values: T["_zod"]["values"];
    optin: "optional" | undefined;
    optout: "optional" | undefined;
}
interface $ZodNonOptional<T extends SomeType = $ZodType> extends $ZodType {
    _zod: $ZodNonOptionalInternals<T>;
}
declare const $ZodNonOptional: $constructor<$ZodNonOptional>;
interface $ZodSuccessDef<T extends SomeType = $ZodType> extends $ZodTypeDef {
    type: "success";
    innerType: T;
}
interface $ZodSuccessInternals<T extends SomeType = $ZodType> extends $ZodTypeInternals<boolean, input<T>> {
    def: $ZodSuccessDef<T>;
    isst: never;
    optin: T["_zod"]["optin"];
    optout: "optional" | undefined;
}
interface $ZodSuccess<T extends SomeType = $ZodType> extends $ZodType {
    _zod: $ZodSuccessInternals<T>;
}
declare const $ZodSuccess: $constructor<$ZodSuccess>;
interface $ZodCatchCtx extends ParsePayload {
    /** @deprecated Use `ctx.issues` */
    error: {
        issues: $ZodIssue[];
    };
    /** @deprecated Use `ctx.value` */
    input: unknown;
}
interface $ZodCatchDef<T extends SomeType = $ZodType> extends $ZodTypeDef {
    type: "catch";
    innerType: T;
    catchValue: (ctx: $ZodCatchCtx) => unknown;
}
interface $ZodCatchInternals<T extends SomeType = $ZodType> extends $ZodTypeInternals<output<T>, input<T>> {
    def: $ZodCatchDef<T>;
    optin: T["_zod"]["optin"];
    optout: T["_zod"]["optout"];
    isst: never;
    values: T["_zod"]["values"];
}
interface $ZodCatch<T extends SomeType = $ZodType> extends $ZodType {
    _zod: $ZodCatchInternals<T>;
}
declare const $ZodCatch: $constructor<$ZodCatch>;
interface $ZodNaNDef extends $ZodTypeDef {
    type: "nan";
}
interface $ZodNaNInternals extends $ZodTypeInternals<number, number> {
    def: $ZodNaNDef;
    isst: $ZodIssueInvalidType;
}
interface $ZodNaN extends $ZodType {
    _zod: $ZodNaNInternals;
}
declare const $ZodNaN: $constructor<$ZodNaN>;
interface $ZodPipeDef<A extends SomeType = $ZodType, B extends SomeType = $ZodType> extends $ZodTypeDef {
    type: "pipe";
    in: A;
    out: B;
    /** Only defined inside $ZodCodec instances. */
    transform?: (value: output<A>, payload: ParsePayload<output<A>>) => MaybeAsync<input<B>>;
    /** Only defined inside $ZodCodec instances. */
    reverseTransform?: (value: input<B>, payload: ParsePayload<input<B>>) => MaybeAsync<output<A>>;
}
interface $ZodPipeInternals<A extends SomeType = $ZodType, B extends SomeType = $ZodType> extends $ZodTypeInternals<output<B>, input<A>> {
    def: $ZodPipeDef<A, B>;
    isst: never;
    values: A["_zod"]["values"];
    optin: A["_zod"]["optin"];
    optout: B["_zod"]["optout"];
    propValues: A["_zod"]["propValues"];
}
interface $ZodPipe<A extends SomeType = $ZodType, B extends SomeType = $ZodType> extends $ZodType {
    _zod: $ZodPipeInternals<A, B>;
}
declare const $ZodPipe: $constructor<$ZodPipe>;
interface $ZodReadonlyDef<T extends SomeType = $ZodType> extends $ZodTypeDef {
    type: "readonly";
    innerType: T;
}
interface $ZodReadonlyInternals<T extends SomeType = $ZodType> extends $ZodTypeInternals<MakeReadonly<output<T>>, MakeReadonly<input<T>>> {
    def: $ZodReadonlyDef<T>;
    optin: T["_zod"]["optin"];
    optout: T["_zod"]["optout"];
    isst: never;
    propValues: T["_zod"]["propValues"];
    values: T["_zod"]["values"];
}
interface $ZodReadonly<T extends SomeType = $ZodType> extends $ZodType {
    _zod: $ZodReadonlyInternals<T>;
}
declare const $ZodReadonly: $constructor<$ZodReadonly>;
interface $ZodTemplateLiteralDef extends $ZodTypeDef {
    type: "template_literal";
    parts: $ZodTemplateLiteralPart[];
    format?: string | undefined;
}
interface $ZodTemplateLiteralInternals<Template extends string = string> extends $ZodTypeInternals<Template, Template> {
    pattern: RegExp;
    def: $ZodTemplateLiteralDef;
    isst: $ZodIssueInvalidType;
}
type LiteralPart = Exclude<Literal, symbol>;
interface SchemaPartInternals extends $ZodTypeInternals<LiteralPart, LiteralPart> {
    pattern: RegExp;
}
interface SchemaPart extends $ZodType {
    _zod: SchemaPartInternals;
}
type $ZodTemplateLiteralPart = LiteralPart | SchemaPart;
interface $ZodTemplateLiteral<Template extends string = string> extends $ZodType {
    _zod: $ZodTemplateLiteralInternals<Template>;
}
declare const $ZodTemplateLiteral: $constructor<$ZodTemplateLiteral>;
type $ZodFunctionArgs = $ZodType<unknown[], unknown[]>;
type $ZodFunctionIn = $ZodFunctionArgs;
type $ZodFunctionOut = $ZodType;
type $InferInnerFunctionType<Args extends $ZodFunctionIn, Returns extends $ZodFunctionOut> = (...args: $ZodFunctionIn extends Args ? never[] : output<Args>) => input<Returns>;
type $InferInnerFunctionTypeAsync<Args extends $ZodFunctionIn, Returns extends $ZodFunctionOut> = (...args: $ZodFunctionIn extends Args ? never[] : output<Args>) => MaybeAsync<input<Returns>>;
type $InferOuterFunctionType<Args extends $ZodFunctionIn, Returns extends $ZodFunctionOut> = (...args: $ZodFunctionIn extends Args ? never[] : input<Args>) => output<Returns>;
type $InferOuterFunctionTypeAsync<Args extends $ZodFunctionIn, Returns extends $ZodFunctionOut> = (...args: $ZodFunctionIn extends Args ? never[] : input<Args>) => Promise<output<Returns>>;
interface $ZodFunctionDef<In extends $ZodFunctionIn = $ZodFunctionIn, Out extends $ZodFunctionOut = $ZodFunctionOut> extends $ZodTypeDef {
    type: "function";
    input: In;
    output: Out;
}
interface $ZodFunctionInternals<Args extends $ZodFunctionIn, Returns extends $ZodFunctionOut> extends $ZodTypeInternals<$InferOuterFunctionType<Args, Returns>, $InferInnerFunctionType<Args, Returns>> {
    def: $ZodFunctionDef<Args, Returns>;
    isst: $ZodIssueInvalidType;
}
interface $ZodFunction<Args extends $ZodFunctionIn = $ZodFunctionIn, Returns extends $ZodFunctionOut = $ZodFunctionOut> extends $ZodType<any, any, $ZodFunctionInternals<Args, Returns>> {
    /** @deprecated */
    _def: $ZodFunctionDef<Args, Returns>;
    _input: $InferInnerFunctionType<Args, Returns>;
    _output: $InferOuterFunctionType<Args, Returns>;
    implement<F extends $InferInnerFunctionType<Args, Returns>>(func: F): (...args: Parameters<this["_output"]>) => ReturnType<F> extends ReturnType<this["_output"]> ? ReturnType<F> : ReturnType<this["_output"]>;
    implementAsync<F extends $InferInnerFunctionTypeAsync<Args, Returns>>(func: F): F extends $InferOuterFunctionTypeAsync<Args, Returns> ? F : $InferOuterFunctionTypeAsync<Args, Returns>;
    input<const Items extends TupleItems, const Rest extends $ZodFunctionOut = $ZodFunctionOut>(args: Items, rest?: Rest): $ZodFunction<$ZodTuple<Items, Rest>, Returns>;
    input<NewArgs extends $ZodFunctionIn>(args: NewArgs): $ZodFunction<NewArgs, Returns>;
    input(...args: any[]): $ZodFunction<any, Returns>;
    output<NewReturns extends $ZodType>(output: NewReturns): $ZodFunction<Args, NewReturns>;
}
declare const $ZodFunction: $constructor<$ZodFunction>;
interface $ZodPromiseDef<T extends SomeType = $ZodType> extends $ZodTypeDef {
    type: "promise";
    innerType: T;
}
interface $ZodPromiseInternals<T extends SomeType = $ZodType> extends $ZodTypeInternals<Promise<output<T>>, MaybeAsync<input<T>>> {
    def: $ZodPromiseDef<T>;
    isst: never;
}
interface $ZodPromise<T extends SomeType = $ZodType> extends $ZodType {
    _zod: $ZodPromiseInternals<T>;
}
declare const $ZodPromise: $constructor<$ZodPromise>;
interface $ZodLazyDef<T extends SomeType = $ZodType> extends $ZodTypeDef {
    type: "lazy";
    getter: () => T;
}
interface $ZodLazyInternals<T extends SomeType = $ZodType> extends $ZodTypeInternals<output<T>, input<T>> {
    def: $ZodLazyDef<T>;
    isst: never;
    /** Auto-cached way to retrieve the inner schema */
    innerType: T;
    pattern: T["_zod"]["pattern"];
    propValues: T["_zod"]["propValues"];
    optin: T["_zod"]["optin"];
    optout: T["_zod"]["optout"];
}
interface $ZodLazy<T extends SomeType = $ZodType> extends $ZodType {
    _zod: $ZodLazyInternals<T>;
}
declare const $ZodLazy: $constructor<$ZodLazy>;
interface $ZodCustomDef<O = unknown> extends $ZodTypeDef, $ZodCheckDef {
    type: "custom";
    check: "custom";
    path?: PropertyKey[] | undefined;
    error?: $ZodErrorMap | undefined;
    params?: Record<string, any> | undefined;
    fn: (arg: O) => unknown;
}
interface $ZodCustomInternals<O = unknown, I = unknown> extends $ZodTypeInternals<O, I>, $ZodCheckInternals<O> {
    def: $ZodCustomDef;
    issc: $ZodIssue;
    isst: never;
    bag: LoosePartial<{
        Class: typeof Class;
    }>;
}
interface $ZodCustom<O = unknown, I = unknown> extends $ZodType {
    _zod: $ZodCustomInternals<O, I>;
}
declare const $ZodCustom: $constructor<$ZodCustom>;
type $ZodTypes = $ZodString | $ZodNumber | $ZodBigInt | $ZodBoolean | $ZodDate | $ZodSymbol | $ZodUndefined | $ZodNullable | $ZodNull | $ZodAny | $ZodUnknown | $ZodNever | $ZodVoid | $ZodArray | $ZodObject | $ZodUnion | $ZodIntersection | $ZodTuple | $ZodRecord | $ZodMap | $ZodSet | $ZodLiteral | $ZodEnum | $ZodFunction | $ZodPromise | $ZodLazy | $ZodOptional | $ZodDefault | $ZodPrefault | $ZodTemplateLiteral | $ZodCustom | $ZodTransform | $ZodNonOptional | $ZodReadonly | $ZodNaN | $ZodPipe | $ZodSuccess | $ZodCatch | $ZodFile;

interface $ZodCheckDef {
    check: string;
    error?: $ZodErrorMap<never> | undefined;
    /** If true, no later checks will be executed if this check fails. Default `false`. */
    abort?: boolean | undefined;
    /** If provided, the check runs only when this returns `true`. By default, it is skipped if prior parsing produced aborting issues. */
    when?: ((payload: ParsePayload) => boolean) | undefined;
}
interface $ZodCheckInternals<T> {
    def: $ZodCheckDef;
    /** The set of issues this check might throw. */
    issc?: $ZodIssueBase;
    check(payload: ParsePayload<T>): MaybeAsync<void>;
    onattach: ((schema: $ZodType) => void)[];
}
interface $ZodCheck<in T = never> {
    _zod: $ZodCheckInternals<T>;
}
declare const $ZodCheck: $constructor<$ZodCheck<any>>;
interface $ZodCheckMaxLengthDef extends $ZodCheckDef {
    check: "max_length";
    maximum: number;
}
interface $ZodCheckMaxLengthInternals<T extends HasLength = HasLength> extends $ZodCheckInternals<T> {
    def: $ZodCheckMaxLengthDef;
    issc: $ZodIssueTooBig<T>;
}
interface $ZodCheckMaxLength<T extends HasLength = HasLength> extends $ZodCheck<T> {
    _zod: $ZodCheckMaxLengthInternals<T>;
}
declare const $ZodCheckMaxLength: $constructor<$ZodCheckMaxLength>;
interface $ZodCheckMinLengthDef extends $ZodCheckDef {
    check: "min_length";
    minimum: number;
}
interface $ZodCheckMinLengthInternals<T extends HasLength = HasLength> extends $ZodCheckInternals<T> {
    def: $ZodCheckMinLengthDef;
    issc: $ZodIssueTooSmall<T>;
}
interface $ZodCheckMinLength<T extends HasLength = HasLength> extends $ZodCheck<T> {
    _zod: $ZodCheckMinLengthInternals<T>;
}
declare const $ZodCheckMinLength: $constructor<$ZodCheckMinLength>;
interface $ZodCheckLengthEqualsDef extends $ZodCheckDef {
    check: "length_equals";
    length: number;
}
interface $ZodCheckLengthEqualsInternals<T extends HasLength = HasLength> extends $ZodCheckInternals<T> {
    def: $ZodCheckLengthEqualsDef;
    issc: $ZodIssueTooBig<T> | $ZodIssueTooSmall<T>;
}
interface $ZodCheckLengthEquals<T extends HasLength = HasLength> extends $ZodCheck<T> {
    _zod: $ZodCheckLengthEqualsInternals<T>;
}
declare const $ZodCheckLengthEquals: $constructor<$ZodCheckLengthEquals>;
type $ZodStringFormats = "email" | "url" | "emoji" | "uuid" | "guid" | "nanoid" | "cuid" | "cuid2" | "ulid" | "xid" | "ksuid" | "datetime" | "date" | "time" | "duration" | "ipv4" | "ipv6" | "cidrv4" | "cidrv6" | "base64" | "base64url" | "json_string" | "e164" | "lowercase" | "uppercase" | "regex" | "jwt" | "starts_with" | "ends_with" | "includes";

interface $ZodIssueBase {
    readonly code?: string;
    readonly input?: unknown;
    readonly path: PropertyKey[];
    readonly message: string;
}
type $ZodInvalidTypeExpected = "string" | "number" | "int" | "boolean" | "bigint" | "symbol" | "undefined" | "null" | "never" | "void" | "date" | "array" | "object" | "tuple" | "record" | "map" | "set" | "file" | "nonoptional" | "nan" | "function" | (string & {});
interface $ZodIssueInvalidType<Input = unknown> extends $ZodIssueBase {
    readonly code: "invalid_type";
    readonly expected: $ZodInvalidTypeExpected;
    readonly input?: Input;
}
interface $ZodIssueTooBig<Input = unknown> extends $ZodIssueBase {
    readonly code: "too_big";
    readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
    readonly maximum: number | bigint;
    readonly inclusive?: boolean;
    readonly exact?: boolean;
    readonly input?: Input;
}
interface $ZodIssueTooSmall<Input = unknown> extends $ZodIssueBase {
    readonly code: "too_small";
    readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
    readonly minimum: number | bigint;
    /** True if the allowable range includes the minimum */
    readonly inclusive?: boolean;
    /** True if the allowed value is fixed (e.g.` z.length(5)`), not a range (`z.minLength(5)`) */
    readonly exact?: boolean;
    readonly input?: Input;
}
interface $ZodIssueInvalidStringFormat extends $ZodIssueBase {
    readonly code: "invalid_format";
    readonly format: $ZodStringFormats | (string & {});
    readonly pattern?: string;
    readonly input?: string;
}
interface $ZodIssueNotMultipleOf<Input extends number | bigint = number | bigint> extends $ZodIssueBase {
    readonly code: "not_multiple_of";
    readonly divisor: number;
    readonly input?: Input;
}
interface $ZodIssueUnrecognizedKeys extends $ZodIssueBase {
    readonly code: "unrecognized_keys";
    readonly keys: string[];
    readonly input?: Record<string, unknown>;
}
interface $ZodIssueInvalidUnionNoMatch extends $ZodIssueBase {
    readonly code: "invalid_union";
    readonly errors: $ZodIssue[][];
    readonly input?: unknown;
    readonly discriminator?: string | undefined;
    readonly options?: Primitive[];
    readonly inclusive?: true;
}
interface $ZodIssueInvalidUnionMultipleMatch extends $ZodIssueBase {
    readonly code: "invalid_union";
    readonly errors: [];
    readonly input?: unknown;
    readonly discriminator?: string | undefined;
    readonly inclusive: false;
}
type $ZodIssueInvalidUnion = $ZodIssueInvalidUnionNoMatch | $ZodIssueInvalidUnionMultipleMatch;
interface $ZodIssueInvalidKey<Input = unknown> extends $ZodIssueBase {
    readonly code: "invalid_key";
    readonly origin: "map" | "record";
    readonly issues: $ZodIssue[];
    readonly input?: Input;
}
interface $ZodIssueInvalidElement<Input = unknown> extends $ZodIssueBase {
    readonly code: "invalid_element";
    readonly origin: "map" | "set";
    readonly key: unknown;
    readonly issues: $ZodIssue[];
    readonly input?: Input;
}
interface $ZodIssueInvalidValue<Input = unknown> extends $ZodIssueBase {
    readonly code: "invalid_value";
    readonly values: Primitive[];
    readonly input?: Input;
}
interface $ZodIssueCustom extends $ZodIssueBase {
    readonly code: "custom";
    readonly params?: Record<string, any> | undefined;
    readonly input?: unknown;
}
type $ZodIssue = $ZodIssueInvalidType | $ZodIssueTooBig | $ZodIssueTooSmall | $ZodIssueInvalidStringFormat | $ZodIssueNotMultipleOf | $ZodIssueUnrecognizedKeys | $ZodIssueInvalidUnion | $ZodIssueInvalidKey | $ZodIssueInvalidElement | $ZodIssueInvalidValue | $ZodIssueCustom;
type $ZodInternalIssue<T extends $ZodIssueBase = $ZodIssue> = T extends any ? RawIssue$1<T> : never;
type RawIssue$1<T extends $ZodIssueBase> = T extends any ? Flatten<MakePartial<T, "message" | "path"> & {
    /** The input data */
    readonly input: unknown;
    /** The schema or check that originated this issue. */
    readonly inst?: $ZodType | $ZodCheck;
    /** If `true`, Zod will continue executing checks/refinements after this issue. */
    readonly continue?: boolean | undefined;
} & Record<string, unknown>> : never;
type $ZodRawIssue<T extends $ZodIssueBase = $ZodIssue> = $ZodInternalIssue<T>;
interface $ZodErrorMap<T extends $ZodIssueBase = $ZodIssue> {
    (issue: $ZodRawIssue<T>): {
        message: string;
    } | string | undefined | null;
}
interface $ZodError<T = unknown> extends Error {
    type: T;
    issues: $ZodIssue[];
    _zod: {
        output: T;
        def: $ZodIssue[];
    };
    stack?: string;
    name: string;
}
declare const $ZodError: $constructor<$ZodError>;
type $ZodFlattenedError<T, U = string> = _FlattenedError<T, U>;
type _FlattenedError<T, U = string> = {
    formErrors: U[];
    fieldErrors: {
        [P in keyof T]?: U[];
    };
};
type _ZodFormattedError<T, U = string> = T extends [any, ...any[]] ? {
    [K in keyof T]?: $ZodFormattedError<T[K], U>;
} : T extends any[] ? {
    [k: number]: $ZodFormattedError<T[number], U>;
} : T extends object ? Flatten<{
    [K in keyof T]?: $ZodFormattedError<T[K], U>;
}> : any;
type $ZodFormattedError<T, U = string> = {
    _errors: U[];
} & Flatten<_ZodFormattedError<T, U>>;

type ZodTrait = {
    _zod: {
        def: any;
        [k: string]: any;
    };
};
interface $constructor<T extends ZodTrait, D = T["_zod"]["def"]> {
    new (def: D): T;
    init(inst: T, def: D): asserts inst is T;
}
declare function $constructor<T extends ZodTrait, D = T["_zod"]["def"]>(name: string, initializer: (inst: T, def: D) => void, params?: {
    Parent?: typeof Class;
}): $constructor<T, D>;
declare const $brand: unique symbol;
type $brand<T extends string | number | symbol = string | number | symbol> = {
    [$brand]: {
        [k in T]: true;
    };
};
type $ZodBranded<T extends SomeType, Brand extends string | number | symbol, Dir extends "in" | "out" | "inout" = "out"> = T & (Dir extends "inout" ? {
    _zod: {
        input: input<T> & $brand<Brand>;
        output: output<T> & $brand<Brand>;
    };
} : Dir extends "in" ? {
    _zod: {
        input: input<T> & $brand<Brand>;
    };
} : {
    _zod: {
        output: output<T> & $brand<Brand>;
    };
});
type input<T> = T extends {
    _zod: {
        input: any;
    };
} ? T["_zod"]["input"] : unknown;
type output<T> = T extends {
    _zod: {
        output: any;
    };
} ? T["_zod"]["output"] : unknown;

type Params<T extends $ZodType | $ZodCheck, IssueTypes extends $ZodIssueBase, OmitKeys extends keyof T["_zod"]["def"] = never> = Flatten<Partial<EmptyToNever<Omit<T["_zod"]["def"], OmitKeys> & ([IssueTypes] extends [never] ? {} : {
    error?: string | $ZodErrorMap<IssueTypes> | undefined;
    /** @deprecated This parameter is deprecated. Use `error` instead. */
    message?: string | undefined;
})>>>;
type TypeParams<T extends $ZodType = $ZodType & {
    _isst: never;
}, AlsoOmit extends Exclude<keyof T["_zod"]["def"], "type" | "checks" | "error"> = never> = Params<T, NonNullable<T["_zod"]["isst"]>, "type" | "checks" | "error" | AlsoOmit>;
type CheckParams<T extends $ZodCheck = $ZodCheck, // & { _issc: never },
AlsoOmit extends Exclude<keyof T["_zod"]["def"], "check" | "error"> = never> = Params<T, NonNullable<T["_zod"]["issc"]>, "check" | "error" | AlsoOmit>;
type CheckTypeParams<T extends $ZodType & $ZodCheck = $ZodType & $ZodCheck, AlsoOmit extends Exclude<keyof T["_zod"]["def"], "type" | "checks" | "error" | "check"> = never> = Params<T, NonNullable<T["_zod"]["isst"] | T["_zod"]["issc"]>, "type" | "checks" | "error" | "check" | AlsoOmit>;
type $ZodCheckMaxLengthParams = CheckParams<$ZodCheckMaxLength, "maximum" | "when">;
type $ZodCheckMinLengthParams = CheckParams<$ZodCheckMinLength, "minimum" | "when">;
type $ZodCheckLengthEqualsParams = CheckParams<$ZodCheckLengthEquals, "length" | "when">;
type $ZodNonOptionalParams = TypeParams<$ZodNonOptional, "innerType">;
type $ZodCustomParams = CheckTypeParams<$ZodCustom, "fn">;
type $ZodSuperRefineIssue<T extends $ZodIssueBase = $ZodIssue> = T extends any ? RawIssue<T> : never;
type RawIssue<T extends $ZodIssueBase> = T extends any ? Flatten<MakePartial<T, "message" | "path"> & {
    /** The schema or check that originated this issue. */
    readonly inst?: $ZodType | $ZodCheck;
    /** If `true`, Zod will execute subsequent checks/refinements instead of immediately aborting */
    readonly continue?: boolean | undefined;
} & Record<string, unknown>> : never;
interface $RefinementCtx<T = unknown> extends ParsePayload<T> {
    addIssue(arg: string | $ZodSuperRefineIssue): void;
}
interface $ZodSuperRefineParams {
    /** If provided, the refinement runs only when this returns `true`. By default, it is skipped if prior parsing produced aborting issues. */
    when?: ((payload: ParsePayload) => boolean) | undefined;
}

/** An Error-like class used to store Zod validation issues.  */
interface ZodError<T = unknown> extends $ZodError<T> {
    /** @deprecated Use the `z.treeifyError(err)` function instead. */
    format(): $ZodFormattedError<T>;
    format<U>(mapper: (issue: $ZodIssue) => U): $ZodFormattedError<T, U>;
    /** @deprecated Use the `z.treeifyError(err)` function instead. */
    flatten(): $ZodFlattenedError<T>;
    flatten<U>(mapper: (issue: $ZodIssue) => U): $ZodFlattenedError<T, U>;
    /** @deprecated Push directly to `.issues` instead. */
    addIssue(issue: $ZodIssue): void;
    /** @deprecated Push directly to `.issues` instead. */
    addIssues(issues: $ZodIssue[]): void;
    /** @deprecated Check `err.issues.length === 0` instead. */
    isEmpty: boolean;
}
declare const ZodError: $constructor<ZodError>;

type ZodSafeParseResult<T> = ZodSafeParseSuccess<T> | ZodSafeParseError<T>;
type ZodSafeParseSuccess<T> = {
    success: true;
    data: T;
    error?: never;
};
type ZodSafeParseError<T> = {
    success: false;
    data?: never;
    error: ZodError<T>;
};

type ZodStandardSchemaWithJSON<T> = StandardSchemaWithJSONProps<input<T>, output<T>>;
interface _ZodType<out Internals extends $ZodTypeInternals = $ZodTypeInternals> extends ZodType<any, any, Internals> {
}
interface ZodType<out Output = unknown, out Input = unknown, out Internals extends $ZodTypeInternals<Output, Input> = $ZodTypeInternals<Output, Input>> extends $ZodType<Output, Input, Internals> {
    def: Internals["def"];
    type: Internals["def"]["type"];
    /** @deprecated Use `.def` instead. */
    _def: Internals["def"];
    /** @deprecated Use `z.output<typeof schema>` instead. */
    _output: Internals["output"];
    /** @deprecated Use `z.input<typeof schema>` instead. */
    _input: Internals["input"];
    "~standard": ZodStandardSchemaWithJSON<this>;
    /** Converts this schema to a JSON Schema representation. */
    toJSONSchema(params?: ToJSONSchemaParams): ZodStandardJSONSchemaPayload<this>;
    check(...checks: (CheckFn<output<this>> | $ZodCheck<output<this>>)[]): this;
    with(...checks: (CheckFn<output<this>> | $ZodCheck<output<this>>)[]): this;
    clone(def?: Internals["def"], params?: {
        parent: boolean;
    }): this;
    register<R extends $ZodRegistry>(registry: R, ...meta: this extends R["_schema"] ? undefined extends R["_meta"] ? [$replace<R["_meta"], this>?] : [$replace<R["_meta"], this>] : ["Incompatible schema"]): this;
    brand<T extends PropertyKey = PropertyKey, Dir extends "in" | "out" | "inout" = "out">(value?: T): PropertyKey extends T ? this : $ZodBranded<this, T, Dir>;
    parse(data: unknown, params?: ParseContext<$ZodIssue>): output<this>;
    safeParse(data: unknown, params?: ParseContext<$ZodIssue>): ZodSafeParseResult<output<this>>;
    parseAsync(data: unknown, params?: ParseContext<$ZodIssue>): Promise<output<this>>;
    safeParseAsync(data: unknown, params?: ParseContext<$ZodIssue>): Promise<ZodSafeParseResult<output<this>>>;
    spa: (data: unknown, params?: ParseContext<$ZodIssue>) => Promise<ZodSafeParseResult<output<this>>>;
    encode(data: output<this>, params?: ParseContext<$ZodIssue>): input<this>;
    decode(data: input<this>, params?: ParseContext<$ZodIssue>): output<this>;
    encodeAsync(data: output<this>, params?: ParseContext<$ZodIssue>): Promise<input<this>>;
    decodeAsync(data: input<this>, params?: ParseContext<$ZodIssue>): Promise<output<this>>;
    safeEncode(data: output<this>, params?: ParseContext<$ZodIssue>): ZodSafeParseResult<input<this>>;
    safeDecode(data: input<this>, params?: ParseContext<$ZodIssue>): ZodSafeParseResult<output<this>>;
    safeEncodeAsync(data: output<this>, params?: ParseContext<$ZodIssue>): Promise<ZodSafeParseResult<input<this>>>;
    safeDecodeAsync(data: input<this>, params?: ParseContext<$ZodIssue>): Promise<ZodSafeParseResult<output<this>>>;
    refine<Ch extends (arg: output<this>) => unknown | Promise<unknown>>(check: Ch, params?: string | $ZodCustomParams): Ch extends (arg: any) => arg is infer R ? this & ZodType<R, input<this>> : this;
    superRefine(refinement: (arg: output<this>, ctx: $RefinementCtx<output<this>>) => void | Promise<void>, params?: $ZodSuperRefineParams): this;
    overwrite(fn: (x: output<this>) => output<this>): this;
    optional(): ZodOptional<this>;
    exactOptional(): ZodExactOptional<this>;
    nonoptional(params?: string | $ZodNonOptionalParams): ZodNonOptional<this>;
    nullable(): ZodNullable<this>;
    nullish(): ZodOptional<ZodNullable<this>>;
    default(def: NoUndefined<output<this>>): ZodDefault<this>;
    default(def: () => NoUndefined<output<this>>): ZodDefault<this>;
    prefault(def: () => input<this>): ZodPrefault<this>;
    prefault(def: input<this>): ZodPrefault<this>;
    array(): ZodArray<this>;
    or<T extends SomeType>(option: T): ZodUnion<[this, T]>;
    and<T extends SomeType>(incoming: T): ZodIntersection<this, T>;
    transform<NewOut>(transform: (arg: output<this>, ctx: $RefinementCtx<output<this>>) => NewOut | Promise<NewOut>): ZodPipe<this, ZodTransform<Awaited<NewOut>, output<this>>>;
    catch(def: output<this>): ZodCatch<this>;
    catch(def: (ctx: $ZodCatchCtx) => output<this>): ZodCatch<this>;
    pipe<T extends $ZodType<any, output<this>>>(target: T | $ZodType<any, output<this>>): ZodPipe<this, T>;
    readonly(): ZodReadonly<this>;
    /** Returns a new instance that has been registered in `z.globalRegistry` with the specified description */
    describe(description: string): this;
    description?: string;
    /** Returns the metadata associated with this instance in `z.globalRegistry` */
    meta(): $replace<GlobalMeta, this> | undefined;
    /** Returns a new instance that has been registered in `z.globalRegistry` with the specified metadata */
    meta(data: $replace<GlobalMeta, this>): this;
    /** @deprecated Try safe-parsing `undefined` (this is what `isOptional` does internally):
     *
     * ```ts
     * const schema = z.string().optional();
     * const isOptional = schema.safeParse(undefined).success; // true
     * ```
     */
    isOptional(): boolean;
    /**
     * @deprecated Try safe-parsing `null` (this is what `isNullable` does internally):
     *
     * ```ts
     * const schema = z.string().nullable();
     * const isNullable = schema.safeParse(null).success; // true
     * ```
     */
    isNullable(): boolean;
    apply<T>(fn: (schema: this) => T): T;
}
declare const ZodType: $constructor<ZodType>;
interface ZodArray<T extends SomeType = $ZodType> extends _ZodType<$ZodArrayInternals<T>>, $ZodArray<T> {
    element: T;
    min(minLength: number, params?: string | $ZodCheckMinLengthParams): this;
    nonempty(params?: string | $ZodCheckMinLengthParams): this;
    max(maxLength: number, params?: string | $ZodCheckMaxLengthParams): this;
    length(len: number, params?: string | $ZodCheckLengthEqualsParams): this;
    unwrap(): T;
    "~standard": ZodStandardSchemaWithJSON<this>;
}
declare const ZodArray: $constructor<ZodArray>;
interface ZodUnion<T extends readonly SomeType[] = readonly $ZodType[]> extends _ZodType<$ZodUnionInternals<T>>, $ZodUnion<T> {
    "~standard": ZodStandardSchemaWithJSON<this>;
    options: T;
}
declare const ZodUnion: $constructor<ZodUnion>;
interface ZodIntersection<A extends SomeType = $ZodType, B extends SomeType = $ZodType> extends _ZodType<$ZodIntersectionInternals<A, B>>, $ZodIntersection<A, B> {
    "~standard": ZodStandardSchemaWithJSON<this>;
}
declare const ZodIntersection: $constructor<ZodIntersection>;
interface ZodTransform<O = unknown, I = unknown> extends _ZodType<$ZodTransformInternals<O, I>>, $ZodTransform<O, I> {
    "~standard": ZodStandardSchemaWithJSON<this>;
}
declare const ZodTransform: $constructor<ZodTransform>;
interface ZodOptional<T extends SomeType = $ZodType> extends _ZodType<$ZodOptionalInternals<T>>, $ZodOptional<T> {
    "~standard": ZodStandardSchemaWithJSON<this>;
    unwrap(): T;
}
declare const ZodOptional: $constructor<ZodOptional>;
interface ZodExactOptional<T extends SomeType = $ZodType> extends _ZodType<$ZodExactOptionalInternals<T>>, $ZodExactOptional<T> {
    "~standard": ZodStandardSchemaWithJSON<this>;
    unwrap(): T;
}
declare const ZodExactOptional: $constructor<ZodExactOptional>;
interface ZodNullable<T extends SomeType = $ZodType> extends _ZodType<$ZodNullableInternals<T>>, $ZodNullable<T> {
    "~standard": ZodStandardSchemaWithJSON<this>;
    unwrap(): T;
}
declare const ZodNullable: $constructor<ZodNullable>;
interface ZodDefault<T extends SomeType = $ZodType> extends _ZodType<$ZodDefaultInternals<T>>, $ZodDefault<T> {
    "~standard": ZodStandardSchemaWithJSON<this>;
    unwrap(): T;
    /** @deprecated Use `.unwrap()` instead. */
    removeDefault(): T;
}
declare const ZodDefault: $constructor<ZodDefault>;
interface ZodPrefault<T extends SomeType = $ZodType> extends _ZodType<$ZodPrefaultInternals<T>>, $ZodPrefault<T> {
    "~standard": ZodStandardSchemaWithJSON<this>;
    unwrap(): T;
}
declare const ZodPrefault: $constructor<ZodPrefault>;
interface ZodNonOptional<T extends SomeType = $ZodType> extends _ZodType<$ZodNonOptionalInternals<T>>, $ZodNonOptional<T> {
    "~standard": ZodStandardSchemaWithJSON<this>;
    unwrap(): T;
}
declare const ZodNonOptional: $constructor<ZodNonOptional>;
interface ZodCatch<T extends SomeType = $ZodType> extends _ZodType<$ZodCatchInternals<T>>, $ZodCatch<T> {
    "~standard": ZodStandardSchemaWithJSON<this>;
    unwrap(): T;
    /** @deprecated Use `.unwrap()` instead. */
    removeCatch(): T;
}
declare const ZodCatch: $constructor<ZodCatch>;
interface ZodPipe<A extends SomeType = $ZodType, B extends SomeType = $ZodType> extends _ZodType<$ZodPipeInternals<A, B>>, $ZodPipe<A, B> {
    "~standard": ZodStandardSchemaWithJSON<this>;
    in: A;
    out: B;
}
declare const ZodPipe: $constructor<ZodPipe>;
interface ZodReadonly<T extends SomeType = $ZodType> extends _ZodType<$ZodReadonlyInternals<T>>, $ZodReadonly<T> {
    "~standard": ZodStandardSchemaWithJSON<this>;
    unwrap(): T;
}
declare const ZodReadonly: $constructor<ZodReadonly>;

/**
 * Internal tools for PageAgent.
 * @note Adapted from browser-use
 */

/**
 * Per-invocation context passed to every tool execution.
 * Tools MUST honor `signal` to support cooperative cancellation.
 */
interface ToolContext {
    signal: AbortSignal;
}
/**
 * Internal tool definition that has access to PageAgent `this` context
 */
interface PageAgentTool<TParams = any> {
    description: string;
    inputSchema: ZodType<TParams>;
    execute: (this: PageAgentCore, args: TParams, ctx: ToolContext) => Promise<string>;
}
declare function tool<TParams>(options: PageAgentTool<TParams>): PageAgentTool<TParams>;
/**
 * Internal tools for PageAgent.
 * Note: Using any to allow different parameter types for each tool
 */
declare const tools: Map<string, PageAgentTool<any>>;

/**
 * Core types for LLM integration
 */

/**
 * LLM configuration
 */
interface LLMConfig {
    baseURL: string;
    model: string;
    apiKey?: string;
    temperature?: number;
    maxRetries?: number;
    /**
     * Transform the final request body before sending it to the provider.
     * Use this to implement provider-specific request tweaks such as caching hints or custom flags.
     *
     * Return a new object, or mutate the input object and return undefined.
     */
    transformRequestBody?: (requestBody: Record<string, unknown>) => Record<string, unknown> | undefined;
    /**
     * remove the tool_choice field from the request.
     * @note fix "Invalid tool_choice type: 'object'" for some LLMs.
     */
    disableNamedToolChoice?: boolean;
    /**
     * Custom fetch function for LLM API requests.
     * Use this to customize headers, credentials, proxy, etc.
     * The response should follow OpenAI API format.
     */
    customFetch?: typeof globalThis.fetch;
}

/** Supported UI languages */
type SupportedLanguage$1 = 'en-US' | 'zh-CN' | 'fr-FR' | 'es-ES' | 'de-DE' | 'it-IT' | 'pt-BR';
interface AgentConfig extends LLMConfig {
    language?: SupportedLanguage$1;
    /**
     * Maximum number of steps the agent can take per task.
     * @default 40
     */
    maxSteps?: number;
    /**
     * Custom tools to extend PageAgent capabilities
     * @experimental
     * @note You can also override or remove internal tools by using the same name.
     * @see PageAgentTool
     *
     * @example
     * // override internal tool
     * import { z } from 'zod/v4'
     * import { tool } from 'page-agent'
     * const customTools = {
     * ask_user: tool({
     * 	description:
     * 		'Ask the user or parent model a question and wait for their answer. Use this if you need more information or clarification.',
     * 	inputSchema: z.object({
     * 		question: z.string(),
     * 	}),
     * 	execute: async function (this: PageAgent, input) {
     * 		const answer = await do_some_thing(input.question)
     * 		return "✅ Received user answer: " + answer
     * 	},
     * })
     * }
     *
     * @example
     * // remove internal tool
     * const customTools = {
     * 	ask_user: null // never ask user questions
     * }
     */
    customTools?: Record<string, PageAgentTool | null>;
    /**
     * Instructions to guide the agent's behavior
     */
    instructions?: {
        /**
         * Global system-level instructions, applied to all tasks
         */
        system?: string;
        /**
         * Dynamic page-level instructions callback
         * Called before each step to get instructions for the current page
         * @param url - Current page URL (window.location.href)
         * @returns Instructions string, or undefined/null to skip
         */
        getPageInstructions?: (url: string) => string | undefined | null;
    };
    /**
     * Lifecycle hooks for task execution.
     * @experimental API may change in future versions.
     *
     * All hooks receive the agent instance as first parameter.
     */
    /**
     * Called before each step execution.
     * @experimental
     * @param agent - The PageAgentCore instance
     * @param stepCount - Current step number (0-indexed)
     */
    onBeforeStep?: (agent: PageAgentCore, stepCount: number) => Promise<void> | void;
    /**
     * Called after each step execution.
     * @experimental
     * @param agent - The PageAgentCore instance
     * @param history - Current history of events
     */
    onAfterStep?: (agent: PageAgentCore, history: HistoricalEvent[]) => Promise<void> | void;
    /**
     * Called before task execution starts.
     * @experimental
     * @param agent - The PageAgentCore instance
     */
    onBeforeTask?: (agent: PageAgentCore) => Promise<void> | void;
    /**
     * Called after task execution completes (success or failure).
     * @experimental
     * @param agent - The PageAgentCore instance
     * @param result - The execution result
     */
    onAfterTask?: (agent: PageAgentCore, result: ExecutionResult) => Promise<void> | void;
    /**
     * Called when the agent is disposed.
     * @experimental
     * @note This hook can block the disposal process if it's async.
     * @param agent - The PageAgentCore instance
     * @param reason - Optional reason for disposal
     */
    onDispose?: (agent: PageAgentCore, reason?: string) => void;
    /**
     * @experimental
     * Enable the experimental script execution tool that allows executing generated JavaScript code on the page.
     * @note Can cause unpredictable side effects.
     * @note May bypass some safe guards and data-masking mechanisms.
     */
    experimentalScriptExecutionTool?: boolean;
    /**
     * @experimental
     * Fetch /llms.txt from current site origin and include as context.
     * Only fetched once per origin per task.
     * @default false
     */
    experimentalLlmsTxt?: boolean;
    /**
     * Transform page content before sending to LLM.
     * Called after DOM extraction and simplification, before LLM invocation.
     * Use cases: inspect extraction results, modify page info, mask sensitive data.
     *
     * @param content - Simplified page content that will be sent to LLM
     * @returns Transformed content
     *
     * @example
     * // Mask phone numbers
     * transformPageContent: async (content) => {
     *   return content.replace(/1[3-9]\d{9}/g, '***********')
     * }
     */
    transformPageContent?: (content: string) => Promise<string> | string;
    /**
     * Completely override the default system prompt.
     * @experimental Use with caution - incorrect prompts may break agent behavior.
     */
    customSystemPrompt?: string;
    /**
     * Delay between steps in seconds.
     * @default 0.4
     */
    stepDelay?: number;
}
/**
 * Agent reflection state - the reflection-before-action model
 *
 * Every tool call must first reflect on:
 * - evaluation_previous_goal: How well did the previous action achieve its goal?
 * - memory: Key information to remember for future steps
 * - next_goal: What should be accomplished in the next action?
 */
interface AgentReflection {
    evaluation_previous_goal: string;
    memory: string;
    next_goal: string;
}
/**
 * MacroTool input structure
 *
 * This is the core abstraction that enforces the "reflection-before-action" mental model.
 * Before executing any action, the LLM must output its reasoning state.
 */
interface MacroToolInput extends Partial<AgentReflection> {
    action: Record<string, any>;
}
/**
 * MacroTool output structure
 */
interface MacroToolResult {
    input: MacroToolInput;
    output: string;
}
/**
 * A single agent step with reflection and action
 */
interface AgentStepEvent {
    type: 'step';
    stepIndex: number;
    reflection: Partial<AgentReflection>;
    action: {
        name: string;
        input: any;
        output: string;
    };
    usage: {
        promptTokens: number;
        completionTokens: number;
        totalTokens: number;
        cachedTokens?: number;
        reasoningTokens?: number;
    };
    /** Raw LLM response for debugging */
    rawResponse?: unknown;
    /** Raw LLM request for debugging */
    rawRequest?: unknown;
}
/**
 * Persistent observation event (stays in memory)
 */
interface ObservationEvent {
    type: 'observation';
    content: string;
}
/**
 * User takeover event
 */
interface UserTakeoverEvent {
    type: 'user_takeover';
}
/**
 * Retry event - LLM call is being retried
 */
interface RetryEvent {
    type: 'retry';
    message: string;
    attempt: number;
    maxAttempts: number;
}
/**
 * Error event - fatal error from LLM or execution
 */
interface AgentErrorEvent {
    type: 'error';
    message: string;
    rawResponse?: unknown;
}
/**
 * Union type for all history events
 */
type HistoricalEvent = AgentStepEvent | ObservationEvent | UserTakeoverEvent | RetryEvent | AgentErrorEvent;
/**
 * Agent lifecycle status.
 */
type AgentStatus = 'idle' | 'running' | 'completed' | 'error' | 'stopped';
/**
 * Agent activity - transient state for immediate UI feedback.
 *
 * Unlike historical events (which are persisted), activities are ephemeral
 * and represent "what the agent is doing right now". UI components should
 * listen to 'activity' events to show real-time feedback.
 *
 * Note: There is no 'idle' activity - absence of activity events means idle.
 */
type AgentActivity = {
    type: 'thinking';
} | {
    type: 'executing';
    tool: string;
    input: unknown;
} | {
    type: 'executed';
    tool: string;
    input: unknown;
    output: string;
    duration: number;
} | {
    type: 'retrying';
    attempt: number;
    maxAttempts: number;
} | {
    type: 'error';
    message: string;
};
interface ExecutionResult {
    success: boolean;
    data: string;
    history: HistoricalEvent[];
}

type PageAgentCoreConfig = AgentConfig & {
    pageController: PageController;
};
/**
 * AI agent for browser automation.
 *
 * @remarks
 * ## Re-act Agent Loop
 * - step
 *    - observe (gather information about current environment and context)
 *    - think (LLM calling)
 *      - reflection (evaluate history, generate memory, short-term planning)
 *      - action (give the action to approach the next goal)
 *    - act (execute the action)
 * - loop
 *
 * ## Event System
 * - `statuschange` - Agent status transitions (idle → running → completed/error/stopped)
 * - `historychange` - History events updated (persistent, part of agent memory)
 * - `activity` - Real-time activity feedback (transient, for UI only)
 * - `dispose` - Agent cleanup triggered
 *
 * ## Information Streams
 * 1. **History Events** (`history` array)
 *    - Persistent event stream that forms agent's memory
 *    - Included in LLM context across steps
 *    - Types: steps, observations, user takeovers, llm errors
 *
 * 2. **Activity Events** (via `activity` event)
 *    - Transient UI feedback during task execution
 *    - NOT included in LLM context
 *    - Types: thinking, executing, executed, retrying, error
 */
declare class PageAgentCore extends EventTarget {
    #private;
    readonly id: string;
    readonly config: PageAgentCoreConfig & {
        maxSteps: number;
    };
    readonly tools: typeof tools;
    /** PageController for DOM operations */
    readonly pageController: PageController;
    task: string;
    taskId: string;
    /** History events */
    history: HistoricalEvent[];
    /** Whether this agent has been disposed */
    disposed: boolean;
    /**
     * Called when the agent needs to ask the user questions.
     * If unset, the `ask_user` tool will be disabled.
     * Implementations should reject the promise when `signal` aborts.
     * @example onAskUser: (q) => window.prompt(q) || ''
     */
    onAskUser?: (question: string, options?: {
        signal: AbortSignal;
    }) => Promise<string>;
    constructor(config: PageAgentCoreConfig);
    /** Get current agent status */
    get status(): AgentStatus;
    /** Result of the most recent run, or `null` before the first run completes. */
    get lastResult(): ExecutionResult | null;
    /**
     * Push an observation message to the history event stream.
     * This will be visible in <agent_history> and remain persistent in memory across steps.
     * @experimental @internal
     * @note history change will be emitted before next step starts
     */
    pushObservation(content: string): void;
    /**
     * Stop the current task and wait until the run has fully settled (including lifecycle hooks).
     * @note never await .stop() in a lifecycle hook.
     */
    stop(): Promise<void>;
    /**
     * external errors (pre-checks/config/hooks) will threw;
     * agent errors will be caught and added to history, and return a failed result
     */
    execute(task: string): Promise<ExecutionResult>;
    dispose(): void;
}

declare const locales: {
    readonly 'en-US': {
        readonly ui: {
            readonly panel: {
                readonly ready: "Ready";
                readonly thinking: "Thinking...";
                readonly taskInput: "Enter new task, describe steps in detail, press Enter to submit";
                readonly userAnswerPrompt: "Please answer the question above, press Enter to submit";
                readonly taskTerminated: "Task terminated";
                readonly taskCompleted: "Task completed";
                readonly userAnswer: "User answer: {{input}}";
                readonly question: "Question: {{question}}";
                readonly waitingPlaceholder: "Waiting for task to start...";
                readonly stop: "Stop";
                readonly close: "Close";
                readonly expand: "Expand history";
                readonly collapse: "Collapse history";
                readonly step: "Step {{number}}";
            };
            readonly tools: {
                readonly clicking: "Clicking element [{{index}}]...";
                readonly inputting: "Inputting text to element [{{index}}]...";
                readonly selecting: "Selecting option \"{{text}}\"...";
                readonly scrolling: "Scrolling page...";
                readonly waiting: "Waiting {{seconds}} seconds...";
                readonly askingUser: "Asking user...";
                readonly done: "Task done";
                readonly clicked: "🖱️ Clicked element [{{index}}]";
                readonly inputted: "⌨️ Inputted text \"{{text}}\"";
                readonly selected: "☑️ Selected option \"{{text}}\"";
                readonly scrolled: "🛞 Page scrolled";
                readonly waited: "⌛️ Wait completed";
                readonly executing: "Executing {{toolName}}...";
                readonly resultSuccess: "success";
                readonly resultFailure: "failed";
                readonly resultError: "error";
            };
            readonly errors: {
                readonly elementNotFound: "No interactive element found at index {{index}}";
                readonly taskRequired: "Task description is required";
                readonly executionFailed: "Task execution failed";
                readonly notInputElement: "Element is not an input or textarea";
                readonly notSelectElement: "Element is not a select element";
                readonly optionNotFound: "Option \"{{text}}\" not found";
            };
        };
    };
    readonly 'zh-CN': {
        readonly ui: {
            readonly panel: {
                readonly ready: "准备就绪";
                readonly thinking: "正在思考...";
                readonly taskInput: "输入新任务，详细描述步骤，回车提交";
                readonly userAnswerPrompt: "请回答上面问题，回车提交";
                readonly taskTerminated: "任务已终止";
                readonly taskCompleted: "任务结束";
                readonly userAnswer: "用户回答: {{input}}";
                readonly question: "询问: {{question}}";
                readonly waitingPlaceholder: "等待任务开始...";
                readonly stop: "终止";
                readonly close: "关闭";
                readonly expand: "展开历史";
                readonly collapse: "收起历史";
                readonly step: "步骤 {{number}}";
            };
            readonly tools: {
                readonly clicking: "正在点击元素 [{{index}}]...";
                readonly inputting: "正在输入文本到元素 [{{index}}]...";
                readonly selecting: "正在选择选项 \"{{text}}\"...";
                readonly scrolling: "正在滚动页面...";
                readonly waiting: "等待 {{seconds}} 秒...";
                readonly askingUser: "正在询问用户...";
                readonly done: "结束任务";
                readonly clicked: "🖱️ 已点击元素 [{{index}}]";
                readonly inputted: "⌨️ 已输入文本 \"{{text}}\"";
                readonly selected: "☑️ 已选择选项 \"{{text}}\"";
                readonly scrolled: "🛞 页面滚动完成";
                readonly waited: "⌛️ 等待完成";
                readonly executing: "正在执行 {{toolName}}...";
                readonly resultSuccess: "成功";
                readonly resultFailure: "失败";
                readonly resultError: "错误";
            };
            readonly errors: {
                readonly elementNotFound: "未找到索引为 {{index}} 的交互元素";
                readonly taskRequired: "任务描述不能为空";
                readonly executionFailed: "任务执行失败";
                readonly notInputElement: "元素不是输入框或文本域";
                readonly notSelectElement: "元素不是选择框";
                readonly optionNotFound: "未找到选项 \"{{text}}\"";
            };
        };
    };
    readonly 'fr-FR': {
        readonly ui: {
            readonly panel: {
                readonly ready: "Prêt";
                readonly thinking: "Réflexion...";
                readonly taskInput: "Saisissez une nouvelle tâche, décrivez les étapes en détail, appuyez sur Entrée pour valider";
                readonly userAnswerPrompt: "Veuillez répondre à la question ci-dessus, appuyez sur Entrée pour valider";
                readonly taskTerminated: "Tâche interrompue";
                readonly taskCompleted: "Tâche terminée";
                readonly userAnswer: "Réponse de l’utilisateur : {{input}}";
                readonly question: "Question : {{question}}";
                readonly waitingPlaceholder: "En attente du démarrage de la tâche...";
                readonly stop: "Arrêter";
                readonly close: "Fermer";
                readonly expand: "Afficher l’historique";
                readonly collapse: "Masquer l’historique";
                readonly step: "Étape {{number}}";
            };
            readonly tools: {
                readonly clicking: "Clic sur l’élément [{{index}}]...";
                readonly inputting: "Saisie de texte dans l’élément [{{index}}]...";
                readonly selecting: "Sélection de l’option « {{text}} »...";
                readonly scrolling: "Défilement de la page...";
                readonly waiting: "Attente de {{seconds}} secondes...";
                readonly askingUser: "Question à l’utilisateur...";
                readonly done: "Tâche terminée";
                readonly clicked: "🖱️ Élément cliqué [{{index}}]";
                readonly inputted: "⌨️ Texte saisi « {{text}} »";
                readonly selected: "☑️ Option sélectionnée « {{text}} »";
                readonly scrolled: "🛞 Page défilée";
                readonly waited: "⌛️ Attente terminée";
                readonly executing: "Exécution de {{toolName}}...";
                readonly resultSuccess: "réussi";
                readonly resultFailure: "échoué";
                readonly resultError: "erreur";
            };
            readonly errors: {
                readonly elementNotFound: "Aucun élément interactif trouvé à l’index {{index}}";
                readonly taskRequired: "La description de la tâche est requise";
                readonly executionFailed: "Échec de l’exécution de la tâche";
                readonly notInputElement: "L’élément n’est pas un champ de saisie ou une zone de texte";
                readonly notSelectElement: "L’élément n’est pas une liste déroulante";
                readonly optionNotFound: "Option « {{text}} » introuvable";
            };
        };
    };
    readonly 'es-ES': {
        readonly ui: {
            readonly panel: {
                readonly ready: "Listo";
                readonly thinking: "Pensando...";
                readonly taskInput: "Introduce una nueva tarea, describe los pasos en detalle y pulsa Intro para enviar";
                readonly userAnswerPrompt: "Responde a la pregunta anterior y pulsa Intro para enviar";
                readonly taskTerminated: "Tarea interrumpida";
                readonly taskCompleted: "Tarea completada";
                readonly userAnswer: "Respuesta del usuario: {{input}}";
                readonly question: "Pregunta: {{question}}";
                readonly waitingPlaceholder: "Esperando a que empiece la tarea...";
                readonly stop: "Detener";
                readonly close: "Cerrar";
                readonly expand: "Mostrar historial";
                readonly collapse: "Ocultar historial";
                readonly step: "Paso {{number}}";
            };
            readonly tools: {
                readonly clicking: "Haciendo clic en el elemento [{{index}}]...";
                readonly inputting: "Escribiendo texto en el elemento [{{index}}]...";
                readonly selecting: "Seleccionando la opción «{{text}}»...";
                readonly scrolling: "Desplazando la página...";
                readonly waiting: "Esperando {{seconds}} segundos...";
                readonly askingUser: "Preguntando al usuario...";
                readonly done: "Tarea finalizada";
                readonly clicked: "🖱️ Elemento clicado [{{index}}]";
                readonly inputted: "⌨️ Texto introducido «{{text}}»";
                readonly selected: "☑️ Opción seleccionada «{{text}}»";
                readonly scrolled: "🛞 Página desplazada";
                readonly waited: "⌛️ Espera completada";
                readonly executing: "Ejecutando {{toolName}}...";
                readonly resultSuccess: "correcto";
                readonly resultFailure: "fallido";
                readonly resultError: "error";
            };
            readonly errors: {
                readonly elementNotFound: "No se encontró ningún elemento interactivo en el índice {{index}}";
                readonly taskRequired: "La descripción de la tarea es obligatoria";
                readonly executionFailed: "Error al ejecutar la tarea";
                readonly notInputElement: "El elemento no es un campo de entrada ni un área de texto";
                readonly notSelectElement: "El elemento no es una lista desplegable";
                readonly optionNotFound: "Opción «{{text}}» no encontrada";
            };
        };
    };
    readonly 'pt-BR': {
        readonly ui: {
            readonly panel: {
                readonly ready: "Pronto";
                readonly thinking: "Pensando...";
                readonly taskInput: "Digite uma nova tarefa, descreva as etapas em detalhes e pressione Enter para enviar";
                readonly userAnswerPrompt: "Responda à pergunta acima e pressione Enter para enviar";
                readonly taskTerminated: "Tarefa interrompida";
                readonly taskCompleted: "Tarefa concluída";
                readonly userAnswer: "Resposta do usuário: {{input}}";
                readonly question: "Pergunta: {{question}}";
                readonly waitingPlaceholder: "Aguardando o início da tarefa...";
                readonly stop: "Parar";
                readonly close: "Fechar";
                readonly expand: "Mostrar histórico";
                readonly collapse: "Ocultar histórico";
                readonly step: "Etapa {{number}}";
            };
            readonly tools: {
                readonly clicking: "Clicando no elemento [{{index}}]...";
                readonly inputting: "Inserindo texto no elemento [{{index}}]...";
                readonly selecting: "Selecionando a opção \"{{text}}\"...";
                readonly scrolling: "Rolando a página...";
                readonly waiting: "Aguardando {{seconds}} segundos...";
                readonly askingUser: "Perguntando ao usuário...";
                readonly done: "Tarefa concluída";
                readonly clicked: "🖱️ Elemento clicado [{{index}}]";
                readonly inputted: "⌨️ Texto inserido \"{{text}}\"";
                readonly selected: "☑️ Opção selecionada \"{{text}}\"";
                readonly scrolled: "🛞 Página rolada";
                readonly waited: "⌛️ Espera concluída";
                readonly executing: "Executando {{toolName}}...";
                readonly resultSuccess: "sucesso";
                readonly resultFailure: "falhou";
                readonly resultError: "erro";
            };
            readonly errors: {
                readonly elementNotFound: "Nenhum elemento interativo encontrado no índice {{index}}";
                readonly taskRequired: "A descrição da tarefa é obrigatória";
                readonly executionFailed: "Falha na execução da tarefa";
                readonly notInputElement: "O elemento não é um campo de entrada nem uma área de texto";
                readonly notSelectElement: "O elemento não é uma lista suspensa";
                readonly optionNotFound: "Opção \"{{text}}\" não encontrada";
            };
        };
    };
    readonly 'it-IT': {
        readonly ui: {
            readonly panel: {
                readonly ready: "Pronto";
                readonly thinking: "Sto pensando...";
                readonly taskInput: "Inserisci una nuova attività, descrivi i passaggi in dettaglio e premi Invio per inviare";
                readonly userAnswerPrompt: "Rispondi alla domanda qui sopra e premi Invio per inviare";
                readonly taskTerminated: "Attività interrotta";
                readonly taskCompleted: "Attività completata";
                readonly userAnswer: "Risposta dell’utente: {{input}}";
                readonly question: "Domanda: {{question}}";
                readonly waitingPlaceholder: "In attesa dell’avvio dell’attività...";
                readonly stop: "Interrompi";
                readonly close: "Chiudi";
                readonly expand: "Mostra cronologia";
                readonly collapse: "Nascondi cronologia";
                readonly step: "Passaggio {{number}}";
            };
            readonly tools: {
                readonly clicking: "Clic sull’elemento [{{index}}]...";
                readonly inputting: "Inserimento del testo nell’elemento [{{index}}]...";
                readonly selecting: "Selezione dell’opzione «{{text}}»...";
                readonly scrolling: "Scorrimento della pagina...";
                readonly waiting: "Attesa di {{seconds}} secondi...";
                readonly askingUser: "Richiesta all’utente...";
                readonly done: "Attività completata";
                readonly clicked: "🖱️ Elemento cliccato [{{index}}]";
                readonly inputted: "⌨️ Testo inserito «{{text}}»";
                readonly selected: "☑️ Opzione selezionata «{{text}}»";
                readonly scrolled: "🛞 Pagina scorsa";
                readonly waited: "⌛️ Attesa completata";
                readonly executing: "Esecuzione di {{toolName}}...";
                readonly resultSuccess: "riuscito";
                readonly resultFailure: "non riuscito";
                readonly resultError: "errore";
            };
            readonly errors: {
                readonly elementNotFound: "Nessun elemento interattivo trovato all’indice {{index}}";
                readonly taskRequired: "La descrizione dell’attività è obbligatoria";
                readonly executionFailed: "Esecuzione dell’attività non riuscita";
                readonly notInputElement: "L’elemento non è un campo di input o un’area di testo";
                readonly notSelectElement: "L’elemento non è un elenco a discesa";
                readonly optionNotFound: "Opzione «{{text}}» non trovata";
            };
        };
    };
};
type SupportedLanguage = keyof typeof locales;

/**
 * Minimal interface that Panel expects from an agent.
 * Panel does not depend on PageAgent directly - it only requires this interface.
 * This enables decoupling and allows any agent implementation to work with Panel.
 *
 * Events:
 * - 'statuschange': Agent status changed
 * - 'historychange': Historical events updated (persisted)
 * - 'activity': Transient activity for immediate UI feedback (thinking/executing/etc)
 * - 'dispose': Agent is being disposed
 */
interface PanelAgentAdapter extends EventTarget {
    /** Current agent status */
    readonly status: 'idle' | 'running' | 'completed' | 'error' | 'stopped';
    /** Result of the most recent run, or `null` before the first run completes */
    readonly lastResult: {
        success: boolean;
    } | null;
    /** History of agent events */
    readonly history: readonly {
        type: 'step' | 'observation' | 'user_takeover' | 'retry' | 'error';
        stepIndex?: number;
        /** For 'step' type */
        reflection?: {
            evaluation_previous_goal?: string;
            memory?: string;
            next_goal?: string;
        };
        /** For 'step' type */
        action?: {
            name: string;
            input: unknown;
            output: string;
        };
        /** For 'observation' type */
        content?: string;
        /** For 'retry' type */
        attempt?: number;
        maxAttempts?: number;
        /** For 'retry' and 'error' types */
        message?: string;
    }[];
    /** Current task being executed */
    readonly task: string;
    /**
     * Called when the agent needs to ask the user questions.
     * If unset, the `ask_user` tool will be disabled.
     * Panel will set this to handle user questions via its UI.
     * The optional `signal` aborts when the task is stopped or disposed.
     */
    onAskUser?: (question: string, options?: {
        signal: AbortSignal;
    }) => Promise<string>;
    /** Execute a task */
    execute(task: string): Promise<unknown>;
    /** Stop the current task (agent remains reusable) */
    stop(): Promise<void>;
    /** Dispose the agent (terminal, cannot be reused) */
    dispose(): void;
}

/**
 * Panel configuration
 */
interface PanelConfig {
    language?: SupportedLanguage;
    /**
     * Whether to prompt for next task after task completion
     * @default true
     */
    promptForNextTask?: boolean;
}
/**
 * Agent control panel
 *
 * Architecture:
 * - History list: renders directly from agent.history (historical events)
 * - Header bar: shows activity events (transient state) and agent status
 *
 * This separation ensures data consistency - history is the single source of truth
 * for what has been done, while activity shows what is happening now.
 */
declare class Panel {
    #private;
    get wrapper(): HTMLElement;
    /**
     * Create a Panel bound to an agent
     * @param agent - Agent instance that implements PanelAgentAdapter
     * @param config - Optional panel configuration
     */
    constructor(agent: PanelAgentAdapter, config?: PanelConfig);
    show(): void;
    hide(): void;
    reset(): void;
    expand(): void;
    collapse(): void;
    /**
     * Dispose panel and clean up event listeners
     */
    dispose(): void;
}

/**
 * Copyright (C) 2025 Alibaba Group Holding Limited
 * All rights reserved.
 */

type PageAgentConfig = AgentConfig & PageControllerConfig & Omit<PanelConfig, 'language'>;
declare class PageAgent extends PageAgentCore {
    panel: Panel;
    constructor(config: PageAgentConfig);
}

export { PageAgent, PageAgentCore, tool };
export type { AgentActivity, AgentConfig, AgentErrorEvent, AgentReflection, AgentStatus, AgentStepEvent, ExecutionResult, HistoricalEvent, MacroToolInput, MacroToolResult, ObservationEvent, PageAgentConfig, PageAgentCoreConfig, PageAgentTool, RetryEvent, SupportedLanguage$1 as SupportedLanguage, UserTakeoverEvent };
