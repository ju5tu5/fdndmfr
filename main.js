const main = document.querySelector('main')

fetch('https://tribe.api.fdnd.nl/v1/list')
  .then((apiData) => {
    // console.log('API Call', apiData)
    return apiData.json()
  })
  .then((jsonData) => {
    // console.log('JSON data', jsonData)

    jsonData.data
      // Use a filter
      .filter((student) => {
        // console.log('filter', student.memberName[0])
        return student.memberName[0] === 'K'
      })
      // Map the data to HTML element
      .map((student) => {
        // Make a new article
        let article = document.createElement('article')

        // Add a heading level 1 element
        article.appendChild(
          Object.assign(document.createElement('h1'), {
            textContent: student.memberName,
          })
        )
        // Add a paragraph element
        article.appendChild(
          Object.assign(document.createElement('p'), {
            textContent: student.memberBio,
          })
        )
        // Add an anchor element
        article.appendChild(
          Object.assign(document.createElement('a'), {
            href: student.memberUrl,
            textContent: 'check my github',
          })
        )
        return article
      })

      // Reduce the data to the main element
      .reduce((previous, current) => {
        // console.log('reduce', curr)
        return main.appendChild(current)
      }, main)
  })
