#simple node task-manager application

install node and npm any version
npm install -g pm2

manual steps:
stpe 1 : npm install
step 2 : node index.js

applicaiton run through pm2:
step1 : npm install
step2 : pm2 start index.js --name task-app
step3 : pm2 startup
step4 : pm2 save


pm2 commands:
pm2 list
pm2 status
pm2 restart task-app
pm2 stop task-app
pm2 delete task-app
pm2 logs task-app
pm2 logs --lines 100 task-app



output:
access browser:
http://localhost:3000/api/tasks

cli:
curl http://localhost:3000/api/tasks

curl -X POST http://localhost:3000/api/tasks \
  -H "Content-Type: application/json" \
  -d '{"title":"Learn Node.js","completed":false}'

curl -X DELETE http://localhost:3000/api/tasks/<id>


