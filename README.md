
# Task Management Portal
Overview
The Task Management Portal is a web application built with Laravel Sail, providing a platform for managing tasks efficiently. This README will guide you through the setup process and usage of the portal.

### Requirements 

Before you begin, ensure you have the following prerequisites installed on your macOS system:

* Docker Desktop: [Installation Guide](https://docs.docker.com/desktop/)
* PHP: [Installation Guide](https://www.php.net/manual/en/install.php)
* Composer: [Installation Guide](https://getcomposer.org/download/)
* Node.js and npm: [Installation Guide](https://nodejs.org/en/download)


## Run Locally

Clone the repository to your local machine

```bash
  git clone <repository-url>
```
[Github Repo Link](https://github.com/DaniyalShafiq205/CT-Challenge-Task/tree/master)


Navigate to the project directory

```bash
  cd <project-directory>
```
Create a new .env file from the .env.example file:

```bash
cp .env.example .env
```

Start the Docker containers with Laravel Sail:

```bash
composer sail-up
```

Run the entrypoint script:

```bash
./entrypoint.sh
```

Open your web browser and navigate to http://localhost:8000/ to access the **Task Management Portal**.

## Usage
Upon accessing the portal, you'll be directed to the login page. Use the following credentials to log in:

* Email: test@example.com
* Password: password123
After logging in, you'll be redirected to the main portal where you can manage tasks. The application has auth middleware enabled for security purposes.

## Additional Notes
If port 8000 is already in use, you can modify the APP_PORT variable in the .env file to a different port.

Make sure to stop the Laravel Sail containers when you're done:

```bash
composer sail down
```

## Portal Views Screenshots

![login](/login.png)

![portal-1](/portal-1.png)

![portal-2](/portal-2.png)

![portal-3](/portal-3.png)


## Authors

- [@mehmoodshafiq]()

