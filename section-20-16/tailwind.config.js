/** @type {import('tailwindcss').Config} */
module.exports = {
  /* 
    During the bundling process, Tailwind will search
    for its classes from within our project.

    Will search for classes in all files in the source directory.
  */
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  /*  
    We can modify the colors, font sizes and other features of tailwind.
  */
  theme: {
    extend: {},
  },
  plugins: [],
};
