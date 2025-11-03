// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Responses extends APIResource {
  /**
   * Creates a new AI model response by routing your request to the optimal provider
   * and model.
   *
   * This endpoint intelligently selects the best provider based on:
   *
   * - Your routing mode (balance, cost, quality, latency)
   * - Available provider keys
   * - Model capabilities and availability
   * - Custom routing rules you've configured
   * - Firewall rules and security policies
   *
   * The response follows OpenAI's response format for compatibility while adding
   * TokenRouter-specific metadata like routing decisions and provider information.
   *
   * @example
   * ```ts
   * const responseObject = await client.responses.create({
   *   input: 'What is the capital of France?',
   *   model: 'auto:balance',
   * });
   * ```
   */
  create(body: ResponseCreateParams, options?: RequestOptions): APIPromise<ResponseObject> {
    return this._client.post('/v1/responses', { body, ...options });
  }

  /**
   * Replays a previously stored response by request ID. This is useful for:
   *
   * - Debugging and testing
   * - Retrieving cached responses
   * - Re-streaming previous responses
   *
   * The response can be returned in either standard JSON format or streamed format
   * based on the `stream` parameter in the request body.
   *
   * @example
   * ```ts
   * const responseObject = await client.responses.replay(
   *   'req_a1b2c3d4-e5f6-7890-abcd-ef1234567890',
   * );
   * ```
   */
  replay(
    requestID: string,
    body: ResponseReplayParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ResponseObject> {
    return this._client.post(path`/v1/responses/${requestID}`, { body, ...options });
  }
}

export interface ResponseObject {
  /**
   * Unique response identifier
   */
  id: string;

  /**
   * Unix timestamp of response creation
   */
  created_at: number;

  /**
   * Actual model used to generate response
   */
  model: string;

  /**
   * Object type
   */
  object: 'response';

  /**
   * Response status
   */
  status: 'completed' | 'failed' | 'in_progress' | 'incomplete';

  /**
   * Error information (if status is 'failed')
   */
  error?: ResponseObject.Error | null;

  /**
   * Details about incomplete response
   */
  incomplete_details?: unknown | null;

  /**
   * System instructions used
   */
  instructions?: string | null;

  /**
   * Maximum output tokens setting
   */
  max_output_tokens?: number | null;

  /**
   * Custom metadata attached to response
   */
  metadata?: ResponseObject.Metadata | null;

  /**
   * Model output messages
   */
  output?: Array<ResponseObject.Output>;

  /**
   * Temperature setting used
   */
  temperature?: number;

  /**
   * Top-p setting used
   */
  top_p?: number;

  /**
   * Token usage statistics
   */
  usage?: ResponseObject.Usage;
}

export namespace ResponseObject {
  /**
   * Error information (if status is 'failed')
   */
  export interface Error {
    code?: string;

    message?: string;

    type?: string;
  }

  /**
   * Custom metadata attached to response
   */
  export interface Metadata {
    /**
     * Provider used for this request
     */
    provider?: string;

    /**
     * Internal request ID
     */
    request_id?: string;

    /**
     * Confidence score of routing decision
     */
    routing_confidence?: number;

    /**
     * Routing mode applied
     */
    routing_mode?: string;

    [k: string]: unknown;
  }

  export interface Output {
    content?: Array<Output.UnionMember0 | Output.UnionMember1>;

    role?: 'assistant';
  }

  export namespace Output {
    /**
     * Text content
     */
    export interface UnionMember0 {
      text?: string;

      type?: 'text';
    }

    /**
     * Tool call content
     */
    export interface UnionMember1 {
      id?: string;

      function?: UnionMember1.Function;

      type?: 'tool_call';
    }

    export namespace UnionMember1 {
      export interface Function {
        arguments?: string;

        name?: string;
      }
    }
  }

  /**
   * Token usage statistics
   */
  export interface Usage {
    /**
     * Number of input tokens
     */
    input_tokens?: number;

    /**
     * Number of output tokens
     */
    output_tokens?: number;

    /**
     * Total tokens used
     */
    total_tokens?: number;
  }
}

export interface ResponseCreateParams {
  /**
   * Text, image, or file inputs to the model. Can be a simple string or an array of
   * content items.
   */
  input: string | Array<ResponseCreateParams.UnionMember1>;

  /**
   * Run response generation in background
   */
  background?: boolean;

  /**
   * Conversation ID or object for context
   */
  conversation?: string | unknown | null;

  /**
   * System-level instructions for the model
   */
  instructions?: string | null;

  /**
   * Maximum number of tokens in the response
   */
  max_output_tokens?: number | null;

