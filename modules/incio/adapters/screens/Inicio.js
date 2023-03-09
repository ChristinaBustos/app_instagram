import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Loading from '../../../../kernel/components/Loading'
import { useNavigation } from '@react-navigation/native'
import {app} from '../../../../config/utils/firebase'
import {getAuth, onAuthStateChanged} from 'firebase/auth'
import InicioGuest from './InicioGuest'
import InicioLogged from './InicioLogged'


export default function Inicio() {
  const navigation = useNavigation()
  const [user, setUser] = useState(null)
  const [session, setSession] = useState(null)
  useEffect(() => {
      const auth = getAuth()
      onAuthStateChanged(auth,(credencial)=>{
          setUser(credencial)
          !credencial ? setSession(false) : setSession(true)
      })
  }, [])
  if (session == null) return <Loading show={true} text='Cargando' />
  return session ? (<InicioLogged user={user}/>) : (<InicioGuest navigation={navigation}/>)
}
