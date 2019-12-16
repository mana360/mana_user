import { Dimensions, StyleSheet } from 'react-native';
import Constants from '../config/Constants';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const StyleHelpAndSupport = StyleSheet.create({
    supportTitle: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: Constants.fontSizeExtraLarge,
        color: Constants.COLOR_GREY_DARK,
        textTransform: "capitalize",
    },
    userImage: {
        width: 120,
        height: 120,
        resizeMode: "cover",
        marginRight: 10,
        borderRadius: 60,
        borderWidth: 8,
        borderColor: Constants.COLOR_WHITE,
    },
    icon: {
        width: 20,
        height: 20,
        resizeMode: 'stretch',
    },
    name: {
        marginLeft: 10,
        fontSize: Constants.FONT_SIZE_LARGE,
        color: Constants.COLOR_GREY_DARK,
    },
    pickerView: {
        padding: 15,
        paddingLeft: 25,
        marginHorizontal: 15,
        borderWidth: 0.3,
        borderRadius: 40,
        marginVertical: 25,
        borderColor: Constants.COLOR_GREY_LIGHT,
    },
    pickerTitle: {
        fontWeight: 'bold',
        textTransform: 'capitalize',
        color: Constants.COLOR_GREY_DARK,
        fontSize: Constants.FONT_SIZE_LARGE,
    },
    picker: {
        height: 30,
        maxHeight: 70,
    },
    messageView: {
        height: 150,
        maxHeight: 150,
        padding: 15,
        paddingLeft: 25,
        marginHorizontal: 15,
        marginTop: 20,
        borderWidth: 0.3,
        borderRadius: 7,
        borderColor: Constants.COLOR_GREY_LIGHT,
    },
    messageTitle: {
        textTransform: 'capitalize',
        fontWeight: 'bold',
        color: Constants.COLOR_GREY_DARK,
        fontSize: Constants.FONT_SIZE_LARGE,
    },
    messageText: {
        justifyContent: 'center',
        color: Constants.COLOR_GREY_DARK,
        fontSize: Constants.FONT_SIZE_LARGE,
    },
    buttonView: {
        padding: 10,
        borderRadius: 25,
        marginTop: "20%",
        marginBottom: 10,
        marginHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Constants.COLOR_GREEN,
    },
    buttonText: {
        paddingTop: 10,
        textAlign: 'center',
        color: Constants.COLOR_WHITE,
        fontSize: Constants.FONT_SIZE_LARGE,
        textTransform: 'uppercase',
    },
    modalView: {
        width: wp('80%'),
        height: hp('35%'),
        justifyContent: 'center',
        backgroundColor: Constants.COLOR_WHITE
    },
    leftCross_View: {
        alignSelf: 'flex-end',
    },
    leftCrossText: {
        right: 10,
        top: 1,
        fontSize: Constants.FONT_SIZE_EXTRA_LARGE,
        color: Constants.COLOR_GREY_LIGHT,

    },
    modalImage: {
        alignSelf: 'center',
        width: 100,
        height: 100,
    },
    modalMsg: {
        alignSelf: 'center',
        fontWeight: 'bold',
        textTransform: 'capitalize',
        fontSize: Constants.FONT_SIZE_EXTRA_LARGE,
        color: Constants.COLOR_GREY_LIGHT,
        marginVertical: 10,
    },
    modalButton: {
        width: '40%',
        borderRadius: 50,
        backgroundColor: Constants.COLOR_GREEN,
        alignSelf: 'center',
        justifyContent: 'center',
        marginVertical: 10,
    },
    modalButtonText: {
        paddingTop: 10,
        paddingBottom: 10,
        alignSelf: 'center',
        color: Constants.COLOR_WHITE,
        fontSize: Constants.FONT_SIZE_EXTRA_LARGE,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },

})
const StyleTripHelpAndSupport = StyleSheet.create({
    supportTitle: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: Constants.fontSizeExtraLarge,
        color: Constants.COLOR_GREY_DARK,
        textTransform: "capitalize",
    },
    userImage: {
        width: 120,
        height: 120,
        resizeMode: "cover",
        marginRight: 10,
        borderRadius: 60,
        borderWidth: 8,
        borderColor: Constants.COLOR_WHITE,
    },
    icon: {
        width: 20,
        height: 20,
        resizeMode: 'stretch',
    },
    name: {
        marginLeft: 10,
        fontSize: Constants.FONT_SIZE_LARGE,
        color: Constants.COLOR_GREY_DARK,
    },
    pickerView: {
        padding: 15,
        paddingLeft: 25,
        marginHorizontal: 15,
        borderWidth: 0.3,
        borderRadius: 40,
        marginVertical: 25,
        borderColor: Constants.COLOR_GREY_LIGHT,
    },
    pickerTitle: {
        fontWeight: 'bold',
        textTransform: 'capitalize',
        color: Constants.COLOR_GREY_DARK,
        fontSize: Constants.FONT_SIZE_LARGE,
    },
    picker: {
        height: 30,
        maxHeight: 70,
    },
    messageView: {
        height: 150,
        maxHeight: 150,
        padding: 15,
        paddingLeft: 25,
        marginHorizontal: 15,
        marginTop: 20,
        borderWidth: 0.3,
        borderRadius: 7,
        borderColor: Constants.COLOR_GREY_LIGHT,
    },
    messageTitle: {
        textTransform: 'capitalize',
        fontWeight: 'bold',
        color: Constants.COLOR_GREY_DARK,
        fontSize: Constants.FONT_SIZE_LARGE,
    },
    messageText: {
        justifyContent: 'center',
        color: Constants.COLOR_GREY_DARK,
        fontSize: Constants.FONT_SIZE_LARGE,
    },
    bottomButtonView: {
        flexDirection: 'row',
        marginTop: 45,
        marginBottom: 20,
    },
    bottomButtonlabel: {
        backgroundColor: Constants.COLOR_GREEN,
        width: '40%',
        marginLeft: 25,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
    },
    bottomButtonText: {
        padding: 10,
        color: Constants.COLOR_WHITE,
        fontSize: Constants.FONT_SIZE_LARGE,
        textTransform: 'uppercase',
    },
    modalView: {
        width: wp('80%'),
        height: hp('35%'),
        justifyContent: 'center',
        backgroundColor: Constants.COLOR_WHITE
    },
    leftCross_View: {
        alignSelf: 'flex-end',
        width: 10,
    },
    leftCrossText: {
        right: 10,
        top: 1,
        fontSize: Constants.FONT_SIZE_EXTRA_LARGE,
        color: Constants.COLOR_GREY_LIGHT,

    },
    modalImage: {
        alignSelf: 'center',
        width: 100,
        height: 100,
    },
    modalMsg: {
        alignSelf: 'center',
        fontWeight: 'bold',
        textTransform: 'capitalize',
        fontSize: Constants.FONT_SIZE_EXTRA_LARGE,
        color: Constants.COLOR_GREY_LIGHT,
        marginVertical: 10,
    },
    modalButton: {
        width: '40%',
        borderRadius: 50,
        backgroundColor: Constants.COLOR_GREEN,
        alignSelf: 'center',
        justifyContent: 'center',
        marginVertical: 10,
    },
    modalButtonText: {
        paddingTop: 10,
        paddingBottom: 10,
        alignSelf: 'center',
        color: Constants.COLOR_WHITE,
        fontSize: Constants.FONT_SIZE_EXTRA_LARGE,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },

})
const StyleNotification = StyleSheet.create({
    row: {
        flex: 10,
        flexDirection: 'row',
        padding: 5,
        marginVertical: 5,
        backgroundColor: Constants.COLOR_WHITE,
    },
    col1: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        padding: 5,
    },
    col2: {
        flex: 8,
        alignContent: 'center',
        paddingLeft: 15,
    },
    icon: {
        width: 45,
        height: 45,
        resizeMode: 'stretch',
    },
    title: {
        fontWeight: 'bold',
        marginVertical: 3,
        textTransform: "capitalize",
        fontSize: Constants.FONT_SIZE_LARGE,
        color: Constants.COLOR_GREY_DARK,
    },
    desc: {
        marginVertical: 3,
        fontSize: Constants.FONT_SIZE__MEDIUM,
        color: Constants.COLOR_GREY_LIGHT,
    },
    dateTime: {
        marginVertical: 3,
        fontSize: Constants.FONT_SIZE_SMALL,
        color: Constants.COLOR_GREY_SHADED,
    },
    arrow: {
        width: 25,
        height: 25,
        left: 5,
        resizeMode: 'stretch'
    },

})
const StyleRateAndReview = StyleSheet.create({
    topCircle: {
        position: 'absolute',
        zIndex: -1,
        width:wp('120%'),
        height: 420,
        borderRadius: 205,
        top: '-175%',
        alignSelf: 'center',
        backgroundColor: Constants.COLOR_PRIMARY,
    },
    ImageCurrentTrip: {
        width: 130,
        height: 130,
        borderRadius: 70,
        borderWidth: 8,
        borderColor: Constants.COLOR_WHITE,
        alignSelf: 'center',
        marginTop: '12%',
    },
    TripDetail_View: {
        backgroundColor: Constants.COLOR_GREY_DARK,
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 50,
        marginTop: 15,
        marginBottom: 15,
    },
    TripDetail_Text: {
        paddingBottom: 8,
        paddingTop: 8,
        textTransform: 'uppercase',
        fontSize: Constants.FONT_SIZE__MEDIUM,
        color: Constants.COLOR_WHITE
    },
    InputBox_Container: {
        height: 120,
        maxHeight: 120,
        marginVertical: 15,
        borderRadius: 10,
        paddingBottom: 50,
        borderWidth: 0.6,
        width: '90%',
        alignSelf: 'center',
        borderColor: Constants.COLOR_GREY_LIGHT,
    },
    ratingText: {
        fontWeight: 'bold',
        marginLeft: 40,
        color: Constants.COLOR_GREY_SHADED,
        fontSize: Constants.FONT_SIZE_LARGE,
    },
    labelView: {
        top: -11,
        zIndex: 1,
        marginLeft: 20,
        position: 'absolute',
        justifyContent: 'center',
        backgroundColor: Constants.COLOR_WHITE,
    },
    labelText: {
        paddingLeft: 5,
        paddingRight: 5,
        fontWeight: 'bold',
        color: Constants.COLOR_GREY_SHADED,
        fontSize: Constants.FONT_SIZE_LARGE,
    },
    textInputbox: {
        width: '100%',
        paddingBottom: 30,
        paddingLeft: 22,
        paddingRight: 5,
        alignSelf: 'center',
    },
    buttonView: {
        width: '90%',
        paddingTop: 10,
        paddingBottom: 10,
        marginTop: '10%',
        marginBottom: 20,
        alignSelf: 'center',
        borderRadius: 20,
        backgroundColor: Constants.COLOR_GREEN,
    },
    buttonText: {
        alignSelf: 'center',
        textTransform: "uppercase",
        color: Constants.COLOR_WHITE,
        fontWeight: 'bold'
    },
    modalView: {
        width: wp('80%'),
        height: hp('35%'),
        justifyContent: 'center',
        backgroundColor: Constants.COLOR_WHITE
    },
    leftCross_View: {
        alignSelf: 'flex-end',
    },
    leftCrossText: {
        right: 10,
        top: 1,
        fontSize: Constants.FONT_SIZE_EXTRA_LARGE,
        color: Constants.COLOR_GREY_LIGHT,
    },
    modalImage: {
        alignSelf: 'center',
        width: 100,
        height: 100,
    },
    modalMsg: {
        alignSelf: 'center',
        fontWeight: 'bold',
        textTransform: 'capitalize',
        fontSize: Constants.FONT_SIZE_EXTRA_LARGE,
        color: Constants.COLOR_GREY_LIGHT,
        marginVertical: 10,
    },
    modalButton: {
        width: '40%',
        borderRadius: 50,
        backgroundColor: Constants.COLOR_GREEN,
        alignSelf: 'center',
        justifyContent: 'center',
        marginVertical: 10,
    },
    modalButtonText: {
        paddingTop: 10,
        paddingBottom: 10,
        alignSelf: 'center',
        color: Constants.COLOR_WHITE,
        fontSize: Constants.FONT_SIZE_EXTRA_LARGE,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },

})
const StyleViewCompletedDetail = StyleSheet.create({
    topCircle: {
        position: 'absolute',
        zIndex: -1,
        width:wp('120%'),
        height: 420,
        borderRadius: 205,
        top: '-175%',
        alignSelf: 'center',
        backgroundColor: Constants.COLOR_PRIMARY,
    },
    ImageCurrentTrip: {
        width: 130,
        height: 130,
        borderRadius: 70,
        borderWidth: 8,
        borderColor: Constants.COLOR_WHITE,
        alignSelf: 'center',
        marginTop: '12%',
    },
    label: {
        fontSize: Constants.FONT_SIZE_EXTRA_LARGE,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: Constants.COLOR_GREY_DARK,
    },
    bottomline: {
        borderBottomColor: Constants.COLOR_GREEN,
        borderBottomWidth: 5,
        width: '20%',
        alignSelf: 'center',
        borderRadius: 50,
        marginTop: '2%',
        marginBottom: 25
    },
    row: {
        flexDirection: 'row',
        width: '90%',
        paddingTop: 20,
        paddingBottom: 20,
        alignSelf: 'center',
        borderBottomWidth: 1.5,
        borderBottomColor: Constants.COLOR_GREY
    },
    col1: {
        width: '50%'
    },
    col1Text: {
        paddingRight: 5,
        fontSize: Constants.FONT_SIZE_LARGE,
        color: Constants.COLOR_GREY_DARK,
        fontWeight: 'bold',
    },
    col2: {
        width: '50%',
    },
    col2Text: {
        paddingLeft: 10,
        fontSize: Constants.FONT_SIZE_LARGE,
        color: Constants.COLOR_GREY_DARK,

    },
})
const StyleSignIn = StyleSheet.create({
    bgImage: {
        width: wp('100%'),
        height: hp('100%'),
        zIndex: -1,
        position: 'absolute',
        resizeMode: 'stretch',
    },
    loginBox: {
        width: wp('90%'),
        paddingRight: 15,
        paddingLeft: 15,
        justifyContent: 'center',
        backgroundColor: Constants.COLOR_WHITE,
    },
    logoImage: {
        width: 150,
        height: 150,
        borderRadius: 75,
        top: -65,
        alignSelf: 'center',
        position: 'absolute',
    },
    loginLabel: {
        marginTop: "33%",
        alignSelf: 'center',
        color: 'black',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: Constants.FONT_SIZE_EXTRA_LARGE,
        color: Constants.COLOR_GREY_DARK
    },
    textInput_container: {
        marginVertical: 15
    },
    textInput_style: {
        borderWidth: 0.7,
        borderRadius: 50,
        paddingLeft: 25,
        marginVertical: 5,
        borderColor: Constants.COLOR_GREY_LIGHT
    },
    labelBox: {
        zIndex: 1,
        left: 15,
        paddingLeft: 2,
        paddingRight: 2,
        marginTop: -7,
        marginLeft: "3%",
        position: 'absolute',
        flexDirection: 'row',
        backgroundColor: 'white',
        borderColor: Constants.COLOR_GREY_LIGHT
    },
    LabelBoxIcon: {
        width: 18,
        height: 18,
        marginHorizontal: 3,
    },
    labelBoxText: {
        fontWeight: 'bold',
        textTransform: 'capitalize',
        fontSize: Constants.fontSizeLarge,
        color: Constants.COLOR_GREY_DARK,
    },
    loginButton: {
        width: wp('80%'),
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 15,
        backgroundColor: Constants.COLOR_GREEN,
    },
    Login_buttonText: {
        color: Constants.COLOR_WHITE,
        textTransform: 'uppercase',
        padding: 15,
        fontWeight: 'bold',
    },
    forgotButton: {
        marginTop: 20,
        marginBottom: 25,
    },
    forgotLabel: {
        alignSelf: 'center',
        color: Constants.COLOR_GREY_LIGHT,
        fontSize: Constants.FONT_SIZE_LARGE,
    },
    memberButton: {
        position: 'absolute',
        bottom: 25,
        alignSelf: 'center',
    },
    memberLabel: {
        color: Constants.COLOR_WHITE,
        fontSize: Constants.FONT_SIZE_LARGE,
    },

})
const StyleTermsAndCondition = StyleSheet.create({
    container: {
        marginHorizontal: 15,
        marginVertical: 5,
        padding: 5,
    },
    title: {
        fontWeight: 'bold',
        marginVertical: 3,
        fontSize: Constants.FONT_SIZE__MEDIUM,
        color: Constants.COLOR_GREY_DARK,
    },
    desc: {
        marginVertical: 2,
        textAlign: 'justify',
        fontSize: Constants.FONT_SIZE__MEDIUM,
        color: Constants.COLOR_GREY_LIGHT,
    },
})
const StyleDashboard = StyleSheet.create({
    topCircle: {
        width:wp('120%'),
        height: 420,
        borderRadius: 200,
        marginTop: '-85%',
        alignSelf: 'center',
        backgroundColor: Constants.COLOR_PRIMARY,
    },
    cardView: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    ImageView: {
        flex: 1,
        alignSelf: 'center',
        paddingLeft: 5,
        paddingRight: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 0.5,
    },
    imageD: {
        width: 50,
        height: 50
    },
    textD: {
        paddingRight: 1,
        marginTop: 5,
        fontSize: 8,
        textAlign: "center",
        alignSelf: 'center',
        textTransform: 'capitalize'

    },
    labelText: {
        marginTop: 10,
        marginBottom: 5,
        textAlign: 'center',
        alignSelf: 'center',
        fontWeight: 'bold',
        textTransform: "capitalize",
        color: Constants.COLOR_GREY_SHADED,
        fontSize: Constants.FONT_SIZE_EXTRA_LARGE,
    },
    bottomLine: {
        width: '20%',
        borderRadius: 20,
        borderBottomWidth: 5,
        alignSelf: 'center',
        borderBottomColor: Constants.COLOR_GREEN,
        marginBottom: 20
    },
    row: {
        marginTop: 5,
        marginBottom: 15,
        flexDirection: 'row',
        borderBottomWidth: 1.3,
        paddingBottom: 10,
        justifyContent: "center",
        alignItems: 'center',
        borderBottomColor: Constants.COLOR_GREY
    },
    col1: {
        width: '30%',
        paddingLeft: 20,
    },
    image: {
        width: 90,
        height: 90,
    },
    labelText2: {
        textTransform: "capitalize",
        fontWeight: 'bold',
        paddingBottom: 5,
    },
    descText: {
        color: Constants.COLOR_GREY_LIGHT,
        fontSize: Constants.FONT_SIZE_SMALL,
    },
    col2: {
        width: '70%',
        paddingLeft: 20,
        paddingRight: 10,
    },
})
const StyleTruckBooking = StyleSheet.create({
    topCircle: {
        width:wp('120%'),
        height: 420,
        borderRadius: 200,
        marginTop: '-85%',
        alignSelf: 'center',
        backgroundColor: Constants.COLOR_PRIMARY,
    },
    cardView: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    ImageView: {
        flex: 1,
        alignSelf: 'center',
        paddingLeft: 5,
        paddingRight: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 0.5,
    },
    imageD: {
        width: 50,
        height: 50
    },
    textD: {
        paddingRight: 1,
        marginTop: 5,
        fontSize: 8,
        textAlign: "center",
        alignSelf: 'center',
        textTransform: 'capitalize'

    },
    labelText: {
        marginTop: 10,
        marginBottom: 5,
        textAlign: 'center',
        alignSelf: 'center',
        fontWeight: 'bold',
        textTransform: "capitalize",
        color: Constants.COLOR_GREY_SHADED,
        fontSize: Constants.FONT_SIZE_EXTRA_LARGE,
    },
    bottomLine: {
        width: '20%',
        borderRadius: 20,
        borderBottomWidth: 5,
        alignSelf: 'center',
        borderBottomColor: Constants.COLOR_GREEN,
        marginBottom: 20
    },
    row: {
        marginTop: 5,
        marginBottom: 10,
        flexDirection: 'row',
        borderBottomWidth: 1.3,
        paddingBottom: 10,
        justifyContent: "center",
        alignItems: 'center',
        borderBottomColor: Constants.COLOR_GREY,
        backgroundColor: Constants.COLOR_WHITE
    },
    col1: {
        width: '30%',
        paddingLeft: 20,
    },
    image: {
        width: 90,
        height: 90,
    },
    labelText2: {
        paddingTop: 5,
        paddingBottom: 5,
        textTransform: "capitalize",
        fontWeight: 'bold',
        color: Constants.COLOR_GREY_DARK,
    },
    descText: {
        color: Constants.COLOR_GREY_LIGHT,
        fontSize: Constants.FONT_SIZE_SMALL,
    },

    button: {
        width: '35%',
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        backgroundColor: Constants.COLOR_GREEN
    },
    buttonLabel: {
        paddingTop: 5,
        paddingBottom: 5,
        textTransform: "uppercase",
        color: Constants.COLOR_WHITE,
        fontSize: Constants.FONT_SIZE__MEDIUM
    },
    col2: {
        width: '70%',
        paddingLeft: 20,
        paddingRight: 10,
    },
})
const StyleCurrentTrip = StyleSheet.create({
    row: {
        flex: 10,
        flexDirection: 'row',
        padding: 5,
        marginVertical: 5,
        backgroundColor: Constants.COLOR_WHITE,
    },
    col1: {
        flex: 1.5,
        justifyContent: 'center',
        alignContent: 'center',
        padding: 5,
    },
    icon: {
        width: 60,
        height: 60,
        paddingRight: 5,
        paddingLeft: 5,
        resizeMode: 'stretch',
    },
    col2: {
        paddingLeft: 5,
        flex: 8,
        alignContent: 'center',
        paddingLeft: 15,
    },
    title: {
        textTransform: "capitalize",
        color: Constants.COLOR_GREY_DARK,
        fontSize: Constants.FONT_SIZE_EXTRA_LARGE,
        fontWeight: 'bold',
        padding: 5
    },
    bottomLine: {
        borderBottomWidth: 0.8,
        borderBottomColor: Constants.COLOR_GREY_DARK,
        marginBottom: 5,
    },
    imageIcon: {
        width: 13,
        height: 13,
    },
    labeltext: {
        paddingLeft: 2,
        marginBottom: 8,
        fontWeight: 'bold',
        textTransform: "capitalize",
        color: Constants.COLOR_GREY_DARK,
        fontSize: Constants.FONT_SIZE_SMALL,
    },
    datacss: {
        paddingLeft: 3,
        color: Constants.COLOR_GREY_DARK,
        fontSize: Constants.FONT_SIZE_SMALL
    },
    desc: {
        fontSize: Constants.FONT_SIZE__MEDIUM,
        color: Constants.COLOR_GREY_LIGHT,
    },
    col3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    arrow: {
        width: 20,
        height: 20,
        left: 5,
        alignSelf: 'center',
        resizeMode: 'stretch'
    },

})
const StyleViewCurrentTrip = StyleSheet.create({
    topCircle: {
        position: 'absolute',
        zIndex: -1,
        width:wp('120%'),
        height: 420,
        borderRadius: 205,
        top: '-195%',
        alignSelf: 'center',
        backgroundColor: Constants.COLOR_PRIMARY,
    },
    ImageCurrentTrip: {
        width: 130,
        height: 130,
        borderRadius: 70,
        borderWidth: 8,
        borderColor: Constants.COLOR_WHITE,
        alignSelf: 'center',
        marginTop: '8%',
        resizeMode: "cover"
    },
    sideImage: {
        width: 65,
        height: 65,
        marginTop: '15%',
        borderWidth: 6,
        marginHorizontal: 15,
        borderColor: Constants.COLOR_WHITE,
        borderRadius: 35,
        resizeMode: "cover",
    },
    title: {
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: Constants.FONT_SIZE_EXTRA_LARGE,
        color: Constants.COLOR_GREY_DARK
    },
    bottomLine: {
        borderBottomColor: Constants.COLOR_GREEN,
        borderBottomWidth: 5,
        width: '15%',
        alignSelf: 'center',
        borderRadius: 50,
        marginTop: 5,
        marginBottom: 20,
    },
    row: {
        flexDirection: 'row',
        width: '90%',
        paddingTop: 20,
        paddingBottom: 20,
        alignSelf: 'center',
        borderBottomWidth: 1.5,
        borderBottomColor: Constants.COLOR_GREY
    },
    col1: {
        width: '50%'
    },
    col1Text: {
        paddingRight: 5,
        fontSize: Constants.FONT_SIZE_LARGE,
        color: Constants.COLOR_GREY_DARK,
        fontWeight: 'bold',
    },
    col2: {
        width: '50%',
        height: '100%',
        alignItems: 'center',
        flexDirection: 'row',
    },
    col2Text: {
        paddingLeft: 10,
        fontSize: Constants.FONT_SIZE_LARGE,
        color: Constants.COLOR_GREY_DARK,
    },
    bottomButton: {
         paddingHorizontal:25,
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 25,
        backgroundColor: Constants.COLOR_GREEN,
        borderRadius: 50,
    },
    buttonIcon: {
        width: 20,
        height: 20,
        padding: 5,
        marginRight: 5
    },
    buttonText: {
        color: Constants.COLOR_WHITE,
        paddingTop: 10,
        paddingBottom: 10,
        textTransform: "uppercase",
    },
})
const StyleViewUpcomingTrip = StyleSheet.create({
    topCircle: {
        position: 'absolute',
        zIndex: -1,
        width: 420,
        height: 420,
        borderRadius: 205,
        top: '-195%',
        alignSelf: 'center',
        backgroundColor: Constants.COLOR_PRIMARY,
    },
    ImageCurrentTrip: {
        width: 130,
        height: 130,
        borderRadius: 70,
        borderWidth: 8,
        borderColor: Constants.COLOR_WHITE,
        marginTop: '8%',
        resizeMode: "cover",
        marginHorizontal: 10,
    },
    imageSideView: {
        marginTop: '17%',
        marginLeft: 35
    },
    sideImage: {
        width: 70,
        height: 70,
        borderWidth: 6,
        borderColor: Constants.COLOR_WHITE,
        borderRadius: 35,
    },
    title: {
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: Constants.FONT_SIZE_EXTRA_LARGE,
        color: Constants.COLOR_GREY_DARK
    },
    bottomLine: {
        borderBottomColor: Constants.COLOR_GREEN,
        borderBottomWidth: 5,
        width: '15%',
        alignSelf: 'center',
        borderRadius: 50,
        marginTop: 5,
        marginBottom: 20,
    },
    row: {
        flexDirection: 'row',
        width: '90%',
        paddingTop: 20,
        paddingBottom: 20,
        alignSelf: 'center',
        borderBottomWidth: 1.5,
        borderBottomColor: Constants.COLOR_GREY
    },
    col1: {
        width: '50%'
    },
    col1Text: {
        paddingRight: 5,
        fontSize: Constants.FONT_SIZE_LARGE,
        color: Constants.COLOR_GREY_DARK,
        fontWeight: 'bold',
    },
    col2: {
        width: '50%',
        height: '100%',
        alignItems: 'center',
        flexDirection: 'row',
    },
    col2Text: {
        paddingLeft: 10,
        fontSize: Constants.FONT_SIZE_LARGE,
        color: Constants.COLOR_GREY_DARK,
    },
    bottomButton: {
        paddingHorizontal:25,
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
        backgroundColor: Constants.COLOR_RED,
        borderRadius: 50,
    },
    buttonIcon: {
        width: 20,
        height: 20,
        padding: 5,
        marginRight: 5
    },
    buttonText: {
        color: Constants.COLOR_WHITE,
        paddingTop: 10,
        paddingBottom: 10,
        textTransform: "uppercase",
    },
    InvoiceModalView: {
        backgroundColor: Constants.COLOR_WHITE,
        width: wp('95%'),
        justifyContent: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        alignSelf: 'center',

    },
    InvoiceTitle: {
        color: Constants.COLOR_GREEN,
        textTransform: 'uppercase',
        fontSize: Constants.fontSizeLarge,
        fontWeight: 'bold',
        paddingTop: 10,
        paddingBottom: 5,
    },
    invoiceLabel: {
        textTransform: "capitalize",
        fontSize: Constants.FONT_SIZE_SMALL,
        paddingLeft: 2,
        paddingRight: 2,
    },
    InvoicebottomLine: {
        borderBottomWidth: 2,
        borderBottomColor: Constants.COLOR_GREY_DARK,
        width: '99%',
        alignSelf: 'center',
        borderRadius: 50,
    },
    buttonView: {
        backgroundColor: Constants.COLOR_GREEN,
        width: '50%',
        alignSelf: 'center',
        borderRadius: 20,
        marginVertical: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cancelModalView: {
        width: wp('80%'),
        borderRadius:5,
        backgroundColor: Constants.COLOR_WHITE,
        alignSelf: 'center',
        justifyContent: 'center'
    },
    leftcrossView: {
        alignSelf: 'flex-end',
        right: 8,
        top: 8,
        marginBottom:15
    },
    modalMsg: {
        width: wp('80%'),
        fontSize: Constants.FONT_SIZE_LARGE,
        color: Constants.COLOR_GREY_DARK,
        fontWeight: "bold",
        textAlign: "center",
        alignSelf: 'center',
        marginBottom:15

    },
    cancelModalButton: {
        width: wp('30%'),
        justifyContent:'center',
        marginHorizontal:10,
        backgroundColor: Constants.COLOR_GREEN,
        paddingVertical:10,
        borderRadius:20,
    },
    cancelModalButtonText: {
        fontWeight:'bold',
        alignSelf:'center',
        textTransform:"uppercase",
        color:Constants.COLOR_WHITE
    }
})
const StyleUpcomingTrip = StyleSheet.create({
    row: {
        flex: 10,
        flexDirection: 'row',
        padding: 5,
        marginVertical: 5,
        backgroundColor: Constants.COLOR_WHITE,
    },
    col1: {
        flex: 1.5,
        justifyContent: 'center',
        alignContent: 'center',
        padding: 5,
    },
    icon: {
        width: 60,
        height: 60,
        paddingRight: 5,
        paddingLeft: 5,
        resizeMode: 'stretch',
    },
    col2: {
        paddingLeft: 5,
        flex: 8,
        alignContent: 'center',
        paddingLeft: 15,
    },
    title: {
        textTransform: "capitalize",
        color: Constants.COLOR_GREY_DARK,
        fontSize: Constants.FONT_SIZE_EXTRA_LARGE,
        fontWeight: 'bold',
        padding: 5
    },
    bottomLine: {
        borderBottomWidth: 0.8,
        borderBottomColor: Constants.COLOR_GREY_DARK,
        marginBottom: 5,
    },
    imageIcon: {
        width: 13,
        height: 13,
    },
    labeltext: {
        paddingLeft: 2,
        marginBottom: 8,
        fontWeight: 'bold',
        textTransform: "capitalize",
        color: Constants.COLOR_GREY_DARK,
        fontSize: Constants.FONT_SIZE_SMALL,
    },
    datacss: {
        paddingLeft: 3,
        color: Constants.COLOR_GREY_DARK,
        fontSize: Constants.FONT_SIZE_SMALL
    },
    desc: {
        fontSize: Constants.FONT_SIZE__MEDIUM,
        color: Constants.COLOR_GREY_LIGHT,
    },
    col3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    arrow: {
        width: 20,
        height: 20,
        left: 5,
        alignSelf: 'center',
        resizeMode: 'stretch'
    },

})
const StyleInvoice = StyleSheet.create({
    InvoiceModalView: {
        backgroundColor: Constants.COLOR_WHITE,
        width: wp('95%'),
        justifyContent: 'center',
        paddingLeft: 5,
        paddingRight: 5,
        marginHorizontal: 10,
        alignSelf: 'center',
        height: hp('80%'),
        maxHeight: hp('80%'),
    },
    crossView: {
        alignSelf: 'flex-end',
        top: 5,
        right: 5
    },
    crossText: {
        color: Constants.COLOR_GREEN_DARK,
    },
    InvoiceTitle: {
        color: Constants.COLOR_GREEN,
        textTransform: 'uppercase',
        fontSize: Constants.fontSizeLarge,
        fontWeight: 'bold',
        paddingTop: 10,
        paddingBottom: 5,
    },
    invoiceLabel: {
        textTransform: "capitalize",
        fontSize: Constants.FONT_SIZE_SMALL,
        paddingLeft: 2,
        paddingRight: 2,
    },
    InvoicebottomLine: {
        borderBottomWidth: 2,
        borderBottomColor: Constants.COLOR_GREY_DARK,
        width: '99%',
        alignSelf: 'center',
        borderRadius: 50,
    },
    buttonView: {
        backgroundColor: Constants.COLOR_GREEN,
        width: '50%',
        alignSelf: 'center',
        borderRadius: 20,
        marginVertical: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: Constants.COLOR_WHITE,
        paddingTop: 10,
        paddingBottom: 10,
        textTransform: "uppercase",
    },
})

export {
    StyleHelpAndSupport,
    StyleTripHelpAndSupport,
    StyleNotification,
    StyleRateAndReview,
    StyleViewCompletedDetail,
    StyleSignIn,
    StyleTermsAndCondition,
    StyleDashboard,
    StyleTruckBooking,
    StyleCurrentTrip,
    StyleViewCurrentTrip,
    StyleViewUpcomingTrip,
    StyleInvoice,
    StyleUpcomingTrip,
}