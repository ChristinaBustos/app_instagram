import { StyleSheet, Text, View,Image } from 'react-native'
import { Button, Avatar } from '@rneui/base'
import React, { useState } from 'react'
import Loading from '../../../../kernel/components/Loading'
import { getStorage,ref,uploadBytes,getDownloadURL } from "firebase/storage"
import * as Imagepicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'
import {getAuth, updateProfile} from "firebase/auth"

export default function UserLogged(props) {
    const auth = getAuth()
    const { user } = props
    const [show, setShow] = useState(false)
    const [tex, setTex] = useState('')

    const uploadImage = async (uri) =>{
        setTex('Actualizando Imagen')
        setShow(true);
        const response = await fetch(uri);
        console.log("repuesta",response);
        const {_bodyBlob } = response;
        const storage = getStorage();
        const storageRef = ref(storage,`avatars/${user.uid}`);
        return uploadBytes(storageRef,_bodyBlob);
    }

    const changeAvatar = async () =>{
        const resultPermission = await Permissions.askAsync(Permissions.CAMERA)
        if(resultPermission.permissions.camera.status !== 'denied'){
            let result = await Imagepicker.launchImageLibraryAsync({
                mediaTypes: Imagepicker.MediaTypeOptions.Images,
                allowsEditing: true,
                quality: 1
            });
            if(!result.canceled){
                uploadImage(result.assets[0].uri).then((response) => {
                    console.log("Image actualizada");
                    updateProfiles()
                }).catch((err)=>{
                    console.log("error",err);
                })
            }else{
                console.log("No se ha seleccionado una imagen");
            }
        }

    }

    const updateProfiles =  () =>{
        const storage = getStorage()
        getDownloadURL(ref(storage,`avatars/${user.uid}`)).then((url)=>{
            updateProfile(auth.currentUser,{
                photoURL: url,
            }).then(() => {
                setShow(false)
            })
        }).catch((err)=>{
                setShow(false)
                console.log("error al actualizar perfil",err);
            })
    }


    return (
        <View style={styles.container}>
            {user && (
                <View style={styles.infoContainer}> 
                <Avatar
                    size='xlarge'
                    rounded
                    source={{ uri: `${auth.currentUser.photoURL}` }}
                    containerStyle={styles.avatar}
                >
                    <Avatar.Accessory
                        size={50}
                        onPress={changeAvatar}
                    />
                </Avatar>
                <View>
                    <Text style={styles.displayName}>
                        Anna Christina Bustos
                    </Text>
                    <Text>
                        {user.providerData[0].email}
                    </Text>
                </View>
            </View>
            )}
            <Button
                title='Cerrar sesión'
                buttonStyle={styles.btn}
                onPress={() => auth.signOut()}
            />
            <View style={styles.infoContainer}>
            <Image 
                    style={styles.img}
                    source={require('../../../../assets/bo.jpg')}
            />
            <Image 
                    style={styles.img}
                    source={require('../../../../assets/otro.jpg')}
            />
            <Image 
                    style={styles.img}
                    source={require('../../../../assets/suke.jpg')}
            />
            </View>
           
            <Loading show={show} text='Actualizando Imagen' />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        minHeight: '100%',
        backgroundColor: '#FFF'
    },
    btn: {
        marginTop: 30,
        backgroundColor: '#E366ED',
        paddingVertical: 10,
        marginHorizontal: 80,
        borderRadius: 10,
        width: 250
    },
    infoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        paddingVertical: 30
    },
    avatar: {
        marginRight: 16
    },
    displayName:{
        fontWeight: 'bold',
        paddingBottom: 5
    },
    img:{
        marginTop: 30,
        width:150,
        height:150
    },
    img:{
        marginTop: 30,
        width:150,
        height:150
    }
})