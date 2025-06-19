# Human in the Loop: When Your Portfolio Becomes a Conversation

*How I automated the mechanics of portfolio presentation while amplifying the human story within—and what this reveals about intention-driven design.*

---

Here's a question that's been haunting me: **What happens to the human in the loop when we automate our professional presentation?**

Most developer portfolios today are automated in the worst possible way—static templates that flatten years of nuanced experience into bullet points and GitHub contribution graphs. We've optimized for parsing by algorithms (ATS systems, recruiter keyword searches) while completely losing the human story.

So I built something different. Something that puts the human **back** in the loop.

## The Automation Paradox

Marcel Quest is technically a highly automated system—React components dynamically rendering content, multi-language translations switching in real-time, PDF generation on-demand. But here's the twist: **every automation serves to amplify human intention, not replace it**.

Traditional approach:
- **Human creates** → **System displays** → **Human consumes**

Marcel Quest approach:
- **Human creates** → **System facilitates dialogue** → **Human explores and discovers**

The automation isn't doing the thinking. It's creating space for thinking to happen.

## Intentional Friction

Most portfolio optimizations focus on reducing friction—faster load times, cleaner layouts, easier scanning. But what if some friction is **intentional**? What if making someone slow down and engage actually serves the human story better?

The typing animation in Marcel Quest forces a pause. The dialogue options require a choice. The branching conversations demand attention. Each "inefficiency" is a deliberate attempt to restore the human tempo to digital interaction.

**Question for you**: *When was the last time a website made you actually think about the person behind it, rather than just extract information from it?*

## The Loop Between Story and System

Here's where it gets interesting. The technical architecture mirrors the philosophical intention:

```typescript
// The system responds to human choice, not predetermined paths
const handleOptionSelect = (userChoice) => {
  // Human intention drives the narrative
  setQuestState({
    currentMessage: userChoice.response,
    // System facilitates the next layer of discovery
    currentOptions: userChoice.nextOptions || mainOptions
  });
};
```

The code itself embodies "human in the loop" thinking. No AI is generating responses. No algorithm is deciding what's important. **Human intention (my choice of what stories to tell) meets human curiosity (the visitor's choice of what to explore) through an automated system that gets out of the way.**

## Consciousness in Code

Building Marcel Quest raised deeper questions about intentionality in our tools:

**Why do we accept that professional presentation must be flat?** CVs and LinkedIn profiles reduce complex careers to linear timelines. But human development isn't linear—it's exploratory, recursive, full of connections and contradictions.

**What if technology could preserve complexity instead of flattening it?** The dialogue system lets visitors discover aspects of my experience that matter to them, in an order that makes sense for their context.

**How do we design for serendipity?** The easter egg system rewards curiosity. Hidden responses to specific keywords create moments of unexpected delight—just like real conversations.

## The Automation That Doesn't Automate Away

The most interesting technical decision was what **not** to automate:

- **Content curation**: Every dialogue path was hand-crafted
- **Narrative logic**: No AI generation, just human-designed conversation flows  
- **Value judgment**: The system doesn't decide what's "important"—visitors do
- **Emotional intelligence**: The tone, humor, and personality remain distinctly human

The automation handles the mechanics (rendering, state management, PDF generation) so the human elements can breathe.

## Questions for the Loop

As we build increasingly sophisticated systems, where do we draw these lines?

**In your work**: What gets automated vs. what stays human? How do you preserve intention when scaling systems?

**In hiring**: What information actually matters about a person? How much of "fit" can be systematized vs. discovered through interaction?

**In storytelling**: When does efficiency serve the story, and when does it kill it?

## Stay in the Loop

Marcel Quest isn't just a portfolio—it's an experiment in **intention-driven automation**. Technology amplifying human story rather than replacing it. Systems that create space for discovery rather than optimizing for extraction.

**Try it yourself**: [Marcel Quest Live Demo] 

Watch how the experience makes you slow down, choose paths, discover unexpected connections. Notice what feels different about exploring someone's professional story through dialogue rather than scanning a list.

Then ask yourself: **Where else could we put humans back in their own loops?**

---

*This is the kind of thinking we explore in Humanware—the delicate dance between automation and intention, between systems and stories, between efficiency and humanity.*

**What loops are you navigating?** Hit reply and let me know what automation challenges you're wrestling with in your own work.

---

*Marcel Scognamiglio is a Senior Software Engineer and System Architect specializing in AI automation and event-driven architectures. He currently leads automation initiatives at FoodReady while exploring the philosophy of human-centered technology design.*

**Connect:**
- **Experience**: [Marcel Quest Interactive Portfolio]
- **LinkedIn**: [Professional Profile](https://www.linkedin.com/in/marcel-lourenco/)
- **Email**: marcelx@protonmail.com 