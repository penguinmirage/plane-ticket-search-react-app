//edited actions.js
export const toggleAll = (checked) => ({
  type: 'ALL',
  payload: checked,
});

export const toggleNoChange = (checked) => ({
  type: 'NOCHANGE',
  payload: checked,
});

export const toggleOneChange = (checked) => ({
  type: 'ONECHANGE',
  payload: checked,
});

export const toggleTwoChanges = (checked) => ({
  type: 'TWOCHANGES',
  payload: checked,
});

export const toggleThreeChanges = (checked) => ({
  type: 'THREECHANGES',
  payload: checked,
});

export const cheapest = () => ({
  type: 'CHEAPEST',
});

export const fastest = () => ({
  type: 'FASTEST',
});

export const optimal = () => ({
  type: 'OPTIMAL',
});

//my first draw of actions.js
// //flight type filter checkboxes
// export const all = () => {
//   return {
//     type: 'ALL',
//     payload: null,
//   };
// };
// export const noChange = () => {
//   return {
//     type: 'NOCHANGE',
//     payload: null,
//   };
// };
// export const oneChange = () => {
//   return {
//     type: 'ONECHANGE',
//     payload: null,
//   };
// };
// export const twoChanges = () => {
//   return {
//     type: 'TWOCHANGES',
//     payload: null,
//   };
// };
// export const threeChanges = () => {
//   return {
//     type: 'THREECHANGES',
//     payload: null,
//   };
// };

// // //ticket search filter cheapest-fastest-optimal
// export const cheapest = () => {
//   return {
//     type: 'CHEAPEST',
//     payload: null,
//   };
// };
// export const fastest = () => {
//   return {
//     type: 'FASTEST',
//     payload: null,
//   };
// };
// export const optimal = () => {
//   return {
//     type: 'OPTIMAL',
//     payload: null,
//   };
// };
