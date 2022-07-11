import React, { useState, useContext, useEffect } from 'react';
import { View, Image, Dimensions, Text,ScrollView, FlatList } from 'react-native';

const { width, height } = Dimensions.get('window');

const Home = ({ }) => {

    const DATA_ASSESSMENTS = [
        {
            id: "1",
            img: require('../../assets/images/health1.png'),
            title: "Advance Health Screening",
            pts: '1000'
        },
        {
            id: "2",
            img: require('../../assets/images/health2.png'),
            title: "Normal Health Screening",
            pts: '500'
        },
        {
            id: "3",
            img: require('../../assets/images/health3.png'),
            title: "Health CheckUp",
            pts: '100'
        },
    ];


    const DATA_CHALLENGES = [
        {
            id: "1",
            img: require('../../assets/images/suger.jpg'),
            title: "Say no to suger",
            pts: '50',
            time:'6 days left'
        },
        {
            id: "2",
            img: require('../../assets/images/run.png'),
            title: "5 km challenge",
            pts: '50',
            time:''
        },
        {
            id: "3",
            img: require('../../assets/images/run.png'),
            title: "10 km challenge",
            pts: '50',
            time:''
        },
    ];

    useEffect(() => {

    }, [])

    const renderItemAssessments = ({ item }) => (
        <View style={{
            height: 160, width: 300, marginLeft: 15, marginRight: 5, marginVertical: 10, backgroundColor: 'white', shadowColor: '#171717',
            shadowOffset: { width: -2, height: 4 },
            shadowOpacity: 0.2,
            shadowRadius: 3, borderRadius: 5, elevation: 8
        }}>
            <View style={{ width: '100%', height: '100%', flexDirection: 'row', alignItems: 'center' }}>
                <Image style={{ width: 120, height: 120, marginLeft: 10 }}
                    source={item.img}
                />
                <View style={{ height: '100%', paddingVertical: 15, justifyContent: 'space-around' }}>
                    <Text style={{ marginLeft: 10, fontSize: 18, width: '60%', fontWeight: 'bold' }}>{item.title}</Text>
                    <View>
                        <Text style={{ marginLeft: 10, fontSize: 15, color: 'gray' }}>Earn up to</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ marginLeft: 10, fontSize: 18, fontWeight: 'bold', color: '#3078A1' }}>{item.pts}
                                <Text style={{ marginLeft: 10, fontSize: 15, color: 'gray', fontWeight: 'normal' }}> pts</Text>

                            </Text>
                            <Image style={{ width: 20, height: 20, marginLeft: 50, tintColor: '#AF135F' }} tintColor='#AF135F'
                                source={require('../../assets/images/right-arrow.png')}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );


    const renderItemChallenges = ({ item }) => (
        <View style={{
            height: 350, width: 160, marginLeft: 15, marginRight: 5, marginVertical: 10, backgroundColor: 'white', shadowColor: '#171717',
            shadowOffset: { width: -2, height: 4 },
            shadowOpacity: 0.2,
            shadowRadius: 3, borderRadius: 5, elevation: 8
        }}>
            <View style={{ width: '100%', height: '100%', alignItems: 'center' }}>
                <Image style={{ width: 120, height: 120, marginTop:10 }}
                    source={item.img}
                />
                <View style={{ marginVertical:20, height:'55%', justifyContent:'space-around' }}>
                    <View>
                    <Text style={{fontSize: 18, width: '100%', fontWeight: 'bold' }}>{item.title}</Text>
                    <Text style={{fontSize: 15, color: 'gray' }}>{item.time}</Text>
                   </View>
                    <View>
                        <Text style={{fontSize: 15, color: 'gray' }}>Earn up to</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{fontSize: 18, fontWeight: 'bold', color: '#3078A1' }}>{item.pts}
                                <Text style={{fontSize: 15, color: 'gray', fontWeight: 'normal' }}> pts</Text>

                            </Text>
                            <Image style={{ width: 20, height: 20, marginLeft: 50, tintColor: '#AF135F' }} tintColor='#AF135F'
                                source={require('../../assets/images/right-arrow.png')}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );

    return (

        <ScrollView style={{ flex: 1 }}>
            <View style={{ width: width, marginTop: 20 }}>
                <Text style={{ fontSize: 22, fontWeight: 'bold', marginLeft: 15 }}>Assessments</Text>
                <FlatList
                    horizontal={true}
                    data={DATA_ASSESSMENTS}
                    renderItem={renderItemAssessments}
                    keyExtractor={(item) => item.id}
                />

            </View>

            <View style={{ width: width, marginTop: 30 }}>
                <Text style={{ fontSize: 22, fontWeight: 'bold', marginLeft: 15 }}>Challenges</Text>
                <FlatList
                    horizontal={true}
                    data={DATA_CHALLENGES}
                    renderItem={renderItemChallenges}
                    keyExtractor={(item) => item.id}
                />

            </View>

        </ScrollView>

    );
}

export default Home;