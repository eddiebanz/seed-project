@echo off
cd C:\Program Files\MongoDB\Server\3.4\bin\
start cmd /k mongod.exe
cd C:\Users\edwin\Desktop\MEAN stack notes\seed-project\
start cmd /k npm run build
start cmd /k npm start