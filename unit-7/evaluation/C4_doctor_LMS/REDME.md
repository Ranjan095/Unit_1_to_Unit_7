# Masai Hospital

## `**Instructions**`

- Read the entire question carefully for at least 15 mins, understand it, and then code it.
- Don’t jump directly into the code.
- You should use **JSON-server** for this.
- Use **HTML, CSS, and JS DOM** to solve this question.
- You will have to also deploy both the JSON server and the app.

---

## `**Problem Statement**`

- The objective is to create a Full Stack application using **HTML, CSS, and JS** as frontend and **JSON server** as backend which facilitates seamless booking of medical appointments with doctors by the patients.
- Your app should have a navbar with the following pages
    - Home page
    - Doctor’s Dashboard
    - Book Appointments

## `**Home Page**`

- Your home page should have a **login and register form**, which the user should be able to toggle between login and register, and the corresponding form should be shown.

![                                                   Reference Image for Login and Register Toggle](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9e7341f3-c012-46c8-934c-a4784559e8bf/Login_Signup.png)

                                                   Reference Image for Login and Register Toggle

- The Sign Up form should have the following fields
    - Username
    - Email
    - Password
    - Doctor Checkbox ( Indicating the user is a doctor or not).
- The user should be able to register through the form, and the data should be stored in your JSON server on route “**/users**”.
- The login form should have the following fields
    - Email
    - Password
- When a user logs in, match the entered data with the JSON server data you stored while registering. Display an alert - if login is a success, show a message in the alert box as `login successful`, else show a message as `login failed`
- The user should be redirected to the Doctor dashboard or Book Appointments (on the basis of the checkbox value) page after successfully logged-in.

---

## **`Doctor Dashboard`**

- This page should be protected only the user who is a doctor should able to access it.
- The user should be prompted by an appointment form with the following details
    - Name
    - Image URL
    - Specialization (Select tag with **Cardiologist, Dermatologist, Pediatrician, or Psychiatrist** as options)
    - Experience
    - Location
    - Date (Appointment creation date)
    - Slots (Number of slots available for the day)
    - Fee
- Sample JSON
    
    ```json
    [
    	{
    	  "name": "Jane Doe",
    	  "image": "https://example.com/doctor-image.jpg",
    	  "specialization": "Dermatologist",
    	  "experience": 10,
    	  "location": "Los Angeles",
    	  "date": "2023-04-05T12:00:00.000Z",
    		"slots": 2,
    	  "fee": 150
    	},
    	{
    	  "name": "Mark Johnson",
    	  "image": "https://example.com/doctor-image.jpg",
    	  "specialization": "Pediatrician",
    	  "experience": 5,
    	  "location": "Chicago",
    	  "date": "2023-04-06T09:30:00.000Z",
    		"slots": 1,
    	  "fee": 100
    	}
    ]
    ```
    

- On form submission, store data in JSON server on route “**/appointments**”.
- Display a list of Doctors that are fetched from the server using the JSON server in a tabular format.

| Name of the Doctor | Specialization | experience | location | slots | Edit  | Delete | Appointments |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Jane Doe | Dermatologist | 10 | Los Angeles | 2 | edit (Button) | Delete(Button) | Appointments(Button) |
| Mark Johnson | Pediatrician | 5 | Chicago | 1 | edit (Button) | Delete (Button) | Appointments(Button) |
- Each column should have 3 buttons “**Edit**”, “**Delete**”, and “**Appointments**” button that allows to user
    - **Edit** the doctor's details (All Fields should be editable)
    - **Delete** the doctor's details
    - **Appointments**: This should display the patients who had booked appointments for the particular doctor.(You can use a modal or a separate page for the same)
- Both Edit and Delete functionalities should be reflected in the UI and in the JSON server.

---

## **`Book Appointments page`**

- Fetch all the appointments posted from the JSON server and list them in the form of cards.
- The UI should look like

![                                                                             UI Reference Image](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f3dddd88-5054-43fc-a28b-d1d2105ca525/Masai_Hospital.png)

                                                                             UI Reference Image

- Your app should have the following functionalities.
    - **Filter by Specialization** (**Cardiologist, Dermatologist, Pediatrician, Psychiatrist**).
    - **Sort by Date** (based on the posted date)
    - **Search by Doctor's name**
    - **Pagination** (4 Cards per page)
- Each card should have a “**Book Now**” button, which when clicked, the number of slots for that particular doctor should decrement by 1.
- If the number of slots becomes 0, the Book Now button should be disabled.

---

### Submission

- Please submit deployed link and GitHub link of the code.
- ***Deploy JSON server too.
- Please double-check if deployed version works or not (run deployed version on your laptop and then submit it)
- ***Any issues in the deployed link will be considered null and void.
- Please verify your submissions are correct.
- Make sure you follow all instructions carefully.
- *****Submit before the deadline.**

### Rubrics / Criteria to be judged upon

- CRUD Operations
- JSON server
- Fetch
- Pagination, Filter, and Sort Functionality
- UI, Clean Code, and Git Hygiene