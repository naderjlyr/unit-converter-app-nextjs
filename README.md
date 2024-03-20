# Unit Converter App powered by next.js 14
## Introduction

Hello there! I'm thrilled to present a simple unit Converter app, a project. This robust web application is designed to make life easier by facilitating a variety of unit and number conversions. Whether it's converting decimals to Roman numerals, binary to Roman numerals, kilograms to pounds, or centimeters to inches, This app has got it covered.

Crafted with the modern tech stack of React, Next.js 14 App router, TypeScript, and Tailwind CSS, and enhanced with powerful libraries like Flowbite-React and Framer Motion, I aimed to create an application that not only performs well but also offers a delightful user experience. The interface is intuitive, and the design is responsive, making conversions a breeze on any device.

For state management, I opted for Zustand, which provided a seamless way to handle the app's state across various conversions. This choice ensures that the user experience is fluid and hassle-free. Additionally, the application includes comprehensive testing with Cypress to ensure reliability, uses React Hook Form for efficient form handling, and incorporates client-side validations using Zod to maintain data integrity.

This project was a fantastic opportunity for me to showcase my skills a little bit.

Moreover, I'm excited to share that there's another branch of this repository which evolves the project into a full-stack application, moving beyond a single-page application (SPA) architecture. This version leverages Next.js 14's app routing API folder to define endpoints, offering a more traditional web application experience. Additionally, the Zustand store has been refactored to better suit the full-stack nature of this branch. If you're curious about this version, feel free to visit the branch and explore the extended capabilities of Unit Converter app in a full-stack environment.

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository to your local machine.
2. Install dependencies using `yarn` or `npm install`.
3. Start the development server with `yarn dev` or `npm run dev`.

The application will be available at `http://localhost:3000`.

## Technology Stack

- **Next.js:** A React framework providing server-side rendering and generating static websites for React-based web applications.
- **TypeScript:** A superset of JavaScript that adds static type definitions.
- **Flowbite-React:** A set of React components built on top of Tailwind CSS and Flowbite.
- **React Icons:** A library to include popular icons in your React projects.
- **Tailwind CSS:** A utility-first CSS framework for rapidly building custom designs.
- **Framer Motion:** A library to easily implement animations in React.
- **Zustand:** A state management solution for React that doesn't revolve around the use of reducers.
- **Cypress:** An end-to-end testing framework.
- **React Hook Form:** A library to manage forms with minimal re-rendering.
- **Zod:** A TypeScript-first schema validation with static type inference.

## Project Structure

- `src/`: Source files for the application.
  - `app/`: Core pages and layouts.
  - `components/`: Reusable UI components.
  - `config/`: Configuration files, including animations and navigation links.
  - `hooks/`: Custom React hooks.
  - `store/`: Zustand stores for state management.
  - `types/`: TypeScript interfaces and types.
  - `utils/`: Utility functions, including converters.
  - `validations/`: Zod schemas for form validation.
- `public/`: Static assets like images and icons.
- `cypress/`: Cypress testing files and configurations.
- `styles/`: Global CSS and Tailwind configuration.

## Features and Implementation

### Converter Pages (`src/app/`)

- **About Page (`about/page.tsx`):** Provides information about cFlox Converter, its purpose, and current features, using `flowbite-react` components and `react-icons`.
- **Converter Page (`converter/page.tsx`):** Hosts the main functionality for unit and number conversions, integrating `ConverterTabs` and `Glossary` components for a seamless experience.

### Components (`src/components/`)

- **ConverterForm (`Converter/ConverterForm`):** Manages input forms for conversions, employing `react-hook-form` for form handling and `zod` for validation, enhanced with `framer-motion` animations.
- **ConverterTabs (`Converter/ConverterTabs`):** Facilitates switching between different conversion types, dynamically updating the form and displayed information.
- **Glossary (`Converter/Glossary`):** Displays helpful information related to specific conversions, such as the Roman Numerals Glossary.

### State Management (`src/store/`)

- **useConverterStore (`useConverterStore.ts`):** Manages application state related to current conversion settings, leveraging `zustand` for an easy-to-use global state.

## Additional Components

### Footer (`src/components/ui/Footer/index.tsx`)

The Footer component, crafted with simplicity and elegance in mind, showcases developer information and provides quick access to social links. Integrated with icons from `react-icons`, it serves as a direct line to the developer's GitHub, StackOverflow, and LinkedIn profiles, reinforcing the project's open-source nature and the developer's commitment to community engagement.

### Navigation (`src/components/ui/Navigation/index.tsx`)

