import {
   SignInButton,
   SignUpButton,
   SignedIn,
   SignedOut,
   UserButton,
} from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export function LandingPage() {
   return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50">
         {/* Header */}
         <header className="container mx-auto px-4 py-6">
            <nav className="flex justify-between items-center">
               <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                     <span className="text-white font-bold text-lg">🍳</span>
                  </div>
                  <h1 className="text-2xl font-bold text-gray-900">
                     Recipe Helper
                  </h1>
               </div>
               <div className="flex space-x-4">
                  <SignedIn>
                     <UserButton
                        appearance={{
                           elements: {
                              avatarBox: 'w-8 h-8',
                              userButtonPopoverCard: 'shadow-lg border-0',
                              userButtonPopoverActionButton: 'hover:bg-gray-50',
                              userButtonPopoverActionButtonText:
                                 'text-gray-700',
                           },
                        }}
                     />
                  </SignedIn>
                  <SignedIn>
                     <Button
                        variant="ghost"
                        onClick={() => (window.location.href = '/')}
                     >
                        Go to App
                     </Button>
                  </SignedIn>
                  <SignedOut>
                     <SignInButton mode="modal">
                        <Button variant="ghost">Sign In</Button>
                     </SignInButton>
                     <SignUpButton mode="modal">
                        <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                           Get Started
                        </Button>
                     </SignUpButton>
                  </SignedOut>
               </div>
            </nav>
         </header>

         {/* Hero Section */}
         <main className="container mx-auto px-4 py-16">
            <div className="text-center max-w-4xl mx-auto">
               <h2 className="text-5xl font-bold text-gray-900 mb-6">
                  Turn Your Ingredients Into
                  <span className="text-orange-500"> Amazing Recipes</span>
               </h2>
               <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                  AI-powered recipe generation that creates delicious meals from
                  whatever you have in your kitchen. No more wondering what to
                  cook!
               </p>
               <div className="flex justify-center space-x-4">
                  <SignUpButton mode="modal">
                     <Button
                        size="lg"
                        className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3"
                     >
                        Start Cooking Now
                     </Button>
                  </SignUpButton>
                  <Button size="lg" variant="outline" className="px-8 py-3">
                     Learn More
                  </Button>
               </div>
            </div>

            {/* Features */}
            <div className="mt-24 grid md:grid-cols-3 gap-8">
               <Card className="p-8 text-center hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                     <span className="text-2xl">🤖</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">AI-Powered</h3>
                  <p className="text-gray-600">
                     Advanced AI analyzes your ingredients and creates
                     personalized recipes just for you.
                  </p>
               </Card>

               <Card className="p-8 text-center hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                     <span className="text-2xl">⚡</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                     Instant Results
                  </h3>
                  <p className="text-gray-600">
                     Get recipe suggestions in seconds. No more endless
                     scrolling through recipe websites.
                  </p>
               </Card>

               <Card className="p-8 text-center hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                     <span className="text-2xl">📱</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Smart & Simple</h3>
                  <p className="text-gray-600">
                     Easy-to-use interface that makes cooking fun and accessible
                     for everyone.
                  </p>
               </Card>
            </div>

            {/* CTA Section */}
            <div className="mt-24 text-center">
               <Card className="p-12 bg-gradient-to-r from-orange-500 to-red-500 text-white">
                  <h3 className="text-3xl font-bold mb-4">
                     Ready to Transform Your Cooking?
                  </h3>
                  <p className="text-xl mb-8 opacity-90">
                     Join thousands of home cooks who are already creating
                     amazing meals with AI assistance.
                  </p>
                  <SignUpButton mode="modal">
                     <Button
                        size="lg"
                        variant="secondary"
                        className="px-8 py-3"
                     >
                        Get Started Free
                     </Button>
                  </SignUpButton>
               </Card>
            </div>
         </main>

         {/* Footer */}
         <footer className="bg-gray-900 text-white py-12 mt-24">
            <div className="container mx-auto px-4 text-center">
               <div className="flex items-center justify-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                     <span className="text-white font-bold text-lg">🍳</span>
                  </div>
                  <h4 className="text-xl font-bold">Recipe Helper</h4>
               </div>
               <p className="text-gray-400">
                  © 2024 Recipe Helper. Making cooking accessible and fun for
                  everyone.
               </p>
            </div>
         </footer>
      </div>
   );
}
