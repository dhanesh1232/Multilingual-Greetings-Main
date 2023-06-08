import languageContext from '../../Context/LanguageContext'
import {DisplayImage} from './styledComponents'

const DisplayGreeting = props => {
  const {activeImage} = props
  const {imageUrl, imageAltText} = activeImage[0]
  return <DisplayImage src={imageUrl} alt={imageAltText} />
}
export default DisplayGreeting
