import React, {useEffect, useState} from 'react'
import { Text, View,SafeAreaView ,SearchBar , StyleSheet, FlatList, ActivityIndicator, TextInput} from 'react-native'
import ListItem from '../../components/ListItem'
import api from '../../services/api'
import axios from 'axios'
import { runOnJS, set } from 'react-native-reanimated'

export default function Home({ navigation, route }){
    const [pokemons, setPokemons] = useState([])
    const [offset, setOffset]   = useState(0)
    const [loading, setLoading] = useState(false)
    const [textSearch, setTextSearch] = useState('')
    const [searchResults, setSearchResuls] = useState('')
    const [searchPokemonList, setSearchPokemonList] = useState([])
    async function searchPokemon(text){
        //setTextSearch(text)
       
       
    }

    async function onSubmitSearch(){
        let text = textSearch.toLowerCase()
        try{
            let res = await api.get(`https://pokeapi.co/api/v2/pokemon/${text}`)
            console.log(res.data)
        }catch(e){
            //alert(e.message)
        }
    }

    const fetchData = async () => {
        if(loading) return

        setLoading(true)

        //try{
            

           let response = await api.get(`/pokemon?offset=${offset}&limit=${10}`)
           if(response.data){
                let { results } = response.data
                
                results.forEach( async (item) => {
                    let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${item.name}`)
                
                    setPokemons( prev => [...prev, response.data])

                    await pokemons.sort( (a,b) => a.id - b.id)
                   
                })


                setOffset(offset + 10)
                setLoading(false)   
           }

        //}catch(err){          
           // alert(err.message)
            //setLoading(false)
        //}
   }

    useEffect(() => {
    
       
       fetchData()
            
        

    }, [])
    
    return (
        <View style={styles.container}>
            <View style={{marginTop: 20, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{fontSize: 20, marginTop: 40, fontWeight:'bold', color:'#333'}}>Bem vindo(a) a pokedex</Text>
            </View>

            <FlatList
                // ListHeaderComponent={() =>  
                //     <TextInput 
                //         style={styles.input} 
                //         value={textSearch} 
                //         //autoFocus={true}
                //         onChangeText={(event) => setTextSearch(event.target.value)}
                //         //returnKeyType="search"
                //         //onSubmitEditing={onSubmitSearch}
                //         placeholder="Pesquisar Pokemon..."
                       
                //     />}
                initialNumToRender={10}
                windowSize={5}
                maxToRenderPerBatch={5}
                updateCellsBatchingPeriod={30}
                removeClippedSubviews={false}
                style={{marginTop: 30}}
                data={pokemons}
                contentContainerStyle={{marginHorizontal: 20}}
                keyExtractor={ item => item.id}
                renderItem={({item}) =>  <ListItem  data={item} navigation={navigation}/>}
                onEndReached={fetchData}
                onEndReachedThreshold={0.1}
                ListFooterComponent={<FooterList loading={loading} />}
            />
        </View>
    )
}

function FooterList({loading}){
    if(!loading) return null
    
    return(
        <View style={{padding: 15}}>
            <ActivityIndicator size={35} color='#fc0f4a'/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#f5f5f5'
    },
    input: {
        width: '100%',
        height: 45,
        backgroundColor: '#fff',
        marginTop: 20,
        fontSize: 18,
        padding: 10,
        borderRadius: 5,
        
    }
})