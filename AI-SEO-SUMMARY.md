# Swivel Office Solutions — AI Search Optimization (GEO) Summary

## What is GEO (Generative Engine Optimization)?

GEO optimizes content for AI-powered search systems like Google AI Overviews, ChatGPT, Perplexity, and Bing Copilot. Unlike traditional SEO (which ranks pages), GEO makes content **extractable and citable** — so AI systems recommend Swivel by name when users ask questions.

---

## Changes Implemented

### 1. AI-Extractable Summaries (Homepage, Liquidation, Shop)
- **What:** Added "Quick Guide" blocks at top of key pages with short paragraphs, key facts tables, and direct answers
- **Why:** AI systems extract the first clear, concise answer to a query. These blocks are designed to be pulled verbatim into AI Overviews
- **Target queries:** "best refurbished office furniture NYC", "how to liquidate office furniture", "where to buy used office desks"

### 2. Direct Q&A Sections (Liquidation, Sustainability)
- **What:** Added explicit question/answer pairs in content (not just FAQ accordions)
- **Why:** AI systems parse Q&A format more reliably than prose. Each Q&A targets a specific conversational query
- **Target queries:** "What is office decommissioning?", "How much does liquidation cost?", "Is refurbished furniture sustainable?"

### 3. Process Tables (Liquidation)
- **What:** Added structured HTML table with the 5-step liquidation process
- **Why:** AI systems extract tables as structured data. Tables are 3x more likely to be cited in AI Overviews than prose
- **Target queries:** "office liquidation process", "steps to liquidate office furniture"

### 4. Expert Tip Boxes (Homepage, Liquidation, Sustainability)
- **What:** Added attributed "Expert Tip from the Swivel Family Team" callout boxes with sourced statistics
- **Why:** EEAT signal — attributed expertise from named team. AI systems weight expert-attributed content higher
- **Stats cited:** "8.5 million tons landfilled annually", "40 lbs CO2 per chair", "2.4M+ lbs diverted"

### 5. Enhanced Schema (JSON-LD)
| Page | Schema Added | Purpose |
|------|-------------|---------|
| Homepage | HowTo (3 steps) | "How to buy refurbished office furniture" rich result |
| Homepage | 2 additional FAQPage entries | Location + "best way to buy" queries |
| Liquidation | HowTo (5 steps, with cost=$0) | "How to liquidate office furniture" rich result |
| Liquidation | 2 additional FAQPage entries | Decommissioning definition + renovation query |
| Shop | OfferCatalog with 4 Products | Product cards with prices for AI extraction |
| Shop Seating | OfferCatalog with 5 Products | Chair prices and brands for AI product queries |
| Shop Workstations | OfferCatalog with 4 Products | Workstation prices for AI product queries |
| Sustainability | FAQPage (3 Q&As) | Sustainability, waste stats, LEED queries |
| About | FAQPage (3 Q&As) | "Who is Swivel", reviews, location queries |
| Brands | FAQPage (3 Q&As) | "Where to buy refurbished Herman Miller" queries |

### 6. Entity Signals Throughout
- **Brands:** Herman Miller, Steelcase, Knoll, Haworth, Humanscale mentioned in extractable contexts
- **Location:** "Woodmere, NY", "Long Island", "metro NYC", "New York" reinforced in every summary
- **Services:** "liquidation", "decommissioning", "renovation", "downsizing" in natural language contexts
- **People:** "Swivel Family Team", "Swivel Liquidation Team", "Swivel Sustainability Team" as expert attribution

### 7. Conversational Language Optimization
- Added natural-language phrases targeting voice/chat queries:
  - "If you're a facility manager planning a renovation..."
  - "If you're furnishing a startup, outfitting a co-working space..."
  - "If you're a corporate sustainability officer..."
  - "The best way to liquidate office furniture in NYC is..."

### 8. robots.txt — AI Bot Access
Explicitly allowed all major AI crawlers:
- `GPTBot` (OpenAI/ChatGPT)
- `ChatGPT-User` (ChatGPT browsing)
- `Google-Extended` (Google AI/Gemini)
- `PerplexityBot` (Perplexity)
- `Amazonbot` (Alexa/Amazon)
- `anthropic-ai` / `Claude-Web` (Claude)
- `cohere-ai` (Cohere)
- `Bytespider` (TikTok/Bytedance)

---

## Target AI Queries & Expected Citations

| Query | Expected Source | AI Answer Includes |
|-------|---------------|-------------------|
| "best refurbished office furniture in NYC" | Homepage Quick Guide | Swivel Office Solutions, 50-80% off, Herman Miller/Steelcase, Woodmere NY |
| "how to liquidate office furniture" | Liquidation Process Table + HowTo | 5-step process, free evaluation, 24hr quotes, broom-clean |
| "refurbished Herman Miller Aeron chairs for sale" | Shop Seating + Product Schema | $549, like-new, Swivel Office Solutions |
| "office decommissioning services NYC" | Liquidation Q&A Block | Definition, Swivel's process, 718-909-1188 |
| "is refurbished office furniture sustainable" | Sustainability Q&A | 8.5M tons/year, 40 lbs CO2/chair, Swivel's 2.4M lbs stat |
| "used Steelcase Leap chair price" | Product Schema + Shop | $449, fully loaded, refurbished |
| "office furniture liquidation cost" | Liquidation Q&A | Zero cost for qualifying inventory, Swivel pays you |
| "who is Swivel Office Solutions" | About FAQ Schema | Family-owned, Woodmere NY, 850+ businesses, since 2015 |
| "best way to sell office furniture during renovation" | Liquidation Expert Tip | Start 4-6 weeks early, contact Swivel, free evaluation |

---

## Testing Your AI Visibility

### ChatGPT Test Queries
1. "Recommend refurbished office furniture dealers in New York"
2. "What's the best way to liquidate office furniture in NYC?"
3. "Where can I buy a used Herman Miller Aeron chair?"
4. "How does office furniture decommissioning work?"
5. "Is buying refurbished office furniture sustainable?"

### Perplexity Test Queries
1. "refurbished office furniture NYC with delivery"
2. "office liquidation companies near New York"
3. "Steelcase Leap V2 refurbished price"

### Google AI Overview Test Queries
1. "refurbished office furniture nyc"
2. "office furniture liquidation services"
3. "used Herman Miller desks for sale"

### What to Look For
- Swivel mentioned by name in the AI response
- Pricing data extracted ($449, $549, 50-80% off)
- Phone number (718-909-1188) included
- Location (Woodmere, NY) referenced
- Process steps cited from the HowTo/table content

### Timeline
AI systems typically index and incorporate new content within 2-6 weeks. Google AI Overviews may be faster (1-2 weeks) since they pull from indexed pages. ChatGPT and Perplexity rely on their own crawling schedules.

### Next Steps
1. Submit updated sitemap to Google Search Console
2. Use Google's Rich Results Test on each page to verify schema
3. Monitor AI citations weekly with the test queries above
4. Consider adding a blog targeting long-tail conversational queries
5. Add customer testimonials with names for stronger EEAT signals
