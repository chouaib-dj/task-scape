# 🎯 Task Scape

## 📋 Overview

Task Scape 🎯 is an intuitive task management application that enhances productivity by allowing users to manage tasks across customizable columns. Users can add ➕, update ✏️, and delete 🗑️ tasks, as well as create ➕ and remove ❌ columns that represent different stages of task completion. The drag-and-drop interface 🚀 makes it simple to move tasks between columns, tailoring the management process to fit personal or professional workflows. 🔥

## 🌟 Features

- **Authentication:** Implements authentication and authorization features.
- **Manage Tasks:** Add, update, and delete tasks through a simple interface.
- **Customizable Columns:** Create, rename, and delete columns to reflect different states of tasks, such as "To Do", "In Progress", and "Completed".
- **Drag and Drop:** Effortlessly reorder both tasks and columns themselves to accurately reflect their current status and organize workflow.
- **Responsive Design:** Fully responsive, ensuring functionality on all devices.
- **Enhanced User Experience:** Provides a seamless and intuitive interface, focusing on usability.

## 🛠️ Tech Stack

- **Next.js:** A React framework for enhanced server-side rendering and static site generation.
- **Supabase:** A scalable backend platform providing database and authentication solutions.
- **dnd-kit:** A versatile drag-and-drop toolkit for React applications.
- **shadcn/ui:** Modern React UI components designed for sleek user interfaces.

## 🚀 Quick Start

To get Task Scape running locally on your machine, follow these steps:

1. **Clone the repository:** Use the `git clone` command followed by the repository URL. After cloning, navigate into the project directory using the `cd` command.

   ```bash
   git clone https://github.com/chouaib-dj/task-scape.git
   cd task-scape
   ```

2. **Install the dependencies:** Run the `pnpm install` command to install all required dependencies.

   ```bash
   pnpm install
   ```

3. **Set up your environment variables:** Create a `.env.local` file in the root directory. Inside this file, include your Supabase URL and Anon Key with the appropriate variable names.

   ```plaintext
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
   ```

4. **Run the database SQL script:** In Supabase's SQL editor, paste the contents of `database.sql` and execute the queries to create the database schema.

5. **Update email templates in Supabase:** In the Supabase dashboard, navigate to the "Authentication" section, then go to "Email Templates". Update the templates for the "confirm signup" and "magic link" emails.

6. **Run the development server:** Use the `pnpm dev` command to start the development server. Once running, you can access the application by visiting `http://localhost:3000` in your web browser.

   ```bash
   pnpm dev
   ```

Following these steps should get Task Scape up and running locally on your machine using pnpm.

## 📑 License

Task Scape is open-sourced under the MIT License. See the [LICENSE](LICENSE) file for more details.

## 📫 Contact

If you have any questions or need further assistance with Task Scape, please don't hesitate to reach out via email: [djaidri.chouaib.24@gmail.com](mailto:djaidri.chouaib.24@gmail.com).
