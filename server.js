const app = require('./app');
const cors = require('cors');

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log('Start add ', port);
});
app.use(
  cors({
      origin: '*'
  })
);