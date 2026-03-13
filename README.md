# Server to Server Communication

## Reflections

1: We send Only the Data the Client Needs and smaller response will be faster so the performance will be higher. Also it will be better for security, user can not see important data as ID

2: It's better for user to understand and we will prevent to leak any information about our server to the user.

3: We will send the selected lan to the API with the help of query. Something like this :

```js
const response = await randomFact.get("/api/v2/facts/random", {
  params: { language },
});
```

and we can get the selected lan from user input such as en, de and ...

##

👤 Author
Saba Beigi
🌎 Charlotte, NC
💼 GitHub @sababg
📧 beigisaba@gmail.com

Feel free to reach out with questions, feedback, or ideas!
