---
title: "baml killed my llm glue code"
date: "2026-08-20"
desc: "Replaced hand-rolled JSON parsing, retries and provider switching in agentique with BAML. Prompts now live next to their tests."
---

spent a weekend pulling the llm layer of [agentique](https://agentique.ch) apart. before: every call had its own "please output valid json", a parser, a repair step for when it didn't, and a retry wrapper. after: a `.baml` file per task, typed in and typed out.

the part that actually changed how i work is that the prompt and its tests sit in the same file, and the editor runs them like unit tests. switching gemini → gpt-oss is now a one-line edit i can verify in ten seconds.

## the shape of it

<pre><code><span class="k">function</span> <span class="fn">ImproveTitles</span>(articles: <span class="t">ArticleInput</span>[]) -> <span class="t">TitleFix</span>[] {
  <span class="k">client</span> GeneralClient
  <span class="k">prompt</span> #"
    <span class="c">// system + user turns, jinja over the input list</span>
  "#
}

<span class="k">client</span>&lt;llm&gt; <span class="fn">GeneralClient</span> {
  <span class="k">provider</span> fallback
  <span class="k">options</span> { strategy [GeminiFlash, NvidiaGptOss, NvidiaMinistral] }
}</code></pre>

the fallback strategy lives in the dsl, not in my application code. if gemini is down the next provider is tried and `ImproveTitles(...)` never knows. wish i'd done this three months earlier.
