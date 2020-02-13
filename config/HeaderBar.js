/*
    design by : Udayraj 
 */
import React from 'react';
import { BackHandler, View, Text, Image, StyleSheet, TouchableOpacity, } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import { Header } from 'native-base'
import { StylePaymentMethod } from '../config/CommonStyles';
import Constants from '../config/Constants'
import Modal from "react-native-modal";

class HeaderBar extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerMode: 'none',
      navigationOptions: {
        headerVisible: false,
      }
    };
  };
  constructor(props) {
    super(props)
    this.handleBackPress = this.handleBackPress.bind(this);
    this.state = {
      isLogoutModalVisible: false,
      isSuccessLogoutModal: false,
      isPaymentBackModalVisible: false,
    }
  }
  componentWillMount() {
    this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.handleBackPress)
  }
  componentWillUnmount() {
    this.backHandler.remove();
  }

  handleBackPress() {
    if (this.props.isPaymentBack) {
      this.setState({ isPaymentBackModalVisible: true });
    }
    return true
  }
  render() {
    const title = this.props.title;
    const isBack = this.props.isBack;
    const isNotification = this.props.isNotification;
    const isLogout = this.props.isLogout;
    const isPaymentBack = this.props.isPaymentBack;
    const isMenu = this.props.isMenu;
    return (
      <Header style={{ backgroundColor: Constants.COLOR_PRIMARY, padding: 0, margin: 0, justifyContent: 'center', alignItems: 'center', alignContent: 'center', }}>
        <View style={{ flex: 10, flexDirection: 'row', }}>

          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
            <TouchableOpacity style={isBack ? { display: 'flex', padding: 10, paddingLeft: 10, paddingRight: 40, } : { display: 'none' }}
              onPress={() => {
                if (isPaymentBack) {
                  this.handleBackPress(isPaymentBack)
                } else {
                  this.props.navigation.pop()
                }
              }
              }
            >
              <Image
                source={require('../images/back_white.png')}
                style={styles.headerIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity style={isMenu ? { display: 'flex', padding: 10, paddingLeft: 10, paddingRight: 40, } : { display: 'none' }}
              onPress={() => { }}
            >
              <Image
                source={require('../images/menu.png')}
                style={styles.headerIcon}
              />
            </TouchableOpacity>
          </View>

          <View style={{ flex: 8, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={styles.headerTitle}>{title}</Text>
          </View>

          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

            <TouchableOpacity style={isNotification ? { display: 'flex' } : { display: 'none' }}
              onPress={() => { this.props.navigation.navigate('Notification') }}
            >
              <Image
                source={require('../images/notification.png')}
                style={[styles.headerIcon, { width: 30, height: 30, }]}
              />
            </TouchableOpacity>

            <TouchableOpacity style={isLogout ? { display: 'flex' } : { display: 'none' }}
              onPress={() => {
                this.setState({ isLogoutModalVisible: true })

              }}
            >
              <Image
                source={require('../images/logout.png')}
                style={[styles.headerIcon, { width: 23, height: 25, }]}
              />
            </TouchableOpacity>

          </View>

        </View>

        <Modal
          isVisible={this.state.isLogoutModalVisible}
          animationIn={"fadeIn"}
          animationOut={"fadeOut"}
          transparent={true}
        >
          <View style={styles.modalView}>

            <TouchableOpacity style={{ alignSelf: 'flex-end', }}
              onPress={() => {
                this.setState({ isLogoutModalVisible: false })
              }}
            >
              <Image source={require('../images/close.png')}
                style={{ width: 15, height: 15 }}
              />
            </TouchableOpacity>

            <Image source={require('../images/logoutperson.png')}
              style={{ width: 60, height: 60, alignSelf: "center", paddingVertical: 5 }}
            />

            <Text style={styles.modalTitle}>
              Are you sure you want to logout?
              </Text>

            <View style={{ flexDirection: 'row', marginVertical: 5, padding: 5, justifyContent: 'center', alignItems: 'center' }}>

              <TouchableOpacity style={styles.modalButtonView}
                onPress={() => {
                  this.setState({ isLogoutModalVisible: false, isSuccessLogoutModal: true })
                  let setinter = setInterval(() => {
                    this.setState({ isSuccessLogoutModal: false })
                    clearInterval(setinter);
                    this.props.navigation.dispatch(
                      StackActions.reset({
                        index: 0,
                        actions: [NavigationActions.navigate({ routeName: 'SignIn' })],
                      })
                    )
                  }, 2000);
                }}
              >
                <Text style={styles.modalButtonText}>{Constants.YES}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.modalButtonView}
                onPress={() => { this.setState({ isLogoutModalVisible: false }) }}
              >
                <Text style={styles.modalButtonText}>{Constants.NO}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <Modal
          isVisible={this.state.isSuccessLogoutModal}
          animationIn={"fadeIn"}
          animationOut={"fadeOut"}
          transparent={true}
        >
          <View style={styles.modalView}>

            <TouchableOpacity style={{ alignSelf: 'flex-end', }}
              onPress={() => {
                this.setState({ isLogoutModalVisible: false })

                this.props.navigation.dispatch(
                  StackActions.reset({
                    index: 0,
                    actions: [NavigationActions.navigate({ routeName: 'SignIn' })],
                  })
                )

              }}
            >
              <Image source={require('../images/close.png')}
                style={{ width: 15, height: 15 }}
              />
            </TouchableOpacity>
            <Image source={require('../images/sent_icon.png')}
              style={{ width: 80, height: 80, alignSelf: "center", paddingVertical: 5 }}
            />
            <Text style={[styles.modalTitle, { width: '90%', fontSize: Constants.FONT_SIZE_EXTRA_LARGE }]}>
              You have logged out Successfully.
              </Text>
          </View>
        </Modal>

        <Modal          
          isVisible={this.state.isPaymentBackModalVisible}
          animationIn={"fadeIn"}
          animationOut={"fadeOut"}
          transparent={true}
        >
          <View style={styles.modalView}>
         
              <TouchableOpacity
                style={StylePaymentMethod.popclose}
                onPress={() => {
                  this.setState({ isPaymentBackModalVisible: false });

                }}
              >
                <Image style={StylePaymentMethod.popcloseimg} source={require('../images/close.png')}></Image>
              </TouchableOpacity>
              <Text style={[StylePaymentMethod.popbodythankstxt, { textAlign: 'center', width: '80%', alignSelf: 'center' }]}>Are you sure you want to Cancel the order?</Text>
              <TouchableOpacity style={StylePaymentMethod.modal_cancleBtn}
                onPress={() => {
                  this.setState({ isPaymentBackModalVisible: false });
                  this.props.navigation.pop();
                }}
              >
                <Text style={StylePaymentMethod.modal_cancleBtntext}>Yes</Text>
              </TouchableOpacity>

          </View>
        </Modal>


      </Header>
    );
  }
};
const styles = StyleSheet.create({
  modalView: {
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Constants.COLOR_WHITE,
  },
  modalIcon: {
    width: 60,
    height: 60,
    marginVertical: 5,
    alignSelf: 'center',
    resizeMode: "stretch",
  },
  modalTitle: {
    width: '72%',
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: 8,
    color: Constants.COLOR_GREY_DARK,
    fontSize: Constants.FONT_SIZE_LARGE,
  },
  modalButtonView: {
    width: '40%',
    padding: 12,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    backgroundColor: Constants.COLOR_GREEN,
  },
  modalButtonText: {
    textAlign: 'center',
    textTransform: 'uppercase',
    color: Constants.COLOR_WHITE,
    fontSize: Constants.FONT_SIZE_LARGE,
  },
  headerCol: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E8E8E8',
  },
  headerIcon: {
    tintColor: Constants.COLOR_WHITE,
    width: 25,
    height: 25,
    resizeMode: 'cover',
  },
  headerTitle: {
    fontSize: Constants.FONT_SIZE_EXTRA_LARGE,
    fontFamily: "Roboto-Bold",
    textTransform: 'uppercase',
    color: Constants.COLOR_WHITE,
    alignSelf: 'center',
    textAlign: 'center',
    letterSpacing: 0.3,
  },
});
export default HeaderBar;