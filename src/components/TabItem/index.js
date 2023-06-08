import languageContext from '../../Context/LanguageContext'
import {TabList, TabButton} from './styledComponents'

const TabItem = props => {
  const {tabItem, isActive} = props
  const {id, buttonText} = tabItem
  return (
    <languageContext.Consumer>
      {value => {
        const {changeLanguage} = value
        const changeActiveLanguage = () => {
          changeLanguage(id)
        }
        return (
          <TabList>
            <TabButton isActive={isActive} onClick={changeActiveLanguage}>
              {buttonText}
            </TabButton>
          </TabList>
        )
      }}
    </languageContext.Consumer>
  )
}
export default TabItem
