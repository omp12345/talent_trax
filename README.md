# Planet Search App

This is a React+Redux application for searching planets.

## Instructions

1. Install dependencies:

    ```bash
    npm install
    ```

2. Start the local development server:

    ```bash
    npm start
    ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.
4. or the mock api is https://mock-api-x1tu.onrender.com

## JSON Server

1. Start the JSON server:

    ```bash
    json-server --watch db.json --port 3000
    ```

2. API endpoints:

    - Planets: [http://localhost:3000/planets](http://localhost:3000/planets)
    - Shapes: [http://localhost:3000/shapes](http://localhost:3000/shapes)
    - Colors: [http://localhost:3000/colors](http://localhost:3000/colors)
    - Sizes: [http://localhost:3000/sizes](http://localhost:3000/sizes)
    - Text Search: [http://localhost:3000/planets?q=text](http://localhost:3000/planets?q=text)
    - Filters:
        - Color: [http://localhost:3000/planets?color=ID](http://localhost:3000/planets?color=ID)
        - Shape: [http://localhost:3000/planets?shape=ID](http://localhost:3000/planets?shape=ID)
        - Size: [http://localhost:3000/planets?size=ID](http://localhost:3000/planets?size=ID)

