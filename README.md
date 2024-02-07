<p align="center">
  <img width="300" alt="tracker_main" src="https://github.com/inayoon/christmas_card_app/assets/100747899/9f252893-e5db-4bbd-abf4-975843529b98"><img width="300" alt="tracker_main2" src="https://github.com/inayoon/christmas_card_app/assets/100747899/65a8e16f-2eed-4746-aa4b-49da185a81db">
</p>


# Expense Tracker
> I've created an expense tracker application where users can input their income and expenses by choosing the date on the calendar. This application provides spending history for the past month with a chart.

<br/>

## Total Development Period
> 2024.01.12 ~ 2024.01.25
<br/>

## Tech Stack
### Frontend
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white">  <img src="https://img.shields.io/badge/Redux toolkit-764ABC?style=for-the-badge&logo=Redux&logoColor=white"> <img src="https://img.shields.io/badge/Redux thunk-764ABC?style=for-the-badge&logo=Redux&logoColor=white">  <img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=for-the-badge&logo=Tailwind CSS&logoColor=white">

### Backend
<img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=Express&logoColor=white">  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white">

### Database
<img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=MongoDB&logoColor=white"> 

<br/>

## 💰 Main Screens and Features
|                                                             1.  Home                                                               |                                                         **2. Add History**                                                             |                                                         **3. Add History with Calendar**                                                             |
| :--------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------: |
|  <img width="420" alt="tracker_home" src="https://github.com/inayoon/christmas_card_app/assets/100747899/60d5e460-cc2b-4d00-a3bf-8ccc74f93932">  |  <img width="420" alt="tracker_add" src="https://github.com/inayoon/christmas_card_app/assets/100747899/6e8c8677-d4d6-4e11-b751-06ad04377d99">  |  <img width="420" alt="tracker_add w cal" src="https://github.com/inayoon/christmas_card_app/assets/100747899/88723e37-7a17-4902-a013-a6aaef1e605b">  |

|                                                             **4.  Filter with Income**                                                                |                                                         **5. Filter with Expense**                                                             |                                                         **6. Display with a Chart**                                                             |
| :--------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------: |
|  <img width="420" alt="tracker_filter" src="https://github.com/inayoon/christmas_card_app/assets/100747899/e2205b7a-5ef1-4b5e-9872-994ad7e7453c">  |  <img width="420" alt="tracker_filter2" src="https://github.com/inayoon/christmas_card_app/assets/100747899/78499b88-5037-4c4c-9c1b-4894537d0039">  |  <img width="420" alt="tracker_chart" src="https://github.com/inayoon/christmas_card_app/assets/100747899/04f28b6c-ce4a-45e1-8cc0-5872f55bcacb">  |
  
<br/>

---

> ### 1. Sign-Up & Sign-In (With react-hook-form)
|                                                             **Sign-Up**                                                                |                                                         **Sign-In**                                                             |
| :--------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------: |
|  <img width="400" hight="300" alt="tracker_signup" src="https://github.com/inayoon/christmas_card_app/assets/100747899/a40e3d86-3d23-4dce-ba63-694400365ef2">  |  <img width="400" hight="300"  alt="tracker_signin" src="https://github.com/inayoon/christmas_card_app/assets/100747899/5051d493-c4fa-4d02-ad12-bf32ff3da51f">  |

<details>
<summary><h3>Registration Form using react-hook-form </h3></summary>
<br/>

Implemented signup & signin function with react-hook-form.<br/>

```Javascript
import { useForm } from "react-hook-form";
export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: "Onchange" });

  const onSubmit = ({ email, password, username }) => {
    const body = {
      email,
      password,
      username,
    };
    dispatch(registerUser(body)).then(() => {
      navigate("/login");
    });
    reset();
  };
    /**  for validation */
  const userEmail = {
    required: "Email must be provided",
  };

  const userName = {
    required: "Name must be provided",
    pattern: {
      value: /^[A-Za-z]+$/,
      message: "Username must only contain letters",
    },
  };
  const userPassword = {
    required: "Password must be provided",
    minLength: {
      value: 6,
      message: "Min length must be 6",
    },
};
return(
    ...
    <div className="mb-2">
                <label
                  htmlFor="email"
                  className="text-sm font-semibold text-gray-800"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-8 py-2 mt-2 bg-white rounded-md border-b-2 border-gray-300"
                  {...register("email", userEmail)}
                />
                {errors?.email && (
                  <div>
                    <span className="text-gray-400">{errors.email.message}</span>
                  </div>
                )}
              </div>
              <div className="mb-2">
                <label
                  htmlFor="password"
                  className="text-sm font-semibold text-gray-800"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-8 py-2 mt-2 bg-white rounded-md border-b-2 border-gray-300"
                  {...register("password", userPassword)}
                />
                {errors?.password && (
                  <div>
                    <span className="text-gray-400">{errors.password.message}</span>
                  </div>
                )}
              </div>
      ....
      )
    }


```
</details>

---

<br/>

> ### 2. Selecting a date with react-calendar 


- Implementing expense tracker (1.11~
  ![money expense tracker  money expense tracker](https://github.com/inayoon/expnese_tracker/assets/100747899/a3b06800-c64f-4079-a13e-808472951304)
