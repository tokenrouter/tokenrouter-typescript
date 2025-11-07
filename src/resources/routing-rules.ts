// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class RoutingRules extends APIResource {
  /**
   * Creates a new routing rule for the authenticated user.
   *
   * **Note**: This endpoint requires a paid plan.
   */
  create(body: RoutingRuleCreateParams, options?: RequestOptions): APIPromise<RoutingRuleCreateResponse> {
    return this._client.post('/v1/routing-rules', { body, ...options });
  }

  /**
   * Returns a single routing rule by ID for the authenticated user.
   */
  retrieve(id: number, options?: RequestOptions): APIPromise<RoutingRuleRetrieveResponse> {
    return this._client.get(path`/v1/routing-rules/${id}`, options);
  }

  /**
   * Updates an existing routing rule. All fields are optional.
   *
   * **Note**: This endpoint requires a paid plan.
   */
  update(
    id: number,
    body: RoutingRuleUpdateParams,
    options?: RequestOptions,
  ): APIPromise<RoutingRuleUpdateResponse> {
    return this._client.patch(path`/v1/routing-rules/${id}`, { body, ...options });
  }

  /**
   * Returns all routing rules for the authenticated user, ordered by priority
   * (highest first).
   *
   * Rules are returned in the order they will be evaluated during request routing.
   */
  list(options?: RequestOptions): APIPromise<RoutingRuleListResponse> {
    return this._client.get('/v1/routing-rules', options);
  }

  /**
   * Permanently deletes a routing rule.
   *
   * **Note**: This endpoint requires a paid plan.
   */
  delete(id: number, options?: RequestOptions): APIPromise<RoutingRuleDeleteResponse> {
    return this._client.delete(path`/v1/routing-rules/${id}`, options);
  }
}

export interface RoutingRule {
  /**
   * Unique identifier for the routing rule
   */
  id: number;

  /**
   * Actions to take when this rule matches
   */
  action_json: RoutingRule.ActionJson;

  created_at: string;

  /**
   * Whether the rule is active
   */
  is_enabled: boolean;

  /**
   * Conditions that determine when this rule matches a request
   */
  match_json: RoutingRule.MatchJson;

  /**
   * Human-readable name for the rule
   */
  name: string;

  /**
   * Rule evaluation priority (higher values = higher priority)
   */
  priority: number;

  updated_at: string;

  /**
   * ID of the user who owns this rule
   */
  user_id: number;
}

export namespace RoutingRule {
  /**
   * Actions to take when this rule matches
   */
  export interface ActionJson {
    /**
     * Add a custom warning to the response
     */
    add_warning?: ActionJson.AddWarning;

    /**
     * Override routing mode
     */
    set_mode?: 'balance' | 'cost' | 'quality' | 'latency';

    /**
     * Force a specific model
     */
    set_model?: string;

    /**
     * Force a specific provider
     */
    set_provider?: 'openai' | 'anthropic' | 'gemini' | 'mistral' | 'deepseek';
  }

  export namespace ActionJson {
    /**
     * Add a custom warning to the response
     */
    export interface AddWarning {
      message?: string;
    }
  }

  /**
   * Conditions that determine when this rule matches a request
   */
  export interface MatchJson {
    /**
     * String or array of strings to search for in user input
     */
    contains?: string | Array<string>;

    /**
     * Match specific metadata key-value pairs
     */
    metadata_equals?: { [key: string]: string };

    /**
     * Match specific routing mode
     */
    mode?: 'fast' | 'balanced' | 'quality';

    /**
     * Convenience shorthand for metadata_equals.task
     */
    task?: string;
  }
}

export interface RoutingRuleCreateResponse {
  data: RoutingRule;
}

export interface RoutingRuleRetrieveResponse {
  data: RoutingRule;
}

export interface RoutingRuleUpdateResponse {
  data: RoutingRule;
}

export interface RoutingRuleListResponse {
  data: Array<RoutingRule>;
}

export interface RoutingRuleDeleteResponse {
  success: boolean;
}

export interface RoutingRuleCreateParams {
  /**
   * Actions to take when matched (JSON object or string)
   */
  action_json: unknown | string;

  is_enabled: boolean;

  /**
   * Conditions for matching requests (JSON object or string)
   */
  match_json: unknown | string;

  name: string;

  priority: number;
}

export interface RoutingRuleUpdateParams {
  action_json?: unknown | string;

  is_enabled?: boolean;

  match_json?: unknown | string;

  name?: string;

  priority?: number;
}

export declare namespace RoutingRules {
  export {
    type RoutingRule as RoutingRule,
    type RoutingRuleCreateResponse as RoutingRuleCreateResponse,
    type RoutingRuleRetrieveResponse as RoutingRuleRetrieveResponse,
    type RoutingRuleUpdateResponse as RoutingRuleUpdateResponse,
    type RoutingRuleListResponse as RoutingRuleListResponse,
    type RoutingRuleDeleteResponse as RoutingRuleDeleteResponse,
    type RoutingRuleCreateParams as RoutingRuleCreateParams,
    type RoutingRuleUpdateParams as RoutingRuleUpdateParams,
  };
}
