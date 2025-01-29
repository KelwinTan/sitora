#!/bin/bash

# Create images directory if it doesn't exist
mkdir -p public/images/portfolio

# Download portfolio images
curl -L "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80" -o public/images/portfolio/restaurant.jpg
curl -L "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&q=80" -o public/images/portfolio/ecommerce.jpg
curl -L "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80" -o public/images/portfolio/corporate.jpg
curl -L "https://images.unsplash.com/photo-1526498460520-4c246339dccb?w=800&q=80" -o public/images/portfolio/tech.jpg
curl -L "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?w=800&q=80" -o public/images/portfolio/startup.jpg
curl -L "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" -o public/images/portfolio/portfolio.jpg
