//For loop keeps running while the condition is true.
//Here rep stands for repitition.
for(let rep = 1; rep <= 10; rep++)
    {
        //Here we use template string because we have to increment the value of rep10 times.
        console.log(`Lifting weights repitition ${rep}`);
    }

// We can also be able to loop through the array.It means that if we want to retrieve the elements from array using loops then we can do that easily.
//So now lets create one new array.

const Shishiranjan = ['Shishi', 'Thakur', 2021-1997, 'Software developer', ['Randhir', 'Suraj', 'Abishec'], true];

for(let i = 0; i <= 6; i++)
    {
        //Here we read the elements from the jonas array.
        console.log(Shishiranjan[i]);
    }

const Shishiranjan = ['Shishi', 'Thakur', 2021-1997, 'Software developer', ['Randhir', 'Suraj', 'Abishec'], true];

for(let i = 0; i < Shishiranjan.length; i++)
    {
        console.log(Shishiranjan[i], typeof Shishiranjan[i]);
        
    }

const years = [1991, 1995, 1997, 1993];
const ages =[];

for(let i = 0; i < years.length; i++)
    {
        ages.push(2021-years[i]);
    }
console.log(ages);

//There are basically two statements in for loop which are continue statement and break statement.

console.log('-----ONLY STRINGS-----');
for(let i = 0; i < Shishiranjan.length; i++)
    {
        if(typeof Shishiranjan[i]!== 'string') continue;
        console.log(Shishiranjan[i], typeof Shishiranjan[i]);
    }

console.log('-----BREAK WITH NUMBER-----');
for(let i = 0; i < Shishiranjan.length; i++)
    {
        if(typeof Shishiranjan[i]== 'number') break;
        console.log(Shishiranjan[i], typeof Shishiranjan[i]);
    }