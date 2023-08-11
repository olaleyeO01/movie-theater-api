const app = require("/Users/Olayele.Oduola/Bootcamp/Week6/movie-theater-api/src/app.js");
const {
  db,
} = require("/Users/Olayele.Oduola/Bootcamp/Week6/movie-theater-api/db/connection.js");
const port = 3000;

app.listen(port, () => {
  db.sync();
  console.log(`Listening at http://localhost:${port}/users`);
});
