import LocalizedStrings from 'react-localization';

import es from './es.json';
import en from './en.json';
const lang = ({state}) =>{
    return state.theme.lang
}
export default new LocalizedStrings({
    es,
    en
});



