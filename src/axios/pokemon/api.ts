/* tslint:disable */
/* eslint-disable */
/**
 * PokéAPI
 * The RESTful Pokémon API
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface Page
 */
export interface Page {
    /**
     * 
     * @type {number}
     * @memberof Page
     */
    count?: number;
    /**
     * 
     * @type {string}
     * @memberof Page
     */
    next?: string;
    /**
     * 
     * @type {string}
     * @memberof Page
     */
    previous?: string;
    /**
     * 
     * @type {Array<PageResults>}
     * @memberof Page
     */
    results?: Array<PageResults>;
}
/**
 * 
 * @export
 * @interface PageResults
 */
export interface PageResults {
    /**
     * 
     * @type {string}
     * @memberof PageResults
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof PageResults
     */
    url?: string;
}
/**
 * 
 * @export
 * @interface Pokemon
 */
export interface Pokemon {
    /**
     * 
     * @type {number}
     * @memberof Pokemon
     */
    id?: number;
    /**
     * 
     * @type {number}
     * @memberof Pokemon
     */
    height?: number;
    /**
     * 
     * @type {number}
     * @memberof Pokemon
     */
    weight?: number;
    /**
     * 
     * @type {string}
     * @memberof Pokemon
     */
    name?: string;
    /**
     * 
     * @type {Sprite}
     * @memberof Pokemon
     */
    sprites?: Sprite;
}
/**
 * 
 * @export
 * @interface Sprite
 */
export interface Sprite {
    /**
     * 
     * @type {string}
     * @memberof Sprite
     */
    back_default?: string;
    /**
     * 
     * @type {string}
     * @memberof Sprite
     */
    back_female?: string;
    /**
     * 
     * @type {string}
     * @memberof Sprite
     */
    back_shiny?: string;
    /**
     * 
     * @type {string}
     * @memberof Sprite
     */
    back_shiny_female?: string;
    /**
     * 
     * @type {string}
     * @memberof Sprite
     */
    front_default?: string;
    /**
     * 
     * @type {string}
     * @memberof Sprite
     */
    front_female?: string;
    /**
     * 
     * @type {string}
     * @memberof Sprite
     */
    front_shiny?: string;
    /**
     * 
     * @type {string}
     * @memberof Sprite
     */
    front_shiny_female?: string;
}

/**
 * PokemonApi - axios parameter creator
 * @export
 */
export const PokemonApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns a single pokemon
         * @summary Find pokemon by ID
         * @param {number} [offset] offset
         * @param {number} [limit] limit
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPokemon: async (offset?: number, limit?: number, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/pokemon`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns a single pokemon
         * @summary Find pokemon by ID or name
         * @param {number} idOrName ID or name of pokemon to return
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPokemonByIdOrName: async (idOrName: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'idOrName' is not null or undefined
            assertParamExists('getPokemonByIdOrName', 'idOrName', idOrName)
            const localVarPath = `/pokemon/{idOrName}`
                .replace(`{${"idOrName"}}`, encodeURIComponent(String(idOrName)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * PokemonApi - functional programming interface
 * @export
 */
export const PokemonApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PokemonApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns a single pokemon
         * @summary Find pokemon by ID
         * @param {number} [offset] offset
         * @param {number} [limit] limit
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPokemon(offset?: number, limit?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Page>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPokemon(offset, limit, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns a single pokemon
         * @summary Find pokemon by ID or name
         * @param {number} idOrName ID or name of pokemon to return
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPokemonByIdOrName(idOrName: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Pokemon>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPokemonByIdOrName(idOrName, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * PokemonApi - factory interface
 * @export
 */
export const PokemonApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PokemonApiFp(configuration)
    return {
        /**
         * Returns a single pokemon
         * @summary Find pokemon by ID
         * @param {number} [offset] offset
         * @param {number} [limit] limit
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPokemon(offset?: number, limit?: number, options?: any): AxiosPromise<Page> {
            return localVarFp.getPokemon(offset, limit, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a single pokemon
         * @summary Find pokemon by ID or name
         * @param {number} idOrName ID or name of pokemon to return
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPokemonByIdOrName(idOrName: number, options?: any): AxiosPromise<Pokemon> {
            return localVarFp.getPokemonByIdOrName(idOrName, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * PokemonApi - object-oriented interface
 * @export
 * @class PokemonApi
 * @extends {BaseAPI}
 */
export class PokemonApi extends BaseAPI {
    /**
     * Returns a single pokemon
     * @summary Find pokemon by ID
     * @param {number} [offset] offset
     * @param {number} [limit] limit
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PokemonApi
     */
    public getPokemon(offset?: number, limit?: number, options?: any) {
        return PokemonApiFp(this.configuration).getPokemon(offset, limit, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a single pokemon
     * @summary Find pokemon by ID or name
     * @param {number} idOrName ID or name of pokemon to return
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PokemonApi
     */
    public getPokemonByIdOrName(idOrName: number, options?: any) {
        return PokemonApiFp(this.configuration).getPokemonByIdOrName(idOrName, options).then((request) => request(this.axios, this.basePath));
    }
}

