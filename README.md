# Imaginary is AI-Powered image generation application

** Built With **

- Next.js
- Tawilwind CSS
- Shadcn UI


Installing Next.js using `npx create-next-app@latest ./` then allow typescript, tailwind css and others default stuffs.
After installing next install shadcn ui using `npx shadcn-ui@latest init` then choose style as default, color as slate and css variable will be yes.

- Add Clerk by using `npm install @clerk/nextjs` command.
Then configure clerk according to documentation.

- Connect Mongodb and Mongoose `npm install mongodb mongoose` 
and setup database functionality.

Deploy app to the Vercel and setup webhook to the clerk. for adding webhook we need to install svix by using this command,
`npm install svix`