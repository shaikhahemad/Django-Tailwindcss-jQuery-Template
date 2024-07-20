# template :
### A Django web application integrated with Tailwind CSS and jQuery using Webpack.

## Project Structure

```

├── assets
│   ├── script
│   │   └── index.js
│   └── style
│       └── main.css
├── core
│   ├── admin.py
│   ├── apps.py
│   ├── __init__.py
│   ├── migrations
│   │   └── __init__.py
│   ├── models.py
│   ├── tests.py
│   └── views.py
├── manage.py
├── package.json
├── postcss.config.js
├── README.md
├── src
│   ├── asgi.py
│   ├── __init__.py
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
├── static
│   └── bundle.js
├── tailwind.config.js
├── templates
│   ├── base.html
│   └── index.html
└── webpack.config.js
```

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/shaikhahemad/Django-Tailwindcss-jQuery-Template.git
   cd Django-Tailwindcss-jQuery-Template
   ```

2. **Set up the virtual environment**:
   ```bash
   python -m venv env
   source env/bin/activate  # On Windows, use `env\Scripts\activate`
   ```

3. **Install Python dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

4. **Update Node.js packages to their latest versions**:
   ```bash
   npm update
   ```

5. **Install Node.js dependencies**:
   ```bash
   npm install
   ```

## Usage

1. **Run Webpack in development mode**:
   ```bash
   npm run dev
   ```

2. **Run the Django development server**:
   ```bash
   python manage.py runserver
   ```

3. **Or run both concurrently**:
   ```bash
   npm start
   ```

## Scripts

- `npm run dev`: Runs Webpack in watch mode with development settings.
- `npm start`: Runs Webpack in watch mode and the Django development server concurrently.

### assets/script/index.js
The index.js file in the assets/script directory serves as the entry point for your JavaScript. It imports the main CSS file and sets up jQuery for use in the project.

## Packages

### Dependencies

| **Package**    | **Version**  |
|----------------|--------------|
| `jquery`       | ^3.7.1       |
| `tailwindcss`  | ^3.4.6       |

### DevDependencies

| **Package**            | **Version**  |
|------------------------|--------------|
| `@babel/core`          | ^7.24.9      |
| `@babel/preset-env`    | ^7.24.8      |
| `autoprefixer`         | ^10.4.19     |
| `babel-loader`         | ^9.1.3       |
| `concurrently`         | ^8.2.2       |
| `css-loader`           | ^7.1.2       |
| `postcss`              | ^8.4.39      |
| `postcss-loader`       | ^8.1.1       |
| `postcss-preset-env`   | ^9.6.0       |
| `style-loader`         | ^4.0.0       |
| `webpack`              | ^5.93.0      |
| `webpack-cli`          | ^5.1.4       |
| `webpack-dev-server`   | ^5.0.4       |

## Author

Ahemad Shaikh

## License

This project is licensed under the ISC License.