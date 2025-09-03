# WhatsApp Bot SaaS Platform Architecture

## Overview

This document outlines the architecture for our WhatsApp Bot SaaS platform, inspired by Botpress. The platform allows users to create, configure, and manage AI-powered WhatsApp bots with RAG capabilities for company-specific knowledge.

## System Architecture

### Frontend (Next.js)

- **Dashboard**: Main admin interface for users to manage their bots
- **Bot Builder**: Visual interface for configuring bot behavior and responses
- **Conversation Explorer**: View and analyze bot conversations
- **Analytics**: Metrics and insights on bot performance
- **Settings**: Account, billing, and platform configuration

### Backend (API Routes)

- **Authentication API**: User registration, login, and session management
- **Bot Management API**: CRUD operations for bots
- **WhatsApp Integration API**: Connect and manage WhatsApp instances
- **Conversation API**: Store and retrieve conversation history
- **Analytics API**: Process and serve analytics data
- **Billing API**: Subscription and payment processing

### WhatsApp Bot Engine

- **WhatsApp Client**: Integration with WhatsApp using whatsapp-web.js
- **Message Handler**: Process incoming and outgoing messages
- **AI Engine**: OpenAI integration for generating responses
- **RAG System**: Retrieval-augmented generation for company-specific knowledge
  - Web Scraper: Collect data from company websites
  - Vector Database: Store and query embeddings
  - Context Retriever: Find relevant information for queries

## Data Models

### User
- id: string
- email: string
- password: string (hashed)
- name: string
- createdAt: Date
- subscription: SubscriptionTier

### Bot
- id: string
- userId: string
- name: string
- description: string
- createdAt: Date
- updatedAt: Date
- status: 'active' | 'inactive' | 'connecting'
- settings: BotSettings

### BotSettings
- openaiApiKey: string
- openaiModel: string
- embeddingModel: string
- temperature: number
- maxTokens: number
- companyName: string
- companyWebsites: string[]
- scrapingSettings: ScrapingSettings

### WhatsAppSession
- id: string
- botId: string
- status: 'active' | 'inactive' | 'pending'
- qrCode: string
- lastActive: Date

### Conversation
- id: string
- botId: string
- contact: string
- messages: Message[]
- startedAt: Date
- lastMessageAt: Date

### Message
- id: string
- conversationId: string
- content: string
- role: 'user' | 'bot'
- timestamp: Date

### VectorDocument
- id: string
- botId: string
- content: string
- embedding: number[]
- source: string
- timestamp: Date

## Technology Stack

### Frontend
- Next.js 15+
- React 19+
- Tailwind CSS 4
- TypeScript
- ShadcnUI (for UI components)

### Backend
- Next.js API Routes
- Node.js
- TypeScript
- Prisma (for database ORM)
- NextAuth.js (for authentication)

### WhatsApp Integration
- whatsapp-web.js
- qrcode-terminal

### AI and RAG
- OpenAI API
- Axios & Cheerio (for web scraping)
- Vector database (options: JSON storage, MongoDB, Pinecone, or Qdrant)

### Infrastructure
- Vercel (for hosting)
- PostgreSQL (for relational data)
- MongoDB/Pinecone/Qdrant (for vector data)
- Paystack (for billing)

## Folder Structure

```
/bot
├── public/
├── src/
│   ├── app/
│   │   ├── api/         # API routes
│   │   ├── (auth)/      # Authentication pages
│   │   ├── dashboard/   # Dashboard pages
│   │   ├── settings/    # Settings pages
│   │   └── billing/     # Billing pages
│   ├── components/      # Reusable UI components
│   │   ├── ui/          # Basic UI components
│   │   ├── dashboard/   # Dashboard-specific components
│   │   └── bot/         # Bot-specific components
│   ├── lib/             # Utility functions and shared logic
│   │   ├── auth/        # Authentication utilities
│   │   ├── db/          # Database utilities
│   │   ├── whatsapp/    # WhatsApp integration
│   │   ├── openai/      # OpenAI integration
│   │   ├── rag/         # RAG implementation
│   │   └── utils/       # General utilities
│   ├── hooks/           # Custom React hooks
│   ├── types/           # TypeScript type definitions
│   └── styles/          # Global styles
└── prisma/              # Database schema and migrations
```

## Development Roadmap

1. Set up project architecture and folder structure
2. Implement authentication and user management
3. Create dashboard layout and navigation
4. Implement bot creation and configuration UI
5. Set up WhatsApp integration with QR code authentication
6. Implement RAG capabilities with vector database
7. Add conversation management and history
8. Implement analytics and reporting
9. Add subscription and billing features
10. Deploy to production