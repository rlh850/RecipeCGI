import { SignUp } from '@clerk/nextjs';

export default function SignUpPage() {
   return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-red-50">
         <div className="max-w-md w-full space-y-8 p-8">
            <div className="text-center">
               <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  Join Recipe Helper
               </h1>
               <p className="text-gray-600">
                  Create your account and start cooking amazing recipes
               </p>
            </div>
            <div className="flex justify-center">
               <SignUp
                  appearance={{
                     elements: {
                        formButtonPrimary:
                           'bg-orange-500 hover:bg-orange-600 text-white',
                        card: 'shadow-lg border-0',
                        headerTitle: 'text-gray-900',
                        headerSubtitle: 'text-gray-600',
                        socialButtonsBlockButton:
                           'border-gray-200 hover:bg-gray-50',
                        formFieldInput:
                           'border-gray-200 focus:border-orange-500 focus:ring-orange-500',
                        footerActionLink:
                           'text-orange-500 hover:text-orange-600',
                     },
                  }}
               />
            </div>
         </div>
      </div>
   );
}
