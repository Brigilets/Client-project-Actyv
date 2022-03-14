import { createClient } from "contentful"

const useContentful = () => {
const client = createClient({
    space: "gj7ykyejvpw4",
    accessToken: "bqsOzsXjHI-9FQ31LQHxAXbmubsukBUho7OysKtIHr8",
    host: ""
})
const getOrganisers = async() =>{
try{
const entries = await client.getEntries({
    content_type: "organiser",
    select: "fields",
})

const sanitizedEntries = entries.items.map((item) => {
    const avatar = item.fields.photoDeProfil.fields
    return{
        ...item.fields,
        avatar
    }
})
console.log('fetched data from contentful',sanitizedEntries)
return sanitizedEntries;
} catch(error){
console.log(`Error fetching authors: ${error}`)
}
}
return {getOrganisers}
}
export default useContentful