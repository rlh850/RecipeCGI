# RecipeCGI

An AI-powered recipe and cooking assistant built with Next.js 15, featuring intelligent chat capabilities, real-time data synchronization, and OpenAI integration. Perfect for discovering recipes, getting cooking advice, and enhancing your culinary experience.

## ✨ Features

-  **⚡ Next.js 15** - Latest App Router with React Server Components
-  **🔄 Real-time Data** - Convex for real-time database and backend functions
-  **🤖 AI Integration** - OpenAI API integration for intelligent recipe assistance
-  **🎨 Modern UI** - Tailwind CSS 4 for responsive, beautiful designs
-  **🔒 Type Safety** - TypeScript throughout with comprehensive type checking
-  **💬 Chat Interface** - Interactive AI chat for recipe discovery and cooking advice
-  **📱 Responsive Design** - Mobile-first approach with modern UX patterns
-  **🚀 Production Ready** - Optimized for deployment with proper error handling

## 🛠️ Tech Stack

| Technology       | Purpose                      | Documentation                                                                    |
| ---------------- | ---------------------------- | -------------------------------------------------------------------------------- |
| **Next.js**      | Full-stack React framework   | [📖 Docs](https://nextjs.org/docs)                                               |
| **React**        | Frontend library             | [📖 Docs](https://react.dev/reference/react)                                     |
| **TypeScript**   | Type safety and better DX    | [📖 Docs](https://www.typescriptlang.org/docs/handbook/intro.html)               |
| **Convex**       | Real-time backend & database | [📖 Docs](https://docs.convex.dev/quickstart/nextjs)                             |
| **Tailwind CSS** | Utility-first CSS framework  | [🌐 Website](https://tailwindcss.com/) • [📖 Docs](https://tailwindcss.com/docs) |
| **OpenAI**       | AI/LLM integration           | [📖 Docs](https://platform.openai.com/docs/api-reference/introduction)           |

## 🚀 Quick Start

### Prerequisites

-  **Node.js** 18.17 or later
-  **npm** or **yarn** package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/RecipeCGI.git
   cd RecipeCGI
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up Convex**

   ```bash
   npx convex dev
   ```

4. **Configure environment variables**

   Create a `.env.local` file in the root directory:

   ```env
   CONVEX_DEPLOYMENT=your-convex-deployment-url
   NEXT_PUBLIC_CONVEX_URL=your-convex-url
   OPENAI_API_KEY=your-openai-api-key
   MODEL=your-preferred-openai-model
   ```

5. **Start development server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to see your application.

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   └── chat/          # Chat API endpoint
│   ├── components/        # Reusable React components
│   ├── controllers/       # Business logic controllers
│   │   └── chat.controller.ts
│   ├── llm/              # LLM integration
│   │   ├── client.ts      # OpenAI client configuration
│   │   ├── prompts/       # Prompt templates and system instructions
│   │   └── tools/         # LLM tools and function definitions
│   ├── repository/        # Data access layer
│   │   └── chat.repository.ts
│   ├── services/          # External service integrations
│   │   └── chat.service.ts
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page
├── convex/                # Convex backend functions (if used)
└── public/                # Static assets
```

## 💬 Usage

### Chat API

RecipeCGI provides a chat API endpoint for AI-powered recipe assistance:

**Endpoint:** `POST /api/chat`

**Request Body:**

```json
{
   "id": "unique-chat-session-id",
   "message": "What's a good recipe for chicken pasta?"
}
```

**Response:**

```json
{
   "id": "response-id",
   "text": "Here's a delicious chicken pasta recipe..."
}
```

### Example Usage

```javascript
// Send a message to the chat API
const response = await fetch('/api/chat', {
   method: 'POST',
   headers: {
      'Content-Type': 'application/json',
   },
   body: JSON.stringify({
      id: crypto.randomUUID(),
      message: 'I want to make a vegetarian dinner for 4 people',
   }),
});

const data = await response.json();
console.log(data.text); // AI response with recipe suggestions
```

## 🔧 Available Scripts

```bash
npm run dev          # Start development server
npm run "dev db"     # Start Convex dev server and Next.js dev server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 🌐 Deployment

RecipeCGI is optimized for deployment on **Vercel**, but works with any Node.js hosting platform.

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository to [Vercel](https://vercel.com)
3. Configure environment variables in Vercel dashboard
4. Deploy automatically on every push to main branch

### Environment Variables

Make sure to set these in your production environment:

-  `CONVEX_DEPLOYMENT` - Your Convex deployment URL
-  `NEXT_PUBLIC_CONVEX_URL` - Your public Convex URL
-  `OPENAI_API_KEY` - Your OpenAI API key
-  `MODEL` - Your preferred OpenAI model (optional)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

-  [Convex](https://convex.dev) for the excellent real-time backend
-  [Vercel](https://vercel.com) for seamless Next.js deployment
-  [OpenAI](https://openai.com) for powerful AI capabilities
-  [Next.js](https://nextjs.org) for the amazing React framework
-  All the amazing open-source contributors

---

**⭐ Star this repository if you find RecipeCGI helpful!**
