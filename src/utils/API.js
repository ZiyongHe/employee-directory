const titles = [
  'Front-End Developer',
  'Back-End Developer',
  'Full-Stack Developer',
  'Automated Testing',
]
const API = {
  getEmployees: function () {
    return (
      fetch(
        'https://randomuser.me/api/?results=4&inc=picture,name,email,phone&noinfo&nat=ca'
      )
        .then((response) => response.json())
        //Assigning a title from the titles array to each employee
        .then((obj) => {
          return getRandomTitle(obj.results)
        })
    )
  },
}

const getRandomTitle = (userList) => {
  const results = userList.map((user) => {
    user.title = titles[Math.floor(Math.random() * Math.floor(4))]
    user.selected = true
    return user
  })
  return results
}

export default API
