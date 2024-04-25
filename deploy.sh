docker build -t ice-faulty:latest .
docker run -d -p 80:5173 ice-faulty:latest
