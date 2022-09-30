let quote = document.querySelector('.quote');
let person = document.querySelector('.person');
let btn = document.querySelector('#btn-quotes');

const quotes =[ {
  quote:'“A room without books is like a body without a soul.”',
  person:'"― Marcus Tullius Cicero'
},
{
    quote:'“Be who you are and say what you feel, because those who mind don not matter, and those who matter don not mind.”',
    person:'― Bernard M. Baruch'
},
{
    quote:'“You know you are in love when you cannot fall asleep because reality is finally better than your dreams.”',
    person:'― Dr. Seuss'

},
{
   quote:'“Be the change that you wish to see in the world.”' ,
   person:'― Mahatma Gandhi'
},{
    quote:'“Don not walk in front of me… I may not follow Don not walk behind me… I may not lead Walk beside me… just be my friend”',
    person:'― Albert Camus'

},
{
    quote:'“If you tell the truth, you don not have to remember anything.”',
    person:'― Mark Twain'
},

];
btn.addEventListener('click',function(){
    let random = Math.floor(Math.random()*quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
});
