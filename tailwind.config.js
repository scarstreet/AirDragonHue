/** @type {import('tailwindcss').Config} */
export default {
  mode:'jit',
  content: ["./src/**/*.{js,jsx,ts,tsx}","./index.html",],
  theme: {
    extend: {
      colors: {
        'airdragon-0'   :'#f7ffeb',
        'airdragon-50'  :'#eaffdd',
        'airdragon-100' :'#d5fed0',
        'airdragon-150' :'#c2fdc9',
        'airdragon-200' :'#b5fdce',
        'airdragon-300' :'#9dfae5',
        'airdragon-400' :'#89e9f7',
        'airdragon-500' :'#78c0f1',
        'airdragon-600' :'#689ae8',
        'airdragon-700' :'#5975d4',
        'airdragon-800' :'#424ea7',
        'airdragon-900' :'#242760',
        'airdragon-1000':'#0d0d24',
      },},
  },
  plugins: [],
}

