/**
 * @author
 * Ritesh Niwane
 * 
 */
export default ApiConstants = {
    example: 'example',
    /* ----------Ritesh------------- */
    //GET EXAMPLE
    users: 'users?',
    //POST EXAMPLE
    login: 'customer/login',

    getVouchers:"customer/getVouchers",
    getDashboardData:"customer/getDashboardData",

    /* ----------Vivek------------- */
    
   

    getNotifications:"customer/getNotifications",
    readNotification:"customer/readNotification",
    removeNotification:"customer/removeNotification",
    getMyProfile:"customer/getMyProfile",
    updateProfilePic:"customer/updateProfilePic",//,
    getMyBookings:"customer/getMyBookings",

    /* ----------EOF Vivek------------- */


    /* ----------Udayraj------------- */
    logout:'customer/logout?',
    provinceList:'customer/stateList',
    cityList:'customer/cityList',
    updateProfilePic:'customer/updateProfilePic',
    getSupportSubject:'customer/getSupportSubject',
    getBookingDetails:'customer/getBookingDetails',
    profileSetup:'customer/profileSetup',
    countryList:'customer/countryList',
    setPassword:'customer/setPassword',
    changePassword:'customer/changePassword',
    updateProfile:"customer/updateProfile",


    /* ------------Mayur----------- */
    forgotPassword:"customer/forgotPassword",
    verifyOTP:"customer/verifyOTP",
    resendOTP:"customer/resendOTP",
    register:"customer/register",
    getotherServices:"customer/getOtherServices",
    getCMLTruckCategory:"customer/getCMLTruckCategory",
    LoadCategoryList:"customer/getCMLLoadCategory",
    userStatus:"customer/userStatus",
    getRateCard:"customer/getRateCard",
    getSupportSubject:"customer/getSupportSubject",
    bookCMLTrip:"customer/bookCMLTrip",

} 