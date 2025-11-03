// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Tokenrouter from 'tokenrouter';

const client = new Tokenrouter({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource responses', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.responses.create({ input: 'What is the capital of France?' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.responses.create({
      input: 'What is the capital of France?',
      background: true,
      conversation: 'string',
      instructions: 'You are a helpful assistant that provides concise answers.',
      max_output_tokens: 1000,
      max_tool_calls: 1,
      metadata: { user_id: 'user_123', session_id: 'session_456' },
      model: 'auto:balance',
      parallel_tool_calls: true,
      previous_response_id: 'resp_ea9-0-b1--5f',
      prompt_cache_key: 'prompt_cache_key',
      reasoning: { effort: 'low' },
      router_mode: 'balance',
      router_model: 'router_model',
      router_provider: 'openai',
      safety_identifier: 'safety_identifier',
      service_tier: 'auto',
      store: true,
      stream: true,
      stream_options: { include_usage: true },
      temperature: 0.7,
      text: { json_schema: { name: 'name', schema: {}, strict: true }, type: 'text' },
      tool_choice: 'auto',
      tools: [{ function: { description: 'description', name: 'name', parameters: {} }, type: 'function' }],
      top_logprobs: 0,
      top_p: 0.9,
      truncation: 'auto',
    });
  });

  // Prism tests are disabled
  test.skip('replay', async () => {
    const responsePromise = client.responses.replay('req_a1b2c3d4-e5f6-7890-abcd-ef1234567890');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('replay: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.responses.replay(
        'req_a1b2c3d4-e5f6-7890-abcd-ef1234567890',
        { stream: false },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Tokenrouter.NotFoundError);
  });
});
