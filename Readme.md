# Enjoy the Microblog Project and the MicroblogLite API!

Don't forget to read the [*MicroblogLite* API docs](https://microbloglite.herokuapp.com/docs/) and experiment with the API in *Postman!*

Practice and experimentation provide experience, and experience provides confidence.

## Project Description
#### In this website we are creating a blog with a landing page with the ability to create and use logins. We are using an API to handle the logins submitting and displaying posts that are stored on a server we were given to use. This project stretched our skills and showed us how much room we have to grow and that we can always look to others for inspiration, it was a rather humbling and eye opening experience. 

## The project members are

### Rohit Pradhan, Team Leader, https://github.com/RohitPradhan0518
### Thyly Kanku, Styling Guru, https://github.com/thylykanku
### Trevor Belmont, https://github.com/TrevorBelmontVPK
### Daemeon Miller, https://github.com/Efreed-Shadwin
### Gertrude Kinguza, https://github.com/Gertrude41

##Pages

### The home page designed by Thyly Kanku our resident style guru that set the styling scheme for the rest of the project. 
![home](https://github.com/RohitPradhan0518/microbloglite-capstone-starter/assets/146854297/fe7b683a-d196-4429-878d-cffafc791f7a)
### The login/registration page the design was worked on by both Trevor Belmont and Rohit Pradhan. They were able to combine the login and registration page into one single clean looking page that reduced the difficulty of keeping everything linked correctly. 
![login](https://github.com/RohitPradhan0518/microbloglite-capstone-starter/assets/146854297/1fa05e6e-e71e-4b59-8e8e-567d035ee918)
### The posts page designed by Daemeon Miller with the help of our teacher Kevin Long who helped make sure that the fetch requests behaved as intended. 
![posts](https://github.com/RohitPradhan0518/microbloglite-capstone-starter/assets/146854297/0d615cba-64fa-43e7-b4f7-b788b1704c97)
### The profile page designed by Thyly Kanku and Gertrude Kinguza with Trevor Belmont aiding with the JS to make sure it pulled the info for the profile page.
![profile](https://github.com/RohitPradhan0518/microbloglite-capstone-starter/assets/146854297/6689b0c5-4490-4d71-8a88-a0d050e2cd44)

## An interesting piece of code 
The most interesting piece of code is this piece that our teacher created for us to stop the loose HTML that people were creating from breaking the posts or generating things we didn't want.
```
if(item.text.match(/<\/?(?:(?!img).)+>/)){
        item.text="unknown HTML eliminated"
    }
```
