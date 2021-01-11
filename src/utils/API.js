const titles = [
  'Front-End Developer',
  'Back-End Developer',
  'Full-Stack Developer',
  'DevOps',
  'Automated Testing',
]
const API = {
  getEmployees: function () {
    return (
      fetch(
        'https://randomuser.me/api/?results=30&inc=picture,name,email,phone&noinfo&nat=ca'
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
    user.title = titles[Math.floor(Math.random() * Math.floor(5))]
    return user
  })
  return results
}

export default API