# RecipeCGI 🍳

**AI-Powered Recipe Generator with Smart Ingredient Management**

Transform your available ingredients into delicious recipes with the power of AI. RecipeCGI is a modern web application that helps home cooks discover new meals based on what they have in their kitchen.

## ✨ Features

- **🤖 AI Recipe Generation** - Generate personalized recipes from your available ingredients
- **🔐 User Authentication** - Secure login/signup with Clerk authentication
- **📱 Modern UI** - Beautiful, responsive design with Tailwind CSS
- **⚡ Real-time Updates** - Instant recipe generation and ingredient management
- **🍽️ Recipe Management** - Save, organize, and manage your favorite recipes
- **⏱️ Cooking Timer** - Built-in timer for perfect cooking timing
- **📋 Ingredient Tracking** - Smart ingredient management and quick-add functionality
- **🎨 Beautiful Landing Page** - Compelling marketing page for new users

## 🛠️ Tech Stack

| Technology       | Purpose                      | Documentation                                                                    |
| ---------------- | ---------------------------- | -------------------------------------------------------------------------------- |
| **Next.js 15**   | Full-stack React framework   | [📖 Docs](https://nextjs.org/docs)                                               |
| **React**        | Frontend library             | [📖 Docs](https://react.dev/reference/react)                                     |
| **TypeScript**   | Type safety and better DX    | [📖 Docs](https://www.typescriptlang.org/docs/handbook/intro.html)               |
| **Clerk**        | Authentication & user management | [📖 Docs](https://clerk.com/docs)                                             |
| **Tailwind CSS** | Utility-first CSS framework  | [🌐 Website](https://tailwindcss.com/) • [📖 Docs](https://tailwindcss.com/docs) |
| **OpenAI**       | AI/LLM integration for recipes | [📖 Docs](https://platform.openai.com/docs/api-reference/introduction)           |
| **Zod**          | Schema validation            | [📖 Docs](https://zod.dev/)                                                      |

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18.17 or later
- **npm** or **yarn** package manager
- **Clerk account** for authentication
- **OpenAI API key** for recipe generation

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/rlh850/RecipeCGI.git
   cd RecipeCGI
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory:

   ```env
   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   
   # OpenAI API
   OPENAI_API_KEY=your_openai_api_key
   
   # Optional: Custom URLs
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
   ```

4. **Set up Clerk Authentication**

   - Go to [clerk.com](https://clerk.com) and create an account
   - Create a new application
   - Copy your API keys to `.env.local`
   - Configure allowed origins in Clerk dashboard

5. **Start development server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to see your application.

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes for recipe generation
│   ├── components/        # React components
│   │   ├── ingredients/   # Ingredient management components
│   │   ├── recipes/       # Recipe display components
│   │   ├── sidebar/       # Navigation sidebar
│   │   └── stopwatch/     # Cooking timer
│   ├── controllers/       # Business logic controllers
│   ├── llm/              # AI/LLM integration
│   │   ├── tools/        # LLM tools (recipe generator)
│   │   └── prompts/      # AI prompts and templates
│   ├── repository/        # Data access layer
│   ├── services/          # External service integrations
│   ├── sign-in/          # Authentication pages
│   ├── sign-up/          # Authentication pages
│   └── page.tsx          # Main application page
├── contexts/              # React context providers
├── hooks/                 # Custom React hooks
└── public/                # Static assets
```

## 🎯 How It Works

### 1. **User Authentication**
- Users sign up/sign in using Clerk authentication
- Secure session management with automatic token handling

### 2. **Ingredient Management**
- Add ingredients to your virtual pantry
- Quick-add common ingredients from sidebar
- Visual ingredient tracking with modern UI

### 3. **AI Recipe Generation**
- Submit your available ingredients
- AI analyzes ingredients and generates personalized recipes
- Recipes include cooking time, difficulty, and step-by-step instructions

### 4. **Recipe Management**
- Save favorite recipes for later
- Built-in cooking timer for perfect timing
- Recipe organization and search

## 🔧 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript type checking
```

## 🌐 Deployment

### Deploy to Vercel

1. **Push your code to GitHub**
2. **Import repository to [Vercel](https://vercel.com)**
3. **Configure environment variables** in Vercel dashboard:
   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
   - `CLERK_SECRET_KEY`
   - `OPENAI_API_KEY`
4. **Deploy automatically** on every push to main branch

### Environment Variables

Make sure to set these in your production environment:

- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` - Your Clerk publishable key
- `CLERK_SECRET_KEY` - Your Clerk secret key
- `OPENAI_API_KEY` - Your OpenAI API key

## 🎨 Features Overview

### **Landing Page**
- Beautiful gradient design
- Clear value proposition
- Sign-up/sign-in CTAs
- Feature highlights

### **Main Application**
- **Sidebar Navigation** - Easy access to all features
- **Ingredient Panel** - Visual ingredient management
- **Recipe Display** - Beautiful recipe cards with cooking instructions
- **Cooking Timer** - Built-in timer for cooking steps
- **User Profile** - Account management with Clerk

### **AI Integration**
- **Smart Recipe Generation** - Context-aware recipe creation
- **Ingredient Analysis** - AI understands ingredient combinations
- **Personalized Suggestions** - Recipes tailored to your preferences

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

- [Clerk](https://clerk.com) for seamless authentication
- [OpenAI](https://openai.com) for powerful AI capabilities
- [Vercel](https://vercel.com) for excellent Next.js deployment
- [Tailwind CSS](https://tailwindcss.com) for beautiful styling
- All the amazing open-source contributors

---

**⭐ Star this repository if you find it helpful!**

**🍳 Happy Cooking with RecipeCGI!**