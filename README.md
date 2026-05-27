<p align = "center" draggable=”false” ><img src="https://github.com/AI-Maker-Space/LLM-Dev-101/assets/37101144/d1343317-fa2f-41e1-8af1-1dbb18399719" 
     width="200px"
     height="auto"/>
</p>


## <h1 align="center" id="heading"> 👋 Welcome to the AI Engineer Challenge</h1>

## 🤖 Your First Vibe Coding LLM Application

> If you are a novice, and need a bit more help to get your dev environment off the ground, check out this [Setup Guide](docs/GIT_SETUP.md). This guide will walk you through the 'git' setup you need to get started.

> For additional context on LLM development environments and API key setup, you can also check out our [Interactive Dev Environment for LLM Development](https://github.com/AI-Maker-Space/Interactive-Dev-Environment-for-AI-Engineers).

In this repository, we'll walk you through the steps to create a LLM (Large Language Model) powered application with a vibe-coded frontend!

Are you ready? Let's get started!

<details>
  <summary>🖥️ Accessing "gpt-4.1-mini" (ChatGPT) like a developer</summary>

1. Head to [this notebook](https://colab.research.google.com/drive/1sT7rzY_Lb1_wS0ELI1JJfff0NUEcSD72?usp=sharing) and follow along with the instructions!

2. Complete the notebook and try out your own system/assistant messages!

That's it! Head to the next step and start building your application!

</details>


<details>
  <summary>🏗️ Forking & Cloning This Repository</summary>

Before you begin, make sure you have:

1. 👤 A GitHub account (you'll need to replace `YOUR_GITHUB_USERNAME` with your actual username)
2. 🔧 Git installed on your local machine
3. 💻 A code editor (like Cursor, VS Code, etc.)
4. ⌨️ Terminal access (Mac/Linux) or Command Prompt/PowerShell (Windows)
5. 🔑 A GitHub Personal Access Token (for authentication)

Got everything in place? Let's move on!

1. Fork [this](https://github.com/AI-Maker-Space/The-AI-Engineer-Challenge) repo!

     ![image](https://i.imgur.com/bhjySNh.png)

1. Clone your newly created repo.

     ``` bash
     # First, navigate to where you want the project folder to be created
     cd PATH_TO_DESIRED_PARENT_DIRECTORY

     # Then clone (this will create a new folder called The-AI-Engineer-Challenge)
     git clone git@github.com:<YOUR GITHUB USERNAME>/The-AI-Engineer-Challenge.git
     ```

     > Note: This command uses SSH. If you haven't set up SSH with GitHub, the command will fail. In that case, use HTTPS by replacing `git@github.com:` with `https://github.com/` - you'll then be prompted for your GitHub username and personal access token.

2. Verify your git setup:

     ```bash
     # Check that your remote is set up correctly
     git remote -v

     # Check the status of your repository
     git status

     # See which branch you're on
     git branch
     ```

     <!-- > Need more help with git? Check out our [Detailed Git Setup Guide](docs/GIT_SETUP.md) for a comprehensive walkthrough of git configuration and best practices. -->

3. Open the freshly cloned repository inside Cursor!

     ```bash
     cd The-AI-Engineering-Challenge
     cursor .
     ```

4. Check out the existing backend code found in `/api/index.py`

</details>

<details>
  <summary>⚙️ Backend Setup with uv</summary>

1. Install the [`uv`](https://github.com/astral-sh/uv) package manager (`pip install uv`). `uv` will download and manage Python 3.12 for you the first time you run a project command.
2. From the project root, install dependencies with `uv sync`. This creates `.venv/` (and fetches Python 3.12 automatically if needed).
3. Set your OpenAI API key in the shell before running the server, for example `export OPENAI_API_KEY=sk-...`.
4. Start the backend directly from the project root with `uv run uvicorn api.index:app --reload`. The server will run on `http://localhost:8000` with auto-reload enabled for development.
5. Additional backend details live in `api/README.md`.

</details>

<details>
  <summary>🔥Setting Up for Vibe Coding Success </summary>

While it is a bit counter-intuitive to set things up before jumping into vibe-coding - it's important to remember that there exists a gradient betweeen AI-Assisted Development and Vibe-Coding. We're only reaching *slightly* into AI-Assisted Development for this challenge, but it's worth it!

1. Check out the rules in `.cursor/rules/` and add theme-ing information like colour schemes in `frontend-rule.mdc`! You can be as expressive as you'd like in these rules!
2. We're going to index some docs to make our application more likely to succeed. To do this - we're going to start with `CTRL+SHIFT+P` (or `CMD+SHIFT+P` on Mac) and we're going to type "custom doc" into the search bar. 

     ![image](https://i.imgur.com/ILx3hZu.png)
3. We're then going to copy and paste `https://nextjs.org/docs` into the prompt.

     ![image](https://i.imgur.com/psBjpQd.png)

4. We're then going to use the default configs to add these docs to our available and indexed documents.

     ![image](https://i.imgur.com/LULLeaF.png)

5. After that - you will do the same with Vercel's documentation. After which you should see:

     ![image](https://i.imgur.com/hjyXhhC.png) 

</details>

<details>
  <summary>😎 Vibe Coding a Front End for the FastAPI Backend</summary>

1. Use `Command-L` or `CTRL-L` to open the Cursor chat console. 

2. Set the chat settings to the following:

     ![image](https://i.imgur.com/LSgRSgF.png)

3. Ask Cursor to create a frontend for your application. Iterate as much as you like!

4. Run the frontend using the instructions Cursor provided. 

> NOTE: If you run into any errors, copy and paste them back into the Cursor chat window - and ask Cursor to fix them!

> NOTE: You have been provided with a backend in the `/api` folder - please ensure your Front End integrates with it!

</details>

<details>
  <summary>🚀 Deploying Your First LLM-powered Application with Vercel</summary>

1. Ensure you have signed into [Vercel](https://vercel.com/) with your GitHub account.

2. Ensure you have `npm` (this may have been installed in the previous vibe-coding step!) - if you need help with that, ask Cursor!

3. Run the command:

     ```bash
     npm install -g vercel
     ```

4. Run the command:

     ```bash
     vercel
     ```

5. Follow the in-terminal instructions. (Below is an example of what you will see!)

     ![image](https://i.imgur.com/D1iKGCq.png)

6. Once the build is completed - head to the provided link and try out your app!

> NOTE: Remember, if you run into any errors - ask Cursor to help you fix them!

### Vercel Link to Share

You'll want to make sure you share you *domains* hyperlink to ensure people can access your app!

![image](https://i.imgur.com/mpXIgIz.png)

> NOTE: Test this is the public link by trying to open your newly deployed site in an Incognito browser tab!

</details>

<details>
     <summary>🧪 Vibe Check Your LLM App</summary>

### 🤔 What is a Vibe Check?

Now that you’ve built and deployed your first LLM-powered application, it’s time to evaluate it.

In this section, you’ll run a **“vibe check”** — a lightweight, practical way to test how well your application performs across common tasks.

Think of it as a **first pass to catch obvious issues** before deeper evaluation.

> 💡 You will complete this directly in this README. 

---

## 🏗️ Activity #1: General Capability Vibe Check

Run the following prompts through your app.

For each prompt Identify what capability is being tested (e.g., *summarization ability, reasoning, creativity*)

---

**1. Prompt:**  
Explain the concept of object-oriented programming in simple terms to a complete beginner.  
**Aspect Tested:**  Concept explanation / educational clarity

**Response:**  
Think of a program like a little world filled with things. Object-oriented programming (OOP) is a way to build that world by modeling real-life “things” as objects.

Core ideas:
- Objects: Little bundles that hold data and know how to do actions. Example: a Car object has a color (data) and can start or stop (actions).
- Class: The blueprint for making objects. A Car class describes what every car should know and do; each actual car you create from it is an object (also called an instance).
- Properties (also called attributes/fields): The data an object holds, like color or speed.
- Methods: The actions an object can do, like start(), stop(), accelerate().

Why OOP is useful:
- It matches how we think about the world (nouns and verbs).
- It keeps code organized and easier to change.
- You can reuse and extend code instead of rewriting it.

The “big four” ideas, simply:
- Encapsulation: Keep related data and actions together, and hide the messy internals. You use a car’s pedals without opening the engine.
- Inheritance: Make new, specialized classes from existing ones. A SportsCar is a kind of Car, so it gets Car’s features and can add its own.
- Polymorphism: Same action, different specific behavior. start() works for any Car; an ElectricCar and a GasCar both “start,” but in their own way.
- Abstraction: Show only what matters, hide details. You see the steering wheel, not the wiring.

Tiny example (plain English):
- Class: Car
  - Properties: color, speed = 0
  - Methods: start(), accelerate(amount), stop()
- Class: ElectricCar (inherits from Car)
  - Methods: start() — checks battery first, then starts
- Use it:
  - myCar = new Car("blue")
  - myCar.start()
  - myCar.accelerate(10)

How to practice (beginner-friendly):
- Think in nouns and verbs: Dog (noun) with bark(), eat() (verbs).
- Start tiny: make a class for a Pet or a ToDoItem with a couple of properties and methods.
- Ask these two questions for each class:
  1) What does it know? (properties)
  2) What can it do? (methods)
- Don’t stress about “getting it perfect.” Naming things and moving responsibilities between classes is part of the learning.

You’ve got this—build small, real-world examples, and the ideas will click quickly.

---

**2. Prompt:**  
Read the following paragraph and provide a concise summary of the key points…  
**Aspect Tested:**  Summarization / extraction of main points

**Response:**  
Renewable energy is growing rapidly, driving more investment and policy support. Countries are prioritizing wind and solar to cut emissions and boost energy resilience, while research targets storage and grid modernization to handle variable power generation.

---

**3. Prompt:**  
Write a short, imaginative story (100–150 words) about a robot finding friendship in an unexpected place.  
**Aspect Tested:**  Creativity / narrative generation

**Response:**  
At night, the library hums like a sleeping beehive. The reshelving robot patrols the stacks, rubber treads whispering. It finds the first hello in pencil, in the margin of a book about constellations: “This one looks like a kite.” Next week, in a cookbook: “Burnt sugar still tastes like celebration.” Different books, same looping hand, breadcrumbs across genres.

The robot begins to answer in its own quiet way: straightened bookmarks like arrows, paper cranes perched on spines, a pressed ginkgo leaf that says, without words, “I see you.”

One dawn, wedged in a poetry binding, a note: “To whoever leaves leaves: meet me by the lost-and-found.” There, beside orphaned mittens, stands the note-writer with ink-smudged fingers. The robot extends a dust cloth like a flag of truce. A human laughs. In the hush, an unexpected friendship checks itself in.

---

**4. Prompt:**  
If a store sells apples in packs of 4 and oranges in packs of 3, how many packs of each do I need to buy to get exactly 12 apples and 9 oranges?  
**Aspect Tested:**  Arithmetic / problem solving

**Response:**  
3 packs of apples and 3 packs of oranges.

- Apples: 12 ÷ 4 = 3 packs
- Oranges: 9 ÷ 3 = 3 packs

Nice and tidy!

---

**5. Prompt:**  
Rewrite the following paragraph in a professional, formal tone…  
**Aspect Tested:**  Tone transformation / rewriting

**Response:**  
Dear Team,

Please prioritize finalizing this deliverable. The client requires the draft by tomorrow; kindly provide timely progress updates to keep everyone informed.

---

### ❓Question #1

Do the answers appear to be correct and useful?

**Your Answer:**  
Yes. The assistant produced correct, clear, and actionable responses for each prompt: concise explanations for conceptual questions, an accurate summary, a creative short story, correct arithmetic, and a polished formal rewrite. Responses are practical and well-structured; for code or technical exercises you may optionally ask for explicit code examples or step-by-step demonstrations.

---

## 🏗️ Activity #2: Personal Use Vibe Check

Now test your app with **real-world prompts that are relevant to your use case**.

---

**Prompt:**  
I have a big job interview next week and I'm really nervous. How can I prepare and manage my anxiety in the days before the interview?

**Result:**  
Feeling is completely normal—and manageable. The assistant provides a focused plan: clarify the job requirements; craft 5 STAR stories; prepare a 60-second intro; practice out loud; prepare logistics (outfit, tech, route). It also gives a daily anxiety-management routine (breathing, grounding, visualization, reframing) and a 5-day prep checklist and day-of routine. The guidance is practical, behavior-focused, and offers follow-ups (e.g., help drafting STAR stories).

---

**Prompt:**  
I struggle to focus while working from home. Can you suggest a 30-day plan to improve focus and build better habits?

**Result:**  
The assistant returned a detailed 30-day plan organized by week: foundations (workspace, notifications, anchors), capacity building (blocks, breathing, task sizing), resilience (sleep, energy, meeting hygiene), and lock-in (longer blocks, accountability, automation). It includes daily non-negotiables, a typical day template, tracking suggestions, tools, and troubleshooting tips.

---

**Prompt:**  
I often feel overwhelmed by my to-do list. Give me a short, practical daily routine to reduce overwhelm and make progress.

**Result:**  
A concise daily routine: 10-minute start (breathe, brain-dump, pick Big 3), 3-minute plan + setup, two focus blocks, quick admin sweep, reset micro-habits between blocks, and a shutdown ritual. Includes an "Overwhelm Rescue" micro-routine and rules (daily list = 3 items max).

---

### ❓Question #2

Are the vibes of your assistant aligned with your expectations? Why or why not?

**Your Answer:**  
Yes. The assistant is calm, supportive, and practical—matching the mental-coach persona. Advice focuses on small, actionable steps and habits rather than overwhelming detail. It offers empathetic framing and concrete routines that feel appropriate for personal-use coaching.

---

## 🏗️ Activity #3: Capability Gaps Vibe Check

Now test your app with prompts that require **capabilities it may not have yet**, such as:
- Real-time data
- Memory
- External tools

Examples:
- “What does my schedule look like tomorrow?”
- “What time should I leave for the airport?”

---

**Prompt:**  
What time should I leave for the airport tomorrow to catch my 3:30 PM flight from San Francisco, considering current traffic?

**Result:**  
The assistant correctly noted it cannot access live traffic and provided a safe planning heuristic: arrive 2 hours before domestic flights (3 hours for international), add buffers for parking/rental returns, example leave-by times from typical neighborhoods, and a day-of check recommendation to consult maps 30–45 minutes before leaving. It also asks for details (airport, neighborhood, checked bags, TSA PreCheck) to provide a precise time.

---

**Prompt:**  
Check my calendar and tell me what meetings I have next Tuesday.

**Result:**  
The assistant explained it cannot access the user's calendar directly and offered alternatives: paste events, provide steps to view Tuesday in a chosen calendar app, or share details so it can summarize. It also offered to flag conflicts and suggest buffers if events are provided.

---

### ❓Question #3

What are some limitations of your application?

**Your Answer:**  
<!-- Write your answer here -->

---

## 🚀 (Optional) Improve Your App

Based on your vibe check, try improving your application:
- Adjust your prompt
- Change the model
- Add features

Then rerun your vibe check and document:

---

**Adjustments Made:**  
<!-- Describe what you changed -->

**Results:**  
<!-- What improved? What didn’t? -->

---

## 📦 Submission Instructions

1. Complete this section directly in your README
2. Commit and push your changes to GitHub
3. Share your **repo link + deployed Vercel app**








</details>

### 🎉 Congratulations! 

You just deployed your first LLM-powered application! 🚀🚀🚀 Get on linkedin and post your results and experience! Make sure to tag us at @AIMakerspace!

Here's a template to get your post started!

```
🚀🎉 Exciting News! 🎉🚀

🏗️ Today, I'm thrilled to announce that I've successfully built and shipped my first-ever LLM using the powerful combination of , and the OpenAI API! 🖥️

Check it out 👇
[LINK TO APP]

A big shoutout to the @AI Makerspace for all making this possible. Couldn't have done it without the incredible community there. 🤗🙏

Looking forward to building with the community! 🙌✨ Here's to many more creations ahead! 🥂🎉

Who else is diving into the world of AI? Let's connect! 🌐💡

#FirstLLMApp 
```
