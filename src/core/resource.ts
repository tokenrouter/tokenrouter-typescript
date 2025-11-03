// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Tokenrouter } from '../client';

export abstract class APIResource {
  protected _client: Tokenrouter;

  constructor(client: Tokenrouter) {
    this._client = client;
  }
}
