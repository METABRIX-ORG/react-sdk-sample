# Ultron SDK Demo - Single Page Application as sample for SDK integration

This project is a responsive single-page application of a laptop store showing quick integration with ultron-ai-sdk (The 3D Character companion of you website), built using React and Vite. It provides an interactive interface for users to test the capablities of Ultron AI Characters.

## Features

- **Controller speach:** Make character say what you want.
- **Chat with AI:** Ask quesries to character and it will respond as per back story provided.


## Technologies Used

- **React:** JavaScript library for building user interfaces.
- **Vite:** Next-generation frontend tooling for fast development and build processes.
- **Tailwind CSS:** Utility-first CSS framework for rapid UI development.

## Getting Started

### Prerequisites

- **Node.js:** Ensure you have Node.js installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/METABRIX-ORG/react-sdk-sample.git
   ```


2. **Navigate to the Project Directory:**

   ```bash
   cd react-sdk-sample
   ```


3. **Install Dependencies:**

   ```bash
   npm install
   ```


## Setting up API and Avatar

Please add your avatarId and apiKey in App.jsx file 

### Adding values

```javascript

const avatarId = "YOUR AVATAR ID"
const apiKey = "YOUR_API_KEY"

```
You can find the instructions to find avatarId and apiKey here ->[SDK Guide](https://www.npmjs.com/package/ultron-ai-sdk)

### Running the Application

- **Development Server:**

  
```bash
  npm run dev
  ```


  This command starts the development server. Open your browser and navigate to the provided local address to view the application.

- **Build for Production:**

  
```bash
  npm run build
  ```


  This command builds the application for production, optimizing the code and assets.

- **Preview Production Build:**

  
```bash
  npm run preview
  ```


  This command previews the production build locally.



## Contributing

Contributions are welcome! If you have suggestions or improvements, please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

---

*Note: Replace `your-username` in the Git clone URL with your actual GitHub username if you have forked the repository.* 