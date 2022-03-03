const hello = 'Hello';
const world = 'World';

// Way One
// const helloWorld = hello + ' ' + world;

// The second way
const helloWorld = `${hello} ${world}`;

const gebetan = {
  name: 'Raffi',
  isOnline: true,
};

if (gebetan.isOnline) {
  console.log(`Halo, ${gebetan.name}!`);
  // console.log('Halo, ' + gebetan.name + '!');
  console.log('Lagi ngapain nih! Sleepcall yuk!');
}

/* 
  Output
  Halo, Raffi!
  Lagi ngapain nih! Sleepcall yuk!
*/

const gebetanArif = {
  name: 'Arif',
  isOnline: true,
  blocked: true,
};

if (gebetanArif.isOnline && !gebetanArif.blocked) {
  console.log(`Halo, ${gebetanArif.name}!`);
  console.log('Lagi ngapain nih! Sleepcall yuk!');
} else {
  console.log('Sebenernya ada yang pengen aku sampein ke kamu!');
  console.log('Tapi sayangnya aku di block sama kamu');
}

/* 
  Output:
  Sebenernya ada yang pengen aku sampein ke kamu!
  Tapi sayangnya aku di block sama kamu
*/
