document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript loaded');
  
    const form =document.querySelector('#form')
    form.addEventListener('submit', handleFormSave)

    addDeleteButton()

    const deleteButton = document.querySelector('.delete')
    deleteButton.addEventListener('click', handleDelete)

  })

  const createRatListItem = function(event){
    const ratList = document.querySelector('#ratList')
    const newRat = document.createElement('li')
    newRat.classList.add('rat-item')
    ratList.appendChild(newRat)

    const ratImage = generateRat()
    newRat.appendChild(ratImage)

    const ratName = document.createElement('p')
    ratName.textContent = `Name: ${event.target.name.value}`
    newRat.appendChild(ratName)

    const ratVariety = document.createElement('p')
    ratVariety.textContent =`Variety: ${event.target.variety.value}`
    newRat.appendChild(ratVariety)

    const ratType = document.createElement('p')
    ratType.textContent =`Type: ${event.target.type.value}`
    newRat.appendChild(ratType)
    
  }


  const handleFormSave = function(event){
    event.preventDefault()
    createRatListItem(event)
    document.querySelector('form').reset()
  }

  const addDeleteButton = function(){
      const article = document.querySelector('article')
      const button = document.createElement('button')
      button.classList.add('delete')
      button.textContent = ('delete')
      article.appendChild(button)
  }

  const handleDelete = function(event){
    const ratList = document.querySelector('#ratList')
    ratList.innerHTML = ""
  }

  const generateRat =function(){
        const ratties = 'abcdefghij'.split('')
        const index = Math.floor(Math.random() * 10);
        const url = 'images/ratties/' + ratties[index] + '.png'
        const ratImage = document.createElement('img')
        ratImage.src = url
        return ratImage
  }