  /**
   * Maximum number of tool calls
   */
  max_tool_calls?: number | null;

  /**
   * Custom metadata (up to 16 key-value pairs)
   */
  metadata?: { [key: string]: string } | null;

  /**
   * Model ID or routing mode. Supports:
   *
   * - `auto:balance` - Balanced routing (default)
   * - `auto:cost` - Cost-optimized routing
   * - `auto:quality` - Quality-optimized routing
   * - `auto:latency` - Latency-optimized routing
   * - Specific model with mode: `gpt-4o:balance`, `claude-3-7-sonnet-latest:quality`
   * - Specific model: `gpt-4o`, `claude-3-7-sonnet-latest`, etc.
   */
  model?: string;

  /**
   * Allow parallel tool execution
   */
  parallel_tool_calls?: boolean;

  /**
   * ID of previous response for context
   */
  previous_response_id?: string | null;

  /**
   * Key for prompt caching (OpenAI)
   */
  prompt_cache_key?: string | null;

  /**
   * Configuration for reasoning models (o-series, gpt-5)
   */
  reasoning?: ResponseCreateParams.Reasoning | null;

  /**
   * Override routing mode (advanced)
   */
  router_mode?: 'balance' | 'cost' | 'quality' | 'latency' | null;

  /**
   * Override model for routing (advanced)
   */
  router_model?: string | null;

  /**
   * Force specific provider (advanced)
   */
  router_provider?: 'openai' | 'anthropic' | 'gemini' | 'mistral' | 'deepseek' | null;

  /**
   * Stable identifier for policy violation detection
   */
  safety_identifier?: string | null;

  /**
   * Processing priority tier
   */
  service_tier?: 'auto' | 'default' | 'flex' | 'priority';

  /**
   * Whether to store the response for later retrieval
   */
  store?: boolean;

  /**
   * Whether to stream the response as Server-Sent Events
   */
  stream?: boolean;

  /**
   * Options for streaming responses
   */
  stream_options?: ResponseCreateParams.StreamOptions | null;

  /**
   * Sampling temperature (0-2). Higher values make output more random.
   */
  temperature?: number | null;

  /**
   * Configuration for structured text output
   */
  text?: ResponseCreateParams.Text | null;

  /**
   * How the model should select tools
   */
  tool_choice?: 'auto' | 'none' | 'required' | ResponseCreateParams.UnionMember1;

  /**
   * Tools/functions the model may call
   */
  tools?: Array<ResponseCreateParams.Tool> | null;

  /**
   * Number of top log probabilities to return (0-20)
   */
  top_logprobs?: number | null;

  /**
   * Nucleus sampling probability mass cutoff
   */
  top_p?: number | null;

  /**
   * Truncation strategy
   */
  truncation?: 'auto' | 'disabled';
}

export namespace ResponseCreateParams {
  export interface UnionMember1 {
    image_url?: UnionMember1.ImageURL;

    text?: string;

    type?: 'text' | 'image_url' | 'image_file';
  }

  export namespace UnionMember1 {
    export interface ImageURL {
      url?: string;
    }
  }

  /**
   * Configuration for reasoning models (o-series, gpt-5)
   */
  export interface Reasoning {
    effort?: 'low' | 'medium' | 'high';
  }

  /**
   * Options for streaming responses
   */
  export interface StreamOptions {
    /**
     * Include usage statistics in stream
     */
    include_usage?: boolean;
  }

  /**
   * Configuration for structured text output
   */
  export interface Text {
    /**
     * JSON Schema for structured output
     */
    json_schema?: Text.JsonSchema;

    type?: 'text' | 'json_object' | 'json_schema';
  }

  export namespace Text {
    /**
     * JSON Schema for structured output
     */
    export interface JsonSchema {
      name?: string;

      schema?: unknown;

      strict?: boolean;
    }
  }

  export interface UnionMember1 {
    function?: UnionMember1.Function;

    type?: 'function';
  }

  export namespace UnionMember1 {
    export interface Function {
      name?: string;
    }
  }

  export interface Tool {
    function: Tool.Function;

    type: 'function';
  }

  export namespace Tool {
    export interface Function {
      /**
       * Function description
       */
      description: string;

      /**
       * Function name
       */
      name: string;

      /**
       * JSON Schema for function parameters
       */
      parameters?: unknown;
    }
  }
}

export interface ResponseReplayParams {
  /**
   * Whether to stream the replayed response
   */
  stream?: boolean;
}

export declare namespace Responses {
  export {
    type ResponseObject as ResponseObject,
    type ResponseCreateParams as ResponseCreateParams,
    type ResponseReplayParams as ResponseReplayParams,
  };
}