The Navigation component is the cornerstone of user navigation within cFlox Converter. Utilizing `next/link` for efficient routing and `react-icons` for aesthetic enhancement, it seamlessly guides users across the application's core pages: Home, Converters, and About. This component exemplifies a responsive and intuitive navigation bar, adapting perfectly to various device sizes, thanks to Tailwind CSS's utility-first approach.

## Cypress E2E Testing

Cypress tests are meticulously designed to cover end-to-end scenarios, ensuring the application's features perform as expected under real-world conditions. These tests validate the functionality of the Converter and Glossary components, along with the navigation flow, providing a robust safety net against regressions and enhancing the overall quality of the application.

### Test Suites

- **Converter Page Tests:** Validates the core functionality of the converter, including the ability to perform number and unit conversions, handle user inputs, and display results correctly. Special attention is given to loading states and input validation, ensuring a smooth user experience.

- **Glossary Component Tests:** Ensures the Glossary component loads correctly and displays essential information about Roman Numerals, affirming the application's educational value.

- **Navigation Component Tests:** Confirms the presence and functionality of navigation links, ensuring users can easily traverse the application. It tests the visibility of the navigation bar and verifies the correctness of the routing.

These Cypress tests not only attest to the application's reliability but also underscore a commitment to quality and user satisfaction. By automating the validation of user interactions and key functionalities, they facilitate continuous integration and deployment processes, allowing for rapid iterations and consistent performance improvements.

#### Adding a New Converter to cFlox Converter

This guide provides step-by-step instructions on how to add a new converter to the cFlox Converter application.

##### Step 1: Define the Converter Function

Implement the conversion logic in the appropriate module within the `utils/converters` directory. For example, to add a temperature converter:

```typescript
// utils/converters/temperatureConverters.ts

export const celsiusToFahrenheit = (celsius: string): string => {
  const celsiusValue = parseFloat(celsius);
  if (isNaN(celsiusValue)) throw new Error("Invalid input");
  const fahrenheit = (celsiusValue * 9) / 5 + 32;
  return fahrenheit.toFixed(2);
};
```

##### Step 2: Add Validation Schema

```typescript
// validations/temperatureConvertersSchema.ts

import { z } from "zod";

export const celsiusToFahrenheitSchema = z.object({
  inputValue: z
    .string()
    .regex(/^[-]?[0-9]+(\.[0-9]+)?$/, "Input must be a valid number"),
});
```

##### Step 3: Update Converter Configuration

```typescript
// config/convertersConfig.ts

import { celsiusToFahrenheit } from "@/utils/converters/temperatureConverters";
import { celsiusToFahrenheitSchema } from "@/validations/temperatureConvertersSchema";
import { TbThermometer } from "react-icons/tb";

export const converterCategories: ConverterConfig[] = [
  ...,
  {
    name: "Temperature Converters",
    icon: TbThermometer,
    subCategories: [
      {
        name: "Celsius to Fahrenheit",
        converterFunction: celsiusToFahrenheit,
        validationSchema: celsiusToFahrenheitSchema,
        icon: TbThermometer,
      },
    ],
  },
];
```

##### Step 4: Import and Export in Entry Points

```typescript
// utils/converters/index.ts

export * from "./numberConverters";
export * from "./unitConverters";
export * from "./temperatureConverters";

// validations/index.ts

export * from "./numberConvertersSchema";
export * from "./unitConvertersSchema";
export * from "./temperatureConvertersSchema";
```

##### Step 5: Incorporate into the Application

With everything in place, the new converter will be recognized by the application. Ensure all imports are correctly referenced where converters are dynamically used.

##### Additional Tips

- Testing: Write unit and end-to-end tests for your new converter.
- Icons: Choose an appropriate icon for your converter for a better UI experience.

#### Contributing

This project welcomes contributions from the community! Feel free to:

- Suggest new converters: Expand the app's capabilities.
- Improve existing code: Optimize performance and readability.
- Fix bugs: Ensure a smooth user experience.
- Add tests: Enhance the robustness of the codebase.
  
**Note** : To contribute, please follow these steps:

- Fork the repository.
- Create a new branch.
- Make your changes and commit them.
- Submit a pull request for review.
Let's build the best unit converter app together!

#### Acknowledgements

I sincerely appreciate the inspiration and guidance provided by previous examples and feedback.

#### Contact

If you have questions, suggestions, or want to connect, find me on:

- GitHub: https://github.com/naderjlyr
- StackOverflow: https://stackoverflow.com/users/5389109/naderjlyr
- LinkedIn: https://linkedin.com/in/nader-jalayeri
Let me know if you'd like any modifications or have specific features in mind!
