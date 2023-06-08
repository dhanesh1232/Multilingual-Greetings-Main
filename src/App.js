import {Component} from 'react'
import languageContext from './Context/LanguageContext'
import {AppMainContainer, PageHead, TabButtonsList} from './styledComponents'
import TabItem from './components/TabItem'
import DisplayGreeting from './components/DisplayPage'
import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
class App extends Component {
  state = {activeLanguage: languageGreetingsList[0].id}

  changeLanguage = id => {
    this.setState({activeLanguage: id})
  }

  getActiveImage = () => {
    const {activeLanguage} = this.state
    const filterObj = languageGreetingsList.filter(
      eachObj => eachObj.id === activeLanguage,
    )
    return filterObj
  }

  render() {
    const {activeLanguage} = this.state
    const activeImage = this.getActiveImage()

    return (
      <languageContext.Provider
        value={{
          changeLanguage: this.changeLanguage,
        }}
      >
        <AppMainContainer>
          <PageHead>Multilingual Greetings</PageHead>
          <TabButtonsList>
            {languageGreetingsList.map(eachLanguage => (
              <TabItem
                key={eachLanguage.id}
                tabItem={eachLanguage}
                isActive={eachLanguage.id === activeLanguage}
              />
            ))}
          </TabButtonsList>
          <DisplayGreeting activeImage={activeImage} />
        </AppMainContainer>
      </languageContext.Provider>
    )
  }
}

export default App
