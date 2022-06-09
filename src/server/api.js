import axios from "axios";

export const getEmployees = (payload) =>
  axios
    .get(`http://localhost:5000/employees`, { payload })
    .then((response) => response.json)
    .catch((error) => {
      throw error;
    });

// export  {
//   add: async function (data) {
//     new Promise((resolve) => {
//         Employees.push(data);
//       setTimeout(resolve(data), 1000);
//     });

//     axios.post()
//     axios.post('/user', {
//         firstName: 'Fred',
//         lastName: 'Flintstone'
//       })
//   },

//   update: async function (data) {
//     return new Promise((resolve) => {
//       const { id, ...rest } = data;
//       const targetIndex = Posts.findIndex((x) => x.id === id);
//       if (targetIndex > -1) {
//         Posts[targetIndex] = { ...data };
//       } else {
//         new Error("Failed to update.");
//       }
//       setTimeout(resolve(data), 1000);
//     });
//   },
//   delete: async function (id) {
//     return new Promise((resolve) => {
//       const targetIndex = Posts.findIndex((x) => x.id === id);
//       if (targetIndex > -1) Posts.splice(targetIndex, 1);
//       else {
//         new Error("Failed to delete.");
//       }
//       setTimeout(resolve({ affected: 1 }), 1000);
//     });
//   },
//   getAll: async function () {
//     return new Promise((resolve) => {
//       setTimeout(resolve(Posts), 2000);
//     });
//   },
// };
