import { Dimensions, Platform } from 'react-native';

const Constants = {

    BASE_URL :"http://laravel.exceptionaire.tk/mana/staging/public/api/",
    IMAGE_BASE_URL :"http://laravel.exceptionaire.tk/mana/staging/public/",

    //base url for QAP
    //BASE_URL :"http://laravel.exceptionaire.tk/mana/QAP/public/",
    //IMAGE_BASE_URL :"http://laravel.exceptionaire.tk/mana/QAP/public/",

    
    GOOGLE_MAP_KEY:"AIzaSyBEDVKNDyVUzE2ajUXcrpX89ZORifA0cN4",

    EMAIL_REGX:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,

    IMAGE_MAX_SIZE:2000000,
    IMAGE_MAX_SIZE_EXCEED_MESSAGE:"Image should be less than 2 MB.",

    BOOKING_STATUS_NEW:0,
    BOOKING_STATUS_PICKED_UP:1,
    BOOKING_STATUS_DELIVERED:2,
    BOOKING_STATUS_CANCELLED:3,

    BOOKING_CURRENT_STATUS_TRIP_COMPLETED_CARGO_OFFLOADED:1,
    BOOKING_CURRENT_STATUS_UPCOMING:2,
    BOOKING_CURRENT_STATUS_IN_STORAGE:7,
    BOOKING_CURRENT_STATUS_ARRIVED_AT_PICKUP_LOCATION:7,
    BOOKING_CURRENT_STATUS_ON_ROUTE_TO_DESTINATION:9,
    BOOKING_CURRENT_STATUS_ARRIVED_AT_DESTINATION:10,
    BOOKING_CURRENT_STATUS_DRIVER_DISPATCHED:11,
    BOOKING_CURRENT_STATUS_REASON_FOR_DELAY:13,
    
    //fonts
    FONT_SIZE_SMALL: 10,
    FONT_SIZE__MEDIUM: 12,
    FONT_SIZE_LARGE: 14,
    FONT_SIZE_EXTRA_MEDIUM: 18,
    FONT_SIZE_EXTRA_LARGE: 16,

    //colors
    COLOR_GREEN_PROFILE: "rgba(96, 176, 115,1)",
    COLOR_PRIMARY: "rgba(98,180,108,1)",
    COLOR_GREEN: "rgba(131,189,85,1)",
    COLOR_GREEN_LIGHT: "rgba(189,223,162,1)",
    COLOR_GREEN_DARK: "rgba(47,100,58,1)",
    COLOR_ORANGE: "rgba(241,144,15,1)",
    COLOR_WHITE: "rgba(255,255,255,1)",
    COLOR_BLACK: "rgba(112,121,128,1)",
    COLOR_BLACK_LIGHT: "rgba(181,181,181,1)",
    COLOR_GREY: "rgba(240,240,240,1)",
    COLOR_GREY_DARK: "rgba(112,120,122,1)",
    COLOR_GREY_LIGHT: "rgba(172,172,172,1)",
    COLOR_GREY_SHADED: "rgba(64,64,64,0.7)",
    COLOR_RED: "rgba(237,36,22,1)",
    COLOR_FOOTER_GREY: "rgba(112,121,128,1)",

    //button
    SEND_OTP: 'send otp',
    CANCEL: 'cancel',
    SUBMIT: 'submit',
    VERIFY: 'verify',
    BACK: 'back',
    OK: 'ok',
    ACCEPT: 'accept',
    SEND: "send",
    PICKEDUP: "picked up",
    YES: "yes",
    NO: "no",
    Next: 'next',
    Proceed: 'proceed',
    CANCELTRIP: 'cancel trip',
    LiveGeoPin: "Live Geo Pin",
    Set:'Set',
    NextAddress:'Next Address',
    APPLY: 'APPLY',

    //Label
    AlreadyRegistered:'Already \n Registered? Login',
    CurrentTrip: 'current trips',
    Date: 'date',
    Invoice: 'invoice',
    ForgotPassword: 'Forgot Password?',
    Nyc_Syc: 'Nyc-Syc',
    ViewYOurTripDetail: 'view your trip details',
    Message: 'message',
    RateYourTrip: 'Rate your Trip',
    LabelYourTrip: 'Label your Trip',
    ReviewYourTrip: 'Review your Trip',
    PartnerName: "Partner's Name",
    Telephonenumber: 'Telephone Number',
    DateOfPickUp: 'Date of Pick up',
    pickupDate:"Pickup Date",
    dropoffDate:"Dropoff Date",

    PickUpTime: 'Pickup Time',
    DropUpTime: 'Dropoff Time',
    ArrivalTime: 'Arrival Time',
    PickUpLocation: 'Pick up Location',
    frequency: 'Frequency',
    DestinationLocation: 'Destination Location',
    AarrivalDate:'Arrival Date',
    AarrivalTime:'Arrival Time',
    TruckName:'Truck Name',
    TruckRegistrationNo:'Truck Registrtion \n Number',
    TruckInsurance:'Truck Insurance',
    TruckColor:'Truck colour',
    CostOfTruckingService: 'Cost of Trucking Service',
    CargoType: 'Cargo Type',
    CargoDesc: 'Cargo Description',
    CargoHandling: 'Cargo Handling',
    CargoHandlingcost: 'Cargo Handling Cost',
    Service_Frequency:'Service Frequency',
    InsuranceRate:'Insurance Rate',
    Tript_Amount:'Trip Amount',
    Discount:'Discount (%)',
    NumberOfUSer:'Number Of Users',
    
    CargoHandlingCharges: 'Cargo Handling Charges',
    CostOfRecurring: 'Cost of Recurring',
    RecurringRequirement: 'Recurring Requirement',
    Status: 'Status',
    ReviewSentSuccessfully: 'Review Sent Successfully.',
    MobileNumber: 'Mobile Number',
    Password: 'Password',
    SignIn: 'SIGN IN',
    SendOTP:'Send OTP',
    OTPVerifiedSuccessfully:'OTP Verified Successfully',
    RequestSentSuccessfully: 'request sent successfully.',
    SupportSubject: 'support subject',
    NotAMemmberYet: 'Not a Member yet?',
    truckingwarehouse: 'trucking + warehouse',
    TruckBooking: 'truck bookings',
    WarehouseService: 'warehouse services',
    WarehouseId:'Warehouse ID',
    WarehouseType:'Warehouse Type',
    StorageType:'Storage Type',
    CostPerSqm:'Cost per Sqm',
    Trip: "trip",
    CollectMyLoad: 'collect my load',
    TotalBookings: 'total bookings',
    UpcomingTrip: 'Upcoming trips',
    ViewAll: 'view all',
    CurrentStatus: "Current Status",
    EstimatedTimetonextstatus: 'Estimated time to next Status update',
    EstimatedTimeTocmpleteTrip: 'Estimated time to Completion of trip',
    EstimatedDateTocmpleteTrip: 'Estimated Date for Completion of trip',
    DriverName: 'Driver Name',
    ContactNo: 'Contact No',
    Partnername:'Partner Name',
    PartnerName: "Partner's Name",
    BookingId:'Booking ID',
    Status:'Status',
    DriverDEtails:'Driver Details',
    MidPoint1:'Mid Point 1',
    TruckId:'Truck ID',
    LiveGeoPin: "Live Geo Pin",
    ViewMore:'View More',
    WillCauseDelayBecauseOfSomeRoadBloc: 'will cause delay because of some road block',
    Description: 'Description',
    Quantity: 'Quantity',
    Price: 'price',
    Total: 'total',
    Title:'Title',
    RSAIDPassport:'RSA ID/Passport',
    EmailAddress:'Email Address',
    CustomerType:'Customer Type',
    termsAndConditionMsg: 'Please send payment within 30 days of reciving this invoice.there will be 1.5% interest charge per month on late invoices.',
    DownloadInvoice: 'download invoice',
    Cancelleation_msg: 'Cancellation of trip will cause you with the penalty cost.',
    cancellation_msgDelete: "Are you sure you want to delete the trip?",
    TripCanceledSuccessfully: 'Trip Cancelled Successfully.',
    checkYourregisteredEmailIdPeneltyInfo: 'Check your registered email ID for \n penalty information.',
    Duration: 'Duration',
    TelephoneNo: 'Telephone No.',
    StorageType: 'Storage Type',
    WarehoueType: 'Warehouse Type',
    BasicDescription: 'Basic Description',
    CargoInssurance: 'Cargo Insurance',
    DurationStorage:'Duration of Storage',
    ValueOfLload:'Value of Load',
    TotalAmount:'Total Amount',
    Dimension: 'Dimensions',
    VolumetricWeight: 'Volumetric Weight',
    warehouseLocation: 'Warehouse Location',
    Size: 'Size',
    SizeofgoodStored: 'Size of Good Stored',
    CargoDescription: 'Cargo Description',
    CostOfWarehouseServices: 'Cost of Warehouse Services',
    DurationOfWarehouse: 'Duration of Warehouse',
    PhoneNumber: 'Phone Number',
    Location: 'Location',
    ViewMap: 'View Map',
    MyBooking: 'My Booking',
    NewBooking: 'New Booking',
    CollectMyloadOtherServices: 'collect my load other services',
    ReferAFriend: 'refer a friend',
    ShareAppUsing:'Share App Using',
    RateCard: 'rate card',
    MyDiscountVoucher: 'my discount \n vouchers',
    CompanyName: 'Company Name',
    CompanyContactPerson: 'Company Contact Person',
    CompanyContactPosition: 'Company Contact Position',
    CompanyTelephonenumber: 'Company Telephone Number',
    Email: 'Email Id',
    EmailAddress:'Email Address',
    Address: 'Address',
    StreetAddress:'Street Address',
    CompanyAddress:'Company Address',
    StreetAddress:'Street Address',
    SelectCity:'Select City',
    ZipCode:'Zipcode',
    City: 'City',
    SelectProvince: 'Select Province',
    Psssword: 'Password',
    FirstName: 'First Name',
    LastName: 'Last Name',
    Designation: 'Designation',
    RSAIDPassNO:'RSA ID/Passport No.',
    SecondaryNo: 'Secondary No.',
    ChangePassword:'change password',
    CurrentPassword:'Current Password',
    NewPassword:'New Password',
    ConfirmPassword:'Confirm Password',
    Update:'Update',
    ChangeSavedSuccessFully:'changes saved successfully',
    MobileNumber:'Mobile Number',
    KindlyEnteryourRegisteredMobNo:'Kindly enter your registered \n Mobile Number to receive Verification code',
    VerificationCode:'Verification code (OTP)',
    ResendCode:'Resend Code',
    Resend_OTP:'Resend OTP',
    EnterOTP:'Enter OTP',
    EnteredCodeIssuccessFullyVerified:'Entered code is successfully verified',
    SetNewPassword:'set new password',
    NewPassword:'New Password',
    PasswordHasResetSuccessfully:'Password has Reset Successfully.',
    SignUp:'Sign Up',
    AlreadyAMember:'Already a Member?',
    IhaveAReferalCode:'I have a referral code',
    IagreeTo:'I agree to ',
    TermsAndConditions:'Terms & Conditions',
    CancellationPlicy:'Cancellation Policy',
    PaymentPolicy:'Payment Policy',
    PrivacyPolicy:'Privacy Policy',
    Referralcode:'Referral Code',
    PickUpAddress:'Pick Up Address',
    AddressDetails:"Address Details",
    DropOffAddress:'Drop Off Address',
    PickUpDate:'Pick up Date',
    PickUpTime:'Pick up Time',
    Instructions:'Instructions',
    DropOffAddress1:'Drop Off Address 1',
    DropOffAddress2:'Drop Off Address 2',
    Name:'Name',
    ContactNumber:'Contact Number',
    AdditionalContactNumber:'Additional Contact Number',
    ProfileSetUPDoneSuccessFul:"Profile setup done Successfully.",
    YouwillRevicefromourSupportTeam:"You will receive an \n acknowledgement once your profile \n is verified from our Support team ",
    AddServices:'Add Services',
    TotalPrice:'Total Price',
    BookTrip:'Book Trip',
    OtherServices:'Other Services',
    vat:"VAT",
    DiscountVoucher:"Discount Voucher",
    GrandTotal:'Grand Total',
    WelcomeToMana360:'Welcome to Mana360!!',
    RateCard:'Rate Card',
    Amount:'Amount',
    SmallLessthan:'Small(Less than 1 kg)',
    Medium:'Medium(1-2 kgs)',
    Large:'Large(1-3 kgs)',
    Lorem: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',





    //--- udayraj
    SELECT_COUNTRY:"Select Country",
    EXPECTED_PICKUP:"expected pickup",
    PICKUP_DATE_TIME:'PickUp Date & Time',
    TOTAL_PRICE:"total price",
    DRIVER_NAME:"driver name",
    DRIVER_NUMBER:"driver number",
    DRIVER_ALTERNATE_NUMBER:"driver alternate \n number",
    BOOKING_ID:"booking id",
    BOOKING_DATE_TIME:"booking date & time",
    PICKUP_ADDRESS:"Pick Up Address",
    PICKUP_INSTRUCTIONS:"Pick up instructions",
    DROP_OF_ADDRESS:"Drop off Address",
    TRUCK_TYPE:"truck type",
    LOAD_CATEGORY:"Load category",
    OTHER_SERVICES:"Other services",
    TOTAL_PRICE:"Total price",
    CURRENT_STATUS:"Current status",
    SHARE_MY_RIDE:"share my ride",
    CANCEL_ORDER:"cancel order",
    VEHICLE_REG_NUMBER:"Vehicle reg number",
    CANCEL_REASON:"cancel reason",
    REASON:"reason",
};

export default Constants;