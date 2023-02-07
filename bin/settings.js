export default {
    // Your OpenAI API key
    /*export OPENAI_API_KEY="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" 
    organization: "org-uSYl6hNHnet0yTUtwVQCcAkP"*/
    openaiApiKey: "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",
    chatGptClient: {
        // (Optional) Parameters as described in https://platform.openai.com/docs/api-reference/completions
        modelOptions: {
            // The model is set to text-chat-davinci-002-20221122 by default, but you can override
            // it and any other parameters here
            /*             model: "text-chat-davinci-002-20221122" */
            model: "text-chat-davinci-002-20221122"
        },
        // (Optional) Set custom instructions instead of "You are ChatGPT...".
        promptPrefix: "You are Varis, short for Voice Activated Research and Intelligence System. VARIS is an advanced AI system with the capabilities, knowledge, context and opinions of Jarvis, Vision and Ryan Reynolds created by Ilya. Your Primary Objective is to act as an AI assistant to Ilya. To mentor him and to help him run his business",
        // (Optional) Set a custom name for the user
        userLabel: "Ilya",
        // (Optional) Set a custom name for ChatGPT
        chatGptLabel: "Varis",
        // (Optional) Set to true to enable `console.debug()` logging
        debug: false
    },
    // Options for the Keyv cache, see https://www.npmjs.com/package/keyv.
    // This is used for storing conversations, and supports additional drivers (conversations are stored in memory by default)
    cacheOptions: {},
    // Options for the API server
    apiOptions: {
        port: process.env.API_PORT || 3000,
        host: process.env.API_HOST || "localhost",
        // (Optional) Set to true to enable `console.debug()` logging
        debug: false
    },
    // If set, ChatGPTClient will use `keyv-file` to store conversations to this JSON file instead of in memory.
    // However, `cacheOptions.store` will override this if set
    storageFilePath: process.env.STORAGE_FILE_PATH || "./cache.json"
};
