# Forms Assignment

This repository contains the source code for the Forms Assignment developed using Next.js. The application serves as an investment platform, allowing users to manage and interact with investment forms.

## Setup Instructions

To set up and run the Forms Assignment application locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/muhabme/forms-assignment.git
```

2. Navigate to the project directory:

```bash
cd forms-assignment
```

3. Install the dependencies:

```bash
npm install
# or
yarn install
```

4. Run the application:

```bash
npm run dev
```

5. Open your browser and visit [http://localhost:3000](http://localhost:3000) to access the application.

## Features

-   Homepage displaying all investment forms in descending order of their action date
-   Each form preview includes the form title and a side menu showcasing requirements: Custodian Details, Other Information, and Certification
-   Interactive sections for each requirement that expand to reveal the relevant fields
-   Custom API routes in Next.js for handling CRUD operations (Create, Read, Update, Delete) on the forms using fs
-   Communication with the backend API using Axios
-   Data storage on the server-side using a JSON file
-   Mobile-responsive design using Tailwind CSS (can be updated to use styled-components if preferred)

## Folder Structure

```graphql
.
├── public/                 # Static assets
├── src/
│   ├── app/                # Next.js pages and API routes
│   ├── components/         # Reusable React components
│   ├── types/              # TypeScript Types
│   ├── hooks/              # Custom hooks
│   ├── data/               # Data
│   ├── utils/              # Utility functions and helpers
│   └── data/               # Data files
├── .gitignore              # Git ignore file
├── next.config.js          # Next.js configuration file
├── package.json            # Node.js dependencies and scripts
├── package-lock.json       # Lock file for package versions
├── postcss.config.js       # PostCSS configuration file
├── tailwind.config.js      # Tailwind CSS configuration file
├── tsconfig.json           # TypeScript configuration file
└── README.md               # Project README file (you're reading it now)
```
