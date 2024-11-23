
# Get Well Store

This React-based medical website provides separate functionalities for customers and sellers. Customers can sign up to browse and purchase medicines, view their cart, place orders, and track order status via a dedicated Customer Dashboard. Sellers can sign up to list, manage, and sell(can do all CRUD operations) through a specialized Seller Dashboard featuring inventory management, order processing, and sales analytics. The platform ensures role-based authentication, with distinct routes and dashboards for customers and sellers, enabling a seamless user experience for both roles.





## Screenshots

![WhatsApp Image 2024-11-23 at 18 17 38_889879cc](https://github.com/user-attachments/assets/28a8430b-a4de-44cb-a802-5ee726b9854a)

A clean, intuitive layout ensuring a smooth user experience.
The design aligns with the RBAC theme, separating customer and seller flows effectively.
Thoughtful UI enhancements like role toggles and error handling for required fields.

The layout dynamically adjusts elements like input fields, buttons, and images to maintain usability and visual consistency, whether accessed on mobile, tablet, or desktop.

![WhatsApp Image 2024-11-23 at 21 44 19_37fdfdc1](https://github.com/user-attachments/assets/d7ff167d-beba-4f78-af03-466c0e10446e)

Seller Dashboard
The seller dashboard provides core functionalities for managing medicines in stock. Sellers can:

Add Medicines: Add new products with details like name, description, price, and image.
Update Prices: Modify the price of existing medicines directly from the dashboard.
Delete Medicines: Remove any product from the inventory with ease.



![WhatsApp Image 2024-11-23 at 21 44 53_505ce329](https://github.com/user-attachments/assets/cf58bdbd-e4a0-4ade-a38a-42e08d55eea2)



Cart Functionality: Users can add medicines to the cart, review them, and delete items as needed.
Access Control: The dashboard is secured with proper permissions, ensuring users and sellers cannot access each other's interfaces without authorization.

## Installation

Install my-project 

```bash
Clone the repository: git clone 
Navigate to the project directory
Install dependencies: npm install

```
```bash
Configuration
Set up a MongoDB database and obtain the connection URL.
Create a .env file in the root directory with the following environment variables:
MONGODB_URI=<your-mongodb-connection-url>
JWT_SECRET=<your-jwt-secret-key>
```
```bash
Usage
Open a new terminal and navigate to the client directory: cd client
Start the React development server: npm run dev
Access the application in your browser at http://localhost:3000
```

## Api Design
##Note: (All the api are created by me using my previous projects)

API File Structure:

All API endpoints are organized within an apis.js file, located inside the services folder within the src directory.
This file centralizes all the API calls, making it reusable and easy to manage.

##Note:
Backend APIs for Server Section:

A server section is included in the backend but is not part of the assessment.
It contains configurations and logic for handling database interactions, middleware, and other backend processes.
## Additional Feature for future prospective

1.Search bar | so that user experience can be better

2.Add prescription | As per government guidlines

3.Security | As currently all data are stored in local storage



## Appendix

Any additional information goes here

Special thanks to @Harkirat(Help me how to code)@Love Babbar(For UI)@VRV Secutify for this assignment

#Note:
Frontend code: Taken the help of my previous return code/projects
server folder contain all the backend api as i m using my own api which i have deployed on render ..dont worry about cors error(it has been taken care of)




