/* CodeVent AI Automation - course content */

const COURSE = {
  "title": "CodeVent AI Automation",
  "tagline": "Build real AI-driven automations, from API calls and prompt design to chatbots, webhooks, and WhatsApp assistants.",
  "modules": [
    {
      "id": "m1",
      "title": "AI Automation Foundations",
      "short": "Foundations",
      "description": "What AI automation is, rule-based vs AI-driven automation, use cases, and the automation stack.",
      "lessons": [
        {
          "id": "m1-l1",
          "title": "What AI Automation Is",
          "concept": "AI automation connects an AI model to a trigger and an action, so a task that once needed a person now runs on its own. A trigger starts the flow, the AI model processes or decides something, and an action carries out the result.",
          "why": "Plain automation (like a scheduled script) can only follow fixed rules. Adding an AI model lets the automation handle unstructured input, such as free-form text, that fixed rules cannot reliably parse.",
          "how": "A typical flow is: something happens (trigger), data is sent to an AI model (processing), and the model's output drives an action (send a message, update a record, create a file).",
          "example": "A customer sends a support message, an AI model classifies its urgency, and the automation routes urgent messages to a priority queue automatically.",
          "practice": {
            "task": "Identify the trigger, processing step, and action in this flow: a new email arrives, AI extracts the sender's request, a task is created in a project tool.",
            "hint": "Trigger is what starts it, processing is what the AI does, action is the final result.",
            "solution": "Trigger: a new email arrives. Processing: AI extracts the sender's request from the email text. Action: a task is created in a project tool."
          },
          "miniTask": "Describe one repetitive task in your own work that follows a trigger, AI processing, action pattern."
        },
        {
          "id": "m1-l2",
          "title": "Rule-Based vs AI-Driven Automation",
          "concept": "Rule-based automation follows fixed conditions, such as \"if the subject contains 'invoice', move to the Invoices folder.\" AI-driven automation makes a judgment call on unstructured input, such as deciding what an email is actually about.",
          "why": "Rule-based automation is fast, predictable, and cheap to run, but breaks the moment input doesn't match the expected pattern. AI-driven automation handles that variation at the cost of being less predictable and more expensive per run.",
          "how": "Use rule-based logic wherever a fixed condition reliably captures the case. Use an AI model only where the input genuinely varies in ways rules cannot anticipate.",
          "example": "Filtering spam by a fixed sender blocklist is rule-based. Deciding if an email is a genuine complaint, a question, or spam based on its wording is AI-driven.",
          "practice": {
            "task": "Decide whether each task is better suited to rule-based or AI-driven automation: sorting files by extension, summarizing a long customer message.",
            "hint": "File extensions are fixed and predictable. Message content varies too much for fixed rules.",
            "solution": "Sorting files by extension: rule-based, since the extension is a fixed, predictable value. Summarizing a long customer message: AI-driven, since the content and phrasing vary too much for fixed rules to handle reliably."
          },
          "miniTask": "List two tasks from your own work: one that should stay rule-based, one that would benefit from AI."
        },
        {
          "id": "m1-l3",
          "title": "Common AI Automation Use Cases",
          "concept": "AI automation is commonly used for customer support (chatbots), content workflows (summarizing, drafting, tagging), and notifications (turning raw events into readable messages).",
          "why": "Knowing established use cases helps identify where AI automation adds real value instead of being added just because it is available.",
          "how": "Match the use case to the pattern: a chatbot needs a request-response loop; a content workflow needs a trigger plus a processing step; a notification system needs an event source plus a formatting step.",
          "example": "A support chatbot, an automatic meeting-notes summarizer, and a WhatsApp order-confirmation bot are three distinct use case categories.",
          "practice": {
            "task": "Classify this use case: a business wants every new customer review automatically summarized and posted to a team chat channel.",
            "hint": "This involves a trigger (new review), AI processing (summarizing), and an action (posting to chat) — a content and notification workflow.",
            "solution": "This is a content workflow combined with a notification: the trigger is a new review, the AI processing step summarizes it, and the action posts the summary to a chat channel."
          },
          "miniTask": "Pick one use case category (support, content, or notifications) and describe how it could apply to a business you know."
        },
        {
          "id": "m1-l4",
          "title": "The AI Automation Stack",
          "concept": "A typical AI automation stack has four parts: a trigger source (a webhook, schedule, or form), an AI API (the model that processes input), a runtime to run the logic (like a Cloudflare Worker or Node.js server), and a destination for the result (a message, database, or file).",
          "why": "Understanding the stack in parts makes it possible to swap pieces (a different AI provider, a different runtime) without redesigning the whole automation.",
          "how": "Map any automation idea onto these four parts before writing code: what starts it, what processes it, what runs the logic, and where the result goes.",
          "example": "A WhatsApp AI assistant: trigger is an incoming WhatsApp webhook, the AI API is Gemini or a similar model, the runtime is a Cloudflare Worker, and the destination is a reply sent back through the WhatsApp API.",
          "practice": {
            "task": "Map a daily sales report automation onto the four stack parts: trigger, AI API, runtime, destination.",
            "hint": "The trigger could be a schedule (e.g. every day at 9am).",
            "solution": "Trigger: a daily schedule. AI API: a model that summarizes the day's sales data. Runtime: a server or Worker that pulls the data and calls the API. Destination: a message sent to a team channel or email."
          },
          "miniTask": "Map one automation idea of your own onto the four-part stack."
        },
        {
          "id": "m1-l5",
          "title": "Planning an Automation Before Building It",
          "concept": "Before writing any code, a clear plan defines exactly what triggers the automation, what decision or output the AI needs to produce, and what happens with that output.",
          "why": "Automations built without a plan tend to grow unpredictable behavior, since it becomes unclear what the AI is actually responsible for deciding versus what the code should handle directly.",
          "how": "Write one sentence for the trigger, one for the AI's exact job, and one for the action, before opening an editor.",
          "example": "Trigger: a new support ticket is created. AI's job: classify it as billing, technical, or general. Action: assign it to the matching team queue.",
          "practice": {
            "task": "Write a three-sentence plan (trigger, AI's job, action) for an automation that flags negative product reviews.",
            "hint": "Keep the AI's job to one clear decision, not several combined tasks.",
            "solution": "Trigger: a new product review is submitted. AI's job: classify the review's sentiment as positive, neutral, or negative. Action: if negative, notify the support team with the review text."
          },
          "miniTask": "Write this three-sentence plan for the automation idea you described in the previous lesson."
        }
      ]
    },
    {
      "id": "m2",
      "title": "Working with AI APIs",
      "short": "AI APIs",
      "description": "API keys, making requests, handling responses, rate limits, and retries.",
      "lessons": [
        {
          "id": "m2-l1",
          "title": "What an AI API Is",
          "concept": "An AI API is a web service that accepts input, such as text, and returns a model-generated response over HTTP. Providers like Google (Gemini) and OpenAI expose their models this way.",
          "why": "Calling an API means the model itself does not need to run on your machine; a request is sent to the provider's servers and a response comes back.",
          "how": "Requests are typically sent as JSON over HTTPS, authenticated with an API key, to an endpoint URL specific to the provider and model.",
          "example": "The general shape of an AI API request.",
          "code": {
            "javascript": "// POST https://api.example-ai-provider.com/v1/generate\n// Headers: { Authorization: \"Bearer YOUR_API_KEY\" }\n// Body: { \"prompt\": \"Summarize this text: ...\" }"
          },
          "practice": {
            "task": "Explain why the API key should never appear in frontend JavaScript that runs in a browser.",
            "hint": "Anything sent to the browser can be viewed by opening developer tools.",
            "solution": "Any code that runs in the browser is visible to the user, including network requests and embedded strings. An API key placed there could be extracted and used by anyone, incurring charges or abuse under your account."
          },
          "miniTask": "Look up which AI provider you plan to use in your own automation and find its API documentation page."
        },
        {
          "id": "m2-l2",
          "title": "API Keys and Environment Variables",
          "concept": "An API key authenticates requests to a provider. Environment variables store it outside the source code, so it is never committed to version control or exposed in a repository.",
          "why": "A leaked API key can be used by anyone who finds it, often resulting in unexpected charges or abuse.",
          "how": "Store the key in a .env file (excluded from git) or in a platform's secret manager, and read it with process.env.KEY_NAME in Node.js.",
          "example": "Reading an API key from an environment variable instead of hardcoding it.",
          "code": {
            "javascript": "const apiKey = process.env.AI_API_KEY;\n\nif (!apiKey) {\n  throw new Error(\"Missing AI_API_KEY environment variable\");\n}"
          },
          "runNote": "Set AI_API_KEY in your terminal before running, e.g.: export AI_API_KEY=your_key_here (macOS/Linux) or set AI_API_KEY=your_key_here (Windows).",
          "practice": {
            "task": "Explain what a .gitignore entry of .env accomplishes.",
            "hint": "Think about what git does with files listed in .gitignore.",
            "solution": "Git ignores any file matching a .gitignore entry, meaning the .env file (and any secrets inside it) is never staged, committed, or pushed to the repository, keeping it out of version control history."
          },
          "miniTask": "Create a .env file with a placeholder API key, and add .env to a .gitignore file."
        },
        {
          "id": "m2-l3",
          "title": "Making Your First API Request",
          "concept": "A basic AI API call sends a prompt as part of a JSON request body and receives generated text back in the JSON response.",
          "why": "This is the foundational operation every AI automation builds on: send input, receive a model-generated result.",
          "how": "Use fetch (built into modern Node.js) to POST the request, then parse the JSON response to extract the generated text.",
          "example": "A minimal request to an AI API using fetch.",
          "code": {
            "javascript": "async function askAI(prompt) {\n  const response = await fetch(\"https://api.example-ai-provider.com/v1/generate\", {\n    method: \"POST\",\n    headers: {\n      \"Content-Type\": \"application/json\",\n      \"Authorization\": `Bearer ${process.env.AI_API_KEY}`\n    },\n    body: JSON.stringify({ prompt })\n  });\n\n  const data = await response.json();\n  return data.output;\n}\n\naskAI(\"Summarize: Node.js is a JavaScript runtime.\").then(console.log);"
          },
          "runNote": "Replace the URL and response shape with your chosen provider's actual API. Run with: node ask.js",
          "practice": {
            "task": "Modify askAI to accept a second parameter, maxLength, and include it in the request body.",
            "hint": "Add it as a second function parameter and include it in the JSON.stringify object.",
            "solution": "async function askAI(prompt, maxLength) {\n  const response = await fetch(\"https://api.example-ai-provider.com/v1/generate\", {\n    method: \"POST\",\n    headers: { \"Content-Type\": \"application/json\", \"Authorization\": `Bearer ${process.env.AI_API_KEY}` },\n    body: JSON.stringify({ prompt, maxLength })\n  });\n  return (await response.json()).output;\n}"
          },
          "miniTask": "Sign up for an AI provider's free tier and make one real API call following this pattern."
        },
        {
          "id": "m2-l4",
          "title": "Handling API Responses",
          "concept": "An AI API response is JSON containing the generated output, plus metadata such as token usage or a finish reason. Always check for an error field before assuming the request succeeded.",
          "why": "Treating every response as successful leads to automations that silently process error messages as if they were real AI output.",
          "how": "Check response.ok (from fetch) and look for an error field in the parsed JSON before using the output.",
          "example": "Safely extracting output only after confirming the response succeeded.",
          "code": {
            "javascript": "async function askAI(prompt) {\n  const response = await fetch(\"https://api.example-ai-provider.com/v1/generate\", {\n    method: \"POST\",\n    headers: { \"Content-Type\": \"application/json\", \"Authorization\": `Bearer ${process.env.AI_API_KEY}` },\n    body: JSON.stringify({ prompt })\n  });\n\n  const data = await response.json();\n\n  if (!response.ok || data.error) {\n    throw new Error(data.error || `Request failed with status ${response.status}`);\n  }\n\n  return data.output;\n}"
          },
          "runNote": "Run with: node ask.js and try an invalid API key to see the error path trigger.",
          "practice": {
            "task": "Explain what would happen in the original version of askAI (without error checking) if the API key were invalid.",
            "hint": "Think about what data.output would be if the response body only contained an error message.",
            "solution": "data.output would be undefined, since an error response typically has no output field. The function would silently return undefined instead of surfacing the actual authentication error, making the failure much harder to diagnose."
          },
          "miniTask": "Add error handling to your own askAI function from the previous lesson."
        },
        {
          "id": "m2-l5",
          "title": "Rate Limits and Retry Logic",
          "concept": "AI providers limit how many requests can be made in a given time window. Exceeding the limit returns an error, commonly with a 429 status code, until the window resets.",
          "why": "An automation that makes many rapid requests, such as processing a batch of messages, can hit rate limits and fail partway through without retry logic.",
          "how": "Catch a 429 response, wait a short delay, and retry the request a limited number of times before giving up.",
          "example": "A simple retry wrapper around an AI API call.",
          "code": {
            "javascript": "async function askAIWithRetry(prompt, attempts = 3) {\n  for (let i = 0; i < attempts; i++) {\n    const response = await fetch(\"https://api.example-ai-provider.com/v1/generate\", {\n      method: \"POST\",\n      headers: { \"Content-Type\": \"application/json\", \"Authorization\": `Bearer ${process.env.AI_API_KEY}` },\n      body: JSON.stringify({ prompt })\n    });\n\n    if (response.status === 429) {\n      await new Promise((resolve) => setTimeout(resolve, 1000 * (i + 1)));\n      continue;\n    }\n\n    return (await response.json()).output;\n  }\n  throw new Error(\"Rate limit exceeded after multiple retries\");\n}"
          },
          "runNote": "Run with: node ask.js",
          "practice": {
            "task": "Explain why the delay increases with each retry attempt (1000 * (i + 1)) instead of staying fixed.",
            "hint": "This pattern is called backoff — it gives the rate limit window more time to reset on each subsequent failure.",
            "solution": "A growing delay, known as backoff, reduces the chance of hitting the rate limit again immediately, since it gives the provider's rate limit window progressively more time to reset between attempts."
          },
          "miniTask": "Add a console.log inside the retry loop that reports which attempt number is currently running."
        }
      ]
    },
    {
      "id": "m3",
      "title": "Prompt Engineering for Automation",
      "short": "Prompts",
      "description": "System vs user prompts, structured JSON output, few-shot prompting, and reusable templates.",
      "lessons": [
        {
          "id": "m3-l1",
          "title": "What a Prompt Is",
          "concept": "A prompt is the text input sent to an AI model to produce a response. In automation, prompts are usually built dynamically from a template plus real data, not typed by a person each time.",
          "why": "The quality and structure of a prompt directly shapes the reliability of an automation's output, since the same model can produce very different results from differently worded prompts.",
          "how": "Combine a fixed instruction with variable data using a template string, so the same prompt structure works across many different inputs.",
          "example": "Building a prompt from a template and a piece of dynamic data.",
          "code": {
            "javascript": "function buildPrompt(reviewText) {\n  return `Classify the sentiment of this review as positive, neutral, or negative.\\n\\nReview: \"${reviewText}\"`;\n}\n\nconsole.log(buildPrompt(\"The product broke after two days.\"));"
          },
          "runNote": "Run with: node prompt.js",
          "practice": {
            "task": "Write a buildPrompt function for summarizing a support ticket into one sentence.",
            "hint": "Keep the instruction explicit about the desired output length.",
            "solution": "function buildPrompt(ticketText) {\n  return `Summarize this support ticket in exactly one sentence.\\n\\nTicket: \"${ticketText}\"`;\n}"
          },
          "miniTask": "Write a prompt template for one automation idea, with a placeholder for the dynamic data."
        },
        {
          "id": "m3-l2",
          "title": "System Prompts vs User Prompts",
          "concept": "A system prompt sets the model's role and constraints for the whole conversation. A user prompt is the specific input for a given turn. Many APIs accept both separately.",
          "why": "Separating instructions from data keeps the model's behavior consistent even as the actual input content varies wildly between calls.",
          "how": "Set the system prompt once when the automation starts, and pass only the changing content as the user prompt on each call.",
          "example": "Structuring a request with a system prompt and a user prompt.",
          "code": {
            "javascript": "const requestBody = {\n  systemPrompt: \"You are a support ticket classifier. Respond with only one word: billing, technical, or general.\",\n  userPrompt: \"My card was charged twice for the same order.\"\n};"
          },
          "practice": {
            "task": "Write a system prompt for an automation that extracts a customer's requested refund amount from free text.",
            "hint": "Be explicit about the exact output format you want, such as just the number.",
            "solution": "\"You are a refund amount extractor. Read the customer's message and respond with only the numeric amount they are requesting, with no currency symbol or extra text. If no amount is mentioned, respond with 'none'.\""
          },
          "miniTask": "Write a system prompt for the automation idea from the previous lesson, separate from the user data."
        },
        {
          "id": "m3-l3",
          "title": "Structured Output with JSON Mode",
          "concept": "Many AI APIs support a mode that constrains the response to valid JSON matching a requested shape, instead of freeform text. This makes the output directly usable by code without fragile text parsing.",
          "why": "Parsing freeform text with regular expressions to extract structured data is unreliable, since wording varies. Requesting JSON output directly avoids that entirely.",
          "how": "Instruct the model, in the prompt or a dedicated response format setting, to return only JSON matching a specific shape, then parse it with JSON.parse.",
          "example": "Requesting a structured classification result instead of a plain sentence.",
          "code": {
            "javascript": "const prompt = `Classify this review and respond with ONLY valid JSON in this shape: {\"sentiment\": \"positive|neutral|negative\", \"confidence\": 0-1}\\n\\nReview: \"Shipping was slow but the product works great.\"`;\n\n// After receiving the response text:\nconst result = JSON.parse(responseText);\nconsole.log(result.sentiment, result.confidence);"
          },
          "runNote": "Some providers offer a dedicated JSON mode setting instead of relying on prompt instructions alone; check your provider's documentation.",
          "practice": {
            "task": "Explain why JSON.parse could throw an error even when the model was instructed to return JSON.",
            "hint": "Models do not guarantee perfect compliance with formatting instructions on every response.",
            "solution": "A model can still occasionally return extra text before or after the JSON, or slightly malformed JSON, since instructions in a prompt are a strong guide rather than a strict guarantee. Code that calls JSON.parse on model output should be wrapped in a try/catch."
          },
          "miniTask": "Wrap a JSON.parse call on model output in a try/catch that logs a clear error if parsing fails."
        },
        {
          "id": "m3-l4",
          "title": "Few-Shot Prompting",
          "concept": "Few-shot prompting includes a small number of example input-output pairs directly in the prompt, showing the model the exact pattern to follow before it processes the real input.",
          "why": "For tasks with a specific desired format or edge cases that are hard to describe in words, showing examples is often more reliable than describing the rule.",
          "how": "List two or three example inputs with their correct outputs, then the real input, all in the same prompt.",
          "example": "A few-shot prompt for extracting a product name from a message.",
          "code": {
            "javascript": "const prompt = `Extract the product name from each message.\n\nMessage: \"My blue widget arrived broken\"\nProduct: widget\n\nMessage: \"The XL hoodie doesn't fit\"\nProduct: hoodie\n\nMessage: \"I never received my order for the desk lamp\"\nProduct:`;"
          },
          "practice": {
            "task": "Add a third example to the prompt above, for a message about a laptop charger.",
            "hint": "Follow the same Message/Product pattern as the existing examples.",
            "solution": "Message: \"The laptop charger stopped working after a week\"\nProduct: laptop charger"
          },
          "miniTask": "Write a few-shot prompt with two examples for one classification task of your choice."
        },
        {
          "id": "m3-l5",
          "title": "Prompt Templates for Reusable Automations",
          "concept": "A prompt template is a function that produces a full prompt from a small set of inputs, keeping the wording consistent and easy to update across an entire automation.",
          "why": "Hardcoding prompt text inline throughout a codebase makes it hard to improve wording later, since every occurrence would need to be found and updated individually.",
          "how": "Centralize prompt-building logic in one module that every part of the automation imports and calls.",
          "example": "A prompts.js module exporting reusable prompt-building functions.",
          "code": {
            "javascript": "// prompts.js\nfunction classifyReview(reviewText) {\n  return `Classify the sentiment of this review as positive, neutral, or negative.\\n\\nReview: \"${reviewText}\"`;\n}\n\nfunction summarizeTicket(ticketText) {\n  return `Summarize this support ticket in one sentence.\\n\\nTicket: \"${ticketText}\"`;\n}\n\nmodule.exports = { classifyReview, summarizeTicket };"
          },
          "runNote": "Import with: const prompts = require(\"./prompts\");",
          "practice": {
            "task": "Add a third function, extractUrgency(messageText), to the prompts module.",
            "hint": "Follow the same pattern as the other two functions, returning a template string.",
            "solution": "function extractUrgency(messageText) {\n  return `Rate the urgency of this message as low, medium, or high.\\n\\nMessage: \"${messageText}\"`;\n}"
          },
          "miniTask": "Move every prompt you have written in this module into a single prompts.js file with one exported function per prompt."
        }
      ]
    },
    {
      "id": "m4",
      "title": "Building an AI Chatbot",
      "short": "Chatbots",
      "description": "The request-response loop, conversation history, business context, and deployment.",
      "lessons": [
        {
          "id": "m4-l1",
          "title": "The Chatbot Request-Response Loop",
          "concept": "A chatbot's core logic is a loop: receive a user message, send it (plus context) to an AI model, receive a reply, send the reply back to the user, and wait for the next message.",
          "why": "Every chatbot, regardless of platform (web, WhatsApp, Slack), is built on this same underlying loop, with only the message transport changing.",
          "how": "Wrap the askAI function from Module 2 in a handler that receives an incoming message and returns the AI's reply.",
          "example": "A minimal chatbot handler function.",
          "code": {
            "javascript": "async function handleMessage(userMessage) {\n  const reply = await askAI(userMessage);\n  return reply;\n}\n\nhandleMessage(\"What are your business hours?\").then(console.log);"
          },
          "runNote": "Requires the askAI function from Module 2. Run with: node chatbot.js",
          "practice": {
            "task": "Modify handleMessage to prefix every AI reply with \"Bot: \" before returning it.",
            "hint": "Use a template string around the reply.",
            "solution": "async function handleMessage(userMessage) {\n  const reply = await askAI(userMessage);\n  return `Bot: ${reply}`;\n}"
          },
          "miniTask": "Call handleMessage with three different test messages and confirm each returns a reply."
        },
        {
          "id": "m4-l2",
          "title": "Maintaining Conversation History",
          "concept": "Without history, a model treats every message as the start of a new conversation. Passing prior messages back on each request lets the model respond with awareness of what was already said.",
          "why": "A chatbot that forgets everything after each message cannot handle follow-up questions like \"what about the second one?\"",
          "how": "Store messages in an array, append each new user message and AI reply, and send the growing array with every request.",
          "example": "A chatbot that keeps a running history array.",
          "code": {
            "javascript": "let history = [];\n\nasync function handleMessage(userMessage) {\n  history.push({ role: \"user\", content: userMessage });\n\n  const reply = await askAIWithHistory(history);\n  history.push({ role: \"assistant\", content: reply });\n\n  return reply;\n}"
          },
          "runNote": "askAIWithHistory would send the full history array to the API in the request body, following the provider's expected message format.",
          "practice": {
            "task": "Explain what would go wrong if history were reset to an empty array at the start of every handleMessage call instead of stored outside the function.",
            "hint": "Consider what \"outside the function\" versus \"inside the function\" means for a variable's lifetime.",
            "solution": "If history were reset inside handleMessage, it would only ever contain the current message, since the array would not persist between calls. The chatbot would have no memory of previous turns, defeating the purpose of tracking history at all."
          },
          "miniTask": "Add a limit so history only keeps the most recent 10 messages, to avoid sending an ever-growing request."
        },
        {
          "id": "m4-l3",
          "title": "Adding Context and Instructions",
          "concept": "A chatbot's system prompt can include business-specific context, such as available products, policies, or tone guidelines, so its answers stay grounded in real information instead of general knowledge.",
          "why": "A generic AI model does not know a specific business's hours, policies, or product catalog unless that information is explicitly included in the prompt.",
          "how": "Build the system prompt from a template that includes fixed reference information alongside behavior instructions.",
          "example": "A system prompt including business-specific context.",
          "code": {
            "javascript": "const systemPrompt = `You are a support assistant for CodeVent Digital.\nBusiness hours: Monday to Friday, 9am to 5pm WAT.\nOnly answer questions about our courses and services.\nIf asked something unrelated, politely redirect to a human agent.`;"
          },
          "practice": {
            "task": "Add a line to the system prompt above specifying that prices should always be given in Naira.",
            "hint": "Add another instruction sentence to the template string.",
            "solution": "const systemPrompt = `You are a support assistant for CodeVent Digital.\nBusiness hours: Monday to Friday, 9am to 5pm WAT.\nAlways state prices in Nigerian Naira (NGN).\nOnly answer questions about our courses and services.\nIf asked something unrelated, politely redirect to a human agent.`;"
          },
          "miniTask": "Write a system prompt with business context for a chatbot idea of your own."
        },
        {
          "id": "m4-l4",
          "title": "Deploying a Chatbot Backend",
          "concept": "A chatbot backend needs to run continuously, accepting incoming requests from whatever platform sends messages (a website widget, WhatsApp, or Slack) and returning replies. This is typically an Express server or a Cloudflare Worker.",
          "why": "A chatbot script that only runs once and exits cannot respond to messages that arrive at unpredictable times; it needs to be a running, listening service.",
          "how": "Wrap the chatbot logic in an Express route (from the Node.js course) or a Cloudflare Worker fetch handler that accepts POST requests with the incoming message.",
          "example": "An Express endpoint exposing the chatbot handler.",
          "code": {
            "javascript": "const express = require(\"express\");\nconst app = express();\napp.use(express.json());\n\napp.post(\"/chat\", async (req, res) => {\n  const reply = await handleMessage(req.body.message);\n  res.json({ reply });\n});\n\napp.listen(3000, () => console.log(\"Chatbot server running on port 3000\"));"
          },
          "runNote": "Install with: npm install express. Run with: node server.js, then send a POST request to /chat.",
          "practice": {
            "task": "Add validation to the /chat route that returns a 400 error if req.body.message is missing.",
            "hint": "Check if (!req.body.message) before calling handleMessage.",
            "solution": "app.post(\"/chat\", async (req, res) => {\n  if (!req.body.message) {\n    return res.status(400).json({ error: \"message is required\" });\n  }\n  const reply = await handleMessage(req.body.message);\n  res.json({ reply });\n});"
          },
          "miniTask": "Test your /chat endpoint with curl, sending a real message and confirming a reply comes back."
        }
      ]
    },
    {
      "id": "m5",
      "title": "Webhooks and Automation Triggers",
      "short": "Webhooks",
      "description": "What webhooks are, receiving and verifying them, and routing events to actions.",
      "lessons": [
        {
          "id": "m5-l1",
          "title": "What a Webhook Is",
          "concept": "A webhook is an HTTP request that one service sends to another automatically when a specific event happens, rather than the receiving service having to repeatedly ask if something changed.",
          "why": "Webhooks let an automation react to events in real time (a payment completed, a message received) instead of checking on a fixed schedule and missing anything in between.",
          "how": "A service you configure to send webhooks needs a URL to send them to. That URL points to your server or Worker, which reads the incoming request body to learn what happened.",
          "example": "A payment provider sending a webhook when a transaction completes.",
          "code": {
            "javascript": "// Payment provider sends a POST request like this to your webhook URL:\n// POST https://your-automation.example.com/webhook\n// Body: { \"event\": \"payment.success\", \"amount\": 5000, \"reference\": \"abc123\" }"
          },
          "practice": {
            "task": "Explain the difference between a webhook and polling (repeatedly checking an API for changes).",
            "hint": "One waits to be notified; the other repeatedly asks.",
            "solution": "A webhook is pushed to your server automatically the moment an event happens, at the cost of needing a publicly reachable URL. Polling repeatedly asks an API on a schedule whether anything changed, which is simpler to set up but introduces delay and wastes requests when nothing has changed."
          },
          "miniTask": "Find one service you use that supports webhooks and look up its webhook documentation page."
        },
        {
          "id": "m5-l2",
          "title": "Receiving a Webhook",
          "concept": "Receiving a webhook means running a server with an endpoint that accepts the incoming POST request and reads its JSON body.",
          "why": "This is the entry point for most real-time automations: the webhook handler is often the very first code that runs in the entire flow.",
          "how": "Create an Express route (or a Cloudflare Worker route) that accepts POST requests and parses the JSON body.",
          "example": "A minimal webhook receiver.",
          "code": {
            "javascript": "app.post(\"/webhook\", express.json(), (req, res) => {\n  console.log(\"Received event:\", req.body.event);\n  res.status(200).send(\"OK\");\n});"
          },
          "runNote": "Run with: node server.js. Test with curl -X POST -H \"Content-Type: application/json\" -d \"{\\\"event\\\":\\\"test\\\"}\" http://localhost:3000/webhook",
          "practice": {
            "task": "Explain why the handler responds with status 200 immediately, even before doing any AI processing.",
            "hint": "Consider what the sending service does if it does not receive a quick response.",
            "solution": "Most webhook senders expect a fast acknowledgment and will retry (or mark the webhook as failed) if a response does not arrive quickly. Responding immediately, then doing slower processing separately or asynchronously, avoids unnecessary retries and timeouts."
          },
          "miniTask": "Set up a local webhook receiver and test it by sending a fake event with curl."
        },
        {
          "id": "m5-l3",
          "title": "Verifying Webhook Requests",
          "concept": "Anyone can send a POST request to a public webhook URL. Verification confirms the request actually came from the expected service, usually by checking a signature header against a shared secret.",
          "why": "Without verification, an attacker could send fake webhook events to trigger unwanted actions in your automation.",
          "how": "Compare a signature sent in the request headers, computed by the sending service using a shared secret, against a signature you compute yourself the same way.",
          "example": "A simplified signature check pattern.",
          "code": {
            "javascript": "const crypto = require(\"crypto\");\n\nfunction isValidSignature(payload, signature, secret) {\n  const expected = crypto.createHmac(\"sha256\", secret).update(payload).digest(\"hex\");\n  return expected === signature;\n}"
          },
          "runNote": "The exact header name and signing method vary by provider; check the specific service's webhook documentation.",
          "practice": {
            "task": "Explain why comparing two strings with === is sometimes considered insufficient for signature comparison in production code.",
            "hint": "Look up 'timing attack' as a starting point.",
            "solution": "A simple === comparison can leak timing information about how many characters matched, which in theory allows an attacker to guess a valid signature byte by byte. Production code often uses a constant-time comparison function, such as crypto.timingSafeEqual, instead."
          },
          "miniTask": "Read your chosen webhook provider's documentation on how they sign requests and note the header name they use."
        },
        {
          "id": "m5-l4",
          "title": "Triggering Actions from Events",
          "concept": "Once a webhook event is received and verified, the automation typically branches based on the event type, running different logic for different kinds of events.",
          "why": "A single webhook endpoint often receives multiple event types (payment success, payment failure, refund), and each needs different handling.",
          "how": "Use a switch statement or if/else chain on the event type field to route to the correct handler function.",
          "example": "Routing different event types to different handlers.",
          "code": {
            "javascript": "app.post(\"/webhook\", express.json(), async (req, res) => {\n  res.status(200).send(\"OK\");\n\n  const event = req.body.event;\n\n  if (event === \"payment.success\") {\n    await handlePaymentSuccess(req.body);\n  } else if (event === \"payment.failed\") {\n    await handlePaymentFailure(req.body);\n  }\n});"
          },
          "runNote": "Note the response is sent before the async handling begins, following the fast-acknowledgment pattern from the previous lesson.",
          "practice": {
            "task": "Add a third branch that handles an event type \"refund.issued\" by calling a function handleRefund(req.body).",
            "hint": "Add another else if condition checking event === \"refund.issued\".",
            "solution": "else if (event === \"refund.issued\") {\n  await handleRefund(req.body);\n}"
          },
          "miniTask": "Sketch the event types your own webhook automation would need to handle, and name a handler function for each."
        }
      ]
    },
    {
      "id": "m6",
      "title": "Connecting AI to WhatsApp",
      "short": "WhatsApp",
      "description": "WhatsApp Business API concepts, sending and receiving messages, and building a WhatsApp AI assistant.",
      "lessons": [
        {
          "id": "m6-l1",
          "title": "WhatsApp Business API Concepts",
          "concept": "Sending and receiving WhatsApp messages programmatically requires a WhatsApp Business API provider (such as Meta's own API or a third-party gateway), a verified phone number, and an approved message template for the first message in a conversation window.",
          "why": "WhatsApp is not an open messaging protocol; access requires going through an approved API provider and following WhatsApp's messaging policies.",
          "how": "A provider issues API credentials and a phone number ID. Outgoing messages are sent as HTTP requests to the provider's API; incoming messages arrive as webhooks.",
          "example": "The general request-response relationship for WhatsApp automation.",
          "code": {
            "javascript": "// Outgoing: your server -> WhatsApp API provider -> customer's phone\n// Incoming: customer's phone -> WhatsApp API provider -> webhook to your server"
          },
          "practice": {
            "task": "Explain why an incoming WhatsApp message uses a webhook rather than your server directly asking WhatsApp for new messages.",
            "hint": "This follows the same trigger pattern covered in Module 5.",
            "solution": "A webhook lets your server react the instant a message arrives, without needing to repeatedly poll the WhatsApp API to check for new messages, which would be slower and less efficient."
          },
          "miniTask": "Look up one WhatsApp Business API provider and note what is required to get a phone number connected."
        },
        {
          "id": "m6-l2",
          "title": "Sending a WhatsApp Message Programmatically",
          "concept": "Sending a WhatsApp message is an HTTP POST request to the provider's API, including the recipient's phone number and the message content.",
          "why": "This is the outgoing half of a WhatsApp automation: after deciding what to say (often with AI), the automation needs to actually deliver it.",
          "how": "Send a POST request with the provider's required headers (usually an API key) and a JSON body specifying the recipient and message.",
          "example": "A function that sends a WhatsApp text message through a provider's API.",
          "code": {
            "javascript": "async function sendWhatsAppMessage(phoneNumber, text) {\n  const response = await fetch(\"https://api.whatsapp-provider.example.com/v1/messages\", {\n    method: \"POST\",\n    headers: {\n      \"Content-Type\": \"application/json\",\n      \"Authorization\": `Bearer ${process.env.WHATSAPP_API_KEY}`\n    },\n    body: JSON.stringify({ to: phoneNumber, type: \"text\", text: { body: text } })\n  });\n\n  return response.json();\n}"
          },
          "runNote": "Replace the URL and body shape with your chosen provider's actual API format. Run with: node send.js",
          "practice": {
            "task": "Explain why the phone number should be validated or formatted consistently (such as always including the country code) before sending.",
            "hint": "Consider what happens if the API rejects an improperly formatted number.",
            "solution": "WhatsApp APIs generally require a specific phone number format, often E.164 (country code plus number, no spaces or symbols). An improperly formatted number would cause the send request to fail, so validating or normalizing it beforehand avoids silent delivery failures."
          },
          "miniTask": "Write a small function that formats a local phone number into E.164 format by prepending a country code."
        },
        {
          "id": "m6-l3",
          "title": "Receiving and Responding to WhatsApp Messages",
          "concept": "Incoming WhatsApp messages arrive at your webhook endpoint as a POST request containing the sender's phone number and message content, in the format defined by your provider.",
          "why": "This is where the chatbot loop from Module 4 meets the WhatsApp channel: an incoming message triggers the AI response logic, then the reply is sent back through the WhatsApp send function.",
          "how": "Parse the sender and message text from the webhook payload, pass the message to the chatbot handler, then send the reply back to the same sender.",
          "example": "Connecting an incoming WhatsApp webhook to the chatbot handler.",
          "code": {
            "javascript": "app.post(\"/whatsapp-webhook\", express.json(), async (req, res) => {\n  res.status(200).send(\"OK\");\n\n  const { from, text } = req.body.message;\n  const reply = await handleMessage(text);\n  await sendWhatsAppMessage(from, reply);\n});"
          },
          "runNote": "The exact shape of req.body depends on your WhatsApp provider; check their webhook payload documentation.",
          "practice": {
            "task": "Explain why sendWhatsAppMessage is called with 'from', not a hardcoded phone number.",
            "hint": "Consider that the automation needs to reply to whoever actually sent the message.",
            "solution": "Using 'from' sends the reply back to whichever customer sent the original message. A hardcoded number would send every reply to the same fixed phone number regardless of who actually messaged, which would be incorrect for a multi-customer chatbot."
          },
          "miniTask": "Sketch the full request path for one incoming WhatsApp message, from webhook to AI to reply, in your own words."
        },
        {
          "id": "m6-l4",
          "title": "Building a WhatsApp AI Assistant",
          "concept": "A complete WhatsApp AI assistant combines a webhook receiver, per-user conversation history, a system prompt with business context, and the WhatsApp send function into one working flow.",
          "why": "This is the practical combination of everything covered in Modules 2 through 6: AI APIs, prompts, chatbot loops, webhooks, and WhatsApp delivery.",
          "how": "Track conversation history per phone number (not globally), since each customer's conversation should stay separate from every other customer's.",
          "example": "Storing conversation history keyed by phone number.",
          "code": {
            "javascript": "const conversations = {};\n\napp.post(\"/whatsapp-webhook\", express.json(), async (req, res) => {\n  res.status(200).send(\"OK\");\n\n  const { from, text } = req.body.message;\n\n  if (!conversations[from]) {\n    conversations[from] = [];\n  }\n\n  conversations[from].push({ role: \"user\", content: text });\n  const reply = await askAIWithHistory(conversations[from]);\n  conversations[from].push({ role: \"assistant\", content: reply });\n\n  await sendWhatsAppMessage(from, reply);\n});"
          },
          "runNote": "In-memory storage like this resets when the server restarts. A real deployment would persist conversations to a database.",
          "practice": {
            "task": "Explain what would go wrong if conversations were a single shared array instead of an object keyed by phone number.",
            "hint": "Consider two different customers messaging around the same time.",
            "solution": "A single shared array would mix every customer's messages together, so the AI would see other customers' conversation history mixed into the context, producing confused or incorrect replies and potentially leaking one customer's information into another's conversation."
          },
          "miniTask": "Extend the conversations object with a maximum history length per phone number, matching the limit from Module 4."
        }
      ]
    },
    {
      "id": "m7",
      "title": "No-Code Workflow Automation",
      "short": "No-Code",
      "description": "What no-code tools do, when to use them versus custom code, and combining both.",
      "lessons": [
        {
          "id": "m7-l1",
          "title": "What No-Code Automation Tools Do",
          "concept": "No-code tools (such as Make.com or Zapier) let you connect apps and services through a visual interface of triggers and actions, without writing a server or handling HTTP requests directly.",
          "why": "For many automations, especially ones connecting well-supported apps, a no-code tool builds and hosts the automation faster than writing custom code.",
          "how": "Configure a trigger (an event from one app), any number of processing steps (including calling an AI API), and an action (an effect in another app), all inside the tool's interface.",
          "example": "A no-code flow: new form submission (trigger) -> AI summarizes the response (processing) -> summary posted to a team chat (action).",
          "practice": {
            "task": "Explain one advantage and one limitation of building an automation with a no-code tool instead of custom code.",
            "hint": "Consider setup speed versus control over edge cases.",
            "solution": "Advantage: much faster to set up for common integrations, with no server to host or maintain. Limitation: less control over exact logic and error handling, and can become expensive or awkward at high volume or for highly custom behavior."
          },
          "miniTask": "Look at one no-code automation tool's app directory and find two apps you would want to connect."
        },
        {
          "id": "m7-l2",
          "title": "Triggers, Actions, and Steps",
          "concept": "No-code tools use the same trigger-processing-action structure covered in Module 1, expressed as a sequence of visual steps rather than code.",
          "why": "Recognizing this shared structure means everything learned about planning automations with code applies directly to planning them in a no-code tool.",
          "how": "Each step in a no-code flow takes the output of the previous step as its input, similar to chaining function calls.",
          "example": "A three-step flow: Trigger (new email) -> Step 1 (AI extracts key details) -> Step 2 (create a task in a project tool with those details).",
          "practice": {
            "task": "Map the WhatsApp AI assistant from Module 6 onto trigger-step-step-action terms, as if building it in a no-code tool.",
            "hint": "The webhook becomes the trigger; the AI call and reply become separate steps.",
            "solution": "Trigger: incoming WhatsApp message. Step 1: send the message (with history) to the AI model. Step 2: format the AI's reply. Action: send the reply back via the WhatsApp API."
          },
          "miniTask": "Diagram one of your own automation ideas as a trigger followed by two or three steps."
        },
        {
          "id": "m7-l3",
          "title": "When to Use No-Code vs Custom Code",
          "concept": "No-code tools fit well-supported, moderate-volume automations connecting standard apps. Custom code fits automations needing complex logic, high volume, tight cost control, or integration with a service the no-code tool doesn't support.",
          "why": "Choosing the wrong approach either wastes time building custom infrastructure for something a no-code tool already solves, or hits a wall when a no-code tool cannot express the needed logic.",
          "how": "Check whether the required apps are supported, whether the logic is simple branching or something more complex, and whether the expected volume fits the tool's pricing model, before choosing.",
          "example": "A simple \"new form response -> AI summary -> Slack message\" flow fits a no-code tool well. A WhatsApp AI assistant with per-user conversation history and custom retry logic fits custom code better.",
          "practice": {
            "task": "Decide whether each scenario fits no-code or custom code: (1) posting a daily AI-generated quote to a Discord channel, (2) a WhatsApp assistant with saved conversation memory per customer.",
            "hint": "Consider the complexity of state (memory) needed in each case.",
            "solution": "(1) No-code fits well: a simple scheduled trigger and one action, no custom state needed. (2) Custom code fits better: per-customer conversation memory and more complex logic are harder to express cleanly in a no-code tool."
          },
          "miniTask": "Decide, with a one-sentence justification, whether your own automation idea fits no-code or custom code."
        },
        {
          "id": "m7-l4",
          "title": "Combining No-Code Tools with Custom AI Logic",
          "concept": "No-code tools and custom code are not mutually exclusive. A no-code flow can call a custom-built API endpoint (like a Cloudflare Worker) as one of its steps, combining the tool's app connections with custom AI logic.",
          "why": "This hybrid approach uses a no-code tool's easy integrations for the parts that are simple, while keeping complex logic in code you control.",
          "how": "Deploy the custom logic as an HTTP endpoint, then configure the no-code tool's step to call that endpoint as if it were any other app's action.",
          "example": "A no-code flow triggers on a new form submission, then calls a custom Cloudflare Worker endpoint that runs a more complex AI prompt than the no-code tool's built-in AI step supports, and the flow continues with the Worker's response.",
          "practice": {
            "task": "Describe one reason you might build a custom endpoint instead of using a no-code tool's built-in AI integration step.",
            "hint": "Consider prompt complexity, response format needs, or provider choice.",
            "solution": "A custom endpoint gives full control over the exact prompt, the specific AI provider and model used, structured JSON output parsing, and any retry or error-handling logic — control a no-code tool's built-in AI step typically does not expose."
          },
          "miniTask": "Sketch a hybrid flow: one no-code trigger and action, with one custom code step in between."
        }
      ]
    },
    {
      "id": "m8",
      "title": "Practical Projects",
      "short": "Projects",
      "description": "Four progressively harder projects: chat widget, WhatsApp assistant, content pipeline, conditional alerts.",
      "isProjectModule": true,
      "projects": [
        {
          "id": "m8-p1",
          "title": "Website AI Chat Widget",
          "objective": "Build a backend endpoint that powers a simple AI chat widget for a website, answering visitor questions with business-specific context.",
          "problem": "A business wants visitors to get instant answers to common questions without a human agent being online at all times.",
          "requirements": [
            "An Express POST /chat endpoint accepting a message and a session ID",
            "Per-session conversation history, keyed by session ID",
            "A system prompt containing at least three pieces of business-specific context",
            "Input validation rejecting empty messages",
            "Correct error handling if the AI API call fails"
          ],
          "code": "const express = require(\"express\");\nconst app = express();\napp.use(express.json());\n\nconst sessions = {};\n\nconst systemPrompt = `You are a support assistant for an online store.\nShipping takes 3 to 5 business days.\nReturns are accepted within 14 days of delivery.\nOnly answer questions about orders, shipping, and returns.`;\n\napp.post(\"/chat\", async (req, res) => {\n  const { message, sessionId } = req.body;\n  if (!message || !sessionId) {\n    return res.status(400).json({ error: \"message and sessionId are required\" });\n  }\n\n  if (!sessions[sessionId]) sessions[sessionId] = [];\n  sessions[sessionId].push({ role: \"user\", content: message });\n\n  try {\n    const reply = await askAIWithHistory(systemPrompt, sessions[sessionId]);\n    sessions[sessionId].push({ role: \"assistant\", content: reply });\n    res.json({ reply });\n  } catch (err) {\n    res.status(502).json({ error: \"AI service unavailable\" });\n  }\n});\n\napp.listen(3000, () => console.log(\"Chat widget backend running\"));",
          "steps": [
            "Set up the Express server and /chat route",
            "Write a system prompt with real business context",
            "Implement per-session history storage",
            "Add input validation",
            "Add error handling around the AI API call",
            "Test the full conversation flow with multiple messages in one session"
          ],
          "expectedResult": "Sending several messages with the same sessionId produces contextually consistent replies that remember earlier turns in that session.",
          "challenge": "Add a session expiry so history older than 30 minutes is cleared automatically."
        },
        {
          "id": "m8-p2",
          "title": "WhatsApp AI Assistant",
          "objective": "Build a working WhatsApp AI assistant that receives messages via webhook and replies using an AI model.",
          "problem": "A business wants to offer instant WhatsApp responses to common customer questions outside of business hours.",
          "requirements": [
            "A POST webhook endpoint matching your WhatsApp provider's expected format",
            "Per-phone-number conversation history",
            "A system prompt with business context and a clear scope boundary",
            "Outgoing replies sent through your provider's send API",
            "Graceful handling of a failed AI call, replying with a fallback message instead of nothing"
          ],
          "code": "app.post(\"/whatsapp-webhook\", express.json(), async (req, res) => {\n  res.status(200).send(\"OK\");\n\n  const { from, text } = req.body.message;\n  if (!conversations[from]) conversations[from] = [];\n  conversations[from].push({ role: \"user\", content: text });\n\n  let reply;\n  try {\n    reply = await askAIWithHistory(systemPrompt, conversations[from]);\n  } catch (err) {\n    reply = \"Sorry, I'm having trouble right now. A team member will follow up shortly.\";\n  }\n\n  conversations[from].push({ role: \"assistant\", content: reply });\n  await sendWhatsAppMessage(from, reply);\n});",
          "steps": [
            "Set up a WhatsApp Business API provider account and get webhook credentials",
            "Build the webhook receiver endpoint",
            "Connect it to per-number conversation history",
            "Add the AI system prompt with business context",
            "Add fallback handling for AI failures",
            "Test by sending a real WhatsApp message to your connected number"
          ],
          "expectedResult": "Sending a WhatsApp message to the connected number produces an AI-generated reply within a few seconds.",
          "challenge": "Add a keyword trigger (such as \"agent\") that stops the AI and flags the conversation for human follow-up instead of replying automatically."
        },
        {
          "id": "m8-p3",
          "title": "Automated Content Summary Pipeline",
          "objective": "Build a scheduled automation that fetches new content (such as recent articles or reviews) and posts an AI-generated summary to a destination.",
          "problem": "A team wants a daily digest of new activity without manually reading through everything themselves.",
          "requirements": [
            "A scheduled trigger (a cron-style schedule or a Cloudflare Worker Cron Trigger)",
            "A data-fetching step that retrieves the new content to summarize",
            "An AI summarization step using a clear, consistent prompt",
            "A delivery step that posts the summary somewhere (a webhook, an email API, or a chat platform)"
          ],
          "code": "async function runDailyDigest() {\n  const items = await fetchRecentItems();\n  if (items.length === 0) return;\n\n  const prompt = `Summarize these items in a short daily digest:\\n\\n${items.map((i) => `- ${i.title}: ${i.text}`).join(\"\\n\")}`;\n  const summary = await askAI(prompt);\n\n  await postToDestination(summary);\n}\n\n// Run this on a schedule, e.g. a cron job or a Cloudflare Worker Cron Trigger\nrunDailyDigest();",
          "steps": [
            "Write fetchRecentItems() against your real data source",
            "Build the summarization prompt",
            "Write postToDestination() for wherever the digest should go",
            "Wire the whole flow into runDailyDigest()",
            "Set up a real schedule to trigger it automatically"
          ],
          "expectedResult": "Running the script (or letting the schedule trigger it) produces one readable summary of the day's new items, delivered to the chosen destination.",
          "challenge": "Skip sending a digest entirely if there is nothing new, instead of sending an empty summary."
        },
        {
          "id": "m8-p4",
          "title": "Scheduled Automation with Conditional Actions",
          "objective": "Build an automation that runs on a schedule, uses AI to make a decision, and only takes action when a specific condition is met.",
          "problem": "A team wants to be notified only when something actually needs attention, not on a fixed schedule regardless of whether anything changed.",
          "requirements": [
            "A scheduled trigger",
            "A data check step (such as reading current values from an API)",
            "An AI evaluation step that decides whether the situation warrants action",
            "A conditional action that only fires when the AI's evaluation says so"
          ],
          "code": "async function checkAndAlert() {\n  const data = await fetchCurrentMetrics();\n  const prompt = `Given this data, should the team be alerted? Respond with ONLY valid JSON: {\"alert\": true|false, \"reason\": \"...\"}\\n\\nData: ${JSON.stringify(data)}`;\n\n  const result = JSON.parse(await askAI(prompt));\n\n  if (result.alert) {\n    await sendAlert(result.reason);\n  }\n}\n\ncheckAndAlert();",
          "steps": [
            "Write fetchCurrentMetrics() against a real data source",
            "Build the evaluation prompt requesting structured JSON output",
            "Parse the AI's decision safely, handling malformed JSON",
            "Write sendAlert() for your chosen notification channel",
            "Set up a real schedule and confirm alerts only fire when warranted"
          ],
          "expectedResult": "The automation runs silently when nothing needs attention, and sends a clear alert with a stated reason when the AI determines action is needed.",
          "challenge": "Add a cooldown so the same alert cannot fire more than once within a set time window."
        }
      ]
    },
    {
      "id": "m9",
      "title": "Final Project",
      "short": "Capstone",
      "description": "AI Automation Capstone Project.",
      "isCapstone": true,
      "capstone": {
        "id": "m9-capstone",
        "title": "AI Automation Capstone Project",
        "objective": "Design and build a complete AI automation end to end: a real trigger, an AI processing step with a well-designed prompt, and a real destination action, combining everything from every prior module.",
        "requirements": [
          "A written one-paragraph plan stating the trigger, the AI's exact job, and the action, before building",
          "A real trigger: a webhook, a schedule, or a form submission",
          "An AI API call using a dedicated prompt template function, not an inline prompt string",
          "Structured (JSON) output from the AI where the result needs to drive a decision",
          "Error handling for both the trigger source and the AI API call",
          "A real destination action (a message sent, a record created, a file written)",
          "Environment variables used for every API key and secret, none hardcoded"
        ],
        "checklist": [
          "The one-paragraph plan clearly separates trigger, AI's job, and action",
          "The automation runs from a real trigger, not just manually invoked for testing",
          "Prompts are built from a template function, not inline strings scattered through the code",
          "JSON output (where used) is parsed inside a try/catch",
          "A failed AI API call does not crash the automation or leave it in a broken state",
          "No API keys or secrets appear anywhere in the code, only in environment variables",
          "The destination action was tested and confirmed to actually happen",
          "The code is organized into clear, named functions rather than one long script",
          "At least one edge case (empty input, API failure, rate limit) was deliberately tested",
          "The automation was run successfully at least three times with different real inputs"
        ]
      }
    }
  ]
};
