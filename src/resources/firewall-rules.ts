// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class FirewallRules extends APIResource {
  /**
   * Creates a new firewall rule for the authenticated user.
   *
   * **Note**: This endpoint requires a paid plan.
   */
  create(body: FirewallRuleCreateParams, options?: RequestOptions): APIPromise<FirewallRuleCreateResponse> {
    return this._client.post('/v1/firewall-rules', { body, ...options });
  }

  /**
   * Returns a single firewall rule by ID for the authenticated user.
   */
  retrieve(id: number, options?: RequestOptions): APIPromise<FirewallRuleRetrieveResponse> {
    return this._client.get(path`/v1/firewall-rules/${id}`, options);
  }

  /**
   * Updates an existing firewall rule. All fields are optional.
   *
   * **Note**: This endpoint requires a paid plan.
   */
  update(
    id: number,
    body: FirewallRuleUpdateParams,
    options?: RequestOptions,
  ): APIPromise<FirewallRuleUpdateResponse> {
    return this._client.patch(path`/v1/firewall-rules/${id}`, { body, ...options });
  }

  /**
   * Returns all firewall rules for the authenticated user, ordered by priority
   * (highest first).
   */
  list(options?: RequestOptions): APIPromise<FirewallRuleListResponse> {
    return this._client.get('/v1/firewall-rules', options);
  }

  /**
   * Permanently deletes a firewall rule.
   *
   * **Note**: This endpoint requires a paid plan.
   */
  delete(id: number, options?: RequestOptions): APIPromise<FirewallRuleDeleteResponse> {
    return this._client.delete(path`/v1/firewall-rules/${id}`, options);
  }
}

export interface FirewallRule {
  /**
   * Unique identifier for the firewall rule
   */
  id: number;

  /**
   * Action to take when matched
   */
  action: 'block' | 'mask' | 'warn';

  created_at: string;

  /**
   * Whether the rule is active
   */
  is_enabled: boolean;

  /**
   * Human-readable name for the rule
   */
  name: string;

  /**
   * The pattern to match
   */
  pattern: string;

  /**
   * Rule evaluation priority (higher values = higher priority)
   */
  priority: number;

  /**
   * Where the rule applies (prompt or response)
   */
  scope: 'prompt' | 'response';

  /**
   * Pattern matching type
   */
  type: 'substring' | 'regex';

  updated_at: string;

  /**
   * ID of the user who owns this rule
   */
  user_id: number;

  /**
   * Replacement text for mask action
   */
  replacement?: string | null;
}

export interface FirewallRuleCreateResponse {
  data: FirewallRule;
}

export interface FirewallRuleRetrieveResponse {
  data: FirewallRule;
}

export interface FirewallRuleUpdateResponse {
  data: FirewallRule;
}

export interface FirewallRuleListResponse {
  data: Array<FirewallRule>;
}

export interface FirewallRuleDeleteResponse {
  success: boolean;
}

export interface FirewallRuleCreateParams {
  action: 'block' | 'mask' | 'warn';

  is_enabled: boolean;

  name: string;

  pattern: string;

  priority: number;

  scope: 'prompt' | 'response';

  type: 'substring' | 'regex';

  replacement?: string | null;
}

export interface FirewallRuleUpdateParams {
  action?: 'block' | 'mask' | 'warn';

  is_enabled?: boolean;

  name?: string;

  pattern?: string;

  priority?: number;

  replacement?: string | null;

  scope?: 'prompt' | 'response';

  type?: 'substring' | 'regex';
}

export declare namespace FirewallRules {
  export {
    type FirewallRule as FirewallRule,
    type FirewallRuleCreateResponse as FirewallRuleCreateResponse,
    type FirewallRuleRetrieveResponse as FirewallRuleRetrieveResponse,
    type FirewallRuleUpdateResponse as FirewallRuleUpdateResponse,
    type FirewallRuleListResponse as FirewallRuleListResponse,
    type FirewallRuleDeleteResponse as FirewallRuleDeleteResponse,
    type FirewallRuleCreateParams as FirewallRuleCreateParams,
    type FirewallRuleUpdateParams as FirewallRuleUpdateParams,
  };
}
