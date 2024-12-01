# FluentCMS Template
Welcome to the **FluentCMS Base Template** Repository!
This repository serves as the foundational template for building projects with FluentCMS,
providing essential configurations, best practices, and fully customizable templates to ...


## Getting Started

### Prerequisites

- .NET SDK 9.0 or later

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/fluentcms/Template.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd Template
   ```
3. **Configure the Database:**

   FluentCMS supports multiple databases. Configure the desired database by following these steps:

      * **Set the Database in `appsettings.json`:** 
      Define your database type under `Database` section. For example, to use LiteDB:

         ```json
         "Database": "LiteDB"
         ```
      Available options are: `LiteDb`, `MongoDB`, `SQLite`, `SQLServer`, `MySQL`, `PostgreSQL`

   * **Provide Connection Strings in `appsettings.json`:** 
      Set your connection string under "ConnectionStrings" in appsettings.json for the desired database:

      ```json
      "ConnectionStrings": {
         "DefaultConnection": "Filename=./fluentcms.db"
      }
      ```

4. **Run the application:**

   ```bash
   dotnet run
   ```

5. **Visit `http://localhost:5000` in your browser.**

Your FluentCMS project is now running! Start exploring and building your Sites.

## Configuring the Application
Before running the project, you may need to update some configuration settings in `appsettings.json` or the launch profile.

1. **Update `appsettings.json`:**
   
   Located in the root of the project, this file contains essential configurations like database connection strings, logging, and environment-specific settings.

3. **Update Launch Profile (Optional):**
   
   The launch settings can be found in the Properties/launchSettings.json file. This file defines profiles for how the application runs, such as ports, environment variables, and settings.



## Features
This repository currently contains three templates to help you start your project quickly. We will add more templates frequently.

Here is some screenshots of templates:
![portfolio](/docs/resources/portfolio.png)
![contact us](/docs/resources/contact-us.png)
![default](/docs/resources/default.png) 
