/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Noto Sans KR", "Arial", "sans-serif"], 
        // sans가 제일 기본 상속 폰트이므로 전체 폰트바꾸려면 sans재지정후 맨앞에 원하는 폰트 넣기       
      },
      colors: {
        'google-red': '#ea4335',
        'google-blue': '#4285f4',
        'google-green': '#34a853',
        'google-yellow': '#fbbc05',
        'astems-purple': '#6500CB',
        'astems-light-purple': '#C8A3ED',
        'astems-yellow' : '#FFE600',
        'astems-sky': '#B2C7D9',
        'astems-black': '#252525',
        'astems-toast' : "#484848",
      },      
    }
  },
  plugins: [],
}
