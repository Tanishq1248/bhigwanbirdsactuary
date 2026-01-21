#!/bin/bash

# Bhigwan Birds - React App Setup Script

echo "================================"
echo "Bhigwan Bird Sanctuary - Setup"
echo "================================"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install it from https://nodejs.org/"
    exit 1
fi

echo "✓ Node.js version: $(node --version)"
echo "✓ npm version: $(npm --version)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Setup complete!"
    echo ""
    echo "To start the development server, run:"
    echo "   npm start"
    echo ""
    echo "To build for production, run:"
    echo "   npm run build"
    echo ""
else
    echo "❌ Installation failed. Please check the error messages above."
    exit 1
fi
