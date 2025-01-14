```javascript
// in your tailwind.config.js file
module.exports = {
  content: [ 
    './index.html', 
    './src/**/*.{js,ts,jsx,tsx}', // Add this line
    './components/**/*.{js,ts,jsx,tsx}' //Add this line too
  ],
  theme: {
    extend: {
      colors: {
        'custom-color': '#f00',
      }
    }
  },
  plugins: [],
}
```
Ensure that you've correctly pointed to the directories where your components and pages reside.  The `**` represents any number of subdirectories, and `{js,ts,jsx,tsx}` specifies the file extensions to include.