import { useContext, createContext , useState} from "react"

const APIContext = createContext()
export const APIProvider = ({children}) => {
    const [weather, setWeather] = useState([]);
    const [language, setLanguage] = useState('tr');
    const data = {
        weather,
        language,
        setLanguage,
        setWeather
    }
 return <APIContext.Provider value={data}>{children}</APIContext.Provider>
}
export const useAPI = () => {
    const context = useContext(APIContext)
    if(context === undefined){
        Error('useContext hook must be call inside Provider component')
    }
    return context
}