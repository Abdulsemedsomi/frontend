import axios from "axios";

export function requestGetEmployees() {
  return axios.request({
    method: "get",
    url: "https://mern-assignment1.herokuapp.com/employees",
  });
}
export function requestRegisterEmployees(data) {
  console.log(data, "post");
  return axios.request({
    method: "post",
    url: "https://mern-assignment1.herokuapp.com/employees",
    data: {
      ...data,
    },
  });
}

export function requestUpdateEmployees(data) {
  const employee = {
    name: data.name,
    dateOfBirth: data.dateOfBirth,
    gender: data.gender,
    salary: data.salary,
  };
  return axios.request({
    method: "patch",
    url: `https://mern-assignment1.herokuapp.com/employees/update/${data._id}`,

    data: {
      ...employee,
    },
  });
}
export function requestDeleteEmployees(data) {
  return axios.request({
    method: "delete",
    url: `https://mern-assignment1.herokuapp.com/employees/delete/${data}`,
  });
}
