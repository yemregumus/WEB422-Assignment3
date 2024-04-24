Link to project : https://movlibapp.netlify.app/

![image](https://github.com/yemregumus/WEB422-Assignment3/assets/97633311/8daefdd7-5d76-4d7a-8384-2d5234d89ca5)





This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


###############################################################################
Dev Notes 
Issue with Netlify deployment and it's fix.

Netlify works with Next.js version 13.4.9. Our app is using 13.5 and this creates an issue in Netlify and individual movie links are not working/rendering/throwing an error. You don't have to delete your deployment, do below Netlify will auto re-deploy from github repo. 


Step by step fix:

	
Open your local assignment folder in vscode
	
Start a new terminal and cd to your assignment folder
	
Uninstall nextjs (npm uninstall next)
	
Install nextjs back with version 13.4.9 (npm install next@13.4.9)
	
After installing you have to delete ^ sign from the beginning of next version number in your package.json since its still upgrading your version to latest regardless whats your version.
		
	
Save, commit, push & sync the changes to github and wait for Netlify to auto re-deploy from your github repo.
###############################################################################



## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
