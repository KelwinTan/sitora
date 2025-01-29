#!/bin/bash

# Check if Docker is installed
if command -v docker &> /dev/null; then
    echo "Docker is installed, building and running with Docker..."
    docker build -t windsurf-website .
    docker run -p 3000:80 windsurf-website
else
    echo "Docker not found, running with Node.js..."
    npm install
    npm run build
    npm run preview
fi
