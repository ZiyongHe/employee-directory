export function getEmployees() {
  fetch({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function (data) {
      return data
    },
  })
}

// fetch('https://randomuser.me/api/').then((res) => {
//   console.log(res)
// })
