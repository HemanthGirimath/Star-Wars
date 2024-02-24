Star Wars Planets Directory
Welcome to the Star Wars Planets Directory project! This web application utilizes the Star Wars API (SWAPI) to fetch and display information about planets from the Star Wars universe. Users can explore various planets, view details such as climate, population, terrain, and discover notable residents of each planet.

Getting Started
To get started with the project, follow these instructions:

Prerequisites
Ensure you have the following software installed on your local machine:

Node.js
Angular CLI
Installation
Clone the repository to your local machine:
bash
Copy code
git clone <repository-url>
Navigate to the project directory:
bash
Copy code
cd star-wars-planets-directory
Install project dependencies:
bash
Copy code
npm install
Development Server
Run ng serve for a dev server. Navigate to http://localhost:4200/ in your browser to view the application. The app will automatically reload if you change any of the source files.

bash
Copy code
ng serve
Features
Planets Directory:

Fetches and displays information about planets from the Star Wars universe using SWAPI.
Presents each planet's data in a distinct card, including name, climate, population, and terrain.
Residents Display:

Provides a list of residents within each planet's card.
Fetches relevant details such as the resident's name, height, mass, and gender.
Pagination Mechanism:

Implements pagination functionality to navigate through the list of planets.
Utilizes the "next" URL provided in the API's response for fetching additional pages.
User-friendly and intuitive pagination controls.
Technologies Used
Angular
TypeScript
HTML
CSS
SWAPI (Star Wars API)
Contributing
Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

Fork the repository
Create your feature branch (git checkout -b feature/YourFeature)
Commit your changes (git commit -am 'Add some feature')
Push to the branch (git push origin feature/YourFeature)
Create a new Pull Request


Acknowledgments
Thanks to the creators of SWAPI for providing the Star Wars API.
Special thanks to the Angular team for their amazing framework.
